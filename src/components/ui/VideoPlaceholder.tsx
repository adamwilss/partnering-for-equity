"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

interface VideoPlaceholderProps {
  title?: string;
  className?: string;
}

export default function VideoPlaceholder({ title, className = "" }: VideoPlaceholderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { reducedMotion } = useSettings();

  const content = (
    <div className={`relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 ${className}`}>
      {title && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            {title}
          </span>
        </div>
      )}
      <div className="aspect-video flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400 ml-1">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <p className="text-slate-400 text-sm">Video coming soon</p>
      </div>
    </div>
  );

  if (reducedMotion) {
    return <div ref={ref}>{content}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
    >
      {content}
    </motion.div>
  );
}
