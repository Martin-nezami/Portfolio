import { about, education, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">04 · About</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {profile.headline}
      </h2>

      <div className="mt-6 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="flex flex-col gap-4 text-ink-soft">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-accent hover:text-ink"
          >
            Download CV
          </a>
        </div>

        <div>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            Education
          </p>
          <div className="mt-3 flex flex-col gap-4">
            {education.items.map((item) => (
              <div key={item.school}>
                <p className="font-medium text-ink">{item.school}</p>
                <p className="text-sm text-muted">{item.field}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
