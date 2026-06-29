"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — kept small and used sparingly. */
  delay?: number;
  /** Entrance direction. "left"/"right" slide horizontally on large screens. */
  from?: "up" | "left" | "right";
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fade-and-rise on scroll, driven by a single IntersectionObserver.
 * No animation dependency; honours prefers-reduced-motion via CSS (the
 * `.reveal` rule short-circuits to a visible, static state).
 */
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the OS asks for reduced motion, skip observation entirely.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref typing across the union of tag names is fine here.
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown}
      data-from={from === "up" ? undefined : from}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
