import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Gamepad2 } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';
import { useGameState } from '../../hooks/useGameState';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const { timeString } = useAhmedabadTime();
  const { setViewMode, playSfx } = useGameState();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element =
      document.getElementById(id) ||
      (id === 'projects' ? document.getElementById('work') : null) ||
      (id === 'skills' ? document.getElementById('stack') : null) ||
      (id === 'education' ? document.getElementById('journey') : null);

    if (!element) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(element, { offset: -60 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'ABOUT', target: 'about' },
    { label: 'SKILLS', target: 'skills' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'BUILDING', target: 'currently-building' },
    { label: 'EDUCATION', target: 'education' },
  ];

  const handleLaunchGta = () => {
    playSfx('select');
    setViewMode('gta');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#08090D]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Left: Minimalist Brand Identifier */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => setCursor('pointer', 'TOP')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          >
            <span className="font-display font-black tracking-tight text-sm text-[#F8FAFC] group-hover:text-[#8B5CF6] transition-colors">
              ZAID / 2026
            </span>
            <span className="text-[10px] font-mono text-[#64748B] hidden sm:inline">
              // BUILDER
            </span>
          </button>

          {/* Center: Live Status Indicator (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#0E1017] border border-white/[0.08] text-[11px] font-mono text-[#94A3B8] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            <span className="text-[#64748B]">Ahmedabad {timeString ? `${timeString} IST` : 'IST'}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#F8FAFC]">Active: <span className="text-[#8B5CF6] font-semibold">Verixa</span></span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                onMouseEnter={() => setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="text-xs font-mono tracking-wider text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            {/* Direct Contact Action */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setCursor('pointer', "LET'S TALK")}
              onMouseLeave={resetCursor}
              className="text-xs font-mono font-bold text-[#8B5CF6] hover:text-[#A78BFA] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>

            {/* GTA VI Theme Launcher in Navbar */}
            <button
              onClick={handleLaunchGta}
              onMouseEnter={() => setCursor('pointer', "GTA VI")}
              onMouseLeave={resetCursor}
              className="px-2.5 py-1 rounded-full bg-[#0E1017] hover:bg-[#8B5CF6]/20 border border-white/[0.1] hover:border-[#8B5CF6] text-xs font-mono text-[#F8FAFC] hover:text-[#8B5CF6] flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              title="Launch Interactive GTA VI Experience"
            >
              <Gamepad2 size={13} className="text-[#8B5CF6]" />
              <span className="font-gta tracking-wider text-[11px]">GTA VI</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleLaunchGta}
              className="p-2 border border-[#8B5CF6]/40 text-[#8B5CF6] text-xs font-mono flex items-center gap-1 bg-[#0E1017] rounded cursor-pointer"
            >
              <Gamepad2 size={14} />
              <span className="font-gta">GTA</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/[0.08] text-[#94A3B8] hover:text-white focus:outline-none cursor-pointer rounded"
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
            className="fixed inset-0 z-30 bg-[#08090D]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between md:hidden border-b border-white/[0.08]"
          >
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-[#64748B] uppercase tracking-widest border-b border-white/[0.08] pb-2 flex items-center justify-between">
                <span>INDEX NAVIGATION</span>
                <span className="text-[#8B5CF6]">ZAID MEMON</span>
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.target)}
                    className="flex items-center justify-between text-left py-2 border-b border-white/5 font-display text-2xl font-bold text-[#F8FAFC] hover:text-[#8B5CF6] transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={18} className="text-[#64748B]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Footer Status & GTA Switcher */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3">
              <button
                onClick={handleLaunchGta}
                className="w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-gta tracking-wider text-base uppercase font-black flex items-center justify-center gap-2 cursor-pointer rounded-xs shadow-[0_0_15px_rgba(139,92,246,0.4)]"
              >
                <Gamepad2 size={18} />
                <span>LAUNCH GTA VI EXPERIENCE</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 bg-[#8B5CF6] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 cursor-pointer rounded-xs"
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
