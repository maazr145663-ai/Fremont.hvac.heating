import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { EXTERNAL, HOME_COPY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Fremont Heating & Air Conditioning INC",
  description: "Contact Fremont Heating & Air Conditioning INC in Ogden, UT.",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0"
    >
        <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Commercial HVAC Company in Ogden, UT
            </p>
            <h1 className="mt-[var(--space-4)] font-display text-4xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
              Contact Us
            </h1>
            <h2 className="mt-[var(--space-6)] font-display text-2xl font-semibold text-[var(--color-ink)]">
              Contact Fremont Heating &amp; Air Conditioning INC
            </h2>
            <p className="mt-[var(--space-4)] text-lg text-[var(--color-ink-muted)]">
              Contact Us Today
            </p>
          </div>
        </section>
        <section className="py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app grid gap-[var(--space-12)] lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                {SITE.addressSingle}
              </h3>
              <p className="mt-[var(--space-4)] text-[var(--color-ink-muted)]">
                <span className="block font-semibold text-[var(--color-ink)]">
                  Call Us
                </span>
                <a
                  href={SITE.phoneTel}
                  className="text-lg font-semibold text-[var(--color-primary)] hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="mt-[var(--space-4)] text-[var(--color-ink-muted)]">
                <span className="block font-semibold text-[var(--color-ink)]">
                  {HOME_COPY.hoursLabel}
                </span>
                {HOME_COPY.hoursValue}
              </p>
              <div className="mt-[var(--space-8)] flex flex-wrap gap-[var(--space-3)]">
                <Button href={SITE.mapsUrl} variant="secondary">
                  Open in Google Maps
                </Button>
                <Button href={EXTERNAL.quote} variant="ghost">
                  {HOME_COPY.requestQuote}
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
  );
}
