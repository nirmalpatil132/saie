import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";
import { ContactForm } from "./ContactForm";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail };

export function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="07" title="Contact" />

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
                Let's build something meaningful.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-text-secondary">
                I'm open to internships, collaborative projects, and conversations about research,
                development, or entrepreneurship. Reach out directly — I read everything.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 space-y-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon as keyof typeof iconMap];
                  if (!Icon) return null;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon === "mail" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-colors duration-300 hover:border-accent/40"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors group-hover:border-accent group-hover:text-accent">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="font-display text-sm font-medium text-text-primary">{link.label}</p>
                        <p className="text-xs text-text-muted">
                          {link.icon === "mail" ? profile.email : link.href.replace("https://", "")}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
