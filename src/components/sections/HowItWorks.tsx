"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import IconBox from "@/components/ui/IconBox";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, steps } = siteContent.howItWorks;

  return (
    <SectionWrapper id="how-it-works">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <Badge className="mb-4">{badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          {steps.map((step) => (
            <IconBox
              key={step.number}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
