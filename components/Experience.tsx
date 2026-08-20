import { experience } from "@/lib/content";
import { Stagger, StaggerItem } from "./motion";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-14 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Responsibility has grown with every role."
          intro="Today I own a manufacturer's application estate while continuing selected founder-led work through Rephina Software."
        />

        <Stagger gap={0.07} className="mt-12 border-t border-border">
          {experience.map((job, index) => (
            <StaggerItem key={`${job.company}-${job.role}`}>
              <article className="experience-record grid gap-5 border-b border-border py-8 lg:grid-cols-[3.5rem_13rem_1fr] lg:gap-8">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                    {job.period}
                  </p>
                  {job.current ? (
                    <span className="mt-3 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent">
                      <span className="h-1.5 w-1.5 bg-accent" />
                      Current
                    </span>
                  ) : null}
                </div>

                <div className="grid gap-5 xl:grid-cols-[15rem_1fr] xl:gap-10">
                  <header>
                    <h3 className="text-xl font-bold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {job.role}
                    </p>
                    {job.location ? (
                      <p className="mt-2 text-xs text-muted">{job.location}</p>
                    ) : null}
                  </header>
                  <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-[0.48rem] h-px w-3 shrink-0 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
