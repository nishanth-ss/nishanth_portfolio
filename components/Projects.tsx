import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import { ArrowRightLongIcon, CartIcon, MegaphoneIcon, ShieldIcon } from "./icons";

const iconMap: Record<Project["icon"], React.ComponentType<{ className?: string }>> = {
  cart: CartIcon,
  megaphone: MegaphoneIcon,
  shield: ShieldIcon,
};

// Literal class sets per accent — Tailwind's scanner can't resolve
// dynamically-interpolated `bg-${accent}` strings, so each accent's
// full set is spelled out (same pattern as Skills.tsx).
const accentStyles = [
  {
    iconWrap: "bg-primary/20",
    icon: "text-primary",
    chip: "border-primary/20 bg-primary/10 text-primary",
    hover: "hover:border-primary/20",
  },
  {
    iconWrap: "bg-tertiary/20",
    icon: "text-tertiary",
    chip: "border-tertiary/20 bg-tertiary/10 text-tertiary",
    hover: "hover:border-tertiary/20",
  },
  {
    iconWrap: "bg-secondary/20",
    icon: "text-secondary",
    chip: "border-secondary/20 bg-secondary/10 text-secondary",
    hover: "hover:border-secondary/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-gutter py-2xl">
      <Reveal
        as="div"
        className="mb-2xl flex flex-col items-end justify-between gap-md md:flex-row"
      >
        <div>
          <span className="mb-md block text-label-md font-label-md uppercase text-primary">
            Selected Work
          </span>
          <h2 className="max-w-[36rem] font-display text-headline-md text-on-surface">
            Building interfaces that define the next generation of web
            applications.
          </h2>
        </div>
        <a
          href="#contact"
          className="flex items-center gap-sm text-label-md font-label-md text-primary hover:underline"
        >
          Let&apos;s talk
          <ArrowRightLongIcon className="h-4 w-4" />
        </a>
      </Reveal>

      <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = iconMap[project.icon];
          const accent = accentStyles[i % accentStyles.length];
          return (
            <Reveal key={project.name} delay={i * 100} className="h-full">
              <div
                className={`group flex h-full flex-col rounded-2xl border border-white/5 bg-surface-container-low/40 p-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${accent.hover}`}
              >
                <div
                  className={`mb-lg flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${accent.iconWrap}`}
                >
                  <Icon className={`h-6 w-6 ${accent.icon}`} />
                </div>

                <h3 className="mb-sm font-display text-headline-sm text-on-surface">
                  {project.name}
                </h3>

                <p className="mb-lg font-body text-body-md leading-relaxed text-on-surface-variant">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-sm">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-lg border px-sm py-1 text-label-md ${accent.chip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
