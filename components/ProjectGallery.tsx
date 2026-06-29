"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Close } from "./icons";

type Shot = { src: string; alt: string; label: string };

export default function ProjectGallery({
  images,
  name,
}: {
  images: Shot[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const shot = images[Math.min(active, images.length - 1)];
  const fade = { duration: reduce ? 0 : 0.3 };

  // Lightbox: Esc to close, lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      {/* Primary framed screenshot */}
      <figure className="overflow-hidden rounded-[14px] border border-border bg-surface shadow-[0_10px_30px_-18px_rgba(30,30,30,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-alt/60 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="ml-auto rounded bg-bg px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
            {shot.label}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${name} screenshot: ${shot.label}`}
          className="group relative block aspect-[16/10] w-full overflow-hidden bg-surface-alt/40"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={shot.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fade}
              className="absolute inset-0"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </motion.span>
          </AnimatePresence>
          <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-ink/70 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to enlarge
          </span>
        </button>
      </figure>

      {/* Thumbnail switcher */}
      {images.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${img.label}`}
              aria-pressed={i === active}
              title={img.label}
              className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border transition ${
                i === active
                  ? "border-accent ring-1 ring-accent/30"
                  : "border-border hover:border-border-strong"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      ) : null}

      {/* Lightbox */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={fade}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} — ${shot.label}`}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Close />
            </button>
            <motion.div
              initial={{ scale: reduce ? 1 : 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: reduce ? 1 : 0.98, opacity: 0 }}
              transition={fade}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-6xl flex-col"
            >
              <div className="relative h-[78vh] w-full">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-white/70">
                {name} · {shot.label}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
