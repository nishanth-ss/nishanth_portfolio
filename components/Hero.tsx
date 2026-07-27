import { profile } from "@/lib/data";
import { DownloadIcon, ChevronDownIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden pt-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-xl px-gutter">
        <div className="flex flex-col justify-center">
          <div className="mb-md w-fit rounded-lg bg-primary/10 px-sm py-xs">
            <span className="text-label-md font-label-md uppercase tracking-[0.2em] text-primary">
              Available for projects
            </span>
          </div>

          <h1 className="mb-md max-w-3xl bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text font-display text-display-lg-mobile leading-[1.1] text-transparent sm:text-display-xl">
            {profile.headline}
          </h1>

          <p className="mb-xl max-w-[36rem] font-body text-body-lg text-on-surface-variant">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-md">
            <a
              href="#projects"
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary px-xl py-md text-label-md font-label-md text-on-primary transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(192,193,255,0.5)]"
            >
              View Projects
            </a>
            <a
              href={profile.resumeHref}
              download
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-xl py-md text-label-md font-label-md text-on-surface backdrop-blur-md transition-all hover:bg-white/10"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-on-surface-variant opacity-60 transition-opacity hover:opacity-100"
      >
        <ChevronDownIcon className="h-8 w-8" />
      </a>
    </section>
  );
}
