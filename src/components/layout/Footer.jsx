import React from 'react';
import { ArrowUp, Gamepad2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/Icons';
import { CONTACT_INFO } from '../../data/certificates';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';

export default function Footer() {
  const { setCursor, resetCursor } = useCursor();
  const { setViewMode, playSfx } = useGameState();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLaunchGta = () => {
    if (playSfx) playSfx('select');
    setViewMode('gta');
  };

  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE] text-[#666666] text-xs font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Name & Copyright */}
        <div className="flex items-center gap-4">
          <span className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wider">
            ZAID MEMON
          </span>
          <span className="text-[#DEDEDA]">•</span>
          <span>© 2026 Zaid Memon. All Rights Reserved.</span>
        </div>

        {/* Center: GTA Mode Easter Egg Switcher */}
        <button
          onClick={handleLaunchGta}
          onMouseEnter={() => setCursor && setCursor('pointer')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[11px] font-mono text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors cursor-pointer"
        >
          <Gamepad2 size={13} className="text-[#FF007F]" />
          <span>Switch to Vice City (GTA Mode)</span>
        </button>

        {/* Right: Quick Socials & Scroll to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaid Memon LinkedIn Profile"
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="p-2 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#555555] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaid Memon GitHub Profile"
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="p-2 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors"
            >
              <GithubIcon size={14} />
            </a>
          </div>

          <span className="text-[#DEDEDA]">•</span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 text-[#111111] hover:text-[#555555] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
