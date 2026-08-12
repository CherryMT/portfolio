import { motion } from 'framer-motion';

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React 19", "TypeScript", "Vite", "TailwindCSS v4", "Redux Toolkit"]
    },
    {
      name: "UI / Animation",
      skills: ["Framer Motion", "GSAP", "Radix UI", "Lucide Icons", "Phosphor Icons"]
    },
    {
      name: "Data & Charts",
      skills: ["Recharts", "React Flow (XY Flow)", "PapaParse", "XLSX"]
    },
    {
      name: "Routing & State",
      skills: ["React Router v7", "Redux Toolkit", "Axios"]
    },
    {
      name: "Tooling",
      skills: ["Git", "Figma", "ESLint", "Vite"]
    }
  ];

  return (
    <section className="py-32 bg-slate-50/50 relative overflow-hidden" id="tech-stack">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">Tech Stack</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center items-start gap-6 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 min-w-[300px] flex-1 max-w-md"
            >
              <h3 className="text-lg font-bold text-primary mb-6">{cat.name}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-full text-slate-700 shadow-sm hover:border-primary/40 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
