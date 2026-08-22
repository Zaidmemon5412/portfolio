import React from 'react';
import { Database, LineChart, Bell } from 'lucide-react';

export default function SmartInventoryVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] bg-[#0E1017] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs rounded-xs flex-shrink-0">
            SI
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#F8FAFC] font-mono font-bold text-[11px] sm:text-xs tracking-wider truncate">
                SMART INVENTORY // WEKA ML ENGINE
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 border border-white/[0.08] text-[#94A3B8] rounded-xs hidden xs:inline">
                JAVA JDBC
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-mono truncate">
              STOCK REPLENISHMENT & TWILIO DISPATCH PIPELINE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] sm:text-[11px] font-mono rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            ACID LOGGED
          </span>
        </div>
      </div>

      {/* Center Predictive Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-4">
        {/* Left Column: Forecast Curve Simulation */}
        <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 rounded-xs">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#94A3B8]">
                <LineChart size={13} className="text-[#8B5CF6]" />
                <span className="text-[10px] sm:text-xs">LINEAR REGRESSION CURVE</span>
              </div>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm">R² = 0.941</span>
            </div>

            {/* SVG Visual Line Curve */}
            <div className="h-20 sm:h-24 w-full bg-[#08090D] border border-white/[0.08] p-2 flex items-end rounded-xs">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                {/* Reorder Threshold line */}
                <line x1="0" y1="42" x2="200" y2="42" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                {/* Regression line */}
                <path d="M 0 10 Q 50 18 100 28 T 150 40 T 200 54" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                {/* Danger zone point */}
                <circle cx="150" cy="40" r="3.5" fill="#22D3EE" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-[#64748B]">
              <span>Day 1 (1.2k units)</span>
              <span className="text-[#22D3EE] font-bold">Alert: Day 18</span>
              <span>Day 30 (Forecast)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Automated Dispatch & Transaction Log */}
        <div className="md:col-span-5 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-1.5 sm:space-y-2 rounded-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                <Bell size={13} className="text-[#8B5CF6]" />
                TWILIO DISPATCH
              </span>
              <span className="text-[#22D3EE] text-[9px] sm:text-[10px] font-bold">SMS SENT</span>
            </div>

            <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.06] font-mono text-[10px] sm:text-[11px] rounded-xs">
              <p className="text-[#F8FAFC]">Alert: SKU-4820 Stock Depletion</p>
              <p className="text-[#64748B] text-[9px] sm:text-[10px] mt-0.5">&lt; 250 safety threshold units</p>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-[#131520] border border-white/[0.08] flex items-center justify-between text-[10px] sm:text-xs font-mono rounded-xs">
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              <Database size={13} className="text-[#22D3EE]" />
              <span>TRANSACTION LATENCY</span>
            </div>
            <span className="text-[#F8FAFC] font-medium">1.8ms (JDBC)</span>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-[#64748B]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>JAVA SE</span>
          <span>•</span>
          <span>POSTGRESQL JDBC</span>
          <span>•</span>
          <span>WEKA ML</span>
        </div>
        <span className="text-[#8B5CF6]">BATCH TRANSACTION ENGINE</span>
      </div>
    </div>
  );
}
