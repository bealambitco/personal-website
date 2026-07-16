import { resourcePillars } from "./pillars";

const resourcePillarIds = resourcePillars.map((p) => p.id) as [string, ...string[]];

// Curated links, each tagged with a pillar (same taxonomy as Writing — see
// pillars.ts) so the Resources page and nav dropdown can group them the
// same way topics are grouped. Add a new one by copying an object below;
// `pillar` must match an id in pillars.ts with "resources" in its sections.
export type Resource = {
  pillar: (typeof resourcePillarIds)[number];
  label: string;
  href: string;
  note?: string;
};

export const resources: Resource[] = [
  { pillar: "data", label: "BigQuery", href: "https://cloud.google.com/bigquery", note: "Data warehousing" },
  { pillar: "data", label: "dbt", href: "https://www.getdbt.com/", note: "Data transformation/modeling" },
  { pillar: "ai", label: "Anthropic docs", href: "https://docs.anthropic.com", note: "Claude & API reference" },
  { pillar: "risk", label: "GARP FRM Program", href: "https://www.garp.org/frm", note: "Risk certification" },
  { pillar: "tools", label: "Power BI", href: "https://powerbi.microsoft.com", note: "Reporting & dashboards" },
  { pillar: "math", label: "3Blue1Brown", href: "https://www.3blue1brown.com/", note: "Visual math intuition" },
  { pillar: "finance", label: "BSP Open Finance", href: "https://www.bsp.gov.ph/", note: "Regulatory reference" },
  { pillar: "career", label: "So Good They Can't Ignore You", href: "https://calnewport.com/books/", note: "Career capital, not passion-chasing" },
  { pillar: "wellness", label: "Headspace", href: "https://www.headspace.com/", note: "Meditation" },
  { pillar: "life", label: "Reading list", href: "https://www.goodreads.com/", note: "What I'm reading" },
];
