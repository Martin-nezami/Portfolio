import { featuredProjects, moreProjects } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        01 · Featured work
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Real projects, end to end.
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        Each project here covers the full path from raw data to an evaluated result —
        not just a model in a notebook.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-mono text-xs text-muted-deep">
                Featured project / {project.number}
              </p>
              <p className="text-xs font-medium text-accent">{project.category}</p>
            </div>

            <h3 className="mt-3 text-xl font-medium text-ink">{project.title}</h3>
            <p className="mt-1 text-ink-soft">{project.oneLiner}</p>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:text-accent-strong"
            >
              Source code
            </a>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  System
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {project.system}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium tracking-wide text-muted uppercase">
                Engineering
              </p>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {project.engineering.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-ink-soft before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-accent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-surface-raised px-3 py-1 text-xs text-ink-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          More work
        </p>
        <h3 className="mt-2 text-lg font-medium text-ink">Selected public repositories</h3>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {moreProjects.map((project) => (
            <a
              key={project.title}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <p className="text-xs font-medium text-accent">{project.category}</p>
              <p className="mt-2 font-medium text-ink">{project.title}</p>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface-raised px-2.5 py-1 text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
