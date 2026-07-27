import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1280px] px-gutter py-2xl"
    >
      <div
        aria-hidden
        className="absolute bottom-2xl left-gutter top-2xl hidden w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-30 md:left-1/2 md:block"
      />

      <Reveal as="div" className="mb-2xl text-center">
        <h2 className="font-display text-headline-md text-on-surface">
          Experience
        </h2>
        <div className="mt-sm text-label-md font-label-md uppercase text-primary">
          Where I&apos;ve Worked
        </div>
      </Reveal>

      <div className="space-y-2xl">
        {experience.map((job, i) => {
          const dotColor = ["bg-primary", "bg-secondary", "bg-tertiary"][i % 3];
          const dateColor = ["text-primary", "text-secondary", "text-tertiary"][
            i % 3
          ];
          const borderHover = [
            "hover:border-primary/20",
            "hover:border-secondary/20",
            "hover:border-tertiary/20",
          ][i % 3];
          const tagStyle = [
            "border-primary/20 bg-primary/10 text-primary",
            "border-secondary/20 bg-secondary/10 text-secondary",
            "border-tertiary/20 bg-tertiary/10 text-tertiary",
          ][i % 3];

          return (
            <Reveal key={job.company} delay={i * 100}>
              <div className="relative grid grid-cols-1 items-start gap-lg md:grid-cols-12">
                <div className="pt-sm md:col-span-3 md:text-right">
                  <span className={`mb-xs block text-label-md font-label-md ${dateColor}`}>
                    {job.period}
                  </span>
                  <div className="font-bold text-body-md text-on-surface">
                    {job.company}
                  </div>
                </div>

                <div className="relative hidden h-full justify-center md:col-span-1 md:flex">
                  <div
                    className={`mt-2 h-4 w-4 rounded-full ${dotColor} z-10 shadow-[0_0_15px_rgba(192,193,255,0.5)]`}
                  />
                </div>

                <div className="md:col-span-8">
                  <div
                    className={`group rounded-2xl border border-white/5 bg-surface-container-low/40 p-lg backdrop-blur-md transition-all ${borderHover}`}
                  >
                    <h3 className="mb-md font-display text-headline-sm text-on-surface">
                      {job.role}
                    </h3>
                    <div className="mb-lg flex flex-wrap gap-xs">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase ${tagStyle}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="max-w-prose space-y-sm">
                      {job.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-sm font-body text-body-md leading-relaxed text-on-surface-variant"
                        >
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-on-surface-variant" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
