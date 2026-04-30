"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AssembleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AssembleText({
  text,
  className = "",
  delay = 0,
}: AssembleTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const letters = text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{
            opacity: 0,
            y: 40,
            x: (Math.random() - 0.5) * 80,
            rotateX: 90,
            scale: 0.5,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotateX: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: delay + i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
