import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../../data/techStack';
import { useCursor } from '../../hooks/useCursor';

export default function TechStack() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="stack" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="text-[#D4FF32]">04</span>
            <span>/</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            TOOLS I BUILD WITH
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-white/40 max-w-md">
          A focused stack of reliable technologies used across production builds, backend systems, and data pipelines.
        </p>
      </div>

      {/* Dynamic Inspector Bar */}
      <div className="mb-12 p-4 bg-black/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-[#D4FF32] font-bold">TOOL INSPECTOR:</span>
          <span>
            {hoveredSkill ? (
              <span className="text-white font-medium">
                {hoveredSkill.name} — <span className="text-white/60 font-light">{hoveredSkill.focus}</span>
              </span>
            ) : (
              <span className="text-white/40">Hover any tool to inspect applied engineering context & project linkage</span>
            )}
          </span>
        </div>

        {hoveredSkill && (
          <div className="flex items-center gap-2 text-[11px] text-[#D4FF32] bg-[#D4FF32]/10 px-3 py-1 border border-[#D4FF32]/30">
            <span>Applied in: {hoveredSkill.usedIn.join(', ').toUpperCase()}</span>
          </div>
        )}
      </div>

      {/* 4 Categorized Columns with Hairline Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStackData.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
            className="space-y-6"
          >
            {/* Category Header */}
            <div className="border-b border-white/10 pb-3">
              <div className="flex items-center justify-between">
                <h3 className="font-mono font-bold text-xs text-white tracking-widest uppercase">
                  {group.category}
                </h3>
                <span className="text-[10px] font-mono text-white/30">{group.skills.length} TOOLS</span>
              </div>
              <p className="text-[11px] text-white/40 font-light mt-1">
                {group.description}
              </p>
            </div>

            {/* Skill List */}
            <div className="space-y-2">
              {group.skills.map((skill) => {
                const isHovered = hoveredSkill?.name === skill.name;

                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => {
                      setHoveredSkill(skill);
                      setCursor('pointer', skill.name);
                    }}
                    onMouseLeave={() => {
                      setHoveredSkill(null);
                      resetCursor();
                    }}
                    className={`p-3 border transition-all duration-200 cursor-default ${
                      isHovered
                        ? 'bg-white/5 border-[#D4FF32] text-white'
                        : 'bg-transparent border-white/8 text-white/80 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-medium">
                      <span className={isHovered ? 'text-[#D4FF32]' : 'text-white'}>
                        {skill.name}
                      </span>
                      {isHovered && (
                        <span className="text-[10px] text-white/40">Active</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
