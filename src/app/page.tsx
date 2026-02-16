import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { PurchaseModule } from "@/components/sections/PurchaseModule";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Ingredients } from "@/components/sections/Ingredients";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Page() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <PurchaseModule />
      <HowItWorks />
      <Ingredients />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
