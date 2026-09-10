import { useEffect } from "react";

/** Locks body scroll while `locked` is true — used for the mobile nav drawer. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [locked]);
}
