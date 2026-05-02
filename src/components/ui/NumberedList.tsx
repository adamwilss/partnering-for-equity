"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

interface NumberedItem {
  heading?: string;
  body: string;
}

interface NumberedListProps {
  items: readonly (string | NumberedItem)[];
  className?: string;
  showNumbers?: boolean;
  gridCols?: 1 | 2;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function NumberedList({ items, className = "", showNumbers = true, gridCols = 1 }: NumberedListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { reducedMotion } = useSettings();

  const gridClass = gridCols === 2 ? "grid sm:grid-cols-2 gap-4" : "space-y-4";

  const renderItem = (item: string | NumberedItem, i: number) => {
    const heading = typeof item === "string" ? undefined : item.heading;
    const body = typeof item === "string" ? item : item.body;

    return (
      <div
        key={i}
        className="flex gap-4 p-5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
      >
        {showNumbers && (
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sm font-semibold text-indigo-400">
            {i + 1}
          </span>
        )}
        <div className="flex-1 min-w-0">
          {heading && (
            <h4 className="text-slate-900 dark:text-slate-100 font-semibold text-sm mb-1">{heading}</h4>
          )}
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{body}</p>
        </div>
      </div>
    );
  };

  if (reducedMotion) {
    return (
      <div className={`${gridClass} ${className}`}>
        {items.map((item, i) => renderItem(item, i))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${gridClass} ${className}`}
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={itemVariants}>
          {renderItem(item, i)}
        </motion.div>
      ))}
    </motion.div>
  );
}
