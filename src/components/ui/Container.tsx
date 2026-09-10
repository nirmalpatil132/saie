import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerTag = "div" | "section" | "nav" | "header" | "footer" | "article";

export function Container({
  children,
  className,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ContainerTag;
  [key: string]: unknown;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[var(--container-portfolio)] px-6 sm:px-8 lg:px-12", className)} {...rest}>
      {children}
    </Tag>
  );
}
