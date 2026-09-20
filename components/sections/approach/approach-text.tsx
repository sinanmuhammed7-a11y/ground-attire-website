import {
  ApproachStepDot,
  ApproachStepTrack,
} from "@/components/sections/approach/approach-step-rail";
import { cn } from "@/lib/utils";
import type { ApproachContent } from "@/types/approach";

type ApproachTextProps = {
  content: ApproachContent;
  active: number;
};

export function ApproachText({ content, active }: ApproachTextProps) {
  const { label, steps } = content;

  return (
    <div className="flex flex-col">
      <h2
        id="approach-heading"
        className="font-heading text-h3 text-muted-foreground text-balance"
      >
        {label}
      </h2>

      <div className="relative mt-4 ml-8 md:mt-6">
        <ApproachStepTrack active={active} stepCount={steps.length} />
        <ol className="relative list-none space-y-1" aria-label="Approach steps">
          {steps.map((step, index) => (
            <li
              key={step.verb}
              className="flex items-center gap-3 md:gap-4"
              aria-current={active === index ? "step" : undefined}
            >
              <ApproachStepDot active={active === index} />
              <span
                className={cn(
                  "font-heading text-h1 motion-reduce:transition-none transition-opacity duration-700",
                  active === index
                    ? "text-foreground opacity-100"
                    : "text-foreground opacity-20",
                )}
              >
                {step.verb}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative mt-6 grid md:mt-8">
        {steps.map((step, index) => (
          <p
            key={step.description}
            aria-hidden={active !== index}
            className={cn(
              "text-body-lg text-foreground col-start-1 row-start-1 motion-reduce:transition-none transition-opacity duration-700",
              active === index ? "opacity-100" : "opacity-0",
            )}
          >
            {step.description}
          </p>
        ))}
      </div>
    </div>
  );
}
