import { projects, type Project } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import { FadeIn } from "./motion";
import ProjectGallery from "./ProjectGallery";
import ProjectPreview from "./ProjectPreview";
import SectionHeader from "./SectionHeader";

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 sm:grid-cols-[7rem_1fr]">
      <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
      {items.map((f) => (
        <li key={f} className="flex gap-2.5 text-sm leading-snug text-ink">
          <span
            aria-hidden
            className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
          />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  const previewOrder = flip ? "lg:order-2" : "lg:order-1";
  const contentOrder = flip ? "lg:order-1" : "lg:order-2";

  return (
    <article
      id={`case-${project.slug}`}
      className="card-pop scroll-mt-24 overflow-hidden p-6 sm:p-8 lg:p-10"
    >
      {/* Header */}
      <FadeIn>
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-accent-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-border-strong" />
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {project.tagline}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:justify-end">
            {project.roleBadges.map((b) => (
              <span key={b} className="badge-accent badge">
                {b}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Body — asymmetric split */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        {/* Preview */}
        <FadeIn from={flip ? "right" : "left"} className={previewOrder}>
          <div className="relative">
            {project.images?.length ? (
              <ProjectGallery images={project.images} name={project.name} />
            ) : (
              <div className="aspect-[4/3] w-full">
                <ProjectPreview slug={project.slug} />
              </div>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {project.platforms.map((p) => (
                <span key={p} className="badge">
                  {p}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="link-accent mt-4 text-sm"
              >
                {project.link.label}
                <ArrowUpRight size={14} />
              </a>
            ) : null}
          </div>
        </FadeIn>

        {/* Narrative + metadata */}
        <FadeIn from={flip ? "left" : "right"} className={contentOrder}>
          <p className="text-base leading-relaxed text-ink">{project.summary}</p>

          <dl className="mt-6 divide-y divide-border border-y border-border">
            <MetaRow label="Role">{project.role}</MetaRow>
            <MetaRow label="Problem">{project.problem}</MetaRow>
            {project.scale ? (
              <MetaRow label="Scale">
                <span className="font-mono text-[0.82rem] text-accent">
                  {project.scale}
                </span>
              </MetaRow>
            ) : null}
            <MetaRow label="Outcome">{project.outcome}</MetaRow>
          </dl>

          {project.surfaces ? (
            <div className="mt-7">
              <h4 className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
                {`The ${project.surfaces.length} surfaces`}
              </h4>
              <ol className="mt-3 space-y-2">
                {project.surfaces.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-ink">
                    <span className="font-mono text-xs text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="mt-7">
            <h4 className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
              Key features
            </h4>
            <div className="mt-3">
              <FeatureList items={project.features} />
            </div>
          </div>

          <div className="mt-7">
            <h4 className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
              Architecture
            </h4>
            <ul className="mt-3 space-y-2">
              {project.architecture.map((a) => (
                <li key={a} className="flex gap-2.5 text-sm text-ink">
                  <span
                    aria-hidden
                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/60"
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <h4 className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
              Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}

export default function ProjectCaseStudies() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-border py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeader
          index="02"
          eyebrow="Case Studies"
          title="The work in detail."
          intro="What each system does, the problem it solved, how it's built, and what shipped. Starting with the most complex."
        />

        <div className="mt-12 space-y-6 lg:space-y-8">
          {projects.map((project, i) => (
            <CaseStudy key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
