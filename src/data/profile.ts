// Core identity — edit freely, everything on the homepage reads from here.
export const profile = {
  // `name` is the short everyday form (nav, page titles); `displayName` is
  // what the Hero headline shows; `fullName` keeps the FRM designation for
  // anywhere a formal citation is wanted.
  name: "Bea Lambitco",
  displayName: "Bea Charmelyn T. Lambitco",
  fullName: "Bea Charmelyn T. Lambitco, FRM",
  title: "Data & AI Consultant · Trainer · Speaker",
  location: "Manila, Philippines",

  // TODO: confirm which address you want published — this is the one
  // from your brand board. Swap for your preferred public inbox.
  email: "bealambitco@yahoo.com",

  // Shown next to your photo. Keep it to 2-3 sentences — this is the
  // "who is this person" summary.
  tagline:
    "Data and AI expertise built in financial services. I help teams turn analytics and automation into clear, measurable business outcomes.",

  // One tight paragraph — this sits right under the tagline in the compact
  // hero block, above your credentials and achievements. Keep it short on
  // purpose; it's a summary, not the full story.
  //
  // Opening two sentences are a deliberate rewrite of a more generic "most
  // organizations don't have an AI problem" framing — that line is a
  // consulting cliché everyone in this space uses, so it was replaced with
  // a claim that's actually specific to you (built it, not just advised on
  // it). Everything from "My work closes that gap" onward follows the
  // wording you gave directly.
  about:
    "I have built Data and AI capability from the inside, not just advised on it from the outside. That is where most engagements fall short: the technology gets built, but the clarity, alignment, and prioritization needed to connect it to real business value rarely keep pace. My work closes that gap. I have spent years in banking and asset management, engaging directly in the work, and pioneering and leading a data and analytics function from the ground up. Currently, I provide consultancy to organizations, train working professionals, and speak at industry events, all with the objective of simplifying and democratizing data and AI to enable more individuals and teams to utilize these tools.",

  // `url` is optional — set it to a verification link (Credly, Microsoft
  // Learn, GARP, Coursera, etc.) and the chip becomes a link that opens it
  // in a new tab. Leave it out and the chip stays plain text.
  credentials: [
    { label: "FRM · Certified Financial Risk Manager", url: "https://my.garp.org/DigitalBadgeFRM?id=0031W0000210o7kQAA" },
    {
      // was "Azure Data Engineer Associate" — that credential has since
      // expired (see the Certification entries in experience.ts), so this
      // chip now points at the still-current AZ-900 badge instead under a
      // generic label rather than naming a lapsed credential up top.
      label: "Microsoft Certified",
      url: "https://www.credly.com/badges/81d5d309-c853-4233-9df9-1f9dfb89568d/public_url",
    },
    { label: "BSP-IFC Hackathon Winner 2024", url: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaDisp.aspx?ItemId=7225" },
    { label: "Ateneo de Manila · Magna Cum Laude", url: "" },
  ],

  // Proof points. Keep this list short — these are the numbers that back
  // up the claims above, not a full résumé.
  stats: [
    { value: "5 yrs", label: "Data & Risk leadership", detail: "Data & Analytics Head + Risk Manager" },
    { value: "19", label: "Courses delivered", detail: "5.2/6 average trainer rating" },
    { value: "#1", label: "Hackathon winner", detail: "BSP-IFC Open Finance PH · 2024" },
    { value: "Top 30", label: "of 1,986 graduates", detail: "Ateneo de Manila · Magna Cum Laude" },
  ],

  // Path to your photo inside /public.
  photo: "/photo.jpg",
  photoAlt: "Portrait of Bea Lambitco",
};
