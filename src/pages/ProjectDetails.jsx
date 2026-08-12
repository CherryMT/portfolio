import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft, Code2, Layers, Bot, Map, BarChart2, Users, Lock,
  Folder, Mail, Download, BookOpen, Box, Globe, Monitor, ExternalLink, GitBranch
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

const iconMap = {
  bot: Bot, map: Map, chart: BarChart2, users: Users, lock: Lock,
  folder: Folder, mail: Mail, download: Download, book: BookOpen, box: Box,
  globe: Globe, monitor: Monitor, layers: Layers
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeStack, setActiveStack] = useState('frontend');
  const heroRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="text-purple-400 hover:underline">Return Home</button>
      </div>
    );
  }

  const currentStack = project.techStacks[activeStack];
  const totalLayers = (project.techStacks.frontend?.layers?.length || 0) + (project.techStacks.backend?.layers?.length || 0);

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background orbs */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-700/20 blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-700/15 blur-[120px]" />
          <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-pink-700/10 blur-[100px]" />
        </motion.div>

        {/* Grid lines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div style={{ opacity }} className="container mx-auto max-w-7xl px-6 pt-20 pb-12 relative z-10">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </motion.button>

          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* LEFT – Info */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 flex flex-col"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 mb-6 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs font-semibold text-purple-300 tracking-widest uppercase">Project Details</span>
              </motion.div>

              {/* Title */}
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-4 leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-[length:200%_auto] animate-gradient">
                  {project.title}
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
                {project.desc}
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} className="flex gap-3 mb-8">
                {[
                  { label: 'Tech Layers', value: totalLayers, icon: Code2, color: 'purple' },
                  { label: 'Key Features', value: project.features.length, icon: Layers, color: 'cyan' },
                  { label: 'Team Size', value: project.teamSize || 1, icon: Users, color: 'emerald' },
                ].map(stat => (
                  <div key={stat.label} className="relative flex-1 rounded-[1.25rem] p-[2px] overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10">
                    {/* Gradient border ring */}
                    <div 
                      className="absolute inset-0 rounded-[inherit]"
                      style={{
                        background: "linear-gradient(135deg, #a855f7, #3b82f6, #ffffff, #a855f7)",
                        backgroundSize: "300% 300%",
                        animation: "gradientShift 4s ease infinite",
                      }}
                    />
                    
                    {/* Inner content container */}
                    <div className="relative h-full w-full bg-[#050505] rounded-[calc(1.25rem-2px)] px-4 py-3 flex flex-col justify-center">
                      {/* Inner radial glow */}
                      <div className="absolute inset-0 rounded-[inherit] pointer-events-none" 
                        style={{
                          background: "radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)"
                        }}
                      />
                      
                      {/* Shimmer sweep on hover */}
                      <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                          backgroundSize: "200% 100%",
                          animation: "shimmer 1.5s ease infinite",
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-white/50 font-medium mb-1.5">
                          <stat.icon size={12} />
                          <span className="text-[11px] tracking-wide uppercase">{stat.label}</span>
                        </div>
                        <div className={`text-2xl font-black text-${stat.color}-400`}>{stat.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div variants={fadeUp} className="flex gap-3 mb-12">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-700 to-cyan-700 text-white font-bold text-sm hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all">
                    <ExternalLink size={14} /> Visit Website
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 font-bold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                    <GitBranch size={14} /> GitHub
                  </a>
                )}
              </motion.div>

              {/* Tech Stack Tabs */}
              <motion.div variants={fadeUp}>
                <h3 className="flex items-center gap-2 text-sm font-bold text-white/50 uppercase tracking-widest mb-4">
                  <Code2 size={14} /> Tech Stack
                </h3>
                <div className="flex gap-2 mb-4">
                  {['frontend', 'backend'].map(tab => (
                    <button key={tab} onClick={() => setActiveStack(tab)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                        activeStack === tab
                          ? tab === 'frontend'
                            ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-lg shadow-purple-500/20'
                            : 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/20'
                          : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:border-white/20'
                      }`}>
                      {tab === 'frontend' ? 'FE' : 'BE'}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={activeStack}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] backdrop-blur-sm">
                    <div className={`px-4 py-2 border-b border-white/5 text-xs font-mono ${activeStack === 'frontend' ? 'text-purple-400' : 'text-cyan-400'}`}>
                      {currentStack.repo}
                    </div>
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-white/5">
                          <th className="py-2 px-4 text-white/30 font-medium w-2/5">Layer</th>
                          <th className="py-2 px-4 text-white/30 font-medium">Choices</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentStack.layers.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <td className={`py-2.5 px-4 font-semibold ${activeStack === 'frontend' ? 'text-purple-400' : 'text-cyan-400'}`}>{row.layer}</td>
                            <td className="py-2.5 px-4 text-white/60 leading-relaxed">{row.choices}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* RIGHT – Browser screenshot + Key Features */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 8 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 w-full flex flex-col gap-6 self-start lg:sticky lg:top-20"
            >
              {/* Browser frame */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-white/5 rounded-md px-3 py-1 text-[11px] text-white/30 font-mono">
                      {project.demoLink?.replace('https://', '') || 'intelipath.online'}
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <img src={project.img} alt={project.title}
                      className="w-full h-auto object-cover object-top transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Key Features pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 backdrop-blur-sm"
              >
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="text-yellow-400">✨</span> Key Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f, i) => {
                    const Icon = iconMap[f.icon] || Box;
                    return (
                      <motion.div key={i}
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.05 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/70 hover:border-purple-500/40 hover:text-white hover:bg-purple-500/10 transition-all cursor-default"
                      >
                        <Icon size={11} className="text-purple-400" /> {f.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CONTENT SECTIONS ── */}
      <div className="relative">
        {/* Section separator glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        <div className="container mx-auto max-w-7xl px-6 py-24 space-y-16">

          {/* The Problem & What it does */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {[
              { title: 'The Problem', content: project.theProblem, color: 'purple', icon: '🧩' },
              { title: `What ${project.title} Does`, content: project.whatItDoes, color: 'cyan', icon: '💡' },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp}
                className="relative group rounded-3xl p-8 border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-white/15 transition-all duration-500">
                {/* Glow on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br from-${card.color}-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}-600/10 rounded-full blur-2xl`} />
                <h3 className={`text-xl font-bold mb-4 text-${card.color}-400 flex items-center gap-2`}>
                  <motion.span 
                    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {card.icon}
                  </motion.span> {card.title}
                </h3>
                <p className="text-white/60 leading-relaxed whitespace-pre-wrap text-sm">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* My Role */}
          {project.myRole && (
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-8 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-700/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <motion.span 
                    animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="text-2xl inline-block"
                  >
                    ⚡
                  </motion.span>
                  <h3 className="text-2xl font-bold">
                    My Role — <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{project.myRole.title}</span>
                  </h3>
                </div>
                <p className="text-white/50 mb-8 leading-relaxed">{project.myRole.summary}</p>

                <p className="text-white/70 font-semibold mb-6 text-sm uppercase tracking-widest">What I did:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.myRole.contributions.map((item, idx) => {
                    const Icon = iconMap[item.icon] || Box;
                    return (
                      <motion.div key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/8 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group/item"
                      >
                        <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          <Icon size={14} className="text-purple-400" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-white mb-1">{item.label}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
}
