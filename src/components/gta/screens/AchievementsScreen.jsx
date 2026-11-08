import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { certificatesData } from '../../../data/certificates';
import { useGameState } from '../../../hooks/useGameState';

export default function AchievementsScreen() {
  const { playSfx } = useGameState();
  const achievements = certificatesData;

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: ACHIEVEMENTS Unlocked */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          ACHIEVEMENTS
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#FF007F] gta-pink-glow -mt-2 block pl-2 transform -rotate-2">
          Certificates Unlocked
        </span>
      </motion.div>

      {/* Verified Coursera Certificate Cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2.5 sm:gap-3 max-w-lg w-full mb-6"
      >
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playSfx('card_hover')}
              onClick={() => playSfx('achievement')}
              className="gta-card p-3.5 sm:p-4 rounded-xs flex items-center justify-between gap-3.5 hover:border-[#FF007F]/60 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}22`, border: `1px solid ${item.color}66` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <div className="min-w-0">
                  <span
                    className="block font-gta text-[10px] sm:text-[11px] tracking-wider uppercase font-bold"
                    style={{ color: item.color }}
                  >
                    {item.issuer}
                  </span>
                  <h3 className="font-gta text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-wide group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center text-white/40 group-hover:text-white transition-colors flex-shrink-0 pl-2">
                <ExternalLink size={16} />
              </div>
            </a>
          );
        })}
      </motion.div>

      {/* Action Button: GITHUB VAULT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3"
      >
        <a
          href="https://github.com/Zaidmemon5412"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playSfx('select')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF007F] to-[#FF0055] text-white font-gta text-lg sm:text-xl font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>VIEW GITHUB VAULT</span>
          <ChevronRight size={20} strokeWidth={3} />
        </a>
      </motion.div>
    </div>
  );
}
