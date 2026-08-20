import { hero, site } from "@/lib/content";
import { ArrowDown, Github, Linkedin, Mail } from "./icons";
import InteractivePortrait from "./InteractivePortrait";
import { FadeIn } from "./motion";

const buildSteps = [
  "Requirements",
  "Architecture",
  "Data",
  "API",
  "Interface",
  "Security",
  "Deploy",
  "Support",
];

export default function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="shell relative">
        <FadeIn immediate>
          <div className="hero-command mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            <span>
              <span className="text-accent">~/portfolio</span> $ whoami
            </span>
            <span>Durban · South Africa</span>
            <span className="inline-flex items-center gap-2 text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--color-accent)]" />
              Open to strong opportunities
            </span>
          </div>
        </FadeIn>

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <FadeIn immediate from="left" delay={0.08} className="order-2 lg:order-1">
            <InteractivePortrait />
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn immediate delay={0.1}>
              <p className="font-mono text-sm font-medium text-accent">
                Hello — I&apos;m
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.16}>
              <h1 className="reference-name mt-3 text-[3.25rem] font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[5.7rem]">
                Mthobisi
                <br />
                <span>Nxumalo</span>
              </h1>
            </FadeIn>

            <FadeIn immediate delay={0.22}>
              <p className="mt-5 text-xl font-semibold text-ink sm:text-2xl">
                Software Engineer · Full Stack Developer
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {hero.support} I specialise in connected business systems where
                interfaces, APIs, databases, permissions, and infrastructure
                must work as one product.
              </p>
              <p className="mt-5 font-serif text-lg italic text-faint">
                Useful software. Clear architecture. Ownership after launch.
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn btn-primary">
                  Explore projects
                  <ArrowDown size={15} />
                </a>
                <a href={site.cv} download className="btn btn-ghost">
                  Download CV
                </a>
                <div className="social-dock flex items-center">
                  {[
                    { href: site.github, label: "GitHub", Icon: Github },
                    { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
                    { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === "Email" ? undefined : "_blank"}
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="social-link grid h-11 w-11 place-items-center border-y border-r border-border text-muted transition-colors first:border-l hover:bg-surface-alt hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn immediate delay={0.34}>
          <div className="capability-register mt-16 grid overflow-hidden rounded-2xl border border-border bg-surface/70 sm:grid-cols-3">
            {[
              ["01 / Product surfaces", "Next.js · React · Flutter · Tauri"],
              ["02 / Application core", "Node.js · PostgreSQL · APIs · RBAC"],
              ["03 / Production", "Docker · Coolify · CI/CD · Support"],
            ].map(([label, value]) => (
              <div key={label} className="p-5 sm:border-l sm:p-6 first:sm:border-l-0">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-accent">{label}</p>
                <p className="mt-2 text-sm font-medium text-ink">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="build-loop marquee-mask mt-7 overflow-hidden">
          <div className="marquee-track gap-8 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-faint">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex gap-8 pr-8">
                {buildSteps.map((step, index) => (
                  <span key={step} className="flex items-center gap-8 whitespace-nowrap">
                    <span>{step}</span>
                    <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
