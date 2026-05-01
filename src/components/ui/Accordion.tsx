"use client";

import { useState } from "react";

interface AccordionProps {
  items: readonly {
    readonly question: string;
    readonly answer: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200 bg-slate-100 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-slate-300"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="text-slate-900 font-medium text-base md:text-lg">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center transition-transform duration-300 ${
                openIndex === i ? "rotate-45 bg-indigo-500/20 border-indigo-500/40" : ""
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-900"
              >
                <line x1="6" y1="0" x2="6" y2="12" />
                <line x1="0" y1="6" x2="12" y2="6" />
              </svg>
            </span>
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === i ? "pb-5 max-h-96" : "max-h-0"
            }`}
          >
            <p className="text-slate-500 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
