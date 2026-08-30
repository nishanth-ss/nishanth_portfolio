export const profile = {
  name: "Nishanth Sekar",
  role: "Full Stack Developer",
  initials: "NS",
  location: "Tamil Nadu, India",
  email: "nishanthsekar1@gmail.com",
  phone: "+91 89408 91631",
  phoneHref: "+918940891631",
  linkedin: "https://www.linkedin.com/in/nishanth-sekar-2b48082b7/",
  resumeHref: "/resume.pdf",
  summary:
    "Full Stack Developer with around 3 years of experience building scalable web and mobile applications using React.js, Node.js, React Native, MongoDB, JavaScript, HTML, and CSS. Experienced in developing responsive UIs, REST APIs, and implementing Unit Testing and Playwright E2E Testing to ensure application quality. Passionate about writing clean, maintainable code and delivering high-performance solutions in agile environments.",
  tagline:
    "Building fast, responsive web & mobile products with React, Node.js and a lot of attention to detail.",
  headline: "Crafting Digital Excellence",
  narrative:
    "I care about the details that make software feel solid: fast interfaces, clean state management, and APIs that hold up under real usage. Over the last 3 years I've moved between e-commerce, HR platforms, and security-critical access systems — building the frontend, wiring up the backend, and testing everything in between so it ships with confidence.",
};

export type SkillGroup = {
  category: string;
  icon: "layers" | "api" | "database" | "cloud" | "testing" | "state" | "tools";
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "layers",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    category: "Backend & APIs",
    icon: "api",
    items: ["Node.js", "REST APIs", "Socket.IO"],
  },
  {
    category: "Database",
    icon: "database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Cloud & Deployment",
    icon: "cloud",
    items: ["AWS (S3)", "Vercel", "Render"],
  },
  {
    category: "Testing",
    icon: "testing",
    items: ["Unit Testing", "Vitest", "React Testing Library", "Playwright E2E"],
  },
  {
    category: "State Management",
    icon: "state",
    items: ["Redux Toolkit", "Redux"],
  },
  {
    category: "Tools",
    icon: "tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  icon: "cart" | "megaphone" | "shield";
};

export const projects: Project[] = [
  {
    name: "Microgreens E-commerce Platform",
    description:
      "A full product catalog, cart, and checkout experience with Razorpay payment gateway integration for secure online transactions.",
    tags: ["React.js", "Razorpay", "REST APIs"],
    icon: "cart",
  },
  {
    name: "Social Media Management Platform",
    description:
      "Centralized post, comment, and engagement management across Google, Facebook, Instagram, YouTube, and LinkedIn, with AI-assisted reply workflows.",
    tags: ["Socket.IO", "Node.js", "REST APIs"],
    icon: "megaphone",
  },
  {
    name: "AI Virtual Agents & Access Control Systems",
    description:
      "Prompt-trained virtual agents with real-time chat for customer engagement, alongside face- and palm-recognition access control interfaces built for schools and correctional facilities.",
    tags: ["TypeScript", "Socket.IO", "JWT Authentication"],
    icon: "shield",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  tech: string[];
  points: string[];
};

export const experience: Job[] = [
  {
    company: "AG Soft Solutions",
    role: "Full Stack Developer",
    period: "Sep 2025 — Present",
    tech: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "REST APIs",
      "JWT Authentication",
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "MUI",
      "React Testing Library",
    ],
    points: [
      "Developed and maintained the AG Soft Solutions corporate website using React.js, implementing fully responsive and cross-browser compatible user interfaces.",
      "Built a microgreens e-commerce platform with product catalog, cart, checkout workflows, and Razorpay payment gateway integration for secure online transactions.",
      "Contributed to School Management and Inmate Management applications across web and React Native platforms, focusing on financial transparency, user management, and operational workflows.",
      "Implemented face recognition-based authentication mechanisms to enhance user verification and security across mobile and web applications.",
      "Integrated Razorpay payment solutions for fee collection, payment tracking, and transaction management within educational and institutional management systems.",
      "Developed access control and verification interfaces for a palm recognition-based door access system, enabling time-based entry permissions, user authentication, and real-time access monitoring for schools and correctional facilities.",
    ],
  },
  {
    company: "Astria Digital Pvt Ltd",
    role: "React JS Developer",
    period: "Aug 2024 — Sep 2025",
    tech: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Socket.IO",
      "REST APIs",
      "JWT Authentication",
      "AWS S3",
      "Multer",
      "Chart.js / Recharts",
      "Tailwind CSS",
      "MUI",
    ],
    points: [
      "Developed role-based access control (RBAC) interfaces for Admin, HR, and Candidate portals, enabling secure access management and personalized user experiences.",
      "Built resume and profile image upload features with AWS S3 integration, implementing file upload workflows and seamless document management through REST APIs.",
      "Implemented AI-assisted reply workflows with manual override capabilities and created interactive analytics dashboards with charts for social media performance tracking.",
      "Integrated JWT-based authentication and authorization flows, including login, session management, and protected route handling across web applications.",
      "Built AI-powered customer engagement features including prompt-trained virtual agents, real-time chat using Socket.IO, voice-to-voice and text-to-text communication interfaces, and intelligent customer support workflows.",
      "Developed a social media management platform integrating Google, Facebook, Instagram, YouTube, and LinkedIn APIs, enabling centralized post, comment, and engagement management.",
    ],
  },
  {
    company: "Apyrn Labs Pvt Ltd",
    role: "React JS Developer",
    period: "Mar 2023 — Mar 2024",
    tech: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Socket.IO",
      "REST APIs",
      "Tailwind CSS",
      "MUI",
    ],
    points: [
      "Developed and maintained key e-commerce frontend features using React.js, improving user experience and application performance.",
      "Built inventory management interfaces with real-time stock visibility and low-stock alert indicators to help users monitor product availability.",
      "Implemented invoice and billing screens, enabling customers to view, download, and manage order invoices efficiently.",
      "Integrated EMI payment options into the checkout flow, providing flexible payment methods and enhancing the purchasing experience.",
      "Consumed REST APIs and managed application state to ensure seamless data synchronization across inventory, orders, and payment modules.",
      "Created reusable React components and responsive user interfaces using modern JavaScript, improving code maintainability and scalability.",
      "Collaborated with backend developers and QA teams to deliver high-quality e-commerce features and ensure smooth production releases.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Mechanical Engineering",
    school: "Adhiyamaan College of Engineering, Hosur (Anna University)",
    period: "2015 — 2019",
  },
  {
    degree: "Higher Secondary Education",
    school: "TMHNU Matric Hr Sec School, Theni, Tamil Nadu",
    period: "2013 — 2015",
  },
];

export const courses = [
  {
    name: "Frontend Developer",
    school: "Accord Infomatrix, Chennai",
    period: "2022 — 2023",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
