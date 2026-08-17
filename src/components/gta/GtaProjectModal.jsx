import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useGameState } from '../../hooks/useGameState';

function GithubIcon({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function GtaProjectModal() {
  const { activeModalProject, setActiveModalProject, playSfx } = useGameState();

  useEffect(() => {
    if (activeModalProject) {
      playSfx('modal_open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalProject, playSfx]);

  if (!activeModalProject) return null;

  const { title, tagline, category, year, caseStudy, githubUrl, technologies } = activeModalProject;

  const handleClose = () => {
    playSfx('modal_close');
    setActiveModalProject(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0d12] border border-white/20 rounded shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/60">
            <div>
              <span className="font-gta text-xs text-[#00F0FF] tracking-widest uppercase font-bold">
                MISSION BRIEFING // {category}
              </span>
              <h2 className="font-gta text-3xl sm:text-4xl md:text-5xl text-white font-black uppercase tracking-wide gta-title-stroke">
                {title}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-white/70 mt-0.5">
                {tagline}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="w-9 h-9 rounded bg-white/10 hover:bg-[#FF007F] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body content scrollable */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-white/90">
            {/* Tech Stack Badges */}
            <div>
              <span className="block font-gta text-xs text-white/50 tracking-wider uppercase mb-2">
                DEPLOYED ARSENAL & TECH
              </span>
              <div className="flex flex-wrap gap-2">
                {technologies?.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => playSfx('card_hover')}
                    className="px-2.5 py-1 bg-white/5 hover:bg-[#00F0FF]/15 border border-white/15 hover:border-[#00F0FF]/40 text-xs font-mono text-[#00F0FF] rounded-xs font-medium transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem & Approach */}
            {caseStudy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onMouseEnter={() => playSfx('card_hover')}
                  className="p-4 bg-black/40 border border-white/10 hover:border-[#FF007F]/40 rounded-xs transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#FF007F] font-gta text-sm font-bold uppercase mb-1.5">
                    <ShieldAlert size={16} />
                    <span>The Challenge</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    {caseStudy.problem}
                  </p>
                </div>

                <div
                  onMouseEnter={() => playSfx('card_hover')}
                  className="p-4 bg-black/40 border border-white/10 hover:border-[#00E676]/40 rounded-xs transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#00E676] font-gta text-sm font-bold uppercase mb-1.5">
                    <CheckCircle2 size={16} />
                    <span>The Solution</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>
            )}

            {/* Key Features */}
            {caseStudy?.keyFeatures && (
              <div>
                <span className="block font-gta text-xs text-white/50 tracking-wider uppercase mb-2.5">
                  MISSION OBJECTIVES & CAPABILITIES
                </span>
                <ul className="space-y-2">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => playSfx('card_hover')}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-mono text-white/90 hover:text-[#00F0FF] transition-colors"
                    >
                      <span className="text-[#00F0FF] font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-white/10 bg-black/60 flex items-center justify-between">
            <span className="text-xs font-mono text-white/40">
              YEAR: {year} • STATUS: VERIFIED
            </span>

            <div className="flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSfx('select')}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-[#00F0FF] hover:text-black text-white font-mono text-xs font-bold rounded-xs transition-colors cursor-pointer"
                >
                  <GithubIcon size={14} />
                  <span>REPOSITORY</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
