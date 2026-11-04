import React, { useRef, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../../hooks/useMedia';

export const CINE_EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Magnetic button wrapper — attracts element toward cursor on desktop
 */
export function Magnetic({ 
  children, 
  strength = 0.3, 
  className = '' 
}: { 
  children: ReactNode; 
  strength?: number; 
  className?: string 
}) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  const active = fine && !reduced;

  const onMove = (e: RPointerEvent<HTMLSpanElement>) => {
    if (!active) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span 
      className={`inline-flex ${className}`} 
      style={{ x, y }} 
      onPointerMove={onMove} 
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}

/**
 * 3D Tilt container with dynamic specular lighting glare
 */
export function Tilt({
  children,
  max = 8,
  className = '',
  glare = true,
  ...rest
}: { 
  children: ReactNode; 
  max?: number; 
  className?: string; 
  glare?: boolean 
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const active = fine && !reduced;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });

  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useTransform(
    [gx, gy], 
    ([a, b]) => `radial-gradient(circle at ${a} ${b}, rgba(59, 130, 246, 0.22), transparent 60%)`
  );

  return (
    <motion.div
      {...rest}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={active ? { rotateX: rx, rotateY: ry, transformPerspective: 1000, ...(rest.style as object) } : rest.style}
      onPointerMove={(e) => {
        if (!active) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      {active && glare && (
        <motion.div 
          aria-hidden 
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-screen" 
          style={{ background: glareBg }} 
        />
      )}
    </motion.div>
  );
}

/**
 * Word-by-word blur-to-focus reveal for titles
 */
export function RevealWords({ 
  text, 
  className = '', 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number 
}) {
  const words = text.split(' ');
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-2">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0, filter: 'blur(6px)' },
              show: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: CINE_EASE } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * Animated SVG Circuit Trace Divider
 */
export function CircuitTrace({ 
  className = '', 
  accent = '#3B82F6' 
}: { 
  className?: string; 
  accent?: string 
}) {
  return (
    <div className={`relative w-full overflow-hidden flex items-center justify-center my-8 ${className}`}>
      <svg className="w-full max-w-4xl h-8" viewBox="0 0 800 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16 H320 L336 28 H464 L480 16 H800" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <motion.path 
          d="M0 16 H320 L336 28 H464 L480 16 H800" 
          stroke={accent} 
          strokeWidth="1.5" 
          strokeDasharray="80 320"
          animate={{ strokeDashoffset: [-400, 400] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <circle cx="336" cy="28" r="3" fill="#111318" stroke={accent} strokeWidth="1.5" />
        <circle cx="464" cy="28" r="3" fill="#111318" stroke={accent} strokeWidth="1.5" />
        <rect x="385" y="24" width="30" height="8" rx="2" fill="rgba(59, 130, 246, 0.15)" stroke={accent} strokeWidth="1" />
      </svg>
    </div>
  );
}

