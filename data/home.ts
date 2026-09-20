import { siteConfig } from "@/config/site";
import { HomeContent } from "@/types/home";

/** A run of text. `emphasis` renders as italic + muted (see the `em` rule in globals.css). */

const homeContent: HomeContent = {
  hero: {
    image: {
      src: "/images/home/hero.png",
      alt: "Hero image",
    },
  },
  intro: {
    eyebrow: "An architecture studio",
    statement: [
      { text: "At Ground Attire, we see architecture as " },
      { text: "attire for the ground —", emphasis: true },
      {
        text: " shaped by place, material and light. Every project begins with listening to the site before drawing a single line.",
      },
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

export default homeContent;