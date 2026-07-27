import { education, courses } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-white/5 bg-surface-container-lowest/50 py-2xl"
    >
      <div className="mx-auto max-w-[1280px] px-gutter">
        <Reveal as="div" className="mb-2xl text-center">
          <h2 className="font-display text-headline-md text-on-surface">
            Education &amp; Courses
          </h2>
          <div className="mt-sm text-label-md font-label-md uppercase text-primary">
            Where It Started
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-xl sm:grid-cols-2">
          <Reveal>
            <h3 className="mb-lg text-label-md font-label-md uppercase text-on-surface-variant">
              Education
            </h3>
            <div className="space-y-lg">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/5 bg-surface-container-low/40 p-lg backdrop-blur-md"
                >
                  <p className="font-semibold text-on-surface">{item.degree}</p>
                  <p className="mt-1 font-body text-body-md text-on-surface-variant">
                    {item.school}
                  </p>
                  <p className="mt-2 text-label-md font-label-md text-primary">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-lg text-label-md font-label-md uppercase text-on-surface-variant">
              Courses
            </h3>
            <div className="space-y-lg">
              {courses.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/5 bg-surface-container-low/40 p-lg backdrop-blur-md"
                >
                  <p className="font-semibold text-on-surface">{item.name}</p>
                  <p className="mt-1 font-body text-body-md text-on-surface-variant">
                    {item.school}
                  </p>
                  <p className="mt-2 text-label-md font-label-md text-primary">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
