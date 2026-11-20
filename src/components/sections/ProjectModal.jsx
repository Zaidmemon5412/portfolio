import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowUpRight, CheckCircle2, ZoomIn } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '../../data/projects';
import { useCursor } from '../../hooks/useCursor';

export default function ProjectModal({ project, isOpen, onClose, onSelectProject }) {
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const modalScrollRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.__lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.__lenis?.start();
      setFullscreenImage(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.__lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, fullscreenImage]);

  useEffect(() => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  if (!project) return null;

  const projectImages = {
    verixa: '/verixa.png',
    exertia: '/exertia.png',
    veritas: '/veritas.png',
    'smart-inventory': '/smart_inventory.jpg',
    'smart-gst-invoice': '/smart_gst.jpg',
  };

  const caseStudy = project.caseStudy || {};
  const otherProjects = projectsData.filter((p) => p.id !== project.id);
  const currentImgSrc = projectImages[project.id] || '/verixa.png';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (fullscreenImage) {
                setFullscreenImage(false);
              } else {
                onClose();
              }
            }}
            className="fixed inset-0 bg-[#111111]/85 backdrop-blur-md cursor-pointer"
          />

          {/* Full Case Study Modal Container */}
          <motion.div
            ref={modalScrollRef}
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#F5F5F3] border border-[#E2E2DE] rounded-3xl shadow-2xl overflow-y-auto z-10 no-scrollbar flex flex-col text-[#111111]"
          >
            {/* Modal Navigation Top Bar */}
            <div className="sticky top-0 z-20 bg-[#F5F5F3]/95 backdrop-blur-md border-b border-[#E2E2DE] px-6 py-4 flex items-center justify-between">
              <button
                onClick={onClose}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#111111] hover:text-[#555555] transition-colors cursor-pointer group"
              >
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                <span>← Back to Work</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#888888]">
                  {project.number || '01'} / {project.year}
                </span>

                <button
                  onClick={onClose}
                  onMouseEnter={() => setCursor && setCursor('pointer')}
                  onMouseLeave={resetCursor}
                  className="p-2 rounded-full hover:bg-[#E2E2DE] text-[#111111] transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-10 space-y-12">

              {/* Header Info Block */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block">
                  {project.category}
                </span>

                <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase">
                  {project.title}
                </h1>

                <p className="text-base sm:text-xl text-[#555555] font-sans font-light leading-relaxed max-w-3xl">
                  {project.tagline || project.shortDescription}
                </p>

                {/* Metadata Row & Primary Live CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E2DE]">
                  <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#666666]">
                    <div><span className="text-[#888888]">CLIENT / SCOPE:</span> {project.category}</div>
                    <div><span className="text-[#888888]">YEAR:</span> {project.year}</div>
                    <div><span className="text-[#888888]">ROLE:</span> Lead Architect & Developer</div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.status && (
                      <span className="px-3 py-1.5 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[11px] font-mono text-[#555555] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#55D98B]" />
                        <span>{project.status}</span>
                      </span>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#111111] text-[#F5F5F3] text-xs font-mono font-medium hover:bg-[#242424] transition-all flex items-center gap-2 shadow-sm"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View Source on GitHub</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-xs font-mono font-medium text-[#111111] hover:bg-[#E2E2DE] transition-all flex items-center gap-2"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Large Real Visual Container with Click-to-Expand Lightbox */}
              <div
                onClick={() => setFullscreenImage(true)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="relative group cursor-pointer w-full aspect-[16/9] bg-[#0E1017] rounded-2xl overflow-hidden border border-[#E2E2DE] shadow-sm transition-all hover:border-[#CCCCCC]"
              >
                <img
                  src={currentImgSrc}
                  alt={`${project.title} — Real Application Screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                />

                {/* Hover Expand Overlay Hint */}
                <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 bg-[#111111]/90 backdrop-blur-xs text-white text-xs font-mono rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                    <ZoomIn size={14} />
                    <span>Click to Expand Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Overview & Problem / Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E2E2DE]">
                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    THE PROBLEM
                  </h3>
                  <p className="text-sm text-[#555555] font-sans leading-relaxed">
                    {caseStudy.problem || 'Legacy software in this domain lacks real-time telemetry, spatial data integration, and user-friendly interface design, causing severe friction.'}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    THE SOLUTION & APPROACH
                  </h3>
                  <p className="text-sm text-[#555555] font-sans leading-relaxed">
                    {caseStudy.approach || 'Architected a modular full-stack application pairing high-performance APIs with reactive UI state management and automated pipeline ingestion.'}
                  </p>
                </div>
              </div>

              {/* Architecture Layer Matrix */}
              {caseStudy.architecture && (
                <div className="space-y-4 pt-6 border-t border-[#E2E2DE]">
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    SYSTEM ARCHITECTURE
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {caseStudy.architecture.map((arch, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-1.5 shadow-xs">
                        <span className="text-[11px] font-mono text-[#888888] uppercase block">
                          {arch.layer} • {arch.tech}
                        </span>
                        <p className="text-xs text-[#333333] font-sans leading-relaxed">
                          {arch.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DARK FEATURE BLOCK: WHAT MAKES THIS PRODUCT DIFFERENT */}
              <div className="bg-[#242424] text-[#F5F5F3] rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl">
                <span className="text-xs font-mono tracking-widest text-[#999999] uppercase block">
                  HIGHLIGHTS & ENGINEERING EXECUTION
                </span>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F5F5F3] uppercase">
                  WHAT MAKES THIS PRODUCT DIFFERENT
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {project.keyWork?.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#1A1A1A] rounded-xl border border-[#3A3A3A]">
                      <CheckCircle2 size={18} className="text-[#55D98B] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#DDDDDD] font-sans leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Challenges & Technical Outcome */}
              {(caseStudy.challenges || caseStudy.outcome) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {caseStudy.challenges && (
                    <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-2">
                      <span className="text-[11px] font-mono text-[#888888] uppercase tracking-wider block">
                        TECHNICAL CHALLENGE
                      </span>
                      <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                        {caseStudy.challenges}
                      </p>
                    </div>
                  )}
                  {caseStudy.outcome && (
                    <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-2">
                      <span className="text-[11px] font-mono text-[#55D98B] font-semibold uppercase tracking-wider block">
                        ENGINEERING OUTCOME
                      </span>
                      <p className="text-xs sm:text-sm text-[#444444] font-sans leading-relaxed">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Development Status Breakdown */}
              {project.developmentStatus && (
                <div className="space-y-4 pt-6 border-t border-[#E2E2DE]">
                  <h3 className="font-heading font-bold text-lg text-[#111111] uppercase tracking-wide">
                    DEVELOPMENT STATUS & ROADMAP
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-2">
                      <span className="text-[11px] font-mono font-semibold text-[#111111] flex items-center gap-1.5 uppercase">
                        <span className="w-2 h-2 rounded-full bg-[#55D98B]" />
                        Built & Shipped
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#555555]">
                        {project.developmentStatus.built?.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {project.developmentStatus.inProgress?.length > 0 && (
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-2">
                        <span className="text-[11px] font-mono font-semibold text-[#111111] flex items-center gap-1.5 uppercase">
                          <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
                          In Progress
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#555555]">
                          {project.developmentStatus.inProgress.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.developmentStatus.planned?.length > 0 && (
                      <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E2DE] space-y-2">
                        <span className="text-[11px] font-mono font-semibold text-[#888888] flex items-center gap-1.5 uppercase">
                          <span className="w-2 h-2 rounded-full bg-[#CCCCCC]" />
                          Planned Next
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#555555]">
                          {project.developmentStatus.planned.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Technology Stack Tags */}
              <div className="space-y-3 pt-4">
                <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block">
                  TECHNOLOGY & TOOLING
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#FFFFFF] border border-[#E2E2DE] text-xs font-mono text-[#111111] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Explore Other Projects Switcher */}
              {onSelectProject && otherProjects.length > 0 && (
                <div className="pt-8 border-t border-[#E2E2DE] space-y-4">
                  <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block">
                    MORE SELECTED WORK
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {otherProjects.slice(0, 2).map((nextProj) => (
                      <button
                        key={nextProj.id}
                        type="button"
                        onClick={() => onSelectProject(nextProj)}
                        onMouseEnter={() => setCursor && setCursor('pointer')}
                        onMouseLeave={resetCursor}
                        className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E2E2DE] hover:border-[#111111] transition-all text-left flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="text-[10px] font-mono text-[#888888] uppercase block">
                            {nextProj.number} • {nextProj.category}
                          </span>
                          <span className="font-heading font-bold text-base text-[#111111] uppercase mt-0.5 block">
                            {nextProj.title}
                          </span>
                        </div>
                        <ArrowUpRight
                          size={16}
                          className="text-[#888888] group-hover:text-[#111111] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </motion.div>

          {/* Fullscreen High-Res Image Lightbox Modal */}
          <AnimatePresence>
            {fullscreenImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-60 bg-[#000000]/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 cursor-pointer"
                onClick={() => setFullscreenImage(false)}
              >
                {/* Close Button Top Right */}
                <button
                  onClick={() => setFullscreenImage(false)}
                  aria-label="Close Lightbox"
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20 z-10"
                >
                  <X size={22} />
                </button>

                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={currentImgSrc}
                    alt={`${project.title} — Fullscreen View`}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#111111]/90 rounded-full text-xs font-mono text-white border border-white/20">
                    {project.title} — Fullscreen Screenshot (Press ESC or Click Outside to Close)
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
