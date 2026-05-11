import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { EXTERNAL, HOME_COPY } from "@/lib/site";

export function HomeAbout() {
  return (
    <Section id="about" className="bg-[var(--color-surface-muted)]">
     <ScrollReveal>
  <div className="grid gap-[var(--space-12)] lg:grid-cols-2 lg:items-center">
    
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src="/About.png"
        alt="HVAC team working"
        width={700}
        height={800}
        className="h-full w-full object-cover"
      />
    </div>

    <div>
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        {HOME_COPY.aboutEyebrow}
      </p>

      <h2 className="mt-[var(--space-4)] font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
        {HOME_COPY.aboutTitle}
      </h2>

      <p className="mt-[var(--space-6)] text-lg leading-relaxed text-[var(--color-ink-muted)]">
        {HOME_COPY.aboutBody}
      </p>

      <Button
        href={EXTERNAL.about}
        variant="link"
        className="mt-[var(--space-6)]"
      >
        Read More
      </Button>
    </div>

  </div>
</ScrollReveal>
    </Section>
  );
}
