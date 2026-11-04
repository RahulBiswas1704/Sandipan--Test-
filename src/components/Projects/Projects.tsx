import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Cpu, 
  Sun, 
  Fingerprint, 
  Zap, 
  Layers, 
  ExternalLink, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { featuredProjects, type Project } from '../../data/portfolio';
import { Tilt } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const handleOpen = (project: Project) => {
    soundFX.playModal();
    onSelectProject(project);
  };

  return (
    <section id="projects" className="py-20 relative bg-[#08090B] border-t border-gray-800/80">
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ORIGINALS // FEATURED ENGINEERING DESIGNS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            FEATURED ORIGINALS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            Practical hardware systems engineered with microcontrollers, sensor integration, and electro-mechanical actuation.
          </p>
        </div>

        {/* 2 Large Cinematic Featured Project Posters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project, idx) => {
            const isFingerprint = project.id === 'fingerprint-door-lock';

            return (
              <Tilt key={project.id} max={6} className="w-full">
                <div
                  onClick={() => handleOpen(project)}
                  onMouseEnter={() => soundFX.playHover()}
                  className="group relative rounded-3xl overflow-hidden bg-[#11141D] border border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Top Poster Art Banner */}
                  <div className="relative h-72 sm:h-80 w-full bg-gradient-to-br from-slate-900 via-[#101522] to-black p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-b border-gray-800/80">
                    
                    {/* Background Circuit Grid & Schematics */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 80 H 180 L 220 120 H 450" stroke={project.palette.primary} strokeWidth="1.5" fill="none" />
                      <path d="M 120 280 H 300 L 350 230 H 600" stroke={project.palette.secondary} strokeWidth="1.5" fill="none" />
                      <circle cx="220" cy="120" r="4" fill={project.palette.primary} />
                      <circle cx="350" cy="230" r="4" fill={project.palette.secondary} />
                    </svg>

                    {/* Top Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow">
                          ORIGINAL
                        </span>
                        <span className="px-2 py-0.5 rounded bg-gray-900/90 text-cyan-300 border border-cyan-500/30 font-mono text-[10px] font-bold">
                          {project.ratingBadge}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Center Icon Graphic */}
                    <div className="relative z-10 my-auto flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                        {isFingerprint ? (
                          <Fingerprint className="w-10 h-10 text-cyan-300" />
                        ) : (
                          <Sun className="w-10 h-10 text-amber-300" />
                        )}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest mt-2">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(59,130,246,0.8)] group-hover:scale-105 transition-transform">
                        <Play className="w-4 h-4 fill-white" />
                        <span>INSPECT SCHEMATIC &amp; HARDWARE</span>
                      </div>
                    </div>

                    {/* Bottom Title bar on banner */}
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase drop-shadow">
                        {project.title}
                      </h3>
                    </div>

                  </div>

                  {/* Poster Bottom Card Information */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-300 font-sans leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technical Highlights Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.technicalHighlights.slice(0, 5).map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-gray-900 text-gray-300 border border-gray-800"
                          >
                            {highlight}
                          </span>
                        ))}
                        {project.technicalHighlights.length > 5 && (
                          <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-blue-950/60 text-blue-300 border border-blue-500/20">
                            +{project.technicalHighlights.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Prompt */}
                    <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-gray-400">
                      <span className="group-hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold">
                        <span>OPEN FULL TECHNICAL SPECIFICATIONS</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-gray-500">CLICK TO EXPAND</span>
                    </div>

                  </div>
                </div>
              </Tilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}

