import type { FeaturedItem } from "./featured";

// Code/repo-focused work — the GitHub-portfolio section. Shares its shape
// with Featured (see featured.ts): Featured is talks/press/awards, this is
// things you built. `tags` renders as small labels under the description
// (e.g. languages/tools used). `embedUrl` works the same as in featured.ts.
export type ProjectItem = FeaturedItem & { tags?: string[] };

// TODO: replace with your real repos/projects.
export const projects: ProjectItem[] = [
  {
    kind: "Project",
    title: "Your project name",
    description: "One line on what it does and the problem it solves.",
    href: "https://github.com/your-username/your-repo",
    tags: ["Python", "SQL"],
  },
];
