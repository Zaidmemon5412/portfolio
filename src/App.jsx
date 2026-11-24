import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameStateProvider } from './context/GameStateContext';
import { CursorProvider } from './context/CursorContext';
import { useGameState } from './hooks/useGameState';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { SECTION_ROUTES, normalizePathname } from './data/seoRoutes';
import { NAVIGATE_EVENT, updateDocumentSeo, scrollToSectionById } from './utils/seoNavigation';

// Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ModeToggle from './components/common/ModeToggle';
import ResumeModal from './components/common/ResumeModal';

// Swiss Editorial Sections
import Hero from './components/sections/Hero';
import SelectedWork from './components/sections/SelectedWork';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

// GTA Mode (Lazy Loaded for optimized code-splitting)
const GtaPortfolio = React.lazy(() => import('./components/gta/GtaPortfolio'));

function EditorialPortfolio() {
  // Activate Lenis inertial smooth scrolling for the editorial layout
  useSmoothScroll();

  useEffect(() => {
    const syncRouteScroll = (pathname, shouldScroll = true) => {
      const cleanPath = normalizePathname(pathname);
      updateDocumentSeo(cleanPath);

      const sectionRoute = SECTION_ROUTES[cleanPath];
      if (shouldScroll && sectionRoute && sectionRoute.path !== '/') {
        window.requestAnimationFrame(() => {
          scrollToSectionById(sectionRoute.sectionId);
        });
      }
    };

    syncRouteScroll(window.location.pathname, true);

    const handlePopState = () => syncRouteScroll(window.location.pathname, true);
    const handleNavigate = (e) => {
      const targetPath = e.detail?.path || window.location.pathname;
      const cleanPath = normalizePathname(targetPath);
      const sectionRoute = SECTION_ROUTES[cleanPath];
      if (sectionRoute) {
        scrollToSectionById(sectionRoute.sectionId);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener(NAVIGATE_EVENT, handleNavigate);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener(NAVIGATE_EVENT, handleNavigate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ECECE9] p-2 sm:p-4 md:p-6 text-[#111111] selection:bg-[#111111] selection:text-[#F5F5F3]">
      <CustomCursor />
      
      {/* Centered Website Container Canvas with Rounded Corners */}
      <div className="max-w-[1536px] mx-auto rounded-[20px] sm:rounded-[28px] border border-[#E2E2DE] bg-[#F5F5F3] paper-noise relative shadow-sm overflow-clip">
        <Navbar />

        <main id="main-content" className="relative z-10">
          <Hero />
          <SelectedWork />
          <Services />
          <Experience />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

function PortfolioRoot() {
  const { viewMode, isResumeModalOpen, closeResumeModal } = useGameState();
  const isEditorial = viewMode === 'editorial';

  return (
    <div className="relative min-h-screen bg-[#ECECE9] text-[#111111] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isEditorial ? (
          <motion.div
            key="editorial-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <CursorProvider>
              <EditorialPortfolio />
            </CursorProvider>
          </motion.div>
        ) : (
          <motion.div
            key="gta-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-screen max-h-screen overflow-hidden"
          >
            <React.Suspense
              fallback={
                <div className="w-full h-screen flex flex-col items-center justify-center bg-[#070709] text-white">
                  <div className="font-gta text-3xl sm:text-5xl text-[#FF007F] animate-pulse tracking-wider gta-pink-glow">
                    LOADING GTA VI EXPERIENCE...
                  </div>
                  <div className="font-mono text-xs text-white/50 mt-2">INITIALIZING VICE CITY HUD & SYNTHESIZER</div>
                </div>
              }
            >
              <GtaPortfolio />
            </React.Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Floating Mode Switcher */}
      <ModeToggle />

      {/* Global Root Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </div>
  );
}

export default function App() {
  return (
    <GameStateProvider>
      <PortfolioRoot />
    </GameStateProvider>
  );
}
