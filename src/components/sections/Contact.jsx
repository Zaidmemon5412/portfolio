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
        colors: ['#8B5CF6', '#22D3EE', '#F8FAFC'],
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
        colors: ['#8B5CF6', '#22D3EE', '#FFFFFF']
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
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] relative select-none">
      {/* Top Section Index */}
      <div className="flex items-center gap-3 mb-12 text-xs font-mono text-[#64748B] uppercase tracking-widest">
        <span className="text-[#8B5CF6] font-bold">07</span>
        <span>/</span>
        <span>GET IN TOUCH & LINKS</span>
      </div>

      {/* Monumental Editorial Headline */}
      <div className="space-y-6 mb-16 sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-[#F8FAFC] tracking-tight leading-[0.92] uppercase break-words"
        >
          HAVE SOMETHING<br />
          <span className="text-[#8B5CF6]">WORTH BUILDING?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-medium text-2xl sm:text-4xl text-[#F8FAFC] tracking-tight"
        >
          Let's talk.
        </motion.p>

        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-light leading-relaxed">
          Open to software engineering internships, technical collaborations, and building practical digital products.
        </p>
      </div>

      {/* Contact Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-white/[0.08] pt-10">
        {/* Email Box & Quick Dispatch Form (Span 7) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>PRIMARY INBOX</span>
              <span className="flex items-center gap-1.5 text-[#94A3B8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                {isWorkingHours ? 'Available for outreach' : 'Async response'}
              </span>
            </div>

            <h3 className="font-mono text-xl sm:text-3xl md:text-4xl text-[#F8FAFC] font-bold tracking-tight break-all">
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
                  className={`px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer rounded-xs ${
                    copied
                      ? 'bg-white text-black'
                      : 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white shadow-md shadow-[#8B5CF6]/20'
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
                className="px-5 py-2.5 bg-[#0E1017] hover:bg-[#131520] text-[#F8FAFC] font-mono text-xs font-medium border border-white/[0.08] hover:border-[#22D3EE]/50 flex items-center gap-2 transition-colors cursor-pointer rounded-xs"
              >
                <FileText size={14} className="text-[#22D3EE]" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                className="p-2.5 bg-[#0E1017] hover:bg-[#131520] text-[#94A3B8] hover:text-white border border-white/[0.08] transition-colors rounded-xs"
                title="Download PDF"
              >
                <Download size={14} />
              </a>
            </div>
          </div>

          {/* Quick Message Dispatcher */}
          <form onSubmit={handleQuickDispatch} className="p-5 bg-[#0E1017] border border-white/[0.08] rounded-xs space-y-3 mt-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#64748B] border-b border-white/[0.08] pb-2">
              <span>QUICK MESSAGE DISPATCH</span>
              <span className="text-[#8B5CF6] font-medium">INSTANT MAILTO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your Name / Organization"
                value={messageName}
                onChange={(e) => setMessageName(e.target.value)}
                className="px-3 py-2 bg-[#08090D] border border-white/[0.08] text-[#F8FAFC] font-mono text-xs outline-none focus:border-[#8B5CF6] rounded-xs"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-xs shadow-sm shadow-[#8B5CF6]/20"
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
              className="w-full px-3 py-2 bg-[#08090D] border border-white/[0.08] text-[#F8FAFC] font-mono text-xs outline-none focus:border-[#8B5CF6] resize-none rounded-xs"
            />

            {dispatchStatus && (
              <p className="text-xs font-mono text-[#22D3EE]">{dispatchStatus}</p>
            )}
          </form>
        </div>

        {/* Directory (Span 5) */}
        <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-8 lg:pt-0">
          <div className="text-xs font-mono text-[#64748B] uppercase tracking-widest mb-4">
            NETWORK DIRECTORY & ASSETS
          </div>

          {socialLinks.map((social) => {
            if (social.isResumeAction) {
              return (
                <div
                  key={social.name}
                  className="p-4 border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-colors flex items-center justify-between group bg-[#0E1017] rounded-xs"
                >
                  <div
                    onClick={() => setIsResumeOpen(true)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <div className="text-[#64748B] group-hover:text-[#8B5CF6] transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                        {social.name}
                      </span>
                      <span className="font-mono text-xs text-[#F8FAFC] font-medium group-hover:text-[#8B5CF6] transition-colors">
                        {social.handle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsResumeOpen(true)}
                      className="px-2.5 py-1 bg-white/10 hover:bg-[#8B5CF6] text-white font-mono text-[10px] transition-colors cursor-pointer rounded-xs"
                    >
                      VIEW
                    </button>
                    <a
                      href="/resume.pdf"
                      download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                      className="p-1 bg-white/10 hover:bg-white/20 text-white/80 transition-colors rounded-xs"
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
                className="p-4 border border-white/[0.08] hover:border-[#8B5CF6]/50 transition-colors flex items-center justify-between group bg-[#0E1017] cursor-pointer rounded-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#64748B] group-hover:text-[#8B5CF6] transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#64748B] uppercase block">
                      {social.name}
                    </span>
                    <span className="font-mono text-xs text-[#F8FAFC] font-medium group-hover:text-[#8B5CF6] transition-colors">
                      {social.handle}
                    </span>
                  </div>
                </div>

                <div className="text-[#64748B] group-hover:text-white transition-colors">
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
