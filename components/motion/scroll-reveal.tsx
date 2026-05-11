"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

const MIN = 1024;

function allowGsap() {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < MIN) return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScrollReveal({
  children,
  className,
  y = 40,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!allowGsap()) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
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
  }, [y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
