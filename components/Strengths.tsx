import { strengths } from "@/lib/content";
import { FadeIn, PopCard, Stagger, StaggerItem } from "./motion";
import RobotBackdrop from "./RobotBackdrop";

// "What I Bring" — software-development competencies as liquid-glass cells.
export default function Strengths() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-24">
      <RobotBackdrop src="/robot-3.jpeg" side="right" />
      <div className="shell relative">
        <FadeIn className="max-w-2xl">
          <span className="eyebrow">What I Bring</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Hands-on across the whole stack.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            From interface to database to deployment, here are the areas I work
            in day to day — and the practices that keep what I ship correct,
            secure, and maintainable.
          </p>
        </FadeIn>

        <Stagger
          gap={0.06}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {strengths.map((s, i) => (
            <StaggerItem key={s.title} className="h-full" from={i % 2 ? "down" : "up"}>
              <PopCard lift={-4} className="card-pop card-pop-hover h-full p-5">
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
              </PopCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
