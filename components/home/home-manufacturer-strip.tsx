import Image from "next/image";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const BRANDS =
  "https://www.fremonthvac.net/wp-content/uploads/2022/04/hdr-brands.webp";

export function HomeManufacturerStrip() {
  return (
    <Section className="py-[var(--space-12)] md:py-[var(--space-16)]">
      <ScrollReveal>
        <div className="flex flex-col items-center gap-[var(--space-6)] text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            featured Manufacturer
          </p>
          <div className="relative h-16 w-full max-w-2xl md:h-20">
            <Image
              src={BRANDS}
              alt="HVAC equipment manufacturer partner logos carried by Fremont Heating & Air Conditioning INC"
              fill
              className="object-contain"
              sizes="(max-width:768px) 100vw, 42rem"
            />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
