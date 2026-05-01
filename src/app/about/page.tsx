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
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_40%_30%,rgba(244,114,182,0.1),rgba(255,255,255,0))]" />
        <FloatingBlobs />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-600 mb-6 tracking-wide uppercase"
          >
            Blue Sky Group
          </motion.span>

          <AssembleText
            text="Partners in Growth"
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8 block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-rose-600/60 max-w-2xl mx-auto leading-relaxed"
          >
            We believe the best businesses are built by teams with shared conviction —
            not just shared payroll. We live by the advice that we now give to you.
          </motion.p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(244,114,182,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-3xl mx-auto">
          <RevealBlock>
            <div className="p-10 md:p-14 rounded-[3rem] bg-rose-500/[0.02] border border-rose-500/10 shadow-[0_0_40px_rgba(244,114,182,0.03)] text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We exist to unlock the latent potential in every great business and every experienced leader.
                By replacing traditional acquisition with Partnering for Equity, we remove the single biggest barrier to business growth —
                capital. When talent can bet on itself, and business owners can access that talent without writing cheques,
                the entire UK economy accelerates. More businesses are saved. More wealth is distributed to the builders, not just the financiers.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* DAVID HARGRAVES BIO */}
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
                    <p className="text-rose-600/50 text-sm">David Hargraves, Chairman of Blue Sky Group</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-rose-500/[0.04] blur-xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-pink-500/[0.04] blur-xl pointer-events-none" />
              </div>
            </RevealBlock>

            <RevealBlock direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Why We{" "}
                <span className="text-rose-500">Started</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                I am David Hargraves, a 30+ year business veteran. Over my time I have built, acquired and sold a large number of businesses,
                leading to several exits and three periods of retirement. As a Dyslexic, I am also an advocate for Dyslexics in Business.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                I bought my first business in 1995. Over the following 16 years, I acquired more businesses and grew a pioneering legal services group
                to £15m revenue and 130 internal staff before arranging several exits. After one exit, I acquired a major debt collection business that
                in 2006 became the first PPI business in the UK, helping return £70 billion to victims of the banks.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm italic">
                I am passionate about helping others build groups of businesses by buying thousands of businesses as the baby boomers retire.
                I am on a mission to make a small dent in helping younger entrepreneurs acquire many thousands of businesses from the tsunami of businesses that must sell.
              </p>
            </RevealBlock>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <RevealBlock>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 text-center mb-16 tracking-tight">
              Our{" "}<span className="text-rose-500">Values</span>
            </h2>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Shared Ownership", desc: "Every partner has skin in the game. No spectators.", rx: "60% 40% 50% 50% / 55% 50% 45% 50%", dur: 12, delay: 0 },
              { title: "Radical Alignment", desc: "Incentives that point everyone in the same direction.", rx: "40% 60% 55% 45% / 50% 55% 50% 45%", dur: 14, delay: 1 },
              { title: "Long-Term Vision", desc: "Building for lasting value and a high-value exit, not quick flips.", rx: "50% 50% 40% 60% / 45% 60% 40% 55%", dur: 13, delay: 2 },
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
                  <h3 className="text-slate-900 font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16 tracking-tight">
              The{" "}<span className="text-rose-500">Team</span>
            </h2>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "David Hargraves", role: "CEO & Chairman", initials: "DH", gradient: "from-rose-400 to-pink-500" },
              { name: "Ric Wilson", role: "COO", initials: "RW", gradient: "from-pink-400 to-fuchsia-500" },
              { name: "Emma Dutton", role: "CFO", initials: "ED", gradient: "from-rose-300 to-rose-500" },
              { name: "Adam Wilson", role: "AI & Systems", initials: "AW", gradient: "from-pink-300 to-rose-400" },
            ].map((person, i) => (
              <RevealBlock key={person.name} delay={i * 0.12}>
                <TiltCard tiltAmount={6} glareColor="rgba(244,114,182,0.06)">
                  <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200 text-center group hover:border-rose-500/10 transition-all duration-300">
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                      animate={{ boxShadow: ["0 0 0px rgba(244,114,182,0)", "0 0 20px rgba(244,114,182,0.3)", "0 0 0px rgba(244,114,182,0)"] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                    >
                      {person.initials}
                    </motion.div>
                    <h3 className="text-slate-900 font-bold text-sm">{person.name}</h3>
                    <p className="text-slate-500 text-xs mt-1">{person.role}</p>
                  </div>
                </TiltCard>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL OF EXPERTS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <RevealBlock>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12 tracking-tight">
              Panel of{" "}
              <span className="text-rose-500">Experts & Advisors</span>
            </h2>
          </RevealBlock>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Kevin Kinsella", role: "Supported Living Partner" },
              { name: "Julie Gibson", role: "Partner" },
              { name: "Marc Riley", role: "Commercial Maintenance Partner" },
              { name: "Andy Baker", role: "Professional Development" },
              { name: "Keith Tully", role: "Compliance & Restructuring" },
              { name: "Tim Mills", role: "Corporate Finance" },
              { name: "Andrew McHale", role: "Commercial Solicitors" },
              { name: "Tom Cardwell", role: "Wealth Protection" },
              { name: "Kathryn Taylor", role: "Wealth Building (SSAS)" },
              { name: "Philip White", role: "Funding" },
              { name: "Gary Lennon", role: "Funding" },
              { name: "Jeff Yu", role: "Funding" },
              { name: "Alan Bineham", role: "Funding" },
              { name: "Henry Audley Charles", role: "Asset Finance" },
              { name: "Tony Martinez", role: "Tax Advice" },
              { name: "Parminder Chattha", role: "Tax Advice" },
              { name: "Heather Watters", role: "Website Design" },
              { name: "Kate Warmsley", role: "HR" },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="p-4 rounded-xl bg-slate-100 border border-slate-200 hover:border-rose-500/10 transition-all duration-300"
              >
                <h3 className="text-slate-900 font-semibold text-sm">{person.name}</h3>
                <p className="text-slate-400 text-xs mt-1">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "200,000+", label: "UK Businesses Aged 60+", blob: "rgba(244,114,182,0.03)" },
              { num: "80,000", label: "Unsellable Traditionally", blob: "rgba(251,113,133,0.03)" },
              { num: "£10m–£50m", label: "Typical Group Exit", blob: "rgba(225,98,128,0.03)" },
              { num: "30+", label: "Years Experience", blob: "rgba(244,114,182,0.03)" },
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
                  <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-rose-50/30 to-slate-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
        <FloatingBlobs />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <AssembleText text="Be Part of Something Bigger" className="text-4xl md:text-6xl font-black text-slate-900 mb-6 block" />
          <p className="text-rose-600/60 mb-10 text-lg">
            Whether you are building or exiting — join the strategy where everyone owns the outcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton strength={0.4}>
              <Link
                href="/founders"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-slate-900 font-bold shadow-xl shadow-rose-500/20"
              >
                I&apos;m an Equity Partner
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <Link
                href="/providers"
                className="inline-flex items-center px-8 py-4 rounded-full bg-slate-100 border border-slate-200 text-slate-900 font-bold hover:bg-slate-200 transition-all duration-300"
              >
                I&apos;m a Succession Founder
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
