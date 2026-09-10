import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";
import { SkillGroup } from "./SkillGroup";

const legend = [
  { label: "Comfortable With", dot: "bg-accent" },
  { label: "Working With", dot: "bg-accent-secondary" },
  { label: "Learning", dot: "bg-text-secondary" },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="04" title="Skills" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
              Tools she reaches for, honestly labeled.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4">
              {legend.map((entry) => (
                <span key={entry.label} className="flex items-center gap-2 text-xs text-text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${entry.dot}`} />
                  {entry.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillGroup key={category.id} category={category} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}
