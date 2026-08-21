import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft, ArrowUpRight, GitBranch, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';
import { useState } from 'react';

// Reusable contact row component for a clean, professional list
function ContactRow({ label, value, href, icon: Icon, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors"
    >
      <div className="flex items-center gap-6">
        <div className="text-white/40 group-hover:text-purple-400 transition-colors">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-white/40 uppercase mb-1">{label}</p>
          <p className="text-xl md:text-2xl font-medium text-white/90 group-hover:text-white transition-colors">{value}</p>
        </div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: isHovered ? 0 : -30, y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="text-white/60"
        >
          <ArrowUpRight size={28} strokeWidth={1.5} />
        </motion.div>
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
      delay: 0.2,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+84 901 816 982',
      href: 'tel:0901816982',
      delay: 0.3,
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/CherryMT',
      href: 'https://github.com/CherryMT',
      delay: 0.4,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      href: 'https://maps.google.com/?q=Ho+Chi+Minh+City',
      delay: 0.5,
    }
  ];

  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex flex-col bg-[#050505]">
      {/* Navbar / Back button */}
      <div className="w-full px-6 pt-10 flex justify-start max-w-[1400px] mx-auto z-20 relative">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-white/50 hover:text-white transition-colors uppercase"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>
      </div>

      {/* Main content - 2 Column Professional Layout */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 md:py-24 z-20 relative w-full max-w-[1400px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-20">
          
          {/* Left Column: Typography & Intent */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between h-full min-h-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px w-8 bg-white/20" />
                <span className="text-sm font-semibold tracking-[0.2em] text-white/40 uppercase">Contact</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tight mb-8">
                Let's start a <br/>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">conversation.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light max-w-lg">
                Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-full max-w-lg ml-auto border-t border-white/10">
              {contacts.map((c, i) => (
                <ContactRow key={i} {...c} />
              ))}
            </div>

            {/* Direct CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="w-full max-w-lg ml-auto mt-12"
            >
              <a
                href="mailto:phamnguyenminhtri3@gmail.com"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-white text-black px-8 py-5 font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Send a direct message
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
