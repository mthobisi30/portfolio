// Single source of truth for site copy and structured data.
// Keeping content here (rather than inline in components) makes the portfolio
// easy to update without touching layout code.

export const site = {
  name: "Mthobisi Nxumalo",
  initials: "MN",
  role: "Full Stack Developer",
  location: "Durban, KwaZulu-Natal, South Africa",
  email: "mthobisinx30@gmail.com",
  phone: "071 927 9462",
  phoneHref: "+27719279462",
  github: "https://github.com/mthobisi30",
  githubLabel: "github.com/mthobisi30",
  linkedin: "https://www.linkedin.com/in/mthobisi30",
  linkedinLabel: "linkedin.com/in/mthobisi30",
  portfolio: "https://portfolio-gvr2.vercel.app",
  portfolioLabel: "portfolio-gvr2.vercel.app",
  cv: "/cv/Mthobisi-Nxumalo-CV.pdf",
  rephina: "https://www.rephina.co.za",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Building practical web, mobile, and desktop systems for real business workflows.",
  support:
    "I work across the full SDLC — from requirements and architecture to database design, application development, deployment, and ongoing support.",
  detail:
    "Based in Durban, South Africa, and open to opportunities everywhere.",
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  roleBadges: string[];
  platforms: string[];
  summary: string;
  problem: string;
  scale?: string;
  surfaces?: string[];
  images?: { src: string; alt: string; label: string }[];
  features: string[];
  architecture: string[];
  stack: string[];
  outcome: string;
  link?: { href: string; label: string };
  accent: "navy" | "orange";
};

