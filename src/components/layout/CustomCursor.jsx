import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

export default function CustomCursor() {
  const { cursorType, cursorText, isTouchDevice } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Fast follow for inner dot
  const dotConfig = { damping: 45, stiffness: 900, mass: 0.1 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isProject = cursorType === 'project';
  const isLab = cursorType === 'lab';
  const isPointer = cursorType === 'pointer';
  const hasText = !!cursorText;

  return (
    <>
      {/* Outer Spring Follower / Expanding Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: hasText ? 1 : isPointer ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {hasText ? (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-2xl flex items-center gap-1.5 ${
              isProject
                ? 'bg-[#D4FF32] text-black border border-[#D4FF32]'
                : isLab
                ? 'bg-white text-black border border-white'
                : 'bg-[#151619] text-[#D4FF32] border border-white/20'
            }`}
          >
            <span>{cursorText}</span>
          </motion.div>
        ) : (
          <div
            className={`rounded-full border transition-all duration-300 ${
              isPointer
                ? 'w-10 h-10 border-[#D4FF32]/60 bg-[#D4FF32]/10'
                : 'w-8 h-8 border-white/30 bg-transparent'
            }`}
          />
        )}
      </motion.div>

      {/* Center Precise Dot */}
      {!hasText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 rounded-full bg-[#D4FF32] -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-[#D4FF32]"
          style={{
            x: dotX,
            y: dotY,
          }}
        />
      )}
    </>
  );
}
