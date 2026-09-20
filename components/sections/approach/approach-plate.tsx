import { ApproachPlateImage } from "@/components/sections/approach/approach-plate-image";
import { LineNotesOverlay } from "@/components/sections/approach/line-notes-overlay";
import { cn } from "@/lib/utils";
import {
  APPROACH_LINE_NOTES_STEP_INDEX,
  type ApproachStep,
} from "@/types/approach";

type ApproachPlateProps = {
  steps: ApproachStep[];
  active: number;
  reduceMotion: boolean;
};

export function ApproachPlate({ steps, active, reduceMotion }: ApproachPlateProps) {
  return (
    <div className="border-border relative aspect-[4/5] overflow-hidden border bg-background">
      {steps.map((step, index) => (
        <div
          key={step.verb}
          className={cn(
            "absolute inset-0 motion-reduce:transition-none transition-[opacity,transform] duration-900 ease-out",
            active === index
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-105 opacity-0",
          )}
        >
          <ApproachPlateImage
            stepIndex={index}
            imageSrc={step.imageSrc}
            alt={step.verb}
          />
          {index === APPROACH_LINE_NOTES_STEP_INDEX ? (
            <LineNotesOverlay
              draw={active === APPROACH_LINE_NOTES_STEP_INDEX}
              reduceMotion={reduceMotion}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
