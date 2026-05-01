"use client";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useState } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <div className="relative">
          {flipped ? back : front}
        </div>
        <button
          onClick={() => setFlipped(!flipped)}
          className="mt-3 text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          {flipped ? "Show front" : "Show back"}
        </button>
      </div>
    );
  }

  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
