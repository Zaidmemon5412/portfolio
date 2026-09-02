import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

export default function CustomCursor() {
  const { cursorType, cursorText, isTouchDevice } = useCursor();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  const isPointer = cursorType === 'pointer';
  const hasText = !!cursorText;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: hasText ? 1 : isPointer ? 1.4 : 1,
        opacity: 1,
      }}
      transition={{ duration: 0.15 }}
    >
      {hasText ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="px-3.5 py-1.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase bg-[#111111] text-[#F5F5F3] border border-[#333333] shadow-lg flex items-center gap-1.5"
        >
          <span>{cursorText}</span>
        </motion.div>
      ) : (
        <div
          className={`rounded-full border transition-all duration-200 ${
            isPointer
              ? 'w-9 h-9 border-[#111111]/70 bg-[#111111]/10'
              : 'w-7 h-7 border-[#111111]/30 bg-transparent'
          }`}
        />
      )}
    </motion.div>
  );
}
