// Career/life timeline, newest first. Title = the role/degree header (kept
// stable); detail = one short line underneath. Keep the detail terse — the
// specifics (which firms, which tools, which numbers) belong in
// experience.ts instead; don't let this drift back into repeating
// Experience almost verbatim.
export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Data and AI Consultant/Corporate Trainer (Self-employed)",
    detail: "Founded independent Data & AI consulting and training practice.",
  },
  {
    year: "2019–2024",
    title: "Data & Analytics Head (3 yrs) · Risk Manager (2 yrs), ATRAM",
    detail: "Pioneered and led ATRAM's Data & Analytics function.",
  },
  {
    year: "2023–2024",
    title: "Software Engineer Consultant, Aralin",
    detail: "Built an AI-based learning management system at Aralin.",
  },
  {
    year: "2017–2019",
    title: "Credit Risk Portfolio Analytics Officer, Maybank Philippines",
    detail: "Built credit risk analytics capabilities at Maybank Philippines.",
  },
  {
    year: "2016–2017",
    title: "Master of Applied Mathematics, Major in Mathematical Finance",
    detail: "Ateneo de Manila.",
  },
  {
    year: "2012–2016",
    title: "BS Applied Mathematics, with Specialization in Mathematical Finance",
    detail: "Ateneo de Manila, Magna Cum Laude.",
  },
];
