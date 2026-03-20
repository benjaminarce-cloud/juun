import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import SinesMarquee from '@/components/sections/SinesMarquee'
import ValueProps from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula from '@/components/sections/Formula'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SinesMarquee />
        <ValueProps />
        <PurchaseModule />
        <section className="landing-photo-break landing-photo-break--track reveal">
          <img
            className="landing-photo-break__image landing-photo-break__image--track"
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg"
            alt="JUUN track session"
            loading="eager"
          />
        </section>
        <Formula />
        <section id="hablan">
          <SocialProof />
        </section>
        <section className="landing-photo-break landing-photo-break--community reveal">
          <img
            className="landing-photo-break__image landing-photo-break__image--community"
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN community"
            loading="eager"
          />
        </section>
        <section className="landing-diptych">
          <div className="landing-diptych__cell">
            <img
              className="landing-diptych__image landing-diptych__image--left"
              src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879163/1A7A1317_mvd47a.jpg"
              alt="JUUN"
              loading="eager"
            />
          </div>
          <div className="landing-diptych__cell">
            <img
              className="landing-diptych__image landing-diptych__image--right"
              src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879148/1A7A2447_pcwzk5.jpg"
              alt="JUUN"
              loading="eager"
            />
          </div>
        </section>
        <FinalCTA />
      </main>
    </>
  )
}
