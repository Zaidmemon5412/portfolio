import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { useGameState } from '../../../hooks/useGameState';
import { projectsData } from '../../../data/projects';

export default function ProjectsScreen() {
  const {
    selectedProjectIndex,
    setSelectedProjectIndex,
    setActiveModalProject,
    playSfx,
  } = useGameState();

  const currentProject = projectsData[selectedProjectIndex] || projectsData[0];

  const projectImages = {
    verixa: '/verixa.png',
    exertia: '/exertia.png',
    veritas: '/veritas.png',
    'smart-inventory': '/smart_inventory.jpg',
    'smart-gst-invoice': '/smart_gst.jpg',
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: PROJECTS Showcase */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          PROJECTS
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#00F0FF] gta-cyan-glow -mt-2 block pl-2 transform -rotate-2">
          Showcase
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-5xl w-full mb-6">
        {/* Left: Project Selector List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 w-full"
        >
          {projectsData.map((proj, idx) => {
            const isSelected = selectedProjectIndex === idx;

            return (
              <div
                key={proj.id}
                onMouseEnter={() => {
                  playSfx('hover');
                  setSelectedProjectIndex(idx);
                }}
                onClick={() => {
                  playSfx('select');
                  setSelectedProjectIndex(idx);
                  setActiveModalProject(proj);
                }}
                className={`p-3.5 sm:p-4 rounded-xs cursor-pointer transition-all duration-200 group flex items-center justify-between ${isSelected
                    ? 'bg-gradient-to-r from-[#00F0FF]/90 to-[#0088FF]/90 text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] translate-x-2'
                    : 'gta-card hover:border-[#00F0FF]/50 text-white hover:translate-x-1'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center font-gta text-sm font-black ${isSelected ? 'bg-black text-[#00F0FF]' : 'bg-white/10 text-white'
                      }`}
                  >
                    {proj.number}
                  </div>
                  <div>
                    <h3
                      className={`font-gta text-lg sm:text-xl font-black uppercase tracking-wider ${isSelected ? 'text-black' : 'text-white group-hover:text-[#00F0FF]'
                        }`}
                    >
                      {proj.title}
                    </h3>
                    <p
                      className={`font-mono text-xs ${isSelected ? 'text-black/80 font-semibold' : 'text-white/60'
                        }`}
                    >
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className={isSelected ? 'text-black translate-x-1 transition-transform' : 'text-white/40'}
                />
              </div>
            );
          })}
        </motion.div>

        {/* Right: Active Mission Dossier Live Preview (Desktop) */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          onClick={() => {
            playSfx('select');
            setActiveModalProject(currentProject);
          }}
          className="hidden lg:flex lg:col-span-6 flex-col gta-card rounded-sm overflow-hidden border border-[#00F0FF]/40 cursor-pointer group"
        >
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden border-b border-white/10">
            <img
              src={projectImages[currentProject.id] || '/verixa.png'}
              alt={currentProject.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-[#00F0FF]/50 text-[#00F0FF] font-mono text-[10px] font-bold uppercase">
              MISSION #{currentProject.number} • {currentProject.status}
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-gta text-2xl text-white font-black tracking-wide uppercase">
                {currentProject.title}
              </span>
              <span className="font-mono text-xs text-[#00F0FF]">
                {currentProject.year}
              </span>
            </div>
            <p className="font-sans text-xs text-white/75 leading-relaxed line-clamp-2">
              {currentProject.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentProject.technologies?.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/10 border border-white/15 text-[10px] font-mono text-[#00F0FF]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Button: Open Mission Briefing or GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3"
      >
        <button
          type="button"
          onClick={() => {
            playSfx('select');
            setActiveModalProject(currentProject);
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00F0FF] to-[#0088FF] text-black font-gta text-lg sm:text-xl font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>OPEN MISSION DOSSIER</span>
          <ChevronRight size={18} strokeWidth={3} />
        </button>

        <a
          href={currentProject.githubUrl || "https://github.com/Zaidmemon5412"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playSfx('select')}
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/80 hover:bg-black border border-white/25 hover:border-[#00F0FF] text-white font-gta text-base sm:text-lg font-bold tracking-wider uppercase rounded-xs transition-all cursor-pointer"
        >
          <span>GITHUB REPO</span>
          <ArrowUpRight size={17} strokeWidth={2.5} />
        </a>
      </motion.div>
    </div>
  );
}
