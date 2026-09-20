import { Hero } from "@/components/sections/hero";
import { Idea } from "@/components/sections/idea";
import { Intro } from "@/components/sections/intro";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Idea />
      {/* Next: <ProjectIndex /> */}
    </>
  );
}
