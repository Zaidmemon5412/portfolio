import React from 'react';
import { ShieldCheck, Building2, Compass } from 'lucide-react';

export default function VerixaVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] bg-[#0c0d0f] border border-white/10 rounded-none p-5 sm:p-7 flex flex-col justify-between select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#D4FF32] flex items-center justify-center text-black font-mono font-bold text-xs">
            VX
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-xs tracking-wider">VERIXA // SPATIAL DECISION SYSTEM</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70">PROD.ARCH</span>
            </div>
            <p className="text-[10px] text-white/40 font-mono">REGULATORY RERA INGESTION & VALUATION ENGINE</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/15 text-[#D4FF32] text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
            RERA VERIFIED
          </span>
        </div>
      </div>

      {/* Center Analytical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
        {/* Left Column: Builder & Registry Metric Matrix */}
        <div className="md:col-span-7 space-y-3">
          {/* Builder Index */}
          <div className="p-4 bg-black/60 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <Building2 size={13} className="text-[#D4FF32]" />
                <span>BUILDER CREDIBILITY RATING</span>
              </div>
              <span className="text-[#D4FF32] font-bold">94.2 <span className="text-white/40">/ 100</span></span>
            </div>
            
            <div className="space-y-2 text-[11px] font-mono">
              <div>
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Historical Delivery Punctuality</span>
                  <span className="text-white font-medium">98% On-Time</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <div className="h-full bg-[#D4FF32] w-[98%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Litigation & Title Clearance</span>
                  <span className="text-white font-medium">0 Legal Encumbrances</span>
                </div>
                <div className="h-1 w-full bg-white/10">
                  <div className="h-full bg-white/80 w-[100%]" />
                </div>
              </div>
            </div>
          </div>

          {/* RERA Certificate Schema */}
          <div className="p-3 bg-black/40 border border-white/8 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-white/60">
              <ShieldCheck size={13} className="text-[#D4FF32]" />
              <span>REGISTRY ID</span>
            </div>
            <span className="text-white font-semibold">PR/GJ/AHM/2026/0891</span>
          </div>
        </div>

        {/* Right Column: Spatial Locality Grid */}
        <div className="md:col-span-5 flex flex-col justify-between p-4 bg-black/60 border border-white/10">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
              <div className="flex items-center gap-1.5">
                <Compass size={13} className="text-[#D4FF32]" />
                <span>GIS SPATIAL NODES</span>
              </div>
              <span className="text-[10px] text-white/40">23.02° N, 72.57° E</span>
            </div>
            
            {/* Vector Map Node */}
            <div className="relative h-24 w-full bg-[#080809] border border-white/10 p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40">
                <span>SECTOR: SINDHU BHAVAN</span>
                <span className="text-[#D4FF32]">ZONE A</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 font-mono text-xs text-white">
                <div className="w-2 h-2 rounded-full bg-[#D4FF32]" />
                <span>Ahmedabad West Corridor</span>
              </div>

              <div className="text-[9px] font-mono text-white/40 text-right">
                40+ Registry Data Points Indexed
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 flex justify-between items-center text-[11px] font-mono">
            <span className="text-white/40">Price Benchmark</span>
            <span className="text-[#D4FF32] font-bold">₹7,850 / sq.ft</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-white/40">
        <div className="flex items-center gap-3">
          <span>POSTGIS GEO-INDEXING</span>
          <span>•</span>
          <span>DJANGO REST BACKEND</span>
          <span>•</span>
          <span>SCRAPY PIPELINES</span>
        </div>
        <span className="text-[#D4FF32]">STAGE: DATA INGESTION</span>
      </div>
    </div>
  );
}
