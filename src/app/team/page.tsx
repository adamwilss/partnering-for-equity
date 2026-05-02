"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { useSettings } from "@/components/providers/SettingsProvider";
import { siteContent } from "@/content/siteContent";

function TeamCard({ member, index }: { member: { name: string; role: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const { reducedMotion } = useSettings();

  if (reducedMotion) {
    return (
      <div
        ref={ref}
        className="p-8 rounded-2xl bg-slate-100 border border-slate-200 hover:border-indigo-500/20 hover:bg-slate-50 transition-all duration-300 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl font-bold text-indigo-400">{member.name.charAt(0)}</span>
        </div>
        <h3 className="text-slate-900 font-semibold text-lg mb-1">{member.name}</h3>
        <p className="text-indigo-400 text-sm font-medium">{member.role}</p>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 rounded-2xl bg-slate-100 border border-slate-200 hover:border-indigo-500/20 hover:bg-slate-50 transition-all duration-300 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5">
        <span className="text-2xl font-bold text-indigo-400">{member.name.charAt(0)}</span>
      </div>
      <h3 className="text-slate-900 font-semibold text-lg mb-1">{member.name}</h3>
      <p className="text-indigo-400 text-sm font-medium">{member.role}</p>
    </motion.div>
  );
}

export default function TeamPage() {
  const { members } = siteContent.team;

  return (
    <>
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <AssembleText text="Our Team" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6" />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
              The people who make Partnering for Equity possible.
            </p>
          </RevealBlock>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
          <RevealBlock delay={0.4}>
            <div className="mt-12">
              <VideoPlaceholder title="Meet the team" />
            </div>
          </RevealBlock>
        </div>
      </section>
    </>
  );
}