export const projects: Project[] = [
  {
    slug: "mpia",
    name: "MPIA Services",
    tagline: "Industrial NDT Inspection Platform",
    images: [
      { src: "/projects/mpia-admin.png", alt: "MPIA admin console dashboard — jobs, clients, equipment, and inspection archives", label: "Admin Console" },
      { src: "/projects/mpia-client.png", alt: "MPIA client portal NDT dashboard with project archives and recent reports", label: "Client Portal" },
      { src: "/projects/mpia-mobile-2.png", alt: "MPIA field mobile app dashboard — availability status and active job", label: "Field Mobile" },
      { src: "/projects/mpia-admin-1.png", alt: "MPIA admin console login screen", label: "Admin Login" },
      { src: "/projects/mpia-client-1.png", alt: "MPIA client portal login screen", label: "Client Login" },
      { src: "/projects/mpia-mobile-1.png", alt: "MPIA field data-capture mobile login screen", label: "Field Login" },
    ],
    role: "Software Developer · Contract via Rephina Software",
    roleBadges: ["Full Stack Developer", "Full SDLC", "Production System"],
    platforms: ["Web", "Desktop", "Mobile", "API", "Database", "Offline-first"],
    summary:
      "A multi-platform operations system for a non-destructive testing company doing radiographic inspection on rail turnouts, pipelines, and industrial steelwork. A central PostgreSQL database drives the office, client, and public surfaces, while the field app captures offline to local SQLite and syncs back when online.",
    problem:
      "MPIA ran inspections, client reporting, field capture, and their web presence across disconnected tools. They needed every surface — office staff, clients, and technicians in the field — reading and writing to one consistent source of truth.",
    scale: "7 surfaces · 4 form factors · central PostgreSQL DB with offline SQLite sync",
    surfaces: [
      "Admin Web App — operations console for MPIA staff",
      "Admin Desktop — native Windows shell of the admin app",
      "Portal Web App — client-facing, tenant-scoped access",
      "Portal Desktop — native Windows shell of the portal",
      "Portal Mobile — Flutter read-mostly client app",
      "Field Mobile — Flutter offline-first capture app",
      "Marketing Website — public site + installer/update host",
    ],
    features: [
      "Jobs, clients, depots, equipment, technicians",
      "Weld sets, joints, and joint interpretations",
      "Reports, invoices, and quotes",
      "Audit logs and granular permissions",
      "CMS that drives the marketing site",
      "Tenant-scoped client portal (isolation re-checked per row, never from the token)",
      "Offline-first field capture to local SQLite, synced when online",
      "Tauri desktop shells with single-instance lock and signed auto-updates",
    ],
    architecture: [
      "Next.js 15 web apps deployed on Vercel",
      "Flutter mobile apps (Android / iOS) over a /api/mobile sync layer",
      "Tauri 2 desktop shells wrapping the hosted web apps",
      "PostgreSQL with Prisma as the single schema source of truth",
      "Shared workspace packages: database, auth/guards, audit logging, UI",
      "Ed25519-signed desktop installers + update manifests served from the site",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Flutter / Dart",
      "Tauri 2 (Rust)",
      "PostgreSQL",
      "Prisma",
      "NextAuth v5",
      "Vercel",
    ],
    outcome:
      "MPIA's platform connects internal operations, client access, field data capture, reporting, and public web presence — office and client surfaces on one central PostgreSQL database, with the field app syncing from offline SQLite.",
    accent: "orange",
  },
  {
    slug: "elevatetech",
    name: "ElevateTech",
    tagline: "Manufacturing PIM, Supplier Portal & Commerce Platform",
    images: [
      { src: "/projects/pim-1.png", alt: "ElevateTech PIM admin dashboard — parts, inventory, and sync overview", label: "PIM" },
      { src: "/projects/suppliers-1.png", alt: "ElevateTech supplier portal dashboard — RFQs, quotes, and orders", label: "Supplier Portal" },
      { src: "/projects/online-store.png", alt: "ElevateTech online store product catalogue of elevator parts", label: "Online Store" },
      { src: "/projects/pim-2.png", alt: "ElevateTech PIM admin login screen", label: "PIM Login" },
      { src: "/projects/suppliers-2.png", alt: "ElevateTech supplier portal sign-in screen", label: "Supplier Sign-in" },
    ],
    role: "Full Stack Developer · full SDLC ownership",
    roleBadges: ["Full Stack Developer", "Full SDLC", "Production System"],
    platforms: ["Web", "Mobile", "PIM", "E-commerce", "Database"],
    summary:
      "A multi-surface product platform for manufacturing and parts cataloguing: a PIM for structured product data, a supplier portal, a customer-facing store, and a React Native mobile app — all over one product database.",
    problem:
      "Manufacturing product data lived in spreadsheets with no versioning, no audit trail, and no clean path to a storefront. The work centralises structured product data and publishes it straight into an online parts catalogue.",
    scale: "4 surfaces · full SDLC · architecture to deployment",
    surfaces: [
      "PIM — structured product data (Next.js web)",
      "Suppliers Portal — supplier-facing web app (Next.js)",
      "Online Store — customer parts catalogue & orders (Next.js web)",
      "PIM Mobile — the PIM as a React Native app",
    ],
    features: [
      "Product Information Management with versioned, structured product data",
      "Supplier portal for supplier-facing workflows (Next.js)",
      "React Native mobile app putting the PIM in your pocket",
      "Bulk CSV import / export",
      "Change-history audit trail and role-based dashboards",
      "Rich text editor and category / tag taxonomy",
      "Customer-facing store with parts catalogue and order workflow",
      "Automated inventory sync via cron jobs",
    ],
    architecture: [
      "Next.js + React + TypeScript across the PIM, supplier portal, and store",
      "React Native mobile client sharing the same product API",
      "PostgreSQL with Prisma ORM as the single product source of truth",
      "Dockerised services on self-hosted Coolify, with zero-downtime releases and automated migrations",
    ],
    stack: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Coolify",
    ],
    outcome:
      "Four connected surfaces — PIM, supplier portal, store, and mobile app — kept in sync over one product database, containerised and shipped with zero-downtime releases on self-hosted infrastructure.",
    link: { href: "https://store.elevatetech.biz", label: "store.elevatetech.biz" },
    accent: "navy",
  },
  {
    slug: "redhailer",
    name: "RedHailer",
    tagline: "Service & Product Marketplace Platform",
    images: [
      { src: "/projects/redhailer-2.png", alt: "RedHailer discover-services marketplace screen with featured listings", label: "Marketplace" },
      { src: "/projects/redhailer-1.png", alt: "RedHailer sign-in screen", label: "Sign In" },
    ],
    role: "Software Developer · Contract via Rephina Software, for Qwezy Digitals",
    roleBadges: ["Contractor Work", "Agency Project", "Production System"],
    platforms: ["Web", "Mobile", "Payments", "Real-time", "Marketplace"],
    summary:
      "A full-stack marketplace connecting service providers and clients through service listings, products, job workflows, QR codes, payments, and real-time chat. Users switch between client and provider roles in one account.",
    problem:
      "Providers and clients needed a single place to list, discover, book, pay for, and track work — with the job lifecycle tied to physical hand-off, not just an online checkout.",
    features: [
      "Client / provider role switching in one account",
      "Service listings and a product marketplace with inventory tracking",
      "Custom job creation with pricing and deadlines",
      "QR code workflows for job acceptance and completion",
      "PayStack payments with server-side verification",
      "Pusher-powered real-time chat with read receipts",
      "OpenStreetMap geocoding and distance-based delivery fees",
      "Notifications, camera access, and push via Capacitor",
    ],
    architecture: [
      "Next.js (App Router) + TypeScript with NextAuth sessions",
      "PostgreSQL with Prisma ORM",
      "Pusher Channels for WebSocket messaging",
      "Cloudinary for media, OpenStreetMap Nominatim for geocoding",
      "Capacitor for native Android / iOS plus PWA support",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "PayStack",
      "Pusher",
      "Capacitor",
    ],
    outcome:
      "A marketplace where the whole job lifecycle — list, accept, pay, chat, complete — is tracked end to end, with QR hand-off bridging the online and physical steps.",
    accent: "navy",
  },
  {
    slug: "rephina-erp",
    name: "Rephina ERP",
    tagline: "Internal Business Operations Platform",
    images: [
      { src: "/projects/erp-1.png", alt: "Rephina ERP dashboard — projects, tasks, and finance overview", label: "Dashboard" },
    ],
    role: "Founder / Full Stack Developer",
    roleBadges: ["Full Stack Developer", "Full SDLC", "Product"],
    platforms: ["Web", "API", "Database", "RBAC"],
    summary:
      "A full-featured ERP covering business operations end to end: finance, CRM, projects, support, HR, and reporting — backed by a 70+ table schema and role-based access throughout.",
    problem:
      "Running a software practice means juggling clients, quotes, invoices, projects, time, and support. This consolidates all of it behind one authenticated, audited system instead of a stack of disconnected SaaS tools.",
    scale: "70+ table schema · RBAC · ZAR + 15% VAT accounting",
    features: [
      "Dashboard, analytics, scheduler, and calendar",
      "Task management with Kanban boards",
      "Project management, CRM, and sales pipeline",
      "Time tracking, services, and rate cards",
      "Accounting & finance — ZAR + 15% VAT invoicing, payments, expenses",
      "HR & performance, customer-service tickets",
      "Reports, document management, notifications",
      "Activity logs and audit trails throughout",
    ],
    architecture: [
      "Python 3.11+ with Flask 3 and Flask-RESTful",
      "SQLAlchemy 2 ORM over PostgreSQL (Neon)",
      "JWT authentication with role-based access control",
      "Alembic migrations as the schema source of truth",
      "Serverless deployment on Vercel",
    ],
    stack: [
      "Python",
      "Flask 3",
      "SQLAlchemy 2",
      "PostgreSQL",
      "JWT",
      "Alembic",
      "Vercel",
    ],
    outcome:
      "Security built in from the schema up — hashed passwords, JWT auth, RBAC, ORM-guarded queries, rate limiting, audit logging, and SSL/TLS across a 70+ table system.",
    link: { href: "https://erp-system-woad.vercel.app", label: "erp-system-woad.vercel.app" },
    accent: "orange",
  },
  {
    slug: "gwensula",
    name: "Gwensula's Pride",
    tagline: "Business Website",
    images: [
      { src: "/projects/gwensulas-pride-1.png", alt: "Gwensula's Pride construction company website homepage", label: "Homepage" },
    ],
    role: "Software Developer · Rephina Software",
    roleBadges: ["Client Work"],
    platforms: ["Web", "Static", "SEO"],
    summary:
      "A clean, fast, SEO-friendly static business website — built to load quickly on mobile networks and rank for the business it represents.",
    problem:
      "A small business needed a credible, quick-loading web presence without the weight or cost of a full application.",
    features: [
      "Hand-built, lightweight static front end",
      "SEO-friendly structure and metadata",
      "Fast loads tuned for South African mobile networks",
      "Deployed and maintained on Vercel",
    ],
    architecture: [
      "Static HTML / CSS / JavaScript",
      "Deployed on Vercel",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    outcome:
      "A focused brochure site that does one job well — fast, accessible, and cheap to run.",
    accent: "navy",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Wesant Manufacturing / Vision Elevators",
    role: "Full Stack Developer",
    period: "Sep 2025 — Present",
    location: "Pinetown, KwaZulu-Natal",
    current: true,
    points: [
      "Design, develop, and maintain every internal and external web and mobile application, owning architecture, delivery, and the full SDLC.",
      "Build web apps with Next.js, React, and TypeScript; mobile apps with Flutter / Dart and native Android in Kotlin.",
      "Act as primary DBA for PostgreSQL and Microsoft SQL Server — schema design, query optimisation, indexing, and automated backups.",
      "Implement authentication and RBAC (JWT / OAuth) across all systems.",
      "Deploy and run production apps with Docker on self-hosted Coolify; maintain CI/CD, uptime, and monitoring.",
      "Translate business requirements into technical specifications and shipped features.",
    ],
  },
  {
    company: "Rephina Software",
    role: "Founder · Full Stack Developer",
    period: "Ongoing",
    points: [
      "Operate a one-person software practice delivering custom web apps, mobile apps, dashboards, APIs, workflow tools, and automation.",
      "Handle the work end to end: architecture, build, deployment, hosting, and support.",
      "Client engagements range from industrial inspection platforms to marketplaces and business websites.",
    ],
  },
  {
    company: "MPIA Services",
    role: "Software Developer · Contract via Rephina Software",
    period: "Project-based",
    points: [
      "Designed and built MPIA's end-to-end operations platform — seven runnable surfaces (admin web/desktop, client portal web/desktop/mobile, field mobile, and marketing site) over one central PostgreSQL database.",
      "Built the Next.js 15 web apps, Flutter mobile apps with offline-first field capture (local SQLite, sync on reconnect), and Tauri 2 desktop shells with signed auto-updates.",
      "Wired tenant-scoped client access, granular permissions, and audit logging across jobs, reports, invoices, quotes, and inspection records.",
    ],
  },
  {
    company: "Qwezy Digitals",
    role: "Software Developer · Contract via Rephina Software",
    period: "Project-based",
    points: [
      "Built RedHailer, a service-and-product marketplace with provider / client workflows.",
      "Delivered PayStack payments, Pusher real-time chat, and QR-code job acceptance / completion flows.",
    ],
  },
  {
    company: "Hamtern Financial Services",
    role: "Learner — IT & Systems Support",
    period: "Jan 2024 — Dec 2024",
    location: "Bryanston, Gauteng",
    points: [
      "Built workflow automation with Microsoft Power Platform (Power Automate, Power Apps, Power BI).",
      "Wrote Python scripts for data extraction, transformation, and automated reporting.",
      "Supported IT rollouts, user training, and ITSM processes.",
    ],
  },
];

