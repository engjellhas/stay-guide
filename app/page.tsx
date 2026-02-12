import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { SocialProof } from "@/components/sections/SocialProof";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
