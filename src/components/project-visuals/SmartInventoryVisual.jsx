import React from 'react';
import { Database, LineChart, Bell } from 'lucide-react';

export default function SmartInventoryVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] bg-[#0c0d0f] border border-white/10 p-5 sm:p-7 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs">
            SI
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-xs tracking-wider">SMART INVENTORY // WEKA ML ENGINE</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70">JAVA JDBC</span>
            </div>
            <p className="text-[10px] text-white/40 font-mono">STOCK REPLENISHMENT & TWILIO DISPATCH PIPELINE</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/15 text-white/80 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
            ACID LOGGED
          </span>
        </div>
      </div>

      {/* Center Predictive Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
        {/* Left Column: Forecast Curve Simulation */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-4 bg-black/60 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <LineChart size={13} className="text-[#D4FF32]" />
                <span>LINEAR REGRESSION DEPLETION CURVE</span>
              </div>
              <span className="text-[#D4FF32] font-bold">R² = 0.941</span>
            </div>

            {/* SVG Visual Line Curve */}
            <div className="h-24 w-full bg-[#080809] border border-white/10 p-2 flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                {/* Reorder Threshold line */}
                <line x1="0" y1="42" x2="200" y2="42" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                {/* Regression line */}
                <path d="M 0 10 Q 50 18 100 28 T 150 40 T 200 54" fill="none" stroke="#D4FF32" strokeWidth="2" />
                {/* Danger zone point */}
                <circle cx="150" cy="40" r="3.5" fill="#EDEDEC" />
              </svg>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-white/50">
              <span>Day 1 (1,200 units)</span>
              <span className="text-[#D4FF32] font-bold">Reorder Alert: Day 18</span>
              <span>Day 30 (Forecast)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Automated Dispatch & Transaction Log */}
        <div className="md:col-span-5 space-y-3 flex flex-col justify-between">
          <div className="p-4 bg-black/60 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <Bell size={13} className="text-[#D4FF32]" />
                TWILIO DISPATCH
              </span>
              <span className="text-[#D4FF32] text-[10px] font-bold">SMS SENT</span>
            </div>

            <div className="p-2.5 bg-[#080809] border border-white/8 font-mono text-[11px]">
              <p className="text-white">Alert: SKU-4820 Stock Depletion</p>
              <p className="text-white/40 text-[10px] mt-0.5">Threshold crossed &lt; 250 safety units</p>
            </div>
          </div>

          <div className="p-3 bg-black/40 border border-white/8 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-white/60">
              <Database size={13} className="text-[#D4FF32]" />
              <span>TRANSACTION LATENCY</span>
            </div>
            <span className="text-white font-medium">1.8ms (JDBC Pool)</span>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-white/40">
        <div className="flex items-center gap-3">
          <span>JAVA SE</span>
          <span>•</span>
          <span>POSTGRESQL JDBC</span>
          <span>•</span>
          <span>WEKA ML CLASSIFIER</span>
        </div>
        <span className="text-white/70">BATCH TRANSACTION ENGINE</span>
      </div>
    </div>
  );
}
