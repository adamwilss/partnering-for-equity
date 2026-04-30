import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/animations/ScrollProgress";
import ParticleField from "@/components/animations/ParticleField";
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
  title: "Partnering for Equity — Trade Skills for Equity",
  description:
    "The AI-powered platform connecting startup founders with world-class service providers who work for equity instead of cash. Build the future, together.",
  keywords: [
    "equity",
    "startups",
    "founders",
    "service providers",
    "developers",
    "designers",
    "equity compensation",
    "AI matching",
  ],
  openGraph: {
    title: "Partnering for Equity",
    description:
      "Trade skills for equity. The AI-powered platform connecting founders and service providers.",
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
      <body className="min-h-full flex flex-col bg-slate-950">
        <ScrollProgress />
        <ParticleField />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
