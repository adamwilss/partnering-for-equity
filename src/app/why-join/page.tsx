"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import ProcessSteps from "@/components/ui/ProcessSteps";
import NumberedList from "@/components/ui/NumberedList";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { siteContent } from "@/content/siteContent";

function Section1_1() {
  const { steps } = siteContent.whyJoin.sections[0];

  return (
    <SectionWrapper id="1.1">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_100%_50%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <RevealBlock>
          <AssembleText text="The basic process" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 max-w-3xl">
            Our 17-step process takes you from book authorship to a life-changing exit to Private Equity.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.2}>
          <ProcessSteps steps={steps} />
        </RevealBlock>
        <RevealBlock delay={0.4}>
          <div className="mt-10">
            <VideoPlaceholder title="The basic process video" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

function Section1_2() {
  const { reasons } = siteContent.whyJoin.sections[1];

  return (
    <SectionWrapper id="1.2">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_50%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <RevealBlock>
          <AssembleText text="Why acquire companies and create a group?" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-8" />
        </RevealBlock>
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <RevealBlock key={i} delay={i * 0.15}>
              <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 h-full">
                <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-3">{reason.heading}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{reason.body}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
        <RevealBlock delay={0.4}>
          <div className="mt-10">
            <VideoPlaceholder title="Why acquire companies" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

function Section1_3() {
  const { body } = siteContent.whyJoin.sections[2];

  return (
    <SectionWrapper id="1.3">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <RevealBlock>
          <AssembleText text="Our Partnering for Equity model" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
        </RevealBlock>
        <RevealBlock delay={0.15}>
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">{body}</p>
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

function Section1_4() {
  const { benefits } = siteContent.whyJoin.sections[3];

  return (
    <SectionWrapper id="1.4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_100%_50%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <RevealBlock>
          <AssembleText text="The main benefits for you of partnering with us" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 max-w-3xl">
            19 powerful reasons why our Equity Partners succeed where traditional buyers fail.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.2}>
          <NumberedList items={benefits.map((b) => ({ heading: undefined, body: b }))} />
        </RevealBlock>
        <RevealBlock delay={0.4}>
          <div className="mt-10">
            <VideoPlaceholder title="The main benefits" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

function Section1_5() {
  const { items } = siteContent.whyJoin.sections[4];

  return (
    <SectionWrapper id="1.5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_50%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <RevealBlock>
          <AssembleText text="Our Role" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 max-w-3xl">
            Everything we do to support you from plan to exit.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.2}>
          <NumberedList items={items.map((item) => ({ heading: undefined, body: item }))} />
        </RevealBlock>
        <RevealBlock delay={0.4}>
          <div className="mt-10">
            <VideoPlaceholder title="Our Role" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

function Section1_6() {
  const { body } = siteContent.whyJoin.sections[5];

  return (
    <SectionWrapper id="1.6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <RevealBlock>
          <AssembleText text="Why should we help you?" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
        </RevealBlock>
        <RevealBlock delay={0.15}>
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">{body}</p>
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

function Section1_7() {
  const { issues, closing } = siteContent.whyJoin.sections[6];

  return (
    <SectionWrapper id="1.7">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_100%_50%,rgba(147,51,234,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10">
        <RevealBlock>
          <AssembleText text="The Issues We Solve" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 max-w-3xl">
            The 11 critical issues we fix to justify our 20%+ equity stake.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.2}>
          <NumberedList items={issues} />
        </RevealBlock>
        <RevealBlock delay={0.35}>
          <div className="mt-8 p-6 rounded-xl bg-indigo-500/[0.03] border border-indigo-500/10">
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{closing}</p>
          </div>
        </RevealBlock>
        <RevealBlock delay={0.5}>
          <div className="mt-10">
            <VideoPlaceholder title="The Issues We Solve" />
          </div>
        </RevealBlock>
      </div>
    </SectionWrapper>
  );
}

function Section1_8() {
  const { body } = siteContent.whyJoin.sections[7];

  return (
    <SectionWrapper id="1.8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_0%_50%,rgba(99,102,241,0.06),rgba(255,255,255,0))]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <RevealBlock>
          <AssembleText text="Gaining Equity Stakes before we Acquire Them" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
        </RevealBlock>
        <RevealBlock delay={0.15}>
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">{body}</p>
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

function Section1_9() {
  const { body, link, linkLabel } = siteContent.whyJoin.sections[8];

  return (
    <SectionWrapper id="1.9">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <RevealBlock>
          <AssembleText text="Become the Author of a book helping business sellers" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
        </RevealBlock>
        <RevealBlock delay={0.15}>
          <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed whitespace-pre-line">{body}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-400 font-medium text-sm transition-colors"
            >
              {linkLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
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

export default function WhyJoinPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <AssembleText text="Why you Should Join us" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about building wealth through business acquisitions with Partnering for Equity.
            </p>
          </RevealBlock>
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
