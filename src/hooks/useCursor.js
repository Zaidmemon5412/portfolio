import { useContext } from 'react';
import { CursorContext } from '../context/CursorContextCore';

export function useCursor() {
  return useContext(CursorContext);
}
