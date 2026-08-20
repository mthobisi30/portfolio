import { experience } from "@/lib/content";
import { ArrowRight } from "./icons";
import { FadeIn, Stagger, StaggerItem } from "./motion";

export default function Experience() {
  const featured = experience.slice(0, 3);

  return (
    <section id="experience" className="section-space">
      <div className="shell">
        <FadeIn>
          <div className="experience-heading grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 className="mt-5 text-4xl sm:text-6xl">Responsibility, carried forward.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted lg:justify-self-end">
              Full-stack ownership in manufacturing, paired with founder-led delivery of industrial systems through Rephina Software.
            </p>
          </div>
        </FadeIn>

        <Stagger gap={0.07} className="experience-bento mt-14 grid gap-4 lg:grid-cols-12">
          {featured.map((job, index) => (
            <StaggerItem
              key={`${job.company}-${job.role}`}
              className={index === 0 ? "experience-lead lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <article className="experience-cell liquid-glass h-full p-6 sm:p-8">
                <header>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="detail-label">{job.period}</p>
                    {job.current ? (
                      <span className="current-role">
                        <span aria-hidden /> Current role
                      </span>
                    ) : null}
                  </div>
                  <h3 className={`mt-6 ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    {job.company}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent-strong">{job.role}</p>
                  {job.location ? <p className="mt-2 text-xs text-faint">{job.location}</p> : null}
                </header>

                <ul className={`mt-7 grid gap-4 ${index === 0 ? "sm:grid-cols-2 sm:gap-x-8" : ""}`}>
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {index === featured.length - 1 ? (
                  <a href="/cv/Mthobisi-Nxumalo-CV.pdf" download className="text-link mt-7 inline-flex">
                    Earlier roles in the full CV <ArrowRight size={14} />
                  </a>
                ) : null}
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
