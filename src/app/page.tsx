import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { PurchaseModule } from "@/components/sections/PurchaseModule";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Ingredients } from "@/components/sections/Ingredients";
import { SocialProof } from "@/components/sections/SocialProof";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Page() {
  function onJump(id: string) {
    // simple, calm scroll
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main>
      {/* Hero is server, but onJump uses window; we pass a client-safe handler via inline wrapper */}
      <ClientHero />
      <ValueProps />
      <PurchaseModule />
      <HowItWorks />
      <Ingredients />
      <SocialProof />
      <FAQ />
      <ClientFinalCTA />
    </main>
  );

  // local client wrappers to keep main file simple
  function ClientHero() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <Hero onJump={onJump} />;
  }
  function ClientFinalCTA() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <FinalCTA onJump={onJump} />;
  }
}
