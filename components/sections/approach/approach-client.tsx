"use client";

import { ApproachReducedMotion } from "@/components/sections/approach/approach-reduced-motion";
import { ApproachScroll } from "@/components/sections/approach/approach-scroll";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { ApproachContent } from "@/types/approach";

type ApproachClientProps = {
  content: ApproachContent;
};

export function ApproachClient({ content }: ApproachClientProps) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return <ApproachReducedMotion content={content} />;
  }

  return <ApproachScroll content={content} />;
}
