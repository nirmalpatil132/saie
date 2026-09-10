import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects, miniProjects, supportingProjects } from "@/data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { ProjectArchiveItem } from "./ProjectArchiveItem";

export function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="03" title="Projects" />
        <Reveal>
          <h2 className="mt-10 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            What I've built and researched.
          </h2>
        </Reveal>

        {/* Featured */}
        <div className="mt-20 space-y-28">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* Supporting */}
        <div className="mt-28">
          <Reveal>
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
              Supporting Projects
            </h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {supportingProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.08} />
            ))}
          </div>
        </div>

        {/* Mini / archive */}
        {miniProjects.length > 0 && (
          <div className="mt-24">
            <Reveal>
              <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">
                Mini &amp; Learning Projects
              </h3>
            </Reveal>
            <div className="mt-4">
              {miniProjects.map((project) => (
                <ProjectArchiveItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
