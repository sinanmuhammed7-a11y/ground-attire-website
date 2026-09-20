# Project: [site name]
[What the site is, e.g. portfolio for an architecture studio]. Next.js App Router, TypeScript, Tailwind. Sanity CMS later.

## Structure
- app/ → routes (projects/, projects/[slug]/)
- lib/ → data functions (getProjects, getProject), the only place that talks to data/CMS
- types/ → shared types (Project)
- data/ → temporary fake content
- components/ → reusable UI

## Current status
- Done: projects list + detail pages, fake CMS layer
- Next: homepage, contact page, Sanity

## Notes
- Slug is always a plain string
- Colors: [primary color], fonts: [font]
