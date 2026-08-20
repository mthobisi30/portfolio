import { strengths } from "@/lib/content";
import { FadeIn, Stagger, StaggerItem } from "./motion";

// "What I Bring" — software-development competencies as liquid-glass cells.
export default function Strengths() {
  return (
    <section className="relative overflow-hidden section-space">
      <div className="shell relative">
        <FadeIn className="max-w-2xl">
          <span className="eyebrow">What I Bring</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">
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
          className="strength-bento mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {strengths.slice(0, 6).map((s, i) => (
            <StaggerItem key={s.title} className="h-full" from={i % 2 ? "down" : "up"}>
              <div className="liquid-glass h-full p-6 sm:p-8">
                <h3 className="text-xl text-ink">{s.title}</h3>
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
