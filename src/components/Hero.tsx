import { profile, heroTrace } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-16">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {profile.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-lg text-xl leading-snug text-ink-soft">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            {profile.subtext}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{profile.location}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              {profile.availability}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-canvas transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line-strong px-5 py-2.5 text-ink-soft transition-colors hover:border-accent hover:text-ink"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line-strong px-5 py-2.5 text-ink-soft transition-colors hover:border-accent hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_28px_90px_#00000047]">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="tracking-wide uppercase">{heroTrace.label}</span>
            <span className="font-mono text-muted-deep">{heroTrace.filename}</span>
          </div>

          <p className="mt-4 text-base font-medium text-ink">{heroTrace.heading}</p>
          <p className="mt-1 text-sm text-muted">{heroTrace.subheading}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {heroTrace.steps.map((step, i) => (
              <span
                key={step}
                className="rounded-md border border-line-strong bg-surface-raised px-2.5 py-1 font-mono text-xs text-ink-soft"
              >
                {String(i + 1).padStart(2, "0")} {step}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-line bg-surface-soft p-4 font-mono text-xs leading-relaxed">
            {heroTrace.logLines.map((line) => (
              <div key={line.step} className="flex items-center justify-between text-ink-soft">
                <span>
                  <span className="text-muted-deep">{line.step}</span> {line.text}
                </span>
                <span className="text-cyan">{line.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
