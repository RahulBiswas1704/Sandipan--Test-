import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FastForward, Zap, Shield, Cpu } from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { useReducedMotionPref } from '../../hooks/useMedia';
import { CINE_EASE } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface OpeningSequenceProps {
  onComplete: () => void;
  onPlayIntroCinematic?: () => void;
}

/**
 * Opening Sequence Beats:
 * Beat 0: 0ms    - Complete blackout, circuit grid awakening
 * Beat 1: 500ms  - Animated electrical circuit lines trace outward, electric-blue spark traveling
 * Beat 2: 1800ms - Studio Title: "ENGINEERING THE FUTURE"
 * Beat 3: 2800ms - Name reveal: "SANDIPAN"
 * Beat 4: 3700ms - Series Subtitle: "THE ENGINEERING SERIES"
 * Beat 5: 4500ms - Hero portrait & engineering telemetry reveal with cinematic zoom
 * Beat 6: 5200ms - Controls: [▶ PLAY INTRO] & [SKIP INTRO]
 */
const TIMELINE = [
  { beat: 1, at: 400 },
  { beat: 2, at: 1600 },
  { beat: 3, at: 2700 },
  { beat: 4, at: 3600 },
  { beat: 5, at: 4400 },
  { beat: 6, at: 5000 },
];

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ beat, at }) => 
      window.setTimeout(() => setBeat(beat), at)
    );
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  // Keyboard shortcut: Escape or Enter skips intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        soundFX.playClick();
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  const handlePlayFullExperience = () => {
    soundFX.playIntroSwell();
    setIsIntroPlaying(true);
    // After 2.5s high-energy power surge, advance to profile selection
    setTimeout(() => {
      onComplete();
    }, 2400);
  };

  const handleSkip = () => {
    soundFX.playClick();
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#08090B] select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: CINE_EASE }}
      role="dialog"
      aria-label="Opening titles for Sandipan Samanta Portfolio"
    >
      {/* Cinematic Letterbox Bars */}
      <motion.div 
        className="absolute inset-x-0 top-0 z-40 bg-black pointer-events-none"
        initial={{ height: '7vh' }}
        animate={{ height: beat >= 6 ? '0vh' : '7vh' }}
        transition={{ duration: 1.2, ease: CINE_EASE }}
      />
      <motion.div 
        className="absolute inset-x-0 bottom-0 z-40 bg-black pointer-events-none"
        initial={{ height: '7vh' }}
        animate={{ height: beat >= 6 ? '0vh' : '7vh' }}
        transition={{ duration: 1.2, ease: CINE_EASE }}
      />

      {/* Background Animated Circuit Grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 circuit-grid opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 1 ? 0.35 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Electric Spark / Traveling Light Beam */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {beat >= 1 && (
          <>
            {/* Horizontal Circuit Line */}
            <motion.path
              d="M 50 200 L 350 200 L 420 270 L 700 270 L 800 170 L 1200 170"
              stroke="#1E293B"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            {/* Glowing Pulse Traveling along the wire */}
            <motion.path
              d="M 50 200 L 350 200 L 420 270 L 700 270 L 800 170 L 1200 170"
              stroke="url(#sparkGradient)"
              strokeWidth="3.5"
              fill="none"
              filter="url(#glowFilter)"
              strokeDasharray="60 300"
              animate={{ strokeDashoffset: [-600, 600] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            {/* Corner Node Points */}
            <circle cx="350" cy="200" r="3" fill="#22D3EE" filter="url(#glowFilter)" />
            <circle cx="420" cy="270" r="3" fill="#3B82F6" filter="url(#glowFilter)" />
            <circle cx="700" cy="270" r="3" fill="#22D3EE" filter="url(#glowFilter)" />
          </>
        )}
      </svg>

      {/* Atmospheric Center Radial Lighting */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(59, 130, 246, 0.16), transparent 75%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Sequence Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl w-full">
        {/* Beat 2: Studio Title */}
        <AnimatePresence>
          {beat >= 2 && beat < 4 && (
            <motion.div
              key="studio-title"
              initial={{ opacity: 0, y: -12, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.55em' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
              transition={{ duration: 1, ease: CINE_EASE }}
              className="mb-4"
            >
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-medium text-cyan-400 tracking-[0.5em] uppercase">
                <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>{personalProfile.studioTitle}</span>
                <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Beat 3 & 4: Name Reveal & Series Title */}
        <div className="relative my-2">
          {beat >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(16px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: CINE_EASE }}
              className="relative"
            >
              <h1 className="font-display text-6xl sm:text-8xl md:text-9xl tracking-wider text-white font-extrabold uppercase drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                SANDIPAN
              </h1>
              {/* Electric scanline highlight */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>
          )}

          {beat >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: CINE_EASE }}
              className="mt-2 flex items-center justify-center gap-3"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500" />
              <p className="font-mono text-sm sm:text-base md:text-lg tracking-[0.35em] text-blue-400 font-semibold uppercase">
                {personalProfile.seriesTag}
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </motion.div>
          )}
        </div>

        {/* Beat 5: Hero Visual / Engineering Badge Hologram */}
        {beat >= 5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: CINE_EASE }}
            className="my-5 flex flex-col items-center"
          >
            {/* Engineering Schematic Emblem */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-blue-500/40 p-2 glass-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              {/* Rotating outer compass ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <div className="w-full h-full rounded-full bg-slate-900/90 flex flex-col items-center justify-center border border-blue-400/30">
                <Cpu className="w-10 h-10 text-cyan-400 mb-1" />
                <span className="text-[10px] font-mono text-blue-300 font-bold tracking-widest">ELECTRICAL</span>
                <span className="text-[9px] font-mono text-gray-400">ENGINEER</span>
              </div>
            </div>

            {/* Subtitle credentials */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-3 text-xs sm:text-sm text-gray-400 font-mono tracking-widest uppercase"
            >
              SITE ENGINEER • DESIGN &amp; EXECUTION • WB, INDIA
            </motion.p>
          </motion.div>
        )}

        {/* Beat 6: Action Controls */}
        {beat >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: CINE_EASE }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Play Intro Button */}
            <button
              onClick={handlePlayFullExperience}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Play className="w-4 h-4 fill-white text-white transition-transform group-hover:scale-110" />
              <span>PLAY INTRO</span>
            </button>

            {/* Skip Intro Button */}
            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer"
            >
              <FastForward className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400" />
              <span>SKIP INTRO (ENTER)</span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Cinematic Fullscreen Surge Overlay when "PLAY INTRO" is clicked */}
      <AnimatePresence>
        {isIntroPlaying && (
          <motion.div
            key="surge-overlay"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Oscilloscope Waveform & Power Voltage Gauge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center text-center p-8 max-w-lg"
            >
              <div className="relative mb-6">
                <Zap className="w-16 h-16 text-cyan-400 animate-bounce" />
                <div className="absolute inset-0 blur-lg bg-cyan-500/50 -z-10 animate-pulse" />
              </div>
              <h2 className="font-display text-4xl text-white tracking-widest mb-2 uppercase">
                ENERGIZING POWER GRID...
              </h2>
              <p className="font-mono text-sm text-cyan-300 mb-6">
                FREQUENCY: 50.0 Hz • VOLTAGE: 415V 3-PHASE • ALL CIRCUITS NORMAL
              </p>

              {/* High Voltage Progress Meter */}
              <div className="w-72 h-2 rounded-full bg-gray-800 overflow-hidden border border-blue-500/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                />
              </div>
              <span className="font-mono text-xs text-gray-400 mt-3">INITIALIZING THE ENGINEERING SERIES</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard Hint */}
      <div className="absolute bottom-4 z-30 text-[11px] font-mono text-gray-500 tracking-wider">
        PRESS <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">ESC</kbd> OR <kbd className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">ENTER</kbd> TO SKIP
      </div>
    </motion.div>
  );
}

