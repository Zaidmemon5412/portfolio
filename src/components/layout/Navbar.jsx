import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { setCursor, resetCursor } = useCursor();

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

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const targetMap = {
      work: 'selected-work',
      services: 'services',
      experience: 'experience',
      about: 'about',
      contact: 'contact'
    };

    const targetId = targetMap[id] || id;
    const element = document.getElementById(targetId);

    if (!element) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -80 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Work', target: 'work' },
    { label: 'Services', target: 'services' },
    { label: 'Experience', target: 'experience' },
    { label: 'About', target: 'about' },
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
      <div className="flex items-center justify-between text-xs tracking-tight bg-[#F7F7F5]/90 backdrop-blur-xs py-2 px-4 rounded-full border border-[#E2E2DE]/60 shadow-2xs">
        
        {/* LEFT: Availability Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#55D98B] shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs tracking-wider uppercase text-[#111111] font-medium">
            AVAILABLE FOR NEW PROJECTS
          </span>
        </div>

        {/* CENTER: Refined Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.target)}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="text-xs font-sans text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* RIGHT: Resume PDF & Black Pill CTA Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#111111] text-xs font-mono font-medium hover:bg-[#E5E5E2] transition-all cursor-pointer shadow-2xs"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#111111] text-[#F5F5F3] text-xs font-medium hover:bg-[#242424] transition-all cursor-pointer shadow-xs"
          >
            <span>Let's Talk</span>
            <span className="text-[11px]">→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-1.5 text-[#111111]"
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
            className="md:hidden mt-3 p-4 bg-[#FFFFFF] border border-[#E2E2DE] rounded-xl shadow-lg flex flex-col gap-3 z-50 relative"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-left text-sm font-medium text-[#111111] py-1 border-b border-[#E2E2DE]"
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded-full border border-[#E2E2DE] text-[#111111] text-xs font-mono text-center flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-2 rounded-full bg-[#111111] text-white text-xs font-medium text-center"
            >
              Let's Talk →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
