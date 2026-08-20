import { rephina, site } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import { FadeIn } from "./motion";

// Compact gateway — clarifies the personal-vs-agency split without turning
// the portfolio into an agency homepage.
export default function RephinaGateway() {
  return (
    <section className="section-space pt-0">
      <div className="shell">
        <FadeIn>
          <div className="rephina-panel liquid-glass relative overflow-hidden rounded-[2.5rem]">
            <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow">Rephina Software</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  Hiring me vs. commissioning a project.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {rephina.blurb}
                </p>
                <p className="mt-6 text-sm leading-7 text-faint">{rephina.offerings.join(" · ")}</p>
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
                  className="text-link justify-center py-3"
                >
                  Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
