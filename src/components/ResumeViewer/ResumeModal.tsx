import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  HardHat, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Zap 
} from 'lucide-react';
import { personalProfile, educationList, featuredProjects } from '../../data/portfolio';
import { CINE_EASE } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const pdfUrl = personalProfile.links.resumePdf;

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

  const handlePrint = () => {
    soundFX.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => {
          soundFX.playClick();
          onClose();
        }}
      />

      {/* Modal Dialog Window */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Official Resume of Sandipan Samanta"
        className="relative z-10 w-full max-w-5xl rounded-3xl bg-[#0E1118] border border-gray-800 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col h-[92vh]"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: CINE_EASE }}
      >
        {/* Top Controls Bar */}
        <div className="p-4 sm:p-5 bg-[#141720] border-b border-gray-800 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 text-cyan-400 border border-blue-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase">
                OFFICIAL RESUME // SANDIPAN SAMANTA
              </h2>
              <p className="text-[11px] font-mono text-gray-400">
                Electrical Engineer • Site Engineer • MAKAUT / WBSCTE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>

            {/* Download Button */}
            <a
              href={pdfUrl}
              download="Sandipan_Samanta_Resume.pdf"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-colors shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="p-2 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#090B10]">
          
          {/* Upload Notice & File Path Helper */}
          <div className="mb-6 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-start gap-3 text-xs font-mono text-gray-300">
            <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="text-cyan-300 font-bold">RESUME FILE LOCATION: </span>
              This viewer is configured to serve your authentic PDF from <code className="text-blue-300 bg-blue-900/60 px-1 py-0.5 rounded">public/assets/Sandipan_Samanta_Resume.pdf</code>.
              Below is the interactive digital copy presenting all verified credentials.
            </div>
          </div>

          {/* Clean Interactive Digital Resume Document Preview */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-white text-gray-900 p-6 sm:p-10 shadow-2xl font-sans print:shadow-none print:m-0 print:p-0">
            
            {/* Header */}
            <div className="border-b-2 border-gray-900 pb-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold uppercase tracking-wide text-gray-900">
                  SANDIPAN SAMANTA
                </h1>
                <p className="text-sm font-bold text-blue-700 tracking-wider uppercase mt-0.5">
                  Electrical Engineer | Site Engineer | Electrical Design
                </p>
              </div>

              <div className="text-xs text-gray-700 space-y-1 sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gray-600" />
                  <span>+91 7595089896</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gray-600" />
                  <span>samantasandipan92@gmail.com</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gray-600" />
                  <span>Liluah, West Bengal – 711227</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                PROFESSIONAL INTRODUCTION
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                B.Tech Electrical Engineering graduate (2026) with a Diploma in Electrical Engineering (2023) and practical site-level experience in electrical inspection, drawing verification, and project execution at Electro Control. Comfortable with AutoCAD 2D drafting, load and cable sizing, electrical layouts, technical documentation, and engineering coordination. Seeking opportunities in production, maintenance, electrical design, and project engineering.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                PRACTICAL EXPERIENCE
              </h2>
              <div className="mb-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-gray-900">Site Engineer — Electro Control</span>
                  <span className="text-[11px] text-gray-600 font-semibold">July 2025 – March 2026 | Bally, WB</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-[11px] text-gray-700 space-y-1 mt-1.5 leading-relaxed">
                  <li>Conducted site surveys and technical evaluations, assessing electrical requirements and mitigating hazards.</li>
                  <li>Reviewed electrical layouts, Single Line Diagrams (SLDs), load schedules, and Bills of Quantities (BOQ).</li>
                  <li>Verified load calculations, cable cross-sectional sizing, and panel capacities against thermal standards.</li>
                  <li>Coordinated cross-trade site activities with civil and mechanical subcontractors to prevent layout clashes.</li>
                  <li>Executed testing using Megger (insulation resistance) and digital multimeters per DSR, DAR, and PWD specifications.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                EDUCATION &amp; QUALIFICATIONS
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-gray-900">B.Tech in Electrical Engineering</span>
                    <span className="text-gray-600 block text-[11px]">Maulana Abul Kalam Azad University of Technology (MAKAUT)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">CGPA: 6.56 / 10</span>
                    <span className="text-[11px] text-gray-600 block">Graduation: July 2026</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-gray-900">Diploma in Electrical Engineering</span>
                    <span className="text-gray-600 block text-[11px]">West Bengal State Council of Technical Education (WBSCTE)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">CGPA: 7.6 / 10</span>
                    <span className="text-[11px] text-gray-600 block">Completion: July 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                ENGINEERING TOOLKIT &amp; SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-800">
                <div>
                  <strong>Design &amp; Drafting:</strong> AutoCAD 2D (SLDs, Layouts, Panel Schedules)
                </div>
                <div>
                  <strong>Fundamentals:</strong> Circuit Design, Wiring, Load Calculation, Cable Sizing
                </div>
                <div>
                  <strong>Testing:</strong> Megger Insulation Testing, Digital Multimeter
                </div>
                <div>
                  <strong>Standards:</strong> DSR, DAR &amp; PWD Specifications, BOQ Preparation
                </div>
                <div>
                  <strong>Office Tools:</strong> MS Excel, MS Word, MS PowerPoint
                </div>
                <div>
                  <strong>Languages:</strong> English, Hindi, Bengali
                </div>
              </div>
            </div>

            {/* Key Hardware Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 mb-2">
                FEATURED HARDWARE PROJECTS
              </h2>
              <div className="space-y-2 text-[11px]">
                <div>
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>Fingerprint-Based Door Unlocking System</span>
                    <span>Arduino UNO R3 • Biometrics • Solenoid Lock</span>
                  </div>
                  <p className="text-gray-700">
                    Engineered access control circuit with optical fingerprint sensor, 16x2 LCD interface, and relay-driven solenoid latch.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>Dual-Axis Solar Tracking System</span>
                    <span>Renewable Energy • Servos • LDR Quadrant</span>
                  </div>
                  <p className="text-gray-700">
                    Developed autonomous sun-tracking mechanism with 4 LDR sensors and 2 servo motors for maximum photovoltaic yield.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
