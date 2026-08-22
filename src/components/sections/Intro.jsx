import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cpu, TrendingUp } from 'lucide-react';

export default function Intro() {
  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative"
    >
      {/* Section Index */}
      <div className="flex items-center gap-3 mb-12 text-xs font-mono text-[#64748B] uppercase tracking-widest">
        <span className="text-[#8B5CF6] font-bold">01</span>
        <span>/</span>
        <span>ABOUT & TECHNICAL DIRECTION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Professional Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#F8FAFC] tracking-tight leading-tight">
              Building practical software with a strong focus on{' '}
              <span className="text-[#8B5CF6] underline underline-offset-8 decoration-[#8B5CF6]/40">
                architecture and execution.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed"
          >
            <p>
              I am a <strong className="text-[#F8FAFC] font-medium">Computer Science student</strong> and <strong className="text-[#F8FAFC] font-medium">Full-Stack Developer</strong> based in Ahmedabad. My primary focus is designing and shipping practical web applications where clean user interfaces meet reliable backend systems.
            </p>

            <p>
              Rather than isolated demo widgets, I build software around realistic operational workflows—including spatial real-estate decision engines, local workspace telemetry daemons, and automated data processing pipelines.
            </p>

            <div className="pt-3 border-t border-white/[0.08] space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-[#F8FAFC]">
                <span className="text-[#8B5CF6] font-bold text-xs mt-0.5">CURRENT FOCUS //</span>
                <span className="text-[#94A3B8]">
                  React frontend architectures, Django REST API modeling, relational schemas in PostgreSQL, and applied machine learning pipelines.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-[#F8FAFC]">
                <span className="text-[#22D3EE] font-bold text-xs mt-0.5">ACTIVELY IMPROVING //</span>
                <span className="text-[#94A3B8]">
                  System reliability, asynchronous job execution, database indexing strategies, and high-performance client state management.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 4 Technical Pillar Cards */}
        <div className="lg:col-span-5 space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10 pt-8 lg:pt-0">
          <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-4">
            CORE DOMAINS & SKILL MATRIX
          </div>

          <div className="space-y-3">
            {/* Card 1: Frontend */}
            <div className="p-4 bg-[#0E1017] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all rounded-xs space-y-1.5 group">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F8FAFC] font-bold flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors">
                  <Layers size={14} className="text-[#8B5CF6]" />
                  Frontend Engineering
                </span>
                <span className="text-[10px] text-[#64748B]">REACT / VITE</span>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Component hierarchy, custom hooks, responsive layouts, and fluid micro-interactions.
              </p>
            </div>

            {/* Card 2: Backend */}
            <div className="p-4 bg-[#0E1017] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all rounded-xs space-y-1.5 group">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F8FAFC] font-bold flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors">
                  <Database size={14} className="text-[#8B5CF6]" />
                  Backend & Relational Data
                </span>
                <span className="text-[10px] text-[#64748B]">PYTHON / DJANGO</span>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                RESTful API design, PostgreSQL data modeling, schema integrity, and transaction boundaries.
              </p>
            </div>

            {/* Card 3: AI & Data */}
            <div className="p-4 bg-[#0E1017] border border-white/[0.08] hover:border-[#22D3EE]/40 transition-all rounded-xs space-y-1.5 group">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F8FAFC] font-bold flex items-center gap-2 group-hover:text-[#22D3EE] transition-colors">
                  <Cpu size={14} className="text-[#22D3EE]" />
                  Data Pipelines & ML
                </span>
                <span className="text-[10px] text-[#64748B]">GIS / SCIKIT</span>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Web ingestion pipelines, PostGIS geospatial queries, and applied predictive modeling.
              </p>
            </div>

            {/* Card 4: Architecture & Growth */}
            <div className="p-4 bg-[#0E1017] border border-white/[0.08] hover:border-[#8B5CF6]/40 transition-all rounded-xs space-y-1.5 group">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#F8FAFC] font-bold flex items-center gap-2 group-hover:text-[#8B5CF6] transition-colors">
                  <TrendingUp size={14} className="text-[#8B5CF6]" />
                  Continuous Improvement
                </span>
                <span className="text-[10px] text-[#22D3EE]">ACTIVE SPRINT</span>
              </div>
              <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                Deepening distributed architecture patterns, caching layers, and end-to-end testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
