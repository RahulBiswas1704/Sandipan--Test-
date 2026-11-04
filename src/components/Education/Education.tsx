import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { educationList } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-[#0B0D12] border-t border-gray-800/80">
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC FOUNDATION // CREDENTIALS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            EDUCATION &amp; QUALIFICATIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            Dual qualification in Electrical Engineering spanning university engineering degree and polytechnic diploma.
          </p>
        </div>

        {/* Vertical Academic Timeline */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Glowing Junction Node on timeline */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#08090B] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
                <span className="absolute w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#11141D] border border-gray-800 hover:border-blue-500/40 transition-all shadow-xl">
                
                {/* Top Badge & Timing */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                      {edu.status === 'Graduating' ? 'FINAL YEAR CANDIDATE' : 'GRADUATED WITH DISTINCTION'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Completion: {edu.completion}</span>
                  </div>
                </div>

                {/* Degree & School Info */}
                <div className="mt-4">
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm sm:text-base text-cyan-300 font-mono mt-1 font-semibold">
                    <Building className="w-4 h-4 text-blue-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-5 pt-4 border-t border-gray-800/80">
                  <span className="block text-[11px] font-mono text-gray-500 uppercase tracking-wider mb-2">
                    ACADEMIC FOCUS &amp; COMPETENCIES:
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-gray-300 font-sans flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

