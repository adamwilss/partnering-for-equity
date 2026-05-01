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
            Equity Partner Path
          </motion.span>

          <AssembleText
            text="Build a £10m–£50m Group"
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-amber-100/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Partner with us to acquire a series of established businesses in your sector,
            systemise them into a valuable roll-up group, and exit to Private Equity within 3 to 5 years.
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
                Start Your Journey
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
            { num: "5–20+", label: "Businesses per Group" },
            { num: "30/70", label: "JV Equity Split" },
            { num: "£10m–£50m", label: "Target Exit Value" },
            { num: "3–5 yrs", label: "Timeline to PE Exit" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
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

      {/* THE EQUITY PARTNER JOURNEY */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">
              The Equity Partner{" "}
              <span className="text-amber-400">Journey</span>
            </h2>
          </RevealBlock>

          {[
            {
              step: "01",
              title: "Partner & Plan",
              desc: "We review your business, map the Transfer of Value issues, and set up a jointly owned Group holding company (30/70 in our favour). This adds no risk to your current business and protects your asset.",
              dir: "right" as const,
            },
            {
              step: "02",
              title: "Stabilise & Systemise",
              desc: "We install NetSuite, AI, marketing and sales systems into your platform business, making it the flagship. We fix the issues that make most businesses 'unbuyable' — owner dependency, poor finance function, lack of processes — and free your time to focus on growing the Group.",
              dir: "left" as const,
            },
            {
              step: "03",
              title: "Acquire & Assimilate",
              desc: "We source 5–20 similar businesses from Succession Founders using our Partnering for Equity model. We gain 20–30% equity for the value we create, implement systems in each acquisition, and roll them into the Group. Non-fitting businesses are sold off for liquidity events.",
              dir: "right" as const,
            },
            {
              step: "04",
              title: "Scale & Exit",
              desc: "We grow the Group to £3m–£5m+ EBITDA (or higher), then sell to Private Equity or IPO within 3–5 years. After debt is cleared, you receive your 30% share of the proceeds — often £10m–£20m+.",
              dir: "left" as const,
            },
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
              Why Equity Partners{" "}
              <span className="text-amber-400">Choose Us</span>
            </h2>
          </RevealBlock>

          <StaggerCards staggerDelay={0.12} className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "JV Holding Company",
                desc: "A jointly owned vehicle (30/70) that acquires equity in a series of similar companies. This adds no risk to your current business and protects your asset.",
                icon: "🏛️",
              },
              {
                title: "Acquire the Unsellable 80%",
                desc: "Most traditional buyers walk away from 80% of businesses. Our strategy turns those exact problems into your opportunities.",
                icon: "🎯",
              },
              {
                title: "Stabilise, Systemise, Scale",
                desc: "We install NetSuite, AI, and marketing and sales systems across every acquisition. Your business becomes the flagship of a fully systemised group.",
                icon: "⚙️",
              },
              {
                title: "Creative Financing",
                desc: "No bank debt with personal guarantees. We raise acquisition finance through MBO funding or our Secured Annuity Bond — preserving your capital.",
                icon: "⚡",
              },
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

      {/* STRUGGLES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              The Struggles We{" "}
              <span className="text-amber-400">Solve</span>
            </h2>
          </RevealBlock>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You don't know how to build a Group that is attractive to Private Equity",
              "You don't know how to build a business around your service",
              "You don't know how to build enterprise value",
              "You don't know how to scale — aka acquire businesses effectively",
              "You don't know how to build the infrastructure to build or scale",
              "You don't have formal processes, with many dwelling inside key people",
              "You lack the systems required to build and scale",
              "You lack the expertise and experience to acquire other businesses",
            ].map((struggle, i) => (
              <RevealBlock key={struggle} delay={i * 0.08}>
                <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.03] flex items-start gap-4 hover:border-amber-500/10 transition-all duration-300">
                  <span className="text-amber-400 font-bold text-sm mt-0.5">{i + 1}</span>
                  <p className="text-white/45 text-sm leading-relaxed">{struggle}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* CASE STUDY */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <RevealBlock>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-500/[0.03] to-orange-500/[0.03] border border-amber-500/10 relative">
              <span className="absolute -top-4 left-8 text-8xl text-amber-500/10 select-none">&ldquo;</span>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic relative z-10 mb-6">
                A fire safety business with £8m revenue and £1m EBITDA. The 50-year-old founder had no Finance Director, no Sales Director, and no Marketing Director. After 18 years, he was hungry to exit for over £20m. We set up a JV holding company, sourced 20+ similar businesses, implemented NetSuite and AI across the group, and built a roll-up on course for a £50m+ exit to Private Equity.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                  DH
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">David Hargraves</div>
                  <div className="text-white/30 text-xs">Chairman, Blue Sky Group</div>
                </div>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Ready to Build Your Group?" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-amber-100/40 mb-10 text-lg">Join the Equity Partners who are acquiring the 80% of businesses traditional buyers cannot touch.</p>
          <MagneticButton strength={0.5}>
            <Link
              href="#"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-lg shadow-xl shadow-amber-500/20"
            >
              Start Your Journey
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
