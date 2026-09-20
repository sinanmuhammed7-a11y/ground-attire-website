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
  idea: {
    label: "The Idea — Manifesto",
    heading: ["THE GROUND IS", "THE BEGINNING."],
    paragraphs: [
      "Architecture begins with where it stands.",
      "The light, the climate, the terrain, the vegetation, the people and the memory of a place all become part of the design.",
      "At Ground Attire, we see architecture as an attire for the ground — carefully shaped, tailored to its surroundings and designed to reveal what already exists.",
    ],
    image: {
      src: "/images/home/idea.png",
      alt: "Landscape and terrain at the scale of architecture",
    },
  },
};

export default homeContent;