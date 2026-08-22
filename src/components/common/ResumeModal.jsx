import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Maximize2, Minimize2 } from 'lucide-react';
import { playSoundEffect } from '../../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const prevIsOpenRef = useRef(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSoundEffect('modal_close');
        if (onCloseRef.current) onCloseRef.current();
      }
    };

    if (isOpen) {
      if (!prevIsOpenRef.current) {
        playSoundEffect('modal_open');
      }
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsFullscreen(false);
    }

    prevIsOpenRef.current = Boolean(isOpen);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const resumePdfPath = '/resume.pdf';
  const pdfUrlWithParams = `${resumePdfPath}#view=FitH&toolbar=1&navpanes=0`;

  const handleClose = () => {
    playSoundEffect('modal_close');
    if (onClose) onClose();
  };

  const toggleFullscreen = () => {
    playSoundEffect('select');
    setIsFullscreen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-1 sm:p-3 md:p-5 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#08090D]/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative bg-[#0E1017] border border-white/[0.12] rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 transition-all duration-300 ${
              isFullscreen
                ? 'w-full max-w-[98vw] h-[97vh]'
                : 'w-full max-w-5xl h-[88vh] sm:h-[92vh]'
            }`}
          >
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-white/[0.08] flex items-center justify-between bg-[#131520]/95 flex-shrink-0">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                  <FileText size={16} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-xs sm:text-base text-[#F8FAFC] font-bold uppercase tracking-wider truncate">
                    ZAID MEMON — RESUME / CV
                  </h3>
                  <p className="font-mono text-[10px] sm:text-xs text-[#94A3B8] truncate hidden xs:block">
                    B.Tech CSE • Full-Stack Developer • React, Python, Django, PostgreSQL
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {/* Download PDF */}
                <a
                  href={resumePdfPath}
                  download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                  onClick={() => playSoundEffect('select')}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-mono text-xs font-bold rounded-xs transition-colors cursor-pointer shadow-sm"
                  title="Download PDF"
                >
                  <Download size={13} />
                  <span className="hidden sm:inline">DOWNLOAD PDF</span>
                </a>

                {/* Open in New Window */}
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSoundEffect('select')}
                  className="p-1.5 sm:px-2.5 sm:py-1.5 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-mono text-xs rounded-xs border border-white/[0.08] transition-colors cursor-pointer inline-flex items-center gap-1"
                  title="Open PDF in new window"
                >
                  <ExternalLink size={13} />
                  <span className="hidden md:inline text-[11px]">OPEN IN TAB</span>
                </a>

                {/* Fullscreen Toggle */}
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-sm bg-white/5 hover:bg-white/15 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  aria-label="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-sm bg-white/5 hover:bg-[#FF007F]/20 text-[#94A3B8] hover:text-white transition-colors cursor-pointer ml-0.5"
                  aria-label="Close Resume Modal"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Container */}
            <div className="relative flex-1 w-full h-full bg-[#08090D] overflow-hidden flex flex-col">
              <object
                data={pdfUrlWithParams}
                type="application/pdf"
                className="w-full h-full flex-1 border-none"
              >
                <iframe
                  src={pdfUrlWithParams}
                  title="Zaid Memon Resume"
                  className="w-full h-full border-none flex-1"
                >
                  <div className="p-8 text-center text-[#94A3B8] font-mono text-xs space-y-4">
                    <p>Your browser does not support inline PDF viewing.</p>
                    <a
                      href={resumePdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-[#8B5CF6] text-white rounded font-bold"
                    >
                      Open PDF in New Window
                    </a>
                  </div>
                </iframe>
              </object>
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2 border-t border-white/[0.08] bg-[#0E1017] flex items-center justify-between text-xs font-mono text-[#64748B] flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-[#94A3B8]">CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="hidden sm:inline text-[11px]">B.Tech Computer Science</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#22D3EE] hover:underline"
                >
                  Direct PDF Link ↗
                </a>
                <span className="text-white/20">•</span>
                <span className="text-[11px] text-[#8B5CF6]">L.J. University, Ahmedabad</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
