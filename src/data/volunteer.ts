import type { LinkItem } from "./link-item";

export type VolunteerItem = LinkItem;

// Unpaid community contributions — separate from Experience (paid work,
// projects, teaching) so it doesn't get lost in that list.
//
// TODO: replace with your real volunteer work, or delete this section from
// index.astro entirely if it doesn't apply.
export const volunteer: VolunteerItem[] = [
  {
    kind: "Volunteer",
    title: "[Organization name]",
    description: "One line on your role and what you contributed.",
    href: "https://www.linkedin.com/in/bea-lambitco",
    date: "2023–present",
    year: 2023,
  },
];
