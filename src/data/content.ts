// Edit this file to update your portfolio content — no need to touch component code.

export const profile = {
  name: "Your Name",
  role: "Your Role / Title",
  tagline:
    "A one-sentence pitch: what you build, who it's for, and what makes your approach different.",
  location: "City, Country",
  email: "you@example.com",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "/resume.pdf",
  },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Short description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Postgres"],
    highlight: "Key metric or outcome, e.g. \"10k+ users\" or \"40% faster\"",
    repo: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and the problem it solves.",
    tags: ["Python", "FastAPI", "React"],
    highlight: "Key metric or outcome",
    repo: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "Short description of what this project does and the problem it solves.",
    tags: ["Machine Learning", "PyTorch"],
    highlight: "Key metric or outcome",
    repo: "https://github.com/yourusername/project-three",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Job Title",
    org: "Company / Organization",
    period: "Mon Year – Present",
    description:
      "One or two lines on what you did and the impact you had in this role.",
  },
  {
    role: "Previous Job Title",
    org: "Previous Company",
    period: "Mon Year – Mon Year",
    description:
      "One or two lines on what you did and the impact you had in this role.",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React / Next.js",
  "Python",
  "Node.js",
  "SQL",
  "Docker",
];

export const about = {
  paragraphs: [
    "A couple of sentences about your background — how you got into this field and what you focus on now.",
    "A couple of sentences about how you like to work, what you value in projects, or what you're currently exploring.",
  ],
};
