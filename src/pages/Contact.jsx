import { motion } from 'framer-motion';
import { Mail, Phone, GitBranch, ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

function ContactCard({ icon: Icon, label, value, href, color, delay }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-3xl p-8 flex flex-col gap-5 cursor-pointer overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${color}20, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{ background: `${color}20`, border: `1.5px solid ${color}40` }}
      >
        <Icon size={26} style={{ color }} />
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1">
        <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-1">{label}</p>
        <p className="text-lg font-bold text-white break-all leading-tight">{value}</p>
      </div>

      {/* Action row */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
        <span className="text-sm font-semibold text-white/30 group-hover:text-white/70 transition-colors">
          {href.startsWith('http') ? 'Visit →' : 'Open →'}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/40 hover:text-white transition-all"
        >
          {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const navigate = useNavigate();

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'phamnguyenminhtri3@gmail.com',
      href: 'mailto:phamnguyenminhtri3@gmail.com',
      color: '#a78bfa',
      delay: 0.2,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '0901 816 982',
      href: 'tel:0901816982',
      color: '#38bdf8',
      delay: 0.35,
    },
    {
      icon: ExternalLink,
      label: 'GitHub',
      value: 'github.com/CherryMT',
      href: 'https://github.com/CherryMT',
      color: '#c084fc',
      delay: 0.5,
    },
  ];

  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex flex-col">
      {/* Back button */}
      <div className="w-full px-6 pt-8 flex justify-start max-w-6xl mx-auto z-20 relative">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/40 hover:text-white font-semibold transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </motion.button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 z-20 relative">
        <div className="w-full max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-bold tracking-wide uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Get In Touch
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Let's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Connect
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
              I'm currently open to{' '}
              <strong className="text-white/80">internship</strong> and{' '}
              <strong className="text-white/80">collaboration</strong>{' '}
              opportunities. Don't hesitate to reach out!
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contacts.map((c, i) => (
              <ContactCard key={i} {...c} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-white/30 text-sm mb-4">Or just say hi 👋</p>
            <motion.a
              href="mailto:phamnguyenminhtri3@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              <Mail size={22} />
              Send me an email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
