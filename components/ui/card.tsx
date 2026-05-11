import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardVariant = "default" | "elevated" | "glass";

const shells: Record<CardVariant, string> = {
  default:
    "rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-6)] md:p-[var(--space-8)]",
  elevated:
    "rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-6)] shadow-[var(--shadow-lg)] md:p-[var(--space-8)]",
  glass:
    "rounded-[var(--radius-2xl)] border border-[var(--color-surface-glass-border)] bg-[var(--color-surface-glass)] p-[var(--space-6)] shadow-[var(--shadow-md)] backdrop-blur-xl md:p-[var(--space-8)]",
};

export function Card({
  variant = "default",
  className,
  children,
}: {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn(shells[variant], className)}>{children}</div>;
}
