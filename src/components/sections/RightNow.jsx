import React from 'react';
import { MapPin } from 'lucide-react';
import { currentFocusData } from '../../data/currentFocus';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';

export default function RightNow() {
  const { timeString } = useAhmedabadTime();

  return (
    <section id="now" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">05</span>
            <span>/</span>
            <span>DISPATCH & CURRENT FOCUS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            RIGHT NOW
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[#94A3B8]">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
          <span>Last updated — <strong className="text-[#F8FAFC] font-medium">{currentFocusData.lastUpdated}</strong></span>
        </div>
      </div>

      {/* Editorial 3-Column Field Dispatch Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/[0.08] pt-10">
        {/* Col 1: BUILDING (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono font-bold text-[#8B5CF6] tracking-widest uppercase">
              // 01 BUILDING
            </span>
            <span className="text-[10px] font-mono text-[#64748B]">PRIMARY SPRINT</span>
          </div>

          <div className="space-y-3">
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F8FAFC] tracking-tight">
              {currentFocusData.building.title}
            </h3>
            <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
              {currentFocusData.building.description}
            </p>
            <div className="p-3 bg-[#0E1017] border border-white/[0.08] font-mono text-xs text-[#94A3B8] rounded-xs">
              <span className="text-[#64748B] block text-[10px] uppercase">Current Sprint</span>
              <span className="text-[#F8FAFC] font-medium">{currentFocusData.building.stage}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#64748B]">
            <span className="flex items-center gap-1.5 text-[#94A3B8]">
              <MapPin size={12} className="text-[#8B5CF6]" />
              {currentFocusData.location.city}, {currentFocusData.location.country}
            </span>
            <span>•</span>
            <span className="text-[#F8FAFC]">{timeString ? `${timeString} IST` : 'IST'}</span>
          </div>
        </div>

        {/* Col 2: LEARNING (Span 3.5) */}
        <div className="lg:col-span-3 lg:col-start-6 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-8 lg:pt-0">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono font-bold text-[#F8FAFC] tracking-widest uppercase">
              // 02 LEARNING
            </span>
            <span className="text-[10px] font-mono text-[#64748B]">DEEPENING</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {currentFocusData.learning.map((item) => (
              <div key={item.topic} className="space-y-1">
                <span className="text-[#F8FAFC] font-bold block">
                  {item.topic}
                </span>
                <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: EXPLORING (Span 3.5) */}
        <div className="lg:col-span-3 lg:col-start-10 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-8 lg:pt-0">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono font-bold text-[#F8FAFC] tracking-widest uppercase">
              // 03 EXPLORING
            </span>
            <span className="text-[10px] font-mono text-[#64748B]">FRONTIERS</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {currentFocusData.exploring.map((item) => (
              <div key={item.topic} className="space-y-1">
                <span className="text-[#F8FAFC] font-bold block">
                  {item.topic}
                </span>
                <p className="text-[#94A3B8] text-[11px] leading-relaxed">
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
