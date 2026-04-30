"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, subtitle, ctas, trustText } = siteContent.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,rgba(147,51,234,0.1),rgba(255,255,255,0))]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Badge className="mb-6">{badge}</Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              <span className="bg-gradient-to-r from-white via-white to-indigo-300 bg-clip-text text-transparent">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {ctas.map((cta) => (
            <Button
              key={cta.label}
              label={cta.label}
              href={cta.href}
              variant={cta.variant}
              className="w-full sm:w-auto text-center"
            />
          ))}
        </div>

        <p className="text-white/20 text-sm">{trustText}</p>
      </div>
    </section>
  );
}
