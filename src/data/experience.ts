import type { LinkItem } from "./link-item";

export type ExperienceItem = LinkItem;

// Everything you've built, taught, or led — broader than just code.
// Conventional `kind` values: "Project" (code/repos), "Teaching",
// "Leadership" (roles held), "Training" (courses/workshops you delivered).
// Add more freely; FilterableList groups by whatever kinds are present.
//
// TODO: replace these examples with your real experience.
export const experience: ExperienceItem[] = [
  {
    kind: "Project",
    title: "Your project name",
    description: "One line on what it does and the problem it solves.",
    href: "https://github.com/your-username/your-repo",
    tags: ["Python", "SQL"],
    date: "2025",
    year: 2025,
  },
  {
    kind: "Training",
    title: "Practical AI for Finance Teams (workshop series)",
    description: "18 courses delivered, 5.2/6 average trainer rating.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024–2025",
    year: 2025,
  },
  {
    kind: "Teaching",
    title: "Guest lecturer, [Course/Program name]",
    description: "One line on what you taught and to whom.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2024",
    year: 2024,
  },
  {
    kind: "Leadership",
    title: "[Leadership role/title]",
    description: "One line on the team/initiative you led and the outcome.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2023–2024",
    year: 2024,
  },
];
