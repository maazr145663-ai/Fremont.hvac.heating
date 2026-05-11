import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HOME_COPY, SERVICE_AREAS, SITE } from "@/lib/site";

export function HomeServiceAreas() {
  return (
    <Section className="bg-[var(--color-surface-muted)]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          {HOME_COPY.serviceAreasEyebrow}
        </h2>
      </div>
      <ScrollReveal className="mt-[var(--space-10)]">
        <ul className="mx-auto grid max-w-4xl gap-x-[var(--space-12)] text-lg text-[var(--color-ink-muted)] sm:grid-cols-2 md:grid-cols-3">
          {SERVICE_AREAS.map((city) => (
            <li key={city} className="flex gap-[var(--space-2)]">
              <span aria-hidden className="text-[var(--color-primary)]">
                —
              </span>
              {city}
            </li>
          ))}
        </ul>
        <p className="mt-[var(--space-10)] text-center text-sm text-[var(--color-ink-subtle)]">
          <a
            href={SITE.mapsUrl}
            className="font-semibold text-[var(--color-primary)] hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {SITE.addressSingle}
          </a>
        </p>
      </ScrollReveal>
    </Section>
  );
}
