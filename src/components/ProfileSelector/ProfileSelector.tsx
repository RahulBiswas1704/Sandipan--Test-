import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Compass, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { viewerProfiles, type ProfileId, type ViewerProfile } from '../../data/portfolio';
import { CINE_EASE, Tilt } from '../fx/effects';
import { soundFX } from '../../utils/audio';

interface ProfileSelectorProps {
  onSelect: (profileId: ProfileId) => void;
  selectedId?: ProfileId;
  inlineModal?: boolean;
  onClose?: () => void;
}

export default function ProfileSelector({
  onSelect,
  selectedId,
  inlineModal = false,
  onClose,
}: ProfileSelectorProps) {
  const handlePick = (id: ProfileId) => {
    soundFX.playClick();
    onSelect(id);
    if (onClose) onClose();
  };

  const renderAvatarGraphic = (profile: ViewerProfile) => {
    switch (profile.id) {
      case 'recruiter':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-900/60 to-slate-900 border border-blue-500/40 rounded-2xl group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
            {/* Hardhat / Professional Blueprint Motif */}
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center mb-2">
              <Briefcase className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono font-semibold tracking-wider">
              SITE OPERATIONS
            </div>
          </div>
        );
      case 'engineer':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-cyan-950/60 to-slate-900 border border-cyan-500/40 rounded-2xl group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300">
            {/* Microcontroller & Circuit Motif */}
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-2">
              <Cpu className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-semibold tracking-wider">
              HARDWARE &amp; CODE
            </div>
          </div>
        );
      case 'explorer':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-emerald-950/60 to-slate-900 border border-emerald-500/40 rounded-2xl group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300">
            {/* Grid & Transmission Compass Motif */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-2">
              <Compass className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-semibold tracking-wider">
              FULL NARRATIVE
            </div>
          </div>
        );
    }
  };

  const containerClasses = inlineModal
    ? 'relative p-6 sm:p-10 max-w-3xl w-full bg-[#111318] border border-gray-800 rounded-3xl shadow-2xl z-50 text-center'
    : 'fixed inset-0 z-[90] flex flex-col items-center justify-center bg-[#08090B] px-4 py-8 overflow-y-auto select-none';

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: CINE_EASE }}
      role="dialog"
      aria-label="Who is watching profile selection"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center mb-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>VIEWER PERSPECTIVE</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wider uppercase drop-shadow-md">
          WHO&apos;S WATCHING?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-400 font-sans">
          Select your profile to optimize the documentary order for your interests. All episodes and projects remain fully accessible.
        </p>
      </div>

      {/* 3 Profile Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl w-full">
        {viewerProfiles.map((p) => {
          const isCurrent = selectedId === p.id;
          return (
            <Tilt key={p.id} max={10} className="w-full">
              <button
                type="button"
                onClick={() => handlePick(p.id)}
                onMouseEnter={() => soundFX.playHover()}
                className={`group relative w-full flex flex-col items-center p-6 rounded-2xl transition-all duration-300 text-center cursor-pointer border ${
                  isCurrent
                    ? 'bg-slate-900/90 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.35)]'
                    : 'bg-[#111318]/90 border-gray-800 hover:border-gray-600 hover:bg-[#161922]'
                }`}
              >
                {/* Active Profile Checkmark badge */}
                {isCurrent && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-500/40">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>ACTIVE</span>
                  </div>
                )}

                {/* Avatar Icon Box */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 p-2 relative">
                  {renderAvatarGraphic(p)}
                </div>

                {/* Profile Name */}
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-cyan-300 transition-colors">
                  {p.name}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-xs text-blue-400 font-medium mt-1">
                  {p.subtitle}
                </p>

                {/* Description Tagline */}
                <p className="text-xs text-gray-400 mt-2 line-clamp-2 font-sans">
                  {p.tagline}
                </p>

                {/* Select Indicator */}
                <div className="mt-4 flex items-center gap-1 text-xs font-mono font-medium text-gray-400 group-hover:text-white transition-colors">
                  <span>ENTER STREAM</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-blue-400" />
                </div>
              </button>
            </Tilt>
          );
        })}
      </div>

      {inlineModal && onClose && (
        <div className="relative z-10 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 text-xs font-mono tracking-wider transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      )}
    </motion.div>
  );
}

