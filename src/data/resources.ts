// Curated links: tools, books, courses, dashboards — whatever you want to
// point visitors to. Grouped under a `category` heading.
export type Resource = {
  category: string;
  items: { label: string; href: string; note?: string }[];
};

// TODO: replace with your actual recommendations.
export const resources: Resource[] = [
  {
    category: "Tools",
    items: [
      { label: "Power BI", href: "https://powerbi.microsoft.com", note: "Reporting & dashboards" },
      { label: "BigQuery", href: "https://cloud.google.com/bigquery", note: "Data warehousing" },
    ],
  },
  {
    category: "Learning",
    items: [
      { label: "GARP FRM Program", href: "https://www.garp.org/frm", note: "Risk certification" },
    ],
  },
];
