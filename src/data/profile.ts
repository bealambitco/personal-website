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
    "Finance-native data and AI expertise. I help financial institutions turn analytics and automation into clear, measurable outcomes.",

  // One tight paragraph — this sits right under the tagline in the compact
  // hero block, above your credentials and achievements. Keep it short on
  // purpose; it's a summary, not the full story.
  about:
    "Most PH finance teams don't have an AI problem — they have a clarity, workflow, and prioritisation problem. I've sat on both sides of that gap: inside a financial institution building the data and AI capability, and now helping other teams do the same through consulting, training, and speaking.",

  credentials: [
    "FRM · Certified Financial Risk Manager",
    "Microsoft Azure AI Engineer",
    "BSP-IFC Hackathon Winner 2024",
    "Ateneo de Manila · Magna Cum Laude",
  ],

  // Proof points. Keep this list short — these are the numbers that back
  // up the claims above, not a full résumé.
  stats: [
    { value: "$2.25M", label: "Cost saved", detail: "AML screening tool · ATRAM" },
    { value: "90%", label: "Time reduction", detail: "Report prep time · ATRAM" },
    { value: "18", label: "Courses delivered", detail: "5.2/6 avg trainer rating" },
    { value: "#1", label: "Hackathon winner", detail: "BSP-IFC Open Finance PH · 2024" },
  ],

  // Path to your photo inside /public. This is a placeholder monogram —
  // drop your real portrait in public/ (e.g. public/photo.jpg) and change
  // this to "/photo.jpg" to replace it.
  photo: "/photo.svg",
  photoAlt: "Portrait of Bea Lambitco",
};
