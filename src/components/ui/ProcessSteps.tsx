"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

interface ProcessStepsProps {
  steps: readonly string[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { reducedMotion } = useSettings();

  if (reducedMotion) {
    return (
      <ol className={`space-y-4 ${className}`}>
        {steps.map((step, i) => (
          <li
            key={i}
            className="flex gap-4 p-5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sm font-semibold text-indigo-400">
              {i + 1}
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <motion.ol
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`space-y-4 ${className}`}
    >
      {steps.map((step, i) => (
        <motion.li
          key={i}
          variants={itemVariants}
          className="flex gap-4 p-5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
        >
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sm font-semibold text-indigo-400">
            {i + 1}
          </span>
          <p className="text-slate-500 text-sm leading-relaxed pt-1">{step}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
