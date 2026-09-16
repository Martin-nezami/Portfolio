import { skillGroups } from "@/data/content";

export default function Capabilities() {
  return (
    <section className="border-y border-line bg-surface-soft">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs font-medium tracking-widest text-muted uppercase">
          03 · Capabilities
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Tools grouped by the work they support.
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-muted-deep">{group.number}</p>
              <p className="mt-1 font-medium text-ink">{group.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-surface-raised px-3 py-1 text-xs text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
