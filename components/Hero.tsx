import { hero, site } from "@/lib/content";
import { ArrowDown, Github, Linkedin, Mail } from "./icons";
import InteractivePortrait from "./InteractivePortrait";
import { FadeIn } from "./motion";

export default function Hero() {
  return (
    <section id="top" className="hero-section relative flex min-h-[94svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-20">
          <div>
            <FadeIn immediate delay={0.12}>
              <h1 className="hero-name text-[clamp(4rem,10vw,8.5rem)] leading-[0.78] tracking-[-0.07em]">
                Mthobisi
                <br />
                Nxumalo
              </h1>
            </FadeIn>

            <FadeIn immediate delay={0.19}>
              <p className="mt-8 text-lg font-medium text-ink sm:text-xl">
                Software Engineer · Full Stack Developer
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {hero.support}
              </p>
              <p className="mt-6 font-serif text-xl italic text-warm sm:text-2xl">
                {hero.detail}
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.26}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
                <a href="#work" className="btn btn-primary">
                  Explore work
                  <ArrowDown size={15} />
                </a>
                <a href={site.cv} download className="text-link">
                  Download CV
                </a>
                <div className="social-dock ml-1 flex items-center gap-2">
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
                      className="liquid-glass social-link grid h-11 w-11 place-items-center rounded-full text-muted hover:text-ink"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn immediate from="right" delay={0.14}>
            <InteractivePortrait />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
