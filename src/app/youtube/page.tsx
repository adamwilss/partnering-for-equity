"use client";

import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { siteContent } from "@/content/siteContent";

export default function YouTubePage() {
  const { headline, body } = siteContent.youtube;

  return (
    <>
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <AssembleText text={headline} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6" />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">{body}</p>
          </RevealBlock>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <RevealBlock delay={0.2}>
            <VideoPlaceholder title="YouTube content coming soon" className="mb-8" />
          </RevealBlock>
          <RevealBlock delay={0.35}>
            <VideoPlaceholder title="David and Ric discuss acquisitions" />
          </RevealBlock>
        </div>
      </section>
    </>
  );
}
