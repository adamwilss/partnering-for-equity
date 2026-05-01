"use client";

import Button from "@/components/ui/Button";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();
  const { headline, subtitle, cta } = siteContent.ctaBanner;

  return (
    <section id="cta" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-50/30 to-slate-950" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight whitespace-nowrap">
          {headline}
        </h2>
        <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Button
          label={cta.label}
          href={cta.href}
          variant="primary"
          className="px-10 py-4 text-lg"
        />
      </div>
    </section>
  );
}
