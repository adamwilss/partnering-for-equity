"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealBlock from "@/components/animations/RevealBlock";
import StaggerCards from "@/components/animations/StaggerCards";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import AssembleText from "@/components/animations/AssembleText";
import AnimatedDivider from "@/components/animations/AnimatedDivider";

export default function ProvidersPage() {
  return (
    <>
      {/* HERO — Teal/Emerald */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(20,184,166,0.1),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_70%_60%,rgba(52,211,153,0.06),rgba(255,255,255,0))]" />
        </div>

        {/* Floating teal orbs */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 60, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 mb-6 tracking-wide uppercase"
          >
            Succession Founder Path
          </motion.span>

          <AssembleText
            text="Exit Safely, Maximise Value"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6 block whitespace-nowrap"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-600/70 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We partner with established business owners who want to retire within 1 to 5 years.
            We derisk and systemise your business, prepare it for acquisition at a higher valuation,
            and ensure your team is looked after.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <MagneticButton strength={0.5}>
              <Link
                href="#cta"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300"
              >
                Explore Your Exit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* EQUITY TIMELINE TEASER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/[0.03] to-teal-500/[0.03] border border-emerald-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                </div>
                <span className="text-slate-400 text-xs ml-2">Equity Timeline</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Your Path to a Premium Exit</h3>
              <p className="text-slate-500 mb-8">We increase your business value while you retain income and purpose.</p>

              <div className="space-y-4">
                {[
                  { label: "Month 0", text: "Business review and valuation" },
                  { label: "Month 1", text: "Call Option signed — pre-determined acquisition price" },
                  { label: "Month 3", text: "20% equity transferred. Value already increased." },
                  { label: "Month 6–12", text: "NetSuite, AI, and systems implemented" },
                  { label: "Month 12–18", text: "Remaining equity acquired at higher valuation" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-emerald-400 font-bold text-sm w-20 flex-shrink-0">{item.label}</span>
                    <span className="text-slate-500 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <span className="text-emerald-600 font-bold text-3xl">Higher Valuation</span>
                <p className="text-slate-500 text-sm mt-1">By the time we acquire the rest of your equity, the business value should have increased by more than the equity we took.</p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* BENEFIT CARDS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight whitespace-nowrap">
              Why Succession Founders{" "}
              <span className="text-emerald-600">Trust Us</span>
            </h2>
          </RevealBlock>

          <StaggerCards className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Derisk Your Business",
                desc: "We stabilise and systemise your business, implementing ERP, AI, and proven processes so it can operate without you — dramatically increasing its sale value.",
                style: "shadow-[0_0_30px_rgba(20,184,166,0.08)]",
              },
              {
                title: "Retain Income & Purpose",
                desc: "You keep an income to sustain you financially and we give you a meaningful role so you retain your purpose. You are not cast aside.",
                style: "bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(20,184,166,0.02)_4px,rgba(20,184,166,0.02)_8px)]",
              },
              {
                title: "Higher Valuation on Exit",
                desc: "By the time we acquire the rest of your equity, the business value should have increased by more than the equity we took. You exit at a premium.",
                style: "border-emerald-500/15",
              },
              {
                title: "Safe Pair of Hands",
                desc: "We are the advisor and partner you never had. Your legacy is protected, your team is looked after, and your business continues to thrive.",
                style: "bg-gradient-to-br from-emerald-500/[0.03] to-teal-500/[0.03]",
              },
            ].map((b) => (
              <TiltCard key={b.title} tiltAmount={10} glareColor="rgba(20,184,166,0.06)">
                <div className={`p-8 rounded-2xl bg-slate-100 border border-slate-200 hover:border-emerald-500/20 transition-all duration-300 h-full ${b.style}`}>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60 mb-4" />
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{b.desc}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight whitespace-nowrap">
              The Struggles We{" "}
              <span className="text-emerald-600">Understand</span>
            </h2>
          </RevealBlock>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Your mindset has shifted towards building a legacy, but you don't know how.",
              "You are focused on securing your retirement, but you don't know how to achieve this.",
              "Your business is not in a fit state to sell to a buyer.",
              "Your business does not have the processes and systems to operate without you, making it challenging to sell and reducing its value.",
              "You may be 'fed up' with your current role and yearn for the 'old days' when life was simpler.",
              "You are increasingly concerned about the impact of AI and whether your business will survive.",
              "You yearn to have more time with your grandchildren.",
              "You or your spouse may be dealing with ill health.",
              "You lack motivation because you don't have a young team of experienced business leaders by your side.",
            ].map((struggle, i) => (
              <RevealBlock key={struggle} delay={i * 0.06}>
                <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-4 hover:border-emerald-500/10 transition-all duration-300">
                  <span className="text-emerald-600 font-bold text-sm mt-0.5">{i + 1}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{struggle}</p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight whitespace-nowrap">
              What We Deliver{" "}
              <span className="text-emerald-600">For You</span>
            </h2>
          </RevealBlock>

          <StaggerCards className="space-y-4">
            {[
              { emoji: "🛡️", text: "Derisk your business so it can be acquired" },
              { emoji: "⚙️", text: "Stabilise and systemise your business with NetSuite, AI, and proven processes" },
              { emoji: "📈", text: "Focus on derisking so we are less exposed on acquisition — prepare to sell within 12 months" },
              { emoji: "💰", text: "Build wealth outside of your business" },
              { emoji: "🤝", text: "Give you a meaningful role so you retain your purpose" },
              { emoji: "🏛️", text: "Acquire your business into a valuable group or facilitate sale to another buyer" },
            ].map((item, i) => (
              <div
                key={item.text}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-100 border border-slate-200 hover:border-emerald-500/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-lg flex-shrink-0">
                  {item.emoji}
                </div>
                <p className="text-slate-500 text-sm">{item.text}</p>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* PERKS ROW */}
      <section className="py-16 px-4 border-y border-slate-200 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {["De-risk", "Stabilise", "Systemise", "Retain Income", "Preserve Legacy", "Premium Exit"].map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="px-5 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-600/80 text-sm font-medium"
              >
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Ready to Explore Your Exit?" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 block whitespace-nowrap" />
          <p className="text-emerald-600/60 mb-10 text-lg">You have built something valuable. Let us help you exit safely and maximise what it is worth.</p>
          <MagneticButton strength={0.5}>
            <Link
              href="#"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg shadow-xl shadow-emerald-500/20"
            >
              Explore Your Exit
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
