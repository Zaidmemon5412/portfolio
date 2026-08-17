import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ArrowLeft, Radio } from 'lucide-react';
import { SCREENS } from '../../data/gameConstants';
import { useGameState } from '../../hooks/useGameState';

export default function GtaHud() {
  const {
    currentScreen,
    goBackToMenu,
    config,
    timeString,
    countdown,
    soundEnabled,
    toggleSound,
    radioPlaying,
    setRadioPlaying,
    setSoundEnabled,
    playSfx
  } = useGameState();

  const isMenu = currentScreen === SCREENS.MENU;
  const starsCount = config.stars;

  // Format cash with commas
  const formattedCash = config.cash.toLocaleString('en-US');

  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex flex-col justify-between p-3 sm:p-6 lg:p-8 select-none">
      {/* =========================================================================
          TOP HUD ROW: Back Button (Left), Audio/Radio/Countdown (Center) & Stats / Wanted Level (Right)
      ========================================================================== */}
      <div className="w-full flex items-start justify-between gap-2 pointer-events-none">
        {/* Top Left: Return to Menu Button */}
        <div className="pointer-events-auto flex-shrink-0 z-50">
          {!isMenu && (
            <motion.button
              type="button"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                goBackToMenu();
              }}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-black/90 hover:bg-black border border-white/30 hover:border-[#FF007F] text-white text-xs sm:text-sm font-gta tracking-wider transition-all duration-200 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.8)] group rounded-xs cursor-pointer"
            >
              <ArrowLeft size={16} className="text-[#FF007F] group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">ESC — BACK TO MENU</span>
              <span className="sm:hidden">BACK</span>
            </motion.button>
          )}
        </div>

        {/* Top Center: Master Audio Toggle & 98.4 FM Radio & GTA VI Countdown */}
        <div className="flex flex-col items-center pointer-events-auto flex-shrink-0 z-50">
          <div className="flex items-center gap-2">
            {/* Master Gamification Audio ON / OFF Toggle Button */}
            <button
              type="button"
              onClick={toggleSound}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-lg cursor-pointer border backdrop-blur-md ${
                soundEnabled
                  ? 'bg-black/85 text-[#00E676] border-[#00E676]/60 hover:border-[#00E676] hover:bg-black shadow-[0_0_12px_rgba(0,230,118,0.3)]'
                  : 'bg-black/85 text-[#FF007F] border-[#FF007F]/60 hover:border-[#FF007F] hover:bg-black'
              }`}
              title="Toggle Audio / SFX (Press 'M' key)"
            >
              {soundEnabled ? (
                <>
                  <Volume2 size={13} className="text-[#00E676] animate-pulse" />
                  <span>AUDIO: ON</span>
                </>
              ) : (
                <>
                  <VolumeX size={13} className="text-[#FF007F]" />
                  <span>AUDIO: OFF</span>
                </>
              )}
            </button>

            {/* Radio Station Widget */}
            <button
              type="button"
              onClick={() => {
                if (!soundEnabled) setSoundEnabled(true);
                playSfx('toggle');
                setRadioPlaying(!radioPlaying);
              }}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono text-white/90 backdrop-blur-md border transition-colors shadow-lg cursor-pointer ${
                radioPlaying && soundEnabled
                  ? 'bg-black/90 border-[#00F0FF] text-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                  : 'bg-black/80 border-white/20 hover:border-[#00F0FF]'
              }`}
              title="Toggle Vice City 98.4 FM Station"
            >
              <Radio size={11} className={radioPlaying && soundEnabled ? 'text-[#00F0FF]' : 'text-white/50'} />
              <div className="flex items-end gap-[2px] h-3">
                <span className={`w-[2px] bg-[#00F0FF] rounded-full transition-all ${radioPlaying && soundEnabled ? 'animate-bounce h-3' : 'h-1.5'}`} />
                <span className={`w-[2px] bg-[#00F0FF] rounded-full transition-all ${radioPlaying && soundEnabled ? 'animate-bounce delay-75 h-2.5' : 'h-2'}`} />
                <span className={`w-[2px] bg-[#00F0FF] rounded-full transition-all ${radioPlaying && soundEnabled ? 'animate-bounce delay-150 h-3.5' : 'h-3'}`} />
              </div>
              <span className="font-bold tracking-wider">98.4 FM</span>
            </button>
          </div>

          {/* Countdown Clock */}
          <div className={`mt-1 text-center ${!isMenu ? 'hidden md:block' : 'block'}`}>
            <span className="block text-[8px] sm:text-[9px] font-gta tracking-[0.2em] text-[#FF007F] uppercase font-bold drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]">
              LEONIDA DROPS IN
            </span>
            <div className="font-gta text-xs sm:text-sm md:text-base text-white font-black tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span>{countdown.days}<span className="text-[9px] sm:text-[10px] text-white/60 font-sans ml-0.5 mr-1">d</span></span>
              <span>{countdown.hours}<span className="text-[9px] sm:text-[10px] text-white/60 font-sans ml-0.5 mr-1">h</span></span>
              <span>{countdown.mins}<span className="text-[9px] sm:text-[10px] text-white/60 font-sans ml-0.5 mr-1">m</span></span>
              <span>{countdown.secs}<span className="text-[9px] sm:text-[10px] text-white/60 font-sans ml-0.5">s</span></span>
            </div>
          </div>
        </div>

        {/* Top Right: GTA Clock, Cash, Health Bar & Wanted Stars */}
        <div className="flex flex-col items-end pointer-events-auto flex-shrink-0 z-50">
          {/* Time & Weapon Slot */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="text-right">
              <span className="font-gta text-xl sm:text-3xl md:text-4xl text-white font-black tracking-wider leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {timeString}
              </span>
            </div>

            {/* Weapon / Initial Badge */}
            <div className="w-7 h-7 sm:w-10 sm:h-10 bg-black/80 border border-white/25 rounded flex items-center justify-center font-gta text-sm sm:text-xl font-black text-white/90 shadow-md backdrop-blur-sm">
              Z
            </div>
          </div>

          {/* Player Cash */}
          <div className="mt-0.5 font-gta text-lg sm:text-2xl md:text-3xl font-black text-[#00E676] tracking-wider drop-shadow-[0_0_10px_rgba(0,230,118,0.6)]">
            ${formattedCash}
          </div>

          {/* Health & Armor Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
            <div className="w-16 sm:w-28 md:w-32 h-2 sm:h-3 bg-black/80 border border-white/20 rounded-xs overflow-hidden flex">
              {/* Armor (Sky Blue) */}
              <div className="w-1/2 h-full bg-[#00D2FF]" />
              {/* Health (Green) */}
              <div className="w-1/2 h-full bg-[#00E676]" />
            </div>
            <span className="font-mono text-[9px] sm:text-xs font-bold text-white flex items-center gap-0.5">
              <span className="text-[#FF007F] text-[10px] sm:text-xs">♥</span> 100
            </span>
          </div>

          {/* Wanted Stars (0 to 6 Stars) */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 mt-1">
            {[1, 2, 3, 4, 5, 6].map((starNum) => {
              const isActive = starNum <= starsCount;
              return (
                <span
                  key={starNum}
                  className={`text-xs sm:text-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[#FF9900] drop-shadow-[0_0_8px_rgba(255,153,0,0.9)] scale-110'
                      : 'text-white/20'
                  }`}
                >
                  ★
                </span>
              );
            })}
          </div>

          {/* ESC Button hint on desktop for sub-screens */}
          {!isMenu && (
            <button
              type="button"
              onClick={goBackToMenu}
              className="hidden lg:block mt-2 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors bg-black/60 px-2 py-0.5 border border-white/10 cursor-pointer"
            >
              ESC — BACK TO MENU
            </button>
          )}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM HUD ROW: GPS Minimap / Objective (Left) & Quote (Right)
      ========================================================================== */}
      <div className="w-full flex items-end justify-between gap-4 pointer-events-none">
        {/* Bottom Left: GTA Radar / Minimap & Mission Objective */}
        <div className="flex items-end gap-2.5 sm:gap-4 pointer-events-none">
          {/* Minimap Frame */}
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-[#0c121e]/90 border-2 border-white/30 overflow-hidden shadow-2xl backdrop-blur-md flex-shrink-0">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-30 bg-grid-pattern" />
            
            {/* Radar Crosshairs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-[1px] bg-white/20" />
              <div className="h-full w-[1px] bg-white/20 absolute" />
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full border border-white/20 absolute" />
            </div>

            {/* GPS Route Line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path
                d="M 20 80 Q 40 40, 80 20"
                fill="none"
                stroke={config.accentColor || '#FF007F'}
                strokeWidth="3.5"
                strokeLinecap="round"
                className="opacity-90 drop-shadow-[0_0_6px_rgba(255,0,127,0.8)]"
              />
              {/* Objective Destination Circle */}
              <circle
                cx="80"
                cy="20"
                r="5"
                fill="none"
                stroke={config.accentColor || '#FF007F'}
                strokeWidth="2"
                className="animate-ping origin-center"
              />
              <circle cx="80" cy="20" r="3.5" fill={config.accentColor || '#FF007F'} />
            </svg>

            {/* Player Blip */}
            <div className="absolute top-[75%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00F0FF] border-2 border-white shadow-[0_0_8px_#00F0FF]" />
            </div>

            {/* North Indicator */}
            <div className="absolute bottom-1 left-1.5 font-gta text-[8px] sm:text-xs font-black text-white/70">
              N
            </div>
          </div>

          {/* Mission Objective Text */}
          <div className="max-w-[170px] sm:max-w-xs md:max-w-sm">
            <span className="block text-[8px] sm:text-[10px] font-gta tracking-[0.18em] font-black uppercase text-[#FF007F] drop-shadow-[0_0_6px_rgba(255,0,127,0.8)]">
              CURRENT OBJECTIVE
            </span>
            <h4 className="font-gta text-[10px] sm:text-sm md:text-base font-black text-white uppercase tracking-wider leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {config.objective}
            </h4>
            <span className="hidden sm:block text-[9px] font-mono text-white/50 mt-0.5">
              Vice City Inspired • Build Different • Stay Legendary
            </span>
          </div>
        </div>

        {/* Bottom Right: Quote */}
        <div className="text-right pointer-events-none hidden sm:block max-w-[280px] md:max-w-md">
          <p className="font-script text-sm sm:text-base md:text-lg text-white/90 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            "Code is my weapon. Creativity is my world."
          </p>
          <span className="font-script text-xs sm:text-sm text-[#FF007F] gta-pink-glow block mt-0.5">
            — Zaid
          </span>
        </div>
      </div>
    </div>
  );
}
