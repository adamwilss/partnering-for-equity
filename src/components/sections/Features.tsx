"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, cards } = siteContent.features;

  return (
    <SectionWrapper id="features">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group p-6 rounded-2xl bg-slate-100 border border-slate-200 hover:border-indigo-500/15 hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/[0.02] group-hover:to-purple-500/[0.02] transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-2 h-2 rounded-full bg-indigo-400/40 mb-4 group-hover:bg-indigo-400 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-500" />
                <h3 className="text-slate-900 font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
