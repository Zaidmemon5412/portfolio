import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursor } from '../../hooks/useCursor';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const email = 'zaidmemon5412@gmail.com';

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

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

      // Line-by-Line CTA Headline Reveal
      gsap.fromTo(
        [line1Ref.current, line2Ref.current],
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.95,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: line1Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/zaidmemon' },
    { label: 'GitHub', href: 'https://github.com/Zaidmemon5412' },
    { label: 'X / Twitter', href: 'https://x.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-36 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE]">
      {/* Section Heading */}
      <div className="mb-12 md:mb-20">
        <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block mb-3">
          05 / GET IN TOUCH
        </span>

        <div className="overflow-hidden">
          <h2
            ref={titleRef}
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase transform-gpu"
          >
            /CONTACT
          </h2>
        </div>
      </div>

      {/* Main Giant Callout Section */}
      <div className="space-y-12">
        <div className="max-w-4xl space-y-6">
          <div className="space-y-1">
            <div className="overflow-hidden">
              <h3
                ref={line1Ref}
                className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] leading-[0.92] tracking-tighter uppercase transform-gpu"
              >
                LET'S BUILD SOMETHING
              </h3>
            </div>

            <div className="overflow-hidden">
              <h3
                ref={line2Ref}
                className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] leading-[0.92] tracking-tighter uppercase transform-gpu"
              >
                GREAT.
              </h3>
            </div>
          </div>

          <p className="text-base sm:text-xl text-[#555555] font-sans font-light leading-relaxed max-w-2xl">
            Have a project in mind, need technical architecture consulting, or want to discuss full-stack & AI automation roles? Reach out directly.
          </p>
        </div>

        {/* Primary Contact Action & Email Copy Pill */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={`mailto:${email}`}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#F5F5F3] text-sm sm:text-base font-medium hover:bg-[#242424] transition-all duration-300 group shadow-md cursor-pointer transform-gpu"
          >
            <span>Start a Conversation</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-4 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#111111] text-sm font-mono hover:bg-[#E2E2DE] transition-colors flex items-center gap-2"
          >
            {copied ? <Check size={16} className="text-[#55D98B]" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : email}</span>
          </button>
        </div>

        {/* Minimal Social Links Grid */}
        <div className="pt-16 border-t border-[#E2E2DE] grid grid-cols-2 sm:grid-cols-4 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl border border-[#E2E2DE] bg-[#FFFFFF] hover:bg-[#ECECE9] transition-colors flex items-center justify-between group"
            >
              <span className="text-sm font-mono text-[#111111]">{social.label}</span>
              <ArrowUpRight size={16} className="text-[#888888] group-hover:text-[#111111] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
