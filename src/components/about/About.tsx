import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { aboutStats, currentFocus } from "@/data/profile";
import { IdentityRow } from "./IdentityRow";

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="01" title="About" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Building with curiosity, thinking like a researcher.
            </h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <p className="text-balance text-lg leading-relaxed text-text-secondary">
                Saie is a Computer Science Engineering student who likes problems that need
                structure before they need code — mapping out a data flow, sketching a UML
                model, or defining a taxonomy before a single line is written. That instinct
                shows up across her project work, from full-stack builds to a final-year
                research project on deceptive interface design.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-balance text-lg leading-relaxed text-text-secondary">
                She's equally comfortable behind a keyboard and in front of a room —
                having led corporate outreach for her college's Entrepreneurship Cell and
                coordinated cross-functional teams for campus-wide tech events. That mix of
                technical depth and people-facing leadership is what she brings to every
                team she joins.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
                  {currentFocus.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {currentFocus.items.map((focusItem) => (
                    <li key={focusItem} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {focusItem}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <IdentityRow />

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-lg font-semibold text-text-primary">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
