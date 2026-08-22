import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '../../data/projects';
import VerixaVisual from '../project-visuals/VerixaVisual';
import ExertiaVisual from '../project-visuals/ExertiaVisual';
import VeritasVisual from '../project-visuals/VeritasVisual';
import SmartInventoryVisual from '../project-visuals/SmartInventoryVisual';
import SmartGstVisual from '../project-visuals/SmartGstVisual';
import ProjectModal from './ProjectModal';
import { useCursor } from '../../hooks/useCursor';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { resetCursor } = useCursor();

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
    resetCursor();
  };

  const renderVisual = (id) => {
    switch (id) {
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

  const getStatusBadge = (status) => {
    if (status.toLowerCase().includes('completed')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[11px] font-mono rounded-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
          COMPLETED
        </span>
      );
    }
    if (status.toLowerCase().includes('active')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 text-[#A78BFA] text-[11px] font-mono rounded-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
          ACTIVE DEV
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/15 text-[#94A3B8] text-[11px] font-mono rounded-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
        IN PROGRESS
      </span>
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-24 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">04</span>
            <span>/</span>
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            SELECTED WORK
          </h2>
        </div>

        <div className="max-w-md space-y-2 text-xs font-mono text-[#94A3B8]">
          <p>
            Practical software applications demonstrating real backend architecture, database modeling, and performant frontend engineering.
          </p>
          <div className="flex items-center gap-2 text-[#64748B]">
            <span className="text-[#8B5CF6] font-bold">[ 5 CORE BUILDS ]</span>
            <span>•</span>
            <span>NO FAKE METRICS OR PLACEHOLDERS</span>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-24 sm:space-y-32">
        {projectsData.map((project, idx) => {
          const devStatus = project.developmentStatus || { built: [], inProgress: [], planned: [] };

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 sm:p-7 lg:p-10 bg-[#0E1017] border border-white/[0.08] hover:border-white/[0.16] transition-colors rounded-xs space-y-6 sm:space-y-8"
            >
              {/* Card Top Index Line */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 sm:pb-4 gap-2 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[#8B5CF6] font-bold text-base">{project.number}</span>
                  <span className="text-white/20">—</span>
                  <span className="text-[#F8FAFC] tracking-wider uppercase font-bold">{project.title}</span>
                  <span className="text-[#64748B] hidden sm:inline">({project.category})</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#64748B] text-[11px]">YEAR {project.year}</span>
                  {getStatusBadge(project.status)}
                </div>
              </div>

              {/* Card Main Grid: Left Details & Right High-Density Visual */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Problem, Key Work, Tech Stack & CTAs */}
                <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-mono text-[#A78BFA] mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Key Work Points (What Was Actually Built) */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest">
                      KEY IMPLEMENTATION HIGHLIGHTS
                    </div>
                    <ul className="space-y-2 text-xs font-mono text-[#F8FAFC]/85">
                      {project.keyWork.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[#8B5CF6] font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Status Indicator Chips: Built vs In Progress vs Planned */}
                  {(devStatus.built.length > 0 || devStatus.inProgress.length > 0) && (
                    <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-2 text-[10px] font-mono">
                      {devStatus.built.length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE] rounded-xs">
                          <CheckCircle2 size={11} />
                          <span>{devStatus.built.length} Built Features</span>
                        </span>
                      )}
                      {devStatus.inProgress.length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#A78BFA] rounded-xs">
                          <Clock size={11} />
                          <span>{devStatus.inProgress.length} In Progress</span>
                        </span>
                      )}
                      {devStatus.planned.length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/10 text-[#64748B] rounded-xs">
                          <Sparkles size={11} />
                          <span>{devStatus.planned.length} Planned</span>
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest">
                      TECHNOLOGY STACK
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xs bg-[#08090D] border border-white/[0.06] text-[#94A3B8] text-[11px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(project)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-mono text-xs font-bold rounded-xs transition-colors cursor-pointer shadow-md shadow-[#8B5CF6]/20"
                    >
                      <BookOpen size={14} />
                      <span>Case Study Deep-Dive</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#131520] hover:bg-[#1A1D2D] border border-white/[0.08] text-[#F8FAFC] font-mono text-xs rounded-xs transition-colors cursor-pointer"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                      <ArrowUpRight size={12} className="text-[#64748B]" />
                    </a>

                    {project.hasLiveDemo && project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 border border-[#22D3EE]/30 text-[#22D3EE] font-mono text-xs font-bold rounded-xs transition-colors cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Architecture Preview */}
                <div className="lg:col-span-6 rounded-xs overflow-hidden border border-white/[0.08] bg-[#08090D] flex items-center justify-center">
                  {renderVisual(project.id)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
