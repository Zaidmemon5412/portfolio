import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameStateProvider } from './context/GameStateContext';
import { CursorProvider } from './context/CursorContext';
import { useGameState } from './hooks/useGameState';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ModeToggle from './components/common/ModeToggle';
import ResumeModal from './components/common/ResumeModal';

// Editorial Mode Sections
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import SelectedWork from './components/sections/SelectedWork';
import CurrentlyBuilding from './components/sections/CurrentlyBuilding';
import TechStack from './components/sections/TechStack';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';

// GTA Mode (Lazy Loaded for optimized code-splitting)
const GtaPortfolio = React.lazy(() => import('./components/gta/GtaPortfolio'));

function EditorialPortfolio() {
  // Activate Lenis inertial smooth scrolling for the editorial layout
  useSmoothScroll();

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F8FAFC] selection:bg-[#8B5CF6]/30 selection:text-white">
      <CustomCursor />
      <Navbar />

      <main id="main-content" className="relative z-10">
        <Hero />
        <Intro />
        <TechStack />
        <SelectedWork />
        <CurrentlyBuilding />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function PortfolioRoot() {
  const { viewMode, isResumeModalOpen, closeResumeModal } = useGameState();
  const isEditorial = viewMode === 'editorial';

  return (
    <div className="relative min-h-screen bg-[#070709] text-white overflow-x-hidden">
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

      {/* Global Root Resume Viewer Modal (Works for both Professional & GTA modes) */}
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
