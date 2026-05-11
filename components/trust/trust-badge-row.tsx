import { Card } from "@/components/ui/card";
import { HOME_COPY } from "@/lib/site";

/** Wording pulled verbatim from the About section on fremonthvac.net. */
const badges = [
  { label: "drug-free, trained, and certified" },
  { label: "30+ years in the industry" },
  { label: "Serving Scenic Ogden and the Surrounding Areas since 2004" },
] as const;

export function TrustBadgeRow() {
  return (
    <div className="grid gap-[var(--space-4)] sm:grid-cols-3">
      {badges.map((b) => (
        <Card
          key={b.label}
          variant="elevated"
          className="flex items-center justify-center text-center text-sm font-semibold leading-snug text-[var(--color-ink)]"
        >
          {b.label}
        </Card>
      ))}
    </div>
  );
}

export function TrustBadgeStrip() {
  return (
    <p className="text-center text-sm font-medium text-[var(--color-ink-muted)]">
      {HOME_COPY.heroLine1}
    </p>
  );
}
