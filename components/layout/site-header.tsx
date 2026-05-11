"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { EXTERNAL, PRIMARY_NAV, SITE } from "@/lib/site";

const LOGO_SRC = "https://www.fremonthvac.net/wp-content/uploads/2020/04/logo-1.webp";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navId = useId();

  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, [clearClose]);

  useEffect(() => {
    return () => clearClose();
  }, [clearClose]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-[var(--space-4)] focus:top-[var(--space-4)] focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-[var(--color-primary)] focus:px-[var(--space-4)] focus:py-[var(--space-2)] focus:text-[var(--color-surface)]"
      >
        Skip to content
      </a>
      <div className="container-app flex h-[var(--header-height)] items-center justify-between gap-[var(--space-4)]">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center gap-[var(--space-3)]"
        >
          <Image
            src={LOGO_SRC}
            alt="Fremont Heating & Air Conditioning INC logo"
            width={180}
            height={48}
            className="h-10 w-auto md:h-11"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[var(--space-1)] lg:flex"
          onMouseLeave={scheduleClose}
        >
          {PRIMARY_NAV.map((item) => {
            if (item.href) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              );
            }
            const open = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  clearClose();
                  setOpenMenu(item.label);
                }}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${navId}-${item.label}`}
                  className={cn(
                    "flex items-center gap-1 rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] text-sm font-semibold transition-colors",
                    open
                      ? "bg-[var(--color-surface-muted)] text-[var(--color-primary)]"
                      : "text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)]",
                  )}
                >
                  {item.label}
                  <span aria-hidden className="text-xs opacity-60">
                    ▾
                  </span>
                </button>
                {open && item.children && (
                  <div
                    id={`${navId}-${item.label}`}
                    role="region"
                    aria-label={item.label}
                    className="absolute left-1/2 top-full z-50 mt-[var(--space-2)] w-[min(100vw-2rem,42rem)] -translate-x-1/2 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-6)] shadow-[var(--shadow-xl)]"
                    onMouseEnter={clearClose}
                  >
                    <ul className="grid gap-[var(--space-2)] sm:grid-cols-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-[var(--radius-lg)] px-[var(--space-3)] py-[var(--space-3)] text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-primary-muted)] hover:text-[var(--color-primary)]"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-[var(--space-3)] lg:flex">
          <Button href={EXTERNAL.quote} variant="ghost" className="text-sm">
            Request A Quote
          </Button>
          <Button href={SITE.phoneTel} variant="primary" className="text-sm">
            {SITE.phoneDisplay}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] p-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden className="text-xl leading-none">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-[var(--header-height)] z-40 overflow-y-auto bg-[var(--color-surface)] px-[var(--space-4)] pb-[var(--space-24)] pt-[var(--space-4)] lg:hidden"
        >
          <div className="flex flex-col gap-[var(--space-2)]">
            {PRIMARY_NAV.map((item) => (
              <div key={item.label} className="border-b border-[var(--color-border)] py-[var(--space-2)]">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block py-[var(--space-2)] text-lg font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <p className="py-[var(--space-2)] text-lg font-semibold">
                      {item.label}
                    </p>
                    <ul className="flex flex-col gap-[var(--space-1)] pb-[var(--space-2)]">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-[var(--radius-md)] py-[var(--space-2)] pl-[var(--space-3)] text-[var(--color-ink-muted)]"
                            rel="noopener noreferrer"
                            target="_blank"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-[var(--space-8)] flex flex-col gap-[var(--space-3)]">
            <Button href={SITE.phoneTel} variant="primary" className="w-full">
              Call {SITE.phoneDisplay}
            </Button>
            <Button href={EXTERNAL.quote} variant="secondary" className="w-full">
              Request A Quote
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
