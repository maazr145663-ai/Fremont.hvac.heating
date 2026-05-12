import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { HOME_COPY, WHO_WE_SERVE } from "@/lib/site";

export function HomeWhoWeServe() {
  return (
    <Section className="bg-[var(--color-surface-muted)]">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          {HOME_COPY.whoWeServeEyebrow}
        </h2>
      </div>

      <ScrollReveal className="mt-[var(--space-12)]">
        <ul className="grid gap-[var(--space-6)] md:grid-cols-3">
          {WHO_WE_SERVE.map((item) => (
            <li key={item.href}>
              <Card
                variant="default"
                className="flex h-full flex-col overflow-hidden"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-56 w-full object-cover"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">
                    {item.label}
                  </h3>

                  <Button
                    href={item.href}
                    variant="link"
                    className="mt-[var(--space-4)] p-0"
                  >
                    Contact Us Today
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </Section>
  );
}