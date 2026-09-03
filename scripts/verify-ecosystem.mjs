import assert from "node:assert/strict";
import {
  ecosystemLinks,
  getEcosystemLink,
  getLiveEcosystemLinks,
  getVisibleEcosystemLinks,
} from "../src/data/ecosystem.ts";

const fixtures = [
  { id: "hub", label: "Live", href: "https://live.example.com", status: "live" },
  { id: "research", label: "Soon", href: "https://soon.example.com", status: "comingSoon" },
  { id: "library", label: "Hidden", href: "https://hidden.example.com", status: "hidden" },
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

assert.equal(getEcosystemLink("research", fixtures)?.label, "Soon", "lookup by id should find the entry");
assert.equal(getEcosystemLink("hub", []), undefined, "lookup should be undefined when absent");

// Every real entry needs a unique id and an https URL, since Services.astro
// and verify-site.mjs both address them by id.
const ids = ecosystemLinks.map((link) => link.id);
assert.equal(new Set(ids).size, ids.length, "ecosystem ids must be unique");
for (const link of ecosystemLinks) {
  assert.ok(link.href.startsWith("https://"), `${link.id} must use https`);
}

console.log("Ecosystem status verification passed.");
