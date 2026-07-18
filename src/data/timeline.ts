// Career/life timeline, newest first. Deliberately terse — one line per
// era, headline only. The specifics (which firms, which tools, which
// numbers) belong in experience.ts instead; don't let this list drift
// back into repeating Experience almost verbatim.
export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Founded independent Data & AI consulting and training practice",
  },
  {
    year: "2019–2024",
    title: "Pioneered and led ATRAM's Data & Analytics function",
  },
  {
    year: "2023–2024",
    title: "Built an AI-based learning management system at Aralin",
  },
  {
    year: "2017–2019",
    title: "Built credit risk analytics capabilities at Maybank Philippines",
  },
  {
    year: "2016–2017",
    title: "Master of Applied Mathematics, Ateneo de Manila",
  },
  {
    year: "2012–2016",
    title: "BS Applied Mathematics, Ateneo de Manila (Magna Cum Laude)",
  },
];
