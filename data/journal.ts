import type { JournalContent } from "@/types/journal";

const journalContent: JournalContent = {
  title: "Journal",
  lead: [
    "Things we notice, explore, make and believe.",
    "Not everything begins with a building.",
  ],
  scrollHint: "Drag or scroll →",
  entries: [
    {
      slug: "notice-light-on-stone",
      theme: "notice",
      publishedAt: "2026-08-12",
      image: {
        src: "/images/journal/notice-light-on-stone.png",
        alt: "Light falling on stone surfaces",
      },
      filmstripWidth: "xl",
    },
    {
      slug: "explore-coastal-path",
      theme: "explore",
      publishedAt: "2026-08-03",
      image: {
        src: "/images/journal/explore-coastal-path.png",
        alt: "Coastal path and terrain",
      },
      filmstripWidth: "md",
    },
    {
      slug: "believe-place-before-form",
      theme: "believe",
      publishedAt: "2026-07-30",
      image: {
        src: "/images/journal/believe-place-before-form.png",
        alt: "Landscape before built form",
      },
      filmstripWidth: "lg",
    },
    {
      slug: "make-material-sample",
      theme: "make",
      publishedAt: "2026-07-28",
      image: {
        src: "/images/journal/make-material-sample.png",
        alt: "Material samples on site",
      },
      filmstripWidth: "sm",
    },
    {
      slug: "make-workshop-notes",
      theme: "make",
      publishedAt: "2026-07-09",
      image: {
        src: "/images/journal/make-workshop-notes.png",
        alt: "Workshop notes and sketches",
      },
      filmstripWidth: "md",
    },
  ],
};

export default journalContent;
