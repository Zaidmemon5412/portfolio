import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { useCursor } from '../../hooks/useCursor';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';
import ResumeModal from '../common/ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { timeString } = useAhmedabadTime();
  const { setCursor, resetCursor } = useCursor();

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects') || document.getElementById('work');
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -60 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreSkills = ['React', 'Python', 'Django', 'PostgreSQL', 'JavaScript', 'Tailwind CSS'];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-32 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient Aurora Radial Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(139,92,246,0.14),rgba(34,211,238,0.04),transparent_70%)] pointer-events-none -z-10" />

      {/* Top Meta Status Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 text-xs font-mono text-[#94A3B8]"
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
          </span>
          <span className="text-[#F8FAFC] font-medium tracking-wide text-[11px] sm:text-xs">
            Available for Developer Roles
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#64748B] text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-[#94A3B8]">
            <MapPin size={12} className="text-[#8B5CF6]" />
            Ahmedabad, India {timeString ? `• ${timeString} IST` : ''}
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline text-[#94A3B8]">B.Tech CSE</span>
        </div>
      </motion.div>

      {/* Main Hero Content Area */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
        {/* Left Column: Name, Position, Message, Skills & CTAs */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-7">
          {/* Position Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full text-xs font-mono text-[#A78BFA]"
          >
            <Sparkles size={13} className="text-[#22D3EE]" />
            <span className="font-semibold tracking-wide text-[11px] sm:text-xs">
              Frontend / Full-Stack Developer
            </span>
          </motion.div>

          {/* Name Display with Aurora Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <h1 className="font-heading font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.0] uppercase aurora-gradient-text break-words">
              Zaid Memon
            </h1>
          </motion.div>

          {/* Supporting Message */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-[#94A3B8] font-sans font-light leading-relaxed max-w-2xl"
          >
            Computer Science student focused on building practical web applications using{' '}
            <strong className="text-[#F8FAFC] font-semibold">React</strong>,{' '}
            <strong className="text-[#F8FAFC] font-semibold">Python</strong>,{' '}
            <strong className="text-[#F8FAFC] font-semibold">Django</strong> and{' '}
            <strong className="text-[#F8FAFC] font-semibold">PostgreSQL</strong>.
          </motion.p>

          {/* Core Technologies Pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-1.5 sm:gap-2 pt-1"
          >
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 sm:px-3 py-1 bg-[#0E1017] border border-white/[0.08] text-[#94A3B8] font-mono text-[11px] sm:text-xs rounded-xs hover:border-[#8B5CF6]/50 hover:text-[#F8FAFC] hover:bg-[#131520] transition-colors"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* 3 Clear Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-2"
          >
            {/* CTA 1: View Projects */}
            <button
              onClick={handleScrollToProjects}
              onMouseEnter={() => setCursor && setCursor('pointer', 'PROJECTS')}
              onMouseLeave={() => resetCursor && resetCursor()}
              className="px-5 sm:px-6 py-3 sm:py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-mono font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#8B5CF6]/25 hover:shadow-[#8B5CF6]/40 rounded-xs cursor-pointer group"
              aria-label="View Projects Section"
            >
              <span>View Projects</span>
              <ArrowDown size={15} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* CTA 2: GitHub */}
            <a
              href="https://github.com/Zaidmemon5412"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor && setCursor('pointer', 'GITHUB')}
              onMouseLeave={() => resetCursor && resetCursor()}
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#0E1017] hover:bg-[#151824] text-[#F8FAFC] border border-white/[0.12] hover:border-[#8B5CF6]/50 font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all rounded-xs cursor-pointer group shadow-sm"
              aria-label="Visit Zaid's GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ArrowUpRight size={13} className="text-[#64748B] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* CTA 3: Resume */}
            <button
              onClick={() => setIsResumeOpen(true)}
              onMouseEnter={() => setCursor && setCursor('pointer', 'RESUME')}
              onMouseLeave={() => resetCursor && resetCursor()}
              className="px-4 sm:px-5 py-3 sm:py-3.5 bg-[#0E1017] hover:bg-[#151824] text-[#F8FAFC] border border-white/[0.12] hover:border-[#22D3EE]/50 font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all rounded-xs cursor-pointer shadow-sm"
              aria-label="Open Resume Preview"
            >
              <FileText size={15} className="text-[#22D3EE]" />
              <span>Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[300px] aspect-[4/5] bg-[#0E1017] border border-white/[0.1] hover:border-[#8B5CF6]/40 rounded-sm overflow-hidden p-2 group shadow-2xl transition-all duration-300">
            <div className="w-full h-full relative overflow-hidden bg-[#131520] rounded-xs">
              <img
                src="/zaid_portrait.jpg"
                alt="Zaid Memon — Developer & Computer Science Student"
                className="w-full h-full object-cover object-[center_20%] contrast-[1.02] brightness-[1.0] group-hover:scale-105 transition-transform duration-500 rounded-xs"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#F8FAFC] z-10">
                <span className="font-semibold drop-shadow-md">Zaid Memon</span>
                <span className="text-[#22D3EE] text-[10px] font-medium drop-shadow-md">L.J. University</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Meta Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#64748B]"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
          <span>React</span>
          <span>•</span>
          <span>Python</span>
          <span>•</span>
          <span>Django</span>
          <span>•</span>
          <span>PostgreSQL</span>
          <span>•</span>
          <span>Java</span>
        </div>

        <button
          onClick={handleScrollToProjects}
          className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 cursor-pointer text-[11px] sm:text-xs"
        >
          <span>Explore Selected Work</span>
          <ArrowDown size={13} />
        </button>
      </motion.div>

      {/* Integrated Resume Modal Preview */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </section>
  );
}
