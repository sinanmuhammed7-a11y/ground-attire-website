"use client";

import { ApproachPlate } from "@/components/sections/approach/approach-plate";
import { ApproachText } from "@/components/sections/approach/approach-text";
import { useApproachStepObserver } from "@/hooks/use-approach-step-observer";
import type { ApproachContent } from "@/types/approach";

type ApproachScrollProps = {
  content: ApproachContent;
};

export function ApproachScroll({ content }: ApproachScrollProps) {
  const { steps } = content;
  const scrollHeightVh = steps.length * 100;
  const { active, setTriggerRef } = useApproachStepObserver(steps.length);

  return (
    <section
      aria-labelledby="approach-heading"
      className="relative"
      style={{ height: `${scrollHeightVh}vh` }}
    >
      <div className="absolute inset-0" aria-hidden>
        {steps.map((step, index) => (
          <div
            key={step.verb}
            ref={setTriggerRef(index)}
            data-step={index}
            className="h-screen"
          />
        ))}
      </div>

      <div className="bg-background sticky top-0 z-10 flex h-svh flex-col lg:block">
        <div className="container-page flex h-full min-h-svh flex-col lg:grid lg:grid-layout lg:items-start">
          <div className="flex h-[40svh] shrink-0 flex-col justify-start pt-4 lg:col-span-6 lg:col-start-7 lg:h-auto lg:w-full lg:max-w-[min(100%,20rem)] lg:justify-start lg:pb-0 lg:pt-gutter lg:py-0 lg:ml-auto">
            <ApproachPlate steps={steps} active={active} reduceMotion={false} />
          </div>

          <div className="flex min-h-[52svh] flex-1 flex-col justify-start pb-4 pt-4 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:py-gutter">
            <ApproachText content={content} active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
