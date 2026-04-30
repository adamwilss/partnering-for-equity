import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import AIMatching from "@/components/sections/AIMatching";
import ForFounders from "@/components/sections/ForFounders";
import ForProviders from "@/components/sections/ForProviders";
import Features from "@/components/sections/Features";
import PartnersInGrowth from "@/components/sections/PartnersInGrowth";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <AIMatching />
      <ForFounders />
      <ForProviders />
      <Features />
      <PartnersInGrowth />
      <FAQ />
      <CTABanner />
    </>
  );
}
