import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HOME_COPY, SERVICE_CARD_COPY } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const SLUGS = Object.keys(SERVICE_CARD_COPY);

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = SERVICE_CARD_COPY[slug];
  if (!entry) return {};
  return {
    title: `${entry.title} | Fremont Heating & Air Conditioning INC`,
    description: entry.body,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const entry = SERVICE_CARD_COPY[slug];
  if (!entry) notFound();

  return (
    <main
      id="main-content"
      className="flex-1 pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0"
    >
        <section className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {HOME_COPY.whatWeDoEyebrow}
            </p>
            <h1 className="mt-[var(--space-4)] font-display text-4xl font-bold tracking-tight md:text-5xl">
              {entry.title}
            </h1>
            <p className="mt-[var(--space-6)] text-xl text-[var(--color-ink-muted)]">
              {entry.body}
            </p>
          </div>
        </section>
        <section className="py-[var(--space-16)] md:py-[var(--space-24)]">
          <div className="container-app grid gap-[var(--space-10)] lg:grid-cols-2">
            <Card variant="elevated">
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
                Contact Us Today
              </h2>
              <p className="mt-[var(--space-4)] text-[var(--color-ink-muted)]">
                {entry.body}
              </p>
              <div className="mt-[var(--space-8)] flex flex-wrap gap-[var(--space-3)]">
                <Button href={entry.href} variant="primary">
                  Full service page
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Us Today
                </Button>
              </div>
            </Card>
            <Card variant="default">
              <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
                {HOME_COPY.aboutTitle}
              </h2>
              <p className="mt-[var(--space-4)] text-[var(--color-ink-muted)]">
                {HOME_COPY.aboutBody}
              </p>
            </Card>
          </div>
        </section>
      </main>
  );
}
