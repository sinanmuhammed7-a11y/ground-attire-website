export type ApproachVerb = "Read" | "Respond" | "Shape" | "Belong";

export type ApproachStep = {
  verb: ApproachVerb;
  description: string;
  imageSrc?: string;
};

export type ApproachContent = {
  label: string;
  steps: ApproachStep[];
};

/** Step index that shows sun/wind line notes (Respond). */
export const APPROACH_LINE_NOTES_STEP_INDEX = 1;
