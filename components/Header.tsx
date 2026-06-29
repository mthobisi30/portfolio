"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Close, Download, Menu } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Subtle background + border once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
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

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <span
            className={`grid place-items-center rounded-lg border border-border-strong bg-surface font-mono font-semibold tracking-tight text-accent transition-all duration-300 ${
              scrolled ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm"
            }`}
          >
            {site.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {site.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
                aria-current={isActive ? "true" : undefined}
              >
                <span className={isActive ? "text-ink" : undefined}>
                  {item.label}
                </span>
                <span
                  className={`absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cv}
            download
            className="btn btn-primary hidden sm:inline-flex"
          >
            <Download size={15} />
            Download CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border-strong bg-surface text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="shell border-t border-border bg-bg/95 pb-6 pt-2 backdrop-blur-md">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-base text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={site.cv}
            download
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
