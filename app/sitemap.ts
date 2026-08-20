import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectImages = projects.flatMap((project) => {
    const image = project.images?.[0]?.src ?? project.logo;
    return image ? [`${site.portfolio}${image}`] : [];
  });

  return [
    {
      url: site.portfolio,
      lastModified: new Date("2026-08-20"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${site.portfolio}/photos/mthobisi-work.webp`,
        `${site.portfolio}/photos/mthobisi-coast.webp`,
        ...projectImages,
      ],
    },
  ];
}
