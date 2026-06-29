import { rephina, site } from "@/lib/content";
import { ArrowUpRight, Mail } from "./icons";
import { FadeIn } from "./motion";

// Compact gateway — clarifies the personal-vs-agency split without turning
// the portfolio into an agency homepage.
export default function RephinaGateway() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="shell">
        <FadeIn>
          <div className="card-pop relative overflow-hidden">
            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">Rephina Software</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  Hiring me vs. commissioning a project.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {rephina.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {rephina.offerings.map((o) => (
                    <span key={o} className="tag">
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:border-l lg:border-border lg:pl-10">
                <a
                  href={site.rephina}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-primary w-full"
                >
                  Visit Rephina Software
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={`mailto:${site.email}?subject=Project%20enquiry`}
                  className="btn btn-ghost w-full"
                >
                  Discuss a Project
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="btn btn-ghost w-full"
                >
                  <Mail size={15} />
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
