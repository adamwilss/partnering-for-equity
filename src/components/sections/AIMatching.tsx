"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/content/siteContent";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function AIMatching() {
  const { ref, isVisible } = useScrollAnimation();
  const { badge, headline, description, features } = siteContent.aiMatching;

  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.08),rgba(255,255,255,0))]" />

      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <Badge className="mb-4">{badge}</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 whitespace-nowrap">
              {headline}
            </h2>
            <p className="text-slate-500 leading-relaxed text-base md:text-lg mb-8">
              {description}
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                      <polyline points="1,5 4,8 9,2" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-4 rounded-full border border-indigo-500/15 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-8 rounded-full border border-purple-500/10 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute inset-12 rounded-full border border-indigo-500/20 animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />

              {/* Center node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
                    <path d="M18 14l.6 2.4L21 17l-2.4.6L18 20l-.6-2.4L15 17l2.4-.6L18 14z" />
                  </svg>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 45, 120, 200, 300].map((angle, i) => (
                <div
                  key={i}
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: `${8 + i * 3}s`, animationDirection: i % 2 ? "reverse" : "normal" }}
                >
                  <div
                    className="absolute w-3 h-3 rounded-full bg-indigo-400/60 shadow-lg shadow-indigo-500/30"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateY(-${i % 2 ? 44 : 40}px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
