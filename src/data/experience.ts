import type { LinkItem } from "./link-item";

export type ExperienceItem = LinkItem;

// Everything you've built, taught, or led — broader than just code.
// FilterableList groups by whatever `kind` values are present.
export const experience: ExperienceItem[] = [
  {
    kind: "Consulting",
    title: "Data and AI Consultant (Self-employed)",
    description: "Data modelling, engineering, and business analysis for a global consulting firm; grew a high-performing Data & AI team.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024–Present",
    year: 2024,
  },
  {
    kind: "Training",
    title: "Corporate Trainer — Data & AI workshops",
    description: "18 courses delivered (Prompt Engineering, SQL, Python, Power BI, BigQuery), 5.2/6 avg rating, 100% recommendation on Advanced SQL. Full feedback & testimonials linked below.",
    href: "https://www.canva.com/design/DAHENEVk42c/NYjPMGIoVBwRNSmK-dbUXw/edit",
    date: "2024–Present",
    year: 2024,
  },
  {
    kind: "Leadership",
    title: "Data & Analytics Head (3 yrs) · Risk Manager (2 yrs), ATRAM",
    description: "Pioneered the Data & Analytics team; led the firm's Azure data warehouse and in-house data engineering capability; saved $2.25M with an AML screening tool.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2019–2024",
    year: 2024,
  },
  {
    // TODO: swap for the real Omdena project link
    kind: "Project",
    title: "AI-Driven Chatbot for Disaster Assistance & Emergency Relief",
    description: "Omdena collaboration with DataCamp and 50 AI engineers worldwide — a proof-of-concept chatbot providing real-time guidance in disaster-affected areas.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2023–2024",
    year: 2024,
  },
  {
    // TODO: swap for the real Aralin project link
    kind: "Project",
    title: "Software Engineer Consultant, Aralin",
    description: "Built Aralin Insights, an AI-based learning system giving students personalized academic guidance.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2023–2024",
    year: 2024,
  },
  {
    kind: "Project",
    title: "Credit Risk Portfolio Analytics Officer, Maybank Philippines",
    description: "Built a mortgage behavioral scoring model and shifted the bank's PD approach to a rated IFRS 9 model.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2017–2019",
    year: 2019,
  },
  // Certifications — years below are inferred from your career timeline
  // (bootcamp before Aralin, fundamentals before the associate-level cert,
  // etc.) since exact issue dates weren't given. Double-check and correct
  // any that are off; these aren't placeholders like "20XX", so they'll
  // look right even if the year's wrong until you fix them.
  {
    kind: "Certification",
    title: "Software Development, Coding Dojo",
    description: "Software Development Bootcamp (online, part-time, accelerated).",
    href: "https://app.diplomasafe.com/en-US/diploma/d9bca34ebcea003c6e982c3b3d651673eed3e7581/software-development-online-part-time-accelerated",
    date: "2022",
    year: 2022,
  },
  {
    kind: "Certification",
    title: "SAS Certification",
    href: "https://www.credly.com/badges/684ff2b4-3f13-481f-9ab1-b32d4e60f81f/linked_in_profile",
    date: "2019",
    year: 2019,
  },
  {
    kind: "Certification",
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    href: "https://www.credly.com/badges/57111cf4-7aa2-4683-b87e-acc1c586eed1/public_url",
    date: "2022",
    year: 2022,
  },
  {
    kind: "Certification",
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    href: "https://www.credly.com/badges/d95208ca-8f45-469a-911d-59b77e0944aa/public_url",
    date: "2022",
    year: 2022,
  },
  {
    kind: "Certification",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    href: "https://www.credly.com/badges/81d5d309-c853-4233-9df9-1f9dfb89568d/public_url",
    date: "2022",
    year: 2022,
  },
  {
    // learn.microsoft.com credential pages don't expose a per-credential
    // image (confirmed), so using a self-hosted badge icon for consistency
    // with the Credly-badge cards above instead of leaving it blank
    kind: "Certification",
    title: "Microsoft Certified: Azure Data Engineer Associate",
    href: "https://learn.microsoft.com/en-us/users/bealambitco-6128/credentials/132cc3ed72252cd0",
    imageUrl: "/logos/microsoft-badge.png",
    date: "2023",
    year: 2023,
  },
  {
    kind: "Certification",
    title: "IBM Data & AI Specialization",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZAQYNX5U483A",
    date: "2023",
    year: 2023,
  },
  {
    kind: "Certification",
    title: "Microsoft AI Credential",
    href: "https://learn.microsoft.com/en-us/users/bealambitco-6128/credentials/4676fdc18a7500ba",
    imageUrl: "/logos/microsoft-badge.png",
    date: "2024",
    year: 2024,
  },
  {
    kind: "Certification",
    title: "FRM · Certified Financial Risk Manager",
    href: "https://my.garp.org/DigitalBadgeFRM?id=0031W0000210o7kQAA",
    date: "2020",
    year: 2020,
  },
];
