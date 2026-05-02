import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SettingsProvider } from "@/components/providers/SettingsProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import ParticleField from "@/components/animations/ParticleField";
import BodyClasses from "@/components/layout/BodyClasses";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partnering for Equity — Acquire Established Businesses, Build a Group, Exit to PE",
  description:
    "Partner with David Hargraves and Blue Sky Group to acquire equity in established UK businesses (£1m–£20m revenue), build a valuable roll-up group, and exit to Private Equity within 3–5 years. No bank debt. No personal guarantees.",
  keywords: [
    "partnering for equity",
    "business acquisition",
    "private equity exit",
    "roll-up",
    "buy and build",
    "UK businesses",
    "succession planning",
    "MBO",
    "David Hargraves",
    "Blue Sky Group",
  ],
  openGraph: {
    title: "Partnering for Equity",
    description:
      "Acquire established UK businesses, build a valuable group, and exit to Private Equity within 3–5 years.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <SettingsProvider>
        <BodyClasses>
          <ScrollProgress />
          <ParticleField />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </BodyClasses>
      </SettingsProvider>
    </html>
  );
}
