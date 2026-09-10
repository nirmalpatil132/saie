import type { Project } from "@/data/types";

/**
 * Generative editorial cover art, unique per project. Stands in for real
 * screenshots — drop images into /public/projects/<slug>.jpg and swap the
 * <img> in place of this component once available.
 */
export function ProjectCoverArt({ project, className }: { project: Project; className?: string }) {
  const seed = project.id.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const rotate = seed % 40;
  const flip = seed % 2 === 0;

  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 480 320" className="h-full w-full">
        <defs>
          <linearGradient id={`grad-${project.id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-accent-secondary)" stopOpacity="0.85" />
          </linearGradient>
          <pattern id={`grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="480" height="320" fill="var(--color-surface)" />
        <rect width="480" height="320" fill={`url(#grid-${project.id})`} />

        <text
          x={flip ? 300 : 40}
          y="260"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="180"
          fill="rgba(255,255,255,0.04)"
        >
          {project.index}
        </text>

        <g transform={`translate(${flip ? 320 : 60} ${flip ? 70 : 190}) rotate(${rotate})`}>
          <rect
            x="-60"
            y="-60"
            width="120"
            height="120"
            rx="28"
            fill={`url(#grad-${project.id})`}
            opacity="0.9"
          />
        </g>
        <circle
          cx={flip ? 110 : 380}
          cy={flip ? 230 : 90}
          r="46"
          fill="none"
          stroke="var(--color-border-strong)"
          strokeWidth="1.5"
        />

        <text
          x="32"
          y="36"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="600"
          fontSize="15"
          fill="var(--color-text-secondary)"
          letterSpacing="0.05em"
        >
          {project.category.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
