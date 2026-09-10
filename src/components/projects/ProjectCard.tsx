import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/types";
import { ProjectCoverArt } from "./ProjectCoverArt";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <Link to={`/projects/${project.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.05]">
            <ProjectCoverArt project={project} className="h-full w-full" />
          </div>
          <span className="absolute right-4 top-4 font-display text-sm font-medium text-text-primary/70">
            {project.index}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
              {project.category}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
            {project.shortTitle}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
            View project <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
