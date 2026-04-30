"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealBlock from "@/components/animations/RevealBlock";
import StaggerCards from "@/components/animations/StaggerCards";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import AssembleText from "@/components/animations/AssembleText";
import AnimatedDivider from "@/components/animations/AnimatedDivider";

function CircuitLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 1200 800" fill="none">
      <motion.path
        d="M0 400 L300 400 L400 300 L600 300"
        stroke="rgba(6,182,212,0.8)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M1200 200 L900 200 L800 300 L500 300"
        stroke="rgba(6,182,212,0.6)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 1.3, ease: "easeOut" }}
      />
      <motion.path
        d="M0 500 L200 500 L300 400 L700 400"
        stroke="rgba(59,130,246,0.6)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M1200 600 L1000 600 L900 500 L600 500"
        stroke="rgba(6,182,212,0.5)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 1.6, ease: "easeOut" }}
      />
      {/* Nodes */}
      {[[300, 400], [600, 300], [800, 300], [500, 300], [700, 400], [900, 500], [600, 500]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx} cy={cy} r="4"
          fill="rgba(6,182,212,0.8)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
        />
      ))}
    </svg>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(6,182,212,0.1),rgba(255,255,255,0))]" />
        <CircuitLines />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-6 tracking-wide uppercase"
          >
            The Process
          </motion.span>

          <AssembleText
            text="How It Works"
            className="text-6xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-cyan-100/50 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Three steps. AI-powered matches. Zero cash upfront. This is how partnerships are born.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <MagneticButton strength={0.4}>
              <Link
                href="#steps"
                className="inline-flex items-center px-8 py-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300"
              >
                See the steps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                  <line x1="12" y1="5" x2="12" y2="19" /><polyline points="5 12 12 19 19 12" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* FULL-VIEWPORT STEPS */}
      <section id="steps">
        {[
          {
            num: "01",
            title: "Create Your Profile",
            desc: "Tell us who you are. Founders describe their startup and what they need. Providers showcase their skills and equity expectations. The setup takes under 10 minutes — our guided flow makes it effortless.",
            bullets: ["Describe your startup or skills", "Set equity preferences and availability", "Upload portfolio or pitch deck", "AI enriches your profile automatically"],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50">
                <div className="space-y-3">
                  {["Company Name", "Industry → SaaS / AI / FinTech", "Skills Needed → Full-Stack Dev", "Equity Offer → 1-3%", "Timeline → 6 months"].map((field, i) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400/40 flex-shrink-0" />
                      <span className="text-white/50">{field}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            num: "02",
            title: "AI Matching Engine",
            desc: "This is where the magic happens. Our proprietary algorithm analyzes dozens of data points — skills, equity preferences, industry expertise, working styles, values — and surfaces the 3-5 best matches for both sides.",
            bullets: ["Skills compatibility scored on 9 dimensions", "Equity expectation alignment verified", "Culture fit and values matching", "Industry domain expertise weighted"],
            visual: (
              <div className="relative p-6 rounded-2xl border border-blue-500/20 bg-slate-900/50 flex items-center justify-center h-64">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs text-blue-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  Founder
                </motion.div>
                {/* Connecting arcs */}
                {[0, 1, 2].map((j) => (
                  <motion.div
                    key={j}
                    className="absolute top-1/2 left-[120px] right-[120px] h-px"
                    style={{
                      background: `linear-gradient(to right, rgba(59,130,246,${0.3 - j * 0.08}), rgba(6,182,212,${0.3 - j * 0.08}))`,
                      top: `calc(50% + ${(j - 1) * 30}px)`,
                      transformOrigin: "left",
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.2, duration: 0.8 }}
                  />
                ))}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xs text-cyan-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                >
                  Provider
                </motion.div>
              </div>
            ),
          },
          {
            num: "03",
            title: "Start Building, Together",
            desc: "Once matched, you connect directly. Video chat, review work, negotiate terms. Our platform provides smart legal agreements, milestone tracking, and a shared workspace. Equity vests as milestones are hit.",
            bullets: ["Video introduction and portfolio review", "Built-in equity agreement templates", "Milestone-based vesting schedules", "Integrated collaboration workspace"],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50 grid grid-cols-2 gap-3">
                {["Milestone 1: MVP ✓", "10% Equity Vested", "Milestone 2: Beta", "20% Equity Pending"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.3 }}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-white/50 text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            ),
          },
        ].map((step, i) => (
          <div key={step.num} className="relative min-h-[70vh] flex items-center py-16 px-4 sm:px-6 lg:px-8 border-b border-white/[0.03]">
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-8xl font-black text-cyan-500/[0.06] select-none block -mb-8">{step.num}</span>
                <RevealBlock delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 tracking-tight">{step.title}</h2>
                  <p className="text-white/45 leading-relaxed mb-6 text-base">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.bullets.map((b, j) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center gap-3 text-white/55 text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                            <polyline points="1,4 3,6 7,2" />
                          </svg>
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </RevealBlock>
              </div>
              <RevealBlock direction="left" delay={0.3}>
                {step.visual}
              </RevealBlock>
            </div>
          </div>
        ))}
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* MATCHING FACTORS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              What We <span className="text-cyan-400">Analyze</span>
            </h2>
          </RevealBlock>

          <StaggerCards staggerDelay={0.12} className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Skills Match", pct: 94, desc: "Technical and creative skills cross-referenced against startup needs." },
              { title: "Equity Alignment", pct: 88, desc: "Both sides' equity expectations matched to prevent negotiation deadlock." },
              { title: "Culture Fit", pct: 91, desc: "Working styles, communication preferences, and values alignment scored." },
              { title: "Industry Focus", pct: 86, desc: "Domain expertise weighted so fintech founders match fintech-savvy providers." },
            ].map((factor) => (
              <div key={factor.title} className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-cyan-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold">{factor.title}</h3>
                  <span className="text-cyan-400 font-bold text-sm">{factor.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.04] rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${factor.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="text-white/35 text-sm leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* TIMELINE */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
              From Signup to <span className="text-cyan-400">Partnership</span>
            </h2>
          </RevealBlock>

          <div className="relative pl-8 border-l border-cyan-500/20 space-y-12">
            {[
              { step: "Sign Up", time: "5 min", desc: "Create your account and choose your path — Founder or Provider." },
              { step: "Build Profile", time: "10 min", desc: "Answer guided questions. Our AI enriches your profile automatically." },
              { step: "AI Matching", time: "Instant", desc: "Our engine scans and scores potential partners. You review curated matches." },
              { step: "Connect", time: "1-3 days", desc: "Video chat with matches. Review portfolios. Discuss terms and expectations." },
              { step: "Sign & Start", time: "24hr", desc: "Use our legal templates. Sign the equity agreement. Start building together." },
            ].map((item, i) => (
              <RevealBlock key={item.step} delay={i * 0.1} direction="left">
                <div className="relative">
                  <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-2 border-slate-950" />
                  <span className="text-cyan-400/60 text-xs font-semibold uppercase tracking-wider">{item.time}</span>
                  <h3 className="text-white font-bold text-lg mt-1">{item.step}</h3>
                  <p className="text-white/35 text-sm mt-1">{item.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Ready to Find Your Partner?" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-cyan-100/40 mb-10 text-lg">The matching engine is waiting.</p>
          <MagneticButton strength={0.5}>
            <Link
              href="#"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-xl shadow-cyan-500/20"
            >
              Get Started Now
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
