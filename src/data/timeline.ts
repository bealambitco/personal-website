// Career/life timeline, newest first.
export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Started Corporate Trainer role & Data and AI Consultant (self-employed)",
    detail: "18 Data & AI courses delivered (5.2/6 avg rating), alongside data modelling, engineering, and business analysis for a global consulting firm.",
  },
  {
    year: "2019–2024",
    title: "Data & Analytics Head (3 yrs) · Risk Manager (2 yrs), ATRAM",
    detail: "Pioneered the Data & Analytics team, built the firm's Azure data warehouse, and saved $2.25M with an AML screening tool — capped by winning #1 at the BSP-IFC Open Finance PH Hackathon (2024) with Pensyon PH.",
  },
  {
    year: "2023–2024",
    title: "Software Engineer Consultant, Aralin",
    detail: "Built Aralin Insights, an AI-based learning system giving students personalized academic guidance.",
  },
  {
    year: "2017–2019",
    title: "Credit Risk Portfolio Analytics Officer, Maybank Philippines",
    detail: "Built a mortgage behavioral scoring model and shifted the bank to a rated IFRS 9 approach.",
  },
  {
    year: "2016–2017",
    title: "Master of Applied Mathematics, Major in Mathematical Finance",
    detail: "Ateneo de Manila University.",
  },
  {
    year: "2012–2016",
    title: "BS Applied Mathematics, Specialization in Mathematical Finance",
    detail: "Ateneo de Manila University · Magna Cum Laude, Top 30 of 1,986 graduates.",
  },
];
