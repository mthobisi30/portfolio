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
      className="relative overflow-hidden section-space"
    >
      <div className="shell relative">
        <div className="contact-sheet liquid-glass grid gap-12 rounded-[2.75rem] p-7 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-14">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-5 text-5xl sm:text-7xl">Let’s make something useful.</h2>
            <FadeIn>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                If you are building a serious product, modernising an internal
                workflow, or hiring an engineer who can own more than one layer,
                tell me what needs to work and who it needs to work for.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-accent-strong" />
                {site.location}
                <span className="mx-1 h-1 w-1 rounded-full bg-border-strong" />
                Remote-friendly across South Africa
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
                      className="contact-channel liquid-glass group flex h-full items-center gap-4 rounded-[1.25rem] p-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-[#081005]">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="detail-label block">
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
