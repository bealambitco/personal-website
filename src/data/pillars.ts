// The content pillars for the Writing hub, plus the Resources page (each
// resource link is tagged with one of these too — see resources.ts).
//
// `group` controls the 3-column layout used in the nav mega-menu and on
// /resources: "Technical" (hard skills), "Industry" (sector/domain
// knowledge), "Life" (career/personal). Add a new pillar by adding an
// object here — no other file needs to change. Posts/resources are matched
// to a pillar by their own `pillar` field.
export type PillarGroup = "Technical" | "Industry" | "Life";

export type Pillar = {
  id: string;
  label: string;
  description: string;
  group: PillarGroup;
};

export const pillarGroups: PillarGroup[] = ["Technical", "Industry", "Life"];

export const pillars: Pillar[] = [
  {
    id: "ai",
    label: "AI",
    description:
      "Practical AI applications in finance, and honest takes on what the technology can and can't do.",
    group: "Technical",
  },
  {
    id: "data",
    label: "Data",
    description:
      "Pipelines, governance, and the unglamorous data foundations that make AI work at all.",
    group: "Technical",
  },
  {
    id: "risk",
    label: "Risk",
    description: "Financial risk management, from an FRM lens.",
    group: "Technical",
  },
  {
    id: "math",
    label: "Math",
    description: "The quantitative foundations behind the models.",
    group: "Technical",
  },
  {
    id: "tools",
    label: "Tools & Tutorials",
    description: "Hands-on guides in SQL, Python, Power BI, and BigQuery.",
    group: "Technical",
  },
  {
    id: "ph-finance",
    label: "PH Finance",
    description:
      "BSP regulations, the Philippine fintech landscape, and digital transformation in local finance.",
    group: "Industry",
  },
  {
    id: "career",
    label: "Career",
    description: "Lessons from building a career across finance, risk, and AI.",
    group: "Life",
  },
  {
    id: "life",
    label: "Life",
    description: "Personal essays outside of work.",
    group: "Life",
  },
  {
    id: "wellness",
    label: "Wellness",
    description: "Balance, mental health, and sustaining a demanding career.",
    group: "Life",
  },
];
