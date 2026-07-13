// The content pillars for the future writing/apps hub. Each becomes a page
// at /topics/<id>. Add a new pillar by adding an object here — no other
// file needs to change. Posts are matched to a pillar by the `pillar`
// field in their frontmatter (see src/content/posts/_template.md).
export type Pillar = {
  id: string;
  label: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    id: "ai",
    label: "AI",
    description:
      "Practical AI applications in finance, and honest takes on what the technology can and can't do.",
  },
  {
    id: "data",
    label: "Data",
    description:
      "Pipelines, governance, and the unglamorous data foundations that make AI work at all.",
  },
  {
    id: "risk",
    label: "Risk",
    description: "Financial risk management, from an FRM lens.",
  },
  {
    id: "ph-finance",
    label: "PH Finance",
    description:
      "BSP regulations, the Philippine fintech landscape, and digital transformation in local finance.",
  },
  {
    id: "tools",
    label: "Tools & Tutorials",
    description: "Hands-on guides in SQL, Python, Power BI, and BigQuery.",
  },
  {
    id: "math",
    label: "Math",
    description: "The quantitative foundations behind the models.",
  },
  {
    id: "career",
    label: "Career",
    description: "Lessons from building a career across finance, risk, and AI.",
  },
  {
    id: "life",
    label: "Life",
    description: "Personal essays outside of work.",
  },
  {
    id: "wellness",
    label: "Wellness",
    description: "Balance, mental health, and sustaining a demanding career.",
  },
];
