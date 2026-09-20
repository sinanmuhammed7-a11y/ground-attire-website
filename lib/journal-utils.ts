import type { JournalTheme } from "@/types/journal";

const journalDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function formatJournalDate(isoDate: string): string {
  return journalDateFormatter.format(new Date(isoDate));
}

export function formatJournalTheme(theme: JournalTheme): string {
  return theme.charAt(0).toUpperCase() + theme.slice(1);
}
