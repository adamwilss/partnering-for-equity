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
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <AssembleText text={headline} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">{body}</p>
          </RevealBlock>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <RevealBlock>
              <AssembleText text="Channel highlights" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                Why our community keeps growing.
              </p>
            </RevealBlock>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <RevealBlock delay={0.15}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600 dark:text-indigo-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Subscribe</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Join our growing community of acquisition-minded professionals.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600 dark:text-indigo-400">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">New Videos Weekly</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Fresh insights on business acquisitions, exits and PE.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.35}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-600 dark:text-indigo-400">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="8" y1="22" x2="16" y2="22" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Expert Interviews</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Conversations with founders who have successfully exited.
                </p>
              </div>
            </RevealBlock>
          </div>
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
