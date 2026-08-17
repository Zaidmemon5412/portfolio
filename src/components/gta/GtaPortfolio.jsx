import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCREENS } from '../../data/gameConstants';
import { useGameState } from '../../hooks/useGameState';
import GtaHud from './GtaHud';
import GtaProjectModal from './GtaProjectModal';
import ResumeModal from '../common/ResumeModal';
import MainMenuScreen from './screens/MainMenuScreen';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import AchievementsScreen from './screens/AchievementsScreen';
import ContactScreen from './screens/ContactScreen';

export default function GtaPortfolio() {
  const { currentScreen, config, isResumeModalOpen, closeResumeModal } = useGameState();

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case SCREENS.MENU:
        return <MainMenuScreen key="menu" />;
      case SCREENS.ABOUT:
        return <AboutScreen key="about" />;
      case SCREENS.SKILLS:
        return <SkillsScreen key="skills" />;
      case SCREENS.PROJECTS:
        return <ProjectsScreen key="projects" />;
      case SCREENS.EXPERIENCE:
        return <ExperienceScreen key="experience" />;
      case SCREENS.ACHIEVEMENTS:
        return <AchievementsScreen key="achievements" />;
      case SCREENS.CONTACT:
        return <ContactScreen key="contact" />;
      default:
        return <MainMenuScreen key="menu" />;
    }
  };

  return (
    <div className="relative w-full h-screen max-h-screen bg-[#070709] text-white overflow-hidden select-none font-sans">
      {/* Background Wallpaper with Crossfade Transition */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={config.bgImage}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <img
            src={config.bgImage}
            alt={config.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Gentle soft gradient on left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/15 sm:to-transparent sm:w-3/5 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle CRT Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 crt-overlay opacity-15" />

      {/* Active Interactive Screen View (Scrollable on small screens / mobile) */}
      <div className="relative z-20 w-full h-screen max-h-screen overflow-y-auto no-scrollbar scroll-smooth">
        <AnimatePresence mode="wait">
          {renderActiveScreen()}
        </AnimatePresence>
      </div>

      {/* Persistent Universal GTA VI HUD */}
      <GtaHud />

      {/* Case Study Project Modal */}
      <GtaProjectModal />

      {/* Global Root Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </div>
  );
}
