import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, Briefcase, LogOut } from 'lucide-react';
import { SCREENS, MENU_ITEMS } from '../../../data/gameConstants';
import { useGameState } from '../../../hooks/useGameState';

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function MainMenuScreen() {
  const {
    navigateTo,
    selectedMenuIndex,
    setSelectedMenuIndex,
    playSfx,
    setViewMode,
  } = useGameState();

  const [showExitModal, setShowExitModal] = useState(false);

  const allItems = [
    { id: 'start', label: 'START GAME', screen: SCREENS.ABOUT, isStart: true },
    ...MENU_ITEMS,
    { id: 'exit', label: 'EXIT GAME', isExit: true },
  ];

  const handleItemClick = (item, index) => {
    setSelectedMenuIndex(index);
    if (item.isExit) {
      playSfx('back');
      setViewMode('editorial');
    } else {
      navigateTo(item.screen);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-10 pt-20 pb-28 sm:py-20">
      {/* Title Header: ZAID BUILDS Portfolio */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6 flex-shrink-0"
      >
        <h1 className="font-gta text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.85] gta-title-stroke">
          ZAID<br />BUILDS
        </h1>
        <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#FF007F] gta-pink-glow block pl-1.5 transform -rotate-3 mt-1">
          Portfolio
        </span>
      </motion.div>

      {/* Interactive Natural Scrollable Menu List */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-1 sm:gap-1.5 max-w-sm sm:max-w-md md:max-w-lg w-full relative z-20 pointer-events-auto pr-2 pb-4 scroll-smooth"
      >
        {allItems.map((item, index) => {
          const isSelected = selectedMenuIndex === index;

          return (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => {
                playSfx('hover');
                setSelectedMenuIndex(index);
              }}
              onClick={() => handleItemClick(item, index)}
              className={`relative w-full text-left flex items-center justify-between px-3.5 sm:px-5 py-1.5 sm:py-2 md:py-2.5 cursor-pointer transition-all duration-150 group rounded-xs border-none outline-none flex-shrink-0 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#FF007F] via-[#FF007F]/90 to-transparent shadow-[0_0_20px_rgba(255,0,127,0.6)] translate-x-2'
                  : 'hover:bg-white/10 hover:translate-x-1'
              }`}
            >
              {/* Item Label */}
              <span
                className={`font-gta text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider uppercase transition-colors ${
                  isSelected
                    ? 'text-white font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                    : 'text-white/80 group-hover:text-white font-bold'
                }`}
              >
                {item.label}
              </span>

              {/* Active Indicator Chevron */}
              {isSelected && (
                <motion.div
                  layoutId="menu-chevron"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <ChevronRight size={18} className="text-white drop-shadow-md animate-pulse" />
                </motion.div>
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Keyboard Controls Hint */}
      <div className="hidden lg:flex items-center gap-4 mt-4 text-[11px] font-mono text-white/40 tracking-wider flex-shrink-0">
        <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 border border-white/10 rounded">
          <kbd className="text-[#FF007F] font-bold">↑</kbd> <kbd className="text-[#FF007F] font-bold">↓</kbd> NAVIGATE
        </span>
        <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 border border-white/10 rounded">
          <kbd className="text-[#00F0FF] font-bold">ENTER</kbd> SELECT
        </span>
      </div>

      {/* Exit Game Modal */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0d0e14] border-2 border-[#FF007F] p-6 rounded shadow-[0_0_50px_rgba(255,0,127,0.4)] z-10 text-center"
            >
              <h3 className="font-gta text-3xl sm:text-4xl text-white font-black uppercase tracking-wider gta-title-stroke mb-2">
                MISSION PAUSED
              </h3>
              <p className="font-mono text-xs sm:text-sm text-white/80 mb-6">
                Are you ready to quit your session, or continue exploring the portfolio?
              </p>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    playSfx('select');
                    setShowExitModal(false);
                    navigateTo(SCREENS.ABOUT);
                  }}
                  className="w-full py-2.5 bg-[#00E676] hover:bg-[#00c965] text-black font-gta text-lg font-black uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Play size={18} />
                  <span>CONTINUE CAMPAIGN</span>
                </button>

                <a
                  href="https://github.com/Zaidmemon5412"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSfx('select')}
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-gta text-lg font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <GithubIcon size={18} />
                  <span>VISIT GITHUB VAULT</span>
                </a>

                <button
                  onClick={() => {
                    playSfx('back');
                    setShowExitModal(false);
                  }}
                  className="w-full py-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors mt-1 cursor-pointer"
                >
                  CANCEL
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
