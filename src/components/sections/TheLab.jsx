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
    <section id="lab" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="text-[#D4FF32]">06</span>
            <span>/</span>
            <span>SANDBOX & NOTEBOOK</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            THE LAB
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-white/40 max-w-md">
          An editorial archive of small experiments, prototypes, algorithmic scripts, and unfinished ideas.
        </p>
      </div>

      {/* Editorial Archive Table */}
      <div className="border-t border-b border-white/10 divide-y divide-white/10">
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
                className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.01] px-2 sm:px-3 transition-colors"
              >
                {/* Index & Title */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-[#D4FF32] font-bold">
                    {item.index}
                  </span>
                  <span className="text-white/20 font-mono">—</span>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover/item:text-[#D4FF32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-white/40 md:hidden mt-0.5">
                      {item.type}
                    </p>
                  </div>
                </div>

                {/* Metadata & Toggle */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 text-xs font-mono">
                  <span className="hidden md:inline text-white/50">{item.type}</span>
                  <span className="hidden lg:inline text-white/30">{item.category}</span>
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/70 text-[10px]">
                    {item.status}
                  </span>
                  
                  <div className={`p-1 text-white/60 group-hover/item:text-white transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-[#D4FF32]' : ''
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
                    className="overflow-hidden bg-black/60 px-4 sm:px-8 py-6 mb-4 border border-white/10 space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-8 space-y-2">
                        <p className="text-sm text-white/80 leading-relaxed font-light">
                          {item.summary}
                        </p>
                        <p className="text-xs font-mono text-[#D4FF32]">
                          Key insight: {item.highlights}
                        </p>
                      </div>

                      <div className="md:col-span-4 flex flex-col md:items-end gap-3">
                        <div className="flex flex-wrap gap-1.5 md:justify-end">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 bg-white/5 text-white/70 font-mono text-[10px] border border-white/5"
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
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/15 text-white font-mono text-xs transition-colors cursor-pointer"
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
