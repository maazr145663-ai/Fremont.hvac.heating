import Image from "next/image";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HOME_COPY, SERVICE_AREAS, SITE } from "@/lib/site";

export function HomeServiceAreas() {
  return (
    <Section className="bg-[var(--color-surface-muted)]">
      <div className="grid items-center gap-[var(--space-10)] lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mx-auto max-w-3xl text-center lg:text-left">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
              {HOME_COPY.serviceAreasEyebrow}
            </h2>
          </div>

          <ScrollReveal className="mt-[var(--space-10)]">
            <ul className="grid max-w-4xl gap-x-[var(--space-12)] text-lg text-[var(--color-ink-muted)] sm:grid-cols-2">
              {SERVICE_AREAS.map((city) => (
                <li key={city} className="flex gap-[var(--space-2)]">
                  <span
                    aria-hidden
                    className="text-[var(--color-primary)]"
                  >
                    —
                  </span>
                  {city}
                </li>
              ))}
            </ul>

            <p className="mt-[var(--space-10)] text-sm text-[var(--color-ink-subtle)]">
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
        </div>

        {/* Right Image */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/Areas.png"
              alt="Service Areas"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}