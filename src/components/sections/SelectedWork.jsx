import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Lock, ExternalLink, CheckCircle2, Terminal } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { CONTACT_INFO } from '../../data/certificates';
import ProjectModal from './ProjectModal';
import { useCursor } from '../../hooks/useCursor';

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { setCursor, resetCursor } = useCursor();

  const filters = [
    { id: 'ALL', label: 'ALL BUILDS (05)' },
    { id: 'WEB', label: 'FULL-STACK & WEB' },
    { id: 'DATA', label: 'DATA & ML' },
    { id: 'JAVA', label: 'JAVA & DESKTOP' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'WEB') return ['verixa', 'exertia', 'veritas'].includes(proj.id);
    if (activeFilter === 'DATA') return ['verixa', 'veritas', 'smart-inventory'].includes(proj.id);
    if (activeFilter === 'JAVA') return ['smart-inventory', 'smart-gst-invoice'].includes(proj.id);
    return true;
  });

  const flagshipProject = filteredProjects.find((p) => p.isFlagship);
  const gridProjects = filteredProjects.filter((p) => !p.isFlagship);

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

  const projectAddressLabels = {
    verixa: 'https://verixa-phi.vercel.app',
    exertia: 'exertia://workspace/telemetry',
    veritas: 'veritas://nlp/civic-clusters',
    'smart-inventory': 'desktop://java-se/smart-inventory',
    'smart-gst-invoice': 'desktop://java-se/gst-invoice',
  };

  return (
    <section id="selected-work" className="py-20 md:py-32 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-14 gap-6">
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

        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className={`px-3.5 py-2 rounded-full text-xs font-mono transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-[#111111] text-[#F5F5F3] border-[#111111]'
                    : 'bg-[#FFFFFF] text-[#555555] border-[#E2E2DE] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {f.label}
              </button>
            );
          })}

          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-[#111111] hover:bg-[#ECECE9] transition-colors group cursor-pointer"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>

      {/* Flagship Live Product Spotlight Card */}
      {flagshipProject && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-[#1E1E1E] bg-[#141519] text-[#F5F5F3] p-6 sm:p-8 lg:p-10 shadow-xl mb-12 md:mb-16 overflow-hidden transform-gpu"
        >
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D98B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#55D98B]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#55D98B] font-semibold">
                FLAGSHIP LIVE DEPLOYMENT • /{flagshipProject.number}
              </span>
            </div>

            <a
              href={flagshipProject.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-[11px] font-mono text-[#E4E4E7] transition-colors group"
            >
              <Lock size={11} className="text-[#55D98B]" />
              <span>{flagshipProject.liveDomain || 'verixa-phi.vercel.app'}</span>
              <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Main 12-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info & Dual CTAs */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#94A3B8] block">
                  {flagshipProject.category} • {flagshipProject.year}
                </span>
                <h3 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
                  {flagshipProject.title}
                </h3>
                <p className="text-base sm:text-lg text-[#D4D4D8] font-sans font-light">
                  {flagshipProject.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed">
                {flagshipProject.shortDescription}
              </p>

              {/* Live Feature Checklist */}
              {flagshipProject.liveHighlights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 pt-1">
                  {flagshipProject.liveHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-xs text-[#E4E4E7] font-sans">
                      <CheckCircle2 size={14} className="text-[#55D98B] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {flagshipProject.technologies?.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-[#E4E4E7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={flagshipProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor && setCursor('pointer')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#55D98B] hover:bg-[#43C779] text-[#0B0C10] font-mono text-xs font-bold transition-colors shadow-lg cursor-pointer"
                >
                  <span>Launch Live App</span>
                  <ExternalLink size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => handleOpenModal(flagshipProject)}
                  onMouseEnter={() => setCursor && setCursor('pointer')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  <span>Read Case Study →</span>
                </button>
              </div>
            </div>

            {/* Right Browser Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0B0C10] shadow-2xl group">
                {/* Browser Top Chrome Bar */}
                <div className="w-full bg-[#181A24] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                  </div>

                  <a
                    href={flagshipProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor && setCursor('pointer')}
                    onMouseLeave={resetCursor}
                    className="flex-1 max-w-[300px] bg-[#0B0C10] border border-white/[0.1] hover:border-[#55D98B]/60 rounded-md px-3 py-1 text-[11px] font-mono text-[#E4E4E7] flex items-center gap-1.5 justify-center truncate transition-colors"
                  >
                    <Lock size={10} className="text-[#55D98B] shrink-0" />
                    <span className="truncate">{flagshipProject.demoUrl}</span>
                  </a>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#55D98B] font-semibold">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55D98B] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#55D98B]" />
                    </span>
                    <span className="hidden sm:inline uppercase">LIVE</span>
                  </div>
                </div>

                {/* Clickable Screenshot Launching Live Site */}
                <a
                  href={flagshipProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor && setCursor('project', 'OPEN LIVE APP ↗')}
                  onMouseLeave={resetCursor}
                  className="block relative aspect-[16/10] bg-[#08090D] overflow-hidden cursor-pointer"
                >
                  <img
                    src={projectImages[flagshipProject.id] || '/verixa.png'}
                    alt={`${flagshipProject.title} — Live Production Application`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] transform-gpu"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-[#55D98B] text-[#0B0C10] text-xs font-mono font-bold flex items-center gap-2 shadow-xl">
                      <span>Open Live Deployment ({flagshipProject.liveDomain || 'verixa-phi.vercel.app'})</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2-Column Editorial Grid with Project Application Windows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
        {gridProjects.map((project, index) => (
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
            {/* Authentic Application Window Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#E2E2DE] shadow-sm mb-6 bg-[#0E1017] transition-all duration-300 group-hover:border-[#CCCCCC] group-hover:shadow-md transform-gpu">
              
              {/* Application Window Top Chrome Bar */}
              <div className="w-full bg-[#181A24] border-b border-white/[0.08] px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                {/* Red, Yellow, Green Window Control Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* Architecture / Local Path Address Bar */}
                <div className="flex-1 max-w-[280px] bg-[#0E1017] border border-white/[0.08] rounded-md px-3 py-1 text-[11px] font-mono text-[#94A3B8] flex items-center gap-1.5 justify-center truncate">
                  <Terminal size={10} className="text-[#94A3B8] shrink-0" />
                  <span className="truncate">{projectAddressLabels[project.id] || `project://${project.id}`}</span>
                </div>

                {/* Status Dot */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#94A3B8]">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === 'In Progress' ? 'bg-[#FFB800]' : 'bg-[#94A3B8]'
                    }`}
                  />
                  <span className="hidden sm:inline uppercase">{project.status || 'BUILT'}</span>
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
              <div className="space-y-2.5 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#111111]">
                      /{project.number}
                    </span>
                    <span className="text-xs text-[#DEDEDA]">•</span>
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#666666]">{project.year}</span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#111111] group-hover:text-[#444444] transition-colors duration-200 flex items-center gap-2 group-hover:translate-x-1.5 transform-gpu">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={22}
                    className="transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-200 text-[#111111]"
                  />
                </h3>

                <p className="text-sm text-[#555555] font-sans font-light line-clamp-2 leading-relaxed max-w-xl">
                  {project.shortDescription}
                </p>

                {/* Scannable Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies?.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#E2E2DE] text-[11px] font-mono text-[#555555]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
