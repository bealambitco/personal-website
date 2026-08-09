import assert from "node:assert/strict";
import { getLiveEcosystemLinks, getVisibleEcosystemLinks } from "../src/data/ecosystem.ts";

const fixtures = [
  { label: "Live", href: "https://live.example.com", status: "live" },
  { label: "Soon", href: "https://soon.example.com", status: "comingSoon" },
  { label: "Hidden", href: "https://hidden.example.com", status: "hidden" },
];

assert.deepEqual(
  getVisibleEcosystemLinks(fixtures).map((link) => link.label),
  ["Live", "Soon"],
  "visible ecosystem links should include live and coming-soon destinations",
);
assert.deepEqual(
  getLiveEcosystemLinks(fixtures).map((link) => link.label),
  ["Live"],
  "footer links should include only live destinations",
);

console.log("Ecosystem status verification passed.");
