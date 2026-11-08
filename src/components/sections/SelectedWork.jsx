import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Lock } from 'lucide-react';
import { projectsData } from '../../data/projects';
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

  const projectImages = {
    verixa: '/verixa.png',
    exertia: '/exertia.png',
    veritas: '/veritas.png',
    'smart-inventory': '/smart_inventory.jpg',
    'smart-gst-invoice': '/smart_gst.jpg',
  };

  const projectUrls = {
    verixa: 'https://verixa.dev/dashboard/spatial-intelligence',
    exertia: 'https://exertia.dev/workspace/telemetry',
    veritas: 'https://veritas.dev/verify/certificate-hash',
    'smart-inventory': 'https://inventory.dev/supply-chain/analytics',
    'smart-gst-invoice': 'https://smartgst.dev/invoice/generator',
  };

  return (
    <section id="selected-work" className="py-20 md:py-32 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-20 gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block mb-3">
            01 / PORTFOLIO
          </span>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase transform-gpu"
            >
              /SELECTED WORK
            </motion.h2>
          </div>
        </div>

        <button
          onClick={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#111111] hover:text-[#555555] transition-colors group cursor-pointer"
        >
          <span>VIEW ALL WORK</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-200" />
        </button>
      </div>

      {/* 2-Column Editorial Grid with Authentic Project Application Windows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => handleOpenModal(project)}
            onMouseEnter={() => setCursor && setCursor('project', 'VIEW PROJECT →')}
            onMouseLeave={resetCursor}
            className="group cursor-pointer flex flex-col transform-gpu"
          >
            {/* Authentic Browser Window Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#E2E2DE] shadow-sm mb-6 bg-[#0E1017] transition-all duration-300 group-hover:border-[#CCCCCC] group-hover:shadow-md transform-gpu">
              
              {/* Authentic Browser Window Top Chrome Bar */}
              <div className="w-full bg-[#181A24] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                {/* Red, Yellow, Green Window Control Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* URL Address Bar */}
                <div className="flex-1 max-w-[280px] bg-[#0E1017] border border-white/[0.08] rounded-md px-3 py-1 text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5 justify-center truncate">
                  <Lock size={10} className="text-[#55D98B] shrink-0" />
                  <span className="truncate">{projectUrls[project.id] || `https://${project.id}.dev`}</span>
                </div>

                {/* Status Dot */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55D98B]" />
                  <span className="hidden sm:inline uppercase">{project.status || 'LIVE'}</span>
                </div>
              </div>

              {/* Real Project Image Container */}
              <div className="w-full aspect-[16/10] bg-[#08090D] overflow-hidden">
                <img
                  src={projectImages[project.id] || '/verixa.png'}
                  alt={`${project.title} — Real Application Screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] transform-gpu"
                />
              </div>

              {/* Hover Badge */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-4 py-2 bg-[#111111] text-[#F5F5F3] text-xs font-mono rounded-full flex items-center gap-2 shadow-lg z-10">
                <span>View Case Study</span>
                <ArrowUpRight size={14} />
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#DEDEDA]">•</span>
                  <span className="text-xs font-mono text-[#666666]">{project.year}</span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#111111] group-hover:text-[#444444] transition-colors duration-200 flex items-center gap-2 group-hover:translate-x-1.5">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={22}
                    className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 text-[#111111]"
                  />
                </h3>

                <p className="text-sm text-[#555555] font-sans font-light line-clamp-2 leading-relaxed max-w-xl">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={modalOpen}
        onSelectProject={(nextProj) => setActiveProject(nextProj)}
        onClose={() => {
          setModalOpen(false);
          setActiveProject(null);
        }}
      />
    </section>
  );
}
