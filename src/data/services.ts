export type Service = {
  title: string;
  description: string;
  bestFor: string;
};

export const services: Service[] = [
  {
    title: "Data & AI consulting",
    description:
      "From analytics, data modeling, and data engineering to automation, I help teams connect technical delivery to clear business outcomes.",
    bestFor: "Organizations building dependable, scalable Data & AI capabilities.",
  },
  {
    title: "Corporate training",
    description:
      "Hands-on workshops in AI and prompt engineering; data analytics with SQL, Power BI, and BigQuery; and programming with Python—designed around the work participants need to do.",
    bestFor: "Teams upskilling their people, strengthening Data and AI adoption, or building a practical learning culture.",
  },
  {
    title: "Speaking",
    description:
      "Practical sessions on Data & AI in finance, career development, and the foundations that move emerging technology beyond theory and hype into useful practice.",
    bestFor: "Industry events, professional communities, and university audiences.",
  },
];
