import { CtaBlock } from "@/components/cta/cta-block";
import { Section } from "@/components/layout/section";
import { TrustBadgeRow } from "@/components/trust/trust-badge-row";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function HomeTrustBand() {
  return (
    <Section className="bg-[var(--color-surface)] py-[var(--space-12)] md:py-[var(--space-16)]">
      <ScrollReveal>
        <TrustBadgeRow />
      </ScrollReveal>
    </Section>
  );
}

export function HomeClosingCta() {
  return (
    <Section className="pt-[var(--space-8)] pb-[var(--space-24)] md:pb-[var(--space-32)]">
      <ScrollReveal>
        <CtaBlock />
      </ScrollReveal>
    </Section>
  );
}
