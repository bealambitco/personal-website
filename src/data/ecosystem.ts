export type EcosystemStatus = "live" | "comingSoon" | "hidden";

export type EcosystemLink = {
  label: string;
  href: string;
  status: EcosystemStatus;
};

export const ecosystemLinks: EcosystemLink[] = [
  {
    label: "Research",
    href: "https://research.bealambitco.com",
    status: "live",
  },
  {
    label: "Library",
    href: "https://library.bealambitco.com",
    status: "live",
  },
];

export function getVisibleEcosystemLinks(links: EcosystemLink[] = ecosystemLinks) {
  return links.filter((link) => link.status !== "hidden");
}

export function getLiveEcosystemLinks(links: EcosystemLink[] = ecosystemLinks) {
  return links.filter((link) => link.status === "live");
}
