import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight, CheckCircle2, GraduationCap, Building } from 'lucide-react';
import { journeyData } from '../../data/journey';
import { certificationsData } from '../../data/certifications';
import { useCursor } from '../../hooks/useCursor';

export default function Journey() {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="education" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs font-mono text-[#64748B] uppercase tracking-widest">
            <span className="text-[#8B5CF6] font-bold">06</span>
            <span>/</span>
            <span>EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F8FAFC] tracking-tight uppercase">
            EDUCATION & JOURNEY
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-md">
          Academic foundation in Computer Science & Engineering paired with verified industry certifications and continuous project development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Timeline Stream (Span 7) */}
        <div className="lg:col-span-7 relative border-l border-white/[0.08] ml-2 sm:ml-4 space-y-12 sm:space-y-14 pl-6 sm:pl-10">
          {journeyData.map((item, index) => {
            const isNow = item.year === 'NOW';
            const isEducation = item.institution && item.institution.includes('University');

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group/timeline space-y-2.5"
              >
                {/* Timeline Marker Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 border transition-all duration-300 rounded-full ${
                    isNow
                      ? 'bg-[#8B5CF6] border-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]'
                      : 'bg-[#08090D] border-white/30 group-hover/timeline:border-[#8B5CF6] group-hover/timeline:bg-[#8B5CF6]'
                  }`}
                />

                {/* Year & Title */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded-xs ${
                        isNow ? 'bg-[#8B5CF6] text-white' : 'bg-white/10 text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F8FAFC]">
                      {item.title}
                    </h3>
                  </div>

                  {item.institution && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#22D3EE]">
                      {isEducation ? <GraduationCap size={13} /> : <Building size={13} />}
                      <span>{item.institution}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#0E1017] border border-white/[0.08] text-[#94A3B8] font-mono text-[10px] rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Verified Certifications & Credentials (Span 5) */}
        <div className="lg:col-span-5 space-y-6 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-10 pt-8 lg:pt-0">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-widest">
              <Award size={15} className="text-[#8B5CF6]" />
              <span>VERIFIED CERTIFICATIONS</span>
            </div>
            <span className="text-[10px] font-mono text-[#22D3EE]">COURSERA VERIFIED</span>
          </div>

          <div className="space-y-3">
            {certificationsData.map((cert, certIdx) => (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: certIdx * 0.08 }}
                onMouseEnter={() => setCursor('pointer', 'VERIFY')}
                onMouseLeave={resetCursor}
                className="group/cert p-4 bg-[#0E1017] hover:bg-[#131520] border border-white/[0.08] hover:border-[#8B5CF6]/60 transition-all flex items-start justify-between gap-3 cursor-pointer block rounded-xs shadow-sm"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#22D3EE]">
                    <CheckCircle2 size={12} className="text-[#22D3EE] flex-shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#F8FAFC] group-hover/cert:text-[#8B5CF6] transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B] pt-0.5">
                    <span>{cert.category}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="text-[#64748B] group-hover/cert:text-[#F8FAFC] transition-colors flex-shrink-0 pt-1">
                  <ArrowUpRight size={15} />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="p-3 bg-[#0E1017] border border-white/[0.08] font-mono text-[11px] text-[#94A3B8] flex items-center justify-between rounded-xs">
            <span>Official University & Industry Credential Badges</span>
            <span className="text-[#8B5CF6] font-medium">100% Verified Links</span>
          </div>
        </div>
      </div>
    </section>
  );
}
