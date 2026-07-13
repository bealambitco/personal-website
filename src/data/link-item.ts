// Shared shape for any "link card" list on the site: Featured, Experience,
// Volunteer Work, and (mapped from posts) Latest Articles / topic pages.
// One type here means CardList and the filter/sort UI work the same way
// everywhere, regardless of which section renders them.
export type LinkItem = {
  title: string;
  description: string;
  href: string;
  // Free text — each section defines its own conventional values, e.g.
  // Featured uses "Talk" | "Article" | "Video" | "Press" | "Project";
  // Experience uses "Project" | "Teaching" | "Leadership" | "Training".
  kind: string;
  // Short display text, e.g. "2024" or "Mar 2026" — shown next to `kind`.
  date?: string;
  // The actual number used for year filtering/sorting. Set this whenever
  // you set `date`, even though `date` is what's displayed.
  year?: number;
  // YouTube "/embed/" URL (or any iframe-able page) — shows an inline
  // preview above the card. See featured.ts for an example.
  embedUrl?: string;
  tags?: string[];
};
