"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, questions } = siteContent.faq;

  return (
    <SectionWrapper id="faq">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <Badge className="mb-4">{badge}</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
            {headline}
          </h2>
        </div>

        <Accordion items={questions} />
      </div>
    </SectionWrapper>
  );
}
