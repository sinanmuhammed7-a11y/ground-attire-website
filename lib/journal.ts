import journalContent from "@/data/journal";
import type { JournalContent } from "@/types/journal";

export async function getJournalContent(): Promise<JournalContent> {
  const sortedEntries = [...journalContent.entries].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return {
    ...journalContent,
    entries: sortedEntries,
  };
}
