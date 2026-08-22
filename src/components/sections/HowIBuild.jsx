import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { buildProcessData } from '../../data/buildProcess';
import { useCursor } from '../../hooks/useCursor';

export default function HowIBuild() {
  const [activeStep, setActiveStep] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="process" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">03</span>
            <span>/</span>
            <span>METHODOLOGY</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            HOW I BUILD
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-md">
          A 6-phase engineering framework prioritizing problem clarity, architecture, and empirical testing over superficial polish.
        </p>
      </div>

      {/* Sequence Stepper */}
      <div className="border-t border-white/[0.08] divide-y divide-white/[0.08]">
        {buildProcessData.map((item, index) => {
          const isSelected = activeStep === index;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setCursor('pointer', item.phase)}
              onMouseLeave={resetCursor}
              className={`py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start cursor-pointer transition-colors duration-200 ${
                isSelected ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
              }`}
            >
              {/* Col 1: Phase Index & Name */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="font-mono text-sm sm:text-base font-bold text-[#8B5CF6]">
                  {item.step}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F8FAFC] tracking-tight">
                  {item.phase}
                </h3>
              </div>

              {/* Col 2: Headline & Core Principle */}
              <div className="lg:col-span-5 space-y-2">
                <p className="font-mono text-sm sm:text-base text-[#F8FAFC] font-medium">
                  {item.headline}
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Col 3: Metric / Sub-focus */}
              <div className="lg:col-span-3 lg:text-right font-mono text-xs text-[#64748B] pt-1">
                <span className="inline-block px-2.5 py-1 bg-[#0E1017] border border-white/[0.08] text-[#94A3B8] rounded-xs">
                  {item.metrics}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
