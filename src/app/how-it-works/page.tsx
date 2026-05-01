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
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-cyan-100/50 max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Five steps. Decades of UK acquisition experience. Zero personal guarantees.
            This is how groups are built and exits are achieved.
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
            title: "Discovery & Strategic Review",
            desc: "We begin with a deep diagnostic of the business to identify critical issues, hidden opportunities, and strategic fit. For Equity Partners, we assess whether their business can serve as the flagship for a roll-up group and define the ideal acquisition avatar together. For Succession Founders, we review what the business is worth now versus what it could be worth once derisked and systemised.",
            bullets: [
              "Comprehensive business review and valuation assessment",
              "Identification of serious problems, operational gaps, and growth levers",
              "Definition of the ideal win scenario and acquisition criteria",
              "Transfer of Value diagnostics to spot deal-killers early",
            ],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50">
                <div className="space-y-3">
                  {["Business Review", "Valuation Assessment", "Transfer of Value Audit", "Strategic Fit Analysis", "Win Scenario Mapping"].map((field, i) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
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
            title: "Stabilise & Systemise",
            desc: "We implement the operational backbone that transforms the business from owner-dependent to investor-ready. This includes deploying ERP systems (NetSuite), AI tools, and proven marketing and sales processes. For Equity Partners, this makes their business a high-value flagship capable of anchoring a group. For Succession Founders, this derisks the business and prepares it for acquisition or sale within 12 months.",
            bullets: [
              "Implementation of ERP, AI, and marketing/sales systems",
              "Reduction of owner dependency and operational headaches",
              "Increased profit margins and enterprise value",
              "PE-grade reporting and governance infrastructure",
            ],
            visual: (
              <div className="relative p-6 rounded-2xl border border-blue-500/20 bg-slate-900/50 flex items-center justify-center h-64">
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs text-blue-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  Owner-Dependent
                </motion.div>
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
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + j * 0.2, duration: 0.8 }}
                  />
                ))}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xs text-cyan-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                >
                  Investor-Ready
                </motion.div>
              </div>
            ),
          },
          {
            num: "03",
            title: "Structure the Partnership",
            desc: "We create the legal and financial framework for the Partnering for Equity deal. For Equity Partners, we establish a jointly owned holding company (typically 30/70) to acquire similar businesses and mentor the founder to become the Group CEO. For Succession Founders, we structure a deal where we are vested with increasing equity based on performance metrics, while the owner gradually reduces involvement, retains income, and keeps their purpose.",
            bullets: [
              "Holding company setup and equity structuring",
              "Performance-based vesting agreements",
              "Call Options and NED agreements",
              "Clear path to eventual full acquisition or exit",
            ],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50 grid grid-cols-2 gap-3">
                {["JV Holding Company", "30/70 Equity Split", "Call Option Signed", "NED Retainer", "Revenue Share", "Shareholder Agreement"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.15, duration: 0.3 }}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-white/50 text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            ),
          },
          {
            num: "04",
            title: "Acquire & Build the Group",
            desc: "We source and acquire 5–20 similar businesses to build a roll-up group. For Equity Partners, we leverage their sector knowledge and reputation to find targets, then stabilise and integrate each acquisition under the group umbrella. For Succession Founders, their business is either acquired into a relevant group at a higher valuation or sold to another buyer once fully prepared.",
            bullets: [
              "Sourcing and qualifying target acquisitions",
              "Stabilisation and systemisation of acquired businesses",
              "Group integration and economies of scale",
              "Creative financing via Secured Annuity Bond or bank MBO",
            ],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  {["Flagship", "Acquisition 1", "Acquisition 2", "Acquisition N"].map((label, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.2 }}
                      className={`w-20 h-20 rounded-xl flex items-center justify-center text-xs text-center ${
                        i === 0 ? "bg-blue-500/10 border border-blue-500/20 text-blue-300" : "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                      }`}
                    >
                      {label}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-cyan-500/20" />
                <div className="mt-3 text-center text-xs text-white/30">Roll-up Group</div>
              </div>
            ),
          },
          {
            num: "05",
            title: "Scale & Exit",
            desc: "We focus on maximising group value and orchestrating the ultimate wealth event. For Equity Partners, this means raising finance for MBOs, building wealth outside the business (e.g. via SSAS), and selling the group to Private Equity or taking it to IPO. For Succession Founders, this means completing the sale or transition on their terms, preserving their legacy and achieving a valuation multiples higher than before.",
            bullets: [
              "Wealth-building strategies outside the business",
              "PE-grade reporting and group optimisation",
              "Exit to Private Equity, IPO, or strategic sale",
              "Buy at 1–3x EBITDA, sell the group at 9–12x EBITDA",
            ],
            visual: (
              <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                  £10m–£50m+
                </motion.div>
                <div className="text-white/30 text-sm mt-2">Typical Group Exit Value</div>
                <div className="mt-4 flex justify-center gap-2">
                  {["Private Equity", "IPO", "Strategic Sale"].map((label) => (
                    <span key={label} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs">
                      {label}
                    </span>
                  ))}
                </div>
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
                        viewport={{ once: false }}
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

      {/* 6 STRATEGIES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              The{" "}<span className="text-cyan-400">6 Primary Strategies</span>
            </h2>
          </RevealBlock>

          <StaggerCards staggerDelay={0.12} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Solve Serious Problems", pct: "Strategy 1", desc: "Target critical pain points — declining sales, broken marketing, operational inefficiencies, owner dependency. By solving these problems, we create immediate measurable value and earn equity stakes." },
              { title: "Convert Deal Flow", pct: "Strategy 2", desc: "Transform your current advisory or consulting relationships into Partnering for Equity deals. Stop selling hours — start owning outcomes." },
              { title: "Help Owners Sell", pct: "Strategy 3", desc: "Assist business owners in selling their business and be paid millions when they sell. We prepare the business, find the buyer, and take a slice of the upside." },
              { title: "Grow Through Acquisition", pct: "Strategy 4", desc: "Partner with growth-oriented owners who have hit a ceiling. We lead origination, structuring, negotiation, and integration in exchange for equity." },
              { title: "Partnering for Equity Roll-Ups", pct: "Strategy 5", desc: "Our favourite. Create industry-specific roll-ups by partnering with a flagship business owner, then source and acquire 5–20 similar businesses under a jointly owned holding company." },
              { title: "Support Retiring Owners", pct: "Strategy 6", desc: "For owners who want to retire, we derisk and systemise their business, then either acquire it into our group at a higher valuation or assist in selling it for maximum proceeds." },
            ].map((factor) => (
              <div key={factor.title} className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-cyan-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold">{factor.title}</h3>
                  <span className="text-cyan-400 font-bold text-sm">{factor.pct}</span>
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
              From First Contact to{" "}
              <span className="text-cyan-400">Partnership</span>
            </h2>
          </RevealBlock>

          <div className="relative pl-8 border-l border-cyan-500/20 space-y-12">
            {[
              { step: "Discovery Call", time: "30 min", desc: "We discuss your business, your goals, and whether Partnering for Equity is the right fit." },
              { step: "Business Review", time: "1–2 weeks", desc: "We conduct a comprehensive review to identify issues, opportunities, and strategic fit." },
              { step: "Partnership Structure", time: "2–4 weeks", desc: "We design the JV holding company, equity split, call options, and NED agreements." },
              { step: "Implementation", time: "3–12 months", desc: "We install NetSuite, AI, marketing systems, and begin sourcing acquisitions." },
              { step: "Group Build & Exit", time: "3–5 years", desc: "We acquire, assimilate, scale, and sell the group to Private Equity or IPO." },
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
          <AssembleText text="Ready to Build Your Group?" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-cyan-100/40 mb-10 text-lg">The roadmap is clear. The team is ready. Your journey starts with one conversation.</p>
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
