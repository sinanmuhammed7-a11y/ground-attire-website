import { getHomeContent } from "@/lib/home";
import Image from "next/image";

export function Hero() {
  const { image } = getHomeContent().hero;

  return (
    <section aria-label="Studio film">
      {/* Full-bleed, capped so it never swallows a tall monitor */}
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={1000}
        className="h-[clamp(20rem,62svh,46rem)] w-full object-cover"
      />
    </section>
  );
}
