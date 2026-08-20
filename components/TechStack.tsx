import { techStack } from "@/lib/content";
import { Stagger, StaggerItem } from "./motion";
import SectionHeader from "./SectionHeader";
import { TechIcon } from "./techIcons";

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-border py-14 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="04"
          eyebrow="Working stack"
          title="Tools organised by responsibility."
          intro="The stack only matters in context. These are the technologies I use to shape interfaces, application logic, data, security, delivery, and support."
        />

        <Stagger
          gap={0.045}
          className="stack-register mt-12 border-t border-border"
        >
          {techStack.map((group, index) => (
            <StaggerItem key={group.group}>
              <div className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_12rem_1fr] sm:items-start">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-sm text-muted"
                    >
                      <TechIcon
                        name={item}
                        size={14}
                        className="shrink-0 text-accent"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
