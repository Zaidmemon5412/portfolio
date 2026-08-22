import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, MapPin, Layers, Clock } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export default function CurrentlyBuilding() {
  const technologies = [
    'React',
    'Django REST Framework',
    'PostgreSQL',
    'PostGIS',
    'Python',
    'Scrapy / Ingestion',
    'Tailwind CSS'
  ];

  const activeWorkModules = [
    {
      title: 'RERA Registry Ingestion',
      status: 'Active Pipeline',
      detail: 'Automated data extractors parsing state regulatory disclosures, past project delivery delays, and builder litigation notices.'
    },
    {
      title: 'Spatial Locality Indexing',
      status: 'In Development',
      detail: 'PostGIS queries mapping corridor infrastructure, neighborhood price benchmarks, and connectivity scores in Ahmedabad.'
    },
    {
      title: 'Buyer Decision Matrix',
      status: 'UI Prototype',
      detail: 'React comparison interface highlighting fair-value pricing bands and builder credibility ratings.'
    }
  ];

  return (
    <section id="currently-building" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between mb-8 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[#8B5CF6] font-bold">05</span>
          <span className="text-white/20">/</span>
          <span className="text-[#F8FAFC] tracking-widest uppercase font-bold">CURRENTLY BUILDING</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] text-[11px] font-mono rounded-xs">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
          <span>IN PROGRESS</span>
        </div>
      </div>

      {/* Main Compact Spotlight Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0E1017] to-[#0A0C12] border border-[#8B5CF6]/25 hover:border-[#8B5CF6]/40 transition-all rounded-xs shadow-[0_10px_35px_-10px_rgba(139,92,246,0.15)] relative overflow-hidden"
      >
        {/* Subtle Ambient Background Flare */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Project Identity & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#22D3EE] mb-2">
                <GitBranch size={13} />
                <span className="tracking-wider uppercase">PRIMARY ACTIVE ENGINEERING SPRINT</span>
              </div>

              <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] tracking-tight">
                VERIXA
              </h3>
              
              <p className="font-mono text-sm sm:text-base text-[#A78BFA] mt-1 font-medium">
                Property Decision Intelligence Platform
              </p>
            </div>

            <p className="text-sm text-[#94A3B8] font-light leading-relaxed">
              I am developing a decision-support platform designed to help property buyers evaluate real-estate options with confidence—synthesizing regulatory RERA verification, developer credibility track records, spatial locality intelligence, and historical price trend analysis into an objective scoring system.
            </p>

            {/* Actually Used Tech Stack */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest block">
                ACTIVE TECH STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-xs bg-[#131520] border border-white/[0.08] text-[#F8FAFC]/90 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Location & Status Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#64748B]">
              <span className="flex items-center gap-1.5 text-[#94A3B8]">
                <MapPin size={12} className="text-[#8B5CF6]" />
                Target Metro: Ahmedabad / Gujarat
              </span>
              <span>•</span>
              <a
                href="https://github.com/Zaidmemon5412"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A78BFA] hover:text-white transition-colors"
              >
                <GithubIcon size={13} />
                <span>Repository updates on GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Active Modules & Transparent Progress Breakdown */}
          <div className="lg:col-span-6 space-y-4 lg:pl-4">
            <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-widest block">
              CURRENT ENGINEERING MODULES
            </span>

            <div className="space-y-3">
              {activeWorkModules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#131520]/80 border border-white/[0.06] rounded-xs space-y-1.5 hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#F8FAFC] font-semibold flex items-center gap-2">
                      <Layers size={13} className="text-[#8B5CF6]" />
                      {mod.title}
                    </span>
                    <span className="text-[10px] text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 border border-[#22D3EE]/20 rounded-xs">
                      {mod.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#94A3B8] font-light leading-relaxed">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Transparent Note Banner */}
            <div className="p-3 bg-[#08090D] border border-white/[0.06] rounded-xs flex items-center gap-3 text-xs font-mono text-[#64748B]">
              <Clock size={14} className="text-[#8B5CF6] flex-shrink-0" />
              <span>
                Backend endpoints and scrapers are operational locally; full spatial mapping and valuation models are in active iteration.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
