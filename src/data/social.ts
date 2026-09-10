import type { SocialLink } from "./types";

/**
 * Only verified links are populated. Add LinkedIn/others here once
 * confirmed — do not invent handles.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/saiejadhav2108-commits",
    icon: "github",
    verified: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/saie-jadhav-359882309",
    icon: "linkedin",
    verified: true,
  },
  {
    label: "Email",
    href: "mailto:saie.jadhav2108@gmail.com",
    icon: "mail",
    verified: true,
  },
];
