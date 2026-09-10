import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * A subtle radial glow that follows the pointer on fine-pointer (desktop)
 * devices only. Uses direct DOM style writes via rAF to avoid re-renders.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) {
        frame = requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
          }
          frame = 0;
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[100px] will-change-transform md:block"
      style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
    />
  );
}
