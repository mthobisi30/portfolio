import { about, site } from "@/lib/content";
import { FadeIn } from "./motion";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-14 sm:py-28"
    >
      <div className="shell relative">
        <SectionHeader
          index="05"
          eyebrow="Working philosophy"
          title="Built close to the real problem."
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <FadeIn from="left">
            <div className="about-statement h-full border-l-4 border-accent py-2 pl-6 sm:pl-9">
              <p className="font-serif text-2xl leading-relaxed tracking-tight text-ink sm:text-3xl">
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
            <div className="border-y border-border py-1">
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
