"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, type Project } from "@/lib/content";
import { ArrowRight, ArrowUpRight, Close } from "./icons";

const spans = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

const prompts = ["See the system", "View the product", "Explore the workflow", "Open the ERP", "Visit the build"];

function ProjectDetail({ project, close }: { project: Project; close: () => void }) {
  const image = project.images?.[0];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close]);

  return (
    <div className="project-dialog-backdrop" onClick={close} role="dialog" aria-modal="true" aria-label={`${project.name} project detail`}>
      <article
        onClick={(event) => event.stopPropagation()}
        className="project-dialog liquid-glass"
      >
        <button type="button" onClick={close} className="dialog-close liquid-glass" aria-label="Close project detail"><Close /></button>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="project-kicker">{project.tagline}</p>
            <h3 className="mt-3 text-4xl sm:text-6xl">{project.name}</h3>
            <p className="mt-5 text-base leading-8 text-muted">{project.summary}</p>
            <p className="mt-6 text-sm leading-7 text-ink">{project.problem}</p>
            {project.scale ? <p className="mt-5 font-serif text-xl italic text-warm">{project.scale}</p> : null}
            <div className="mt-8 border-t border-border pt-7">
              <p className="detail-label">What changed</p>
              <p className="mt-3 text-sm leading-7 text-muted">{project.outcome}</p>
            </div>
          </div>
          <div>
            {image ? <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-surface"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 92vw, 44vw" className="object-cover object-top" /></div> : null}
            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <div>
                <p className="detail-label">Built across</p>
                <ul className="mt-3 space-y-2">{project.features.slice(0, 4).map((feature) => <li key={feature} className="text-sm leading-6 text-muted">{feature}</li>)}</ul>
              </div>
              <div>
                <p className="detail-label">Technical shape</p>
                <p className="mt-3 text-sm leading-7 text-muted">{project.stack.join(" · ")}</p>
                <p className="mt-4 text-sm leading-6 text-faint">{project.role}</p>
              </div>
            </div>
            {project.link ? <a href={project.link.href} target="_blank" rel="noreferrer noopener" className="text-link mt-7 inline-flex">Visit live product <ArrowUpRight size={15} /></a> : null}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="section-space">
      <div className="shell">
        <div className="work-intro grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="mt-5 text-4xl sm:text-6xl">Systems that carry real work.</h2></div>
          <p className="max-w-xl text-base leading-8 text-muted lg:justify-self-end">Industrial operations, manufacturing data, commerce, payments, and internal workflows—designed across interface, API, database, deployment, and support.</p>
        </div>
        <div className="project-bento mt-14 grid auto-rows-[14rem] gap-4 md:grid-cols-6">
          {projects.map((project, index) => {
            const initials = project.name
              .split(/\s+/)
              .map((word) => word[0])
              .join("")
              .replace(/[^A-Za-z]/g, "")
              .slice(0, 2)
              .toUpperCase();
            return (
              <button id={`project-${project.slug}`} type="button" key={project.slug} onClick={() => setActive(project)} className={`project-showcase liquid-glass group relative overflow-hidden text-left ${spans[index] ?? "md:col-span-3"}`}>
                <span className="project-brand-field" aria-hidden>
                  {project.logo ? (
                    <Image src={project.logo} alt="" fill sizes="(max-width: 768px) 100vw, 66vw" className="project-logo-image object-cover" />
                  ) : (
                    <span className="project-logo-fallback">{initials}</span>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-black via-black/38 to-black/5" />
                <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="project-kicker block">{project.tagline}</span>
                  <span className="mt-2 block font-serif text-2xl font-semibold text-white sm:text-3xl">{project.name}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white">{prompts[index]} <ArrowRight size={15} className="text-accent transition-transform group-hover:translate-x-1" /></span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {active ? <ProjectDetail project={active} close={() => setActive(null)} /> : null}
    </section>
  );
}
