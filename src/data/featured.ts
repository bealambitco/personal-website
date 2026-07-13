import type { LinkItem } from "./link-item";

export type FeaturedItem = LinkItem;

// Outputs you want to spotlight: talks, articles, videos, press — anything
// that lives outside this site for now. Add/remove objects freely — having
// several entries with the same `kind` is expected (e.g. three "Talk"
// entries), FilterableList groups and lets a visitor filter/sort them.
//
// TODO: these are example entries across a few kinds/years so the
// grouping + year filter has something to show — replace with your real
// talks/articles/videos/press.
export const featured: FeaturedItem[] = [
  {
    kind: "Talk",
    title: "Practical AI for finance teams who need real outcomes",
    description: "From reporting friction to better workflows, controls, and decision support.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2026",
    year: 2026,
  },
  {
    kind: "Talk",
    title: "AI in Finance: separating hype from what actually ships",
    description: "A practitioner's take, delivered at a regional fintech meetup.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2025",
    year: 2025,
  },
  {
    kind: "Talk",
    title: "Data foundations before AI ambitions",
    description: "Why most AI initiatives fail on data quality, not model choice.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024",
    year: 2024,
  },
  {
    kind: "Project",
    title: "BSP-IFC Open Finance PH — winning hackathon project",
    description: "#1 at the BSP-IFC Open Finance Philippines Hackathon, 2024.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024",
    year: 2024,
  },
  // To feature a video with an inline player, uncomment and fill in a real
  // video ID — `embedUrl` must use YouTube's /embed/ URL form, not /watch.
  // (Kept commented out: a placeholder ID renders a broken black frame to
  // visitors, which is worse than no video at all.)
  // {
  //   kind: "Video",
  //   title: "Talk title",
  //   description: "One line on what the talk covers.",
  //   href: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  //   date: "2025",
  //   year: 2025,
  // },
  {
    kind: "Article",
    title: "AI in Finance: where the value actually is",
    description: "Real applications — fraud detection, credit scoring, report automation — with results, not theory.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2025",
    year: 2025,
  },
  {
    kind: "Press",
    title: "Featured in [Publication name]",
    description: "One line on what the piece covered.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024",
    year: 2024,
  },
];
