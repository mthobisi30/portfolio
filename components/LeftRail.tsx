"use client";

import { useEffect, useState } from "react";
import { Briefcase, Clock, Home, Layers, Mail, User } from "./icons";

const items = [
  { label: "Home", href: "#top", Icon: Home },
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Experience", href: "#experience", Icon: Clock },
  { label: "Tech Stack", href: "#stack", Icon: Layers },
  { label: "About", href: "#about", Icon: User },
  { label: "Contact", href: "#contact", Icon: Mail },
];

// Fixed vertical icon rail (desktop) — tracks the section in view and
// expands to a label on hover.
export default function LeftRail() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = items.map((i) => i.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="glass fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 rounded-2xl p-2 xl:flex"
    >
      {items.map(({ label, href, Icon }) => {
        const isActive = active === href;
        return (
          <a
            key={href}
            href={href}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            className={`group relative grid h-10 w-10 place-items-center rounded-xl border transition-all duration-300 ${
              isActive
                ? "border-accent/40 bg-accent/10 text-accent shadow-[0_0_18px_-6px_var(--color-accent)]"
                : "border-transparent text-faint hover:border-border hover:bg-raise hover:text-ink"
            }`}
          >
            <Icon size={18} />
            <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-border bg-raise px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
