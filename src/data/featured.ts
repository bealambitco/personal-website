import type { LinkItem } from "./link-item";

export type FeaturedItem = LinkItem;

// Outputs you want to spotlight: talks, articles, videos, press — anything
// that lives outside this site for now. Add/remove objects freely — having
// several entries with the same `kind` is expected, FilterableList groups
// and lets a visitor filter/sort them.
//
// Years marked "approx." in a comment weren't given an exact date — fix
// once you know it.
export const featured: FeaturedItem[] = [
  {
    // this page has no og:image (confirmed — checked its raw HTML), so
    // pointing at the article's own real editorial photo instead of
    // leaving it blank
    kind: "Press",
    title: "Featured in Microsoft's coverage of ATRAM's Azure rollout",
    description: "Quoted as Head of Data & Analytics at ATRAM on tackling data quality and governance challenges.",
    href: "https://news.microsoft.com/en-ph/2023/03/17/atram-enhances-data-management-and-connectivity-with-microsoft-solutions-unlocks-more-investment-opportunities-for-filipinos/",
    imageUrl: "https://msftstories.thesourcemediaassets.com/sites/436/2023/03/CLO18_bankCoworkers_001-scaled.jpg",
    date: "Mar 2023",
    year: 2023,
  },
  {
    kind: "Project",
    title: "BSP-IFC Open Finance PH: winning hackathon project",
    description: "#1 at the BSP-IFC Open Finance Philippines Hackathon, 2024, with Pensyon PH, a retirement planning solution built on Open API and GenAI.",
    href: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaDisp.aspx?ItemId=7225",
    date: "2024",
    year: 2024,
  },
  {
    kind: "Press",
    title: "BSP coverage of the Open Finance PH Hackathon win",
    description: "Official BSP write-up of the BSP-IFC Open Finance Philippines Hackathon.",
    href: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaDisp.aspx?ItemId=7225",
    date: "2024",
    year: 2024,
  },
  {
    kind: "Press",
    title: "Bilyonaryo coverage: Pensyon PH named top innovation",
    description: "Coverage of BSP's Open Finance initiative naming Pensyon PH the top innovation.",
    href: "https://bilyonaryo.com/2024/08/23/bsps-open-finance-initiative-retirement-app-pensyon-ph-emerges-as-top-innovation/technology/",
    date: "2024",
    year: 2024,
  },
  {
    // approx. — exact 2025 date not given
    kind: "Talk",
    title: "Judge, Gen AI Philippines Hackathon 2025",
    description: "Judged entries at the Gen AI Philippines Hackathon.",
    href: "https://www.facebook.com/genaicom/photos/122205606494255386/",
    date: "2025",
    year: 2025,
  },
  {
    kind: "Talk",
    // "PJDSC" left unexpanded — didn't want to guess the full name you didn't spell out
    title: "Judge, UP PJDSC 2025 Final Round",
    description: "Judged the final round.",
    href: "https://www.facebook.com/pjdsc.updssoc/posts/pfbid0b64zEHv7RRj4LAoE6nKz89YVpnp3hD2uT5cVjMRPTSEzDdJrj7NhEeR1SZLXrHMtl",
    date: "2025",
    year: 2025,
  },
  {
    // approx. — exact 2025 date not given
    kind: "Talk",
    title: "Guest speaker, Bulacan State University",
    description: "Spoke on data and AI in practice.",
    href: "https://www.facebook.com/share/p/1BmyvKFDfS/",
    date: "2025",
    year: 2025,
  },
  {
    // approx. — exact 2025 date not given. Its auto-fetched LinkedIn image
    // didn't render reliably once deployed (LinkedIn's CDN links aren't
    // stable outside their own site — same problem as Facebook's), so
    // this stays text-only rather than ship something broken.
    kind: "Talk",
    title: "Guest speaker, University of Perpetual Help System Laguna",
    description: "TechCon session on data journeys and AI.",
    href: "https://www.linkedin.com/posts/bea-lambitco_techcon-datajourney-ai-activity-7323866333983449088-s1Lr",
    date: "2025",
    year: 2025,
  },
  {
    kind: "Article",
    title: "Why relationships and service to others matter more than money",
    description: "Guest piece for Tiny Buddha on connection, kindness, and purpose over material wealth.",
    href: "https://tinybuddha.com/blog/why-relationships-and-service-to-others-matter-more-than-money/",
  },
  {
    // couldn't verify the exact mention (page blocked automated access) — confirm wording
    kind: "Press",
    title: "Featured in Ateneo Math's 2026 SOSE Open House coverage",
    description: "",
    href: "https://www.ateneo.edu/news/2026/05/ateneo-math-welcomes-future-2026-sose-open-house",
    date: "2026",
    year: 2026,
  },
];
