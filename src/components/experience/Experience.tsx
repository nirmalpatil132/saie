import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="02" title="Experience" />
        <Reveal>
          <h2 className="mt-10 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Where I've applied what I'm learning.
          </h2>
        </Reveal>

        <div className="relative mt-14 space-y-6">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:left-2 sm:block" />
          {experience.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
