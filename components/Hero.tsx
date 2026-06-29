import Image from "next/image";
import { hero, site } from "@/lib/content";
import { ArrowDown, Github, Linkedin, Mail } from "./icons";
import { FadeIn } from "./motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28"
    >
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — identity */}
          <div className="max-w-2xl">
            <FadeIn immediate>
              <span className="status-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Available for work
              </span>
            </FadeIn>

            <FadeIn immediate delay={0.08}>
              <h1 className="mt-6 text-[2.9rem] font-bold leading-[1.01] tracking-tight sm:text-6xl lg:text-[4.6rem]">
                Mthobisi
                <br />
                <span className="text-gradient">Nxumalo</span>
              </h1>
            </FadeIn>

            <FadeIn immediate delay={0.16}>
              <p className="mt-5 font-mono text-base font-medium text-accent sm:text-lg">
                {site.role}
                <span className="ml-0.5 inline-block text-accent">_</span>
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.24}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {hero.support}
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.32}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={site.cv} download className="btn btn-primary">
                  Download CV
                </a>
                <a href="#work" className="btn btn-ghost">
                  View Projects
                  <ArrowDown size={15} />
                </a>
                <span className="mx-1 hidden h-6 w-px bg-border sm:block" />
                <div className="flex items-center gap-1">
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
                      aria-label={`${label}`}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-raise/40 text-muted backdrop-blur transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — robot in a liquid-glass showcase */}
          <FadeIn immediate from="right" delay={0.2}>
            <div className="relative ml-auto w-full max-w-md">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[2rem] opacity-80 blur-3xl"
                style={{
                  background:
                    "radial-gradient(55% 55% at 60% 35%, rgba(61,123,255,0.4), transparent 70%)",
                }}
              />
              <div className="glow-ring glass relative w-full overflow-hidden rounded-[1.6rem] p-2.5">
                <div className="relative aspect-square w-full overflow-hidden rounded-[1.2rem]">
                  <Image
                    src="/mthobisi.jpeg"
                    alt="Mthobisi Nxumalo — Full Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-[center_25%]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, transparent 40%, rgba(4,6,15,0.55))",
                    }}
                  />
                </div>
              </div>

              {/* floating glass chip */}
              <div className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-ink">
                  Durban · South Africa
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
