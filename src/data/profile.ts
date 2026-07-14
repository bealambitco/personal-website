// Core identity — edit freely, everything on the homepage reads from here.
export const profile = {
  name: "Bea Lambitco",
  fullName: "Bea Charmelyn T. Lambitco, FRM",
  title: "Data & AI Consultant · Trainer · Speaker",
  location: "Cavite, Philippines",

  // TODO: confirm which address you want published — this is the one
  // from your brand board. Swap for your preferred public inbox.
  email: "bealambitco@yahoo.com",

  // Shown next to your photo. Keep it to 2-3 sentences — this is the
  // "who is this person" summary.
  tagline:
    "Finance-native data and AI expertise — turning analytics and automation into clear, measurable outcomes for financial institutions.",

  // One tight paragraph — this sits right under the tagline in the compact
  // hero block, above your credentials and achievements. Keep it short on
  // purpose; it's a summary, not the full story.
  about:
    "Most PH finance teams don't have an AI problem. They have a clarity, workflow, and prioritisation problem. I've worked both sides of that gap — building the data and AI capability inside a financial institution, and now helping other teams do the same through consulting, training, and speaking.",

  // `url` is optional — set it to a verification link (Credly, Microsoft
  // Learn, GARP, Coursera, etc.) and the chip becomes a link that opens it
  // in a new tab. Leave it out and the chip stays plain text.
  credentials: [
    { label: "FRM · Certified Financial Risk Manager", url: "https://my.garp.org/DigitalBadgeFRM?id=0031W0000210o7kQAA" },
    {
      label: "Azure Data Engineer Associate",
      url: "https://learn.microsoft.com/en-us/users/bealambitco-6128/credentials/132cc3ed72252cd0",
    },
    { label: "BSP-IFC Hackathon Winner 2024", url: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaDisp.aspx?ItemId=7225" },
    { label: "Ateneo de Manila · Magna Cum Laude", url: "" },
  ],

  // Proof points. Keep this list short — these are the numbers that back
  // up the claims above, not a full résumé.
  stats: [
    { value: "18", label: "Courses delivered", detail: "5.2/6 avg trainer rating" },
    { value: "#1", label: "Hackathon winner", detail: "BSP-IFC Open Finance PH · 2024" },
    { value: "Top 30", label: "of 1,986 graduates", detail: "Ateneo de Manila · Magna Cum Laude" },
  ],

  // Path to your photo inside /public.
  photo: "/photo.jpg",
  photoAlt: "Portrait of Bea Lambitco",
};
