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

      {/* Project Selector List */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2.5 sm:gap-3 max-w-md w-full mb-6"
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
              className={`p-3.5 sm:p-4 rounded-xs cursor-pointer transition-all duration-200 group flex items-center justify-between ${
                isSelected
                  ? 'bg-gradient-to-r from-[#00F0FF]/90 to-[#0088FF]/90 text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] translate-x-2'
                  : 'gta-card hover:border-[#00F0FF]/50 text-white hover:translate-x-1'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center font-gta text-sm font-black ${
                    isSelected ? 'bg-black text-[#00F0FF]' : 'bg-white/10 text-white'
                  }`}
                >
                  {proj.number}
                </div>
                <div>
                  <h3
                    className={`font-gta text-lg sm:text-xl font-black uppercase tracking-wider ${
                      isSelected ? 'text-black' : 'text-white group-hover:text-[#00F0FF]'
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className={`font-mono text-xs ${
                      isSelected ? 'text-black/80 font-semibold' : 'text-white/60'
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

      {/* Action Button: Main Project Link Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3"
      >
        <a
          href={currentProject.githubUrl || "https://github.com/Zaidmemon5412"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playSfx('select')}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00F0FF] to-[#0088FF] text-black font-gta text-lg sm:text-xl font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>VIEW PROJECT DETAILS</span>
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>
      </motion.div>
    </div>
  );
}
