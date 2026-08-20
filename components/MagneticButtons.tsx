"use client";

import { useEffect } from "react";

/**
 * Adds a subtle magnetic pull to primary actions and tracks the pointer
 * inside liquid-glass surfaces for a quiet local highlight.
 * Mouse-only (skips touch/coarse pointers) and disabled under reduced motion.
 * Renders nothing — it just wires listeners on mount.
 */
export default function MagneticButtons() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduced.matches) return;

    const STRENGTH = 0.18; // fraction of cursor offset — kept low to stay subtle
    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".btn-primary")
    );
    const glass = Array.from(
      document.querySelectorAll<HTMLElement>(".liquid-glass")
    );

    const cleanups = buttons.map((btn) => {
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * STRENGTH;
        const y = (e.clientY - (r.top + r.height / 2)) * STRENGTH;
        btn.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      };
      const onLeave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
        btn.style.transform = "";
      };
    });

    const glassCleanups = glass.map((panel) => {
      const onMove = (event: MouseEvent) => {
        const bounds = panel.getBoundingClientRect();
        panel.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        panel.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      };
      panel.addEventListener("mousemove", onMove);
      return () => panel.removeEventListener("mousemove", onMove);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      glassCleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
