# 🚀 My Portfolio Website

<div align="center">

**A modern, animated, and responsive developer portfolio built with React + Vite**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## ✨ Overview

This is my personal developer portfolio website showcasing my projects, skills, and experience as a **Front-End Developer**. The site features a premium "Dark Space Neon" aesthetic with glassmorphism cards, neon glows, and fluid animations — all built from scratch without any UI component library.

The portfolio was designed and implemented with the assistance of **Google Antigravity AI** (Gemini), which helped with component architecture, animation logic, layout design decisions, and iterative UI refinements throughout the development process.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Language** | JavaScript (JSX) |
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion 13 |
| **Routing** | React Router DOM v7 |
| **3D Graphics** | Three.js + React Three Fiber + Drei |
| **Icons** | Lucide React |
| **Typewriter Effect** | react-type-animation |
| **Utilities** | clsx, tailwind-merge |

---

## 🎨 Design System

- **Theme:** Dark Space Neon — pure black background (`#030303`) with vibrant neon radial glows
- **Cards:** Glassmorphism (`bg-white/5` + `backdrop-blur`)
- **Borders:** Animated gradient rings (purple → blue → white) cycling with CSS keyframes
- **Typography:** System font stack with bold gradient text headings
- **Animations:**
  - Scroll-triggered bidirectional entrance animations (Framer Motion)
  - Parallax background movement on scroll
  - Typewriter effect for hero subtitle
  - Sparkle/pulse animations on decorative icons
  - Shimmer hover sweep on interactive cards

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   └── (static assets, PDFs)
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Design system primitives (NoiseButton, Aurora, etc.)
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Computer3D.jsx
│   ├── data/
│   │   └── projectsData.js   # Centralized project content
│   ├── pages/
│   │   └── ProjectDetails.jsx  # Dynamic project detail page
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx           # Root with React Router routes
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🌟 Key Features

- **Hero Section** — Full-screen landing with 3D computer model (Three.js), animated aurora background, and typewriter text effect
- **About Me** — Animated gradient text with sparkle icons and personal introduction
- **Projects** — Card grid with project previews; each card links to a dedicated detail page
- **Project Detail Pages** — Per-project pages with:
  - Animated browser-frame screenshot showcase
  - FE / BE tech stack tab switcher
  - Key Features pill grid
  - Animated stat cards (Tech Layers, Key Features, Team Size) with gradient border rings
  - The Problem & What it Does sections
  - My Role & Contributions breakdown
- **Skills** — Categorized skill display
- **Contact** — Contact form / links section
- **Routing** — SPA routing with React Router (`/`, `/project/:id`)

---

## 🤖 AI-Assisted Development

This portfolio was built in close collaboration with **Google Antigravity AI (Gemini)**, acting as an AI pair programmer. The AI contributed to:

- Component architecture and file structure planning
- Animation design using Framer Motion (`scroll`, `whileInView`, `useTransform`)
- Layout decisions for the Project Detail page (sticky right column, parallax hero)
- Gradient border animation technique reused across stat cards and buttons
- Data schema design for `projectsData.js`
- Debugging build errors (UTF-8 encoding, asset resolution in Vite)
- Iterative UI refinements based on screenshot feedback

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---



<div align="center">

Made with ❤️ and a lot of ☕ — powered by **React**, **Framer Motion**, and **Google Antigravity AI**

</div>
