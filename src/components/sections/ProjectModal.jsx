import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Layers, ArrowUpRight, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import VerixaVisual from '../project-visuals/VerixaVisual';
import ExertiaVisual from '../project-visuals/ExertiaVisual';
import VeritasVisual from '../project-visuals/VeritasVisual';
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
      case 'veritas':
        return <VeritasVisual />;
      case 'smart-inventory':
        return <SmartInventoryVisual />;
      case 'smart-gst-invoice':
        return <SmartGstVisual />;
      default:
        return null;
    }
  };

  const devStatus = project.developmentStatus || { built: [], inProgress: [], planned: [] };

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
            className="fixed inset-0 bg-[#08090D]/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#0E1017] border border-white/[0.1] rounded-2xl shadow-2xl overflow-y-auto z-10 custom-scrollbar flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#0E1017]/95 backdrop-blur-lg border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] font-mono text-xs font-bold">
                  {project.number}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#F8FAFC]">
                    {project.title} — Case Study
                  </h3>
                  <p className="text-xs font-mono text-[#64748B]">{project.category}</p>
                </div>
              </div>

              <button
                onClick={onClose}
                onMouseEnter={() => setCursor('pointer', 'CLOSE')}
                onMouseLeave={resetCursor}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/[0.08] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
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
                  <span className="text-[#8B5CF6] uppercase">{project.category}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-[#64748B]">YEAR {project.year}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-[#22D3EE]">{project.status}</span>
                </div>

                <h1 className="font-display font-black text-3xl sm:text-5xl text-[#F8FAFC] tracking-tight">
                  {project.title}
                </h1>

                <p className="font-mono text-base sm:text-xl text-[#A78BFA] font-light">
                  {project.tagline}
                </p>

                <p className="text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* High-Fidelity Visual Asset */}
              <div className="rounded-xl overflow-hidden border border-white/[0.08]">
                {renderVisual()}
              </div>

              {/* Development Status Triad: Built, In Progress, Planned */}
              {(devStatus.built.length > 0 || devStatus.inProgress.length > 0 || devStatus.planned.length > 0) && (
                <div className="space-y-4">
                  <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-[#8B5CF6]" />
                    <span>01. Implementation Status & Feature Breakdown</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Built */}
                    {devStatus.built.length > 0 && (
                      <div className="p-4 bg-[#131520] border border-white/[0.06] rounded-xs space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#22D3EE] font-bold">
                          <CheckCircle2 size={13} />
                          <span>BUILT / VERIFIED</span>
                        </div>
                        <ul className="space-y-1.5 text-xs font-mono text-[#F8FAFC]/80">
                          {devStatus.built.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#22D3EE] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* In Progress */}
                    {devStatus.inProgress.length > 0 && (
                      <div className="p-4 bg-[#131520] border border-white/[0.06] rounded-xs space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#A78BFA] font-bold">
                          <Clock size={13} />
                          <span>IN PROGRESS</span>
                        </div>
                        <ul className="space-y-1.5 text-xs font-mono text-[#94A3B8]">
                          {devStatus.inProgress.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#A78BFA] mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Planned */}
                    {devStatus.planned.length > 0 && (
                      <div className="p-4 bg-[#131520] border border-white/[0.06] rounded-xs space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B] font-bold">
                          <Sparkles size={13} />
                          <span>PLANNED</span>
                        </div>
                        <ul className="space-y-1.5 text-xs font-mono text-[#64748B]">
                          {devStatus.planned.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Problem & Approach Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#131520] border border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                    <AlertCircle size={14} />
                    <span>02. The Problem</span>
                  </div>
                  <p className="text-sm text-[#F8FAFC]/85 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-[#131520] border border-white/[0.06] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold uppercase tracking-wider">
                    <CheckCircle2 size={14} />
                    <span>03. The Approach</span>
                  </div>
                  <p className="text-sm text-[#F8FAFC]/85 leading-relaxed">
                    {project.caseStudy.approach}
                  </p>
                </div>
              </div>

              {/* Architecture Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] uppercase tracking-widest">
                  <Layers size={14} className="text-[#8B5CF6]" />
                  <span>04. System Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-[#131520] border border-white/[0.06] hover:border-[#8B5CF6]/30 transition-colors space-y-1.5"
                    >
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-[#8B5CF6] font-semibold">{arch.layer}</span>
                        <span className="text-[#64748B] text-[11px]">{arch.tech}</span>
                      </div>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{arch.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
                  05. Key Capabilities
                </div>
                <div className="p-6 rounded-xl bg-[#131520] border border-white/[0.06]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F8FAFC]/80">
                        <span className="text-[#8B5CF6] font-mono font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest">
                  06. Technologies Applied
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-[#131520] border border-white/[0.08] text-[#94A3B8] font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links & CTAs */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor('pointer', 'GITHUB')}
                    onMouseLeave={resetCursor}
                    className="px-5 py-2.5 rounded-full bg-[#131520] hover:bg-[#1A1D2D] text-[#F8FAFC] font-mono text-xs font-medium flex items-center gap-2 transition-colors border border-white/[0.08] cursor-pointer"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                    <ArrowUpRight size={13} className="text-[#64748B]" />
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#8B5CF6] text-white font-mono text-xs font-bold flex items-center gap-2 hover:bg-[#7C3AED] transition-colors cursor-pointer shadow-md shadow-[#8B5CF6]/25"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-[#64748B] px-3 py-2 rounded border border-white/[0.06] bg-[#131520]">
                      Repository & Local Builds Active
                    </span>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-mono text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
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
