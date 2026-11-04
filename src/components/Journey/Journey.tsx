import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Award, 
  CheckCircle, 
  ChevronDown, 
  Wrench, 
  Layers, 
  Sparkles,
  Zap,
  HardHat
} from 'lucide-react';
import { seasons, type Season, type SeasonEpisode } from '../../data/portfolio';
import { CINE_EASE } from '../fx/effects';
import { soundFX } from '../../utils/audio';

export default function Journey() {
  const [activeSeasonIndex, setActiveSeasonIndex] = useState(1); // Default to Season 02 (The Industry Experience)
  const [expandedEpisodeId, setExpandedEpisodeId] = useState<string | null>('season-2-E02'); // Default open the rich site engineering episode

  const activeSeason = seasons[activeSeasonIndex];

  const handleSeasonChange = (index: number) => {
    soundFX.playClick();
    setActiveSeasonIndex(index);
    // Expand first episode of newly selected season
    setExpandedEpisodeId(`${seasons[index].seasonId}-${seasons[index].episodes[0].episodeNumber}`);
  };

  const toggleEpisode = (uniqueId: string) => {
    soundFX.playClick();
    setExpandedEpisodeId(expandedEpisodeId === uniqueId ? null : uniqueId);
  };

  return (
    <section id="journey" className="py-20 relative bg-[#08090B] border-t border-gray-800/80">
      {/* Background Ambience */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>CAREER CHRONICLES // EPISODIC JOURNEY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
              SEASONS &amp; EPISODES
            </h2>
            <p className="mt-2 text-sm text-gray-400 font-mono">
              The complete progression of Sandipan Samanta across academia, site engineering, and professional milestones.
            </p>
          </div>

          {/* Season Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-gray-900/90 border border-gray-800 self-start md:self-auto overflow-x-auto hide-scrollbar">
            {seasons.map((season, idx) => {
              const isActive = activeSeasonIndex === idx;
              return (
                <button
                  key={season.seasonId}
                  onClick={() => handleSeasonChange(idx)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="text-cyan-300">S{season.seasonNumber}</span>
                  <span className="hidden sm:inline">{season.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Season Banner Card */}
        <motion.div
          key={activeSeason.seasonId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: CINE_EASE }}
          className="mb-8 p-6 rounded-2xl glass-card border border-blue-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-900/40 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-2xl text-cyan-300">
                S{activeSeason.seasonNumber}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                  {activeSeason.badge}
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {activeSeason.yearRange}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mt-1">
                SEASON {activeSeason.seasonNumber} — {activeSeason.title}
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                {activeSeason.theme}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20">
            <span>{activeSeason.episodes.length} EPISODES</span>
          </div>
        </motion.div>

        {/* Episodes Stack */}
        <div className="space-y-6">
          {activeSeason.episodes.map((episode) => {
            const uniqueId = `${activeSeason.seasonId}-${episode.episodeNumber}`;
            const isExpanded = expandedEpisodeId === uniqueId;

            return (
              <motion.div
                key={uniqueId}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#12151E] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'bg-[#0E1017] border-gray-800 hover:border-gray-700 hover:bg-[#11131B]'
                }`}
              >
                {/* Episode Header Bar (Always Visible / Clickable) */}
                <button
                  type="button"
                  onClick={() => toggleEpisode(uniqueId)}
                  className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Episode Badge Box */}
                    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-gray-800 border border-gray-700 flex flex-col items-center justify-center flex-shrink-0 group-hover:border-cyan-400">
                      <span className="font-display text-lg text-white font-bold">
                        {episode.episodeNumber}
                      </span>
                      <span className="text-[9px] font-mono text-cyan-400 -mt-1">
                        S{activeSeason.seasonNumber}
                      </span>
                    </div>

                    {/* Title & Metadata */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/30">
                          {episode.typeBadge}
                        </span>
                        {episode.scoreOrMetric && (
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                            {episode.scoreOrMetric}
                          </span>
                        )}
                        <span className="text-xs font-mono text-gray-500">
                          {episode.durationOrDate}
                        </span>
                      </div>

                      <h4 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase">
                        {episode.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-sans mt-1">
                        <span className="font-medium text-gray-300 flex items-center gap-1">
                          {activeSeason.seasonNumber === '02' ? (
                            <HardHat className="w-3.5 h-3.5 text-cyan-400" />
                          ) : (
                            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                          )}
                          {episode.institutionOrCompany}
                        </span>
                        {episode.location && (
                          <span className="flex items-center gap-1 text-gray-500">
                            <MapPin className="w-3 h-3 text-red-400" />
                            {episode.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Arrow */}
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 self-end sm:self-center">
                    <span className="hidden sm:inline">{isExpanded ? 'COLLAPSE' : 'INSPECT DETAILS'}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Episode Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: CINE_EASE }}
                      className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-800/80"
                    >
                      {/* Summary callout */}
                      <p className="text-sm text-gray-300 font-sans leading-relaxed mb-5 p-4 rounded-xl bg-gray-900/70 border border-gray-800">
                        {episode.summary}
                      </p>

                      {/* Detailed Bullet Points */}
                      <div className="mb-6">
                        <h5 className="text-xs font-mono font-bold text-cyan-300 tracking-wider uppercase mb-3 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                          <span>TECHNICAL SPECIFICATIONS &amp; RESPONSIBILITIES</span>
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {episode.details.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="text-xs text-gray-300 font-sans flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0A0C11] border border-gray-800/70"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Topics & Tools Footer */}
                      <div className="pt-4 border-t border-gray-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[10px] font-mono text-gray-500 uppercase mb-2">
                            CORE TOPICS:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {episode.technicalTopics.map((topic, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/20"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="block text-[10px] font-mono text-gray-500 uppercase mb-2">
                            TOOLS &amp; INSTRUMENTS:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {episode.toolsUsed.map((tool, toolIdx) => (
                              <span
                                key={toolIdx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-700/60"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

