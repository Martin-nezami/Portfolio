import { profile } from "@/data/content";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/60">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-medium tracking-tight">
          {profile.name}
        </a>
        <ul className="flex gap-6 text-sm text-black/60 dark:text-white/60">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="transition-colors hover:text-black dark:hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
