import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Fraunces } from "next/font/google";
import { projects, site } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const title = "Mthobisi Nxumalo | Full Stack Software Engineer";
const description =
  "Mthobisi Nxumalo is a full stack software engineer in Durban, South Africa, building production web, mobile, desktop, data, and cloud systems.";

const seoKeywords = [
  "Mthobisi Nxumalo",
  "full stack developer South Africa",
  "software engineer Durban",
  "Next.js developer South Africa",
  "React TypeScript developer",
  "Flutter developer South Africa",
  "mobile app developer South Africa",
  "desktop application developer",
  "PostgreSQL developer",
  "custom business software South Africa",
  "manufacturing software developer",
  "industrial software developer",
];

export const metadata: Metadata = {
  metadataBase: new URL(site.portfolio),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Software Engineering",
  classification: "Full Stack Software Engineering Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: seoKeywords,
  alternates: {
    canonical: "/",
    languages: {
      "en-ZA": "/",
    },
    types: {
      "text/markdown": "/portfolio.md",
    },
  },
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: `${site.name} — Software Engineering Portfolio`,
    locale: "en_ZA",
    url: "/",
    firstName: "Mthobisi",
    lastName: "Nxumalo",
    username: "mthobisi30",
    images: [
      {
        url: "/photos/mthobisi-work.png",
        width: 1085,
        height: 1450,
        alt: `${site.name} — Software Engineer and Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/photos/mthobisi-work.png",
        alt: `${site.name}, Full Stack Software Engineer in South Africa`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

const websiteId = `${site.portfolio}/#website`;
const profilePageId = `${site.portfolio}/#profile-page`;
const personId = `${site.portfolio}/#person`;
const portraitId = `${site.portfolio}/#primary-image`;
const rephinaId = `${site.rephina}/#organization`;

const projectEntities = projects.map((project) => ({
  "@type": "CreativeWork",
  "@id": `${site.portfolio}/#project-${project.slug}`,
  url: `${site.portfolio}/#project-${project.slug}`,
  name: project.name,
  alternateName: project.tagline,
  description: project.summary,
  creator: { "@id": personId },
  image: project.images?.[0]
    ? `${site.portfolio}${project.images[0].src}`
    : project.logo
      ? `${site.portfolio}${project.logo}`
      : undefined,
  keywords: project.stack.join(", "),
}));

// One connected graph: the page profiles a person and the work shown on it.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.portfolio,
      name: `${site.name} — Software Engineering Portfolio`,
      alternateName: `${site.name} Portfolio`,
      description,
      inLanguage: "en-ZA",
      author: { "@id": personId },
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      url: site.portfolio,
      name: title,
      description,
      inLanguage: "en-ZA",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: { "@id": portraitId },
      dateModified: "2026-08-20",
      hasPart: projectEntities.map((project) => ({ "@id": project["@id"] })),
    },
    {
      "@type": "ImageObject",
      "@id": portraitId,
      url: `${site.portfolio}/photos/mthobisi-work.png`,
      contentUrl: `${site.portfolio}/photos/mthobisi-work.png`,
      width: 1085,
      height: 1450,
      caption: `${site.name}, Full Stack Software Engineer`,
      representativeOfPage: true,
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      givenName: "Mthobisi",
      familyName: "Nxumalo",
      alternateName: "mthobisi30",
      jobTitle: "Full Stack Software Engineer",
      description,
      email: `mailto:${site.email}`,
      telephone: site.phoneHref,
      url: site.portfolio,
      mainEntityOfPage: { "@id": profilePageId },
      image: { "@id": portraitId },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Durban",
        addressRegion: "KwaZulu-Natal",
        addressCountry: "ZA",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "North-West University",
      },
      worksFor: [
        { "@type": "Organization", name: "Wesant Manufacturing / Vision Elevators" },
        { "@id": rephinaId },
      ],
      sameAs: [site.github, site.linkedin],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Flutter",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Microsoft SQL Server",
        "Prisma",
        "Tauri",
        "Python",
        "Flask",
        "ASP.NET Core",
        "Docker",
        "Coolify",
        "CI/CD",
        "Full Stack Development",
        "System Architecture",
      ],
    },
    {
      "@type": "Organization",
      "@id": rephinaId,
      name: "Rephina Software",
      url: site.rephina,
      founder: { "@id": personId },
    },
    ...projectEntities,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body>
        <div className="site-bg" aria-hidden />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
