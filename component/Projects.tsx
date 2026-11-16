import Reveal from "./Reveal";

type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  featured?: boolean;
};

type Company = {
  name: string;
  role: string;
  period: string;
  projects: Project[];
};

const companies: Company[] = [
  {
    name: "APYRN Labs Pvt. Ltd.",
    role: "React JS Developer",
    period: "Mar 2023 – Mar 2024",
    projects: [
      {
        title: "Organization Management Application",
        category: "Web Application",
        description:
          "Developed an organization-focused application with reusable React components, responsive interfaces, and API integrations to support organizational workflows.",
        technologies: [
          "React.js",
          "TypeScript",
          "JavaScript",
          "Redux",
          "REST APIs",
          "Tailwind CSS",
        ],
      },
      {
        title: "Inventory Management System",
        category: "Web Application",
        description:
          "Built inventory management features using React and TypeScript, including real-time stock visibility, low-stock alerts, invoice management, billing screens, and EMI payment integration.",
        technologies: [
          "React.js",
          "TypeScript",
          "Material UI",
          "Zod",
          "Redux",
          "REST APIs",
        ],
        featured: true,
      },
    ],
  },
  {
    name: "AG Soft Solutions",
    role: "Full Stack Developer",
    period: "Aug 2024 – Sep 2025",
    projects: [
      {
        title: "Corporate Website & Job Portal",
        category: "Web Development",
        description:
          "Developed responsive corporate website interfaces and job portal features to provide an accessible experience for organizations and job seekers.",
        technologies: [
          "React.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "REST APIs",
        ],
      },
      {
        title: "Social Media Management Platform",
        category: "AI-Powered Platform",
        description:
          "Built a centralized social media management platform integrating Google, Facebook, Instagram, YouTube, and LinkedIn. Users can manage posts, comments, and engagement from one application, with AI-assisted replies and manual reply options.",
        technologies: [
          "React.js",
          "TypeScript",
          "Node.js",
          "Socket.IO",
          "REST APIs",
          "AI Integration",
        ],
        featured: true,
      },
      {
        title: "WiFi Control Application",
        category: "Web Application",
        description:
          "Worked on a WiFi control application, developing user interfaces and API integrations for managing WiFi-related operations.",
        technologies: [
          "React.js",
          "TypeScript",
          "REST APIs",
          "Material UI",
        ],
      },
    ],
  },
  {
    name: "ASTRIA Digital Pvt. Ltd.",
    role: "React JS Developer",
    period: "Jan 2026 – Present",
    projects: [
      {
        title: "School & Inmate Management System",
        category: "Management Platform",
        description:
          "Contributed to school and inmate management applications, developing user management, operational workflows, financial tracking, and role-based access control for different user types.",
        technologies: [
          "React.js",
          "TypeScript",
          "React Native",
          "Node.js",
          "JWT",
          "REST APIs",
        ],
        featured: true,
      },
      {
        title: "Palm Recognition Access Control",
        category: "Security & Access Control",
        description:
          "Developed interfaces for a hand-based recognition access system, enabling authorized users to access designated doors in schools and correctional facilities through palm recognition, with time-based permissions and access monitoring.",
        technologies: [
          "React.js",
          "React Native",
          "TypeScript",
          "REST APIs",
          "RBAC",
        ],
      },
      {
        title: "Microgreens E-commerce Platform",
        category: "E-commerce",
        description:
          "Developed an online microgreens shopping experience with product listings, product details, shopping cart, checkout workflows, and Razorpay payment gateway integration.",
        technologies: [
          "React.js",
          "TypeScript",
          "Node.js",
          "Razorpay",
          "REST APIs",
          "Tailwind CSS",
        ],
      },
    ],
  },
];

const personalProjects: Project[] = [
  {
    title: "Multi-Tenant Project Management System",
    category: "Personal Project",
    description:
      "Developed a multi-tenant workplace management system where multiple organizations can create independent workspaces. Implemented tenant-level data isolation and role-based access for Admins, Managers, and Employees. Admins manage organizations, Managers assign and review tasks, and Employees update task progress.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
    ],
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-sm shadow-primary/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 md:p-7">

      {/* Top accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />

      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary">
          {project.category}
        </span>

        {project.featured && (
          <span className="text-xs font-semibold text-secondary">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-secondary">
        {project.title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-foreground/70">
        {project.description}
      </p>

      <div className="my-6 h-px w-full bg-primary/10" />

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-primary/10 bg-primary/[0.04] px-2.5 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-secondary/30 hover:bg-secondary/10 hover:text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden border-y border-secondary/10 bg-primary/[0.035] py-20 md:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-12 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-24 h-96 w-96 rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            My Work
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Projects & Experience
          </h2>

          <p className="mt-5 text-base leading-8 text-foreground/70">
            A collection of applications and digital solutions
            I've contributed to throughout my professional journey,
            along with projects I've built independently.
          </p>
        </div>

        {/* Company Projects */}
        <div className="space-y-16">
          {companies.map((company, index) => (
            <Reveal key={company.name}>

              {/* Company Header */}
              <div className="mb-7 flex flex-col justify-between gap-3 border-l-2 border-secondary pl-5 sm:flex-row sm:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    Company 0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-primary md:text-2xl">
                    {company.name}
                  </h3>

                  <p className="mt-1 text-sm text-foreground/60">
                    {company.role}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-secondary/20 bg-white/80 px-4 py-2 text-xs font-medium text-foreground/70 shadow-sm shadow-primary/5">
                  {company.period}
                </span>
              </div>

              {/* Project Cards */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {company.projects.map((project) => (
                  <Reveal key={project.title} delay={company.projects.indexOf(project) * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Personal Projects */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Beyond Professional Work
            </span>

            <h3 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
              Personal Projects
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70">
              Projects built independently to explore new technologies,
              solve real-world problems, and strengthen my development skills.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {personalProjects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

