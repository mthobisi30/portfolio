import type { CSSProperties, ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "none";

type MotionStyle = CSSProperties & {
  "--motion-delay"?: string;
  "--motion-x"?: string;
  "--motion-y"?: string;
  "--stagger-gap"?: string;
  "--card-lift"?: string;
};

function revealStyle(from: Dir, distance: number, delay: number): MotionStyle {
  const offset = `${distance}px`;
  const axis = {
    up: { x: "0px", y: offset },
    down: { x: "0px", y: `-${offset}` },
    left: { x: `-${offset}`, y: "0px" },
    right: { x: offset, y: "0px" },
    none: { x: "0px", y: "0px" },
  }[from];

  return {
    "--motion-delay": `${delay}s`,
    "--motion-x": axis.x,
    "--motion-y": axis.y,
  };
}

/** CSS-first entrance animation with scroll-timeline progressive enhancement. */
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
  return (
    <div
      className={`${immediate ? "motion-immediate" : "motion-on-view"}${className ? ` ${className}` : ""}`}
      style={revealStyle(from, distance, delay)}
    >
      {children}
    </div>
  );
}

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
  const style = { "--stagger-gap": `${gap}s` } as MotionStyle;
  return (
    <div
      className={`motion-stagger${immediate ? " motion-stagger-immediate" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
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
  return (
    <div
      className={`motion-stagger-item${className ? ` ${className}` : ""}`}
      style={revealStyle(from, distance, 0)}
    >
      {children}
    </div>
  );
}

/** Glass card lift handled entirely in CSS. */
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
  const style = { "--card-lift": `${lift}px` } as MotionStyle;
  if (href) {
    return <a href={href} style={style} className={`motion-pop ${className ?? ""}`}>{children}</a>;
  }
  return <div style={style} className={`motion-pop ${className ?? ""}`}>{children}</div>;
}
