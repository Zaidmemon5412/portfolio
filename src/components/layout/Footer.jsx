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
    <footer className="border-t border-white/[0.08] bg-[#06070A] py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#64748B]">
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#0E1017] border border-white/[0.12] flex items-center justify-center text-[10px] text-[#8B5CF6] font-bold rounded-xs">
            ZM
          </div>
          <div>
            <span className="text-[#F8FAFC] font-medium">ZAID MEMON</span>
            <span className="text-[#64748B] ml-2">© 2026</span>
          </div>
        </div>

        {/* Center: Location & Time */}
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-[#94A3B8]">
            <MapPin size={11} className="text-[#8B5CF6]" />
            Ahmedabad, India
          </span>
          <span className="text-white/20">•</span>
          <span>{timeString ? `${timeString} IST` : '23.02° N, 72.57° E'}</span>
          <span className="text-white/20">•</span>
          <span className="text-[#94A3B8]">Obsidian Aurora Architecture</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setCursor('pointer', 'TOP')}
          onMouseLeave={resetCursor}
          className="flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <div className="p-1 bg-[#0E1017] border border-white/[0.1] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors rounded-xs">
            <ArrowUp size={12} />
          </div>
        </button>
      </div>
    </footer>
  );
}
