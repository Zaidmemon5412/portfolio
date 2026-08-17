import React from 'react';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative"
    >
      {/* Section Index */}
      <div className="flex items-center gap-3 mb-12 text-xs font-mono text-white/40 uppercase tracking-widest">
        <span className="text-[#D4FF32]">01</span>
        <span>/</span>
        <span>ENGINEERING PHILOSOPHY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Large Editorial Statement */}
        <div className="lg:col-span-8 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]"
          >
            I like turning messy problems into{' '}
            <span className="text-[#D4FF32] underline underline-offset-8 decoration-[#D4FF32]/40">
              usable software.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-2xl text-base sm:text-lg text-white/70 font-light leading-relaxed"
          >
            <p>
              I am a <strong className="text-white font-medium">Computer Science & Engineering</strong> student based in Ahmedabad, focused on building serious web applications and exploring the intersection of frontend engineering, backend architecture, spatial data, and machine learning.
            </p>
            <p className="text-xs sm:text-sm text-white/40 font-mono leading-relaxed pt-2 border-t border-white/10">
              My engineering approach prioritizes data integrity, resilient schema design, and high-performance user interfaces over theoretical concepts.
            </p>
          </motion.div>
        </div>

        {/* Right Editorial Pillar List */}
        <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-8 lg:pt-0">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
            CORE DOMAINS // 2026
          </div>

          <div className="space-y-6 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-white font-bold block flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4FF32]" /> Frontend Systems
              </span>
              <p className="text-white/50 text-[11px] leading-relaxed">
                React, client-side state orchestration, responsive layouts, and fine-grained micro-interactions.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-white font-bold block flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4FF32]" /> Backend & APIs
              </span>
              <p className="text-white/50 text-[11px] leading-relaxed">
                Python, Django REST Framework, PostgreSQL relational modeling, and transactional data security.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-white font-bold block flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D4FF32]" /> Data & Intelligence
              </span>
              <p className="text-white/50 text-[11px] leading-relaxed">
                Web scraping pipelines, spatial GIS indexing, and applied predictive modeling with Scikit-learn & Weka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
