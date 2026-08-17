import React from 'react';
import { Activity, Clock, ShieldCheck } from 'lucide-react';

export default function ExertiaVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[460px] bg-[#0c0d0f] border border-white/10 p-5 sm:p-7 flex flex-col justify-between select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white/10 border border-white/20 flex items-center justify-center text-white font-mono font-bold text-xs">
            EX
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-mono font-bold text-xs tracking-wider">EXERTIA // WORKSPACE TELEMETRY</span>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/70">AGENT v1.2</span>
            </div>
            <p className="text-[10px] text-white/40 font-mono">DISTRIBUTED CLIENT DAEMON & FOCUS LEDGER</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/15 text-white/80 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
            LOCAL PRIVACY MODE
          </span>
        </div>
      </div>

      {/* Center OS Telemetry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-4">
        {/* Left Column: Focus & Productivity Metrics */}
        <div className="md:col-span-6 space-y-3">
          <div className="p-4 bg-black/60 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <div className="flex items-center gap-2 text-white/70">
                <Clock size={13} className="text-[#D4FF32]" />
                <span>DAILY FOCUS INDEX</span>
              </div>
              <span className="text-white font-bold">94.8%</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 bg-[#080809] border border-white/8">
                <span className="text-white/40 text-[10px] block uppercase">Deep Focus</span>
                <span className="text-white font-bold text-sm">5h 42m</span>
              </div>
              <div className="p-3 bg-[#080809] border border-white/8">
                <span className="text-white/40 text-[10px] block uppercase">Sprint Velocity</span>
                <span className="text-white font-bold text-sm">38 pts / wk</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-black/40 border border-white/8 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-white/60">
              <ShieldCheck size={13} className="text-[#D4FF32]" />
              <span>TELEMETRY STREAM</span>
            </div>
            <span className="text-white/90">Sanitized Local Rollup</span>
          </div>
        </div>

        {/* Right Column: Sprint Milestone Engine */}
        <div className="md:col-span-6 space-y-3">
          <div className="p-4 bg-black/60 border border-white/10 space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5">
                <Activity size={13} className="text-[#D4FF32]" />
                ACTIVE SPRINT QUEUE
              </span>
              <span className="text-white/40 text-[10px]">#SPRINT-08</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-[#080809] border border-white/10">
                <div className="flex justify-between text-white font-medium">
                  <span>#TASK-842: Distributed Cache Sync</span>
                  <span className="text-[#D4FF32]">85%</span>
                </div>
                <div className="w-full bg-white/10 h-1 mt-2">
                  <div className="bg-[#D4FF32] h-full w-[85%]" />
                </div>
              </div>

              <div className="p-2.5 bg-[#080809] border border-white/5 text-white/50 flex justify-between">
                <span>#TASK-843: JWT Auth Handshake</span>
                <span className="text-white/30">Queued</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-white/40">
        <div className="flex items-center gap-3">
          <span>REACT + VITE</span>
          <span>•</span>
          <span>PYTHON TELEMETRY DAEMON</span>
          <span>•</span>
          <span>REST API CONTRACTS</span>
        </div>
        <span className="text-white/60">PORTABLE DEV IDENTITY</span>
      </div>
    </div>
  );
}
