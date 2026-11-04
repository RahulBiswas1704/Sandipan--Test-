import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Activity, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Sliders, 
  Info,
  Maximize2
} from 'lucide-react';
import { featuredProjects, type Project } from '../../data/portfolio';
import { CINE_EASE } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onSwitchProject: (project: Project) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onSwitchProject,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'components' | 'architecture' | 'gallery'>('overview');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);
  const nextProject = featuredProjects[(currentIndex + 1) % featuredProjects.length];
  const prevProject = featuredProjects[(currentIndex - 1 + featuredProjects.length) % featuredProjects.length];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          soundFX.playClick();
          onClose();
        }}
      />

      {/* Modal Dialog Body */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative z-10 w-full max-w-5xl rounded-3xl bg-[#0E1118] border border-gray-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: CINE_EASE }}
      >
        {/* Top Header / Poster Visual Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-gradient-to-br from-slate-900 via-[#111624] to-[#0A0D14] p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-b border-gray-800">
          
          {/* Engineering Circuit Schematics in background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 50 H 250 L 300 100 H 600 L 650 50 H 900" stroke={project.palette.primary} strokeWidth="1.5" fill="none" />
            <path d="M 100 200 H 400 L 450 150 H 800" stroke={project.palette.secondary} strokeWidth="1.5" fill="none" />
            <circle cx="300" cy="100" r="4" fill={project.palette.primary} />
            <circle cx="450" cy="150" r="4" fill={project.palette.secondary} />
          </svg>

          {/* Top Bar with Badges and Close Button */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-blue-600 text-white font-mono text-[10px] font-bold tracking-widest uppercase">
                A SANDIPAN ORIGINAL
              </span>
              <span className="px-2.5 py-1 rounded bg-gray-900/90 text-cyan-400 border border-cyan-500/30 font-mono text-[10px] font-bold">
                {project.ratingBadge}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-mono text-[10px]">
                {project.streamingQuality}
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Title & Category */}
          <div className="relative z-10">
            <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
              {project.category} • {project.year}
            </span>
            <h2 id="modal-project-title" className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase mt-1 drop-shadow-md">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1 max-w-3xl line-clamp-2">
              {project.logline}
            </p>
          </div>

          {/* Atmospheric gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 sm:px-8 border-b border-gray-800 bg-[#0A0C12] flex items-center gap-2 overflow-x-auto hide-scrollbar">
          {[
            { id: 'overview', label: 'OVERVIEW & OBJECTIVE' },
            { id: 'components', label: 'BILL OF MATERIALS (COMPONENTS)' },
            { id: 'architecture', label: 'SYSTEM ARCHITECTURE & LOGIC' },
            { id: 'gallery', label: 'SCHEMATIC GALLERY' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFX.playClick();
                setActiveTab(tab.id as typeof activeTab);
              }}
              className={`py-3.5 px-4 font-mono text-xs font-semibold tracking-wider whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-500 text-cyan-300'
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans space-y-6">
          
          {/* TAB 1: OVERVIEW & OBJECTIVE */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Objective Callout */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <span className="block text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                  CORE OBJECTIVE
                </span>
                <p className="text-sm text-gray-200 leading-relaxed font-sans">
                  {project.objective}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase mb-2">
                  PROJECT OVERVIEW
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technical Highlights */}
              <div>
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KEY TECHNICAL HIGHLIGHTS</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-gray-900/70 border border-gray-800 text-xs text-gray-300 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Demonstrated */}
              <div>
                <h3 className="font-mono text-xs font-bold text-white tracking-widest uppercase mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>ENGINEERING SKILLS DEMONSTRATED</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.skillsDemonstrated.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-blue-950/60 text-blue-300 border border-blue-500/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: BILL OF MATERIALS (COMPONENTS) */}
          {activeTab === 'components' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 text-xs text-gray-400 font-mono">
                Hardware bill of materials, role designation, and operational parameters for {project.title}.
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#141822] text-gray-400 uppercase border-b border-gray-800">
                    <tr>
                      <th className="py-3 px-4">Component</th>
                      <th className="py-3 px-4">Functional Role</th>
                      <th className="py-3 px-4">Technical Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/80 bg-[#0E1118]">
                    {project.components.map((comp, cIdx) => (
                      <tr key={cIdx} className="hover:bg-gray-900/50 transition-colors">
                        <td className="py-3 px-4 font-bold text-cyan-300 whitespace-nowrap">
                          {comp.name}
                        </td>
                        <td className="py-3 px-4 text-gray-300 font-sans">
                          {comp.role}
                        </td>
                        <td className="py-3 px-4 text-blue-400 whitespace-nowrap">
                          {comp.spec || 'Standard Rated'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SYSTEM ARCHITECTURE & LOGIC */}
          {activeTab === 'architecture' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Architecture Block Flow */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900 to-gray-900 border border-blue-500/20">
                <h4 className="text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase mb-4 text-center">
                  CLOSED-LOOP CONTROL FLOW ARCHITECTURE
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  {/* Inputs */}
                  <div className="p-4 rounded-xl bg-[#0A0C12] border border-blue-500/30 flex flex-col">
                    <span className="text-[10px] text-blue-400 font-bold uppercase mb-2">
                      1. INPUT SENSING STAGE
                    </span>
                    <ul className="space-y-1.5 text-gray-300 flex-1">
                      {project.systemArchitecture.inputs.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-1.5">
                          <span className="text-cyan-400">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Processing */}
                  <div className="p-4 rounded-xl bg-[#0A0C12] border border-cyan-500/30 flex flex-col">
                    <span className="text-[10px] text-cyan-400 font-bold uppercase mb-2">
                      2. ALGORITHMIC PROCESSING
                    </span>
                    <ul className="space-y-1.5 text-gray-300 flex-1">
                      {project.systemArchitecture.processing.map((item, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-400">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outputs */}
                  <div className="p-4 rounded-xl bg-[#0A0C12] border border-emerald-500/30 flex flex-col">
                    <span className="text-[10px] text-emerald-400 font-bold uppercase mb-2">
                      3. ACTUATION &amp; OUTPUT
                    </span>
                    <ul className="space-y-1.5 text-gray-300 flex-1">
                      {project.systemArchitecture.outputs.map((item, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Implementation Steps */}
              <div>
                <h4 className="font-mono text-xs font-bold text-white tracking-widest uppercase mb-3">
                  DETAILED IMPLEMENTATION METHODOLOGY
                </h4>
                <ol className="space-y-3">
                  {project.implementation.map((step, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-gray-900/60 border border-gray-800 text-xs sm:text-sm text-gray-300 font-sans flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}

          {/* TAB 4: SCHEMATIC GALLERY */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Notice regarding authentic engineering visuals */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-xs font-mono text-amber-300">
                <Info className="w-4 h-4 flex-shrink-0 text-amber-400 mt-0.5" />
                <span>
                  <strong>AUTHENTICITY NOTICE:</strong> Relevant technical schematics and CAD placeholders are displayed here. In strict compliance with professional ethics, artificial photo illustrations are never misrepresented as real project photos.
                </span>
              </div>

              {/* Interactive Schematic Diagram Frame */}
              <div className="rounded-2xl bg-[#090B10] border border-blue-500/30 p-6 flex flex-col items-center justify-center text-center">
                <div className="w-full h-48 rounded-xl bg-slate-900/80 border border-gray-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 circuit-grid opacity-30 pointer-events-none" />
                  <Cpu className="w-12 h-12 text-cyan-400 mb-2" />
                  <span className="font-mono text-xs text-white font-bold uppercase">
                    {project.title} — ELECTRICAL SCHEMATIC
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 mt-1">
                    CAD Block Revision: 1.2 • Verified Pinout
                  </span>
                </div>

                <p className="text-xs text-gray-400 font-sans mt-4 max-w-lg">
                  To view higher-resolution AutoCAD drawing exports or hardware laboratory breadboard photos for this project, contact Sandipan directly.
                </p>
              </div>
            </motion.div>
          )}

        </div>

        {/* Modal Bottom Switcher Controls */}
        <div className="p-4 sm:p-6 border-t border-gray-800 bg-[#0A0C12] flex items-center justify-between">
          <button
            onClick={() => {
              soundFX.playClick();
              onSwitchProject(prevProject);
            }}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">PREVIOUS:</span>
            <span className="font-bold text-gray-200">{prevProject.title.slice(0, 24)}...</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              onSwitchProject(nextProject);
            }}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">NEXT:</span>
            <span className="font-bold text-gray-200">{nextProject.title.slice(0, 24)}...</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}

