"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL, HOME_COPY, SITE } from "@/lib/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=80";

const MIN = 1024;

export function HomeHero() {
  const reduce = useReducedMotion();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce === true) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth < MIN) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = bgRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: 64,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("[data-hero-root]"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    const onResize = () => {
      if (window.innerWidth >= MIN) ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [reduce]);

  const stagger = reduce === true ? 0 : 0.08;

  return (
    <section
      data-hero-root
      className="relative isolate min-h-[min(100svh,56rem)] overflow-hidden bg-[var(--color-ink)]"
      aria-labelledby="hero-heading"
    >
      <div ref={bgRef} className="pointer-events-none absolute inset-0 scale-110 will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt="Professional HVAC technician inspecting modern heating and cooling equipment in a residential utility space"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
      </div>

      <div className="container-app relative flex min-h-[min(100svh,56rem)] flex-col justify-end pb-[var(--space-24)] pt-[var(--space-32)] md:pb-[var(--space-32)] md:pt-[var(--space-40)]">
        <motion.p
          className="max-w-xl font-display text-sm font-bold uppercase tracking-[0.22em] text-white/80"
          initial={reduce === true ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {HOME_COPY.heroKicker}
        </motion.p>
        <motion.h1
          id="hero-heading"
          className="mt-[var(--space-6)] max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-surface)] md:text-6xl xl:text-7xl"
          initial={reduce === true ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: stagger, ease: [0.16, 1, 0.3, 1] }}
        >
          {HOME_COPY.heroLine1}
        </motion.h1>
        <motion.p
          className="mt-[var(--space-6)] max-w-2xl text-lg text-white/90 md:text-xl"
          initial={reduce === true ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: stagger * 2, ease: [0.16, 1, 0.3, 1] }}
        >
          {HOME_COPY.heroLine2}
        </motion.p>
        <motion.div
          className="mt-[var(--space-10)] flex flex-wrap gap-[var(--space-4)]"
          initial={reduce === true ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: stagger * 3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button href={SITE.phoneTel} variant="primary" className="min-w-[11rem]">
            {HOME_COPY.ctaCallUsToday}
          </Button>
          <Button
            href={EXTERNAL.quote}
            variant="ghost"
            className="min-w-[11rem] border-2 border-white/90 text-[var(--color-surface)] hover:bg-white/10"
          >
            {HOME_COPY.ctaCallThePros}
          </Button>
          <Button href="/contact" variant="ghost" className="text-[var(--color-surface)] hover:bg-white/10">
            {HOME_COPY.ctaCallNow}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
