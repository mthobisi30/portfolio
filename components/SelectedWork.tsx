import Image from "next/image";
import { projects } from "@/lib/content";
import { ArrowRight } from "./icons";
import { Stagger, StaggerItem } from "./motion";
import ProjectLogo from "./ProjectLogo";
import SectionHeader from "./SectionHeader";

export default function SelectedWork() {
  return (
    <section id="work" className="border-t border-border py-14 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Production systems, shown in context."
          intro="Real interfaces backed by real architecture—industrial operations, manufacturing data, commerce, payments, and internal business workflows."
        />

        <Stagger
          gap={0.08}
          className="featured-track mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
        >
          {projects.map((project, index) => {
            const image = project.images?.[0];
            return (
              <StaggerItem
                key={project.slug}
                className="min-w-[88vw] snap-start sm:min-w-[42rem] lg:min-w-[48rem]"
              >
                <a
                  href={`#case-${project.slug}`}
                  className="project-showcase group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  {image ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 88vw, 768px"
                      className="object-cover object-top opacity-70 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-90"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-7">
                    <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-white/75 backdrop-blur">
                      {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                    <div className="flex max-w-[65%] flex-wrap justify-end gap-1.5">
                      {project.stack.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[0.58rem] text-white/70 backdrop-blur"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                    <div className="flex items-center gap-3">
                      <ProjectLogo
                        src={project.logo}
                        name={project.name}
                        size={42}
                      />
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">
                        {project.tagline}
                      </p>
                    </div>
                    <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 hidden max-w-2xl text-sm leading-relaxed text-white/65 sm:block">
                      {project.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Open case study
                      <ArrowRight
                        size={16}
                        className="text-accent transition-transform group-hover:translate-x-2"
                      />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>

        <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-faint">
          Scroll horizontally to inspect the project reel
        </p>
      </div>
    </section>
  );
}
