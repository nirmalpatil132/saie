import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages used across coursework and projects.",
    skills: [
      { name: "Java", level: "comfortable" },
      { name: "Python", level: "comfortable" },
      { name: "C++", level: "comfortable" },
      { name: "C", level: "comfortable" },
      { name: "JavaScript (ES6+)", level: "working" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    skills: [
      { name: "HTML5", level: "working" },
      { name: "CSS3", level: "working" },
      { name: "Bootstrap", level: "working" },
      { name: "Responsive Web Design", level: "working" },
    ],
  },
  {
    id: "backend-fundamentals",
    title: "Backend & Fundamentals",
    description: "Object-oriented design and algorithmic foundations.",
    skills: [
      { name: "Object-Oriented Programming", level: "comfortable" },
      { name: "Data Structures & Algorithms", level: "comfortable" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational data modeling and query design.",
    skills: [
      { name: "DBMS", level: "comfortable" },
      { name: "Relational Databases", level: "comfortable" },
    ],
  },
  {
    id: "architecture-docs",
    title: "Architecture & Documentation",
    description: "Structured specification and modeling before code.",
    skills: [
      { name: "Software Requirement Specifications", level: "comfortable" },
      { name: "Data Flow Diagrams", level: "comfortable" },
      { name: "UML", level: "comfortable" },
      { name: "Web System Architecture", level: "working" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Day-to-day development environment.",
    skills: [
      { name: "Git", level: "working" },
      { name: "GitHub", level: "working" },
      { name: "IntelliJ IDEA", level: "working" },
      { name: "Visual Studio Code", level: "working" },
      { name: "Linux Foundations", level: "learning" },
    ],
  },
  {
    id: "research",
    title: "Research & Workflow",
    description: "Grounded in her final-year research project on deceptive UI.",
    skills: [
      { name: "Taxonomy & Classification", level: "working" },
      { name: "Requirements Analysis", level: "working" },
      { name: "Annotation & Behavioural Validation", level: "working" },
      { name: "Agile SDLC", level: "working" },
      { name: "Technical Documentation", level: "comfortable" },
    ],
  },
];
