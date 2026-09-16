import { experience, skills } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-black/40 uppercase dark:text-white/40">
        Experience
      </h2>
      <div className="mt-6 flex flex-col gap-8">
        {experience.map((item) => (
          <div key={`${item.role}-${item.org}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {item.role} · {item.org}
              </h3>
              <span className="text-sm text-black/50 dark:text-white/50">{item.period}</span>
            </div>
            <p className="mt-1 text-black/70 dark:text-white/70">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold tracking-widest text-black/40 uppercase dark:text-white/40">
        Skills
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/70 dark:bg-white/10 dark:text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
