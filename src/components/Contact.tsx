import { contact, profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase">
        05 · Contact
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {contact.heading}
      </h2>
      <p className="mt-3 max-w-md text-muted">{contact.subtext}</p>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent px-5 py-2.5 text-canvas transition-opacity hover:opacity-90"
        >
          Email me
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line-strong px-5 py-2.5 text-ink-soft transition-colors hover:border-accent hover:text-ink"
        >
          LinkedIn
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line-strong px-5 py-2.5 text-ink-soft transition-colors hover:border-accent hover:text-ink"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
