import { profile } from "@/data/content";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-xs font-medium text-ink">
            {profile.initials}
          </span>
          <span className="hidden text-sm text-ink-soft sm:inline">
            {profile.name} <span className="text-muted">· {profile.eyebrow}</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-muted">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="transition-colors hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-90 sm:inline-block"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
