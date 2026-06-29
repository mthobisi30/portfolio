"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

type Dir = "up" | "down" | "left" | "right" | "none";

function offset(dir: Dir, d: number) {
  switch (dir) {
    case "left":
      return { x: -d, y: 0 };
    case "right":
      return { x: d, y: 0 };
    case "up":
      return { x: 0, y: d };
    case "down":
      return { x: 0, y: -d };
    default:
      return { x: 0, y: 0 };
  }
}

/** Reveals on scroll into view (once). */
export function FadeIn({
  children,
  delay = 0,
  from = "up",
  distance = 26,
  immediate = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  from?: Dir;
  distance?: number;
  immediate?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const off = reduce ? { x: 0, y: 0 } : offset(from, distance);
  const trigger = immediate
    ? { animate: { opacity: 1, x: 0, y: 0 } }
    : ({
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: "-10% 0px -10% 0px" },
      } as const);

  return (
    <motion.div
      initial={{ opacity: 0, ...off }}
      {...trigger}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers <StaggerItem> children in as it scrolls into view. */
export function Stagger({
  children,
  className,
  gap = 0.09,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : gap } },
  };
  const trigger = immediate
    ? ({ initial: "hidden", animate: "show" } as const)
    : ({
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-12% 0px" },
      } as const);

  return (
    <motion.div variants={container} {...trigger} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  from = "up",
  distance = 28,
}: {
  children: ReactNode;
  className?: string;
  from?: Dir;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  const off = reduce ? { x: 0, y: 0 } : offset(from, distance);
  const item: Variants = {
    hidden: { opacity: 0, ...off },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

/** Glass card that lifts on hover. Pass href to render an anchor. */
export function PopCard({
  children,
  className,
  href,
  lift = -6,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  lift?: number;
}) {
  const reduce = useReducedMotion();
  const whileHover = reduce ? undefined : { y: lift };
  const transition = { type: "spring" as const, stiffness: 280, damping: 24 };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={whileHover}
        transition={transition}
        className={className}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.div whileHover={whileHover} transition={transition} className={className}>
      {children}
    </motion.div>
  );
}
