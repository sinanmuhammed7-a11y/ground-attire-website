import Image from "next/image";

import { getHomeContent } from "@/lib/home";

export function Idea() {
  const { idea } = getHomeContent();

  return (
    <section
      aria-labelledby="idea-heading"
      className="relative flex min-h-[clamp(28rem,72svh,50rem)] items-center justify-center overflow-hidden"
    >
      <Image
        src={idea.image.src}
        alt={idea.image.alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-overlay" aria-hidden />
      <div className="container-page relative z-10 flex flex-col items-center py-section text-center text-[var(--ga-linen)]">
        <p className="type-label text-[var(--ga-linen)]/80">{idea.label}</p>

        <h2
          id="idea-heading"
          className="mt-8 font-heading text-h1 uppercase md:mt-10"
        >
          {idea.heading[0]}
          <br />
          {idea.heading[1]}
        </h2>

        <div className="mt-8 max-w-[55ch] space-y-4 text-body-lg md:mt-10">
          {idea.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
