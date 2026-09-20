"use client";

import { JournalCard } from "@/components/sections/journal/journal-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { JournalEntry } from "@/types/journal";

type JournalFilmstripProps = {
  entries: JournalEntry[];
};

export function JournalFilmstrip({ entries }: JournalFilmstripProps) {
  const reduceMotion = usePrefersReducedMotion();
  const snapClassName = reduceMotion ? undefined : "snap-start";

  return (
    <div
      className={`overflow-x-auto overscroll-x-contain pb-2 ${
        reduceMotion ? "" : "snap-x snap-mandatory"
      }`}
      tabIndex={0}
      aria-label="Journal entries"
    >
      <div className="flex w-max gap-grid px-gutter">
        {entries.map((entry) => (
          <JournalCard
            key={entry.slug}
            entry={entry}
            snapClassName={snapClassName}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </div>
  );
}
