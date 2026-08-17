import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, MapPin, GraduationCap, FileText, Download } from 'lucide-react';
import { SCREENS } from '../../../data/gameConstants';
import { useGameState } from '../../../hooks/useGameState';

export default function AboutScreen() {
  const { navigateTo, playSfx, openResumeModal } = useGameState();

  const stats = [
    {
      id: 'education',
      label: 'EDUCATION',
      value: 'L.J. University — B.Tech Computer Science',
      icon: GraduationCap,
      color: '#FFB800',
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'Ahmedabad, Gujarat, India',
      icon: MapPin,
      color: '#00F0FF',
    },
    {
      id: 'status',
      label: 'STATUS',
      value: 'Building Verixa & Production Software',
      icon: Sparkles,
      color: '#FF007F',
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: ABOUT Me */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          ABOUT
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#FF9900] gta-amber-glow -mt-2 block pl-2 transform -rotate-2">
          Me
        </span>
      </motion.div>

      {/* Bio Paragraph */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg mb-6 sm:mb-8"
      >
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Hey, I'm <strong className="text-[#FF9900]">Zaid</strong>. A full-stack developer, builder, and computer science engineer who crafts digital experiences, backend architectures, and data systems that aren't just functional — they're memorable.
        </p>
      </motion.div>

      {/* Stat HUD Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2.5 sm:gap-3 max-w-md w-full mb-8"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              onMouseEnter={() => playSfx('card_hover')}
              className="gta-card px-4 py-3 rounded-xs flex items-center gap-3.5 hover:border-[#FF9900]/50 transition-all group cursor-default"
            >
              <div
                className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${stat.color}22`, border: `1px solid ${stat.color}66` }}
              >
                <Icon size={16} style={{ color: stat.color }} />
              </div>
              <div>
                <span className="block font-gta text-[11px] tracking-widest text-white/60 font-bold uppercase">
                  {stat.label}
                </span>
                <span className="font-mono text-xs sm:text-sm text-white font-semibold group-hover:text-[#FF9900] transition-colors">
                  {stat.value}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Action Buttons */}
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
            navigateTo(SCREENS.EXPERIENCE);
          }}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FF9900] to-[#FF6600] text-black font-gta text-lg sm:text-xl font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(255,153,0,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>VIEW JOURNEY</span>
          <ChevronRight size={20} strokeWidth={3} />
        </button>

        <button
          type="button"
          onClick={() => {
            openResumeModal();
          }}
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/80 hover:bg-black border border-white/25 hover:border-[#FF9900] text-white font-gta text-sm sm:text-base font-bold tracking-wider uppercase rounded-xs transition-all shadow-lg cursor-pointer"
        >
          <FileText size={16} className="text-[#FF9900]" />
          <span>VIEW RESUME / CV</span>
        </button>

        <a
          href="/resume.pdf"
          download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
          onClick={() => playSfx('select')}
          className="p-3.5 bg-white/10 hover:bg-[#00E676] text-white hover:text-black rounded-xs border border-white/20 transition-all cursor-pointer"
          title="Download PDF directly"
        >
          <Download size={18} />
        </a>
      </motion.div>
    </div>
  );
}
