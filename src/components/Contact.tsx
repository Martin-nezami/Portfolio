import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-sm font-semibold tracking-widest text-black/40 uppercase dark:text-white/40">
        Contact
      </h2>
      <p className="mt-6 max-w-md text-black/70 dark:text-white/70">
        Have a project in mind or just want to say hi? My inbox is open.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-black px-5 py-2.5 text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
        >
          Email
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/15 px-5 py-2.5 transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/15 px-5 py-2.5 transition-colors hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
