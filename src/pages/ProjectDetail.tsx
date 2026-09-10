import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectCoverArt } from "@/components/projects/ProjectCoverArt";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { getProjectBySlug, projects } from "@/data/projects";

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
        <p className="font-display text-sm font-medium uppercase tracking-[0.15em] text-accent">{label}</p>
        <div className="max-w-3xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const { content } = project;
  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <article className="py-28 sm:py-32">
      <Container>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-display text-sm font-medium text-accent">{project.index}</span>
          <StatusBadge status={project.status} />
          <span className="text-sm text-text-muted">{project.category}</span>
        </div>

        <Reveal>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-6xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary sm:text-xl">
            {project.thesis}
          </p>
        </Reveal>

        {project.collaboration && (
          <Reveal delay={0.12}>
            <p className="mt-3 text-sm italic text-text-muted">{project.collaboration}</p>
          </Reveal>
        )}

        <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center gap-4">
          {project.github && (
            <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="secondary">
              <GithubIcon size={16} /> Source Code
            </Button>
          )}
          {project.demo && (
            <Button as="a" href={project.demo} target="_blank" rel="noreferrer" variant="primary">
              Live Demo <ArrowUpRight size={16} />
            </Button>
          )}
        </Reveal>

        <Reveal delay={0.2} className="mt-14 overflow-hidden rounded-2xl border border-border">
          <ProjectCoverArt project={project} className="aspect-[16/9] w-full" />
        </Reveal>

        <div className="mt-16">
          {content.problem && <DetailBlock label="Problem">{content.problem}</DetailBlock>}
          {content.approach && <DetailBlock label="Approach">{content.approach}</DetailBlock>}
          {content.role && <DetailBlock label="My Role">{content.role}</DetailBlock>}
          {content.howItWorks && <DetailBlock label="How It Works">{content.howItWorks}</DetailBlock>}

          <Reveal className="border-t border-border py-10">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
              <p className="font-display text-sm font-medium uppercase tracking-[0.15em] text-accent">
                Key Features
              </p>
              <ul className="max-w-3xl space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-base leading-relaxed text-text-secondary">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="border-t border-border py-10">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr]">
              <p className="font-display text-sm font-medium uppercase tracking-[0.15em] text-accent">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          </Reveal>

          {content.challenges && <DetailBlock label="Challenges">{content.challenges}</DetailBlock>}
          {content.learning && <DetailBlock label="Learning">{content.learning}</DetailBlock>}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-24 border-t border-border pt-16">
            <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
              More Projects
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <div>
                    <p className="font-display text-lg font-medium text-text-primary transition-colors group-hover:text-accent">
                      {p.shortTitle}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{p.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}
