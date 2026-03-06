import Header        from '@/components/sections/Header'
import SectionTabs   from '@/components/sections/SectionTabs'
import Hero          from '@/components/sections/Hero'
import PurchaseModule from '@/components/sections/PurchaseModule'
import FinalCTA      from '@/components/sections/FinalCTA'

export default function Page() {
  return (
    <>
      <Header />
      <SectionTabs />
      <main>
        <Hero />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879034/1A7A2258_lpbzr1.jpg"
            alt="Comunidad JUUN en movimiento"
            loading="eager"
            style={{ objectPosition: 'center 18%' }}
          />
        </section>
        <PurchaseModule />
        <FinalCTA />
      </main>
    </>
  )
}
