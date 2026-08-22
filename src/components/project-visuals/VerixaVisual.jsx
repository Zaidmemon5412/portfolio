import React from 'react';
import { ShieldCheck, Building2, Compass } from 'lucide-react';

export default function VerixaVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] bg-[#0E1017] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs rounded-xs flex-shrink-0">
            VX
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#F8FAFC] font-mono font-bold text-[11px] sm:text-xs tracking-wider truncate">
                VERIXA // SPATIAL DECISION SYSTEM
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 border border-white/[0.08] text-[#94A3B8] rounded-xs hidden xs:inline">
                PROD.ARCH
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-mono truncate">
              REGULATORY RERA INGESTION & VALUATION ENGINE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] sm:text-[11px] font-mono rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            RERA VERIFIED
          </span>
        </div>
      </div>

      {/* Center Analytical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-4">
        {/* Left Column: Builder & Registry Metric Matrix */}
        <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
          {/* Builder Index */}
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 rounded-xs">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <Building2 size={13} className="text-[#8B5CF6]" />
                <span className="text-[10px] sm:text-xs">BUILDER CREDIBILITY RATING</span>
              </div>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm">94.2 <span className="text-[#64748B] text-[10px]">/ 100</span></span>
            </div>
            
            <div className="space-y-2 text-[10px] sm:text-[11px] font-mono">
              <div>
                <div className="flex justify-between text-[#94A3B8] mb-1">
                  <span>Delivery Punctuality</span>
                  <span className="text-[#F8FAFC] font-medium">98% On-Time</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#8B5CF6] w-[98%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#94A3B8] mb-1">
                  <span>Title Clearance</span>
                  <span className="text-[#F8FAFC] font-medium">0 Legal Encumbrances</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#22D3EE] w-[100%]" />
                </div>
              </div>
            </div>
          </div>

          {/* RERA Certificate Schema */}
          <div className="p-2.5 sm:p-3 bg-[#131520] border border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs font-mono rounded-xs">
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              <ShieldCheck size={13} className="text-[#22D3EE]" />
              <span>REGISTRY ID</span>
            </div>
            <span className="text-[#F8FAFC] font-semibold text-[10px] sm:text-xs">PR/GJ/AHM/2026/0891</span>
          </div>
        </div>

        {/* Right Column: Spatial Locality Grid */}
        <div className="md:col-span-5 flex flex-col justify-between p-3 sm:p-4 bg-[#131520] border border-white/[0.08] rounded-xs">
          <div>
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#94A3B8] mb-2">
              <div className="flex items-center gap-1.5">
                <Compass size={13} className="text-[#8B5CF6]" />
                <span>GIS NODES</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#64748B]">23.02° N, 72.57° E</span>
            </div>
            
            {/* Vector Map Node */}
            <div className="relative h-20 sm:h-24 w-full bg-[#08090D] border border-white/[0.08] p-2 flex flex-col justify-between rounded-xs">
              <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-[#64748B]">
                <span>SECTOR: SINDHU BHAVAN</span>
                <span className="text-[#8B5CF6]">ZONE A</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 font-mono text-[11px] sm:text-xs text-[#F8FAFC]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8B5CF6]" />
                <span>Ahmedabad West</span>
              </div>

              <div className="text-[8px] sm:text-[9px] font-mono text-[#64748B] text-right">
                40+ Registry Nodes
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/[0.08] flex justify-between items-center text-[10px] sm:text-[11px] font-mono">
            <span className="text-[#64748B]">Benchmark</span>
            <span className="text-[#22D3EE] font-bold">₹7,850 / sq.ft</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-[#64748B]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>POSTGIS</span>
          <span>•</span>
          <span>DJANGO REST</span>
          <span>•</span>
          <span>SCRAPING</span>
        </div>
        <span className="text-[#8B5CF6]">STAGE: DATA INGESTION</span>
      </div>
    </div>
  );
}
