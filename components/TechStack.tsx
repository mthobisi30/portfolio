import { techStack } from "@/lib/content";
import { FadeIn } from "./motion";
import { TechIcon } from "./techIcons";

const get = (name: string) => techStack.find((group) => group.group === name)?.items ?? [];

const zones = [
  {
    title: "Product surfaces",
    note: "Web, mobile, and desktop interfaces",
    items: [...get("Frontend").slice(0, 6), ...get("Mobile").slice(0, 5)],
    className: "stack-zone-surfaces",
  },
  {
    title: "Application core",
    note: "Services, APIs, and business logic",
    items: get("Backend").slice(0, 8),
    className: "stack-zone-core",
  },
  {
    title: "Data",
    note: "Models, migrations, and performance",
    items: get("Databases").slice(0, 7),
    className: "stack-zone-data",
  },
  {
    title: "Trust",
    note: "Identity, access, and auditability",
    items: get("Security"),
    className: "stack-zone-trust",
  },
  {
    title: "Production",
    note: "Delivery, hosting, and operations",
    items: get("DevOps & Cloud").slice(0, 8),
    className: "stack-zone-production",
  },
  {
    title: "Delivery craft",
    note: "Testing, workflow, and documentation",
    items: [
      ...get("Testing & QA"),
      ...get("Workflow Automation").slice(0, 3),
      ...get("Practices").slice(0, 4),
    ],
    className: "stack-zone-craft",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section-space">
      <div className="shell">
        <FadeIn>
          <div className="stack-heading grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Working stack</p>
              <h2 className="mt-5 text-4xl sm:text-6xl">A system, not a shopping list.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted lg:justify-self-end">
              Technologies chosen for the responsibility they carry—from the first interaction to the data, trust boundary, and production environment beneath it.
            </p>
          </div>
        </FadeIn>

        <div className="stack-map liquid-glass mt-14 overflow-hidden rounded-[2.5rem] p-3 sm:p-4">
          <div className="stack-map-grid">
            <FadeIn className="stack-hub">
              <div className="stack-hub-inner">
                <span className="stack-orbit" aria-hidden />
                <p className="detail-label">Full-stack ownership</p>
                <p className="mt-5 font-serif text-3xl leading-tight text-warm sm:text-4xl">
                  Interface to infrastructure.
                </p>
                <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                  The useful part is how the layers work together—and how well they hold up after release.
                </p>
              </div>
            </FadeIn>

            {zones.map((zone, index) => (
                <FadeIn key={zone.title} delay={index * 0.045} className={`stack-zone ${zone.className}`}>
                  <div className="stack-zone-inner">
                    <h3 className="text-xl">{zone.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-faint">{zone.note}</p>
                    <div className="stack-tools mt-5">
                      {zone.items.map((item) => (
                        <span key={item} className="stack-tool">
                          <TechIcon name={item} size={14} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
