import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User } from 'lucide-react';
import { SCREENS } from '../../../data/gameConstants';
import { useGameState } from '../../../hooks/useGameState';
import { journeyData } from '../../../data/journey';

export default function ExperienceScreen() {
  const { navigateTo, playSfx } = useGameState();

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: EXPERIENCE Journey */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          EXPERIENCE
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#A855F7] gta-pink-glow -mt-2 block pl-2 transform -rotate-2" style={{ textShadow: '0 0 15px rgba(168,85,247,0.8)' }}>
          Journey
        </span>
      </motion.div>

      {/* Timeline Stream */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative pl-6 sm:pl-8 border-l-2 border-[#A855F7]/40 flex flex-col gap-5 sm:gap-6 max-w-xl w-full my-3"
      >
        {journeyData.map((item) => (
          <div
            key={item.year}
            onMouseEnter={() => playSfx('card_hover')}
            className="relative group cursor-default"
          >
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#A855F7] border-2 border-white shadow-[0_0_10px_#A855F7] group-hover:scale-125 transition-transform" />

            {/* Year Badge */}
            <span className="font-gta text-xs sm:text-sm font-black tracking-widest text-[#A855F7] uppercase block mb-0.5">
              {item.year} — {item.year === 'NOW' ? 'PRESENT' : 'MILESTONE'}
            </span>

            {/* Title */}
            <h3 className="font-gta text-lg sm:text-xl md:text-2xl text-white font-black uppercase tracking-wider group-hover:text-[#A855F7] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-xs sm:text-sm text-white/70 font-light leading-relaxed mt-1">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-black/60 border border-white/10 text-[10px] font-mono text-white/60 rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3 mt-4"
      >
        <button
          type="button"
          onClick={() => {
            playSfx('select');
            navigateTo(SCREENS.ABOUT);
          }}
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/85 hover:bg-black border border-white/25 hover:border-[#FF9900] text-white font-gta text-sm sm:text-base font-bold tracking-wider uppercase rounded-xs transition-all shadow-lg cursor-pointer"
        >
          <User size={15} className="text-[#FF9900]" />
          <span>ABOUT ME</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playSfx('select');
            navigateTo(SCREENS.SKILLS);
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#A855F7] to-[#8022E0] text-white font-gta text-base sm:text-lg font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>VIEW SKILLS</span>
          <ChevronRight size={18} strokeWidth={3} />
        </button>
      </motion.div>
    </div>
  );
}
