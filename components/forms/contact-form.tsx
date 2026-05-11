"use client";

import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL, SITE } from "@/lib/site";

export function ContactForm() {
  const id = useId();
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Website inquiry from ${name || "Fremont visitor"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setNotice(
      "Your email app should open with this message ready to send. If nothing opens, call us or use the link below.",
    );
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="grid gap-[var(--space-6)] rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-[var(--space-8)] shadow-[var(--shadow-md)]"
        noValidate
      >
        <div>
          <label
            htmlFor={`${id}-name`}
            className="block text-sm font-semibold text-[var(--color-ink)]"
          >
            Name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className="mt-[var(--space-2)] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[var(--color-ink)] outline-none transition-shadow focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-muted)]"
          />
        </div>
        <div>
          <label
            htmlFor={`${id}-phone`}
            className="block text-sm font-semibold text-[var(--color-ink)]"
          >
            Phone
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-[var(--space-2)] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[var(--color-ink)] outline-none transition-shadow focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-muted)]"
          />
        </div>
        <div>
          <label
            htmlFor={`${id}-email`}
            className="block text-sm font-semibold text-[var(--color-ink)]"
          >
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className="mt-[var(--space-2)] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[var(--color-ink)] outline-none transition-shadow focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-muted)]"
          />
        </div>
        <div>
          <label
            htmlFor={`${id}-message`}
            className="block text-sm font-semibold text-[var(--color-ink)]"
          >
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            className="mt-[var(--space-2)] w-full resize-y rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] text-[var(--color-ink)] outline-none transition-shadow focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-muted)]"
          />
        </div>
        <div className="flex flex-wrap gap-[var(--space-4)]">
          <Button type="submit" variant="primary">
            Email your request
          </Button>
          <Button href={SITE.phoneTel} variant="secondary">
            Call {SITE.phoneDisplay}
          </Button>
          <Button href={EXTERNAL.contact} variant="ghost">
            Open original contact page
          </Button>
        </div>
      </form>
      {notice ? (
        <p
          role="status"
          className="mt-[var(--space-4)] text-sm text-[var(--color-ink-muted)]"
        >
          {notice}{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-[var(--color-primary)] hover:underline">
            {SITE.email}
          </a>
        </p>
      ) : null}
    </div>
  );
}
