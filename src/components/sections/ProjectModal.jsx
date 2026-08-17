import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import VerixaVisual from '../project-visuals/VerixaVisual';
import ExertiaVisual from '../project-visuals/ExertiaVisual';
import SmartInventoryVisual from '../project-visuals/SmartInventoryVisual';
import SmartGstVisual from '../project-visuals/SmartGstVisual';
import { useCursor } from '../../hooks/useCursor';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.id) {
      case 'verixa':
        return <VerixaVisual />;
      case 'exertia':
        return <ExertiaVisual />;
      case 'smart-inventory':
        return <SmartInventoryVisual />;
      case 'smart-gst-invoice':
        return <SmartGstVisual />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0d10] border border-white/12 rounded-2xl shadow-2xl overflow-y-auto z-10 custom-scrollbar flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#0c0d10]/95 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#D4FF32]/10 border border-[#D4FF32]/30 text-[#D4FF32] font-mono text-xs font-bold">
                  {project.number}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {project.title} — Case Study
                  </h3>
                  <p className="text-xs font-mono text-white/40">{project.category}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                onMouseEnter={() => setCursor('pointer', 'CLOSE')}
                onMouseLeave={resetCursor}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-10">
              {/* Project Hero Banner */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#D4FF32] uppercase">{project.category}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-white/50">YEAR {project.year}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-emerald-400">{project.status}</span>
                </div>

                <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                  {project.title}
                </h1>

                <p className="font-mono text-base sm:text-xl text-[#D4FF32] font-light">
                  {project.tagline}
                </p>

                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* High-Fidelity Visual Asset */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                {renderVisual()}
              </div>

              {/* Problem & Approach Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                    <AlertCircle size={14} />
                    <span>01. The Problem</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4FF32] font-semibold uppercase tracking-wider">
                    <CheckCircle2 size={14} />
                    <span>02. The Approach</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {project.caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
                  <Layers size={14} className="text-[#D4FF32]" />
                  <span>03. System Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#141519] border border-white/6 hover:border-white/12 transition-colors space-y-1.5"
                    >
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-[#D4FF32] font-semibold">{arch.layer}</span>
                        <span className="text-white/40 text-[11px]">{arch.tech}</span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">{arch.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Engineering Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/8 space-y-4">
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    04. Key Capabilities
                  </div>
                  <ul className="space-y-2.5">
                    {project.caseStudy.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                        <span className="text-[#D4FF32] font-mono font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/8 space-y-4">
                  <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                    05. Engineering Challenges & Outcome
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                    <p>
                      <strong className="text-white block font-mono text-xs mb-1 text-white/90">Challenge Encountered:</strong>
                      {project.caseStudy.challenges}
                    </p>
                    <p>
                      <strong className="text-white block font-mono text-xs mb-1 text-[#D4FF32]">Engineering Outcome:</strong>
                      {project.caseStudy.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-3 pt-4 border-t border-white/8">
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  06. Technologies Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links & CTAs */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor('pointer', 'GITHUB')}
                    onMouseLeave={resetCursor}
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-medium flex items-center gap-2 transition-colors border border-white/10 cursor-pointer"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                    <ArrowUpRight size={13} className="text-white/40" />
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#D4FF32] text-black font-mono text-xs font-bold flex items-center gap-2 hover:bg-[#c2f211] transition-colors cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-white/40 px-3 py-2 rounded border border-white/5 bg-white/[0.02]">
                      Repository & Local Builds Active
                    </span>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  Back to projects ↑
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
