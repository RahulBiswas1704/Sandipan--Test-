import { useEffect, useState } from 'react';

/**
 * Hook to detect if the user prefers reduced motion (accessibility)
 */
export function useReducedMotionPref(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(media.matches);

    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return reduced;
}

/**
 * Hook to detect if the device has a fine pointer (mouse / trackpad) vs coarse (touch)
 */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(pointer: fine)');
    setFine(media.matches);

    const listener = (e: MediaQueryListEvent) => setFine(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return fine;
}

