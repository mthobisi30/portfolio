import { about, site } from "@/lib/content";
import Image from "next/image";
import { FadeIn } from "./motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-space"
    >
      <div className="shell relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <FadeIn from="left">
            <figure className="liquid-glass relative aspect-[4/5] overflow-hidden rounded-[2.5rem] p-2">
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <Image src="/photos/mthobisi-coast.webp" alt="Mthobisi Nxumalo outdoors in Durban" fill sizes="(max-width: 1024px) 100vw, 38vw" className="object-cover object-[center_38%]" />
              </div>
            </figure>
          </FadeIn>

          <FadeIn from="right" delay={0.1}>
            <div className="about-statement h-full">
              <p className="eyebrow">Working philosophy</p>
              <h2 className="mt-5 text-4xl sm:text-6xl">Built close to the real problem.</h2>
              <p className="mt-8 font-serif text-2xl leading-relaxed tracking-tight text-ink sm:text-3xl">
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
            <div className="mt-9 border-y border-border py-1">
              <dl className="divide-y divide-border">
                {about.facts.map((fact) => (
                  <div
                    key={fact.k}
                    className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <dt className="detail-label">
                      {fact.k}
                    </dt>
                    <dd className="text-right text-sm font-medium text-ink">
                      {fact.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <a href={site.cv} download className="text-link mt-6 inline-flex">
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
