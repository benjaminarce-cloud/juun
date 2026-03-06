import Header from '@/components/sections/Header'
import SectionTabs from '@/components/sections/SectionTabs'
import SinesMarquee from '@/components/sections/SinesMarquee'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'

export default function VocesPage() {
  return (
    <>
      <Header />
      <SectionTabs />
      <main>
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1200/v1771879236/1A7A1501_gl2s01.jpg"
            alt="JUUN social energy"
            loading="eager"
            style={{ objectPosition: 'center 18%' }}
          />
        </section>
        <SinesMarquee />
        <SocialProof />
        <section className="tab-photo-break tab-photo-break-compact reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1200/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN moments"
            loading="lazy"
            style={{ objectPosition: 'center 20%' }}
          />
        </section>
        <FinalCTA />
      </main>
    </>
  )
}
