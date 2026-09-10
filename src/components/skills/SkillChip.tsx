import type { Skill } from "@/data/types";
import { cn } from "@/lib/utils";

const levelLabel: Record<Skill["level"], string> = {
  working: "Working With",
  comfortable: "Comfortable With",
  learning: "Learning",
  exploring: "Exploring",
};

const levelDot: Record<Skill["level"], string> = {
  comfortable: "bg-accent",
  working: "bg-accent-secondary",
  learning: "bg-text-secondary",
  exploring: "border border-text-muted",
};

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div
      className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
      tabIndex={0}
    >
      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", levelDot[skill.level])} />
      <span className="font-body text-sm font-medium text-text-primary">{skill.name}</span>

      <span
        role="tooltip"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-xs text-text-secondary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {levelLabel[skill.level]}
      </span>
    </div>
  );
}