export const strengths = [
  {
    title: "Frontend",
    body: "Responsive web UIs in Next.js, React, and TypeScript, plus cross-platform mobile in Flutter and React Native.",
  },
  {
    title: "Backend",
    body: "APIs, server logic, and integrations across Node.js, Python / Flask, and C# / .NET, designed around REST.",
  },
  {
    title: "Database administration",
    body: "Schema design, indexing, query optimisation, and migrations on PostgreSQL, SQL Server, and Oracle.",
  },
  {
    title: "Security",
    body: "Authentication, RBAC, tenant isolation, and JWT / OAuth applied with cyber-security best practices.",
  },
  {
    title: "DevOps",
    body: "Docker on self-hosted Coolify and AWS, CI/CD pipelines, zero-downtime releases, backups, and monitoring.",
  },
  {
    title: "Automation",
    body: "Workflow automation and integrations — Power Platform, scripted pipelines, and AI agents / models where they fit.",
  },
  {
    title: "QA & testing",
    body: "API testing with Postman and Swagger, code review, and automated checks to keep systems correct.",
  },
  {
    title: "Maintenance",
    body: "Long-term ownership of live systems: hosting, support, fixes, and steady iteration after launch.",
  },
];

export const techStack: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "HTML5",
      "CSS3",
      "WordPress",
    ],
  },
  {
    group: "Mobile",
    items: ["Flutter", "Dart", "React Native", "Capacitor", "Kotlin", "Android", "PWA"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Python",
      "Flask",
      "C#",
      "ASP.NET Core",
      "C++",
      "Delphi",
      "REST API Design",
      "Gunicorn",
      "MVC",
    ],
  },
  {
    group: "Databases",
    items: [
      "PostgreSQL",
      "MS SQL Server",
      "Oracle DB",
      "SQLite",
      "Prisma ORM",
      "SQLAlchemy",
      "Schema Design",
      "Query Optimisation",
      "Data Migrations",
    ],
  },
  {
    group: "Security",
    items: [
      "Authentication",
      "JWT",
      "OAuth",
      "RBAC",
      "Cyber Security best practices",
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "Docker",
      "Coolify",
      "AWS",
      "Azure",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "GitHub",
    ],
  },
  {
    group: "Automation & AI",
    items: [
      "Power Automate",
      "Power Apps",
      "Power BI",
      "UiPath",
      "AI agents & models",
      "PyTorch",
    ],
  },
  {
    group: "Testing & QA",
    items: ["Postman", "Swagger", "API Testing"],
  },
  {
    group: "Practices",
    items: [
      "SDLC",
      "Requirements Analysis",
      "System Architecture",
      "Technical Documentation",
      "Code Review",
      "Agile / Scrum",
      "Sprint Planning",
    ],
  },
];

