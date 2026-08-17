import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check, FileText, Download, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';
import MagneticButton from '../ui/MagneticButton';
import { useCursor } from '../../hooks/useCursor';
import { useAhmedabadTime } from '../../hooks/useAhmedabadTime';
import ResumeModal from '../common/ResumeModal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const { isWorkingHours } = useAhmedabadTime();

  // Quick message composer state
  const [messageName, setMessageName] = useState('');
  const [messageText, setMessageText] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState('');

  const emailAddress = "zaidmemon8156@gmail.com";

  const handleCopyEmail = (e) => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { x, y },
        colors: ['#D4FF32', '#EDEDEC', '#71717A'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => setCopied(false), 3000);
  };

  const handleQuickDispatch = (e) => {
    e.preventDefault();
    const subject = `Inquiry / Opportunity from ${messageName || 'Collaborator'}`;
    const body = `Hi Zaid,\n\nFrom: ${messageName || 'Collaborator'}\n\nMessage:\n${messageText || 'I would like to discuss an opportunity with you.'}\n\n---\nSent from Portfolio`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(`To: ${emailAddress}\nSubject: ${subject}\n\n${body}`);

    // Trigger Mail
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4FF32', '#00F0FF', '#FFFFFF']
      });
    } catch {
      // safe fallback
    }

    setDispatchStatus('Message prepared! Mail client opened & text copied to clipboard.');
    setTimeout(() => setDispatchStatus(''), 4000);
  };

  const socialLinks = [
    {
      name: "Resume / CV",
      url: "/resume.pdf",
      icon: <FileText size={16} />,
      handle: "CV_MEMON ZAID SOHILBHAI",
      isResumeAction: true
    },
    {
      name: "GitHub",
      url: "https://github.com/Zaidmemon5412",
      icon: <GithubIcon size={16} />,
      handle: "@Zaidmemon5412"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zaid-memon-79656b318/",
      icon: <LinkedinIcon size={16} />,
      handle: "in/zaid-memon-79656b318"
    },
    {
      name: "Direct Mail",
      url: `mailto:${emailAddress}`,
      icon: <Mail size={16} />,
      handle: emailAddress
    }
  ];

  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative select-none">
      {/* Top Section Index */}
      <div className="flex items-center gap-3 mb-12 text-xs font-mono text-white/40 uppercase tracking-widest">
        <span className="text-[#D4FF32]">08</span>
        <span>/</span>
        <span>GET IN TOUCH</span>
      </div>

      {/* Monumental Editorial Headline */}
      <div className="space-y-6 mb-16 sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[0.88] uppercase"
        >
          HAVE SOMETHING<br />
          <span className="text-[#D4FF32]">WORTH BUILDING?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-medium text-2xl sm:text-4xl text-white tracking-tight"
        >
          Let's talk.
        </motion.p>

        <p className="text-sm sm:text-base text-white/60 max-w-xl font-light leading-relaxed">
          Open to software engineering internships, technical collaborations, and building serious digital products.
        </p>
      </div>

      {/* Contact Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-white/10 pt-10">
        {/* Email Box & Quick Dispatch Form (Span 7) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/40">
              <span>PRIMARY INBOX</span>
              <span className="flex items-center gap-1.5 text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF32]" />
                {isWorkingHours ? 'Available for outreach' : 'Async response'}
              </span>
            </div>

            <h3 className="font-mono text-xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight break-all">
              {emailAddress}
            </h3>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton
                strength={0.2}
                onClick={handleCopyEmail}
                cursorText={copied ? "COPIED!" : "COPY"}
                cursorType="copy"
              >
                <button
                  className={`px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    copied
                      ? 'bg-white text-black'
                      : 'bg-[#D4FF32] hover:bg-[#c2f211] text-black'
                  }`}
                >
                  {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                </button>
              </MagneticButton>

              <button
                onClick={() => setIsResumeOpen(true)}
                onMouseEnter={() => setCursor('pointer', 'RESUME')}
                onMouseLeave={resetCursor}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-medium border border-white/15 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <FileText size={14} className="text-[#D4FF32]" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                className="p-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 transition-colors"
                title="Download PDF"
              >
                <Download size={14} />
              </a>
            </div>
          </div>

          {/* Quick Message Dispatcher */}
          <form onSubmit={handleQuickDispatch} className="p-5 bg-black/40 border border-white/10 rounded-none space-y-3 mt-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/50 border-b border-white/10 pb-2">
              <span>QUICK MESSAGE DISPATCH</span>
              <span className="text-[#D4FF32]">INSTANT MAILTO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your Name / Organization"
                value={messageName}
                onChange={(e) => setMessageName(e.target.value)}
                className="px-3 py-2 bg-black/60 border border-white/10 text-white font-mono text-xs outline-none focus:border-[#D4FF32]"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-[#D4FF32] text-black font-mono font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#c2f211] transition-colors cursor-pointer"
              >
                <span>SEND DIRECT MESSAGE</span>
                <Send size={12} />
              </button>
            </div>

            <textarea
              rows={2}
              required
              placeholder="What project or opportunity would you like to discuss?"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="w-full px-3 py-2 bg-black/60 border border-white/10 text-white font-mono text-xs outline-none focus:border-[#D4FF32] resize-none"
            />

            {dispatchStatus && (
              <p className="text-xs font-mono text-[#D4FF32]">{dispatchStatus}</p>
            )}
          </form>
        </div>

        {/* Directory (Span 5) */}
        <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-8 lg:pt-0">
          <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
            NETWORK DIRECTORY & ASSETS
          </div>

          {socialLinks.map((social) => {
            if (social.isResumeAction) {
              return (
                <div
                  key={social.name}
                  className="p-4 border border-white/10 hover:border-[#D4FF32] transition-colors flex items-center justify-between group bg-black/40"
                >
                  <div
                    onClick={() => setIsResumeOpen(true)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div className="text-white/60 group-hover:text-[#D4FF32] transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-white/40 uppercase block">
                        {social.name}
                      </span>
                      <span className="font-mono text-xs text-white font-medium group-hover:text-[#D4FF32] transition-colors">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsResumeOpen(true)}
                      className="px-2 py-1 bg-white/10 hover:bg-[#D4FF32] text-white hover:text-black font-mono text-[10px] transition-colors cursor-pointer"
                    >
                      VIEW
                    </button>
                    <a
                      href="/resume.pdf"
                      download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                      className="p-1 bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                      title="Download PDF"
                    >
                      <Download size={13} />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('pointer', social.name.toUpperCase())}
                onMouseLeave={resetCursor}
                className="p-4 border border-white/10 hover:border-[#D4FF32] transition-colors flex items-center justify-between group bg-black/40 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white/60 group-hover:text-[#D4FF32] transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase block">
                      {social.name}
                    </span>
                    <span className="font-mono text-xs text-white font-medium group-hover:text-[#D4FF32] transition-colors">
                      {social.handle}
                    </span>
                  </div>
                </div>

                <div className="text-white/30 group-hover:text-white transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
