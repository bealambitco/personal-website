import { profile } from "./profile";

// Social/contact links shown in the footer and contact section.
// Add or remove entries freely — rendered as plain text links, Karpathy-style.
export type SocialLink = {
  label: string;
  href: string;
};

export const socials: SocialLink[] = [
  // Derived from profile.email so there is one source of truth for the
  // public address — changing it there (e.g. to admin@bealambitco.com once
  // that mailbox is live) updates the Hero, Contact, and footer together.
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bea-lambitco" },
  // Experience.astro reads this entry by label to build its
  // "See code on GitHub" link.
  { label: "GitHub", href: "https://github.com/bealambitco" },
  // When you have a real scheduling link, add it back like this and it
  // reappears in Contact automatically (Contact.astro lists it by label):
  // { label: "Book a time", href: "https://calendly.com/<your-real-handle>" },
];