export const about = {
  lead: "Mthobisi Nxumalo is a Full Stack Developer based in Durban, South Africa, building custom software across web, mobile, and desktop.",
  body: [
    "His work spans the full stack and the full lifecycle — interfaces, APIs, databases, authentication, deployment, and the maintenance that keeps systems running. He's delivered industrial inspection platforms, manufacturing and supplier systems, marketplaces, ERPs, internal dashboards, and workflow automation.",
    "That work has come through full-time employment, his own clients via Rephina Software, and contract engagements for other teams — going from a first conversation to a deployed, monitored production system: designing the database, building the surfaces on top of it, wiring access control, and keeping it running.",
  ],
  facts: [
    { k: "Based in", v: "Durban, South Africa" },
    { k: "Role", v: "Full Stack Developer" },
    { k: "Focus", v: "Custom Software Solutions" },
    { k: "Delivery", v: "Web · Mobile · Desktop" },
    { k: "Availability", v: "Open to all opportunities" },
  ],
};

export const rephina = {
  blurb:
    "For direct developer opportunities, contact me personally. For contracted software projects, I operate through Rephina Software Solutions.",
  offerings: [
    "Custom software",
    "Web & mobile apps",
    "Dashboards & APIs",
    "Workflow automation",
    "Data & digital tools",
    "Hosting & support",
  ],
};
