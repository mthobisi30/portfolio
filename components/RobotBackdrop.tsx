import Image from "next/image";

// Faint, desaturated robot image blended into a section background as
// atmosphere (not a foreground element). The glass cards in front blur it.
export default function RobotBackdrop({
  src,
  side = "right",
}: {
  src: string;
  side?: "left" | "right";
}) {
  const fade = side === "right" ? "left" : "right";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 ${
        side === "right" ? "right-0" : "left-0"
      } w-full opacity-[0.22] sm:w-3/5`}
      style={{
        WebkitMaskImage: `linear-gradient(to ${fade}, #000 0%, transparent 78%)`,
        maskImage: `linear-gradient(to ${fade}, #000 0%, transparent 78%)`,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="60vw"
        className="object-cover object-center mix-blend-luminosity"
      />
    </div>
  );
}
