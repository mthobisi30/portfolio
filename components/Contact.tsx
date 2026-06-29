import { site } from "@/lib/content";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "./icons";
import { FadeIn, PopCard, Stagger, StaggerItem } from "./motion";
import RobotBackdrop from "./RobotBackdrop";
import SectionHeader from "./SectionHeader";

// Direct contact, no generic form. Clear primary actions + the real channels.
const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    icon: Phone,
    external: false,
  },
  {
    label: "GitHub",
    value: site.githubLabel,
    href: site.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-20 sm:py-28"
    >
      <RobotBackdrop src="/robot.jpg" side="right" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeader
              index="06"
              eyebrow="Contact"
              title="Let's talk about the work."
            />
            <FadeIn>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Open to all opportunities — full-time roles, freelance, and
                contract software projects. The fastest way to reach me is
                email; I reply to specifics.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-accent-strong" />
                {site.location}
                <span className="mx-1 h-1 w-1 rounded-full bg-border-strong" />
                Open to opportunities
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn btn-primary">
                  <Mail size={15} />
                  Email Me
                </a>
                <a href={site.cv} download className="btn btn-ghost">
                  <Download size={15} />
                  Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          <div>
            <Stagger gap={0.07} className="grid gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <StaggerItem key={c.label} className="h-full">
                    <PopCard
                      href={c.href}
                      lift={-4}
                      className="card-pop card-pop-hover group flex h-full items-center gap-4 p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-raise/60 text-accent transition-colors group-hover:border-accent/40 group-hover:text-accent-strong">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                          {c.label}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1 truncate text-sm font-medium text-ink">
                          {c.value}
                          {c.external ? (
                            <ArrowUpRight
                              size={13}
                              className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
                            />
                          ) : null}
                        </span>
                      </span>
                    </PopCard>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <FadeIn delay={0.15}>
              <a
                href={site.portfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="link-accent mt-4 text-sm"
              >
                Current site: {site.portfolioLabel}
                <ArrowUpRight size={14} />
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
