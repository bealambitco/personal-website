// Social/contact links shown in the footer and contact section.
// Add or remove entries freely — rendered as plain text links, Karpathy-style.
export type SocialLink = {
  label: string;
  href: string;
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:bealambitco@yahoo.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bea-lambitco" },
  // Experience.astro reads this entry by label to build its
  // "See code on GitHub" link.
  { label: "GitHub", href: "https://github.com/bealambitco" },
  { label: "YouTube", href: "https://www.youtube.com/@bealambitco" },
  { label: "TikTok", href: "https://www.tiktok.com/@bealambitco" },
  { label: "Substack", href: "https://bealambitco.substack.com/" },
  // When you have a real scheduling link, add it back like this and it
  // reappears in Contact automatically (Contact.astro lists it by label):
  // { label: "Book a time", href: "https://calendly.com/<your-real-handle>" },
];
