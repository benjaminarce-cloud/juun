// ─────────────────────────────────────────────────────────
// JUUN wellness — Main Landing Page
// Server component. Assembles sections in order.
// Only interactive sections (Hero, PurchaseModule, FAQ,
// FinalCTA, Header) are client components.
// ─────────────────────────────────────────────────────────

import Header         from '@/components/sections/Header'
import Hero           from '@/components/sections/Hero'
import SinesMarquee   from '@/components/sections/SinesMarquee'
import ValueProps     from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import HowItWorks     from '@/components/sections/HowItWorks'
import Ingredients    from '@/components/sections/Ingredients'
import SocialProof    from '@/components/sections/SocialProof'
import FAQ            from '@/components/sections/FAQ'
import FinalCTA       from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <SinesMarquee />
      <ValueProps />
      <PurchaseModule />
      <HowItWorks />
      <Ingredients />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
