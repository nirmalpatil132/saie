import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently "active" for the navbar indicator.
 * A section counts as active once its top has crossed into the upper third
 * of the viewport — the standard scrollspy heuristic — rather than picking
 * whichever section has the single highest intersection ratio, which can
 * miss a tall section whose start lands exactly at the fold.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        }

        const lastIntersecting = elements
          .map((el) => el.id)
          .filter((id) => intersecting.has(id))
          .pop();

        if (lastIntersecting) {
          setActiveId(lastIntersecting);
        }
      },
      { rootMargin: "0px 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
