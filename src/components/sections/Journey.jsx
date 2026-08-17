import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../data/journey';

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="text-[#D4FF32]">07</span>
            <span>/</span>
            <span>TRAJECTORY</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase">
            JOURNEY
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-white/40 max-w-md">
          A factual, milestone timeline detailing the transition from computer science fundamentals to active product architecture.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l border-white/10 ml-2 sm:ml-4 space-y-12 sm:space-y-16 pl-6 sm:pl-10">
        {journeyData.map((item, index) => {
          const isNow = item.year === 'NOW';

          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group/timeline space-y-3"
            >
              {/* Timeline Marker Node */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 border transition-all duration-300 ${
                isNow
                  ? 'bg-[#D4FF32] border-[#D4FF32]'
                  : 'bg-[#09090b] border-white/40 group-hover/timeline:border-[#D4FF32] group-hover/timeline:bg-[#D4FF32]'
              }`} />

              {/* Year & Title */}
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs font-bold px-2 py-0.5 ${
                  isNow ? 'bg-[#D4FF32] text-black' : 'bg-white/10 text-white'
                }`}>
                  {item.year}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-2xl">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/60 font-mono text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
