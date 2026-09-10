import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 font-body text-xs font-medium text-text-secondary transition-colors duration-300 hover:border-accent/50 hover:text-text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
