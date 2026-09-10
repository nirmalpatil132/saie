import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ProfilePhoto } from "./ProfilePhoto";

/**
 * Renders Saie's real photo (see ProfilePhoto) inside a circular frame with
 * orbiting rings and floating chips. Falls back to a generative abstract
 * placeholder — gradient, line art, monogram — if no photo is present yet
 * at public/images/profile.{jpg,jpeg,png,webp}.
 */
export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[380px]">
      {/* Orbit rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-border-strong"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_4px_rgba(255,107,82,0.6)]" />
      </motion.div>
      <motion.div
        className="absolute inset-6 rounded-full border border-border"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -bottom-1 left-[15%] h-2 w-2 rounded-full bg-accent-secondary shadow-[0_0_16px_3px_rgba(155,140,255,0.6)]" />
      </motion.div>

      {/* Core frame */}
      <div className="absolute inset-10 aspect-square overflow-hidden rounded-full border border-border-strong bg-surface">
        <ProfilePhoto
          className="h-full w-full object-cover"
          fallback={
            <>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 35% 25%, rgba(255,107,82,0.25), transparent 55%), radial-gradient(circle at 70% 75%, rgba(155,140,255,0.22), transparent 55%)",
                }}
              />
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-70">
                <defs>
                  <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-accent-secondary)" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 140 C 60 100, 60 60, 100 60 S 150 100, 180 70"
                  fill="none"
                  stroke="url(#hero-line)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <circle cx="100" cy="100" r="46" fill="none" stroke="var(--color-border-strong)" strokeWidth="1" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl font-semibold tracking-tight text-text-primary/90">
                  SJ
                </span>
              </div>
            </>
          }
        />
        <div className="grain-overlay" style={{ opacity: 0.06 }} />
      </div>

      {/* Floating chips */}
      <motion.div
        className="absolute -left-6 top-8 rounded-xl border border-border bg-surface-elevated px-3 py-2 shadow-lg backdrop-blur-sm"
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-xs font-medium text-text-secondary">DSA · OOP</span>
      </motion.div>
      <motion.div
        className="absolute -right-4 bottom-10 rounded-xl border border-border bg-surface-elevated px-3 py-2 shadow-lg backdrop-blur-sm"
        animate={reducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="font-display text-xs font-medium text-text-secondary">UI Research</span>
      </motion.div>
    </div>
  );
}
