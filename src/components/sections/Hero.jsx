import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';

export default function Hero() {
  const heroRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  // Mouse Parallax (±6px subtle movement on desktop)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-300, 300], [-6, 6]);
  const parallaxY = useTransform(smoothY, [-300, 300], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!heroRef.current || window.matchMedia('(pointer: coarse)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between pt-4 sm:pt-8 pb-8 sm:pb-12 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto overflow-hidden transform-gpu select-none"
    >
      {/* Subtle Oversized Background Typography: "BUILD" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 w-full text-center overflow-hidden transform-gpu">
        <span className="font-heading font-black text-[28vw] text-[#111111]/[0.025] uppercase tracking-tighter leading-none block">
          BUILD
        </span>
      </div>

      {/* Main 2-Column Split: 55/45 Layout */}
      <div className="w-full my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: BRAND & EDITORIAL CONTENT */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left z-10 transform-gpu">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.1em] uppercase text-[#888888] transform-gpu"
          >
            <span>AI</span>
            <span className="text-[#DEDEDA]">•</span>
            <span>AUTOMATION</span>
            <span className="text-[#DEDEDA]">•</span>
            <span>DEVELOPMENT</span>
          </motion.div>

          {/* Main 3-Line Headline with Overflow Mask Reveal */}
          <div className="space-y-0.5 sm:space-y-1">
            
            {/* Line 1: BUILDING */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-[#111111] uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                BUILDING
              </motion.h1>
            </div>

            {/* Line 2: INTELLIGENT (Outlined Accent) */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-stroke-dark uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                INTELLIGENT
              </motion.h1>
            </div>

            {/* Line 3: EXPERIENCES. */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-[#111111] uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                EXPERIENCES.
              </motion.h1>
            </div>

          </div>

          {/* Positioning & Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            className="space-y-3 pt-2 transform-gpu"
          >
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] uppercase tracking-wide">
              AI & AUTOMATION ENGINEER
            </h2>

            <p className="text-sm sm:text-base text-[#666666] font-sans font-light leading-relaxed max-w-[460px]">
              I build AI-powered products, automation systems and digital experiences that turn complex problems into simple, scalable solutions.
            </p>
          </motion.div>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-5 pt-2 transform-gpu"
          >
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2.5 px-6.5 py-3.5 rounded-full bg-[#111111] text-[#F5F5F3] text-sm font-medium hover:bg-[#242424] transition-colors duration-200 group cursor-pointer shadow-sm"
            >
              <span>Let's Work Together</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>

            <button
              onClick={() => scrollToSection('selected-work')}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-[#111111]/80 hover:text-[#111111] transition-colors py-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </motion.div>

          {/* Small Personal Meta Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="pt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono text-[#888888] uppercase tracking-wider transform-gpu"
          >
            <span>Based in India</span>
            <span>•</span>
            <span>Available Worldwide</span>
            <span>•</span>
            <span>© 2026</span>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: ZAID MEMON'S ORIGINAL PORTRAIT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end transform-gpu"
        >
          {/* Mouse Parallax Wrapper */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#E2E2DE] shadow-lg group bg-[#E5E5E2] transform-gpu"
          >
            {/* Zaid Memon Original Photo */}
            <img
              src="/zaid_portrait-opt.jpg"
              alt="Zaid Memon — Full-Stack Developer & Computer Science Student"
              className="w-full h-full object-cover object-[center_20%] grayscale contrast-110 brightness-102 group-hover:scale-[1.02] transition-transform duration-500 ease-out transform-gpu"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 via-transparent to-transparent pointer-events-none" />

            {/* Vertical Detail Text */}
            <div className="absolute bottom-6 left-6 text-[10px] font-mono tracking-widest text-[#F5F5F3]/90 uppercase pointer-events-none">
              ZAID MEMON / L.J. UNIVERSITY
            </div>

            {/* Floating Top Right Detail Badge */}
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-xs border border-white/20 text-[#F5F5F3] flex items-center justify-center pointer-events-none shadow-sm">
              <ArrowUpRight size={14} />
            </div>
          </motion.div>

          {/* Vertical Edge Text: SCROLL TO EXPLORE */}
          <div className="hidden xl:block absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[9px] font-mono tracking-[0.25em] text-[#888888] uppercase pointer-events-none opacity-60">
            SCROLL TO EXPLORE
          </div>

        </motion.div>

      </div>
    </section>
  );
}
