import inteliPathImg from '../assets/Intelipath.png';

export const projectsData = [
  {
    id: 'intelipath',
    title: 'InteliPath',
    role: 'Frontend Developer',
    teamSize: 4,
    desc: 'Intelligent career guidance platform helping students build personalized learning and career roadmaps powered by AI. Includes interactive node graphs and real-time AI mentor chat.',
    img: inteliPathImg,
    demoLink: 'https://intelipath.online/',
    githubLink: 'https://github.com/InteliRoadMap',
    techStacks: {
      frontend: {
        repo: 'intelipath-frontend',
        layers: [
          { layer: 'Language', choices: 'TypeScript' },
          { layer: 'Framework', choices: 'React 19, Vite' },
          { layer: 'Styling', choices: 'Tailwind CSS, Radix UI, class-variance-authority' },
          { layer: 'State & data', choices: 'Redux Toolkit, Axios, jwt-decode' },
          { layer: 'Roadmap graph', choices: 'React Flow with dagre layout' },
          { layer: 'Motion', choices: 'GSAP, Framer Motion' },
          { layer: 'Icons', choices: 'Lucide, Phosphor, Devicon' }
        ]
      },
      backend: {
        repo: 'intelipath-backend',
        layers: [
          { layer: 'Language & runtime', choices: 'Java 21' },
          { layer: 'Framework', choices: 'Spring Boot 3.5, Spring MVC, Spring Data JPA, Hibernate' },
          { layer: 'Security', choices: 'Spring Security, JWT, OAuth2 authorization-code (GitHub, Google), AES-256-GCM at rest, per-user rate limiting' },
          { layer: 'Data', choices: 'PostgreSQL 16, pgvector, Flyway migrations' },
          { layer: 'AI', choices: 'Spring AI, OpenAI API, RAG over pgvector, LLM tool calling, MCP client' },
          { layer: 'Build & run', choices: 'Maven, Docker, Linux VPS' },
          { layer: 'Testing', choices: 'JUnit' }
        ]
      }
    },
    theProblem: 'A first-year and a final-year student open the same Java roadmap and see the same 71 items. Nothing in it knows what the reader has already built, and nothing in it knows what the market is hiring for this month.',
    whatItDoes: "It builds the path from one person's own evidence - GitHub repositories they actually committed to, declared skills, and a quiz generated from those same skills - then holds the result against job postings that are open right now.\n\nThe system verifies authorship against the repository's contributor list before a repo counts. A fork with no commits does not count.",
    myRole: {
      title: 'Front-End Developer',
      summary: 'I was responsible for building the entire user interface from scratch, including UI design, component development, and API integration.',
      contributions: [
        { icon: 'globe', label: 'Onboarding & Landing Page', desc: 'Spearheaded the development of the user onboarding flow and landing page, implementing complex and engaging UI animations using GSAP and Framer Motion' },
        { icon: 'users', label: 'Counselor Dashboard', desc: 'Designed and built the Counselor Dashboard, providing a comprehensive interface for counselors to manage student profiles, monitor progress, and submit feedback' },
        { icon: 'lock', label: 'Authentication', desc: 'Implemented full auth flow: Login, Register, Forgot/Reset Password, Google OAuth2, JWT + role-based route guards (React Router v7)' },
        { icon: 'layers', label: 'State & API', desc: 'Set up Redux Toolkit for global state management, integrated Axios interceptors for auth token handling & error management' },
        { icon: 'monitor', label: 'Responsive Design', desc: 'Designed the entire application to be fully responsive using TailwindCSS v4' }
      ]
    },
    features: [
      { name: 'AI Mentor Chat', desc: 'AI chatbot that guides students in career planning in real time', icon: 'bot' },
      { name: 'Interactive Roadmap', desc: 'Personalized learning roadmap rendered as an interactive DAG graph', icon: 'map' },
      { name: 'Market Pulse', desc: 'Real-time analysis of IT job market trends', icon: 'chart' },
      { name: 'Multi-Role System', desc: '4 roles: Admin, Mentor, Counselor, Student - each with a dedicated dashboard', icon: 'users' },
      { name: 'Auth System', desc: 'Email/Password + Google OAuth2 + JWT + role-based route guards', icon: 'lock' },
      { name: 'Public Portfolio', desc: 'Mentors and students can share their profile publicly', icon: 'folder' },
      { name: 'Feedback System', desc: 'Mentors and Counselors can give feedback on student progress', icon: 'mail' },
      { name: 'Export Data', desc: 'Export data to Excel/CSV', icon: 'download' },
      { name: 'RAG-based AI', desc: 'Spring AI + pgvector - AI answers based on a specific knowledge base', icon: 'book' },
      { name: 'Docker Ready', desc: 'Containerized deployment with Docker Compose', icon: 'box' }
    ]
  }
];