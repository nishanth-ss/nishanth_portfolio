
import {
  Code2,
  Server,
  Database,
  Cloud,
  FlaskConical,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing scalable server-side applications and APIs.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT Authentication",
    ],
  },
  {
    title: "Database & ORM",
    description: "Managing structured and unstructured application data.",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "SQL", "Prisma ORM"],
  },
  {
    title: "Cloud & Deployment",
    description: "Managing file storage and application deployments.",
    icon: Cloud,
    skills: ["AWS S3", "Vercel", "Render"],
  },
  {
    title: "Testing",
    description: "Writing reliable and maintainable application tests.",
    icon: FlaskConical,
    skills: [
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Unit Testing",
      "E2E Testing",
    ],
  },
  {
    title: "Tools & State Management",
    description: "Development tools and application state management.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Redux",
      "Redux Toolkit",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 bg-primary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            What I Work With
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            My Technical Skills
          </h2>

          <p className="mt-5 text-base leading-8 text-foreground/70">
            Technologies and tools I use to build modern,
            scalable, and user-friendly web and mobile applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                className="group rounded-2xl border border-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
                delay={skillGroups.indexOf(group) * 75}
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Category */}
                <h3 className="text-lg font-bold text-primary">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-foreground/60">
                  {group.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-primary/10 bg-background px-3 py-2 text-xs font-medium text-foreground/80 transition-all duration-200 hover:border-secondary/40 hover:bg-secondary/10 hover:text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-7 h-1 w-10 rounded-full bg-secondary/50 transition-all duration-300 group-hover:w-full" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
