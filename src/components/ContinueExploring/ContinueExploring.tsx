import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Film, 
  HardHat, 
  Zap, 
  Wrench, 
  GraduationCap, 
  FileText, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { continueExploringCards } from '../../data/portfolio';
import { soundFX } from '../../utils/audio';

interface ContinueExploringProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export default function ContinueExploring({
  onNavigate,
  onOpenResume,
}: ContinueExploringProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    soundFX.playClick();
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleCardClick = (id: string) => {
    soundFX.playClick();
    if (id === 'resume') {
      onOpenResume();
    } else {
      onNavigate(id);
    }
  };

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-5 h-5 text-blue-400" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-pink-400" />;
      default:
        return <Play className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-12 relative z-20 border-y border-gray-800/80 bg-[#0B0D12]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
              CONTINUE EXPLORING
            </h2>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-gray-800 text-[11px] font-mono text-gray-400">
              6 MODULES AVAILABLE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-800 bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-800 bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Streaming Rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x snap-mandatory"
        >
          {continueExploringCards.map((card) => (
            <div
              key={card.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[340px] flex-shrink-0 snap-start"
            >
              <button
                type="button"
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={() => soundFX.playHover()}
                className="group w-full text-left rounded-2xl overflow-hidden bg-[#141720] border border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Thumbnail Graphic Preview */}
                <div className="relative h-40 w-full bg-gradient-to-br from-slate-900 via-gray-900 to-[#111318] p-4 flex flex-col justify-between overflow-hidden border-b border-gray-800/80">
                  {/* Subtle Grid in thumbnail */}
                  <div className="absolute inset-0 circuit-dots opacity-30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded-md">
                      {card.category}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {card.episodesCount}
                    </span>
                  </div>

                  {/* Play Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Info Tag */}
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-900/90 border border-gray-700/60">
                      {getCardIcon(card.previewIcon)}
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-semibold text-white">
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Progress Indicator Bar at bottom of thumbnail */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gray-800">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white tracking-wide group-hover:text-cyan-300 transition-colors uppercase">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span className="group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      <span>WATCH / INSPECT</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span>{card.progress}% VIEWED</span>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

