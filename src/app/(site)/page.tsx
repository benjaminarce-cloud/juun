import Header        from '@/components/sections/Header'
import Hero          from '@/components/sections/Hero'
import SinesMarquee  from '@/components/sections/SinesMarquee'
import ValueProps    from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula       from '@/components/sections/Formula'
import SocialProof   from '@/components/sections/SocialProof'
import PhotoGrid     from '@/components/sections/PhotoGrid'
import FinalCTA      from '@/components/sections/FinalCTA'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SinesMarquee />
        <ValueProps />
        <PurchaseModule />
        <Formula />
        <SocialProof />
        <PhotoGrid />
        <FinalCTA />
      </main>
    </>
  )
}
