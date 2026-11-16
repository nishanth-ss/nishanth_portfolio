import Reveal from "./Reveal";

const technologies = [
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "AWS S3",
  "Redux",
  "Tailwind CSS",
];

const stats = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "Full Stack",
    label: "Development",
  },
  {
    value: "Web & Mobile",
    label: "Application Development",
  },
  {
    value: "End-to-End",
    label: "Product Development",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 bg-primary/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal className="mb-12">
          <span className="mb-4 inline-block text-sm md:text-lg font-semibold uppercase tracking-[0.2em] text-secondary">
            A little about me
          </span>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Building digital experiences that make a difference.
          </h2>
        </Reveal>

        {/* About Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Introduction */}
          <Reveal className="flex flex-col justify-between">
            <div>
              <p className="text-lg leading-8 text-foreground/80 md:text-xl">
                I'm{" "}
                <span className="font-semibold text-primary">
                  Nishanth Sekar
                </span>
                , a Full Stack Developer passionate about building
                scalable applications, intuitive interfaces, and
                meaningful digital products.
              </p>

              <p className="mt-6 leading-8 text-foreground/70">
                I enjoy transforming ideas into real-world applications
                using modern frontend and backend technologies.
                From crafting responsive user interfaces to developing
                robust APIs and integrating third-party services,
                I focus on creating seamless and reliable digital
                experiences.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="mt-12">
              <h3 className="mb-5 text-xl font-bold text-primary">
                Core Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                className="group flex min-h-[170px] flex-col justify-center rounded-2xl border border-primary/10 bg-primary/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5"
                delay={index * 90}
              >
                <span className="text-3xl font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-secondary md:text-4xl">
                  {stat.value}
                </span>

                <span className="mt-3 text-sm font-medium leading-relaxed text-foreground/60">
                  {stat.label}
                </span>

                <div className="mt-5 h-1 w-10 rounded-full bg-secondary transition-all duration-300 group-hover:w-20" />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

