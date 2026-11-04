import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  HardHat, 
  FileCheck, 
  MapPin, 
  GraduationCap, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Target,
  ArrowRight
} from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { CINE_EASE, Tilt } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface AboutProps {
  onNavigateToJourney: () => void;
}

export default function About({ onNavigateToJourney }: AboutProps) {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#08090B]">
      {/* Background Subtle Schematics */}
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cinematic Section Badge & Title */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>EPISODE 00 // THE ORIGIN</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            THE PILOT: GENESIS OF AN ENGINEER
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            From technical drafting and workshop wiring to high-stakes site execution and load sizing.
          </p>
        </div>

        {/* Two-Column Cinematic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Technical Profile Card */}
          <div className="lg:col-span-5">
            <Tilt max={6} className="w-full">
              <div className="rounded-3xl p-1 bg-gradient-to-b from-blue-500/30 to-slate-900 border border-gray-800 shadow-2xl">
                <div className="rounded-[22px] bg-[#0E1117] p-6 relative overflow-hidden">
                  
                  {/* Decorative Crosshairs */}
                  <div className="absolute top-4 right-4 text-cyan-500/40 font-mono text-[10px]">
                    CAD_GRID [X: 22.5, Y: 88.3]
                  </div>

                  {/* Profile Graphic Frame */}
                  <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-blue-950/50 via-slate-900 to-black border border-blue-500/30 flex flex-col items-center justify-between p-6 overflow-hidden">
                    
                    {/* Circuit lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="120" x2="300" y2="120" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="150" y1="0" x2="150" y2="400" stroke="#22D3EE" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="150" cy="120" r="4" fill="#3B82F6" />
                    </svg>

                    <div className="w-full flex items-center justify-between text-[11px] font-mono text-gray-400 z-10">
                      <span>SERIES PROTOCOL</span>
                      <span className="text-cyan-400 font-bold">ONLINE</span>
                    </div>

                    {/* Central Schematic Avatar Visual */}
                    <div className="relative z-10 flex flex-col items-center text-center my-auto">
                      <div className="w-24 h-24 rounded-2xl bg-blue-900/40 border border-blue-400/50 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)] mb-4">
                        <HardHat className="w-12 h-12 text-cyan-300" />
                      </div>
                      <h3 className="font-display text-3xl text-white tracking-wider uppercase">
                        SANDIPAN SAMANTA
                      </h3>
                      <p className="text-xs font-mono text-blue-400 tracking-wide mt-1">
                        B.TECH &amp; DIPLOMA ELECTRICAL
                      </p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-red-400" />
                        <span>Liluah, West Bengal, India</span>
                      </div>
                    </div>

                    {/* Verified Badges */}
                    <div className="relative z-10 w-full grid grid-cols-2 gap-2 pt-4 border-t border-gray-800 text-[10px] font-mono">
                      <div className="flex items-center gap-1 text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>WBSCTE (7.6 CGPA)</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        <span>MAKAUT (6.56 CGPA)</span>
                      </div>
                    </div>

                  </div>

                  {/* Summary Facts */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                      <span className="text-gray-400">Industry Exposure:</span>
                      <span className="text-white font-semibold">Electro Control (Site Engineer)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-gray-900/80 border border-gray-800">
                      <span className="text-gray-400">Primary Software:</span>
                      <span className="text-cyan-300 font-semibold">AutoCAD 2D (SLD &amp; Layouts)</span>
                    </div>
                  </div>

                </div>
              </div>
            </Tilt>
          </div>

          {/* Right Column: Narrative, Pillars & Career Objectives */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Opening Narrative */}
            <div className="space-y-4 text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
              <div className="p-4 rounded-2xl glass-card border-l-4 border-blue-500">
                <p className="font-semibold text-white">
                  &ldquo;B.Tech Electrical Engineering graduate (2026) with a Diploma in Electrical Engineering (2023) and practical site-level experience in electrical inspection, drawing verification, and project execution at Electro Control.&rdquo;
                </p>
              </div>

              <p>
                Comfortable with <strong className="text-white">AutoCAD 2D drafting</strong>, load and cable sizing, electrical layouts, technical documentation, and engineering coordination.
              </p>

              <p className="text-gray-400 text-sm">
                Passionate about electrical systems, industrial engineering, power distribution, and practical problem-solving. My dual qualification combines rigorous laboratory wiring, machine testing, and earthing techniques with advanced mathematical circuit modeling.
              </p>
            </div>

            {/* The 4 Engineering Pillars */}
            <div className="my-8">
              <h3 className="font-display text-xl text-white tracking-wide uppercase mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>CORE ENGINEERING PILLARS</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalProfile.engineeringPillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#11141D] border border-gray-800/80 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-md bg-blue-950 text-blue-400 font-mono text-xs font-bold flex items-center justify-center border border-blue-500/30">
                        {idx + 1}
                      </span>
                      <h4 className="font-mono text-xs font-bold text-white tracking-wide uppercase">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-[#111318] border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    CAREER OBJECTIVE
                  </span>
                  <p className="text-xs text-gray-300 font-sans mt-0.5 max-w-md">
                    Seeking opportunities in <strong className="text-white">production</strong>, <strong className="text-white">maintenance</strong>, <strong className="text-white">electrical design</strong>, and <strong className="text-white">project engineering</strong>.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onNavigateToJourney();
                }}
                className="self-end sm:self-center px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
              >
                <span>WATCH SEASONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

