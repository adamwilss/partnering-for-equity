"use client";

import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import { siteContent } from "@/content/siteContent";

export default function ResourcesPage() {
  const { headline, body, link, linkLabel } = siteContent.resources;

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
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <RevealBlock delay={0.15}>
            <div className="p-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-6">{body}</p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm md:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
              >
                {linkLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <RevealBlock>
              <AssembleText text="Featured Resources" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                Tools and guides to help you on your acquisition journey.
              </p>
            </RevealBlock>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealBlock delay={0.15}>
              <a
                href="https://books.by"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Build to Retire</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Our bestselling book that helps business owners prepare for exit. Become a co-author.
                </p>
              </a>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Assessment Tools</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Free tools to evaluate business readiness for acquisition. Coming soon.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.35}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 transition-all h-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Case Studies</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
                  Real stories from partners who have built groups and exited. Coming soon.
                </p>
              </div>
            </RevealBlock>
          </div>
        </div>
      </section>
    </>
  );
}
