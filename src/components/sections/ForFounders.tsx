"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

function Icon({ name }: { name: string }) {
  switch (name) {
    case "bank":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
        </svg>
      );
    case "target":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "shield":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "zap":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return null;
  }
}

function BenefitGrid({ benefits }: { benefits: typeof siteContent.founders.benefits }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all duration-300">
            <Icon name={benefit.icon} />
          </div>
          <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ForFounders() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, subtitle, benefits, cta } = siteContent.founders;

  return (
    <SectionWrapper id="founders">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_50%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />

      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Badge className="mb-4">{badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              {headline}
            </h2>
            <p className="text-white/50 leading-relaxed text-base md:text-lg mb-8">
              {subtitle}
            </p>
            <Button label={cta.label} href={cta.href} variant="primary" />
          </div>

          <BenefitGrid benefits={benefits} />
        </div>
      </div>
    </SectionWrapper>
  );
}
