import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        02 · Experience
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Hands-on work, applied in code.
      </h2>

      <div className="mt-10 flex flex-col gap-8">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.org}`}
            className="grid gap-1 border-b border-line pb-8 last:border-0 sm:grid-cols-[120px_1fr] sm:gap-6"
          >
            <p className="text-sm text-muted">{item.period}</p>
            <div>
              <h3 className="font-medium text-ink">
                {item.role} · {item.org}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
