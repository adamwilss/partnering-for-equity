"use client";

import { motion, useInView, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── animated count-up number ─────────────────────────────────── */
function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [isInView, end, duration]);

  return { ref, count };
}

export function AnimatedStat({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) {
  const { ref, count } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ── parallax floating blob ───────────────────────────────────── */
export function ParallaxBlob({
  className = "",
  speed = 0.3,
}: {
  className?: string;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [speed * 150, -speed * 150]), {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute rounded-full blur-3xl pointer-events-none opacity-30 dark:opacity-15 ${className}`}
    />
  );
}

/* ── scroll-driven progress bar for page sections ──────────────── */
const SECTIONS = [
  "Quick Overview",
  "The Process",
  "Why Acquire?",
  "Our Model",
  "Benefits",
  "Our Role",
  "Why Us?",
  "Issues",
  "Equity Stakes",
  "Author",
];

export function SectionProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * SECTIONS.length), SECTIONS.length - 1);
      setActiveIndex(idx);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* thin progress line at top */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[60]"
      />

      {/* floating section indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[55] hidden lg:flex flex-col items-end gap-3"
      >
        {SECTIONS.map((name, i) => (
          <div key={name} className="flex items-center gap-2 group cursor-pointer">
            <span
              className={`text-[10px] font-medium uppercase tracking-wider transition-all duration-300 ${
                i === activeIndex
                  ? "text-indigo-500 dark:text-indigo-400 opacity-100 translate-x-0"
                  : "text-slate-400 dark:text-slate-500 opacity-0 translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
              }`}
            >
              {name}
            </span>
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-indigo-500 scale-125 shadow-lg shadow-indigo-500/30"
                  : "bg-slate-300 dark:bg-slate-600 group-hover:bg-slate-400 dark:group-hover:bg-slate-500"
              }`}
            />
          </div>
        ))}
      </motion.div>
    </>
  );
}

/* ── scroll-triggered text highlight ─────────────────────────────── */
export function ScrollRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0.2, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── horizontal scroll card strip (within vertical page) ───────── */
export function HorizontalScrollCards({
  children,
  className = "",
}: {
  children: React.ReactNode[];
  className?: string;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex gap-6 w-max">
        {children}
      </motion.div>
    </div>
  );
}
