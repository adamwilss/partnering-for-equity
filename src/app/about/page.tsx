"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RevealBlock from "@/components/animations/RevealBlock";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import AssembleText from "@/components/animations/AssembleText";

function FloatingBlobs() {
  const blobs = [
    { top: "10%", left: "5%", w: 200, h: 200, dur: 12, color: "rgba(244,114,182,0.06)", rx: "60% 40% 50% 50% / 50% 60% 40% 50%" },
    { top: "20%", right: "5%", w: 160, h: 160, dur: 15, color: "rgba(251,113,133,0.05)", rx: "40% 60% 60% 40% / 60% 40% 60% 40%" },
    { bottom: "15%", left: "10%", w: 180, h: 180, dur: 18, color: "rgba(244,114,182,0.04)", rx: "50% 50% 40% 60% / 40% 60% 50% 50%" },
  ];

  return (
    <>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute blur-3xl opacity-60 pointer-events-none"
          style={{
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            width: b.w, height: b.h, background: b.color, borderRadius: b.rx,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: b.dur, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* HERO — Rose/Pink organic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_40%_30%,rgba(244,114,182,0.1),rgba(255,255,255,0))]" />
        <FloatingBlobs />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-300 mb-6 tracking-wide uppercase"
          >
            Our Philosophy
          </motion.span>

          <AssembleText
            text="Partners in Growth"
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-rose-100/60 max-w-2xl mx-auto leading-relaxed"
          >
            We believe the best businesses are built by teams with shared conviction —
            not just shared payroll.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(244,114,182,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-3xl mx-auto">
          <RevealBlock>
            <div className="p-10 md:p-14 rounded-[3rem] bg-rose-500/[0.02] border border-rose-500/10 shadow-[0_0_40px_rgba(244,114,182,0.03)] text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Our Mission</h2>
              <p className="text-white/55 text-lg leading-relaxed">
                We exist to unlock the latent potential in every great idea and every skilled professional.
                By replacing cash with equity, we remove the single biggest barrier to startup formation —
                capital. When talent can bet on itself, and founders can access that talent without writing
                checks, the entire innovation economy accelerates. More startups launch. More talent finds
                meaningful work. More wealth is distributed to the builders, not just the financiers.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* VALUES — blob shaped cards */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16 tracking-tight">
              Our <span className="text-rose-400">Values</span>
            </h2>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Shared Ownership", desc: "Every partner has skin in the game. No spectators.", rx: "60% 40% 50% 50% / 55% 50% 45% 50%", dur: 12, delay: 0 },
              { title: "Radical Alignment", desc: "Incentives that point everyone in the same direction.", rx: "40% 60% 55% 45% / 50% 55% 50% 45%", dur: 14, delay: 1 },
              { title: "Long-Term Vision", desc: "Building for lasting value, not quick flips.", rx: "50% 50% 40% 60% / 45% 60% 40% 55%", dur: 13, delay: 2 },
            ].map((value) => (
              <motion.div
                key={value.title}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: value.dur, delay: value.delay, ease: "easeInOut" }}
              >
                <div
                  className="p-8 bg-rose-500/[0.02] border border-rose-500/10 hover:border-rose-500/20 transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[280px]"
                  style={{ borderRadius: value.rx }}
                >
                  <h3 className="text-white font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-white/35 leading-relaxed text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              The <span className="text-rose-400">Team</span>
            </h2>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Jordan Lee", role: "CEO & Co-Founder", initials: "JL", gradient: "from-rose-400 to-pink-500" },
              { name: "Taylor Reed", role: "CTO & Co-Founder", initials: "TR", gradient: "from-pink-400 to-fuchsia-500" },
              { name: "Morgan Hayes", role: "Head of Product", initials: "MH", gradient: "from-rose-300 to-rose-500" },
              { name: "Casey Park", role: "Head of Community", initials: "CP", gradient: "from-pink-300 to-rose-400" },
            ].map((person, i) => (
              <RevealBlock key={person.name} delay={i * 0.12}>
                <TiltCard tiltAmount={6} glareColor="rgba(244,114,182,0.06)">
                  <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.03] text-center group hover:border-rose-500/10 transition-all duration-300">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                      animate={{ boxShadow: ["0 0 0px rgba(244,114,182,0)", "0 0 20px rgba(244,114,182,0.3)", "0 0 0px rgba(244,114,182,0)"] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                    >
                      {person.initials}
                    </motion.div>
                    <h3 className="text-white font-bold text-sm">{person.name}</h3>
                    <p className="text-white/35 text-xs mt-1">{person.role}</p>
                  </div>
                </TiltCard>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <RevealBlock direction="right">
              <div className="relative">
                <div className="w-full h-80 rounded-[4rem] bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      className="text-7xl mb-4"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      🌱
                    </motion.div>
                    <p className="text-rose-300/50 text-sm">The idea that became a movement</p>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-rose-500/[0.04] blur-xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-pink-500/[0.04] blur-xl pointer-events-none" />
              </div>
            </RevealBlock>

            <RevealBlock direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Why We <span className="text-rose-400">Started</span>
              </h2>
              <p className="text-white/45 leading-relaxed mb-6">
                In 2024, our co-founders watched brilliant founders fail — not because their ideas were bad,
                but because they couldn&apos;t afford the talent to execute. Meanwhile, exceptional developers
                and designers were stuck trading hours for cash at agencies, never sharing in the value they created.
              </p>
              <p className="text-white/45 leading-relaxed mb-6">
                The gap was obvious: founders have equity but need talent. Providers have talent but want
                equity. All that was missing was the platform to connect them — with the intelligence
                to make those connections work long-term.
              </p>
              <p className="text-white/35 leading-relaxed text-sm italic">
                Partnering for Equity was born to close that gap.
              </p>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "2,000+", label: "Active Partners", blob: "rgba(244,114,182,0.03)" },
              { num: "$50M+", label: "Equity Traded", blob: "rgba(251,113,133,0.03)" },
              { num: "500+", label: "Startups", blob: "rgba(225,98,128,0.03)" },
              { num: "95%", label: "Match Satisfaction", blob: "rgba(244,114,182,0.03)" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center"
              >
                <div
                  className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
                  style={{ background: stat.blob }}
                />
                <div className="relative z-10">
                  <div className="text-3xl md:text-5xl font-black bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                    {stat.num}
                  </div>
                  <div className="text-white/30 text-sm mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-rose-950/10 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
        <FloatingBlobs />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Be Part of Something Bigger" className="text-4xl md:text-6xl font-black text-white mb-6 block" />
          <p className="text-rose-100/40 mb-10 text-lg">
            Whether you&apos;re building or contributing — join the platform where everyone owns the outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton strength={0.4}>
              <Link
                href="/founders"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold shadow-xl shadow-rose-500/20"
              >
                I&apos;m a Founder
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <Link
                href="/providers"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300"
              >
                I&apos;m a Provider
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
