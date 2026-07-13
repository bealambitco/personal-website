// Outputs you want to spotlight: talks, articles, videos, press — anything
// that lives outside this site for now. Add/remove objects freely.
// `href` can point anywhere (LinkedIn, YouTube, a conference page, etc).
//
// Optional `embedUrl`: set this to show an inline preview above the link
// instead of just text — for a YouTube video, use the "embed" URL form,
// e.g. https://www.youtube.com/embed/VIDEO_ID (not the regular watch URL).
// Any other iframe-able page URL works too (e.g. a live demo site).
export type FeaturedItem = {
  title: string;
  description: string;
  href: string;
  kind: "Talk" | "Article" | "Video" | "Press" | "Project";
  date?: string;
  embedUrl?: string;
};

// TODO: replace with your real links — these are placeholders so the
// section has something to render.
export const featured: FeaturedItem[] = [
  {
    kind: "Project",
    title: "BSP-IFC Open Finance PH — winning hackathon project",
    description: "#1 at the BSP-IFC Open Finance Philippines Hackathon, 2024.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024",
  },
  {
    kind: "Talk",
    title: "Practical AI for finance teams who need real outcomes",
    description: "From reporting friction to better workflows, controls, and decision support.",
    href: "https://www.linkedin.com/in/bea-lambitco",
  },
  {
    kind: "Video",
    title: "Example: how to embed a YouTube talk here",
    description: "Delete this once you have a real video — embedUrl is what renders the inline player above (use the /embed/ URL form, not the regular watch link).",
    href: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  },
  {
    kind: "Article",
    title: "AI in Finance: where the value actually is",
    description: "Real applications — fraud detection, credit scoring, report automation — with results, not theory.",
    href: "https://www.linkedin.com/in/bea-lambitco",
  },
];
