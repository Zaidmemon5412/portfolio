import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { CursorContext, CursorStateContext } from './CursorContextCore';

export function CursorProvider({ children }) {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const isTouchRef = useRef(false);

  useEffect(() => {
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      isTouchRef.current = isTouch;
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

  const setCursor = useCallback((type = 'default', text = '') => {
    if (isTouchRef.current) return;
    setCursorType((prev) => (prev === type ? prev : type));
    setCursorText((prev) => (prev === text ? prev : text));
  }, []);

  const resetCursor = useCallback(() => {
    if (isTouchRef.current) return;
    setCursorType((prev) => (prev === 'default' ? prev : 'default'));
    setCursorText((prev) => (prev === '' ? prev : ''));
  }, []);

  // Stable actions object so sections calling useCursor() NEVER re-render on hover!
  const actionsValue = useMemo(() => ({ setCursor, resetCursor }), [setCursor, resetCursor]);
  const stateValue = useMemo(
    () => ({ cursorType, cursorText, isTouchDevice }),
    [cursorType, cursorText, isTouchDevice]
  );

  return (
    <CursorContext.Provider value={actionsValue}>
      <CursorStateContext.Provider value={stateValue}>
        {children}
      </CursorStateContext.Provider>
    </CursorContext.Provider>
  );
}
