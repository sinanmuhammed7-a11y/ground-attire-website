import { JournalFilmstrip } from "@/components/sections/journal/journal-filmstrip";
import { getJournalContent } from "@/lib/journal";

export async function Journal() {
  const { title, lead, scrollHint, entries } = await getJournalContent();

  return (
    <section aria-labelledby="journal-heading" className="py-section">
      <div className="container-page space-y-8 md:space-y-10">
        <header className="space-y-4 md:space-y-5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h2
              id="journal-heading"
              className="font-heading text-h3 text-foreground text-balance"
            >
              {title}
            </h2>
            <p className="type-label text-muted-foreground">{scrollHint}</p>
          </div>
          <div className="max-w-2xl space-y-2">
            <p className="text-body-lg text-foreground">{lead[0]}</p>
            <p className="text-body-lg text-muted-foreground">{lead[1]}</p>
          </div>
        </header>
      </div>

      <div className="-mx-gutter mt-8 md:mt-10">
        <JournalFilmstrip entries={entries} />
      </div>
    </section>
  );
}
