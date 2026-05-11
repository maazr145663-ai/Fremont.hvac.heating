import { useState } from "react";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { TestimonialCard } from "@/components/trust/testimonial-card";

const testimonials = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export function HomeTestimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <Section>
      <ScrollReveal className="flex flex-col items-center gap-6">

        {/* Testimonial */}
        <div className="w-full flex justify-center">
          <TestimonialCard key={testimonials[index].id} />
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Next
          </button>
        </div>

      </ScrollReveal>
    </Section>
  );
}