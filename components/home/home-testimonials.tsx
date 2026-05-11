"use client";

import { useState } from "react";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TestimonialCard } from "@/components/trust/testimonial-card";

export function HomeTestimonials() {
  return (
    <Section>
      <ScrollReveal className="flex justify-center">
        <TestimonialCard />
      </ScrollReveal>
    </Section>
  );
}
