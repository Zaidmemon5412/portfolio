import React from 'react';
import { Newspaper, ShieldCheck, GitCompare } from 'lucide-react';

export default function VeritasVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] bg-[#0E1017] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs rounded-xs flex-shrink-0">
            VT
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#F8FAFC] font-mono font-bold text-[11px] sm:text-xs tracking-wider truncate">
                VERITAS // LOCAL NEWS ANALYZER
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 border border-white/[0.08] text-[#94A3B8] rounded-xs hidden xs:inline">
                NLP ENGINE
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-mono truncate">
              CROSS-SOURCE PERSPECTIVE & CREDIBILITY CLUSTERING
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] sm:text-[11px] font-mono rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            CORPUS PARSED
          </span>
        </div>
      </div>

      {/* Center News & Similarity Clustering */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-4">
        {/* Left Column: Multi-Source Article Similarity */}
        <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 rounded-xs">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#94A3B8]">
                <GitCompare size={13} className="text-[#8B5CF6]" />
                <span className="text-[10px] sm:text-xs">SEMANTIC SIMILARITY</span>
              </div>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm">Cosine = 0.89</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.08] space-y-1 rounded-xs">
                <div className="flex justify-between text-[#F8FAFC] font-medium text-[10px] sm:text-[11px]">
                  <span className="truncate">Source A: Municipal Budget</span>
                  <span className="text-[#22D3EE] ml-1 flex-shrink-0">Official</span>
                </div>
                <p className="text-[#64748B] text-[9px] sm:text-[10px] truncate">Entity: Ahmedabad Municipal Corp, ₹420Cr</p>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.08] space-y-1 rounded-xs">
                <div className="flex justify-between text-[#F8FAFC] font-medium text-[10px] sm:text-[11px]">
                  <span className="truncate">Source B: Civic Association</span>
                  <span className="text-[#A78BFA] ml-1 flex-shrink-0">Civic</span>
                </div>
                <p className="text-[#64748B] text-[9px] sm:text-[10px] truncate">Perspective: Timeline & drainage prioritization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Perspective Score & Pipeline */}
        <div className="md:col-span-5 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2 rounded-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                <Newspaper size={13} className="text-[#8B5CF6]" />
                COVERAGE DIVERSITY
              </span>
              <span className="text-[#22D3EE] text-[9px] sm:text-[10px] font-bold">3 OUTLETS</span>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.06] font-mono text-[10px] sm:text-[11px] space-y-1 rounded-xs">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Bias Variance</span>
                <span className="text-[#F8FAFC] font-semibold">Low (0.14)</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-[#22D3EE] h-full w-[86%]" />
              </div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-[#131520] border border-white/[0.08] flex items-center justify-between text-[10px] sm:text-xs font-mono rounded-xs">
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              <ShieldCheck size={13} className="text-[#22D3EE]" />
              <span>SOURCE CROSS-REF</span>
            </div>
            <span className="text-[#F8FAFC] font-medium">Fact Verified</span>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-[#64748B]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>PYTHON FLASK</span>
          <span>•</span>
          <span>POSTGRESQL CORPUS</span>
          <span>•</span>
          <span>TF-IDF VECTORS</span>
        </div>
        <span className="text-[#8B5CF6]">LOCAL NEWS ANALYZER</span>
      </div>
    </div>
  );
}
