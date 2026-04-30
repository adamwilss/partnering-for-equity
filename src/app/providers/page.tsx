"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import RevealBlock from "@/components/animations/RevealBlock";
import StaggerCards from "@/components/animations/StaggerCards";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import AssembleText from "@/components/animations/AssembleText";
import FlipCard from "@/components/animations/FlipCard";
import AnimatedDivider from "@/components/animations/AnimatedDivider";

export default function ProvidersPage() {
  const startupCards = [
    { name: "EcoChain", desc: "Blockchain carbon credits", equity: "1.5%", potential: "$375,000", color: "emerald" },
    { name: "MedSync AI", desc: "AI-powered medical records", equity: "0.75%", potential: "$187,500", color: "teal" },
    { name: "LearnLoop", desc: "EdTech gamified learning", equity: "2.0%", potential: "$500,000", color: "green" },
  ];

  return (
    <>
      {/* HERO — Teal/Emerald */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(20,184,166,0.12),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_70%_60%,rgba(52,211,153,0.08),rgba(255,255,255,0))]" />
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
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 mb-6 tracking-wide uppercase"
          >
            Provider Mode
          </motion.span>

          <AssembleText
            text="Your Skills Are Worth More"
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-100/50 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Stop trading time for money. Start earning equity in the startups you help build.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <MagneticButton strength={0.5}>
              <Link
                href="#"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow duration-300"
              >
                Start Earning Equity
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* EQUITY CALCULATOR TEASER */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/[0.03] to-teal-500/[0.03] border border-emerald-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
                </div>
                <span className="text-white/20 text-xs ml-2">Equity Calculator</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Estimate Your Equity Value</h3>
              <p className="text-white/40 mb-8">Move the slider to see what your contribution could be worth at exit.</p>

              {/* Fake slider */}
              <div className="relative h-2 bg-white/[0.05] rounded-full mb-6">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "65%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-lg shadow-emerald-500/20 border-2 border-emerald-400"
                  initial={{ left: "0%" }}
                  whileInView={{ left: "65%" }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-white/20">0% Equity</span>
                <span className="text-emerald-400 font-bold text-lg">2.5% Equity</span>
                <span className="text-white/20">5% Equity</span>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                <span className="text-emerald-400 font-bold text-3xl">$625,000</span>
                <p className="text-white/30 text-sm mt-1">Estimated value at $25M exit</p>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* BENEFIT CARDS — different shapes */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              Why Providers <span className="text-emerald-400">Love This</span>
            </h2>
          </RevealBlock>

          <StaggerCards className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Build Your Equity Portfolio", desc: "Diversify across multiple startups. One big exit changes the calculus of your career.", style: "shadow-[0_0_30px_rgba(20,184,166,0.08)]" },
              { title: "Pick Projects You Believe In", desc: "Choose missions, industries, and founders that align with your values. No more soul-sucking gigs.", style: "bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(20,184,166,0.02)_4px,rgba(20,184,166,0.02)_8px)]" },
              { title: "Flexible Terms, Your Way", desc: "Define your contribution scope, equity expectations, and schedule upfront. Total autonomy.", style: "border-emerald-500/15" },
              { title: "Elite Professional Community", desc: "Join the ranks of top-tier developers, designers, and marketers building the future together.", style: "bg-gradient-to-br from-emerald-500/[0.03] to-teal-500/[0.03]" },
            ].map((b) => (
              <TiltCard key={b.title} tiltAmount={10} glareColor="rgba(20,184,166,0.06)">
                <div className={`p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-emerald-500/10 transition-all duration-300 h-full ${b.style}`}>
                  <div className="w-3 h-3 rounded-full bg-emerald-400/60 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-white/35 leading-relaxed text-sm">{b.desc}</p>
                </div>
              </TiltCard>
            ))}
          </StaggerCards>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* PORTFOLIO SIMULATOR — FlipCards */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-tight">
              Simulate Your <span className="text-emerald-400">Portfolio</span>
            </h2>
            <p className="text-white/35 text-center mb-16">Click cards to reveal your equity scenario</p>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-6">
            {startupCards.map((card, i) => (
              <RevealBlock key={card.name} delay={i * 0.15}>
                <FlipCard
                  front={
                    <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] h-64 flex flex-col justify-between">
                      <div>
                        <div className="w-3 h-3 rounded-full bg-emerald-400/60 mb-4" />
                        <h3 className="text-white font-bold text-xl">{card.name}</h3>
                        <p className="text-white/35 text-sm mt-2">{card.desc}</p>
                      </div>
                      <span className="text-white/15 text-xs">Click to reveal</span>
                    </div>
                  }
                  back={
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/[0.05] to-teal-500/[0.05] border border-emerald-500/15 h-64 flex flex-col justify-center items-center text-center">
                      <div className="text-emerald-300 text-xs uppercase tracking-wider mb-2">Your Equity</div>
                      <div className="text-4xl font-black text-white mb-1">{card.equity}</div>
                      <div className="text-emerald-300/60 text-sm mb-4">Potential Value at $25M Exit</div>
                      <div className="text-3xl font-black text-emerald-400">{card.potential}</div>
                    </div>
                  }
                />
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <AnimatedDivider className="max-w-4xl mx-auto px-8" />

      {/* SUCCESS STORIES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              Provider <span className="text-emerald-400">Success Stories</span>
            </h2>
          </RevealBlock>

          <StaggerCards className="space-y-6">
            {[
              { name: "Sarah Chen", role: "Senior Full-Stack Developer", startup: "DataVault AI", equity: "1.5%", outcome: "$375K at $25M Series B", emoji: "💎" },
              { name: "Marcus Rivera", role: "Product Designer", startup: "FlowState", equity: "2.0%", outcome: "$600K at $30M acquisition", emoji: "🎨" },
              { name: "Priya Patel", role: "Growth Marketer", startup: "ShopStream", equity: "0.75%", outcome: "$150K ARR milestone bonus", emoji: "📈" },
            ].map((story, i) => (
              <div
                key={story.name}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-emerald-500/10 transition-all duration-300 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {story.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{story.name}</h3>
                  <p className="text-emerald-400/70 text-sm mb-1">{story.role} at {story.startup}</p>
                  <p className="text-white/40 text-sm">
                    <span className="text-emerald-400/60 font-semibold">{story.equity} equity</span> — {story.outcome}
                  </p>
                </div>
              </div>
            ))}
          </StaggerCards>
        </div>
      </section>

      {/* PERKS ROW */}
      <section className="py-16 px-4 border-y border-white/[0.03] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {["Earn Equity", "Flexible Hours", "Choose Projects", "Build Portfolio", "Community Access", "Legal Protection"].map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="px-5 py-2.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-300/80 text-sm font-medium"
              >
                {perk}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Ready to Earn Equity?" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-emerald-100/40 mb-10 text-lg">Your expertise deserves more than an hourly rate.</p>
          <MagneticButton strength={0.5}>
            <Link
              href="#"
              className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-lg shadow-xl shadow-emerald-500/20"
            >
              Join as a Provider
            </Link>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
