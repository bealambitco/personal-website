import logoBilyonaryo from "../assets/logos/bilyonaryo.png";
import previewAteneoOpenHouse from "../assets/previews/ateneo-open-house.png";
import previewBsp from "../assets/previews/bsp.jpg";
import previewMicrosoftAtram from "../assets/previews/microsoft-atram.jpg";
import previewTinyBuddha from "../assets/previews/tiny-buddha.png";
import type { LinkItem } from "./link-item";

export type FeaturedItem = LinkItem;

// Outputs you want to spotlight: talks, articles, videos, press — anything
// that lives outside this site for now. Add/remove objects freely — having
// several entries with the same `kind` is expected, FilterableList groups
// and lets a visitor filter/sort them.
export const featured: FeaturedItem[] = [
  {
    kind: "Press",
    title: "ATRAM's data transformation with Microsoft",
    description: "Contributed as Head of Data & Analytics to ATRAM's Azure data platform and governance work, featured in Microsoft's case coverage.",
    href: "https://news.microsoft.com/en-ph/2023/03/17/atram-enhances-data-management-and-connectivity-with-microsoft-solutions-unlocks-more-investment-opportunities-for-filipinos/",
    image: previewMicrosoftAtram,
    date: "Mar 2023",
    year: 2023,
  },
  {
    kind: "Project",
    title: "BSP-IFC Open Finance PH: winning hackathon project",
    description: "#1 at the BSP-IFC Open Finance Philippines Hackathon, 2024, with Pensyon PH, a retirement planning solution built on Open API and GenAI.",
    href: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaDisp.aspx?ItemId=7225",
    image: previewBsp,
    date: "2024",
    year: 2024,
  },
  {
    kind: "Press",
    title: "News coverage: Pensyon PH wins the BSP-IFC Open Finance PH Hackathon",
    description: "Bilyonaryo's report on Pensyon PH, the winning retirement-planning solution in BSP's Open Finance initiative.",
    href: "https://bilyonaryo.com/2024/08/23/bsps-open-finance-initiative-retirement-app-pensyon-ph-emerges-as-top-innovation/technology/",
    image: logoBilyonaryo,
    date: "2024",
    year: 2024,
  },
  {
    // Judging, not speaking, so it's
    // filed as "Competition" — both this and the speaking engagements
    // below share the "Events" group heading (see `group` in link-item.ts).
    kind: "Competition",
    group: "Events",
    title: "Judge, Gen AI Philippines Hackathon 2025",
    description: "Judged entries at the Gen AI Philippines Hackathon.",
    href: "https://www.facebook.com/genaicom/photos/122205606494255386/",
    date: "Nov 2025",
    year: 2025,
  },
  {
    kind: "Competition",
    group: "Events",
    title: "Judge, UP PJDSC 2025 Final Round",
    description: "Judged the final round of the Philippine Junior Data Science Challenge.",
    href: "https://www.facebook.com/pjdsc.updssoc/posts/pfbid0b64zEHv7RRj4LAoE6nKz89YVpnp3hD2uT5cVjMRPTSEzDdJrj7NhEeR1SZLXrHMtl",
    date: "2025",
    year: 2025,
  },
  {
    kind: "Talk",
    group: "Events",
    title: "Workshop facilitator, Bulacan State University",
    description: "Delivered a workshop on Data & AI in finance.",
    href: "https://www.facebook.com/share/p/1BmyvKFDfS/",
    date: "Mar 2026",
    year: 2026,
  },
  {
    kind: "Talk",
    group: "Events",
    title: "Guest speaker, University of Perpetual Help System Laguna",
    description: "Shared my data and AI journey with students at TechCon.",
    href: "https://www.linkedin.com/posts/bea-lambitco_techcon-datajourney-ai-activity-7323866333983449088-s1Lr",
    date: "Apr 2025",
    year: 2025,
  },
  {
    kind: "Article",
    title: "Why relationships and service to others matter more than money",
    description: "Guest piece for Tiny Buddha on connection, kindness, and purpose over material wealth.",
    href: "https://tinybuddha.com/blog/why-relationships-and-service-to-others-matter-more-than-money/",
    image: previewTinyBuddha,
    date: "Nov 2024",
    year: 2024,
  },
  {
    kind: "Press",
    title: "Ateneo Math's 2026 SOSE Open House coverage",
    description: "Coverage from Ateneo de Manila University's Department of Mathematics.",
    href: "https://www.ateneo.edu/news/2026/05/ateneo-math-welcomes-future-2026-sose-open-house",
    image: previewAteneoOpenHouse,
    date: "2026",
    year: 2026,
  },
];
