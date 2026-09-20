import Link from "next/link";

import { SelectedWorkTile } from "@/components/sections/selected-work/selected-work-tile";
import { getSelectedProjects } from "@/lib/projects";

const FILTER_LABELS = ["All", "Residential", "Hospitality"] as const;

export async function SelectedWork() {
  const projects = await getSelectedProjects();
  const countLabel = String(projects.length).padStart(2, "0");

  const [opener, second, third, pause] = projects;

  return (
    <section aria-labelledby="selected-work-heading" className="py-section">
      <div className="container-page space-y-12 md:space-y-16 lg:space-y-20">
        <header className="space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h2
              id="selected-work-heading"
              className="font-heading text-h3 text-foreground text-balance"
            >
              Selected work
            </h2>
            <p className="type-label text-muted-foreground">({countLabel})</p>
          </div>
          <p className="type-label text-muted-foreground" aria-hidden>
            {FILTER_LABELS.map((label, i) => (
              <span key={label}>
                {i > 0 ? " · " : null}
                <span className={label === "All" ? "text-foreground" : undefined}>
                  {label}
                </span>
              </span>
            ))}
          </p>
        </header>

        {opener ? (
          <SelectedWorkTile
            project={opener}
            index={1}
            aspectClassName="aspect-[2/1] w-full"
          />
        ) : null}

        {second && third ? (
          <div className="grid-layout items-start">
            <SelectedWorkTile
              project={second}
              index={2}
              aspectClassName="aspect-[3/4] w-full"
              className="col-span-4 md:col-span-3 lg:col-span-5"
            />
            <SelectedWorkTile
              project={third}
              index={3}
              aspectClassName="aspect-[3/2] w-full"
              className="col-span-4 md:col-span-3 md:col-start-4 md:mt-24 lg:col-span-5 lg:col-start-8 lg:mt-24"
            />
          </div>
        ) : null}

        {pause ? (
          <SelectedWorkTile
            project={pause}
            index={4}
            aspectClassName="aspect-[5/2] w-full"
            className="pt-4 md:pt-8"
          />
        ) : null}

        <div className="flex justify-end pt-2">
          <Link href="/projects" className="type-label text-foreground link-underline">
            All projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
