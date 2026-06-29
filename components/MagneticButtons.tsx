"use client";

import { useEffect } from "react";

/**
 * Gives every `.btn-primary` a subtle pull toward the cursor on hover.
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

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
