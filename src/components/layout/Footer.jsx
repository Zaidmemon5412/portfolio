import React from 'react';
import { ArrowUp, Gamepad2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/Icons';
import { CONTACT_INFO } from '../../data/certificates';
import { projectsData } from '../../data/projects';
import { navigateToPath } from '../../utils/seoNavigation';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';

export default function Footer() {
  const { setCursor, resetCursor } = useCursor();
  const { setViewMode, playSfx } = useGameState();

  const handleRouteLink = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigateToPath(path);
  };

  const scrollToTop = () => {
    navigateToPath('/');
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

  const pageLinks = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'Experience', path: '/experience' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE] text-[#666666] text-xs font-mono space-y-8">
      {/* Crawl-Friendly Site Index & Case Study Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-[#E2E2DE]/80">
        <nav aria-label="Portfolio Pages" className="space-y-2.5">
          <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
            PORTFOLIO INDEX
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {pageLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleRouteLink(e, link.path)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="text-[#555555] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor && setCursor('pointer')}
              onMouseLeave={resetCursor}
              className="text-[#555555] hover:text-[#111111] transition-colors"
            >
              Resume PDF
            </a>
          </div>
        </nav>

        <nav aria-label="Project Case Studies" className="space-y-2.5">
          <span className="text-[10px] uppercase tracking-widest text-[#888888] block">
            CASE STUDIES
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {projectsData.map((proj) => (
              <a
                key={proj.id}
                href={`/projects/${proj.id}`}
                onClick={(e) => handleRouteLink(e, `/projects/${proj.id}`)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="text-[#555555] hover:text-[#111111] transition-colors"
              >
                {proj.title}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom Copyright, Mode Switcher & Quick Socials */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Name & Copyright */}
        <div className="flex items-center gap-4">
          <a
            href="/"
            onClick={(e) => handleRouteLink(e, '/')}
            className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wider"
          >
            ZAID MEMON
          </a>
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
