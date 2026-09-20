export type JournalTheme = "notice" | "explore" | "make" | "believe";

export type JournalFilmstripWidth = "sm" | "md" | "lg" | "xl";

export type JournalEntry = {
  slug: string;
  theme: JournalTheme;
  publishedAt: string;
  image: {
    src: string;
    alt: string;
  };
  filmstripWidth: JournalFilmstripWidth;
};

export type JournalContent = {
  title: string;
  lead: [string, string];
  scrollHint: string;
  entries: JournalEntry[];
};
