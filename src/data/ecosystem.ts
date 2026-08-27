// Destinations in the wider bealambitco ecosystem, shown in the nav
// Ecosystem menu, the footer, and (for the hub) the Services CTA.
//
// `status` is the release gate. A destination stays "comingSoon" until its
// DNS resolves and it actually serves a page — see scripts/verify-site.mjs,
// which fetches every "live" entry and fails the build if one doesn't
// return 200. Flip an entry to "live" only after that check passes.
export type EcosystemStatus = "live" | "comingSoon" | "hidden";

// Stable key for looking an entry up from a component, so a label can be
// reworded without breaking the lookup (see Services.astro).
export type EcosystemId = "hub" | "research" | "library";

export type EcosystemLink = {
  id: EcosystemId;
  label: string;
  href: string;
  status: EcosystemStatus;
};

export const ecosystemLinks: EcosystemLink[] = [
  { id: "hub", label: "Consulting", href: "https://hub.bealambitco.com", status: "live" },
  { id: "research", label: "Research", href: "https://research.bealambitco.com", status: "live" },
  { id: "library", label: "Library", href: "https://library.bealambitco.com", status: "live" },
];

export function getVisibleEcosystemLinks(links: EcosystemLink[] = ecosystemLinks) {
  return links.filter((link) => link.status !== "hidden");
}

export function getLiveEcosystemLinks(links: EcosystemLink[] = ecosystemLinks) {
  return links.filter((link) => link.status === "live");
}

export function getEcosystemLink(id: EcosystemId, links: EcosystemLink[] = ecosystemLinks) {
  return links.find((link) => link.id === id);
}
