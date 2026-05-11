import { Button } from "@/components/ui/button";
import { EXTERNAL, HOME_COPY, SITE } from "@/lib/site";

export function CtaBlock() {
  return (
    <div className="flex flex-col items-start gap-[var(--space-6)] rounded-[var(--radius-2xl)] bg-[var(--color-primary)] p-[var(--space-8)] text-[var(--color-surface)] shadow-[var(--shadow-xl)] md:flex-row md:items-center md:justify-between md:p-[var(--space-12)]">
      <div className="max-w-xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/80">
          {HOME_COPY.financeAvailable}
        </p>
        <h2 className="mt-[var(--space-3)] font-display text-2xl font-bold tracking-tight md:text-3xl">
          {HOME_COPY.requestQuote}
        </h2>
        <p className="mt-[var(--space-3)] text-base text-white/90">
          {HOME_COPY.heroLine2}
        </p>
      </div>
      <div className="flex w-full flex-col gap-[var(--space-3)] sm:flex-row sm:items-center md:w-auto">
        <Button
          href={SITE.phoneTel}
          variant="ghost"
          className="w-full border-2 border-white/80 text-[var(--color-surface)] hover:bg-white/10 sm:w-auto"
        >
          {HOME_COPY.ctaCallNow}
        </Button>
        <Button
          href={EXTERNAL.quote}
          variant="primary"
          className="w-full bg-[var(--color-surface)] text-[var(--color-primary)] hover:bg-[var(--color-surface-muted)] sm:w-auto"
        >
          {HOME_COPY.requestQuote}
        </Button>
      </div>
    </div>
  );
}
