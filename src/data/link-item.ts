// Shared shape for any "link card" list on the site: Featured, Experience,
// Volunteer Work, and (mapped from posts) Latest Articles / topic pages.
// One type here means CardList and the filter/sort UI work the same way
// everywhere, regardless of which section renders them.
export type LinkItem = {
  title: string;
  // Optional — leave it out for a terse entry (e.g. a certification) that
  // doesn't need a summary line.
  description?: string;
  // Optional — leave it out for an entry with no public/verifiable source
  // (e.g. a college-org role, a childhood award). Renders as plain text
  // instead of a clickable card.
  href?: string;
  // Free text — each section defines its own conventional values, e.g.
  // Featured uses "Talk" | "Article" | "Video" | "Press" | "Project";
  // Experience uses "Project" | "Teaching" | "Leadership" | "Training".
  // Always shown on the card itself.
  kind: string;
  // Optional — when several different `kind`s should still share one
  // FilterableList section heading (e.g. "Talk" and "Competition" both
  // filed under an "Events" heading), set this to the shared heading name.
  // Defaults to `kind` when not set, so most entries never need it.
  group?: string;
  // Short display text, e.g. "2024" or "Mar 2026" — shown next to `kind`.
  date?: string;
  // The actual number used for year filtering/sorting. Set this whenever
  // you set `date`, even though `date` is what's displayed.
  year?: number;
  // YouTube "/embed/" URL (or any iframe-able page) — shows an inline
  // preview above the card. See featured.ts for an example.
  embedUrl?: string;
  // A reviewed, self-hosted image imported from src/assets/ — e.g.
  //   import depPhoto from "../assets/volunteer/dep-2024.jpg";
  //   { ..., image: depPhoto }
  // Importing (rather than pointing at a /public URL) is what lets Astro
  // compress, resize, and emit width/height for it. Ignored if embedUrl is set.
  image?: ImageMetadata;
  tags?: string[];
  // Marks a certification as lapsed — dims the card, adds an "Expired"
  // label, and sorts it after non-expired entries within its kind group.
  expired?: boolean;
};
