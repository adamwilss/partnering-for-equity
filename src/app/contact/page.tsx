"use client";

import RevealBlock from "@/components/animations/RevealBlock";
import AssembleText from "@/components/animations/AssembleText";
import ContactForm from "@/components/ui/ContactForm";
import { siteContent } from "@/content/siteContent";

const contactCards = [
  {
    label: "Email",
    value: "hello@partneringforequity.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+44 (0) 1234 567 890",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "London, United Kingdom",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "We review your enquiry",
    description: "Our team will assess your background and goals within 48 hours",
  },
  {
    number: "02",
    title: "Initial discovery call",
    description: "A no-obligation conversation to explore if partnering makes sense",
  },
  {
    number: "03",
    title: "Strategy session",
    description: "If aligned, we begin planning your bespoke acquisition roadmap",
  },
];

export default function ContactPage() {
  const { headline, body } = siteContent.contact;

  return (
    <>
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(120,119,198,0.12),rgba(255,255,255,0))]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <RevealBlock>
            <AssembleText text={headline} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6" />
          </RevealBlock>
          <RevealBlock delay={0.15}>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">{body}</p>
          </RevealBlock>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(99,102,241,0.04),rgba(255,255,255,0))]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <RevealBlock>
              <AssembleText text="Get in touch" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
            </RevealBlock>
            <RevealBlock delay={0.1}>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                Have a question or ready to start? Reach out through any of the channels below.
              </p>
            </RevealBlock>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <RevealBlock key={card.label} delay={i * 0.15}>
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-1">{card.label}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{card.value}</p>
                </div>
              </RevealBlock>
            ))}
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <RevealBlock delay={0.2}>
              <div className="p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <ContactForm />
              </div>
            </RevealBlock>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <RevealBlock>
                <AssembleText text="What happens next?" className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4" />
              </RevealBlock>
              <RevealBlock delay={0.1}>
                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                  A simple, transparent path from first contact to partnership.
                </p>
              </RevealBlock>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <RevealBlock key={step.number} delay={i * 0.15}>
                  <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-slate-900 dark:text-slate-100 font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
