import { Reveal } from "@/components/ui/Reveal";
import type { EducationEntry } from "@/data/types";

export function EducationItem({ entry, index }: { entry: EducationEntry; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="relative pl-10 sm:pl-14">
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-1">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-secondary shadow-[0_0_0_4px_rgba(155,140,255,0.15)]" />
      </span>
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-primary sm:text-xl">{entry.degree}</p>
            <p className="mt-1 text-sm font-medium text-accent-secondary">{entry.institution}</p>
          </div>
          <p className="text-sm text-text-secondary">{entry.period}</p>
        </div>
        {(entry.result || entry.notes) && (
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            {entry.result && (
              <span className="rounded-full border border-border px-3 py-1 font-medium text-text-primary">
                {entry.result}
              </span>
            )}
            {entry.notes && <span>{entry.notes}</span>}
          </div>
        )}
      </div>
    </Reveal>
  );
}
