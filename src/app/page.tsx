import Header         from '@/components/sections/Header'
import Hero           from '@/components/sections/Hero'
import SinesMarquee   from '@/components/sections/SinesMarquee'
import ValueProps     from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula        from '@/components/sections/Formula'
import SocialProof    from '@/components/sections/SocialProof'
import FinalCTA       from '@/components/sections/FinalCTA'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SinesMarquee />
        <ValueProps />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg"
            alt="JUUN track session"
            loading="eager"
            style={{ width: '100%', height: '65vh', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
          />
        </section>
        <PurchaseModule />
        <Formula />
        <SocialProof />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN community"
            loading="eager"
            style={{ width: '100%', height: '65vh', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
          />
        </section>
        <FinalCTA />
      </main>
    </>
  )
}
