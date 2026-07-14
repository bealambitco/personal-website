// Career/life timeline, newest first.
export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Started Corporate Trainer role",
    detail: "18 Data & AI courses delivered (Prompt Engineering, SQL, Python, Power BI, BigQuery), 5.2/6 avg rating.",
  },
  {
    year: "2024",
    title: "Started Data and AI Consultant (self-employed)",
    detail: "Data modelling, engineering, and business analysis for a global consulting firm; grew a high-performing Data & AI team.",
  },
  {
    year: "2024",
    title: "Won BSP-IFC Open Finance PH Hackathon",
    detail: "#1 with Pensyon PH — a retirement planning solution built on Open API and GenAI.",
  },
  {
    year: "2019–2024",
    title: "Data & Analytics Head (3 yrs) · Risk Manager (2 yrs), ATRAM",
    detail: "Pioneered the Data & Analytics team, built the firm's Azure data warehouse, and saved $2.25M with an AML screening tool.",
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
