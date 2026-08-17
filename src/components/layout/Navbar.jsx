import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const { timeString } = useAhmedabadTime();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -60 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'WORK', target: 'work' },
    { label: 'ABOUT', target: 'about' },
    { label: 'PROCESS', target: 'process' },
    { label: 'LAB', target: 'lab' },
    { label: 'STACK', target: 'stack' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Left: Minimalist Brand Identifier */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => setCursor('pointer', 'TOP')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <span className="font-display font-black tracking-tight text-sm text-white group-hover:text-[#D4FF32] transition-colors">
              ZAID / 2026
            </span>
            <span className="text-[10px] font-mono text-white/40 hidden sm:inline">
              // BUILDER
            </span>
          </button>

          {/* Center: Live Status Indicator (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/10 text-[11px] font-mono text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
            <span className="text-white/40">Ahmedabad {timeString ? `${timeString} IST` : 'IST'}</span>
            <span className="text-white/20">•</span>
            <span className="text-white/80">Active: <span className="text-[#D4FF32] font-semibold">Verixa</span></span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                onMouseEnter={() => setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="text-xs font-mono tracking-wider text-white/70 hover:text-white transition-colors editorial-link cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Direct Contact Action with Underline Animation */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setCursor('pointer', "LET'S TALK")}
              onMouseLeave={resetCursor}
              className="text-xs font-mono font-bold text-[#D4FF32] hover:text-white uppercase tracking-wider flex items-center gap-1 editorial-link cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/10 text-white/80 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#09090b]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
                INDEX NAVIGATION
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.target)}
                    className="flex items-center justify-between text-left py-2 border-b border-white/5 font-display text-2xl font-bold text-white hover:text-[#D4FF32] transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} className="text-white/40" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Footer Status */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
                  Ahmedabad, IN
                </span>
                <span className="text-[#D4FF32]">Active: Verixa</span>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3.5 bg-[#D4FF32] text-black font-mono font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>HAVE A PROJECT? LET'S TALK</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
