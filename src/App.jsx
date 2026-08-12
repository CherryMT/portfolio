import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import { NeonBackground } from './components/ui/neon-background';
import './index.css';

function Home() {
  return (
    <main className="min-h-screen bg-bg-light text-slate-800 selection:bg-primary selection:text-white overflow-hidden font-sans relative">
      {/* Global floating background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/30 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-300/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-blue-300/20 blur-[120px]" />
      </div>

      <Hero />
      <NeonBackground>
        <About />
        <Projects />
      </NeonBackground>

      <footer className="relative bg-black border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-24 bg-purple-700/10 blur-[60px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Name/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-xs font-black">MT</span>
            </div>
            <span className="text-white/60 text-sm font-medium">Minh Tri · Front-End Developer</span>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors text-xs font-medium hover:underline underline-offset-4">
              GitHub
            </a>
            <span className="text-white/10">|</span>
            <a href="#about"
              className="text-white/30 hover:text-white transition-colors text-xs font-medium hover:underline underline-offset-4">
              About
            </a>
            <span className="text-white/10">|</span>
            <a href="#portfolio"
              className="text-white/30 hover:text-white transition-colors text-xs font-medium hover:underline underline-offset-4">
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
