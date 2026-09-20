import Image from "next/image";

import { formatJournalDate, formatJournalTheme } from "@/lib/journal-utils";
import type { JournalEntry, JournalFilmstripWidth } from "@/types/journal";

const FILMSTRIP_WIDTH_CLASSES: Record<JournalFilmstripWidth, string> = {
  sm: "w-36",
  md: "w-48 md:w-52",
  lg: "w-56 md:w-64",
  xl: "w-64 md:w-80",
};

type JournalCardProps = {
  entry: JournalEntry;
  snapClassName?: string;
  reduceMotion?: boolean;
};

export function JournalCard({
  entry,
  snapClassName,
  reduceMotion = false,
}: JournalCardProps) {
  const widthClass = FILMSTRIP_WIDTH_CLASSES[entry.filmstripWidth];

  return (
    <article className={`shrink-0 ${widthClass} ${snapClassName ?? ""}`}>
      <div
        className={`border-border relative h-44 overflow-hidden border bg-muted md:h-52 lg:h-56 ${
          reduceMotion ? "" : "transition-transform duration-500 ease-out hover:scale-[1.02]"
        }`}
      >
        <Image
          src={entry.image.src}
          alt={entry.image.alt}
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>
      <div className="mt-3 md:mt-4">
        <p className="type-label text-foreground">{formatJournalTheme(entry.theme)}</p>
        <p className="type-label text-muted-foreground mt-1">
          {formatJournalDate(entry.publishedAt)}
        </p>
      </div>
    </article>
  );
}
