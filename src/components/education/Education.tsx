import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/data/education";
import { EducationItem } from "./EducationItem";

export function Education() {
  return (
    <section id="education" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="05" title="Education" />
        <Reveal>
          <h2 className="mt-10 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Her academic path so far.
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-6">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:left-2 sm:block" />
          {education.map((entry, i) => (
            <EducationItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
