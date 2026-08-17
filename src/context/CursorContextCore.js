import { createContext } from 'react';

export const CursorContext = createContext({
  cursorType: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {},
  isTouchDevice: false,
});
