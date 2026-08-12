import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { LayoutGrid, FileText, GraduationCap } from "lucide-react"
import { NoiseButton } from "./ui/noise-button"
import avatarImg from "../assets/Avartar.jpg"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeRight = {
  hidden: { opacity: 0, x: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={sectionRef} className="py-32 overflow-hidden" id="about">
      {/* Parallax subtle glow blobs */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[0%] w-[35vw] h-[35vw] max-w-[500px] rounded-full bg-cyan-700/10 blur-[100px]" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-300 tracking-widest uppercase">
              Who I Am
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-6xl font-black mb-4 tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <SparkleIcon />
            </motion.span>
            Transforming ideas into digital experiences
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            >
              <SparkleIcon />
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-20"
        >
          {/* Left: Text Content */}
          <motion.div
            variants={fadeLeft}
            className="lg:w-3/5 text-left relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl blur-2xl -z-10" />
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
              <p className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">
                Hello, I'm
              </p>
              <h4 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Minh Tri
              </h4>

              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                I'm a third-year Software Engineering student passionate about
                Front-End Development. I enjoy creating beautiful, responsive,
                and user-friendly web applications while continuously improving
                my skills in modern web technologies. I am eager to learn, gain
                practical experience, and contribute to real-world projects.
              </p>

              <motion.a
                href="/cv.pdf"
                download="SE192434_PHAM_NGUYEN_MINH_TRI.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all"
              >
                <FileText size={16} /> Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            variants={fadeRight}
            className="lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-purple-500/30"
              />
              {/* Outer glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 to-cyan-600/30 blur-2xl"
              />
              {/* Avatar */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-[4px] border-white/20 shadow-2xl overflow-hidden relative z-10">
                <img
                  src={avatarImg}
                  alt="Minh Tri"
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-6 mt-12"
        >
          <StatCard
            icon={<LayoutGrid size={24} />}
            label="TOTAL PROJECTS"
            value="01"
            subLabel="Completed projects"
            idx={0}
          />
          <StatCard
            icon={<GraduationCap size={24} />}
            label="EDUCATION"
            value="FPTU"
            subLabel="Third-year student"
            idx={1}
          />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ icon, label, value, subLabel, idx = 0 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: idx * 0.15,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group cursor-default"
    >
      {/* Glow behind card on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/20 group-hover:to-cyan-600/20 rounded-3xl blur transition-all duration-500" />
      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col w-64 border border-white/10 group-hover:border-white/20 transition-colors">
        <div className="flex items-start justify-between mb-8">
          <div className="p-3 bg-white/10 text-purple-300 rounded-2xl group-hover:bg-purple-600/30 group-hover:text-white transition-colors">
            {icon}
          </div>
          <span className="text-4xl font-black text-white">{value}</span>
        </div>
        <div>
          <p className="text-sm font-bold tracking-widest text-white/50 uppercase">
            {label}
          </p>
          <p className="text-xs text-white/30 mt-1">{subLabel}</p>
        </div>
      </div>
    </motion.div>
  )
}

function SparkleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-purple-400"
    >
      <path
        d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
