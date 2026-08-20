"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import type { PointerEvent } from "react";

export default function InteractivePortrait() {
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const onMove = (event: PointerEvent<HTMLElement>) => {
    if (reduce) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.set(x * 11);
    rotateX.set(y * -8);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="portrait-stage ml-auto w-full max-w-md">
      <motion.figure
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="portrait-sheet relative"
      >
        <div
          aria-hidden
          className="portrait-backplate absolute -inset-4 bg-accent"
          style={{ transform: "translateZ(-44px) rotate(-3deg)" }}
        />
        <div
          aria-hidden
          className="portrait-peek absolute -right-8 top-10 h-[72%] w-[44%] overflow-hidden rounded-xl border border-border bg-surface"
          style={{ transform: "translateZ(-20px) rotate(7deg)" }}
        >
          <Image
            src="/photos/mthobisi-coast.jpg"
            alt=""
            fill
            sizes="180px"
            className="object-cover object-[center_38%]"
          />
        </div>

        <div
          className="portrait-code absolute -left-5 top-8 z-20 bg-accent px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white"
          style={{ transform: "translateZ(54px)" }}
        >
          MN / FS / 26
        </div>

        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[18px] border border-border bg-surface"
          style={{ transform: "translateZ(28px)" }}
        >
          <Image
            src="/photos/mthobisi-work.png"
            alt="Mthobisi Nxumalo — Full Stack Developer"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 34vw"
            className="portrait-image object-cover object-[center_34%]"
          />
        </div>

        <figcaption
          className="relative z-10 grid grid-cols-[1fr_auto] overflow-hidden rounded-b-[18px] border-x border-b border-border bg-surface"
          style={{ transform: "translateZ(28px)" }}
        >
          <span className="p-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
            Mthobisi Nxumalo
            <br />
            Durban, South Africa
          </span>
          <span className="grid place-items-center border-l border-border bg-ink px-5 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.12em] text-bg">
            Full
            <br />
            Stack
            <br />
            2026
          </span>
        </figcaption>
      </motion.figure>
      <p className="mt-6 text-right font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
        Selected portrait / Durban / 2026
      </p>
    </div>
  );
}
