import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';
import { navigateToPath } from '../../utils/seoNavigation';

export default function Hero() {
  const heroRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();
  const { openResumeModal } = useGameState();

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

  const handleRouteLink = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateToPath(path);
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
            <span>REACT</span>
            <span className="text-[#DEDEDA]">•</span>
            <span>PYTHON & DJANGO</span>
            <span className="text-[#DEDEDA]">•</span>
            <span>FULL-STACK</span>
          </motion.div>

          {/* Main 3-Line Headline inside a single semantic <h1> */}
          <h1 className="space-y-0.5 sm:space-y-1">
            <span className="sr-only">
              Zaid Memon — Full-Stack Developer &amp; Software Engineer:{' '}
            </span>

            {/* Line 1: BUILDING */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="block font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-[#111111] uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                BUILDING
              </motion.span>
            </span>

            {/* Line 2: INTELLIGENT (Outlined Accent) */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="block font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-stroke-dark uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                INTELLIGENT
              </motion.span>
            </span>

            {/* Line 3: EXPERIENCES. */}
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="block font-heading font-black text-5xl sm:text-7xl lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-[#111111] uppercase tracking-tighter leading-[0.88] select-none transform-gpu"
              >
                EXPERIENCES.
              </motion.span>
            </span>
          </h1>

          {/* Positioning & Description */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
            className="space-y-3 pt-2 transform-gpu"
          >
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#111111] uppercase tracking-wide">
              ZAID MEMON — FULL-STACK DEVELOPER &amp; SOFTWARE ENGINEER
            </h2>

            <p className="text-sm sm:text-base text-[#666666] font-sans font-light leading-relaxed max-w-[460px]">
              I build scalable web applications, robust Django/Python backends, PostgreSQL databases and clean React interfaces that turn complex data into simple, reliable software.
            </p>
          </motion.div>

          {/* CTA Actions (With Prominent Resume Button) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4 pt-2 transform-gpu"
          >
            <a
              href="/contact"
              onClick={(e) => handleRouteLink(e, '/contact')}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2.5 px-6.5 py-3.5 rounded-full bg-[#111111] text-[#F5F5F3] text-sm font-medium hover:bg-[#242424] transition-colors duration-200 group cursor-pointer shadow-sm"
            >
              <span>Let's Work Together</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>

            <button
              type="button"
              onClick={openResumeModal}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#E2E2DE] bg-[#FFFFFF] text-[#111111] text-xs font-mono font-semibold hover:bg-[#E5E5E2] hover:border-[#CCCCCC] transition-all duration-200 cursor-pointer shadow-xs group"
            >
              <FileText size={15} className="text-[#111111]" />
              <span>Resume PDF</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            <a
              href="/work"
              onClick={(e) => handleRouteLink(e, '/work')}
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-[#111111]/80 hover:text-[#111111] transition-colors py-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Flagship Live Proof Pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38, ease: 'easeOut' }}
            className="pt-1 transform-gpu"
          >
            <a
              href="https://verixa-phi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E2E2DE] hover:border-[#111111] transition-colors shadow-2xs group"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D98B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55D98B]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#666666]">
                FLAGSHIP LIVE:
              </span>
              <span className="font-mono text-xs font-semibold text-[#111111]">
                verixa-phi.vercel.app
              </span>
              <ArrowUpRight size={13} className="text-[#111111] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Small Personal Meta & Quick Metrics Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="pt-6 border-t border-[#E2E2DE]/80 space-y-3 transform-gpu"
          >
            <div className="grid grid-cols-3 gap-4 max-w-[460px]">
              <div>
                <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block leading-none">
                  05+
                </span>
                <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-1 block">
                  Architected Systems
                </span>
              </div>
              <div>
                <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block leading-none">
                  04
                </span>
                <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-1 block">
                  Verified Certificates
                </span>
              </div>
              <div>
                <span className="font-heading font-black text-xl sm:text-2xl text-[#111111] block leading-none">
                  2026
                </span>
                <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider mt-1 block">
                  B.Tech CSE • L.J.U
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-[#888888] uppercase tracking-wider pt-1">
              <span>Ahmedabad, India</span>
              <span>•</span>
              <span>Available Worldwide</span>
              <span>•</span>
              <span>React / Django / PostgreSQL</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: ZAID MEMON'S STUDIO PORTRAIT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end transform-gpu"
        >
          {/* Mouse Parallax Wrapper */}
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            onClick={() => navigateToPath('/about')}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#E2E2DE] shadow-lg group bg-[#181A1F] transform-gpu cursor-pointer"
          >
            {/* Zaid Memon Studio Portrait */}
            <img
              src="/zaid_portrait-opt.jpg?v=2"
              alt="Zaid Memon — Full-Stack Developer & Computer Science Student"
              width="460"
              height="613"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out transform-gpu"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/65 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Overlay Details */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#55D98B] uppercase block">
                  FULL-STACK ENGINEER
                </span>
                <span className="text-xs font-mono tracking-widest text-[#F5F5F3] uppercase font-semibold">
                  ZAID MEMON / L.J. UNIVERSITY
                </span>
              </div>
            </div>

            {/* Floating Top Right Detail Badge */}
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-xs border border-white/20 text-[#F5F5F3] flex items-center justify-center pointer-events-none shadow-sm group-hover:bg-[#111111] transition-colors">
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
