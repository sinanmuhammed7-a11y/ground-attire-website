import approachContent from "@/data/approach";
import { ApproachContent } from "@/types/approach";

export async function getApproachContent(): Promise<ApproachContent> {
  return approachContent;
}
