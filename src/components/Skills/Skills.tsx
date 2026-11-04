import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  PenTool, 
  Zap, 
  Gauge, 
  FileSpreadsheet, 
  Languages, 
  ShieldCheck, 
  Search,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories, type SkillCategory } from '../../data/portfolio';
import { soundFX } from '../../utils/audio';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-blue-400" />;
      case 'Gauge':
        return <Gauge className="w-4 h-4 text-pink-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
      case 'Languages':
        return <Languages className="w-4 h-4 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
      default:
        return <Wrench className="w-4 h-4 text-blue-400" />;
    }
  };

  // Flattened & filtered skill items
  const allCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-[#08090B] border-t border-gray-800/80">
      <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES // ENGINEERING TOOLKIT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
            TOP SKILLS &amp; EXPERTISE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 font-mono max-w-2xl">
            Practical competencies verified through hands-on site execution, drawing review, and engineering coursework.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar p-1.5 bg-gray-900/80 border border-gray-800 rounded-2xl">
            <button
              onClick={() => {
                soundFX.playClick();
                setSelectedCategory('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ALL SKILLS
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111319] border border-gray-800 rounded-xl pl-9 pr-3 py-2 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

        </div>

        {/* Categories Display */}
        <div className="space-y-10">
          {allCategories.map((category) => {
            // Filter skills by search query
            const filteredSkills = category.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.practicalApplication.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0) return null;

            return (
              <div key={category.id} className="space-y-4">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-2 border-b border-gray-800/80">
                  <div className="p-2 rounded-lg bg-gray-900 border border-gray-800">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredSkills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-2xl bg-[#0E1118] border border-gray-800/80 hover:border-blue-500/40 hover:bg-[#121622] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Skill Title & Level Tag */}
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors uppercase">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                              skill.levelTag === 'Expertise'
                                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                                : skill.levelTag === 'Proficient'
                                ? 'bg-blue-950/60 text-blue-300 border-blue-500/30'
                                : 'bg-gray-800 text-gray-300 border-gray-700'
                            }`}
                          >
                            {skill.levelTag}
                          </span>
                        </div>

                        {/* Practical Application Description */}
                        <p className="text-xs text-gray-400 font-sans leading-relaxed mt-2">
                          {skill.practicalApplication}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>PRACTICAL APPLICATION VERIFIED</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

