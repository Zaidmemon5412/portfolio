import React, { useState, useEffect, useCallback } from 'react';
import { GameStateContext } from './GameStateContextCore';
import { SCREENS, MENU_ITEMS, SCREEN_CONFIGS } from '../data/gameConstants';
import { playSoundEffect, startRadioSynth, stopRadioSynth } from '../utils/audio';

export function GameStateProvider({ children }) {
  // Global View Mode ('editorial' vs 'gta')
  const [viewMode, setViewModeState] = useState(() => {
    try {
      const stored = localStorage.getItem('portfolio_view_mode');
      return stored === 'gta' || stored === 'editorial' ? stored : 'editorial';
    } catch {
      return 'editorial';
    }
  });

  const [currentScreen, setCurrentScreen] = useState(SCREENS.MENU);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  
  // Audio state with local storage persistence
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      const stored = localStorage.getItem('gta_sound_enabled');
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const [radioPlaying, setRadioPlaying] = useState(false);
  const [radioStation, setRadioStation] = useState('98.4 FLASH FM');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const setViewMode = useCallback((mode) => {
    setViewModeState(mode);
    try {
      localStorage.setItem('portfolio_view_mode', mode);
    } catch {}
    if (mode === 'editorial') {
      stopRadioSynth();
      setRadioPlaying(false);
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewModeState((prev) => {
      const next = prev === 'editorial' ? 'gta' : 'editorial';
      try {
        localStorage.setItem('portfolio_view_mode', next);
      } catch {}
      if (next === 'editorial') {
        stopRadioSynth();
        setRadioPlaying(false);
      }
      return next;
    });
  }, []);

  // Play sound effect using centralized audio engine
  const playSfx = useCallback((type = 'select') => {
    if (!soundEnabled) return;
    playSoundEffect(type);
  }, [soundEnabled]);

  // Toggle master sound ON / OFF
  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('gta_sound_enabled', String(next));
      } catch {}
      if (next) {
        playSoundEffect('toggle');
      } else {
        stopRadioSynth();
        setRadioPlaying(false);
      }
      return next;
    });
  }, []);

  const openResumeModal = useCallback(() => {
    playSfx('select');
    setIsResumeModalOpen(true);
  }, [playSfx]);

  const closeResumeModal = useCallback(() => {
    playSfx('back');
    setIsResumeModalOpen(false);
  }, [playSfx]);

  // Radio Synth audio synchronization
  useEffect(() => {
    if (radioPlaying && soundEnabled) {
      startRadioSynth();
    } else {
      stopRadioSynth();
    }
    return () => {
      stopRadioSynth();
    };
  }, [radioPlaying, soundEnabled]);

  // Navigate to screen
  const navigateTo = useCallback((screen) => {
    playSfx('select');
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [playSfx]);

  const goBackToMenu = useCallback(() => {
    playSfx('back');
    setCurrentScreen(SCREENS.MENU);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [playSfx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle sound with 'M' key (Mute / Unmute)
      if (e.key === 'm' || e.key === 'M') {
        if (!activeModalProject && !isResumeModalOpen) {
          toggleSound();
          return;
        }
      }

      if (activeModalProject || isResumeModalOpen) {
        if (e.key === 'Escape') {
          setActiveModalProject(null);
          setIsResumeModalOpen(false);
        }
        return;
      }

      if (currentScreen === SCREENS.MENU) {
        // Menu options count: 1 (Start Game) + 6 (MenuItems) + 1 (Exit Game) = 8
        const totalItems = MENU_ITEMS.length + 2; 
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          playSfx('hover');
          setSelectedMenuIndex((prev) => (prev + 1) % totalItems);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          playSfx('hover');
          setSelectedMenuIndex((prev) => (prev - 1 + totalItems) % totalItems);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (selectedMenuIndex === 0) {
            navigateTo(SCREENS.ABOUT);
          } else if (selectedMenuIndex <= MENU_ITEMS.length) {
            const item = MENU_ITEMS[selectedMenuIndex - 1];
            navigateTo(item.screen);
          } else {
            navigateTo(SCREENS.ABOUT);
          }
        }
      } else {
        if (e.key === 'Escape' || e.key === 'Backspace') {
          e.preventDefault();
          goBackToMenu();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentScreen, selectedMenuIndex, activeModalProject, isResumeModalOpen, navigateTo, goBackToMenu, playSfx, toggleSound]);

  // Live IST Clock
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setTimeString(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer to GTA VI Launch in Leonida
  const [countdown, setCountdown] = useState({ days: 109, hours: 18, mins: 16, secs: 32 });
  useEffect(() => {
    const targetDate = new Date('2026-12-31T00:00:00Z').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown({ days, hours, mins, secs });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const config = SCREEN_CONFIGS[currentScreen] || SCREEN_CONFIGS[SCREENS.MENU];

  return (
    <GameStateContext.Provider
      value={{
        viewMode,
        setViewMode,
        toggleViewMode,
        currentScreen,
        setCurrentScreen,
        navigateTo,
        goBackToMenu,
        config,
        selectedMenuIndex,
        setSelectedMenuIndex,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
        radioPlaying,
        setRadioPlaying,
        radioStation,
        setRadioStation,
        timeString: timeString || '16:20',
        countdown,
        selectedProjectIndex,
        setSelectedProjectIndex,
        activeModalProject,
        setActiveModalProject,
        isResumeModalOpen,
        setIsResumeModalOpen,
        openResumeModal,
        closeResumeModal,
        playSfx,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}
