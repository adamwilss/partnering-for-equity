"use client";

import { useEffect } from "react";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function BodyClasses({ children }: { children: React.ReactNode }) {
  const { theme, readabilityMode, reducedMotion } = useSettings();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("dark", theme === "dark");
    body.classList.toggle("readability", readabilityMode);
    body.classList.toggle("reduced-motion", reducedMotion);
  }, [theme, readabilityMode, reducedMotion]);

  return <body className="min-h-full flex flex-col">{children}</body>;
}
