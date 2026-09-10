import type { ProjectStatus } from "@/data/types";
import { cn } from "@/lib/utils";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  completed: { label: "Completed", className: "text-accent-secondary border-accent-secondary/40" },
  "in-progress": { label: "In Progress", className: "text-accent border-accent/40" },
  research: { label: "Research", className: "text-accent border-accent/40" },
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
