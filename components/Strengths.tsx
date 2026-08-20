import { strengths } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "./motion";

// "What I Bring" — software-development competencies as liquid-glass cells.
export default function Strengths() {
  return (
    <section className="relative overflow-hidden border-t border-border py-14 sm:py-24">
      <div className="shell relative">
        <FadeIn className="max-w-2xl">
          <span className="eyebrow">What I Bring</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One product. Every layer accounted for.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            I connect product surfaces to the application core, data model,
            trust boundaries, and production environment that keeps the whole
            system useful.
          </p>
        </FadeIn>

        <Stagger
          gap={0.06}
          className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {strengths.map((s, i) => (
            <StaggerItem key={s.title} className="h-full" from={i % 2 ? "down" : "up"}>
              <div className="h-full border-b border-r border-border p-5 sm:p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
