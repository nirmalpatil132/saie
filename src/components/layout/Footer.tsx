import { Mail } from "lucide-react";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <Container className="flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-text-primary">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 max-w-sm text-sm text-text-secondary">{profile.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            if (!Icon) return null;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </Container>
      <Container className="flex flex-col items-center justify-between gap-2 border-t border-border py-6 text-xs text-text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Designed &amp; built with intention.</p>
      </Container>
    </footer>
  );
}
