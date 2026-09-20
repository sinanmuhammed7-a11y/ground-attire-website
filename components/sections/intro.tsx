import Link from "next/link";
import { Fragment } from "react";

import { Button } from "@/components/ui/button";
import { getHomeContent } from "@/lib/home";

export function Intro() {
  const { intro } = getHomeContent();

  return (
    <section aria-labelledby="intro-statement" className="py-section">
      <div className="container-page grid-layout">
        <div className="col-span-4 flex flex-col items-center text-center md:col-span-4 md:col-start-2 lg:col-span-6 lg:col-start-4">
          <p className="type-label text-muted-foreground">{intro.eyebrow}</p>

          {/* The studio statement is the page's h1 */}
          <h1 id="intro-statement" className="type-statement text-foreground mt-8 md:mt-10">
            {intro.statement.map((part, i) =>
              part.emphasis ? (
                <em key={i}>{part.text}</em>
              ) : (
                <Fragment key={i}>{part.text}</Fragment>
              ),
            )}
          </h1>

          <Button asChild size="lg" className="mt-10 md:mt-12">
            <Link href={intro.cta.href}>{intro.cta.label}</Link>
          </Button>

        </div>
      </div>
    </section>
  );
}
