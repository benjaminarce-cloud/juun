import Header from '@/components/sections/Header'
import SectionTabs from '@/components/sections/SectionTabs'
import ValueProps from '@/components/sections/ValueProps'
import Formula from '@/components/sections/Formula'
import FinalCTA from '@/components/sections/FinalCTA'

export default function FormulaPage() {
  return (
    <>
      <Header />
      <SectionTabs />
      <main>
        <ValueProps />
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1200/v1771879163/1A7A1317_mvd47a.jpg"
            alt="JUUN lifestyle"
            loading="eager"
            style={{ objectPosition: 'center 16%' }}
          />
        </section>
        <Formula />
        <FinalCTA />
      </main>
    </>
  )
}
