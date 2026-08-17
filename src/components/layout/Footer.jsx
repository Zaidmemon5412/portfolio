import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';

export default function Footer() {
  const { setCursor, resetCursor } = useCursor();
  const { timeString } = useAhmedabadTime();

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#060607] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-white/40">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white/10 border border-white/20 flex items-center justify-center text-[10px] text-[#D4FF32] font-bold">
            ZM
          </div>
          <div>
            <span className="text-white font-medium">ZAID MEMON</span>
            <span className="text-white/30 ml-2">© 2026</span>
          </div>
        </div>

        {/* Center: Location & Time */}
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-white/70">
            <MapPin size={11} className="text-[#D4FF32]" />
            Ahmedabad, India
          </span>
          <span>•</span>
          <span>{timeString ? `${timeString} IST` : '23.02° N, 72.57° E'}</span>
          <span>•</span>
          <span className="text-white/60">Portfolio & Production Code</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setCursor('pointer', 'TOP')}
          onMouseLeave={resetCursor}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <div className="p-1 bg-white/5 border border-white/10 group-hover:bg-[#D4FF32] group-hover:text-black transition-colors">
            <ArrowUp size={12} />
          </div>
        </button>
      </div>
    </footer>
  );
}
