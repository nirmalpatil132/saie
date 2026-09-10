import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/types";
import { ProjectCoverArt } from "./ProjectCoverArt";
import { StatusBadge } from "./StatusBadge";

export function FeaturedProject({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <Reveal className="group">
      <div
        className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Link
          to={`/projects/${project.slug}`}
          className="relative block overflow-hidden rounded-2xl border border-border"
        >
          <div className="aspect-[3/2] overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.04]">
              <ProjectCoverArt project={project} className="h-full w-full" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 font-display text-sm font-medium text-text-primary">
              View case study <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>

        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-medium text-accent">{project.index}</span>
            <StatusBadge status={project.status} />
          </div>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary transition-colors hover:text-accent sm:text-4xl">
              {project.title}
            </h3>
          </Link>

          <p className="mt-4 text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
            {project.thesis}
          </p>

          {project.collaboration && (
            <p className="mt-3 text-sm italic text-text-muted">{project.collaboration}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-text-primary transition-colors hover:text-accent"
            >
              Read full case study <ArrowUpRight size={15} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                <GithubIcon size={15} /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
