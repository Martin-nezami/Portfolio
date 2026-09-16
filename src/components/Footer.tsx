import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line-strong text-xs text-ink-soft">
            {profile.initials}
          </span>
          <span>
            {profile.name} <span className="text-muted-deep">· {profile.eyebrow}</span>
          </span>
        </div>
        <div className="flex gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
