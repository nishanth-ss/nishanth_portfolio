import { skills, type SkillGroup } from "@/lib/data";
import Reveal from "./Reveal";
import {
  LayersIcon,
  ApiIcon,
  DatabaseIcon,
  CloudUploadIcon,
  RuleIcon,
  SettingsIcon,
} from "./icons";

const iconMap: Record<SkillGroup["icon"], React.ComponentType<{ className?: string }>> = {
  layers: LayersIcon,
  api: ApiIcon,
  database: DatabaseIcon,
  cloud: CloudUploadIcon,
  testing: RuleIcon,
  state: SettingsIcon,
  tools: SettingsIcon,
};

// Tailwind's scanner needs literal class strings — no dynamic
// `bg-${accent}` interpolation — so each accent's full class set
// is spelled out here instead of built at runtime.
const accentStyles = [
  {
    card: "hover:bg-primary/5",
    iconWrap: "bg-primary/20",
    icon: "text-primary",
    chip: "border-primary/20 bg-primary/10 text-primary",
  },
  {
    card: "hover:bg-secondary/5",
    iconWrap: "bg-secondary/20",
    icon: "text-secondary",
    chip: "border-secondary/20 bg-secondary/10 text-secondary",
  },
  {
    card: "hover:bg-tertiary/5",
    iconWrap: "bg-tertiary/20",
    icon: "text-tertiary",
    chip: "border-tertiary/20 bg-tertiary/10 text-tertiary",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-surface-container-lowest/50 py-2xl"
    >
      <div className="mx-auto max-w-[1280px] px-gutter">
        <Reveal as="div" className="mb-2xl text-center">
          <h2 className="mb-md font-display text-headline-md text-on-surface">
            Technical Toolbox
          </h2>
          <div className="mb-md text-label-md font-label-md uppercase text-primary">
            Skills &amp; Technologies
          </div>
          <p className="mx-auto mb-lg max-w-[36rem] font-body text-body-md text-on-surface-variant">
            Technologies and tools I use to design, build, test, and ship
            high-performance digital products.
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </Reveal>

        <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon];
            const accent = accentStyles[i % accentStyles.length];
            return (
              <Reveal key={group.category} delay={i * 80}>
                <div
                  className={`group h-full transform rounded-2xl border border-white/5 bg-surface-container-low/40 p-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${accent.card}`}
                >
                  <div
                    className={`mb-lg flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${accent.iconWrap}`}
                  >
                    <Icon className={`h-6 w-6 ${accent.icon}`} />
                  </div>
                  <h3 className="mb-md font-display text-headline-sm text-on-surface">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-lg border px-sm py-1 text-label-md ${accent.chip}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
