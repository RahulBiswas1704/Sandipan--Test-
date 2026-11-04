import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { Tilt } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface ResumeViewerProps {
  onOpenResumeModal: () => void;
}

export default function ResumeViewer({ onOpenResumeModal }: ResumeViewerProps) {
  return (
    <section id="resume" className="py-20 relative bg-[#08090B] border-t border-gray-800/80">
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>DOCUMENTATION // OFFICIAL DOSSIER</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            ENGINEERING RESUME
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            Access, inspect, print, or download Sandipan Samanta’s full verified curriculum vitae.
          </p>
        </div>

        {/* Feature Banner Card */}
        <Tilt max={5} className="w-full">
          <div className="rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-slate-800/40 to-cyan-500/30 shadow-2xl">
            <div className="rounded-[22px] bg-[#11141D] p-6 sm:p-10 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-xl flex-shrink-0">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
                      VERIFIED CREDENTIALS
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      FORMAT: PDF &amp; DIGITAL VIEW
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    SANDIPAN SAMANTA — CURRICULUM VITAE
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans mt-1 max-w-xl">
                    Detailed record of B.Tech (MAKAUT), Diploma (WBSCTE), Site Engineering experience at Electro Control, AutoCAD drafting skills, and electrical project portfolio.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto flex-shrink-0 justify-end">
                <button
                  onClick={() => {
                    soundFX.playModal();
                    onOpenResumeModal();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW FULL-SCREEN RESUME</span>
                </button>

                <a
                  href={personalProfile.links.resumePdf}
                  download="Sandipan_Samanta_Resume.pdf"
                  onClick={() => soundFX.playClick()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-gray-700 bg-gray-900/80 hover:bg-gray-800 text-gray-300 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>

            </div>
          </div>
        </Tilt>

      </div>
    </section>
  );
}

