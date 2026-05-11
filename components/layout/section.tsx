import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionVariant = "standard" | "fullBleed" | "split" | "overlap";

export function Section({
  variant = "standard",
  as: Tag = "section",
  id,
  className,
  children,
  bleedClassName,
}: {
  variant?: SectionVariant;
  as?: "section" | "article" | "div";
  id?: string;
  className?: string;
  bleedClassName?: string;
  children: ReactNode;
}) {
  if (variant === "fullBleed") {
    return (
      <Tag id={id} className={cn("relative w-full", className)}>
        <div className={cn("w-full", bleedClassName)}>{children}</div>
      </Tag>
    );
  }

  if (variant === "split") {
    return (
      <Tag id={id} className={cn("relative w-full", className)}>
        <div className="container-app grid gap-[var(--space-12)] lg:grid-cols-2 lg:items-center">
          {children}
        </div>
      </Tag>
    );
  }

  if (variant === "overlap") {
    return (
      <Tag id={id} className={cn("relative z-10 -mt-[var(--space-16)]", className)}>
        <div className="container-app">{children}</div>
      </Tag>
    );
  }

  return (
    <Tag id={id} className={cn("relative w-full py-[var(--space-16)] md:py-[var(--space-24)]", className)}>
      <div className="container-app">{children}</div>
    </Tag>
  );
}
