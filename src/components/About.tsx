import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-black/40 uppercase dark:text-white/40">
        About
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-black/70 dark:text-white/70">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
