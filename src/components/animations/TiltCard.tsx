"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useState, useRef, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  tiltAmount = 12,
  glareColor = "rgba(99,102,241,0.12)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
