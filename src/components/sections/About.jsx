import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Code2, Terminal, Award, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certificatesData } from '../../data/certificates';
import { useCursor } from '../../hooks/useCursor';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: '100%' },
          {
            y: '0%',
            duration: 0.9,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metadataItems = [
    { label: 'LOCATION', value: 'Based in India', icon: MapPin },
    { label: 'AVAILABILITY', value: 'Available Worldwide', icon: Globe },
    { label: 'FOCUS', value: 'Full-Stack / Python / React', icon: Code2 },
    { label: 'DEGREE', value: 'B.Tech CSE (2024 — 2026)', icon: Terminal },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE]">
      {/* Section Heading */}
      <div className="mb-12 md:mb-20">
        <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block mb-3">
          04 / PHILOSOPHY & IDENTITY
        </span>

        <div className="overflow-hidden">
          <h2
            ref={titleRef}
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase transform-gpu"
          >
            /ABOUT
          </h2>
        </div>
      </div>

      {/* Asymmetric Editorial Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Oversized Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <h3 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-[1.12] tracking-tight uppercase">
            I BUILD DIGITAL PRODUCTS THAT TURN COMPLEX PROBLEMS INTO SIMPLE EXPERIENCES.
          </h3>

          <div className="w-20 h-1 bg-[#111111]" />
        </motion.div>

        {/* Right Column: Supporting Paragraphs & Metadata Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-5 text-base sm:text-lg text-[#555555] font-sans font-light leading-relaxed">
            <p>
              I'm Zaid Memon, a Full-Stack Developer and Computer Science student driven by the desire to build elegant, high-impact web software and resilient backend systems.
            </p>
            <p>
              Whether engineering spatial real-estate intelligence platforms like <strong className="text-[#111111] font-medium">Verixa</strong> or architecting workforce telemetry engines like <strong className="text-[#111111] font-medium">Exertia</strong>, I focus on Django/Python backend design, PostgreSQL query efficiency, and refined React micro-interactions.
            </p>
          </div>

          {/* Metadata Cards Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E2DE]">
            {metadataItems.map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.label} className="space-y-1">
                  <span className="text-[11px] font-mono text-[#888888] tracking-wider uppercase block">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#111111]">
                    <IconComp size={14} className="text-[#666666]" />
                    <span>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verified Certifications Block */}
          <div className="pt-6 border-t border-[#E2E2DE] space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#888888] tracking-wider uppercase">
              <Award size={13} className="text-[#111111]" />
              <span>VERIFIED CERTIFICATIONS (COURSERA)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certificatesData.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor && setCursor('pointer')}
                  onMouseLeave={resetCursor}
                  className="p-3 rounded-xl border border-[#E2E2DE] bg-[#FFFFFF] hover:bg-[#ECECE9] transition-colors flex items-start justify-between gap-2 group"
                >
                  <span className="text-xs font-medium text-[#111111] leading-snug">
                    {cert.title}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#888888] group-hover:text-[#111111] shrink-0 mt-0.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
