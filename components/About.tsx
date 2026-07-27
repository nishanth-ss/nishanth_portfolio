import { profile } from "@/lib/data";
import Reveal from "./Reveal";

const stats = [
  { label: "Years experience", value: "3+", color: "text-primary" },
  { label: "Companies", value: "3", color: "text-secondary" },
  { label: "Core stack", value: "React / Node", color: "text-tertiary" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-gutter py-2xl"
    >
      <Reveal className="max-w-3xl">
        <span className="mb-md block text-label-md font-label-md uppercase text-primary">
          The Narrative
        </span>
        <h2 className="mb-lg font-display text-headline-md text-on-surface">
          Engineering with Purpose &amp; Precision
        </h2>
        <p className="mb-xl max-w-prose font-body text-body-lg leading-relaxed text-on-surface-variant">
          {profile.narrative}
        </p>
        <div className="grid grid-cols-1 gap-lg sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-surface-container-low/40 p-lg backdrop-blur-md"
            >
              <div className={`mb-xs font-display text-display-lg ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-label-md font-label-md text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
