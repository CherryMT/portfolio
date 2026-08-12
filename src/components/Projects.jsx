import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, ArrowRight, Code2, FileCode2, Zap, Paintbrush, Layers, 
  Film, Activity, Box, Palette, SquareMousePointer, BarChart3, Network, 
  FileSpreadsheet, Database, Map, Globe, GitBranch, PenTool, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GridBackground } from './ui/grid-dot-background';
import inteliPathImg from '../assets/Intelipath.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: "intelipath",
      title: "InteliPath",
      desc: "Intelligent career guidance platform helping students build personalized learning and career roadmaps powered by AI. Includes interactive node graphs and real-time AI mentor chat.",
      img: inteliPathImg,
      demoLink: "https://intelipath.online/",
      githubLink: "https://github.com/InteliRoadMap"
    }
  ];

  const techCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React 19", icon: Code2 },
        { name: "TypeScript", icon: FileCode2 },
        { name: "Vite", icon: Zap },
        { name: "TailwindCSS v4", icon: Paintbrush },
        { name: "Redux Toolkit", icon: Layers }
      ]
    },
    {
      name: "UI / Animation",
      skills: [
        { name: "Framer Motion", icon: Film },
        { name: "GSAP", icon: Activity },
        { name: "Radix UI", icon: Box },
        { name: "Lucide Icons", icon: Palette },
        { name: "Phosphor Icons", icon: SquareMousePointer }
      ]
    },
    {
      name: "Data & Charts",
      skills: [
        { name: "Recharts", icon: BarChart3 },
        { name: "React Flow", icon: Network },
        { name: "PapaParse", icon: FileSpreadsheet },
        { name: "XLSX", icon: Database }
      ]
    },
    {
      name: "Routing & State",
      skills: [
        { name: "React Router v7", icon: Map },
        { name: "Redux Toolkit", icon: Layers },
        { name: "Axios", icon: Globe }
      ]
    },
    {
      name: "Tooling",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Figma", icon: PenTool },
        { name: "ESLint", icon: CheckCircle },
        { name: "Vite", icon: Zap }
      ]
    }
  ];

  return (
    <section className="py-32 overflow-hidden" id="portfolio">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-16"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-cyan-300 tracking-widest uppercase">My Work</span>
          </motion.div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }}
            className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight"
          >
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Showcase</span>
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 mt-4">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1 transition-all ${
              activeTab === 'projects' 
                ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            <span className="text-xl font-mono">&lt; &gt;</span>
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 w-full sm:w-auto hover:-translate-y-1 transition-all ${
              activeTab === 'tech' 
                ? 'bg-white/20 text-white border border-white/30 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            <span className="text-xl">⚛️</span>
            Tech Stack
          </button>
        </div>

        {/* Content Area with Animation */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
            >
            {projects.map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden group flex flex-col border border-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500"
                >
                  {/* Image Area */}
                  <div className={`h-56 w-full relative overflow-hidden flex items-center justify-center bg-white/5`}>
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{proj.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                      {proj.desc}
                    </p>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-white/10">
                      <a href={proj.demoLink || "#"} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:text-primary-light flex items-center gap-1.5 transition-colors">
                        Live Demo <ExternalLink size={16} />
                      </a>
                      <Link to={`/project/${proj.id}`} className="text-sm font-bold text-white/70 hover:text-white flex items-center gap-1.5 transition-colors px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10">
                        Details <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center items-start gap-6 max-w-6xl mx-auto"
            >
              {techCategories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-400 min-w-[300px] flex-1 max-w-md"
                >
                  <h3 className="text-lg font-bold text-primary mb-6">{cat.name}</h3>
                  <div className="flex flex-wrap gap-3">
                      {cat.skills.map((skill, sIdx) => {
                        const Icon = skill.icon;
                        return (
                          <span
                            key={sIdx}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white/10 border border-white/20 rounded-full text-white/80 shadow-sm hover:border-primary/40 hover:text-primary transition-all cursor-default"
                          >
                            <Icon size={14} className="opacity-80" />
                            {skill.name}
                          </span>
                        );
                      })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
