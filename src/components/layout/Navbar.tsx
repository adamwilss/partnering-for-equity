"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { useSettings } from "@/components/providers/SettingsProvider";
import { siteContent } from "@/content/siteContent";

function ThemeToggle() {
  const { theme, toggleTheme } = useSettings();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/30 flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-all duration-200`}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function ReadabilityToggle() {
  const { readabilityMode, toggleReadabilityMode } = useSettings();

  return (
    <button
      onClick={toggleReadabilityMode}
      aria-pressed={readabilityMode}
      aria-label={readabilityMode ? "Disable readability mode" : "Enable readability mode"}
      className={`relative w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
        readabilityMode
          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400"
          : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30"
      }`}
      title={readabilityMode ? "Readability mode on" : "Readability mode off"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { readabilityMode } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { logo, links, cta } = siteContent.navbar;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200 dark:shadow-slate-950"
          : "bg-transparent"
      } ${readabilityMode ? "text-lg" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-slate-900 dark:text-slate-100 font-bold text-lg tracking-tight hover:text-indigo-300 transition-colors"
        >
          {logo}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <ReadabilityToggle />
            <ThemeToggle />
          </div>
          <Button label={cta.label} href={cta.href} variant="primary" />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-900 dark:text-slate-100 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[32rem] pb-4" : "max-h-0"
        }`}
      >
        <div className="px-4 flex flex-col gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 py-3 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs text-slate-400 dark:text-slate-500">Accessibility</span>
            <ReadabilityToggle />
            <ThemeToggle />
          </div>
          <Button label={cta.label} href={cta.href} variant="primary" className="w-full" />
        </div>
      </div>
    </nav>
  );
}
