import React from 'react';
import { MapPin } from 'lucide-react';
import { currentFocusData } from '../../data/currentFocus';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';

export default function RightNow() {
  const { timeString } = useAhmedabadTime();

  return (
    <section id="now" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="text-[#D4FF32]">05</span>
            <span>/</span>
            <span>DISPATCH & CURRENT FOCUS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            RIGHT NOW
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-white/50">
          <span className="w-2 h-2 bg-[#D4FF32]" />
          <span>Last updated — <strong className="text-white font-medium">{currentFocusData.lastUpdated}</strong></span>
        </div>
      </div>

      {/* Editorial 3-Column Field Dispatch Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-10">
        {/* Col 1: BUILDING (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-[#D4FF32] tracking-widest uppercase">
              // 01 BUILDING
            </span>
            <span className="text-[10px] font-mono text-white/40">PRIMARY SPRINT</span>
          </div>

          <div className="space-y-3">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              {currentFocusData.building.title}
            </h3>
            <p className="text-sm text-white/70 font-light leading-relaxed">
              {currentFocusData.building.description}
            </p>
            <div className="p-3 bg-black/40 border border-white/8 font-mono text-xs text-white/60">
              <span className="text-white/40 block text-[10px] uppercase">Current Sprint</span>
              <span className="text-white font-medium">{currentFocusData.building.stage}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-white/40">
            <span className="flex items-center gap-1 text-white/70">
              <MapPin size={12} className="text-[#D4FF32]" />
              {currentFocusData.location.city}, {currentFocusData.location.country}
            </span>
            <span>•</span>
            <span className="text-white/80">{timeString ? `${timeString} IST` : 'IST'}</span>
          </div>
        </div>

        {/* Col 2: LEARNING (Span 3.5) */}
        <div className="lg:col-span-3 lg:col-start-6 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-8 lg:pt-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
              // 02 LEARNING
            </span>
            <span className="text-[10px] font-mono text-white/40">DEEPENING</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {currentFocusData.learning.map((item) => (
              <div key={item.topic} className="space-y-1">
                <span className="text-white font-bold block">
                  {item.topic}
                </span>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: EXPLORING (Span 3.5) */}
        <div className="lg:col-span-3 lg:col-start-10 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-8 lg:pt-0">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
              // 03 EXPLORING
            </span>
            <span className="text-[10px] font-mono text-white/40">FRONTIERS</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {currentFocusData.exploring.map((item) => (
              <div key={item.topic} className="space-y-1">
                <span className="text-white font-bold block">
                  {item.topic}
                </span>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
