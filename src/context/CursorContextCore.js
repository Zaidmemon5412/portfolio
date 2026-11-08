import { createContext } from 'react';

export const CursorContext = createContext({
  setCursor: () => {},
  resetCursor: () => {},
});

export const CursorStateContext = createContext({
  cursorType: 'default',
  cursorText: '',
  isTouchDevice: false,
});
