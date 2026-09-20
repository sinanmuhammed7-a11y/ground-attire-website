import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // add any private routes here
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}