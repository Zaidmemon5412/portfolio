import React, { useState, useEffect } from 'react';
import { CursorContext } from './CursorContextCore';

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => {
      window.removeEventListener('resize', checkTouch);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  const setCursor = (type = 'default', text = '') => {
    if (isTouchDevice) return;
    setCursorType(type);
    setCursorText(text);
  };

  const resetCursor = () => {
    if (isTouchDevice) return;
    setCursorType('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursor, resetCursor, isTouchDevice }}>
      {children}
    </CursorContext.Provider>
  );
}
