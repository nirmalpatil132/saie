import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm font-medium transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-accent text-[#0a0a0a] px-6 py-3 hover:bg-accent-soft hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(255,107,82,0.55)]",
  secondary:
    "border border-border-strong text-text-primary px-6 py-3 hover:border-accent hover:text-accent hover:-translate-y-0.5",
  ghost: "text-text-secondary hover:text-text-primary px-2 py-1",
};

type Variant = keyof typeof variants;

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { children, variant = "primary", className, as, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
