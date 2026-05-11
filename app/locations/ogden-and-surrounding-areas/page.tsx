import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { HOME_COPY, SERVICE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "HVAC Service Areas | Fremont Heating & Air Conditioning INC",
  description:
    "Ogden, North Ogden, Roy, West Haven, Liberty, South Ogden, Hooper, Riverdale, Harrisville.",
};

export default function LocationPage() {
  return (
    <main
      id="main-content"
      className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0"
    >
        <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {HOME_COPY.heroKicker}
            </p>
            <h1 className="mt-[var(--space-4)] font-display text-4xl font-bold tracking-tight md:text-5xl">
              {HOME_COPY.serviceAreasEyebrow}
            </h1>
            <p className="mt-[var(--space-6)] text-lg text-[var(--color-ink-muted)]">
              {SITE.addressSingle}
            </p>
          </div>
        </section>
        <section className="py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app max-w-4xl">
            <ul className="grid gap-x-[var(--space-12)] gap-y-[var(--space-3)] text-lg text-[var(--color-ink-muted)] sm:grid-cols-2 md:grid-cols-3">
              {SERVICE_AREAS.map((city) => (
                <li key={city} className="flex gap-[var(--space-2)]">
                  <span aria-hidden className="text-[var(--color-primary)]">
                    —
                  </span>
                  {city}
                </li>
              ))}
            </ul>
            <div className="mt-[var(--space-12)] flex flex-wrap gap-[var(--space-4)]">
              <Button href={SITE.mapsUrl} variant="primary">
                Open in Google Maps
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
}
