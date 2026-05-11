import { Card } from "@/components/ui/card";
import { HOME_COPY } from "@/lib/site";

export function TestimonialCard() {
  return (
    <Card variant="glass" className="relative max-w-3xl">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {HOME_COPY.testimonialsEyebrow}
      </p>
      <figure className="mt-[var(--space-4)]">
        <blockquote className="text-lg leading-relaxed text-[var(--color-ink-muted)]">
          <p>{HOME_COPY.testimonialQuote}</p>
        </blockquote>
        <figcaption className="mt-[var(--space-6)] font-display text-lg font-semibold text-[var(--color-ink)]">
          {HOME_COPY.testimonialAttribution}
        </figcaption>
      </figure>
    </Card>
  );
}
