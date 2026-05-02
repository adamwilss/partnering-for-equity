"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // 0 = no parallax, 1 = scrolls at same speed as page
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useSettings();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
