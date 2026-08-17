import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';
import ResumeModal from '../common/ResumeModal';

export default function Hero() {
  const containerRef = useRef(null);
  const { timeString } = useAhmedabadTime();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax shifts for background typography and portrait
  const yBgText1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yBgText2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacityPortrait = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -40 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER 0: Oversized Environment Background Typography (Cropped & Flowing)
      ========================================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 flex flex-col justify-between py-12 opacity-80">
        {/* Row 1: Massive Running Track */}
        <motion.div
          style={{ y: yBgText1 }}
          className="whitespace-nowrap font-display font-black text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] leading-none tracking-tighter text-white/[0.035] -translate-x-12 select-none"
        >
          BUILD • SYSTEMS • CODE • PRODUCTS • DATA • ARCHITECTURE
        </motion.div>

        {/* Row 2: Secondary Technical Stream */}
        <motion.div
          style={{ y: yBgText2 }}
          className="whitespace-nowrap font-mono font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight text-white/[0.025] translate-x-8 select-none"
        >
          REACT // DJANGO // POSTGRES // PYTHON // WEKA // ML // SHADER
        </motion.div>

        {/* Row 3: Action Stream */}
        <div className="whitespace-nowrap font-display font-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tighter text-white/[0.03] -translate-x-20 select-none">
          IDEA TO REALITY • SHIP SHIP SHIP • EXPERIMENT • SOLVE
        </div>
      </div>

      {/* =========================================================================
          LAYER 1: Top Identity & Location Line
      ========================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-white/10 pb-4 text-xs font-mono text-white/50 z-20"
      >
        <div>
          <span className="text-white/40 block text-[10px]">INDEX // NO.</span>
          <span className="text-[#D4FF32] font-bold">ZM / 2026.01</span>
        </div>

        <div>
          <span className="text-white/40 block text-[10px]">ROLE // DISCIPLINE</span>
          <span className="text-white font-medium">Developer · Builder · CS</span>
        </div>

        <div className="hidden md:block">
          <span className="text-white/40 block text-[10px]">LOCATION // TIMEZONE</span>
          <span className="text-white font-medium">Ahmedabad, IN {timeString ? `• ${timeString} IST` : ''}</span>
        </div>

        <div className="text-right md:text-right">
          <span className="text-white/40 block text-[10px]">STATUS</span>
          <span className="text-white font-medium">Building → <span className="text-[#D4FF32]">Verixa</span></span>
        </div>
      </motion.div>

      {/* =========================================================================
          LAYER 2 & 3: Asymmetric Centerpiece (Typography + Portrait Silhouette)
      ========================================================================== */}
      <div className="relative my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        {/* Left Typographic Anchor (Span 7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Massive Display Title */}
            <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[11.8rem] leading-[0.82] tracking-tighter text-[#EDEDEC] uppercase">
              ZAID<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/40">
                MEMON
              </span>
            </h1>
          </motion.div>

          {/* Core Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#D4FF32]" />
              <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-snug">
                I BUILD THINGS THAT MOVE FROM IDEA TO REALITY.
              </p>
            </div>

            <p className="font-mono text-xs sm:text-sm text-white/60 font-light leading-relaxed pl-11">
              Computer Science student at L.J. University and builder exploring the real-world intersection of frontend engineering, transactional backend architecture, spatial registries, and applied ML.
            </p>
          </motion.div>
        </div>

        {/* Right Foreground Subject: Editorial Studio Portrait (Span 5) */}
        <motion.div
          style={{ y: yPortrait, opacity: opacityPortrait }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Portrait Container with Editorial Vignette Mask */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[3/4] overflow-hidden border border-white/10 bg-[#09090b]">
            <img
              src="/zaid_portrait.jpg"
              alt="Zaid Memon — Editorial Portrait"
              className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 filter transition-transform duration-700 hover:scale-[1.02]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />

            {/* Inset Metadata Tag on Portrait */}
            <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/15 text-[10px] font-mono text-white/80">
              ZAID MEMON // AHMEDABAD
            </div>

            {/* Subtle bottom coordinate watermark */}
            <div className="absolute bottom-4 right-4 z-20 text-[9px] font-mono text-white/40 tracking-widest uppercase">
              23.02° N, 72.57° E
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          LAYER 4: Bottom Editorial Footer & Direct CTAs
      ========================================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 z-20"
      >
        {/* Editorial Action Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <MagneticButton
            strength={0.2}
            onClick={() => handleScrollTo('work')}
            cursorText="EXPLORE"
            cursorType="project"
          >
            <button className="px-6 py-3 bg-[#D4FF32] text-black font-mono font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#c2f211] transition-colors group cursor-pointer">
              <span>EXPLORE WORK</span>
              <ArrowDown size={14} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </MagneticButton>

          <button
            onClick={() => setIsResumeOpen(true)}
            className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
          >
            <FileText size={13} className="text-[#D4FF32]" />
            <span>RESUME / CV</span>
          </button>

          <MagneticButton
            strength={0.15}
            onClick={() => handleScrollTo('contact')}
            cursorText="LET'S TALK"
            cursorType="pointer"
          >
            <button className="text-xs font-mono text-white/80 hover:text-white uppercase tracking-wider flex items-center gap-1.5 editorial-link cursor-pointer">
              <span>LET'S TALK</span>
              <ArrowUpRight size={13} className="text-[#D4FF32]" />
            </button>
          </MagneticButton>
        </div>

        {/* Bottom Technical Index Coordinates */}
        <div className="flex items-center gap-6 sm:gap-8 text-xs font-mono text-white/40">
          <div>
            <span className="text-white font-bold block text-sm">04</span>
            <span className="text-[10px] uppercase tracking-wider">PROJECTS</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10" />
          <div>
            <span className="text-white font-bold block text-sm">05</span>
            <span className="text-[10px] uppercase tracking-wider">LAB EXPERIMENTS</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10" />
          <div>
            <span className="text-[#D4FF32] font-bold block text-sm">B.TECH</span>
            <span className="text-[10px] uppercase tracking-wider">LJIET / GUJARAT</span>
          </div>
        </div>
      </motion.div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
