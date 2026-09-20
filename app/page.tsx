import { Approach } from "@/components/sections/approach";
import { Hero } from "@/components/sections/hero";
import { Idea } from "@/components/sections/idea";
import { Intro } from "@/components/sections/intro";
import { SelectedWork } from "@/components/sections/selected-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Idea />
      <Approach />
      <SelectedWork />
    </>
  );
}
