import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/types";

export function ProjectArchiveItem({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-display text-sm text-text-muted">{project.index}</span>
        <div>
          <p className="font-display text-lg font-medium text-text-primary transition-colors group-hover:text-accent">
            {project.shortTitle}
          </p>
          <p className="mt-1 text-sm text-text-secondary">{project.category}</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors group-hover:text-accent">
        Explore <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
