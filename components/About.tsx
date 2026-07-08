import { about, site } from "@/lib/content";
import { FadeIn } from "./motion";
import RobotBackdrop from "./RobotBackdrop";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-14 sm:py-28"
    >
      <RobotBackdrop src="/robot-2.jpeg" side="left" />
      <div className="shell relative">
        <SectionHeader index="05" eyebrow="About" title="About Mthobisi." />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <FadeIn from="left">
            <div className="card-pop h-full p-7 sm:p-9">
              <p className="text-xl font-medium leading-relaxed tracking-tight text-ink">
                {about.lead}
              </p>
              {about.body.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="mt-5 text-base leading-relaxed text-muted"
                >
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn from="right" delay={0.1}>
            <div className="card-pop p-6 sm:p-7">
              <dl className="divide-y divide-border">
                {about.facts.map((fact) => (
                  <div
                    key={fact.k}
                    className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <dt className="font-mono text-[0.72rem] uppercase tracking-wider text-muted">
                      {fact.k}
                    </dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {fact.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <a href={site.cv} download className="btn btn-ghost mt-6 w-full">
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
