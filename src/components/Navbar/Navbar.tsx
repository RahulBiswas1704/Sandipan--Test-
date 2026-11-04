import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  FileText, 
  User, 
  Zap, 
  ChevronDown 
} from 'lucide-react';
import { viewerProfiles, type ProfileId } from '../../data/portfolio';
import { soundFX } from '../../utils/audio';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentProfileId: ProfileId;
  onOpenProfileSelector: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  onNavigate,
  currentProfileId,
  onOpenProfileSelector,
  onOpenResume,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());

  const currentProfile = viewerProfiles.find((p) => p.id === currentProfileId) || viewerProfiles[0];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      // Hide navbar when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleSound = () => {
    const newMuted = soundFX.toggleMute();
    setIsMuted(newMuted);
    if (!newMuted) soundFX.playClick();
  };

  const handleNavClick = (id: string) => {
    soundFX.playClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-gray-800/80 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#08090B]/90 via-[#08090B]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="Scroll to top / Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl text-white tracking-wider leading-none group-hover:text-cyan-400 transition-colors">
                SANDIPAN
              </span>
              <span className="text-[9px] font-mono text-blue-400 font-bold tracking-[0.25em] uppercase">
                THE SERIES
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-md -z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons: Profile Switcher, Audio, Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg border border-gray-800 bg-gray-900/60 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              aria-label={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-gray-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Profile Perspective Switcher Pill */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenProfileSelector();
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 hover:bg-blue-900/40 text-blue-300 text-xs font-mono transition-all cursor-pointer shadow-sm"
              title="Change viewer perspective"
            >
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentProfile.name}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>

            {/* Resume CTA */}
            <button
              onClick={() => {
                soundFX.playModal();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-lg border border-gray-800 text-gray-400"
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#08090B]/98 border-b border-gray-800 p-6 flex flex-col gap-4 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="text-xs font-mono text-gray-400 uppercase">Watching As:</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfileSelector();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950 text-blue-300 font-mono text-xs border border-blue-500/30"
              >
                <User className="w-3 h-3 text-cyan-400" />
                <span>{currentProfile.name}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                    activeSection === link.id
                      ? 'bg-blue-600/20 text-cyan-300 border-l-2 border-cyan-400 font-semibold'
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-2 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW OFFICIAL RESUME</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

