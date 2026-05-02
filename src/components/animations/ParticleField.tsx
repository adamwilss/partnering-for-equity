"use client";
import { useEffect, useRef, useState } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; alpha: number; color: string; shape: "circle" | "star" | "diamond";
  rotation: number; rotSpeed: number;
}

const COLORS = [
  "rgba(99,102,241,0.6)",
  "rgba(168,85,247,0.5)",
  "rgba(236,72,153,0.4)",
  "rgba(129,140,248,0.5)",
  "rgba(192,132,252,0.4)",
  "rgba(244,114,182,0.3)",
];

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const [reducedMotionPref, setReducedMotionPref] = useState(false);
  const { reducedMotion } = useSettings();

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotionPref(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotionPref(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || reducedMotionPref) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        shape: ["circle", "star", "diamond"][Math.floor(Math.random() * 3)] as Particle["shape"],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }
    particlesRef.current = particles;

    // Draw star shape
    const drawStar = (cx: number, cy: number, r: number, a: number) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = a + (i * Math.PI * 2) / 5 - Math.PI / 2;
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        // Inner point
        const innerAngle = angle + Math.PI / 5;
        const ipx = cx + Math.cos(innerAngle) * r * 0.4;
        const ipy = cy + Math.sin(innerAngle) * r * 0.4;
        ctx.lineTo(ipx, ipy);
      }
      ctx.closePath();
      ctx.fill();
    };

    // Draw diamond
    const drawDiamond = (cx: number, cy: number, r: number, a: number) => {
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = a + (i * Math.PI) / 2;
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        if (p.shape === "star") {
          drawStar(p.x, p.y, p.size * 1.5, p.rotation);
        } else if (p.shape === "diamond") {
          drawDiamond(p.x, p.y, p.size * 1.3, p.rotation);
        } else {
          // Glowing circle
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(1, "transparent");
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [reducedMotion, reducedMotionPref]);

  if (reducedMotion || reducedMotionPref) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
