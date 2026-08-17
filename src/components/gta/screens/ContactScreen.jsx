import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Check, Copy, FileText, Download, Eye, X, Terminal } from 'lucide-react';
import { useGameState } from '../../../hooks/useGameState';
import ResumeModal from '../../common/ResumeModal';

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactScreen() {
  const { playSfx } = useGameState();
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  // Message Form State
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: 'Project Opportunity / Software Internship',
    message: '',
  });
  const [dispatchStatus, setDispatchStatus] = useState('');

  const email = 'zaidmemon8156@gmail.com';

  const handleCopyEmail = () => {
    playSfx('select');
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMessageModal = () => {
    playSfx('modal_open');
    setIsMessageModalOpen(true);
  };

  const handleCloseMessageModal = () => {
    playSfx('modal_close');
    setIsMessageModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    playSfx('dispatch');

    const { senderName, senderEmail, subject, message } = formData;
    const bodyContent = `Hi Zaid,

My Name: ${senderName || 'Anonymous Recruiter/Collaborator'}
My Email: ${senderEmail || 'Not Provided'}

Message:
${message || 'I would like to discuss a project / software engineering opportunity with you.'}

---
Sent via Portfolio Dispatch`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    
    // Copy to clipboard as a guarantee
    navigator.clipboard.writeText(`To: ${email}\nSubject: ${subject}\n\n${bodyContent}`);
    
    setDispatchStatus('TRANSMISSION PREPARED // OPENING CLIENT & COPIED TO CLIPBOARD');

    // Trigger Mail Client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setDispatchStatus('');
      setIsMessageModalOpen(false);
    }, 3500);
  };

  const comms = [
    {
      id: 'email',
      label: 'EMAIL',
      value: email,
      icon: Mail,
      isCopy: true,
    },
    {
      id: 'resume',
      label: 'RESUME / CV',
      value: 'CV_MEMON ZAID SOHILBHAI',
      icon: FileText,
      isResume: true,
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'Ahmedabad, Gujarat, India',
      icon: MapPin,
      isCopy: false,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'in/zaid-memon-79656b318',
      href: 'https://www.linkedin.com/in/zaid-memon-79656b318/',
      icon: LinkedinIcon,
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/Zaidmemon5412',
      href: 'https://github.com/Zaidmemon5412',
      icon: GithubIcon,
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 select-none z-20 pt-20 pb-36 sm:pt-24 sm:pb-28">
      {/* Title Header: CONTACT Let's Connect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6"
      >
        <h1 className="font-gta text-6xl sm:text-7xl md:text-8xl text-white uppercase tracking-tight leading-none gta-title-stroke">
          CONTACT
        </h1>
        <span className="font-script text-3xl sm:text-4xl text-[#00F0FF] gta-cyan-glow -mt-2 block pl-2 transform -rotate-2">
          Let's Connect
        </span>
      </motion.div>

      {/* Comms List Cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2 sm:gap-2.5 max-w-lg w-full mb-6"
      >
        {comms.map((comm) => {
          const Icon = comm.icon;

          if (comm.isResume) {
            return (
              <div
                key={comm.id}
                onMouseEnter={() => playSfx('card_hover')}
                className="gta-card p-3 sm:p-3.5 rounded-xs flex items-center justify-between gap-3.5 hover:border-[#00F0FF]/60 transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-8 h-8 rounded bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#00F0FF]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-gta text-[10px] tracking-widest text-white/50 font-bold uppercase">
                      {comm.label}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white font-medium group-hover:text-[#00F0FF] transition-colors truncate block">
                      {comm.value}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      playSfx('modal_open');
                      setIsResumeOpen(true);
                    }}
                    className="px-2.5 py-1 bg-white/10 hover:bg-[#00F0FF] text-white hover:text-black font-mono text-[11px] font-bold rounded-xs flex items-center gap-1 transition-colors cursor-pointer"
                    title="View Resume Preview"
                  >
                    <Eye size={12} />
                    <span>VIEW</span>
                  </button>
                  <a
                    href="/resume.pdf"
                    download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                    onClick={() => playSfx('select')}
                    className="p-1.5 bg-white/10 hover:bg-[#00E676] text-white hover:text-black rounded-xs transition-colors cursor-pointer"
                    title="Download PDF"
                  >
                    <Download size={13} />
                  </a>
                </div>
              </div>
            );
          }

          if (comm.href) {
            return (
              <a
                key={comm.id}
                href={comm.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => playSfx('card_hover')}
                onClick={() => playSfx('select')}
                className="gta-card p-3 sm:p-3.5 rounded-xs flex items-center gap-3.5 hover:border-[#00F0FF]/60 transition-all group cursor-pointer"
              >
                <div className="w-8 h-8 rounded bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#00F0FF]" />
                </div>
                <div>
                  <span className="block font-gta text-[10px] tracking-widest text-white/50 font-bold uppercase">
                    {comm.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium group-hover:text-[#00F0FF] transition-colors">
                    {comm.value}
                  </span>
                </div>
              </a>
            );
          }

          return (
            <div
              key={comm.id}
              onMouseEnter={() => playSfx('card_hover')}
              onClick={comm.isCopy ? handleCopyEmail : undefined}
              className={`gta-card p-3 sm:p-3.5 rounded-xs flex items-center justify-between gap-3.5 hover:border-[#00F0FF]/60 transition-all group ${
                comm.isCopy ? 'cursor-pointer' : ''
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded bg-[#00F0FF]/15 border border-[#00F0FF]/40 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#00F0FF]" />
                </div>
                <div>
                  <span className="block font-gta text-[10px] tracking-widest text-white/50 font-bold uppercase">
                    {comm.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium group-hover:text-[#00F0FF] transition-colors">
                    {comm.value}
                  </span>
                </div>
              </div>

              {comm.isCopy && (
                <div className="text-white/40 group-hover:text-[#00F0FF] transition-colors">
                  {copied ? <Check size={16} className="text-[#00E676]" /> : <Copy size={16} />}
                </div>
              )}
            </div>
          );
        })}
      </motion.div>

      {/* Action Buttons: SEND SECURE MESSAGE & VIEW RESUME */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 flex flex-wrap items-center gap-3"
      >
        <button
          type="button"
          onClick={handleOpenMessageModal}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#00F0FF] to-[#0088FF] text-black font-gta text-lg sm:text-xl font-black tracking-wider uppercase rounded-xs hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all transform hover:translate-x-1 cursor-pointer"
        >
          <span>SEND SECURE MESSAGE</span>
          <Send size={18} />
        </button>

        <button
          type="button"
          onClick={() => {
            playSfx('modal_open');
            setIsResumeOpen(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/80 hover:bg-black border border-white/20 hover:border-[#00F0FF] text-white font-gta text-sm sm:text-base font-bold tracking-wider uppercase rounded-xs transition-all cursor-pointer shadow-lg"
        >
          <FileText size={16} className="text-[#00F0FF]" />
          <span>VIEW RESUME</span>
        </button>
      </motion.div>

      {/* Interactive Message Dispatch Modal */}
      <AnimatePresence>
        {isMessageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseMessageModal}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0c0d12] border-2 border-[#00F0FF] p-5 sm:p-7 rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.4)] z-10 text-white"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF]">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h3 className="font-gta text-xl sm:text-2xl font-black uppercase tracking-wider gta-title-stroke">
                      SECURE DISPATCH
                    </h3>
                    <p className="font-mono text-[10px] text-white/50">DIRECT TO: {email}</p>
                  </div>
                </div>

                <button
                  onClick={handleCloseMessageModal}
                  className="p-1 rounded bg-white/10 hover:bg-[#FF007F] text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block font-gta text-[11px] uppercase tracking-wider text-[#00F0FF] mb-1 font-bold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 focus:border-[#00F0FF] text-white font-mono text-xs rounded-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-gta text-[11px] uppercase tracking-wider text-[#00F0FF] mb-1 font-bold">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 focus:border-[#00F0FF] text-white font-mono text-xs rounded-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-gta text-[11px] uppercase tracking-wider text-[#00F0FF] mb-1 font-bold">
                    TOPIC / SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Internship Opportunity"
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 focus:border-[#00F0FF] text-white font-mono text-xs rounded-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-gta text-[11px] uppercase tracking-wider text-[#00F0FF] mb-1 font-bold">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message, opportunity, or collaboration idea..."
                    className="w-full px-3.5 py-2.5 bg-black/60 border border-white/20 focus:border-[#00F0FF] text-white font-mono text-xs rounded-xs outline-none transition-colors resize-none"
                  />
                </div>

                {dispatchStatus && (
                  <div className="p-3 bg-[#00E676]/20 border border-[#00E676] text-[#00E676] font-mono text-xs rounded-xs animate-pulse">
                    {dispatchStatus}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseMessageModal}
                    className="px-4 py-2 text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#00F0FF] hover:bg-[#00d0df] text-black font-gta text-sm sm:text-base font-black uppercase tracking-wider rounded-xs flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                  >
                    <span>TRANSMIT DISPATCH</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
