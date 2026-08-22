import React from 'react';
import { Activity, Clock, ShieldCheck } from 'lucide-react';

export default function ExertiaVisual() {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] bg-[#0E1017] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between select-none overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#8B5CF6] flex items-center justify-center text-white font-mono font-bold text-xs rounded-xs flex-shrink-0">
            EX
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[#F8FAFC] font-mono font-bold text-[11px] sm:text-xs tracking-wider truncate">
                EXERTIA // WORKSPACE TELEMETRY
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 bg-white/5 border border-white/[0.08] text-[#94A3B8] rounded-xs hidden xs:inline">
                AGENT v1.2
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-mono truncate">
              DISTRIBUTED CLIENT DAEMON & FOCUS LEDGER
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] sm:text-[11px] font-mono rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
            LOCAL PRIVACY
          </span>
        </div>
      </div>

      {/* Center OS Telemetry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 my-3 sm:my-4">
        {/* Left Column: Focus & Productivity Metrics */}
        <div className="md:col-span-6 space-y-2.5 sm:space-y-3">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 rounded-xs">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[#94A3B8]">
                <Clock size={13} className="text-[#8B5CF6]" />
                <span className="text-[10px] sm:text-xs">DAILY FOCUS INDEX</span>
              </div>
              <span className="text-[#8B5CF6] font-bold text-xs sm:text-sm">94.8%</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2 sm:p-3 bg-[#08090D] border border-white/[0.08] rounded-xs">
                <span className="text-[#64748B] text-[9px] sm:text-[10px] block uppercase">Deep Focus</span>
                <span className="text-[#F8FAFC] font-bold text-xs sm:text-sm">5h 42m</span>
              </div>
              <div className="p-2 sm:p-3 bg-[#08090D] border border-white/[0.08] rounded-xs">
                <span className="text-[#64748B] text-[9px] sm:text-[10px] block uppercase">Sprint Velocity</span>
                <span className="text-[#F8FAFC] font-bold text-xs sm:text-sm">38 pts/wk</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-[#131520] border border-white/[0.08] flex items-center justify-between text-[10px] sm:text-xs font-mono rounded-xs">
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              <ShieldCheck size={13} className="text-[#22D3EE]" />
              <span>TELEMETRY STREAM</span>
            </div>
            <span className="text-[#F8FAFC]">Sanitized Local Rollup</span>
          </div>
        </div>

        {/* Right Column: Sprint Milestone Engine */}
        <div className="md:col-span-6 space-y-2.5 sm:space-y-3">
          <div className="p-3 sm:p-4 bg-[#131520] border border-white/[0.08] space-y-2.5 sm:space-y-3 h-full flex flex-col justify-between rounded-xs">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs">
                <Activity size={13} className="text-[#8B5CF6]" />
                ACTIVE SPRINT QUEUE
              </span>
              <span className="text-[#64748B] text-[9px] sm:text-[10px]">#SPRINT-08</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.08] rounded-xs">
                <div className="flex justify-between text-[#F8FAFC] font-medium text-[10px] sm:text-xs">
                  <span className="truncate">#TASK-842: Distributed Cache</span>
                  <span className="text-[#8B5CF6] ml-1 flex-shrink-0">85%</span>
                </div>
                <div className="w-full bg-white/10 h-1 mt-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#8B5CF6] h-full w-[85%]" />
                </div>
              </div>

              <div className="p-2 sm:p-2.5 bg-[#08090D] border border-white/[0.04] text-[#64748B] flex justify-between text-[10px] sm:text-xs rounded-xs">
                <span className="truncate">#TASK-843: JWT Auth Handshake</span>
                <span className="text-white/30 ml-1 flex-shrink-0">Queued</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-2.5 sm:pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] font-mono text-[#64748B]">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span>REACT + VITE</span>
          <span>•</span>
          <span>PYTHON TELEMETRY</span>
          <span>•</span>
          <span>REST APIS</span>
        </div>
        <span className="text-[#8B5CF6]">PORTABLE DEV IDENTITY</span>
      </div>
    </div>
  );
}
