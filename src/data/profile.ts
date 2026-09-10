export const profile = {
  name: "Saie Jadhav",
  firstName: "Saie",
  title: "Computer Science Engineer",
  location: "Kolhapur, Maharashtra, India",
  eyebrow: "Computer Science • Builder • Researcher",
  tagline: "I turn ideas into thoughtful digital experiences.",
  summary:
    "I'm a Computer Science Engineering student and aspiring full-stack developer, working across responsive interfaces, backend fundamentals, and structured software documentation — with a growing focus on research-driven, AI-aware systems.",
  roles: [
    "Software Developer",
    "Problem Solver",
    "Researcher",
    "Project Collaborator",
  ],
  email: "saie.jadhav2108@gmail.com",
  /** Real asset present at /Saie-Jadhav-Resume.pdf (sourced from her CV). */
  resumeAvailable: true,
  resumeHref: "/Saie-Jadhav-Resume.pdf",
} as const;

export const currentFocus = {
  heading: "Currently",
  items: [
    "Completing a B.Tech in Computer Science & Engineering at Government College of Engineering, Kolhapur.",
    "Contributing to a final-year research project on detecting deceptive UI patterns.",
    "Sharpening full-stack fundamentals — from responsive frontends to relational data design.",
  ],
} as const;

export const identityStatements = [
  {
    id: "build",
    label: "Build",
    description:
      "I ship responsive, well-structured interfaces and backend logic grounded in object-oriented fundamentals.",
  },
  {
    id: "research",
    label: "Research",
    description:
      "I enjoy taxonomy work, requirement analysis, and turning ambiguous problems into structured investigations.",
  },
  {
    id: "learn",
    label: "Learn",
    description:
      "I treat every project — coursework or personal — as a chance to close a specific skill gap.",
  },
  {
    id: "collaborate",
    label: "Collaborate",
    description:
      "I've led cross-functional teams and coordinated multi-person projects from requirements to demo.",
  },
] as const;

/** Only factually supported, non-numeric-fabrication stats. */
export const aboutStats = [
  { label: "Computer Science", value: "B.Tech, 2023–2027" },
  { label: "Team Projects", value: "Group & solo builds" },
  { label: "Research", value: "Final-year UI research" },
  { label: "Leadership", value: "Corporate Relations Head, E-Cell" },
] as const;
