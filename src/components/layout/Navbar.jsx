import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';
import { navigateToPath } from '../../utils/seoNavigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const lastScrollY = useRef(0);
  const { setCursor, resetCursor } = useCursor();
  const { openResumeModal } = useGameState();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down after 100px, reveal on scroll up
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'selected-work', 'services', 'experience', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateToPath(path);
  };

  const navLinks = [
    { label: 'Work', path: '/work', sectionId: 'selected-work' },
    { label: 'Services', path: '/services', sectionId: 'services' },
    { label: 'Experience', path: '/experience', sectionId: 'experience' },
    { label: 'About', path: '/about', sectionId: 'about' },
    { label: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -80,
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-6 pb-2 px-6 sm:px-12 md:px-16 transform-gpu sticky top-0 z-50 pointer-events-auto"
    >
      <div className="flex items-center justify-between text-xs tracking-tight bg-[#F7F7F5]/90 backdrop-blur-md py-2 px-4 rounded-full border border-[#E2E2DE]/80 shadow-xs">
        
        {/* LEFT: Brand Identity & Availability Indicator */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          onMouseEnter={() => setCursor && setCursor('pointer')}
          onMouseLeave={resetCursor}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-[#111111] uppercase">
            ZAID MEMON
          </span>
          <span className="text-[#DEDEDA] hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D98B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D98B]" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-[#555555] group-hover:text-[#111111] transition-colors font-medium hidden xs:inline">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </span>
        </a>

        {/* CENTER: Refined Minimal Nav Links with Active State */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#F5F5F3] font-medium'
                    : 'text-[#666666] hover:text-[#111111] hover:bg-[#ECECE9]/70'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: Resume PDF & Black Pill CTA Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={openResumeModal}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#111111] text-xs font-mono font-medium hover:bg-[#E5E5E2] transition-all cursor-pointer shadow-2xs"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#111111] text-[#F5F5F3] text-xs font-medium hover:bg-[#242424] transition-all cursor-pointer shadow-xs"
          >
            <span>Let's Talk</span>
            <span className="text-[11px]">→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-1.5 text-[#111111]"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 p-4 bg-[#FFFFFF] border border-[#E2E2DE] rounded-xl shadow-lg flex flex-col gap-3 z-50 relative"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-left text-sm font-medium text-[#111111] py-1 border-b border-[#E2E2DE]"
              >
                {link.label}
              </a>
            ))}
            
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openResumeModal();
              }}
              className="w-full py-2 rounded-full border border-[#E2E2DE] text-[#111111] text-xs font-mono text-center flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>View Resume (PDF)</span>
            </button>

            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, '/contact')}
              className="w-full py-2 rounded-full bg-[#111111] text-white text-xs font-medium text-center"
            >
              Let's Talk →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
