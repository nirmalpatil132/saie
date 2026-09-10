import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="font-display text-sm font-medium text-accent">{index}</span>
      <span className="h-px w-8 bg-border-strong" />
      <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
        {title}
      </span>
    </div>
  );
}
