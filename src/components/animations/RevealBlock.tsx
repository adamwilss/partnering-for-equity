"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealBlockProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export default function RevealBlock({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: RevealBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const offset = directionMap[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, x: offset.x, y: offset.y }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
