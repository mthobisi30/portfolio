// Minimal, functional icon set — stroke-based UI symbols only.
// Deliberately no decorative icons (rockets, lightning, sparkles, trophies).

type IconProps = {
  className?: string;
  size?: number;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export function ArrowUpRight({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 5v14" />
      <path d="m5 12 7 7 7-7" />
    </svg>
  );
}

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Mail({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 5c0 8 7 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.76-.97l-3.6-.9a1 1 0 0 0-1 .27l-1 1a12 12 0 0 1-5-5l1-1a1 1 0 0 0 .27-1l-.9-3.6A1 1 0 0 0 8.3 3H6a2 2 0 0 0-2 2Z" />
    </svg>
  );
}

export function MapPin({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 10c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Github({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function Linkedin({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7" />
      <path d="M8 7v.01" />
      <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M12 13v4" />
    </svg>
  );
}

export function Download({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

export function ExternalLink({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function Menu({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function Close({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function Dot({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor" stroke="none">
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function Home({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function Briefcase({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

export function Clock({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

export function Layers({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function User({ className, size = 16 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="9" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}
