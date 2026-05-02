"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface SettingsContextType {
  readabilityMode: boolean;
  toggleReadabilityMode: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  reducedMotion: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [readabilityMode, setReadabilityMode] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [reducedMotionPref, setReducedMotionPref] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotionPref(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotionPref(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Load persisted settings
  useEffect(() => {
    try {
      const savedReadability = localStorage.getItem("pfe-readability");
      const savedTheme = localStorage.getItem("pfe-theme");
      if (savedReadability) setReadabilityMode(savedReadability === "true");
      if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist settings
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("pfe-readability", String(readabilityMode));
    } catch {
      // ignore
    }
  }, [readabilityMode, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("pfe-theme", theme);
    } catch {
      // ignore
    }
  }, [theme, hydrated]);

  const reducedMotion = readabilityMode || reducedMotionPref;

  const toggleReadabilityMode = () => setReadabilityMode((prev) => !prev);
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <SettingsContext.Provider
      value={{ readabilityMode, toggleReadabilityMode, theme, toggleTheme, reducedMotion }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
