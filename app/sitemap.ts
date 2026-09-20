import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
// import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
    //   lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projects`,
    //   lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

//   const projectRoutes: MetadataRoute.Sitemap = getProjects().map((project) => ({
//     url: `${siteConfig.url}/projects/${project.slug}`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//     priority: 0.6,
//   }));

  return [...staticRoutes];
}