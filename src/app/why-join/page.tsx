"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import ProcessSteps from "@/components/ui/ProcessSteps";
import NumberedList from "@/components/ui/NumberedList";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { siteContent } from "@/content/siteContent";

/* ── floating blobs (decorative) ─────────────────────────────── */
function Blob({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-20 ${className}`}
      style={{ willChange: "transform" }}
    />
  );
}

/* ── timeline connector (vertical line between steps) ─────────── */
function TimelineConnector() {
  return (
    <div className="hidden md:flex flex-col items-center mx-4">
      <div className="w-px h-full bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent" />
    </div>
  );
}

/* ── stat highlight number ─────────────────────────────────────── */
function StatNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ── section 1.1 : the 17-step process ──────────────────────────── */
function Section1_1() {
  const { steps } = siteContent.whyJoin.sections[0];

  return (
    <SectionWrapper id="1.1">
      <Blob className="-top-20 -right-20 w-72 h-72 bg-indigo-400/20" />
      <Blob className="-bottom-20 -left-20 w-96 h-96 bg-purple-400/10" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* sticky left column */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <RevealBlock>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
                The Process
              </span>
            </RevealBlock>
            <RevealBlock delay={0.05}>
              <AssembleText
                text="The basic process"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
              />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8">
                Our 17-step process takes you from book authorship to a
                life-changing exit to Private Equity.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <StatNumber value="17" label="Steps" />
                <StatNumber value="3-5" label="Years" />
                <StatNumber value="£50m+" label="Exit Value" />
                <StatNumber value="0%" label="Your Capital" />
              </div>
            </RevealBlock>
          </div>

          {/* scrolling right column */}
          <div className="lg:col-span-3">
            <RevealBlock delay={0.2}>
              <ProcessSteps steps={steps} />
            </RevealBlock>
            <RevealBlock delay={0.4}>
              <div className="mt-10">
                <VideoPlaceholder title="The basic process video" />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.2 : why acquire? ─────────────────────────────────── */
function Section1_2() {
  const { reasons } = siteContent.whyJoin.sections[1];

  return (
    <SectionWrapper id="1.2" dark>
      <Blob className="-top-20 -left-20 w-80 h-80 bg-purple-400/15" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
              Why This Works
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Why acquire companies and create a group?"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
            />
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
              Three powerful reasons the roll-up model outperforms organic
              growth.
            </p>
          </RevealBlock>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <RevealBlock key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/30 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-500 h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-indigo-500 dark:text-indigo-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-3">
                  {reason.heading}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.body}
                </p>
              </motion.div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={0.5}>
          <div className="mt-12">
            <VideoPlaceholder title="Why acquire companies" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.3 : partnering model ─────────────────────────────── */
function Section1_3() {
  const { body } = siteContent.whyJoin.sections[2];

  return (
    <SectionWrapper id="1.3">
      <Blob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
              Our Model
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Our Partnering for Equity model"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6"
            />
          </RevealBlock>
        </div>

        <RevealBlock delay={0.15}>
          <div className="p-8 md:p-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent" />
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10">
              {body}
            </p>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.3}>
          <div className="mt-10">
            <VideoPlaceholder title="Our Partnering for Equity model" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.4 : benefits ─────────────────────────────────────── */
function Section1_4() {
  const { benefits } = siteContent.whyJoin.sections[3];

  return (
    <SectionWrapper id="1.4" dark>
      <Blob className="-top-20 -right-20 w-96 h-96 bg-purple-400/15" />
      <Blob className="-bottom-20 -left-20 w-72 h-72 bg-indigo-400/10" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* sticky left */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <RevealBlock>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
                19 Reasons
              </span>
            </RevealBlock>
            <RevealBlock delay={0.05}>
              <AssembleText
                text="The main benefits for you of partnering with us"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
              />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8">
                19 powerful reasons why our Equity Partners succeed where
                traditional buyers fail.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <StatNumber value="19" label="Key Benefits" />
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Each benefit is designed to de-risk your journey and maximise
                    your exit value.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>

          {/* scrolling right */}
          <div className="lg:col-span-3">
            <RevealBlock delay={0.2}>
              <NumberedList
                items={benefits.map((b) => ({ heading: undefined, body: b }))}
                gridCols={1}
              />
            </RevealBlock>
            <RevealBlock delay={0.4}>
              <div className="mt-10">
                <VideoPlaceholder title="The main benefits" />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.5 : our role ─────────────────────────────────────── */
function Section1_5() {
  const { items } = siteContent.whyJoin.sections[4];

  return (
    <SectionWrapper id="1.5">
      <Blob className="-top-20 -left-20 w-80 h-80 bg-indigo-400/10" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <RevealBlock>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                Support
              </span>
            </RevealBlock>
            <RevealBlock delay={0.05}>
              <AssembleText
                text="Our Role"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
              />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8">
                Everything we do to support you from plan to exit.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <StatNumber value="14" label="Areas of Support" />
              </div>
            </RevealBlock>
          </div>

          <div className="lg:col-span-3">
            <RevealBlock delay={0.2}>
              <NumberedList
                items={items.map((item) => ({ heading: undefined, body: item }))}
              />
            </RevealBlock>
            <RevealBlock delay={0.4}>
              <div className="mt-10">
                <VideoPlaceholder title="Our Role" />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.6 : why should we help you? ──────────────────────── */
function Section1_6() {
  const { body } = siteContent.whyJoin.sections[5];

  return (
    <SectionWrapper id="1.6" dark>
      <Blob className="-top-20 -right-20 w-72 h-72 bg-purple-400/15" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
              Alignment
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Why should we help you?"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6"
            />
          </RevealBlock>
        </div>

        <RevealBlock delay={0.15}>
          <div className="p-8 md:p-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent" />
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10">
              {body}
            </p>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.3}>
          <div className="mt-10">
            <VideoPlaceholder title="Why should we help you?" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.7 : issues we solve ──────────────────────────────── */
function Section1_7() {
  const { issues, closing } = siteContent.whyJoin.sections[6];

  return (
    <SectionWrapper id="1.7">
      <Blob className="-bottom-20 -right-20 w-96 h-96 bg-indigo-400/10" />

      <div className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <RevealBlock>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
                Problem Solving
              </span>
            </RevealBlock>
            <RevealBlock delay={0.05}>
              <AssembleText
                text="The Issues We Solve"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4"
              />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8">
                The 11 critical issues we fix to justify our 20%+ equity stake.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.15}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <StatNumber value="11" label="Critical Issues" />
              </div>
            </RevealBlock>
          </div>

          <div className="lg:col-span-3">
            <RevealBlock delay={0.2}>
              <NumberedList items={issues} />
            </RevealBlock>
            <RevealBlock delay={0.35}>
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-indigo-500/[0.03] to-purple-500/[0.03] border border-indigo-500/10 dark:border-indigo-500/10">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {closing}
                </p>
              </div>
            </RevealBlock>
            <RevealBlock delay={0.5}>
              <div className="mt-10">
                <VideoPlaceholder title="The Issues We Solve" />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.8 : gaining equity stakes ──────────────────────── */
function Section1_8() {
  const { body } = siteContent.whyJoin.sections[7];

  return (
    <SectionWrapper id="1.8" dark>
      <Blob className="-top-20 -left-20 w-80 h-80 bg-purple-400/15" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
              Early Equity
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Gaining Equity Stakes before we Acquire Them"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6"
            />
          </RevealBlock>
        </div>

        <RevealBlock delay={0.15}>
          <div className="p-8 md:p-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/5 to-transparent" />
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10">
              {body}
            </p>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.3}>
          <div className="mt-10">
            <VideoPlaceholder title="Gaining Equity Stakes" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

/* ── section 1.9 : become the author ───────────────────────────── */
function Section1_9() {
  const { body, link, linkLabel } = siteContent.whyJoin.sections[8];

  return (
    <SectionWrapper id="1.9">
      <Blob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 mb-4">
              Authority
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Become the Author of a book helping business sellers"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6"
            />
          </RevealBlock>
        </div>

        <RevealBlock delay={0.15}>
          <div className="p-8 md:p-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent" />
            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed whitespace-pre-line relative z-10 mb-6">
              {body}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-400 font-medium text-sm transition-colors relative z-10"
            >
              {linkLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-1"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.3}>
          <div className="mt-10">
            <VideoPlaceholder title="Become the Author" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

/* ════════════════════════════════════════════════════════════════ */
export default function WhyJoinPage() {
  return (
    <>
      {/* hero */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-6">
              Why Join Us
            </span>
          </RevealBlock>
          <RevealBlock delay={0.05}>
            <AssembleText
              text="Why you Should Join us"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6"
            />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about building wealth through business
              acquisitions with Partnering for Equity.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* quick overview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: "17", label: "Step Process", desc: "From book to exit" },
              { num: "19", label: "Benefits", desc: "Why partners win" },
              { num: "11", label: "Issues Solved", desc: "Problems we fix" },
            ].map((card, i) => (
              <RevealBlock key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    {card.num}
                  </div>
                  <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-lg mb-1">
                    {card.label}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {card.desc}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      <Section1_1 />
      <Section1_2 />
      <Section1_3 />
      <Section1_4 />
      <Section1_5 />
      <Section1_6 />
      <Section1_7 />
      <Section1_8 />
      <Section1_9 />
    </>
  );
}
