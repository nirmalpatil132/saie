import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "dark-pattern-detection",
    slug: "dark-pattern-detection",
    title: "Automated Dark Pattern & Deceptive UI Detection",
    shortTitle: "Dark Pattern Detection",
    category: "Research / Final-Year Project",
    tier: "featured",
    status: "research",
    index: "01",
    thesis:
      "A research-driven attempt to systematically identify deceptive UI patterns — the manipulative design tricks that nudge users into choices they wouldn't otherwise make.",
    description:
      "A three-person final-year research project exploring how deceptive ('dark pattern') interface designs can be catalogued and automatically flagged, grounded in a structured taxonomy and behavioural validation rather than guesswork.",
    collaboration:
      "Collaborative final-year project with Nirmal and Madhura (3-person team).",
    technologies: [
      "Research Methodology",
      "UI Taxonomy Design",
      "Requirements Analysis",
      "Annotation Frameworks",
      "Documentation",
    ],
    keyFeatures: [
      "A structured taxonomy of deceptive UI pattern categories",
      "Defined requirements for what the detection system needs to recognize",
      "An annotation process for labelling interfaces against the taxonomy",
      "Behavioural validation tests to check flagged patterns against real user impact",
    ],
    content: {
      problem:
        "Dark patterns — interface designs that manipulate users into decisions like unwanted subscriptions or hidden costs — are widespread but hard to catch systematically, since most detection today relies on manual review with no shared, rigorous classification.",
      approach:
        "The team split the problem into research and engineering tracks. Saie led the research side: building a taxonomy of dark pattern categories from existing literature and real-world examples, translating that taxonomy into concrete detection requirements, and designing the annotation process used to label sample interfaces consistently.",
      role: "Saie's ownership on this project centers on taxonomy and requirements: research and classification of dark pattern types, requirements definition, the annotation process, test design, behavioural validation of flagged patterns, documentation, the experiment log, and demo coordination. The detection tooling itself is a shared team effort with Nirmal and Madhura.",
      howItWorks:
        "The taxonomy defines categories of deceptive UI (e.g. confirmshaming, forced continuity, hidden costs). Interfaces are annotated against these categories, detection requirements are derived from the annotated set, and candidate detections are behaviourally validated to check whether they actually mislead users rather than just resembling a pattern superficially.",
      challenges:
        "Drawing a clean line between legitimate persuasive design and genuinely deceptive UI proved to be the hardest part — many patterns exist on a spectrum, which made the taxonomy and annotation guidelines need several rounds of refinement to stay consistent across annotators.",
      learning:
        "This project sharpened Saie's research discipline — building a taxonomy that other people can apply consistently is a very different skill from writing code, and it demanded precise documentation, a maintained experiment log, and clear communication to keep a 3-person team aligned on ambiguous, judgment-heavy classification work.",
    },
    verified: true,
  },
  {
    id: "bizhub",
    slug: "bizhub",
    title: "BizHub — AI-Driven Gamified E-Learning Architecture",
    shortTitle: "BizHub",
    category: "AI-Driven Gamified E-Learning",
    tier: "featured",
    status: "research",
    index: "02",
    thesis:
      "A gamified e-learning architecture exploring how AI-driven personalization can make entrepreneurship education more engaging for secondary school students.",
    description:
      "A team project designing a gamified e-learning architecture for teaching entrepreneurship to secondary school students, using AI-driven personalization to adapt content and challenges to individual learners.",
    collaboration: "Team project — contribution documented as a research collaborator.",
    technologies: [
      "Instructional Design",
      "Gamification Concepts",
      "AI-Driven Personalization",
      "Research & Documentation",
    ],
    keyFeatures: [
      "Gamified learning mechanics designed for secondary-school entrepreneurship education",
      "An architecture for AI-driven personalization of learning content",
      "Research grounding in entrepreneurial education pedagogy",
    ],
    content: {
      problem:
        "Entrepreneurship education for secondary school students is often abstract and lecture-driven, which makes it hard to hold attention or build practical intuition for how business decisions actually play out.",
      approach:
        "BizHub's architecture combines gamification — turning entrepreneurial decisions into interactive challenges — with AI-driven personalization that adapts difficulty and content to each learner's progress.",
      role: "Saie's documented contribution to BizHub is on the research side, working within the project team to help ground the platform's gamified learning approach and personalization concepts. She was not the sole or primary technical architect of the system.",
      howItWorks:
        "Learners progress through gamified entrepreneurship challenges; an AI-driven layer is designed to adapt the difficulty and focus of content based on how each learner performs, aiming to keep engagement high without sacrificing educational depth.",
      challenges:
        "Balancing genuine educational rigor against game-like engagement is a persistent tension in gamified learning design — mechanics that are fun can easily dilute the entrepreneurial concepts they're meant to teach.",
      learning:
        "Working on BizHub built Saie's understanding of how AI-driven personalization is framed at the architecture level, and reinforced how research and instructional design decisions need to work hand-in-hand with technical implementation in an educational product.",
    },
    verified: true,
  },
  {
    id: "snnc-web-platform",
    slug: "snnc-web-platform",
    title: "Swachh Nagar Nigam Challenge (SNNC) Web Platform",
    shortTitle: "SNNC Web Platform",
    category: "Full-Stack Group Project",
    tier: "supporting",
    status: "completed",
    index: "03",
    thesis:
      "A responsive full-stack web application built with a team to promote community cleanliness and structured public workflows.",
    description:
      "A group project delivering a responsive full-stack web application focused on community cleanliness initiatives and public workflow structuring.",
    collaboration: "Group project with a multidisciplinary engineering team.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Git"],
    keyFeatures: [
      "Dynamic, modular mentor information components",
      "Improved interface load efficiency and cross-device accessibility",
      "Version-controlled collaborative workflow across the team",
    ],
    content: {
      problem:
        "The Swachh Nagar Nigam Challenge needed a public-facing platform to communicate structured cleanliness workflows and mentor information clearly to a broad audience.",
      approach:
        "The team architected a responsive full-stack platform, with Saie spearheading the mentor information components — building them as dynamic, modular pieces rather than static, hard-coded sections.",
      role: "Saie led development of the mentor information components, focusing on load efficiency and cross-device accessibility, while collaborating with the broader engineering team using Git for version control.",
      howItWorks:
        "The platform presents cleanliness-focused public workflows and mentor information through modular, responsive components designed to work smoothly across device sizes.",
      learning:
        "This project reinforced clean Git collaboration hygiene inside a multidisciplinary team and the value of building modular components that stay easy to update as content changes.",
    },
    verified: true,
  },
  {
    id: "online-auction-system",
    slug: "online-auction-system",
    title: "Online Auction System",
    shortTitle: "Online Auction System",
    category: "System Architecture Project",
    tier: "supporting",
    status: "completed",
    index: "04",
    thesis:
      "Complete software blueprint and data-validation modeling for an enterprise-level e-commerce auction system.",
    description:
      "A system architecture project producing detailed software specifications and modeling assets for an enterprise-level online auction platform, guiding a six-member engineering cohort through agile iterations.",
    collaboration: "Guided a 6-member engineering cohort through agile development iterations.",
    technologies: ["Agile SDLC", "System Modeling", "UML Architecture", "Technical Documentation"],
    keyFeatures: [
      "Software Requirement Specifications (SRS)",
      "Multi-level Data Flow Diagrams (DFDs)",
      "UML sequence and use-case models",
    ],
    content: {
      problem:
        "Before writing code for an enterprise-scale auction system, the team needed a rigorous specification that eliminated architectural ambiguity and dependency conflicts across modules.",
      approach:
        "Saie authored detailed Software Requirement Specifications alongside multi-level Data Flow Diagrams, and designed UML structural assets — including sequence and use-case models — to guide the engineering cohort's agile iterations.",
      role: "Primary author of the SRS, DFDs, and UML modeling assets that directed a 6-member engineering cohort's implementation work.",
      howItWorks:
        "The specification decomposes the auction system into validated data flows and structural models, giving the engineering cohort a shared, unambiguous reference for building each module.",
      learning:
        "This project deepened Saie's fluency in translating a complex system into precise, structured documentation that a full team can build from without conflicting assumptions.",
    },
    verified: true,
  },
  {
    id: "bookmyshow-clone",
    slug: "bookmyshow-clone",
    title: "BookMyShow Clone",
    shortTitle: "BookMyShow Clone",
    category: "Frontend Web Application",
    tier: "mini",
    status: "completed",
    index: "05",
    thesis: "A digital ticket reservation clone exploring state navigation and checkout simulation.",
    description:
      "A full-featured digital ticket reservation clone with intuitive state navigation, dynamic rendering, and a seamless checkout simulation pathway.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Web Architecture Principles"],
    keyFeatures: [
      "Intuitive state navigation across the booking flow",
      "Dynamic rendering of seat and showtime selection",
      "Simulated checkout pathway mimicking real-time booking concurrency",
    ],
    content: {
      problem:
        "Ticket booking flows involve a lot of interdependent state — showtimes, seats, and checkout — that's easy to get wrong in a from-scratch frontend build.",
      approach:
        "Built a frontend clone of a ticket reservation experience, integrating responsive UI layouts with logic that mimics real-time user-concurrency handling during high-traffic booking intervals.",
      role: "Solo frontend build.",
      learning:
        "A hands-on exercise in managing complex UI state and simulating concurrency-sensitive interactions purely on the frontend.",
    },
    verified: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const supportingProjects = projects.filter((p) => p.tier === "supporting");
export const miniProjects = projects.filter((p) => p.tier === "mini");
