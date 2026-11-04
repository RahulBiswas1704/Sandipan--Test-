import React from 'react';
import { motion } from 'framer-motion';
import { 
  HardHat, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  FileSpreadsheet, 
  Gauge, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Activity,
  Sliders,
  FileCheck2
} from 'lucide-react';
import { Tilt } from '../fx/effects';

export default function Experience() {
  const responsibilities = [
    {
      title: 'Site Surveys & Technical Risk Assessment',
      desc: 'Conducted comprehensive on-site inspections and preliminary surveys to evaluate incoming electrical service requirements and mitigate hazards before civil installation.',
      icon: <Activity className="w-4 h-4 text-cyan-400" />
    },
    {
      title: 'Drawing Verification & SLD Review',
      desc: 'Meticulously reviewed electrical layout drawings, Single Line Diagrams (SLDs), distribution board schedules, and material take-offs.',
      icon: <Layers className="w-4 h-4 text-blue-400" />
    },
    {
      title: 'Load Calculation & Cable Sizing',
      desc: 'Verified connected loads, diversity calculations, breaker ratings, and cable cross-sections to ensure compliance with thermal limits and allowable voltage drops.',
      icon: <Sliders className="w-4 h-4 text-amber-400" />
    },
    {
      title: 'Cross-Trade Coordination (Civil & Mechanical)',
      desc: 'Harmonized electrical conduit routes, trenching, and cable tray paths with civil and MEP teams, resolving spatial clashes and avoiding costly re-work.',
      icon: <HardHat className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Government Code Adherence (DSR / DAR / PWD)',
      desc: 'Ensured all installation methodologies, material grades, and execution workflows adhered strictly to DSR, DAR, and State PWD engineering specifications.',
      icon: <FileCheck2 className="w-4 h-4 text-purple-400" />
    },
    {
      title: 'Testing & Instrumentation (Megger & Multimeter)',
      desc: 'Conducted high-voltage insulation resistance testing using Megger instruments and performed line-to-line continuity and voltage verification using digital multimeters.',
      icon: <Gauge className="w-4 h-4 text-pink-400" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-[#0B0D12] border-t border-gray-800/80">
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
            <HardHat className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDUSTRY DEPLOYMENT // FIELD VERIFIED</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            PROFESSIONAL EXPERIENCE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            Real-world site engineering, drawing verification, and project execution at Electro Control.
          </p>
        </div>

        {/* Electro Control Experience Feature Showcase Card */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-slate-800/40 to-cyan-500/30 shadow-2xl mb-12">
          <div className="rounded-[22px] bg-[#11141D] p-6 sm:p-10 border border-gray-800">
            
            {/* Top Company Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-gray-800 gap-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <HardHat className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/30 text-blue-300 text-[10px] font-mono font-bold tracking-wider">
                      PRIMARY INDUSTRIAL EXPERIENCE
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      VERIFIED ON-SITE
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase mt-1">
                    ELECTRO CONTROL
                  </h3>
                  <p className="font-mono text-cyan-400 text-sm font-semibold">
                    SITE ENGINEER
                  </p>
                </div>
              </div>

              {/* Timing & Location Pills */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>July 2025 – March 2026 (9 Months)</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Bally, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Overview Paragraph */}
            <div className="my-6 p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                As Site Engineer at Electro Control, I was directly deployed on-site to inspect high-voltage and low-voltage electrical distributions, verify Single Line Diagrams (SLDs) against physically erected panels, validate cable cross-sections, and liaise continuously between design engineers, site labor, and civil subcontractors.
              </p>
            </div>

            {/* Key Deliverables & Responsibilities Grid */}
            <h4 className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase mb-4 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>CORE TECHNICAL RESPONSIBILITIES &amp; SCOPE OF WORK</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0A0C11] border border-gray-800/80 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-gray-900 border border-gray-800">
                        {resp.icon}
                      </div>
                      <h5 className="font-mono text-xs font-bold text-white uppercase">
                        {resp.title}
                      </h5>
                    </div>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {resp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instruments & Specifications HUD Bar */}
            <div className="mt-8 pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800/60">
                <span className="block text-[10px] text-gray-500 uppercase">INSTRUMENTATION</span>
                <span className="text-cyan-300 font-semibold">Megger (Insulation) &amp; Digital Multimeter</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800/60">
                <span className="block text-[10px] text-gray-500 uppercase">STANDARDS &amp; CODES</span>
                <span className="text-blue-300 font-semibold">DSR, DAR &amp; PWD Specifications</span>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800/60">
                <span className="block text-[10px] text-gray-500 uppercase">DOCUMENTATION</span>
                <span className="text-white font-semibold">AutoCAD 2D, BOQ &amp; DPR / WPR in MS Excel</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

