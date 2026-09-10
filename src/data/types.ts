/**
 * Shared content types for the data layer.
 *
 * `verified` marks whether a field/entry comes from a confirmed source
 * (resume, certificate, or explicit brief). Unverified placeholders must
 * never be rendered as fact — UI consuming this data should branch on it.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "instagram";
  verified: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  result?: string;
  notes?: string;
  verified: boolean;
}

export type SkillLevel = "working" | "comfortable" | "learning" | "exploring";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  period: string;
  location?: string;
  type: "internship" | "leadership" | "activity";
  summary: string;
  responsibilities: string[];
  tags: string[];
  link?: { label: string; href: string };
  verified: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  period?: string;
  category: "competition" | "leadership" | "certification";
  description: string;
  priority: "primary" | "secondary";
  verified: boolean;
}

export type ProjectStatus = "completed" | "in-progress" | "research";
export type ProjectTier = "featured" | "supporting" | "mini";

export interface ProjectSection {
  problem?: string;
  approach?: string;
  role?: string;
  howItWorks?: string;
  challenges?: string;
  learning?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tier: ProjectTier;
  status: ProjectStatus;
  index: string;
  thesis: string;
  description: string;
  collaboration?: string;
  technologies: string[];
  keyFeatures: string[];
  content: ProjectSection;
  github?: string;
  demo?: string;
  verified: boolean;
}
