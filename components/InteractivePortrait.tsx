import Image from "next/image";

export default function InteractivePortrait() {
  return (
    <div className="portrait-stage relative ml-auto w-full max-w-[29rem]">
      <figure className="portrait-sheet liquid-glass relative overflow-hidden rounded-[2.25rem] p-2">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.8rem] bg-surface"
          style={{ transform: "translateZ(20px)" }}
        >
          <Image
            src="/photos/mthobisi-work.webp"
            alt="Mthobisi Nxumalo — Full Stack Developer"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 34vw"
            className="portrait-image object-cover object-[center_32%]"
          />
          <div className="portrait-wash absolute inset-0" />
        </div>
      </figure>
    </div>
  );
}
