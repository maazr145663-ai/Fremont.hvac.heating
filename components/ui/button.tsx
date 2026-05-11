import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

export type ButtonProps = Omit<ComponentProps<"button">, "className"> & {
  className?: string;
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 text-center font-semibold transition-[background-color,color,border-color,transform,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

const variants: Record<ButtonVariant, string> = {
  primary: `${base} rounded-[var(--radius-lg)] bg-[var(--color-primary)] px-[var(--space-6)] py-[var(--space-3)] text-[var(--color-surface)] shadow-[var(--shadow-md)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-lg)] active:translate-y-px`,
  secondary: `${base} rounded-[var(--radius-lg)] border-2 border-[var(--color-primary)] bg-transparent px-[var(--space-6)] py-[var(--space-3)] text-[var(--color-primary)] hover:bg-[var(--color-primary-muted)]`,
  ghost: `${base} rounded-[var(--radius-md)] bg-transparent px-[var(--space-4)] py-[var(--space-2)] text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]`,
  link: `${base} min-h-0 rounded-none bg-transparent p-0 text-[var(--color-primary)] underline-offset-4 hover:underline`,
};

export function Button({
  variant = "primary",
  className,
  href,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
