import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border-strong bg-surface font-mono text-sm font-semibold text-accent">
                {site.initials}
              </span>
              <span className="text-sm font-medium tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full Stack Developer building practical web, mobile, and desktop
              systems for business workflows. Based in Durban, South Africa.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
              Navigate
            </span>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Elsewhere" className="flex flex-col gap-2.5">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
              Elsewhere
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Email
            </a>
            <a
              href={site.rephina}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Rephina Software
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js &
            TypeScript.
          </p>
          <p className="font-mono">Durban · KwaZulu-Natal · South Africa</p>
        </div>
      </div>
    </footer>
  );
}
