"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealBlock from "@/components/animations/RevealBlock";
import StaggerCards from "@/components/animations/StaggerCards";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import AssembleText from "@/components/animations/AssembleText";
import AnimatedDivider from "@/components/animations/AnimatedDivider";

export default function FoundersPage() {
  return (
    <>
      {/* HERO — Amber/Gold */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(245,158,11,0.15),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_70%,rgba(251,191,36,0.08),rgba(255,255,255,0))]" />
        </div>

        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-300 mb-6 tracking-wide uppercase"
          >
            Founder Mode
          </motion.span>

          <AssembleText
            text="Build Without Burn"
            className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-amber-100/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            The top 1% of developers, designers, and marketers are ready to build your vision —
            for equity, not cash.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <MagneticButton strength={0.5}>
              <Link
                href="#cta"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-shadow duration-300"
              >
                Find Your Partners
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 px-4 border-y border-white/[0.03] bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "2,000+", label: "Vetted Providers" },
            { num: "48hr", label: "Avg Match Time" },
            { num: "95%", label: "Satisfaction Rate" },
            { num: "$0", label: "Upfront Cost" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="text-white/30 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* THE FOUNDER JOURNEY — zigzag */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
              The Founder <span className="text-amber-400">Journey</span>
            </h2>
          </RevealBlock>

          {[
            { step: "01", title: "Tell Us About Your Startup", desc: "Describe your vision, what you're building, and the skills you need. Our AI builds your founder profile in minutes.", dir: "right" as const },
            { step: "02", title: "Review AI-Curated Matches", desc: "We analyze thousands of provider profiles to find the 3-5 best matches based on skills, equity expectations, and culture fit.", dir: "left" as const },
            { step: "03", title: "Meet Your Future Partners", desc: "Video chat, review portfolios, discuss terms. When you find the right fit, our platform handles the equity agreement.", dir: "right" as const },
            { step: "04", title: "Build Together", desc: "Collaborate through our integrated workspace. Track milestones, release equity tranches, and build something extraordinary.", dir: "left" as const },
          ].map((item, i) => (
            <RevealBlock key={item.step} delay={i * 0.15} direction={item.dir}>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-12 group">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500/40 group-hover:bg-amber-500/[0.15] transition-all duration-300">
                  <span className="text-2xl font-black text-amber-400">{item.step}</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] flex-1 group-hover:border-amber-500/10 transition-all duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* BENEFITS 2x2 TiltCards */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              Why Founders <span className="text-amber-400">Choose Us</span>
            </h2>
          </RevealBlock>

          <StaggerCards staggerDelay={0.12} className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Preserve Capital", desc: "Keep cash for ops, marketing, and growth. Your runway stretches further when talent works for equity.", icon: "💰" },
              { title: "Aligned Incentives", desc: "Equity-holding providers are driven by outcomes, not hours logged. Your win is their win.", icon: "🎯" },
              { title: "Vetted Excellence", desc: "Every provider passes a rigorous review. Only the top percentile joins the platform.", icon: "🛡️" },
              { title: "AI Precision Matching", desc: "No endless scrolling. Our engine delivers curated matches tailored to your specific needs.", icon: "⚡" },
            ].map((b) => (
              <TiltCard key={b.title} tiltAmount={8} glareColor="rgba(245,158,11,0.06)">
                <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-amber-500/10 transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-white/35 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </TiltCard>
            ))}
          </StaggerCards>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* TESTIMONIAL */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-2xl mx-auto">
          <RevealBlock>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-500/[0.03] to-orange-500/[0.03] border border-amber-500/10 relative">
              <span className="absolute -top-4 left-8 text-8xl text-amber-500/10 select-none">&ldquo;</span>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic relative z-10 mb-6">
                Partnering for Equity completely transformed how we build. We found a CTO-level engineer
                who believed in our vision — and now he owns 2% of the company. Best decision we ever made.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                  AK
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Alex Kim</div>
                  <div className="text-white/30 text-xs">Founder, DataBridge AI</div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Ready to Build?" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-amber-100/40 mb-10 text-lg">Join the founders who are building with equity, not cash.</p>
          <MagneticButton strength={0.5}>
            <Link
              href="#"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/20"
            >
              Get Early Access
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
