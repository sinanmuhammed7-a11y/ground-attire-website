import { cn } from "@/lib/utils";

type ApproachStepDotProps = {
  active: boolean;
};

export function ApproachStepDot({ active }: ApproachStepDotProps) {
  return (
    <span
      className={cn(
        "relative z-10 size-2 shrink-0 rounded-full border border-border motion-reduce:transition-none transition-colors duration-700",
        active ? "bg-foreground border-foreground" : "bg-background",
      )}
      aria-hidden
    />
  );
}

type ApproachStepTrackProps = {
  active: number;
  stepCount: number;
};

export function ApproachStepTrack({ active, stepCount }: ApproachStepTrackProps) {
  const progress =
    stepCount <= 1 ? 0 : (active / (stepCount - 1)) * 100;

  return (
    <div
      className="pointer-events-none absolute bottom-4 left-0 top-4 flex w-2 justify-center"
      aria-hidden
    >
      <div className="relative h-full w-px">
        <div className="bg-border absolute inset-0" />
        <div
          className="bg-foreground absolute top-0 w-full origin-top motion-reduce:transition-none transition-[height] duration-700 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
}
