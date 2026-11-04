import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../../hooks/useMedia';

export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!fine || reduced) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('[role="button"]') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.hasAttribute('data-cursor-hover')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [fine, reduced, mouseX, mouseY]);

  if (!fine || reduced) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden>
      {/* Outer reticle / electron orbit ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/50 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 46 : 24,
          height: hovered ? 46 : 24,
          backgroundColor: hovered ? 'rgba(34, 211, 238, 0.12)' : 'transparent',
          boxShadow: hovered ? '0 0 15px rgba(34, 211, 238, 0.4)' : 'none',
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      {/* Center electrical spark core */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}

