export const siteConfig = {
    name: "Ground Attire",
    title: "Ground Attire — Architecture that belongs to the ground",
    tagline: "Architecture that belongs to the ground.",
    description:
      "Ground Attire is an architecture studio in Zurich and Santa Fe. Every project begins by listening to the site, then is shaped by place, material and light.",
    // No trailing slash, so `${siteConfig.url}/projects` never becomes "//projects"
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
    locale: "en_US",
    founded: 2018,
    offices: ["Zurich", "Santa Fe"],
    nav: [
      { label: "Projects", href: "/projects" },
      { label: "Studio", href: "/studio" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  } as const;
  
  export type SiteConfig = typeof siteConfig;