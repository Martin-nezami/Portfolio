import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-20 pb-16">
      <p className="mb-3 text-sm text-black/50 dark:text-white/50">{profile.location}</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-black/60 dark:text-white/60">{profile.role}</p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
        {profile.tagline}
      </p>
      <div className="mt-8 flex gap-4 text-sm font-medium">
        <a
          href="#work"
          className="rounded-full bg-black px-5 py-2.5 text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2.5 transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
