// Decorative dark aurora — muted green glows over a masked pattern.
// Pure markup + CSS, aria-hidden. Atmosphere, not a light show.

type AuroraProps = {
  variant?: "hero" | "soft" | "dark";
  className?: string;
};

export default function Aurora({ variant = "hero", className = "" }: AuroraProps) {
  const hero = variant === "hero";
  const dark = variant === "dark";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Pattern layer, faded with a mask */}
      <div
        className={`absolute inset-0 ${
          dark ? "pattern-diagonal" : hero ? "pattern-grid" : "pattern-dots"
        }`}
        style={{
          opacity: dark ? 1 : hero ? 0.6 : 0.4,
          WebkitMaskImage: dark
            ? undefined
            : "radial-gradient(ellipse 80% 70% at 55% 0%, #000 0%, transparent 80%)",
          maskImage: dark
            ? undefined
            : "radial-gradient(ellipse 80% 70% at 55% 0%, #000 0%, transparent 80%)",
        }}
      />

      {/* Green glow blobs */}
      <div
        className="aurora-a absolute -top-32 right-[6%] rounded-full blur-3xl"
        style={{
          width: hero ? "44rem" : "30rem",
          height: hero ? "44rem" : "30rem",
          opacity: hero ? 0.5 : 0.32,
          background:
            "radial-gradient(closest-side, rgba(192,146,94,0.22), rgba(192,146,94,0.08) 55%, transparent 78%)",
        }}
      />
      <div
        className="aurora-b absolute -bottom-40 left-[-8%] rounded-full blur-3xl"
        style={{
          width: hero ? "40rem" : "28rem",
          height: hero ? "40rem" : "28rem",
          opacity: hero ? 0.4 : 0.26,
          background:
            "radial-gradient(closest-side, rgba(150,110,70,0.16), transparent 72%)",
        }}
      />
      {hero ? (
        <div
          className="aurora-a absolute -top-24 left-[42%] h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{
            opacity: 0.3,
            background:
              "radial-gradient(closest-side, rgba(217,180,133,0.13), transparent 70%)",
          }}
        />
      ) : null}
    </div>
  );
}
