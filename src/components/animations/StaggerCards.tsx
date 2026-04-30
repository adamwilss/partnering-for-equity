"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface StaggerCardsProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export default function StaggerCards({
  children,
  className = "",
  staggerDelay = 0.15,
  once = false,
}: StaggerCardsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) &&
        children.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.92, rotateX: 10 }}
            animate={
              isInView
                ? { opacity: 1, y: 0, scale: 1, rotateX: 0 }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {child}
          </motion.div>
        ))}
    </div>
  );
}
