"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedDividerProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedDivider({
  className = "",
  delay = 0.3,
  duration = 0.8,
}: AnimatedDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ delay, duration, ease: [0.33, 1, 0.68, 1] }}
      />
    </div>
  );
}
