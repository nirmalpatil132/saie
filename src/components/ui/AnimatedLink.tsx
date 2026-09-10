import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function AnimatedLink({
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("link-underline inline-block", className)} {...rest}>
      {children}
    </a>
  );
}
