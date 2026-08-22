import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Briefcase } from 'lucide-react';
import { useGameState } from '../../hooks/useGameState';

export default function ModeToggle() {
  const { viewMode, toggleViewMode, playSfx } = useGameState();
  const isEditorial = viewMode === 'editorial';

  const handleClick = () => {
    playSfx('select');
    toggleViewMode();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 select-none pointer-events-auto"
    >
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => playSfx('hover')}
        className={`group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-2xl backdrop-blur-xl border cursor-pointer ${
          isEditorial
            ? 'bg-[#0E1017]/95 hover:bg-[#131520] text-white border-white/[0.12] hover:border-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]'
            : 'bg-black/90 hover:bg-black text-[#22D3EE] border-[#22D3EE]/60 hover:border-[#22D3EE] shadow-[0_0_25px_rgba(34,211,238,0.4)]'
        }`}
        title={isEditorial ? 'Switch to GTA VI Interactive View' : 'Switch to Professional Recruiter View'}
      >
        {isEditorial ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]" />
            </span>
            <div className="flex items-center gap-1.5 text-[#F8FAFC] group-hover:text-[#A78BFA] transition-colors">
              <Gamepad2 size={15} className="text-[#8B5CF6] group-hover:rotate-12 transition-transform" />
              <span className="font-gta tracking-widest text-xs sm:text-sm">GTA VI MODE</span>
            </div>
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]" />
            </span>
            <div className="flex items-center gap-1.5 text-white group-hover:text-[#8B5CF6] transition-colors">
              <Briefcase size={14} className="text-[#8B5CF6]" />
              <span className="font-mono text-xs text-white/90 group-hover:text-white">RECRUITER VIEW</span>
            </div>
          </>
        )}

        {/* Quick Hotkey Indicator */}
        <span className="hidden md:inline-block px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-[#94A3B8] font-mono">
          SWITCH
        </span>
      </button>
    </motion.div>
  );
}
