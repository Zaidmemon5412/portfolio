import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projectsData } from '../../data/projects';
import VerixaVisual from '../project-visuals/VerixaVisual';
import ExertiaVisual from '../project-visuals/ExertiaVisual';
import SmartInventoryVisual from '../project-visuals/SmartInventoryVisual';
import SmartGstVisual from '../project-visuals/SmartGstVisual';
import ProjectModal from './ProjectModal';
import { useCursor } from '../../hooks/useCursor';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
    resetCursor();
  };

  const verixa = projectsData.find(p => p.id === 'verixa');
  const exertia = projectsData.find(p => p.id === 'exertia');
  const smartInventory = projectsData.find(p => p.id === 'smart-inventory');
  const smartGst = projectsData.find(p => p.id === 'smart-gst-invoice');

  return (
    <section id="work" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 sm:mb-28 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="text-[#D4FF32]">02</span>
            <span>/</span>
            <span>FEATURED PRODUCTION WORK</span>
          </div>
          <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight uppercase">
            SELECTED<br />WORK
          </h2>
        </div>

        <div className="max-w-md space-y-2 text-xs font-mono text-white/50">
          <p>
            Real software systems built with attention to transactional integrity, spatial data, and clean architecture.
          </p>
          <div className="flex items-center gap-4 text-white/70 pt-1">
            <span>[04 COMPLETED & ACTIVE BUILDS]</span>
          </div>
        </div>
      </div>

      <div className="space-y-32 sm:space-y-44">
        {/* =========================================================================
            PROJECT 01: VERIXA (Massive Full-Width Case Study Cover)
        ========================================================================== */}
        {verixa && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group/verixa space-y-6"
          >
            {/* Top Index Line */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#D4FF32] font-bold text-base">01</span>
                <span className="text-white/20">—</span>
                <span className="text-white tracking-wider uppercase font-bold">{verixa.title}</span>
                <span className="text-white/40 hidden sm:inline">({verixa.category})</span>
              </div>

              <div className="flex items-center gap-3 text-white/40">
                <span>YEAR {verixa.year}</span>
                <span>•</span>
                <span className="text-[#D4FF32] font-medium">{verixa.status}</span>
              </div>
            </div>

            {/* Asymmetric Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8">
                <h3 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight group-hover/verixa:text-[#D4FF32] transition-colors">
                  {verixa.title}
                </h3>
                <p className="font-heading text-lg sm:text-2xl text-white/70 mt-2 font-medium">
                  {verixa.tagline}
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right space-y-3">
                <p className="text-xs sm:text-sm text-white/60 font-mono leading-relaxed">
                  {verixa.shortDescription}
                </p>
              </div>
            </div>

            {/* Dominant Full-Width Visual Case Study Cover */}
            <div
              onClick={() => handleOpenModal(verixa)}
              onMouseEnter={() => setCursor('project', 'VIEW →')}
              onMouseLeave={resetCursor}
              className="cursor-pointer border border-white/10 hover:border-[#D4FF32]/60 transition-colors relative"
            >
              <VerixaVisual />
            </div>

            {/* Bottom Actions & Tech Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {verixa.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/70 font-mono text-[11px]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleOpenModal(verixa)}
                  onMouseEnter={() => setCursor('pointer', 'READ')}
                  onMouseLeave={resetCursor}
                  className="px-5 py-2 bg-[#D4FF32] text-black font-mono font-bold text-xs flex items-center gap-2 hover:bg-[#c2f211] transition-colors cursor-pointer"
                >
                  <span>Open Deep-Dive Case Study</span>
                  <ArrowUpRight size={14} />
                </button>

                <a
                  href={verixa.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Verixa GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            PROJECT 02: EXERTIA (Asymmetric Horizontal Split)
        ========================================================================== */}
        {exertia && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group/exertia space-y-6"
          >
            {/* Top Index Line */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#D4FF32] font-bold text-base">02</span>
                <span className="text-white/20">—</span>
                <span className="text-white tracking-wider uppercase font-bold">{exertia.title}</span>
                <span className="text-white/40 hidden sm:inline">({exertia.category})</span>
              </div>

              <div className="flex items-center gap-3 text-white/40">
                <span>YEAR {exertia.year}</span>
                <span>•</span>
                <span className="text-white/80">{exertia.status}</span>
              </div>
            </div>

            {/* Split Composition: Left Editorial, Right Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Typography */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight group-hover/exertia:text-[#D4FF32] transition-colors">
                    {exertia.title}
                  </h3>
                  <p className="font-heading text-lg sm:text-xl text-white/70 mt-2 font-medium">
                    {exertia.tagline}
                  </p>
                </div>

                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {exertia.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exertia.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/8 text-white/80 font-mono text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => handleOpenModal(exertia)}
                    onMouseEnter={() => setCursor('pointer', 'READ')}
                    onMouseLeave={resetCursor}
                    className="px-5 py-2.5 bg-white text-black font-mono font-bold text-xs flex items-center gap-2 hover:bg-[#D4FF32] transition-colors cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={exertia.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                    aria-label="Exertia GitHub"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual */}
              <div
                onClick={() => handleOpenModal(exertia)}
                onMouseEnter={() => setCursor('project', 'VIEW →')}
                onMouseLeave={resetCursor}
                className="lg:col-span-7 cursor-pointer border border-white/10 hover:border-[#D4FF32]/60 transition-colors"
              >
                <ExertiaVisual />
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            PROJECT 03 & 04: Industrial 2-Column Editorial Duo
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 pt-8 border-t border-white/10">
          {/* Project 03: Smart Inventory */}
          {smartInventory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group/inventory space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#D4FF32] font-bold">03 // DATA & AUTOMATION</span>
                  <span className="text-white/40">{smartInventory.year}</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white group-hover/inventory:text-[#D4FF32] transition-colors">
                    {smartInventory.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-white/60 mt-1">
                    {smartInventory.tagline}
                  </p>
                </div>

                <div
                  onClick={() => handleOpenModal(smartInventory)}
                  onMouseEnter={() => setCursor('project', 'VIEW →')}
                  onMouseLeave={resetCursor}
                  className="cursor-pointer border border-white/10 hover:border-[#D4FF32]/60 transition-colors"
                >
                  <SmartInventoryVisual />
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {smartInventory.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {smartInventory.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 text-white/70 font-mono text-[10px] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={() => handleOpenModal(smartInventory)}
                  className="font-mono text-xs font-bold text-white hover:text-[#D4FF32] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href={smartInventory.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <GithubIcon size={15} />
                </a>
              </div>
            </motion.div>
          )}

          {/* Project 04: Smart GST Invoice */}
          {smartGst && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group/gst space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <span className="text-[#D4FF32] font-bold">04 // AUTOMATION & DESKTOP</span>
                  <span className="text-white/40">{smartGst.year}</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl text-white group-hover/gst:text-[#D4FF32] transition-colors">
                    {smartGst.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-white/60 mt-1">
                    {smartGst.tagline}
                  </p>
                </div>

                <div
                  onClick={() => handleOpenModal(smartGst)}
                  onMouseEnter={() => setCursor('project', 'VIEW →')}
                  onMouseLeave={resetCursor}
                  className="cursor-pointer border border-white/10 hover:border-[#D4FF32]/60 transition-colors"
                >
                  <SmartGstVisual />
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {smartGst.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {smartGst.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 text-white/70 font-mono text-[10px] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={() => handleOpenModal(smartGst)}
                  className="font-mono text-xs font-bold text-white hover:text-[#D4FF32] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight size={13} />
                </button>

                <a
                  href={smartGst.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  <GithubIcon size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
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
