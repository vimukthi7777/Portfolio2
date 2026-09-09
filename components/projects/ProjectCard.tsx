import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import SplitMask from "@/components/ui/SplitMask";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function PlateHeader({ index, offset }: { index: number; offset?: string }) {
  return (
    <div className="mb-6 flex items-center gap-4 border-t-2 border-foreground pt-4">
      <span className="font-mono text-sm font-bold text-accent">
        0{index + 1}
      </span>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
      <span className="eyebrow !text-muted">{offset ?? "Case plate"}</span>
    </div>
  );
}

function Figure({ project, index }: { project: Project; index: number }) {
  return (
    <figure className="group/fig">
      <div className="relative overflow-hidden border-2 border-foreground bg-paper">
        <img
          src={project.image}
          alt={`${project.title} project thumbnail`}
          width={640}
          height={400}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/fig:scale-[1.04]"
        />
        <span
          className="absolute right-3 top-3 flex size-9 items-center justify-center bg-paper font-mono text-xl text-foreground transition-colors duration-200 group-hover/fig:bg-accent group-hover/fig:text-paper"
          aria-hidden="true"
        >
          ✱
        </span>
      </div>
      <figcaption className="mt-2 flex items-center justify-between gap-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
        <span>
          Fig. 0{index + 1} — {project.title}
        </span>
        <span className="inline-flex items-center gap-1 text-accent">
          View <ArrowUpRight className="size-3" aria-hidden="true" />
        </span>
      </figcaption>
    </figure>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
      <span className="text-foreground">{project.category}</span>
      {project.stack.map((tech) => (
        <span key={tech} className="flex items-center gap-3">
          <span className="text-accent" aria-hidden="true">
            /
          </span>
          {tech}
        </span>
      ))}
    </p>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-5" data-proj-fade>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} source code on GitHub`}
        className="focus-ring group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:text-accent"
      >
        <Github className="size-4" aria-hidden="true" />
        Code
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} live demo`}
        className="focus-ring group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:text-accent"
      >
        <ExternalLink className="size-4" aria-hidden="true" />
        Live
      </a>
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const wide = index % 3 === 2;

  return (
    <article data-project-card className="py-10 sm:py-14">
      {wide ? (
        <>
          <PlateHeader index={index} offset="Wide plate" />
          <div className="group">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="focus-ring block max-h-[72vh] overflow-hidden border-2 border-foreground bg-paper"
            >
              <img
                src={project.image}
                alt={`${project.title} project thumbnail`}
                width={640}
                height={400}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </a>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <h3 className="text-display text-4xl uppercase sm:text-5xl lg:col-span-7">
              <SplitMask innerClassName="!block !text-accent">
                <span data-proj-title>{project.title}</span>
              </SplitMask>
            </h3>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted" data-proj-fade>
                {project.description}
              </p>
              <div className="mt-5" data-proj-fade>
                <Meta project={project} />
              </div>
              <div className="mt-6">
                <Links project={project} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-sm font-bold text-accent">
              0{index + 1}
            </span>
            <h3 className="text-display mt-4 text-4xl uppercase sm:text-5xl">
              <SplitMask innerClassName="!block">
                <span data-proj-title>{project.title}</span>
              </SplitMask>
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted" data-proj-fade>
              {project.description}
            </p>
            <p className="mt-6" data-proj-fade>
              <Meta project={project} />
            </p>
            <div className="mt-8">
              <Links project={project} />
            </div>
          </div>
          <div className="lg:col-span-7" data-proj-fig>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="focus-ring group block"
            >
              <Figure project={project} index={index} />
            </a>
          </div>
        </div>
      )}
    </article>
  );
}