import type { LinkItem } from "./link-item";

export type VolunteerItem = LinkItem;

// Unpaid community contributions — separate from Experience (paid work,
// projects, teaching) so it doesn't get lost in that list.
export const volunteer: VolunteerItem[] = [
  {
    kind: "Volunteer",
    title: "Moderator, Data Engineering Pilipinas (DEP)",
    description: "Helped build DEP's open learning program; volunteered at partner events as judge, speaker, mentor, and organizer.",
    href: "https://dataengineering.ph/leaders.html",
    date: "2024–present",
    year: 2024,
  },
  {
    kind: "Mentor",
    title: "Mentor — Women in Big Data, FTW Foundation, KadaKareer",
    description: "Mentored students and professionals on their data career growth.",
    href: "https://app.kadakareer.com/coaches/bealambitco27",
    date: "2023–present",
    year: 2023,
  },
];
