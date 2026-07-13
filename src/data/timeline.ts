// Career/life timeline, newest first. Every entry needs a `year` —
// several below are placeholders (marked TODO) since exact dates weren't
// available when this was generated. Fill in the real years and this
// section is done.
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
    year: "TODO",
    title: "Certified Financial Risk Manager (FRM)",
  },
  {
    year: "TODO",
    title: "Microsoft Azure AI Engineer certification",
  },
  {
    year: "TODO",
    title: "Built AML screening tool at ATRAM",
    detail: "$2.25M in cost savings, 90% reduction in report prep time.",
  },
  {
    year: "TODO",
    title: "Delivered 18 training courses",
    detail: "5.2/6 average trainer rating.",
  },
  {
    year: "TODO",
    title: "Graduated Ateneo de Manila University, Magna Cum Laude",
  },
];
