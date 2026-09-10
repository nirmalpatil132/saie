import { Reveal } from "@/components/ui/Reveal";
import type { SkillCategory } from "@/data/types";
import { SkillChip } from "./SkillChip";

export function SkillGroup({ category, delay = 0 }: { category: SkillCategory; delay?: number }) {
  return (
    <Reveal delay={delay} className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-7">
      <p className="font-display text-base font-semibold text-text-primary">{category.title}</p>
      <p className="mt-1 text-sm text-text-secondary">{category.description}</p>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </Reveal>
  );
}
