<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=250&section=header&text=My%20Developer%20Portfolio%20🌌&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Interactive%203D%20Experiences%20•%20Fluid%20Animations%20•%20Modern%20UI&descAlignY=60&descSize=18" width="100%" />

  ### A modern, animated, and responsive developer portfolio built from scratch.

  <p align="center">
    <a href="https://portfolio-ivory-six-20.vercel.app" target="_blank">
      <img src="https://img.shields.io/badge/View%20Live%20Demo-6E40C9?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
    <img src="https://img.shields.io/badge/Vite_8-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E"/>
    <img src="https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white"/>
    <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white"/>
  </p>
</div>

---

## ✨ Overview

Welcome to my personal developer portfolio! This project is a testament to my passion for front-end development, specifically focusing on creating **premium visual experiences**, **fluid micro-interactions**, and **high-performance architectures**. 

The site features a custom **"Dark Space Neon"** aesthetic, heavily utilizing glassmorphism, animated gradient borders, and parallax scrolling, entirely built without reliance on pre-made UI component libraries.

---

## 🎨 Design Aesthetics & UX

<table>
  <tr>
    <td width="50%">
      <h3 align="center">🌌 Dark Space Neon Theme</h3>
      <p>A pure black background (<code>#030303</code>) contrasted with vibrant neon radial glows (purple, cyan, pink) that illuminate the user's path as they scroll through the experience.</p>
    </td>
    <td width="50%">
      <h3 align="center">💎 Glassmorphism Cards</h3>
      <p>Content is housed within translucent, frosted-glass containers (<code>bg-white/5</code> + <code>backdrop-blur</code>), creating depth and a premium feel without overwhelming the dark theme.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🌈 Animated Gradient Borders</h3>
      <p>Custom CSS keyframes (<code>@keyframes gradientShift</code>) drive cycling gradient border rings on stat cards and buttons, shifting seamlessly from purple to blue to white.</p>
    </td>
    <td width="50%">
      <h3 align="center">🎞️ Fluid Motion</h3>
      <p>Heavy utilization of <b>Framer Motion</b> for scroll-triggered bidirectional entrance animations, interactive hover scaling, and immersive background parallax effects.</p>
    </td>
  </tr>
</table>

---

## 🌟 Key Features

- **Hero Section:** Full-screen landing featuring an interactive 3D computer model (React Three Fiber), a subtle animated aurora background, and a dynamic typewriter text effect.
- **Projects Showcase:** An elegant card grid displaying project previews. Each card routes to a dynamic, deeply detailed project page.
- **Dynamic Project Details:** Per-project pages (e.g., `/project/:id`) that include:
  - 🖥️ Animated browser-frame screenshot showcases.
  - 🔄 FE / BE tech stack tab switchers.
  - 📊 Animated stat cards (Tech Layers, Key Features, Team Size).
  - 📝 Comprehensive breakdowns of "The Problem", "What it Does", and "My Role".
- **Responsive Architecture:** A mobile-first approach ensuring the UI scales flawlessly across all device sizes while maintaining complex animations.
- **Client-Side Routing:** Smooth SPA navigation powered by React Router v7 with automated scroll-to-top behaviors.

---

## 🛠️ Comprehensive Tech Stack

<details open>
<summary><b>Click to expand technologies</b></summary>
<br/>

| Domain | Technologies Used |
|---|---|
| **Core** | JavaScript (JSX), HTML5, CSS3 |
| **Framework** | React 19 (Hooks, Functional Components) |
| **Build & Tooling** | Vite 8, ESLint |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 13, Native CSS Keyframes |
| **Routing** | React Router DOM v7 |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Typography & Icons** | Lucide React, react-type-animation |
| **Utilities** | clsx, tailwind-merge |

</details>

---

## 📁 Project Architecture

```text
my-portfolio/
├── public/                 # Static assets, PDFs, favicons
├── src/
│   ├── assets/             # Image resources
│   ├── components/         # Reusable structural components
│   │   ├── ui/             # Design primitives (Aurora, NoiseButton, etc.)
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # Personal introduction
│   │   ├── Projects.jsx    # Projects grid
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Contact.jsx     # Contact links/form
│   │   └── Computer3D.jsx  # Three.js canvas wrapper
│   ├── data/
│   │   └── projectsData.js # Centralized content schema (Single Source of Truth)
│   ├── pages/
│   │   └── ProjectDetails.jsx # Dynamic route page component
│   ├── lib/
│   │   └── utils.js        # Helper functions (e.g., tailwind merge wrapper)
│   ├── App.jsx             # Router definition & Root layout
│   ├── main.jsx            # React mounting point
│   └── index.css           # Global styles and custom keyframes
├── package.json
└── vite.config.js
```

---

## 🤖 AI-Assisted Development

This portfolio represents a modern development workflow, built in close collaboration with **Google Antigravity AI (Gemini)** acting as an AI pair programmer. 

**AI Contributions:**
- Structuring component architecture and React Router implementation.
- Formulating complex Framer Motion logic (`useScroll`, `useTransform`, stagger children).
- Implementing reusable aesthetic patterns (e.g., the cycling gradient border technique).
- Designing the data schema for dynamic content injection (`projectsData.js`).
- Rapid iterative UI refinement and real-time debugging.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Execution

```bash
# 1. Clone the repository
git clone https://github.com/CherryMT/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

```bash
# 5. Build for production
npm run build
```

---

## 📫 Connect With Me

<div align="center">
  <a href="https://portfolio-ivory-six-20.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-6E40C9?style=for-the-badge&logo=About.me&logoColor=white"/>
  </a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=phamnguyenminhtri3@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email_Me-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>
</div>
