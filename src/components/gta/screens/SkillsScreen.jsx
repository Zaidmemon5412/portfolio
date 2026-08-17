import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SCREENS } from '../../../data/gameConstants';
import { useGameState } from '../../../hooks/useGameState';

export default function SkillsScreen() {
  const { navigateTo, playSfx } = useGameState();

  const skills = [
    { name: 'REACT / FRONTEND', level: 95 },
    { name: 'JAVASCRIPT / ES6+', level: 92 },
    { name: 'DJANGO / PYTHON', level: 88 },
    { name: 'POSTGRESQL / SQL', level: 85 },
    { name: 'JAVA / DESKTOP', level: 82 },
    { name: 'DATA & MACHINE LEARNING', level: 78 },
    { name: 'UI / UX ARCHITECTURE', level: 90 },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: SKILLS Unlocked */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          SKILLS
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#00D2FF] gta-cyan-glow -mt-2 block pl-2 transform -rotate-2">
          Unlocked
        </span>
      </motion.div>

      {/* RPG Skill Stat Bars */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-3 sm:gap-3.5 max-w-lg w-full mb-8"
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            onMouseEnter={() => playSfx('card_hover')}
            className="flex items-center gap-3 sm:gap-4 group cursor-default"
          >
            {/* Skill Name */}
            <span className="w-36 sm:w-52 font-gta text-xs sm:text-base md:text-lg text-white/90 font-bold uppercase tracking-wider truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-[#00D2FF] transition-colors">
              {skill.name}
            </span>

            {/* Progress Bar Container */}
            <div className="flex-1 h-3.5 sm:h-4 bg-black/80 border border-white/20 group-hover:border-[#00D2FF]/50 rounded-xs overflow-hidden p-[2px] backdrop-blur-sm transition-colors">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[#FFB800] via-[#FF8800] to-[#00D2FF] rounded-xs shadow-[0_0_8px_rgba(0,210,255,0.7)]"
              />
            </div>

            {/* Percentage Number */}
            <span className="font-mono text-xs sm:text-sm font-bold text-[#00D2FF] w-10 text-right drop-shadow-[0_0_6px_rgba(0,210,255,0.8)]">
              {skill.level}%
            </span>
          </div>
        ))}
      </motion.div>

      {/* Action Button: VIEW PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3"
      >
        <button
          type="button"
          onClick={() => {
            playSfx('select');
            navigateTo(SCREENS.PROJECTS);
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00D2FF] to-[#0088FF] text-black font-gta text-base sm:text-lg font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(0,210,255,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>VIEW PROJECTS</span>
          <ChevronRight size={18} strokeWidth={3} />
        </button>
      </motion.div>
    </div>
  );
}
