import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { playSoundEffect } from '../../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        playSoundEffect('modal_close');
        onClose();
      }
    };

    if (isOpen) {
      playSoundEffect('modal_open');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const resumePdfPath = '/resume.pdf';

  const handleClose = () => {
    playSoundEffect('modal_close');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c0d12] border border-white/20 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#FF007F]/20 border border-[#FF007F]/40 flex items-center justify-center text-[#FF007F]">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="font-gta text-lg sm:text-xl text-white font-black uppercase tracking-wider">
                    ZAID MEMON — CURRICULUM VITAE
                  </h3>
                  <p className="font-mono text-[11px] sm:text-xs text-white/50">
                    B.Tech CSE • Full-Stack Developer • React, Python, Django, Java
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumePdfPath}
                  download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                  onClick={() => playSoundEffect('select')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00F0FF] hover:bg-[#00d0df] text-black font-mono text-xs font-bold rounded-xs transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  <span>DOWNLOAD PDF</span>
                </a>

                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSoundEffect('select')}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs rounded-xs transition-colors cursor-pointer"
                  title="Open in new window"
                >
                  <ExternalLink size={14} />
                </a>

                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
                  aria-label="Close Resume Modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="relative flex-1 w-full bg-[#15161b] min-h-[60vh] sm:min-h-[68vh] overflow-hidden">
              <iframe
                src={`${resumePdfPath}#toolbar=1&navpanes=0`}
                title="Zaid Memon Resume"
                className="w-full h-full border-none"
                style={{ minHeight: '68vh' }}
              />
            </div>

            {/* Footer on mobile */}
            <div className="p-3 sm:hidden border-t border-white/10 bg-black/60 flex items-center justify-between gap-2">
              <a
                href={resumePdfPath}
                download="CV_MEMON_ZAID_SOHILBHAI_LJIET.pdf"
                onClick={() => playSoundEffect('select')}
                className="flex-1 py-2 bg-[#00F0FF] text-black font-mono text-xs font-bold text-center rounded-xs flex items-center justify-center gap-1.5"
              >
                <Download size={14} />
                <span>DOWNLOAD PDF</span>
              </a>
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoundEffect('select')}
                className="px-3 py-2 bg-white/10 text-white font-mono text-xs rounded-xs flex items-center justify-center gap-1"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
