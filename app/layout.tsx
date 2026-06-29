import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Oxanium, Lora } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Oxanium = techy display headings; Geist = body; Geist Mono = labels;
// Lora = occasional serif accent.
const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const title =
  "Mthobisi Nxumalo | Full Stack Developer — Web, Mobile, Desktop & Business Systems";
const description =
  "Full Stack Developer based in Durban, South Africa, building multi-platform systems for industrial inspection, manufacturing, marketplaces, ERPs, and internal business workflows.";

export const metadata: Metadata = {
  metadataBase: new URL(site.portfolio),
  title,
  description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Full Stack Developer South Africa",
    "Next.js Developer Durban",
    "Flutter Developer South Africa",
    "PostgreSQL Developer",
    "Industrial Software Developer",
    "ERP Developer South Africa",
    "Marketplace App Developer",
    "Tauri Desktop Developer",
    "Business Systems Developer",
    "Rephina Software",
    "MPIA Services",
    "RedHailer",
    "ElevateTech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: `${site.name} — Full Stack Developer`,
    locale: "en_ZA",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

// Structured data so search engines and recruiters' tools read the basics.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full Stack Developer",
  email: `mailto:${site.email}`,
  telephone: `+27${site.phoneHref.replace(/^\+27/, "")}`,
  url: site.portfolio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durban",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "PostgreSQL",
    "Prisma",
    "Tauri",
    "Python",
    "Flask",
    "Docker",
    "Full Stack Development",
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${oxanium.variable} ${lora.variable}`}
    >
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
