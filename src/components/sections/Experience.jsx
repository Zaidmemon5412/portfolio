import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { journeyData } from '../../data/journey';
import { useCursor } from '../../hooks/useCursor';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { setCursor, resetCursor } = useCursor();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  // Use MotionValues for GPU-accelerated cursor position without React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left + 30);
    mouseY.set(e.clientY - rect.top - 80);
  };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading Reveal
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

  // Authentic local project & portrait visuals for each experience milestone
  const previewImages = [
    '/zaid_portrait-opt.jpg?v=2',
    '/smart_inventory.jpg',
    '/verixa.png',
    '/exertia.png',
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-[#242424] text-[#F5F5F3] py-24 md:py-36 rounded-3xl my-10 relative overflow-hidden shadow-2xl transform-gpu transition-colors duration-700"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-14">
        
        {/* Section Heading */}
        <div className="mb-14 md:mb-24">
          <span className="text-xs font-mono tracking-widest text-[#999999] uppercase block mb-3">
            03 / CAREER & BACKGROUND
          </span>

          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#F5F5F3] tracking-tighter uppercase transform-gpu"
            >
              /EXPERIENCE
            </h2>
          </div>
        </div>

        {/* Horizontal Experience Rows */}
        <div className="border-t border-[#3A3A3A] relative">
          {journeyData.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (setCursor) setCursor('pointer');
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  resetCursor();
                }}
                className={`relative py-9 sm:py-12 px-4 sm:px-8 border-b border-[#3A3A3A] transition-colors duration-300 group cursor-pointer ${
                  isHovered ? 'bg-[#2E2E2E]' : 'bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Date / Year */}
                  <div className="lg:col-span-3">
                    <span className="font-mono text-sm sm:text-base text-[#999999] group-hover:text-[#F5F5F3] transition-colors">
                      {item.year}
                    </span>
                  </div>

                  {/* Role & Organization */}
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F3] group-hover:translate-x-2.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-[#999999]">
                      {item.institution}
                    </p>
                  </div>

                  {/* Description & Skill Tags */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="text-sm text-[#CCCCCC] font-sans font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#1A1A1A] text-[#999999] text-[11px] font-mono rounded-md border border-[#333333]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Floating Preview Image on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.92, x: 20 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        x: mouseX,
                        y: mouseY,
                      }}
                      className="absolute top-0 left-0 z-30 pointer-events-none hidden lg:block w-[230px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#111111] transform-gpu will-change-transform"
                    >
                      <img
                        src={previewImages[index % previewImages.length]}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
