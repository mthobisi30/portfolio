import { techStack } from "@/lib/content";
import { PopCard, Stagger, StaggerItem } from "./motion";
import SectionHeader from "./SectionHeader";
import { TechIcon } from "./techIcons";

// Asymmetric bento of liquid-glass cards.
const spans: Record<string, string> = {
  Frontend: "md:col-span-3",
  Backend: "md:col-span-3",
  Mobile: "md:col-span-2",
  Databases: "md:col-span-2",
  Security: "md:col-span-2",
  "DevOps & Cloud": "md:col-span-3",
  "Automation & AI": "md:col-span-3",
  "Testing & QA": "md:col-span-2",
  Practices: "md:col-span-4",
};

const tagClass =
  "tag inline-flex items-center gap-1.5 transition-colors duration-200 hover:border-accent/50 hover:text-ink";

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-border py-20 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Tech Stack"
          title="Tools I actually use."
          intro="Organised by layer rather than listed in a cloud. These are the technologies behind the projects above — not an aspirational wishlist."
        />

        <Stagger
          gap={0.05}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        >
          {techStack.map((group) => (
            <StaggerItem
              key={group.group}
              className={`h-full ${spans[group.group] ?? "md:col-span-2"}`}
            >
              <PopCard
                lift={-4}
                className="card-pop card-pop-hover flex h-full flex-col p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <h3 className="text-base font-bold tracking-tight">
                    {group.group}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={tagClass}>
                      <TechIcon
                        name={item}
                        size={14}
                        className="shrink-0 text-accent"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </PopCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
