import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Mail, LayoutGrid } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Computer3D from "./Computer3D"
import { AuroraBackground } from "./ui/aurora-background"
import { NoiseButton } from "./ui/noise-button"
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const navigate = useNavigate()

  const scrollToProjects = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <AuroraBackground className="min-h-screen pt-24 pb-12 px-6 items-center justify-center">
      <div className="container mx-auto max-w-7xl w-full z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Text & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 flex flex-col items-start text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight"
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #e2e8f0 0%, #8b5cf6 33%, #ec4899 66%, #e2e8f0 100%)",
                  backgroundSize: "200% auto"
                }}
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Welcome to <br />
                my Portfolio <br />
                <span className="text-white">Website</span>
              </motion.span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold text-white mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Crafting Digital Experiences',
                  2000,
                  'Building Innovative UIs',
                  2000,
                  'Developing Modern Web Apps',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl"
            >
              A passionate Front-End Developer focused on building innovative,
              functional, and user-friendly web applications. Eager to learn,
              grow, and deliver impactful digital solutions.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              {["React", "Javascript", "TypeScript", "Tailwind"].map(
                (tech, idx) => (
                  <motion.div
                    key={tech}
                    custom={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + idx * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
                    <div className="relative flex items-center justify-center px-6 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/10">
                      <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        {tech}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <NoiseButton onClick={scrollToProjects}>
                Projects <ArrowRight size={16} />
              </NoiseButton>
              <NoiseButton onClick={() => navigate("/contact")}>
                Contact <Mail size={16} />
              </NoiseButton>
            </motion.div>
          </motion.div>

          {/* Right Column: Graphic/Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="lg:w-1/2 w-full relative"
          >
            {/* Glowing background behind graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-400/20 rounded-full blur-[80px] -z-10" />

            <Computer3D />
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  )
}
