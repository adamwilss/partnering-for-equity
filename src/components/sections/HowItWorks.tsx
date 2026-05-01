"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { siteContent } from "@/content/siteContent";

function StepCard({
  number,
  title,
  description,
  icon,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  icon: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const icons: Record<string, React.ReactNode> = {
    user: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    sparkles: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
        <path d="M18 14l.6 2.4L21 17l-2.4.6L18 20l-.6-2.4L15 17l2.4-.6L18 14z" />
        <path d="M5 16l.6 2.4L8 19l-2.4.6L5 22l-.6-2.4L2 19l2.4-.6L5 16z" />
      </svg>
    ),
    rocket: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4l.5-2.5S7.45 8.5 9 12z" />
        <path d="M15 15l2.5-.5s1 2.95-2.5 4.5V15z" />
      </svg>
    ),
    bank: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
    target: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.33, 1, 0.68, 1] }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl bg-slate-100 border border-slate-200 hover:border-indigo-500/15 hover:bg-slate-50 transition-all duration-500 overflow-hidden">
        {/* Large ghost number */}
        <span className="absolute -top-2 -right-2 text-8xl font-black text-slate-900/[0.03] select-none pointer-events-none group-hover:text-slate-900/[0.05] transition-colors duration-500">
          {number}
        </span>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-all duration-300 mb-5">
            {icons[icon] ?? icons.user}
          </div>

          {/* Step number pill */}
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-indigo-500/5 border border-indigo-500/10 text-indigo-400/60 text-xs font-semibold mb-3">
            Step {number}
          </div>

          <h3 className="text-slate-900 font-semibold text-xl mb-3">{title}</h3>
          <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { badge, headline, steps } = siteContent.howItWorks;
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false, margin: "-100px" });

  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center mb-16">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          <Badge className="mb-4">{badge}</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
            {headline}
          </h2>
        </motion.div>
      </div>

      {/* 3 + 2 grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {steps.slice(0, 3).map((step, i) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            delay={i * 0.12}
          />
        ))}
      </div>

      {/* Second row: 2 cards, centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-3xl mx-auto">
        {steps.slice(3).map((step, i) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            delay={(i + 3) * 0.12}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
