import Image from "next/image";

// Small rounded app-icon tile for a project's logo. Renders nothing when a
// project has no logo, so callers can drop it in unconditionally.
export default function ProjectLogo({
  src,
  name,
  size = 44,
  className = "",
}: {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}) {
  if (!src) return null;
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[0_6px_18px_-10px_rgba(0,0,0,0.9)] ${className}`}
      style={{ height: size, width: size }}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </span>
  );
}
