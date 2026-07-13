// Social/contact links shown in the footer and contact section.
// Add or remove entries freely — rendered as plain text links, Karpathy-style.
export type SocialLink = {
  label: string;
  href: string;
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:bealambitco@yahoo.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bea-lambitco" },
  // TODO: replace with your real GitHub profile — Experience.astro reads
  // this entry by label to build its "See code on GitHub" link.
  { label: "GitHub", href: "https://github.com/your-username" },
  // TODO: replace with your real Calendly (or other scheduling) link.
  { label: "Book a time", href: "https://calendly.com/your-handle" },
  // TODO: add more as you set them up, e.g.
  // { label: "YouTube", href: "https://youtube.com/@..." },
  // { label: "X", href: "https://x.com/..." },
  // { label: "Substack", href: "https://....substack.com" },
];
