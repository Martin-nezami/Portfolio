import { projects } from "@/data/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-black/40 uppercase dark:text-white/40">
        Work
      </h2>
      <div className="mt-6 flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/20 dark:border-white/10 dark:hover:border-white/20"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium">{project.title}</h3>
              {project.highlight && (
                <span className="text-sm text-black/50 dark:text-white/50">
                  {project.highlight}
                </span>
              )}
            </div>
            <p className="mt-2 text-black/70 dark:text-white/70">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black/60 dark:hover:text-white/60"
                >
                  Repo
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-black/60 dark:hover:text-white/60"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
