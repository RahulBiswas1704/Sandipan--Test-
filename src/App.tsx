import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  viewerProfiles, 
  type ProfileId, 
  type Project, 
  type SectionId 
} from './data/portfolio';

// FX & Cursor
import CustomCursor from './components/fx/CustomCursor';
import { CINE_EASE } from './components/fx/effects';

// Core Primary Stages
import OpeningSequence from './components/OpeningSequence/OpeningSequence';
import ProfileSelector from './components/ProfileSelector/ProfileSelector';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContinueExploring from './components/ContinueExploring/ContinueExploring';

// Portfolio Sections
import About from './components/About/About';
import Journey from './components/Journey/Journey';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ResumeViewer from './components/ResumeViewer/ResumeViewer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Modals are lazy loaded on demand
const ProjectModal = lazy(() => import('./components/Projects/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeViewer/ResumeModal'));

type AppStage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY_PROFILE = 'sandipan_viewer_profile';
const STORAGE_KEY_VISITED = 'sandipan_visited_before';

export default function App() {
  // Check if user has already visited in this session
  const [stage, setStage] = useState<AppStage>(() => {
    try {
      const visited = sessionStorage.getItem(STORAGE_KEY_VISITED);
      return visited ? 'home' : 'opening';
    } catch {
      return 'opening';
    }
  });

  const [profileId, setProfileId] = useState<ProfileId>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY_PROFILE);
      return (viewerProfiles.some((p) => p.id === saved) ? saved : 'recruiter') as ProfileId;
    } catch {
      return 'recruiter';
    }
  });

  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active Profile Configuration
  const currentProfile = viewerProfiles.find((p) => p.id === profileId) || viewerProfiles[0];

  // Set visited flag
  useEffect(() => {
    if (stage === 'home') {
      try {
        sessionStorage.setItem(STORAGE_KEY_VISITED, 'true');
      } catch {}
    }
  }, [stage]);

  // Toast Auto-dismiss
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 3600);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Track active section on scroll
  useEffect(() => {
    if (stage !== 'home') return;

    const sections = ['home', 'about', 'journey', 'experience', 'projects', 'skills', 'education', 'resume', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stage]);

  const handleSelectProfile = useCallback((newProfileId: ProfileId) => {
    setProfileId(newProfileId);
    try {
      sessionStorage.setItem(STORAGE_KEY_PROFILE, newProfileId);
    } catch {}

    const targetProfile = viewerProfiles.find((p) => p.id === newProfileId);
    if (targetProfile) {
      setToastMessage(`Perspectives aligned: Watching as ${targetProfile.name} (${targetProfile.badge})`);
    }

    if (stage !== 'home') {
      setStage('home');
      window.scrollTo(0, 0);
    }
  }, [stage]);

  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Render individual sections based on Profile ordering
  const renderSection = (id: SectionId) => {
    switch (id) {
      case 'about':
        return <About key="about" onNavigateToJourney={() => navigateToSection('journey')} />;
      case 'journey':
        return <Journey key="journey" />;
      case 'experience':
        return <Experience key="experience" />;
      case 'projects':
        return <Projects key="projects" onSelectProject={setSelectedProject} />;
      case 'skills':
        return <Skills key="skills" />;
      case 'education':
        return <Education key="education" />;
      case 'resume':
        return <ResumeViewer key="resume" onOpenResumeModal={() => setIsResumeOpen(true)} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F5F5F5] font-sans overflow-x-hidden">
      {/* Subtle Film Grain Texture */}
      <div className="film-grain" aria-hidden />

      {/* Custom Precision Reticle Cursor on Desktop */}
      <CustomCursor />

      {/* STAGE 1: Opening Cinematic Experience */}
      <AnimatePresence>
        {stage === 'opening' && (
          <OpeningSequence
            key="opening-stage"
            onComplete={() => setStage('profiles')}
          />
        )}
      </AnimatePresence>

      {/* STAGE 2: Profile Selection ("WHO'S WATCHING?") */}
      <AnimatePresence>
        {stage === 'profiles' && (
          <ProfileSelector
            key="profile-stage"
            onSelect={handleSelectProfile}
            selectedId={profileId}
          />
        )}
      </AnimatePresence>

      {/* STAGE 3: Main Cinematic Experience */}
      {stage === 'home' && (
        <motion.div
          key="home-stage"
          initial={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: CINE_EASE }}
          className="flex flex-col min-h-screen"
        >
          {/* Navigation Bar */}
          <Navbar
            activeSection={activeSection}
            onNavigate={navigateToSection}
            currentProfileId={profileId}
            onOpenProfileSelector={() => setIsProfileModalOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          <main className="flex-1">
            {/* Hero Section */}
            <Hero
              onExploreJourney={() => navigateToSection('about')}
              onOpenResume={() => setIsResumeOpen(true)}
              onContactMe={() => navigateToSection('contact')}
            />

            {/* Horizontal Streaming Rail */}
            <ContinueExploring
              onNavigate={navigateToSection}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Content Sections dynamically arranged by Active Perspective */}
            {currentProfile.order.map((sectionId) => renderSection(sectionId))}

            {/* Ensure Journey & Experience are explicitly rendered if not included in profile order */}
            {!currentProfile.order.includes('journey') && <Journey key="journey-fallback" />}
            {!currentProfile.order.includes('experience') && <Experience key="experience-fallback" />}

            {/* Contact & Finale */}
            <Contact
              onReplayIntro={() => {
                window.scrollTo(0, 0);
                setStage('opening');
              }}
              onOpenResume={() => setIsResumeOpen(true)}
            />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}

      {/* MODALS */}
      <Suspense fallback={null}>
        {/* 1. Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              key="project-modal"
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              onSwitchProject={setSelectedProject}
            />
          )}
        </AnimatePresence>

        {/* 2. Resume Fullscreen Modal */}
        <AnimatePresence>
          {isResumeOpen && (
            <ResumeModal
              key="resume-modal"
              onClose={() => setIsResumeOpen(false)}
            />
          )}
        </AnimatePresence>
      </Suspense>

      {/* 3. Inline Profile Selector Modal (when user switches from Navbar) */}
      <AnimatePresence>
        {isProfileModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProfileModalOpen(false)}
            />
            <ProfileSelector
              inlineModal
              selectedId={profileId}
              onSelect={handleSelectProfile}
              onClose={() => setIsProfileModalOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Perspective Change Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] px-5 py-2.5 rounded-full bg-[#11141D]/95 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
