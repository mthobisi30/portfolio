"use client";

import { useEffect, useState } from "react";
import { Briefcase, Clock, Home, Layers, Mail, User } from "./icons";

// iOS-style floating tab dock for phones. Mirrors the desktop LeftRail's
// sections, tracks the section in view, and clears the iPhone home indicator
// via the safe-area inset. Hidden from `md` up, where the top nav takes over.
const items = [
  { label: "Home", href: "#top", Icon: Home },
  { label: "Work", href: "#work", Icon: Briefcase },
  { label: "Exp", href: "#experience", Icon: Clock },
  { label: "Stack", href: "#stack", Icon: Layers },
  { label: "About", href: "#about", Icon: User },
  { label: "Contact", href: "#contact", Icon: Mail },
];

export default function BottomNav() {
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
      className="fixed inset-x-0 bottom-0 z-40 px-3 md:hidden"
      style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex w-full max-w-sm items-stretch justify-between gap-0.5 rounded-2xl border border-border-strong bg-surface/80 px-1.5 py-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {items.map(({ label, href, Icon }) => {
          const isActive = active === href;
          return (
            <a
              key={href}
              href={href}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={`relative flex flex-1 flex-col items-center gap-1 rounded-xl px-0.5 py-1.5 transition-colors duration-200 ${
                isActive
                  ? "bg-accent/12 text-accent"
                  : "text-faint active:text-ink"
              }`}
            >
              <Icon size={19} />
              <span className="text-[0.58rem] font-medium leading-none tracking-tight">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
