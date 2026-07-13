// Career/life timeline, newest first. Every entry needs a `year` —
// several below use "20XX" as a placeholder since exact dates weren't
// available when this was generated (it reads as "fill this in" without
// looking broken if you forget to). Search for "20XX" and replace with the
// real years.
export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Won BSP-IFC Open Finance PH Hackathon",
    detail: "#1 — Open Finance Philippines, hosted with the Bangko Sentral ng Pilipinas.",
  },
  {
    year: "20XX",
    title: "Certified Financial Risk Manager (FRM)",
  },
  {
    year: "20XX",
    title: "Microsoft Azure AI Engineer certification",
  },
  {
    year: "20XX",
    title: "Built AML screening tool at ATRAM",
    detail: "$2.25M in cost savings, 90% reduction in report prep time.",
  },
  {
    year: "20XX",
    title: "Delivered 18 training courses",
    detail: "5.2/6 average trainer rating.",
  },
  {
    year: "20XX",
    title: "Graduated Ateneo de Manila University, Magna Cum Laude",
  },
];
