import type { Achievement } from "./types";

export const achievements: Achievement[] = [
  {
    id: "nec-runner-up",
    title: "Second Runner-Up",
    issuer: "National Entrepreneurship Challenge (NEC), IIT Bombay",
    period: "2024 & 2025",
    category: "competition",
    description:
      "Placed second runner-up across successive cycles of a national-level entrepreneurship challenge hosted by IIT Bombay.",
    priority: "primary",
    verified: true,
  },
  {
    id: "wec-runner-up",
    title: "Second Runner-Up",
    issuer: "Regional Western Entrepreneurship Challenge (WEC), KITCOEK",
    category: "competition",
    description:
      "Second runner-up at the regional Western Entrepreneurship Challenge hosted by KITCOEK.",
    priority: "primary",
    verified: true,
  },
  {
    id: "leadership-commendation",
    title: "Leadership Commendation",
    issuer: "E-Cell & CSESA, GCOE Kolhapur",
    category: "leadership",
    description:
      "Formally recognized for distinguished service as Corporate Relations Head at E-Cell and Executive Board Member at CSESA.",
    priority: "secondary",
    verified: true,
  },
  {
    id: "cert-web-dev",
    title: "Web Development Masterclass",
    issuer: "Udemy",
    category: "certification",
    description:
      "Specialization in fluid responsive grid design and modern DOM manipulation.",
    priority: "secondary",
    verified: true,
  },
  {
    id: "cert-java-dbms",
    title: "Core Java & Database Management Systems",
    issuer: "Lokare Infotech",
    category: "certification",
    description:
      "Immersive focus on OOP design patterns and complex relational query writing.",
    priority: "secondary",
    verified: true,
  },
  {
    id: "cert-c-cpp",
    title: "C & C++ Programming Professional Certification",
    issuer: "Disha Institute",
    category: "certification",
    description: "Professional certification in C and C++ programming.",
    priority: "secondary",
    verified: true,
  },
];
