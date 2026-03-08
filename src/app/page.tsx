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
        <PurchaseModule />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg"
            alt="JUUN track session"
            loading="eager"
            style={{ width: '100%', height: '65vh', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
          />
        </section>
        <Formula />
        <SocialProof />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN community"
            loading="eager"
            style={{ width: '100%', height: '65vh', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
          />
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', width: '100%' }}>
          <div style={{ overflow: 'hidden', height: '60vh' }}>
            <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879163/1A7A1317_mvd47a.jpg" alt="JUUN" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%', display: 'block' }} />
          </div>
          <div style={{ overflow: 'hidden', height: '60vh' }}>
            <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879148/1A7A2447_pcwzk5.jpg" alt="JUUN" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
        </section>
        <FinalCTA />
      </main>
    </>
  )
}
