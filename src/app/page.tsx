"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import ContactForm from "@/components/ui/ContactForm";
import { useSettings } from "@/components/providers/SettingsProvider";
import { siteContent } from "@/content/siteContent";

function HeroStrapLines() {
  const { strapLines } = siteContent.hero;
  const { reducedMotion } = useSettings();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_80%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      </div>

      {/* Portal rings - hidden in reduced motion */}
      {!reducedMotion && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center pointer-events-none">
          <motion.div className="absolute inset-0 rounded-full border border-indigo-500/10" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
          <motion.div className="absolute inset-8 rounded-full border border-purple-500/15" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} />
          <motion.div className="absolute inset-20 rounded-full border border-indigo-400/20" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 16, ease: "linear" }} />
          <motion.div className="absolute inset-32 rounded-full border border-purple-400/25" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
            <motion.div className="absolute w-4 h-4 bg-indigo-400/60 rotate-45 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} />
            <motion.div className="absolute w-3 h-3 bg-purple-400/50 rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }} />
          </motion.div>
          <motion.div className="absolute inset-44 rounded-full bg-indigo-500/5 blur-2xl" animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} />
        </div>
      )}

      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            UK Business Acquisition Strategy
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8 leading-[1.1]"
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Building your Wealth through Business Acquisitions
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {strapLines[1]}
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {strapLines[2]}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/why-join"
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm md:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Why you Should Join us</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-medium text-sm md:text-base hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-lg shadow-slate-200 dark:shadow-slate-950"
          >
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  const { intro } = siteContent.whyJoin;

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <RevealBlock>
              <AssembleText text="Why you should join us" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                {intro.body}
              </p>
            </RevealBlock>
          </div>
          <div className="space-y-8">
            <RevealBlock delay={0.3}>
              <VideoPlaceholder title="Introduction video" />
            </RevealBlock>
            <RevealBlock delay={0.4}>
              <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-4">{intro.cta}</h3>
                <ContactForm />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "£50m+", label: "Exit Value Potential" },
    { value: "3-5 Years", label: "Typical Timeline" },
    { value: "0%", label: "Personal Capital Required" },
    { value: "17 Steps", label: "Proven Process" },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <RevealBlock key={stat.label} delay={i * 0.1} className="text-center">
              <div className="p-6 md:p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyTimelineSection() {
  const steps = [
    {
      title: "Plan",
      description: "Define your acquisition strategy and personal wealth goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "Prepare",
      description: "Build your deal team and secure financing structures.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Acquire",
      description: "Source, negotiate, and close on the right business.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Build",
      description: "Optimise operations, grow revenue, and scale systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Exit",
      description: "Maximise valuation and execute a life-changing sale.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 md:mb-16">
          <RevealBlock>
            <AssembleText text="Your journey to a life-changing exit" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight" />
          </RevealBlock>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-stretch flex-1">
              <RevealBlock delay={i * 0.1} className="flex-1">
                <div className="h-full p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </RevealBlock>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 flex-shrink-0">
                  <motion.div
                    className="w-px h-12 bg-gradient-to-b from-transparent via-indigo-400/40 to-transparent"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroStrapLines />
      <IntroSection />
      <StatsSection />
      <JourneyTimelineSection />
    </>
  );
}
