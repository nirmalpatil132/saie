import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { ExperienceEntry } from "@/data/types";

const typeLabel: Record<ExperienceEntry["type"], string> = {
  internship: "Internship",
  leadership: "Leadership",
  activity: "Activity",
};

export function TimelineItem({ entry, index }: { entry: ExperienceEntry; index: number }) {
  return (
    <Reveal delay={index * 0.06} className="relative pl-10 sm:pl-14">
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:left-1">
        <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,107,82,0.15)]" />
      </span>

      <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-primary sm:text-xl">{entry.role}</p>
            <p className="mt-1 text-sm font-medium text-accent">{entry.organization}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">{entry.period}</p>
            {entry.location && <p className="text-xs text-text-muted">{entry.location}</p>}
          </div>
        </div>

        <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-text-muted">
          {typeLabel[entry.type]}
        </span>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">{entry.summary}</p>

        <ul className="mt-4 space-y-2">
          {entry.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
              {responsibility}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {entry.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {entry.link && (
          <a
            href={entry.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            {entry.link.label} <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </Reveal>
  );
}
