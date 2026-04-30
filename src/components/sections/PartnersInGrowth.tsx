"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PartnersInGrowth() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, quote, values } = siteContent.partnersInGrowth;

  return (
    <SectionWrapper>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.05),rgba(255,255,255,0))]" />

      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">{badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-12">
            {headline}
          </h2>

          {/* Large quote */}
          <blockquote className="mb-16 relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-indigo-500/10 font-serif select-none">
              &ldquo;
            </span>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic relative z-10">
              {quote}
            </p>
          </blockquote>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.label}>
                <h4 className="text-white font-semibold mb-2">{value.label}</h4>
                <p className="text-white/40 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
