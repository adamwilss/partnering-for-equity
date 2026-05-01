"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HowItWorks from "@/components/sections/HowItWorks";
import ForFounders from "@/components/sections/ForFounders";
import ForProviders from "@/components/sections/ForProviders";
import Features from "@/components/sections/Features";
import PartnersInGrowth from "@/components/sections/PartnersInGrowth";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import RevealBlock from "@/components/animations/RevealBlock";
import TiltCard from "@/components/animations/TiltCard";
import AnimatedDivider from "@/components/animations/AnimatedDivider";
import AssembleText from "@/components/animations/AssembleText";

function PortalHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_80%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      </div>

      {/* Portal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] flex items-center justify-center pointer-events-none">
        {/* Ring 1 - outermost, slow */}
        <motion.div
          className="absolute inset-0 rounded-full border border-indigo-500/10"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />
        {/* Ring 2 */}
        <motion.div
          className="absolute inset-8 rounded-full border border-purple-500/15"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        />
        {/* Ring 3 */}
        <motion.div
          className="absolute inset-20 rounded-full border border-indigo-400/20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        />
        {/* Ring 4 - dashed feel via gap */}
        <motion.div
          className="absolute inset-32 rounded-full border border-purple-400/25"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {/* Orbiting diamonds on ring 4 */}
          <motion.div
            className="absolute w-4 h-4 bg-indigo-400/60 rotate-45 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-purple-400/50 rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, delay: 2 }}
          />
          <motion.div
            className="absolute w-2.5 h-2.5 bg-pink-400/40 rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-indigo-300/50 rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
          />
        </motion.div>
        {/* Ring 5 - innermost */}
        <motion.div
          className="absolute inset-40 rounded-full border-2 border-indigo-300/30 shadow-[0_0_60px_rgba(99,102,241,0.2)]"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        />
        {/* Center glow */}
        <motion.div
          className="absolute inset-44 rounded-full bg-indigo-500/5 blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        {/* Floating diamond shapes around */}
        {[
          { top: "5%", left: "15%", size: 16, dur: 6, delay: 0 },
          { top: "10%", right: "10%", size: 12, dur: 7, delay: 1 },
          { bottom: "15%", left: "5%", size: 20, dur: 5, delay: 2 },
          { bottom: "8%", right: "15%", size: 14, dur: 8, delay: 0.5 },
          { top: "30%", left: "2%", size: 10, dur: 6.5, delay: 3 },
          { top: "25%", right: "3%", size: 18, dur: 7.5, delay: 1.5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-indigo-400/50 to-purple-400/50 rotate-45 rounded-sm"
            style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: [45, 135, 45],
            }}
            transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Star dots floating randomly */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + Math.random() * 4,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            UK Business Acquisition Strategy
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[0.92] whitespace-nowrap"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-700 bg-clip-text text-transparent">
            Partnering
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            for Equity
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          We partner with ambitious business owners and senior leaders to acquire a series of established UK businesses,
          systemise them, and exit to Private Equity within 3 to 5 years.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/founders"
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-slate-900 font-medium text-sm md:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">I&apos;m an Equity Partner</span>
          </Link>
          <Link
            href="/providers"
            className="inline-flex items-center px-8 py-4 rounded-full bg-slate-100 backdrop-blur-md border border-slate-300 text-slate-900 font-medium text-sm md:text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-lg shadow-slate-200"
          >
            I&apos;m a Succession Founder
          </Link>
        </motion.div>

        <motion.p
          className="text-slate-200 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          From the team that returned £70 billion to consumers. 30+ years of UK acquisition and exit experience.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
      >
        <span className="text-slate-300 text-xs">Scroll to explore</span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <polyline points="6,9 12,15 18,9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-16 px-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { num: "200,000+", label: "UK Businesses Aged 60+" },
          { num: "80,000", label: "Unsellable Traditionally" },
          { num: "£10m–£50m", label: "Typical Group Exit" },
          { num: "30+", label: "Years Acquisition Experience" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
              {stat.num}
            </div>
            <div className="text-slate-300 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyEquitySection() {
  const reasons = [
    {
      title: "Established businesses, not risky startups.",
      desc: "You are acquiring businesses with 20+ years of hard work behind them — proven revenue, real customers, and existing cash flow. This is the fastest, safest, and lowest-risk strategy for building wealth.",
      accent: "border-l-teal-400",
    },
    {
      title: "The 80% traditional buyers cannot touch.",
      desc: "Owner dependency, transfer-of-value issues, and financing gaps make most businesses 'unsellable.' Our Partnering for Equity strategy turns those exact problems into your opportunities.",
      accent: "border-l-amber-400",
    },
    {
      title: "Arbitrage: buy low, sell the group high.",
      desc: "Acquire individual businesses for 1–3x EBITDA. Roll them into a systemised group and sell to Private Equity for 9–12x EBITDA. That is how generational wealth is created.",
      accent: "border-l-rose-400",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <RevealBlock>
              <AssembleText
                text="Why Partnering for Equity Wins"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight whitespace-nowrap"
              />
            </RevealBlock>
          </div>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <RevealBlock key={r.title} delay={i * 0.2} direction="left">
                <div
                  className={`p-6 rounded-2xl bg-slate-100 border border-slate-200 border-l-2 ${r.accent} hover:bg-slate-50 transition-all duration-300`}
                >
                  <h3 className="text-slate-900 font-semibold text-lg mb-2">{r.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{r.desc}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CashVsEquity() {
  const cashItems = [
    "6+ months to close, often years",
    "Banks reject 80% of deals",
    "Personal guarantees required",
    "Cash drain during search phase",
    "90% of deals fail before closing",
  ];
  const equityItems = [
    "Acquire 5+ businesses per year",
    "No bank debt, no PGs needed",
    "Revenue from day one via fees",
    "Creative financing preserves capital",
    "80% of 'unsellable' businesses become yours",
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <RevealBlock>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight whitespace-nowrap">
            Traditional Acquisition{" "}
            <span className="text-slate-200">vs</span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Partnering for Equity
            </span>
          </h2>
        </RevealBlock>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cash side - dull */}
          <RevealBlock direction="left" delay={0.2}>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 opacity-70 hover:opacity-100 transition-opacity duration-500">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-slate-500 font-semibold text-xl mb-6">Traditional Acquisition</h3>
              <ul className="space-y-4">
                {cashItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealBlock>

          {/* Equity side - vibrant */}
          <RevealBlock direction="right" delay={0.4}>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/[0.05] to-purple-500/[0.05] border border-indigo-500/15 shadow-[0_0_30px_rgba(99,102,241,0.05)]">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-slate-900 font-semibold text-xl mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Partnering for Equity
              </h3>
              <ul className="space-y-4">
                {equityItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-500">
                    <span className="w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400">
                        <polyline points="1,4 3,6 7,2" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}

function EarningPotential() {
  const scenarios = [
    { equity: "1x EBITDA", exit: "3x EBITDA", value: "3x return", color: "from-indigo-500 to-blue-500", desc: "Single business acquired" },
    { equity: "3x EBITDA", exit: "9x EBITDA", value: "3x arbitrage", color: "from-purple-500 to-pink-500", desc: "Group of 5 businesses" },
    { equity: "5x EBITDA", exit: "12x EBITDA", value: "2.4x arbitrage", color: "from-amber-500 to-orange-500", desc: "Group of 10+ businesses" },
  ];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_20%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      <div className="max-w-5xl mx-auto relative">
        <RevealBlock>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-4 tracking-tight whitespace-nowrap">
            The Power of Arbitrage
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-lg mx-auto">
            Buy businesses for 1–3x EBITDA. Sell the group for 9–12x EBITDA.
          </p>
        </RevealBlock>

        <div className="grid md:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <RevealBlock key={s.equity} delay={i * 0.15}>
              <TiltCard tiltAmount={8} glareColor="rgba(99,102,241,0.08)">
                <div className="p-8 rounded-2xl bg-slate-100 border border-slate-200 hover:border-indigo-500/15 transition-all duration-500 text-center group">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-4`}>
                    Scenario {i + 1}
                  </div>
                  <div className="text-sm text-slate-400 mb-2">{s.desc}</div>
                  <div className="text-sm text-slate-300 mb-2">Buy at {s.equity} → Sell at {s.exit}</div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                    {s.value}
                  </div>
                  <div className="text-slate-300 text-xs mt-3">*Illustrative example</div>
                </div>
              </TiltCard>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <PortalHero />
      <TrustBar />
      <HowItWorks />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <WhyEquitySection />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <ForFounders />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <CashVsEquity />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <ForProviders />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <Features />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <PartnersInGrowth />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <EarningPotential />
      <AnimatedDivider className="max-w-4xl mx-auto px-8" />
      <FAQ />
      <CTABanner />
    </>
  );
}
