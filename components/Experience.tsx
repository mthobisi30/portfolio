import { experience } from "@/lib/content";
import { PopCard, Stagger, StaggerItem } from "./motion";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-14 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Where the work has happened."
          intro="Current focus is full ownership of a manufacturer's software, alongside contracted and founder-led projects through Rephina Software."
        />

        <Stagger gap={0.08} className="mt-12 space-y-5">
          {experience.map((job) => (
            <StaggerItem
              key={job.company}
              className="grid gap-3 lg:grid-cols-[180px_1fr] lg:gap-8"
            >
              {/* Left meta column */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:pt-2">
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
                {job.current ? (
                  <span className="badge-accent badge inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                ) : null}
              </div>

              {/* Right popout card */}
              <PopCard
                lift={-4}
                className="card-pop card-pop-hover p-6 sm:p-7"
              >
                <div
                  style={
                    job.current
                      ? {
                          borderLeftColor: "var(--color-accent)",
                          borderLeftWidth: "3px",
                          paddingLeft: "1rem",
                          marginLeft: "-0.25rem",
                        }
                      : undefined
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.company}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent-strong">
                    {job.role}
                    {job.location ? (
                      <span className="text-muted"> · {job.location}</span>
                    ) : null}
                  </p>
                  <ul className="mt-3.5 grid gap-2 sm:grid-cols-2 sm:gap-x-6">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-border-strong"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PopCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
