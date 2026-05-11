import Link from "next/link";
import { EXTERNAL, HOME_COPY, SERVICE_AREAS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-surface)]">
      <div className="container-app grid gap-[var(--space-12)] py-[var(--space-16)] md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{SITE.name}</p>
          <address className="mt-[var(--space-4)] not-italic text-sm leading-relaxed text-white/80">
            {SITE.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-[var(--space-4)] text-sm text-white/80">
            <span className="block font-semibold text-white">
              {HOME_COPY.hoursLabel}
            </span>
            {HOME_COPY.hoursValue}
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white/60">
            Contact
          </h2>
          <ul className="mt-[var(--space-4)] flex flex-col gap-[var(--space-3)] text-sm">
            <li>
              <a
                href={SITE.phoneTel}
                className="font-semibold text-white hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/85 hover:underline"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsUrl}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Open in Google Maps
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-white/85 hover:underline">
                Contact Us Today
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white/60">
            Service areas
          </h2>
          <ul className="mt-[var(--space-4)] columns-1 gap-x-[var(--space-8)] text-sm text-white/80 sm:columns-2">
            {SERVICE_AREAS.map((city) => (
              <li key={city} className="break-inside-avoid py-[var(--space-1)]">
                —{city}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white/60">
            Quick links
          </h2>
          <ul className="mt-[var(--space-4)] flex flex-col gap-[var(--space-2)] text-sm">
            <li>
              <a
                href={EXTERNAL.about}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href={EXTERNAL.quote}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {HOME_COPY.requestQuote}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsUrl}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {HOME_COPY.reviewUs}
              </a>
            </li>
            <li>
              <a
                href={EXTERNAL.privacy}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href={EXTERNAL.accessibility}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Accessibility Statement
              </a>
            </li>
            <li>
              <Link href="/locations/ogden-and-surrounding-areas" className="text-white/85 hover:underline">
                Service Areas
              </Link>
            </li>
            <li>
              <a
                href={EXTERNAL.sitemap}
                className="text-white/85 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sitemap
              </a>
            </li>
          </ul>
          <p className="mt-[var(--space-6)] text-xs text-white/50">
            {HOME_COPY.paymentsBy} · {HOME_COPY.financeAvailable}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-[var(--space-6)] text-center text-xs text-white/55">
        <p>{HOME_COPY.copyright}</p>
      </div>
    </footer>
  );
}
