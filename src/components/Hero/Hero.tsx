import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  FileText, 
  Mail, 
  Zap, 
  Activity, 
  Layers, 
  CheckCircle, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { CINE_EASE, Magnetic, RevealWords, Tilt } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface HeroProps {
  onExploreJourney: () => void;
  onOpenResume: () => void;
  onContactMe: () => void;
}

export default function Hero({
  onExploreJourney,
  onOpenResume,
  onContactMe,
}: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden circuit-grid"
    >
      {/* Background Cinematic Atmosphere */}
      <div 
        aria-hidden 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <div 
        aria-hidden 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability & Streaming Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: CINE_EASE }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-medium tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalProfile.availability}</span>
              </div>

              {/* Streaming Series Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 font-mono text-xs font-medium tracking-wide">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>SEASON 01–03 STREAMING NOW</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl text-white tracking-wider uppercase leading-none font-extrabold drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              SANDIPAN SAMANTA
            </h1>

            {/* Subtitle */}
            <div className="mt-3 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500 hidden sm:block" />
              <h2 className="font-mono text-base sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white tracking-wider uppercase">
                ELECTRICAL ENGINEER | SITE ENGINEER
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl font-sans leading-relaxed">
              Turning engineering fundamentals into practical solutions. Exploring electrical systems, design, and project execution.
            </p>

            {/* Detailed Intro Quote Block */}
            <div className="mt-4 p-4 rounded-xl glass-card border border-gray-800/80 max-w-2xl">
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed italic">
                &ldquo;B.Tech Electrical Engineering graduate (2026) with a Diploma (2023) and practical site-level experience in electrical inspection, drawing verification, and project execution at Electro Control. Comfortable with AutoCAD 2D drafting, load and cable sizing, electrical layouts, and engineering coordination.&rdquo;
              </p>
            </div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: CINE_EASE }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Explore Journey Button */}
              <Magnetic strength={0.2}>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onExploreJourney();
                  }}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all cursor-pointer overflow-hidden"
                >
                  <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
                  <span>▶ Explore My Journey</span>
                </button>
              </Magnetic>

              {/* View Resume Button */}
              <Magnetic strength={0.2}>
                <button
                  onClick={() => {
                    soundFX.playModal();
                    onOpenResume();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/80 hover:bg-gray-800 text-gray-200 hover:text-white font-mono text-xs font-medium tracking-wider transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View My Resume</span>
                </button>
              </Magnetic>

              {/* Contact Me Button */}
              <Magnetic strength={0.2}>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    onContactMe();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-blue-500/30 hover:border-blue-400/60 bg-blue-950/30 hover:bg-blue-950/60 text-blue-300 hover:text-white font-mono text-xs font-medium tracking-wider transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Contact Me</span>
                </button>
              </Magnetic>
            </motion.div>

            {/* Quick Engineering Telemetry HUD Bar */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">LOCATION</span>
                <span className="text-xs font-mono text-gray-300 font-semibold">Liluah, WB, India</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">SITE EXP</span>
                <span className="text-xs font-mono text-cyan-400 font-semibold">Electro Control</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">SYSTEMS</span>
                <span className="text-xs font-mono text-gray-300 font-semibold">415V / 230V 50Hz</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-500 uppercase">DRAFTING</span>
                <span className="text-xs font-mono text-blue-400 font-semibold">AutoCAD 2D (SLD)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Engineering Visual Frame & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Tilt max={8} className="w-full max-w-md sm:max-w-lg">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800/40 to-cyan-500/20 shadow-[0_0_50px_rgba(59,130,246,0.25)]">
                
                {/* Main Card Container */}
                <div className="relative rounded-[22px] bg-[#0E1117] border border-gray-800 p-6 overflow-hidden">
                  
                  {/* Circuit Background Graphic */}
                  <div className="absolute inset-0 circuit-dots opacity-40 pointer-events-none" />

                  {/* Top HUD Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-800/80 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-gray-400 font-medium">SYS_TELEMETRY // ELECTRICAL_ENG</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-blue-300 text-[10px] font-mono">
                      <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                      <span>50.0 HZ</span>
                    </div>
                  </div>

                  {/* Central Visual: Engineering Blueprint Hologram */}
                  <div className="relative aspect-square max-h-[340px] rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-900 border border-blue-500/20 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    
                    {/* Animated Circuit Overlay */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 50 H 120 L 160 90 V 220 L 200 260 H 400" stroke="#3B82F6" strokeWidth="1" fill="none" />
                      <path d="M 400 120 H 260 L 210 170 V 300" stroke="#22D3EE" strokeWidth="1" fill="none" />
                      <circle cx="160" cy="90" r="3" fill="#3B82F6" />
                      <circle cx="200" cy="260" r="3" fill="#22D3EE" />
                    </svg>

                    {/* Central Engineer Silhouette & Schematic Core */}
                    <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border-2 border-blue-400/40 p-4 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.3)]">
                      <Cpu className="w-12 h-12 text-cyan-300" />
                      <span className="text-[10px] font-mono text-blue-200 mt-2 font-bold tracking-widest">SANDIPAN</span>
                    </div>

                    <div className="relative z-10 mt-4">
                      <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                        ELECTRICAL SITE SPECIALIST
                      </h3>
                      <p className="text-xs text-gray-400 font-mono mt-1">
                        Drawing Verification • Inspection • Load Sizing
                      </p>
                    </div>

                    {/* Bottom Status Ticker */}
                    <div className="relative z-10 mt-4 w-full bg-slate-900/80 rounded-lg p-2.5 border border-gray-800 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-gray-400">STANDARDS:</span>
                      <span className="text-cyan-300 font-semibold">DSR / DAR / PWD / IS</span>
                    </div>
                  </div>

                  {/* Bottom Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800/80">
                      <span className="block text-[10px] font-mono text-gray-500">EXPERIENCE</span>
                      <span className="text-sm font-mono font-bold text-white">Electro Control</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800/80">
                      <span className="block text-[10px] font-mono text-gray-500">ACADEMICS</span>
                      <span className="text-sm font-mono font-bold text-cyan-300">B.Tech &amp; Diploma</span>
                    </div>
                  </div>

                </div>
              </div>
            </Tilt>

            {/* Floating Technical Skill Labels */}
            {/* Label 1: Top Right */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:-right-6 z-20 px-3.5 py-1.5 rounded-xl glass-blue border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>AutoCAD 2D Drafting</span>
            </motion.div>

            {/* Label 2: Bottom Left */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-2 sm:-left-6 z-20 px-3.5 py-1.5 rounded-xl glass-card border border-blue-400/40 text-blue-300 text-xs font-mono font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Single Line Diagrams (SLD)</span>
            </motion.div>

            {/* Label 3: Bottom Right */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex absolute bottom-12 -right-8 z-20 px-3.5 py-1.5 rounded-xl glass-card border border-emerald-400/40 text-emerald-300 text-xs font-mono font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Megger &amp; Load Sizing</span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="relative mt-12 flex flex-col items-center justify-center text-center">
        <button
          onClick={onExploreJourney}
          className="group flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
          aria-label="Scroll down to continue exploring"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase">CONTINUE EXPLORING</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gray-400 group-hover:text-cyan-400" />
        </button>
      </div>
    </section>
  );
}

