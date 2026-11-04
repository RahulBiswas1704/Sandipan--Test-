import React from 'react';
import { ArrowUp, Zap, Heart, Shield } from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { soundFX } from '../../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-gray-900 py-12 text-gray-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#141B2D] to-[#08090B] border border-blue-500/40 p-1 flex items-center justify-center text-white shadow-sm">
                <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
                  <path 
                    d="M 44 18 H 22 C 18 18 15 21 15 25 C 15 29 18 32 23 33 L 41 36 C 46 37 49 40 49 44 C 49 48 46 51 42 51 H 20" 
                    stroke="#38BDF8" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M 36 21 L 24 37 H 34 L 28 47" 
                    stroke="#FFFFFF" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle cx="44" cy="18" r="3" fill="#22D3EE"/>
                  <circle cx="20" cy="51" r="3" fill="#3B82F6"/>
                </svg>
              </div>
              <span className="font-display text-2xl text-white tracking-wider">
                SANDIPAN
              </span>
              <span className="text-[10px] text-blue-400 font-bold tracking-widest bg-blue-950 px-1.5 py-0.5 rounded border border-blue-500/30">
                THE SERIES
              </span>
            </div>
            <p className="text-gray-500 text-[11px] max-w-md">
              {personalProfile.tagline}
            </p>
          </div>

          {/* Quick Info & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-center sm:text-right text-[11px] text-gray-500">
              <span className="block text-gray-300">{personalProfile.professionalIdentity}</span>
              <span>{personalProfile.location}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer group"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Legal & Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 text-center sm:text-left">
          <p>
            © 2026 Sandipan Samanta. Designed &amp; Engineered for Professional Excellence.
          </p>
          <div className="flex items-center gap-3">
            <span>React 18+ • TypeScript • Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

