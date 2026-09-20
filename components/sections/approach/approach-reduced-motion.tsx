"use client";

import { ApproachPlateImage } from "@/components/sections/approach/approach-plate-image";
import { LineNotesOverlay } from "@/components/sections/approach/line-notes-overlay";
import {
  APPROACH_LINE_NOTES_STEP_INDEX,
  type ApproachContent,
} from "@/types/approach";

type ApproachReducedMotionProps = {
  content: ApproachContent;
};

export function ApproachReducedMotion({ content }: ApproachReducedMotionProps) {
  const { label, steps } = content;

  return (
    <section aria-labelledby="approach-heading" className="py-section">
      <div className="container-page space-y-16 md:space-y-24">
        <h2
          id="approach-heading"
          className="font-heading text-h3 text-muted-foreground text-balance"
        >
          {label}
        </h2>

        <ol className="list-none space-y-16 md:space-y-24" aria-label="Approach steps">
          {steps.map((step, index) => (
            <li key={step.verb} className="grid-layout items-start gap-y-6">
              <div className="col-span-4 md:col-span-6 lg:col-span-5">
                <p className="font-heading text-h2 text-foreground">{step.verb}</p>
                <p className="text-body-lg text-foreground mt-4 max-w-prose">
                  {step.description}
                </p>
              </div>
              <div className="col-span-4 md:col-span-6 lg:col-span-6 lg:col-start-7">
                <div className="border-border relative aspect-[4/5] overflow-hidden border bg-background">
                  <ApproachPlateImage
                    stepIndex={index}
                    imageSrc={step.imageSrc}
                    alt={step.verb}
                  />
                  {index === APPROACH_LINE_NOTES_STEP_INDEX ? (
                    <LineNotesOverlay draw reduceMotion />
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
