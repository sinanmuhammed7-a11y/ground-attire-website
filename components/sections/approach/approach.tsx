import { ApproachClient } from "@/components/sections/approach/approach-client";
import { getApproachContent } from "@/lib/approach";

export async function Approach() {
  const content = await getApproachContent();
  return <ApproachClient content={content} />;
}
