import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const codeLines = [
  { tokens: [{ c: 'text-pink-500', t: 'import ' }, { c: 'text-slate-300', t: '{ motion }' }, { c: 'text-pink-500', t: ' from ' }, { c: 'text-emerald-400', t: "'framer-motion'" }] },
  { tokens: [{ c: 'text-pink-500', t: 'import ' }, { c: 'text-slate-300', t: '{ useState }' }, { c: 'text-pink-500', t: ' from ' }, { c: 'text-emerald-400', t: "'react'" }] },
  { tokens: [] },
  { tokens: [{ c: 'text-slate-500', t: '// 🚀 Front-End Developer' }] },
  { tokens: [{ c: 'text-pink-500', t: 'export default function ' }, { c: 'text-blue-400', t: 'HeroSection' }, { c: 'text-yellow-300', t: '() {' }] },
  { tokens: [{ c: 'text-slate-400', t: '  ' }, { c: 'text-pink-500', t: 'const ' }, { c: 'text-blue-300', t: '[active, setActive]' }, { c: 'text-pink-500', t: ' = ' }, { c: 'text-yellow-300', t: 'useState' }, { c: 'text-slate-300', t: '(false);' }] },
  { tokens: [] },
  { tokens: [{ c: 'text-slate-400', t: '  ' }, { c: 'text-pink-500', t: 'return ' }, { c: 'text-yellow-300', t: '(' }] },
  { tokens: [{ c: 'text-slate-400', t: '    ' }, { c: 'text-blue-400', t: '<motion.div' }] },
  { tokens: [{ c: 'text-slate-400', t: '      ' }, { c: 'text-purple-400', t: 'className' }, { c: 'text-slate-300', t: '=' }, { c: 'text-emerald-400', t: '"flex flex-col gap-4"' }] },
  { tokens: [{ c: 'text-slate-400', t: '      ' }, { c: 'text-purple-400', t: 'initial' }, { c: 'text-slate-300', t: '=' }, { c: 'text-orange-300', t: '{{ opacity: 0, y: 30 }}' }] },
  { tokens: [{ c: 'text-slate-400', t: '      ' }, { c: 'text-purple-400', t: 'animate' }, { c: 'text-slate-300', t: '=' }, { c: 'text-orange-300', t: '{{ opacity: 1, y: 0 }}' }] },
  { tokens: [{ c: 'text-slate-400', t: '    ' }, { c: 'text-blue-400', t: '>' }] },
  { tokens: [{ c: 'text-slate-400', t: '      ' }, { c: 'text-blue-400', t: '<h1 ' }, { c: 'text-purple-400', t: 'className' }, { c: 'text-slate-300', t: '=' }, { c: 'text-emerald-400', t: '"text-7xl font-black"' }, { c: 'text-blue-400', t: '>' }] },
  { tokens: [{ c: 'text-slate-400', t: '      ' }, { c: 'text-slate-300', t: 'Front-End ' }, { c: 'text-blue-400', t: '<span' }, { c: 'text-purple-400', t: ' className' }, { c: 'text-slate-300', t: '=' }, { c: 'text-emerald-400', t: '"text-primary"' }, { c: 'text-blue-400', t: '>' }] },
  { tokens: [{ c: 'text-slate-400', t: '        ' }, { c: 'text-purple-300', t: 'Developer' }, { c: 'text-blue-400', t: '</span>' }] },
];

function Badge({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className={`absolute flex items-center gap-2 px-3 py-2 bg-white rounded-2xl shadow-xl border border-slate-100 text-sm font-bold text-slate-700 select-none pointer-events-none z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Computer3D() {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotY = useTransform(sx, [-0.5, 0.5], ['-10deg', '10deg']);

  const onMove = (e) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="w-full flex items-center justify-center py-4"
      style={{ perspective: '1100px' }}
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
        className="relative w-full max-w-[680px]"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-400/25 via-pink-400/15 to-blue-400/25 rounded-3xl blur-3xl scale-110 -z-10" />

        {/* Browser window */}
        <div className="w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_-10px_rgba(109,40,217,0.2)] border border-white/30 bg-[#0d1117]">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-[#161b22] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-[#0d1117] rounded-lg px-3 py-1 text-xs text-slate-500 font-mono">
              <span className="text-emerald-400">⚛</span>
              HeroSection.tsx — VSCode
            </div>
          </div>

          {/* Code body */}
          <div className="flex">
            {/* Line numbers */}
            <div className="flex flex-col pt-4 pb-4 px-3 text-slate-600 font-mono text-xs leading-6 text-right min-w-[2.5rem] select-none">
              {codeLines.map((_, i) => <span key={i}>{i + 1}</span>)}
            </div>

            {/* Code */}
            <div className="flex-1 pt-4 pb-4 pr-6 overflow-hidden font-mono text-xs leading-6">
              {codeLines.map((line, li) => (
                <motion.div
                  key={li}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * li, duration: 0.3 }}
                >
                  {line.tokens.length === 0
                    ? <span>&nbsp;</span>
                    : line.tokens.map((tok, ti) => (
                        <span key={ti} className={tok.c}>{tok.t}</span>
                      ))}
                </motion.div>
              ))}
              {/* blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1.0, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="inline-block w-2 h-4 bg-violet-400 align-middle ml-0.5"
              />
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 bg-[#6d28d9] text-white/90 text-[10px] font-sans">
            <span>⎇ feat/hero-section</span>
            <span>TypeScript · React 19 · Tailwind v4</span>
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              ● Ln 16, Col 1
            </motion.span>
          </div>
        </div>

        {/* Floating badges */}
        <Badge className="-top-4 -right-4">
          <span className="text-[#61dafb]">⚛</span> React 19
        </Badge>
        <Badge className="-bottom-4 -left-4">
          🎨 TailwindCSS v4
        </Badge>
        <Badge className="top-1/3 -right-8">
          ⚡ Framer Motion
        </Badge>
        <Badge className="top-1/2 -left-8">
          🟦 TypeScript
        </Badge>

        {/* Corner dots - subtle pulse */}
        {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.8, ease: 'easeInOut' }}
            className={`absolute ${pos} w-2 h-2 rounded-full bg-violet-400`}
          />
        ))}
      </motion.div>
    </div>
  );
}
