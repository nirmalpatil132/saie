import { Award, BadgeCheck, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Achievement } from "@/data/types";
import { cn } from "@/lib/utils";

const categoryIcon = {
  competition: Trophy,
  leadership: Award,
  certification: BadgeCheck,
};

export function AchievementCard({ achievement, delay = 0 }: { achievement: Achievement; delay?: number }) {
  const Icon = categoryIcon[achievement.category];
  const isPrimary = achievement.priority === "primary";

  return (
    <Reveal
      delay={delay}
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong",
        isPrimary && "sm:col-span-2 bg-gradient-to-br from-surface to-surface-elevated",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border",
          isPrimary ? "border-accent/40 text-accent" : "border-border text-text-secondary",
        )}
      >
        <Icon size={18} />
      </div>
      <p className={cn("mt-4 font-display font-semibold text-text-primary", isPrimary ? "text-xl" : "text-lg")}>
        {achievement.title}
      </p>
      <p className="mt-1 text-sm font-medium text-text-secondary">{achievement.issuer}</p>
      {achievement.period && <p className="mt-0.5 text-xs text-text-muted">{achievement.period}</p>}
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{achievement.description}</p>
    </Reveal>
  );
}
