import { credibility } from "@/data/content";

export default function Credibility() {
  return (
    <section
      className="border-y border-line bg-surface-soft"
      aria-label="Technical focus and evidence"
    >
      <div className="mx-auto max-w-4xl px-6 py-10">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          {credibility.eyebrow}
        </p>
        <h2 className="mt-2 text-lg font-medium text-ink">{credibility.heading}</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {credibility.focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-xl border border-line bg-surface px-4 py-3"
            >
              <p className="text-sm font-medium text-ink">{area.title}</p>
              <p className="mt-1 text-xs text-muted">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {credibility.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
