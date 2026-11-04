import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  Send, 
  Zap, 
  RotateCcw,
} from 'lucide-react';
import { personalProfile } from '../../data/portfolio';
import { soundFX } from '../../utils/audio';

interface ContactProps {
  onReplayIntro: () => void;
  onOpenResume: () => void;
}

export default function Contact({ onReplayIntro, onOpenResume }: ContactProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Quick form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    soundFX.playClick();
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playClick();
    setIsSubmitting(true);
    // Simulate telemetry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#060709] border-t border-gray-800/80 overflow-hidden">
      {/* Background Circuit Grid & Atmosphere */}
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
      <div 
        aria-hidden 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cinematic Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>SEASON FINALE // CONNECT &amp; COLLABORATE</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase">
            THE JOURNEY DOESN&apos;T END HERE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto italic">
            &ldquo;Every project is a new challenge. Every challenge is an opportunity to engineer something better.&rdquo;
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="font-display text-2xl text-cyan-400 tracking-wider">
              {personalProfile.name}
            </span>
            <span className="text-gray-500">•</span>
            <span className="font-mono text-xs text-gray-400 tracking-wider uppercase">
              ELECTRICAL ENGINEER
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Contact Details & Quick Dispatch Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto mb-16">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#0E1118] border border-gray-800 hover:border-blue-500/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase">DIRECT PHONE LINE</span>
                  <a
                    href={personalProfile.links.phone}
                    className="text-sm sm:text-base font-mono font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalProfile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(personalProfile.phone, 'phone')}
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={personalProfile.links.phone}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold"
                >
                  CALL
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#0E1118] border border-gray-800 hover:border-blue-500/40 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-gray-400 uppercase">EMAIL TRANSMISSION</span>
                  <a
                    href={personalProfile.links.email}
                    className="text-xs sm:text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {personalProfile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(personalProfile.email, 'email')}
                  className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={personalProfile.links.email}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold"
                >
                  EMAIL
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0E1118] border border-gray-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono text-gray-400 uppercase">RESIDENTIAL &amp; BASE LOCATION</span>
                <span className="text-sm font-mono font-bold text-white">
                  {personalProfile.location}
                </span>
              </div>
            </div>

            {/* Professional Placeholders (LinkedIn & GitHub) */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalProfile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0E1118] border border-gray-800 hover:border-blue-500/40 text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LINKEDIN</span>
              </a>

              <a
                href={personalProfile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0E1118] border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
              >
                <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GITHUB</span>
              </a>
            </div>

            {/* Action Buttons: Download Resume */}
            <div className="pt-2">
              <button
                onClick={() => {
                  soundFX.playModal();
                  onOpenResume();
                }}
                className="w-full py-3.5 rounded-xl border border-blue-500/40 bg-blue-950/40 hover:bg-blue-900/40 text-cyan-300 font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E1118] border border-gray-800 p-6 sm:p-8 shadow-xl">
            <h3 className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1 flex items-center gap-2">
              <Send className="w-3.5 h-3.5" />
              <span>DISPATCH TELEGRAM // SEND MESSAGE</span>
            </h3>
            <p className="text-xs text-gray-400 font-sans mb-6">
              Inquire about electrical design, site supervision, drafting contracts, or engineering employment.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#141822] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-400 uppercase mb-1">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#141822] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 uppercase mb-1">SUBJECT</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Site Engineer Position / Electrical Project Consultation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#141822] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 uppercase mb-1">MESSAGE / PROJECT SCOPE</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your inquiry, project requirements, or job details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#141822] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors font-sans text-xs leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING MESSAGE VIA TELEMETRY...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND DISPATCH DIRECTLY</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-center"
                  >
                    ✓ Message recorded. You can also contact Sandipan directly at <strong>samantasandipan92@gmail.com</strong>.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Cinematic Closing Banner: "TO BE CONTINUED..." */}
        <div className="py-12 border-t border-gray-800/80 flex flex-col items-center justify-center text-center">
          
          {/* Animated Glitch / Neon Pulse "TO BE CONTINUED..." */}
          <div className="relative mb-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-950/90 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="font-display text-2xl sm:text-3xl tracking-[0.3em] text-white uppercase font-extrabold">
                TO BE CONTINUED...
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-gray-500 max-w-md mb-6">
            SEASON 04 IN PRODUCTION • READY FOR IMMEDIATE DEPLOYMENT ON SITE &amp; IN THE DESIGN OFFICE.
          </p>

          {/* Replay Cinematic Intro Button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onReplayIntro();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-800 hover:border-gray-600 bg-gray-900/60 hover:bg-gray-800 text-gray-400 hover:text-white font-mono text-xs tracking-wider transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
            <span>REPLAY OPENING SEQUENCE</span>
          </button>

        </div>

      </div>
    </section>
  );
}
