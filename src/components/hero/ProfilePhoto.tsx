import { useState, type ReactNode } from "react";

/**
 * Renders Saie's real profile photo when present at one of the candidate
 * paths below, and quietly falls back (no broken-image icon) otherwise so
 * `fallback` can render instead. Drop the photo at `public/images/profile.jpg`
 * (any of the extensions below also work) and it appears automatically.
 */
const CANDIDATE_PATHS = [
  "/images/profile.jpg",
  "/images/profile.jpeg",
  "/images/profile.png",
  "/images/profile.webp",
];

export function ProfilePhoto({
  className,
  fallback,
}: {
  className?: string;
  fallback: ReactNode;
}) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const exhausted = candidateIndex >= CANDIDATE_PATHS.length;

  if (exhausted) {
    return <>{fallback}</>;
  }

  return (
    <img
      key={CANDIDATE_PATHS[candidateIndex]}
      src={CANDIDATE_PATHS[candidateIndex]}
      alt="Saie Jadhav"
      loading="eager"
      decoding="async"
      className={className}
      onError={() => setCandidateIndex((i) => i + 1)}
    />
  );
}
