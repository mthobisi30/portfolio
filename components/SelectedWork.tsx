import { projects } from "@/lib/content";
import { ArrowRight } from "./icons";
import { PopCard, Stagger, StaggerItem } from "./motion";
import ProjectLogo from "./ProjectLogo";
import SectionHeader from "./SectionHeader";

function byId(id: string) {
  const p = projects.find((x) => x.slug === id);
  if (!p) throw new Error(`Unknown project: ${id}`);
  return p;
}

function Platforms({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((p) => (
        <span key={p} className="badge">
          {p}
        </span>
      ))}
    </div>
  );
}

function CardLink() {
  return (
    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent transition-colors group-hover:text-accent-strong">
      Read case study
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </span>
  );
}

const cardClass =
  "card-pop card-pop-hover group flex h-full flex-col p-6 sm:p-7";

export default function SelectedWork() {
  const mpia = byId("mpia");
  const elevate = byId("elevatetech");
  const redhailer = byId("redhailer");
  const erp = byId("rephina-erp");
  const gwensula = byId("gwensula");

  return (
    <section id="work" className="border-t border-border py-14 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow="Selected Work"
          title="Systems I've designed, built, and shipped."
          intro="Various projects across web, mobile, and desktop — each one a real production system or live site, built end to end. Open any card for the full case study."
        />

        <Stagger
          gap={0.09}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[1fr]"
        >
          {/* Large — MPIA flagship */}
          <StaggerItem className="h-full md:col-span-4 md:row-span-2">
            <PopCard href="#case-mpia" className={cardClass}>
              <div className="flex items-center justify-between gap-3">
                <span className="badge-accent badge">Flagship</span>
                <span className="font-mono text-xs text-muted">
                  Software Developer
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3.5">
                <ProjectLogo src={mpia.logo} name={mpia.name} size={52} />
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-[1.8rem]">
                    {mpia.name}
                  </h3>
                  <p className="text-sm font-medium text-muted">{mpia.tagline}</p>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                {mpia.summary}
              </p>
              <p className="mt-5 font-mono text-[0.8rem] leading-relaxed text-accent">
                {mpia.scale}
              </p>
              <div className="mt-5">
                <Platforms items={mpia.platforms} />
              </div>
              <CardLink />
            </PopCard>
          </StaggerItem>

          {/* Medium — ElevateTech */}
          <StaggerItem className="h-full md:col-span-2" from="down">
            <PopCard href="#case-elevatetech" className={cardClass}>
              <div className="flex items-center gap-3">
                <ProjectLogo src={elevate.logo} name={elevate.name} size={40} />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold tracking-tight">
                    {elevate.name}
                  </h3>
                  <p className="text-sm font-medium text-muted">
                    {elevate.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                PIM, supplier portal, store, and a React Native mobile app — one
                product database.
              </p>
              <div className="mt-4">
                <Platforms items={elevate.platforms.slice(0, 3)} />
              </div>
              <CardLink />
            </PopCard>
          </StaggerItem>

          {/* Medium — RedHailer */}
          <StaggerItem className="h-full md:col-span-2" from="down">
            <PopCard href="#case-redhailer" className={cardClass}>
              <div className="flex items-center gap-3">
                <ProjectLogo src={redhailer.logo} name={redhailer.name} size={40} />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold tracking-tight">
                    {redhailer.name}
                  </h3>
                  <p className="text-sm font-medium text-muted">
                    {redhailer.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Marketplace with QR job hand-off, PayStack payments, and Pusher
                real-time chat.
              </p>
              <div className="mt-4">
                <Platforms items={redhailer.platforms.slice(0, 3)} />
              </div>
              <CardLink />
            </PopCard>
          </StaggerItem>

          {/* Small — Rephina ERP */}
          <StaggerItem className="h-full md:col-span-3">
            <PopCard href="#case-rephina-erp" className={cardClass}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <ProjectLogo src={erp.logo} name={erp.name} size={40} />
                  <h3 className="truncate text-xl font-bold tracking-tight">
                    {erp.name}
                  </h3>
                </div>
                <span className="tag shrink-0">Flask · Python</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted">
                {erp.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A 70+ table operations platform — finance, CRM, projects, HR, and
                support behind one RBAC-guarded API.
              </p>
              <CardLink />
            </PopCard>
          </StaggerItem>

          {/* Small — Gwensula */}
          <StaggerItem className="h-full md:col-span-3">
            <PopCard href="#case-gwensula" className={cardClass}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight">
                  {gwensula.name}
                </h3>
                <span className="tag">Static · Vercel</span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted">
                {gwensula.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A fast, SEO-friendly business site tuned to load quickly on South
                African mobile networks.
              </p>
              <CardLink />
            </PopCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
