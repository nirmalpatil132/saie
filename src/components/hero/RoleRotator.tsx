import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE_PREMIUM } from "@/lib/motion";

export function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length, reducedMotion]);

  if (reducedMotion) {
    return <span className="text-accent">{roles[0]}</span>;
  }

  return (
    <span className="inline-block align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: EASE_PREMIUM }}
          className="inline-block text-accent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
