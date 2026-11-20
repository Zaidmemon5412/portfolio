import React, { useState, useRef, useLayoutEffect } from 'react';
import { ArrowUpRight, Copy, Check, FileText, Send, MessageSquare, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursor } from '../../hooks/useCursor';
import { useGameState } from '../../hooks/useGameState';
import { CONTACT_INFO } from '../../data/certificates';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: 'Software Engineering / Full-Stack Opportunity',
    message: '',
  });
  const [sentNotice, setSentNotice] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const { openResumeModal } = useGameState();
  const email = CONTACT_INFO.email;

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
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSend = (e) => {
    e.preventDefault();
    const body = `Hi Zaid,\n\nName: ${formData.name}\nEmail: ${formData.senderEmail}\n\n${formData.message}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    navigator.clipboard.writeText(`To: ${email}\nSubject: ${formData.subject}\n\n${body}`);
    try {
      confetti({ particleCount: 55, spread: 65, origin: { y: 0.75 } });
    } catch {}
    setSentNotice(true);
    window.location.href = mailtoUrl;
    setTimeout(() => {
      setSentNotice(false);
      setComposerOpen(false);
    }, 3000);
  };

  const socialLinks = [
    { label: 'LinkedIn', sub: CONTACT_INFO.linkedinHandle, href: CONTACT_INFO.linkedinUrl },
    { label: 'GitHub', sub: CONTACT_INFO.githubHandle, href: CONTACT_INFO.githubUrl },
    { label: 'Direct Email', sub: email, href: `mailto:${email}` },
    { label: 'Resume / CV', sub: 'Interactive PDF', onClick: openResumeModal },
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
          <button
            type="button"
            onClick={() => setComposerOpen((prev) => !prev)}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#F5F5F3] text-sm sm:text-base font-medium hover:bg-[#242424] transition-all duration-300 group shadow-md cursor-pointer transform-gpu"
          >
            <MessageSquare size={17} />
            <span>{composerOpen ? 'Close Message Composer' : 'Start a Conversation'}</span>
            <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            onMouseEnter={() => setCursor && setCursor('pointer')}
            onMouseLeave={resetCursor}
            className="px-6 py-4 rounded-full border border-[#DEDEDA] bg-[#FFFFFF] text-[#111111] text-sm font-mono hover:bg-[#E2E2DE] transition-colors flex items-center gap-2 cursor-pointer"
          >
            {copied ? <Check size={16} className="text-[#55D98B]" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : email}</span>
          </button>
        </div>

        {/* Interactive Inline Message Composer */}
        {composerOpen && (
          <form
            onSubmit={handleQuickSend}
            className="max-w-2xl p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E2E2DE] shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#E2E2DE] pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold block">
                  DIRECT MESSAGE COMPOSER
                </span>
                <span className="text-[11px] font-mono text-[#888888]">
                  Recipient: {email}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setComposerOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#ECECE9] text-[#555555] cursor-pointer"
                aria-label="Close composer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe / Hiring Team"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F3] border border-[#E2E2DE] focus:border-[#111111] text-xs font-sans text-[#111111] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.senderEmail}
                  onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F3] border border-[#E2E2DE] focus:border-[#111111] text-xs font-sans text-[#111111] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F3] border border-[#E2E2DE] focus:border-[#111111] text-xs font-sans text-[#111111] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-1">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your role, project timeline, or collaboration idea..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F5F3] border border-[#E2E2DE] focus:border-[#111111] text-xs font-sans text-[#111111] outline-none transition-colors resize-none"
              />
            </div>

            {sentNotice && (
              <div className="p-3 rounded-xl bg-[#111111] text-[#55D98B] text-xs font-mono">
                ✓ Message copied to clipboard & opening your email client!
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:${email}`}
                className="text-xs font-mono text-[#666666] hover:text-[#111111] underline"
              >
                Or open default mail client directly ↗
              </a>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] text-[#F5F5F3] text-xs font-mono font-semibold hover:bg-[#242424] transition-colors cursor-pointer"
              >
                <span>Send Message</span>
                <Send size={13} />
              </button>
            </div>
          </form>
        )}

        {/* Minimal Social & Direct Links Grid */}
        <div className="pt-16 border-t border-[#E2E2DE] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social) =>
            social.onClick ? (
              <button
                key={social.label}
                type="button"
                onClick={social.onClick}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="p-4 rounded-xl border border-[#E2E2DE] bg-[#FFFFFF] hover:bg-[#ECECE9] transition-colors flex items-center justify-between group text-left cursor-pointer"
              >
                <div>
                  <span className="text-sm font-mono font-medium text-[#111111] block">{social.label}</span>
                  <span className="text-[11px] font-mono text-[#888888] block mt-0.5 truncate">{social.sub}</span>
                </div>
                <FileText size={16} className="text-[#888888] group-hover:text-[#111111] transition-colors shrink-0" />
              </button>
            ) : (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="p-4 rounded-xl border border-[#E2E2DE] bg-[#FFFFFF] hover:bg-[#ECECE9] transition-colors flex items-center justify-between group"
              >
                <div className="min-w-0 pr-2">
                  <span className="text-sm font-mono font-medium text-[#111111] block">{social.label}</span>
                  <span className="text-[11px] font-mono text-[#888888] block mt-0.5 truncate">{social.sub}</span>
                </div>
                <ArrowUpRight size={16} className="text-[#888888] group-hover:text-[#111111] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
