# Mthobisi Nxumalo — Portfolio

Personal portfolio for **Mthobisi Nxumalo**, Full Stack Developer
(Durban, South Africa). Built as a single, fast, accessible page.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- Scroll motion via a tiny `IntersectionObserver` (`components/Reveal.tsx`) —
  no animation library, and it respects `prefers-reduced-motion`.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the build
```

## Structure

```
app/
  layout.tsx        # fonts, SEO metadata, JSON-LD, skip link
  page.tsx          # section assembly
  globals.css       # design tokens + primitives
  icon.svg          # MN favicon
  sitemap.ts
components/          # Header, Hero, SelectedWork, ProjectCaseStudies,
                     # Experience, Strengths, TechStack, About,
                     # RephinaGateway, Contact, Footer, ProjectPreview, …
lib/content.ts       # all copy + structured project/experience/stack data
public/cv/           # downloadable CV (PDF)
```

## Editing content

Almost everything (projects, experience, tech stack, contact details, copy)
lives in [`lib/content.ts`](lib/content.ts). Edit there — components read from it.

## Design

Warm editorial palette on a cream background with a single industrial-orange
accent (`#c2410c`) over deep-navy "ink". Inter for text, JetBrains Mono for
small technical labels. One dark band (Strengths) for contrast. Bento is used
only for Selected Work; every other section uses purpose-built layouts.

## Replacing the CV

The Download CV buttons serve `public/cv/Mthobisi-Nxumalo-CV.pdf`. Drop a new
PDF at that path to update it.

## Deploy

Optimised for Vercel — push the repo and import. No environment variables
required.
