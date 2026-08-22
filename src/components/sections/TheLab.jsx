import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { labExperimentsData } from '../../data/labExperiments';
import { useCursor } from '../../hooks/useCursor';

export default function TheLab() {
  const [expandedId, setExpandedId] = useState(null);
  const { setCursor, resetCursor } = useCursor();

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="lab" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">06</span>
            <span>/</span>
            <span>SANDBOX & NOTEBOOK</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            THE LAB
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-md">
          An archive of focused experiments, prototypes, algorithmic scripts, and engineering explorations.
        </p>
      </div>

      {/* Editorial Archive Table */}
      <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
        {labExperimentsData.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="group/item transition-colors duration-200"
            >
              {/* Main Row */}
              <div
                onClick={() => toggleExpand(item.id)}
                onMouseEnter={() => setCursor('lab', 'EXPLORE')}
                onMouseLeave={resetCursor}
                className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] px-2 sm:px-3 transition-colors rounded-xs"
              >
                {/* Index & Title */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#8B5CF6] font-bold">
                    {item.index}
                  </span>
                  <span className="text-white/20 font-mono">—</span>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#F8FAFC] group-hover/item:text-[#8B5CF6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-[#64748B] md:hidden mt-0.5">
                      {item.type}
                    </p>
                  </div>
                </div>

                {/* Metadata & Toggle */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 text-xs font-mono">
                  <span className="hidden md:inline text-[#94A3B8]">{item.type}</span>
                  <span className="hidden lg:inline text-[#64748B]">{item.category}</span>
                  <span className="px-2 py-0.5 bg-[#0E1017] border border-white/[0.08] text-[#94A3B8] text-[10px] rounded-xs">
                    {item.status}
                  </span>
                  
                  <div className={`p-1 text-[#64748B] group-hover/item:text-white transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#8B5CF6]' : ''
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Expandable Deep Dive Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden bg-[#0E1017] px-4 sm:px-8 py-6 mb-4 border border-white/[0.08] space-y-4 rounded-xs shadow-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-8 space-y-2">
                        <p className="text-sm text-[#F8FAFC]/90 leading-relaxed font-light">
                          {item.summary}
                        </p>
                        <p className="text-xs font-mono text-[#22D3EE]">
                          Key insight: {item.highlights}
                        </p>
                      </div>

                      <div className="md:col-span-4 flex flex-col md:items-end gap-3">
                        <div className="flex flex-wrap gap-1.5 md:justify-end">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 bg-[#131520] text-[#94A3B8] font-mono text-[10px] border border-white/[0.08] rounded-xs"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={item.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setCursor('pointer', 'GITHUB')}
                          onMouseLeave={resetCursor}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 text-[#F8FAFC] font-mono text-xs transition-colors cursor-pointer rounded-xs"
                        >
                          <GithubIcon size={13} />
                          <span>View Code</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
