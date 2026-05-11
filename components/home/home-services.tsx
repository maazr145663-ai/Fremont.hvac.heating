import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HOME_COPY, SERVICE_CARD_COPY } from "@/lib/site";

const ORDER = [
  "air-conditioning",
  "heating",
  "indoor-air-quality",
  "heat-pumps",
  "ductless",
] as const;

// 👇 Add images mapping here (no need to touch lib for quick setup)
const SERVICE_IMAGES: Record<string, string> = {
  "air-conditioning": "/AC.webp",
  heating: "/Heating.webp",
  "indoor-air-quality": "/IAQ.webp",
  "heat-pumps": "/Heat pump.webp",
  ductless: "/AC.webp",
};

export function HomeServices() {
  return (
    <Section id="services">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          {HOME_COPY.whatWeDoEyebrow}
        </h2>
      </div>

      <ScrollReveal className="mt-[var(--space-12)]">
        <ul className="grid gap-[var(--space-6)] md:grid-cols-2 xl:grid-cols-3">
          {ORDER.map((key) => {
            const s = SERVICE_CARD_COPY[key];

            return (
              <li key={key}>
                <Card
                  variant="elevated"
                  className="group flex h-full flex-col overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 w-full overflow-hidden rounded-xl">
                    <img
                      src={SERVICE_IMAGES[key]}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-[var(--space-6)]">
                    <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      {s.title}
                    </h3>

                    <p className="mt-[var(--space-4)] flex-1 text-[var(--color-ink-muted)]">
                      {s.body}
                    </p>

                    <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-3)]">
                      <Button href={`/services/${key}`} variant="primary">
                        Read More
                      </Button>
                      <Button href={s.href} variant="ghost">
                        Full service page
                      </Button>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </ScrollReveal>
    </Section>
  );
}