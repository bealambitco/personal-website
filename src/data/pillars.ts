// The topic taxonomy shared by the Writing hub and the Resources page.
//
// `group` controls the 3-column layout used in the nav mega-menus and on
// /resources: "Technical" (hard skills), "Industry" (sector/domain
// knowledge), "Life" (career/personal).
//
// `sections` controls where a pillar appears: "writing" puts it in the
// Writing mega-menu, /topics, and the posts schema; "resources" puts it in
// the Resources mega-menu and /resources. Most pillars are in both. Add a
// new pillar by adding an object here — no other file needs to change.
// Posts/resources are matched by their `pillar` field.
export type PillarGroup = "Technical" | "Industry" | "Life";
export type PillarSection = "writing" | "resources";

export type Pillar = {
  id: string;
  label: string;
  description: string;
  group: PillarGroup;
  sections: PillarSection[];
};

export const pillarGroups: PillarGroup[] = ["Technical", "Industry", "Life"];

export const pillars: Pillar[] = [
  {
    id: "ai",
    label: "AI",
    description:
      "Practical AI applications, and honest takes on what the technology can and can't do.",
    group: "Technical",
    sections: ["writing", "resources"],
  },
  {
    id: "data",
    label: "Data",
    description:
      "Pipelines, governance, tools, and the unglamorous data foundations that make AI work at all.",
    group: "Technical",
    sections: ["writing", "resources"],
  },
  {
    id: "math",
    label: "Math",
    description: "The quantitative foundations behind the models.",
    group: "Technical",
    sections: ["writing", "resources"],
  },
  {
    id: "risk",
    label: "Risk",
    description: "Financial risk management, from an FRM lens.",
    group: "Technical",
    sections: ["writing", "resources"],
  },
  {
    id: "finance",
    label: "Finance",
    description:
      "BSP regulations, the Philippine fintech landscape, and the wider world of finance.",
    group: "Industry",
    sections: ["writing", "resources"],
  },
  {
    id: "education",
    label: "Education",
    description: "Teaching, training, and learning, from the classroom to corporate upskilling.",
    group: "Industry",
    sections: ["writing", "resources"],
  },
  {
    id: "life",
    label: "General",
    description: "Personal essays and everything that doesn't fit a neater box.",
    group: "Life",
    sections: ["writing", "resources"],
  },
  {
    id: "career",
    label: "Career",
    description: "Lessons from building a career across finance, risk, and AI.",
    group: "Life",
    sections: ["writing", "resources"],
  },
  {
    id: "wellness",
    label: "Wellness",
    description: "Balance, mental health, and sustaining a demanding career.",
    group: "Life",
    sections: ["writing", "resources"],
  },
];

export const writingPillars = pillars.filter((p) => p.sections.includes("writing"));
export const resourcePillars = pillars.filter((p) => p.sections.includes("resources"));
