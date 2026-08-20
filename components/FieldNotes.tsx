import Image from "next/image";
import { FadeIn } from "./motion";

const frames = [
  {
    src: "/photos/mthobisi-sun-02.jpg",
    alt: "Mthobisi Nxumalo in warm late-afternoon light",
    label: "Outside the terminal / 01",
    className: "md:col-span-7 md:row-span-2",
    position: "object-[center_38%]",
  },
  {
    src: "/photos/mthobisi-work.png",
    alt: "Mthobisi Nxumalo at work",
    label: "Inside the work / 02",
    className: "md:col-span-5",
    position: "object-[center_36%]",
  },
  {
    src: "/photos/mthobisi-sun-01.jpg",
    alt: "Mthobisi Nxumalo in Durban sunlight",
    label: "Durban light / 03",
    className: "md:col-span-5",
    position: "object-[center_32%]",
  },
];

export default function FieldNotes() {
  return (
    <section
      aria-label="Portrait notes"
      className="photo-ledger overflow-hidden border-t border-border py-14 sm:py-24"
    >
      <div className="shell">
        <FadeIn>
          <div className="mb-7 flex items-end justify-between gap-6 border-b border-border pb-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
              Field notes / Mthobisi Nxumalo
            </p>
            <p className="hidden max-w-md text-right font-serif text-lg italic text-muted sm:block">
              Engineering is technical work done in a human context.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-3 md:grid-cols-12 md:auto-rows-[15rem]">
          {frames.map((frame, index) => (
            <FadeIn
              key={frame.src}
              from={index === 1 ? "right" : "up"}
              delay={index * 0.07}
              className={frame.className}
            >
              <figure className="photo-frame group relative h-full min-h-[22rem] overflow-hidden border border-border md:min-h-0">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 42vw"
                  }
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.025] ${frame.position}`}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/90 px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-bg">
                  <span>{frame.label}</span>
                  <span>{String(index + 1).padStart(2, "0")} / 03</span>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
