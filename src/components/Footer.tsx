import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto max-w-3xl px-6 py-10 text-sm text-black/40 dark:text-white/40">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
    </footer>
  );
}
