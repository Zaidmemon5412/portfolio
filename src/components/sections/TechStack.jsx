import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Terminal, Cpu, Wrench } from 'lucide-react';
import { techStackData } from '../../data/techStack';

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Programming: Terminal,
  "AI / Data": Cpu,
  Tools: Wrench,
};

export default function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">03</span>
            <span>/</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            SKILLS & TOOLS
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-md">
          A structured index of practical technologies used across production applications, backend architectures, and data systems.
        </p>
      </div>

      {/* 6 Categorized Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStackData.map((group, groupIdx) => {
          const Icon = categoryIcons[group.category] || Code2;

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
              className="p-6 bg-[#0E1017] border border-white/[0.08] hover:border-[#8B5CF6]/30 hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.12)] rounded-xs flex flex-col justify-between space-y-5 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xs bg-[#131520] group-hover:bg-[#8B5CF6]/15 border border-white/[0.08] group-hover:border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] group-hover:text-[#22D3EE] transition-all duration-200">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#F8FAFC]">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono text-[#64748B] tracking-wider uppercase block">
                      {group.tag}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2 py-0.5 bg-white/5 border border-white/[0.06] text-[#94A3B8] group-hover:text-[#F8FAFC] group-hover:border-[#8B5CF6]/30 transition-colors rounded-xs">
                  {group.skills.length}
                </span>
              </div>

              {/* Refined Skill Pills Matrix with Smooth Proper Hover */}
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item p-3 bg-[#08090D]/80 hover:bg-[#131520] border border-white/[0.06] hover:border-[#8B5CF6]/50 hover:shadow-[0_4px_16px_rgba(139,92,246,0.15)] rounded-xs flex items-center justify-between font-mono text-xs transition-all duration-200 cursor-default"
                  >
                    <span className="font-medium text-[#F8FAFC] group-hover/item:text-[#A78BFA] flex items-center gap-2.5 transition-colors duration-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-[#22D3EE] group-hover/item:shadow-[0_0_8px_#22D3EE] transition-all duration-200" />
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-[#64748B] group-hover/item:text-[#22D3EE] transition-colors duration-200">
                      {skill.appliedIn.split(',')[0]}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
