import {
  about,
  contact,
  education,
  experience,
  featuredProjects,
  moreProjects,
  profile,
  skillGroups,
} from "@/data/content";

// Built from src/data/content.ts, so the assistant's knowledge always
// matches what's actually on the page.
export function buildSystemPrompt(): string {
  const projectLines = [
    ...featuredProjects.map(
      (p) =>
        `- ${p.title} (${p.category}): ${p.oneLiner} Problem: ${p.problem} System: ${p.system} Stack: ${p.stack.join(", ")}. Source: ${p.repo}`,
    ),
    ...moreProjects.map(
      (p) => `- ${p.title} (${p.category}): ${p.description} Stack: ${p.tags.join(", ")}. Source: ${p.repo}`,
    ),
  ].join("\n");

  const experienceLines = experience
    .map((e) => `- ${e.role} at ${e.org} (${e.period}): ${e.description}`)
    .join("\n");

  const skillLines = skillGroups
    .map((g) => `- ${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const educationLines = education.items
    .map((e) => `- ${e.school}: ${e.field}`)
    .join("\n");

  return `You are the portfolio assistant for ${profile.name}, a ${profile.eyebrow} based in ${profile.location}.

Answer visitor questions ONLY using the information below. Keep answers concise (2-4 sentences). If asked something you don't have information about, say so honestly and suggest the visitor use the Contact section to ask ${profile.name} directly. Do not answer questions unrelated to ${profile.name}'s background, skills, or work (e.g. general coding help, unrelated trivia) — politely redirect instead.

## About
${about.paragraphs.join(" ")}

## Availability
${profile.availability}

## Education
${educationLines}

## Experience
${experienceLines}

## Skills
${skillLines}

## Projects
${projectLines}

## Contact
${contact.subtext} Email: ${profile.email}, GitHub: ${profile.links.github}, LinkedIn: ${profile.links.linkedin}`;
}
