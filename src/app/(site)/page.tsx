import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import SinesMarquee from '@/components/sections/SinesMarquee'
import ValueProps from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula from '@/components/sections/Formula'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'
import StructuredData from '@/components/StructuredData'
import { faqItems, faqSchema, productSchema } from '@/lib/pie-content'

const LAST_UPDATED = '2026-03-11'

export default function Page() {
  const pieSectionPadding = 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)'
  const pieSectionBorder = '1px solid rgba(14,12,11,0.08)'
  const pieRowBorder = '1px solid rgba(14,12,11,0.06)'
  const pieContainerStyle = {
    maxWidth: 900,
    margin: '0 auto',
  } as const
  const pieBodyTextStyle = {
    fontSize: '13px',
    lineHeight: 1.7,
    fontWeight: 300,
    color: 'var(--black)',
  } as const

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
        <section id="hablan">
          <SocialProof />
        </section>
        <section className="tab-photo-break reveal">
          <img
            src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879033/1A7A2184_bm4koh.jpg"
            alt="JUUN community"
            loading="eager"
            style={{ width: '100%', height: '85vh', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
          />
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', width: '100%' }}>
          <div style={{ overflow: 'hidden', height: '60vh' }}>
            <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879163/1A7A1317_mvd47a.jpg" alt="JUUN" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
          <div style={{ overflow: 'hidden', height: '60vh' }}>
            <img src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_900/v1771879148/1A7A2447_pcwzk5.jpg" alt="JUUN" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
          </div>
        </section>
        <FinalCTA />

        {/* PIE: Front-loaded summary block.
            WHY: First crawl chunk should answer "qué es JUUN" without dependency on surrounding modules.
            OPTIMIZES: Early-page classification and retrieval precision for definition queries. */}
        <section
          id="summary"
          aria-labelledby="summary-title"
          style={{ padding: pieSectionPadding, background: '#f5f3ec', color: '#0e0c0b' }}
        >
          <div
            style={{
              ...pieContainerStyle,
              borderTop: pieSectionBorder,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem 3rem',
              alignItems: 'start',
              paddingTop: '1.75rem',
            }}
          >
            <div>
              <p style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.4, color: '#c8f04a', fontWeight: 600 }}>
                QUÉ ES JUUN
              </p>
            </div>
            <div>
              <h2 id="summary-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.1, fontWeight: 600, marginBottom: '1.25rem' }}>Qué es JUUN</h2>
              <div style={{ display: 'grid', gap: '0.9rem' }}>
                <p style={pieBodyTextStyle}><strong style={{ fontWeight: 600 }}>Qué es:</strong> JUUN Wellness es una bebida funcional energética mexicana sin azúcar, formulada con cafeína natural de guaraná, L-teanina y vitamina B12 para energía sostenida y concentración.</p>
                <p style={pieBodyTextStyle}><strong style={{ fontWeight: 600 }}>Para quién es:</strong> Adultos que buscan energía y enfoque sin azúcar, sin taurina y con una fórmula funcional de liberación más estable.</p>
                <p style={pieBodyTextStyle}><strong style={{ fontWeight: 600 }}>No es ideal para:</strong> Menores de edad, personas con alta sensibilidad a la cafeína, embarazadas o quienes requieren bebidas de rehidratación deportiva con electrolitos.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ borderTop: pieRowBorder, paddingTop: '0.9rem' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1, fontWeight: 700, marginBottom: '0.45rem' }}>130 mg</div>
                  <div style={{ fontSize: 11, lineHeight: 1.5, fontWeight: 300 }}>Cafeína</div>
                </div>
                <div style={{ borderTop: pieRowBorder, paddingTop: '0.9rem' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1, fontWeight: 700, marginBottom: '0.45rem' }}>130 mg</div>
                  <div style={{ fontSize: 11, lineHeight: 1.5, fontWeight: 300 }}>L-teanina</div>
                </div>
                <div style={{ borderTop: pieRowBorder, paddingTop: '0.9rem' }}>
                  <div style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: 1, fontWeight: 700, marginBottom: '0.45rem' }}>0 g</div>
                  <div style={{ fontSize: 11, lineHeight: 1.5, fontWeight: 300 }}>Azúcar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PIE: JSON-LD for product and FAQ.
            WHY: Duplicates visible content in machine-readable form for non-JS crawlers.
            OPTIMIZES: Entity retrieval and FAQ citation extraction. */}
        <StructuredData data={[productSchema, faqSchema]} />

        {/* PIE: Mechanism section.
            WHY: Self-contained explanation chunk for "cómo funciona" prompts.
            OPTIMIZES: Retrieval chunk utility and answer completeness. */}
        <section
          id="como-funciona"
          aria-labelledby="como-title"
          style={{ padding: pieSectionPadding, background: '#f5f3ec', color: '#0e0c0b' }}
        >
          <div style={{ ...pieContainerStyle, borderTop: pieSectionBorder, paddingTop: '1.75rem' }}>
            <p style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '4px', textTransform: 'uppercase', color: '#c8f04a', fontWeight: 600, marginBottom: '1rem' }}>
              CÓMO FUNCIONA
            </p>
            <h2 id="como-title" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', lineHeight: 1.1, fontWeight: 600, marginBottom: '1.25rem' }}>Cómo funciona JUUN</h2>
            <div style={{ display: 'grid', gap: '1rem', maxWidth: 760 }}>
              <p style={pieBodyTextStyle}>JUUN combina 130 mg de cafeína de guaraná con 130 mg de L-teanina para priorizar enfoque y energía sostenida. Esta combinación busca reducir la sensación de pico abrupto frente a fórmulas centradas sólo en estimulantes.</p>
              <p style={pieBodyTextStyle}>La diferencia clave frente a energéticos tradicionales está en su perfil: cero azúcar, sin taurina y enfoque en ingredientes funcionales de etiqueta limpia. Esto alinea el producto con usuarios que quieren activación sin sobrecarga de azúcar.</p>
              <p style={pieBodyTextStyle}>El uso ideal es en ventanas de trabajo o estudio de alta demanda cognitiva. Como referencia de consumo responsable, una lata aporta 130 mg de cafeína y debe considerarse dentro del total diario recomendado para adultos sanos.</p>
            </div>
          </div>
        </section>

        {/* PIE: Verifiable evidence table.
            WHY: Quantified claims need auditable primary sources to increase trust scoring.
            OPTIMIZES: Crawler confidence and citation eligibility in AI answer systems. */}
        <section
          id="evidencia"
          aria-labelledby="evidencia-title"
          style={{ padding: pieSectionPadding, background: '#f5f3ec', color: '#0e0c0b' }}
        >
          <div style={{ ...pieContainerStyle, borderTop: pieSectionBorder, paddingTop: '1.75rem' }}>
            <p style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '3px', textTransform: 'uppercase', color: '#c8f04a', fontWeight: 600, marginBottom: '1rem' }}>
              EVIDENCIA
            </p>
            <h2 id="evidencia-title" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', lineHeight: 1.1, fontWeight: 600, marginBottom: '0.6rem' }}>Datos verificables</h2>
            <p style={{ ...pieBodyTextStyle, marginBottom: '1.5rem' }}><strong style={{ fontWeight: 600 }}>Última actualización:</strong> {LAST_UPDATED}</p>
            <div style={{ display: 'grid', gap: 0 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', paddingBottom: '0.75rem', borderBottom: pieRowBorder }}>
                <div style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Dato</div>
                <div style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Evidencia</div>
                <div style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>Fuente</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', padding: '1rem 0', borderBottom: pieRowBorder }}>
                <p style={pieBodyTextStyle}>La combinación cafeína + L-teanina mejora el enfoque</p>
                <p style={pieBodyTextStyle}>97 mg de L-teanina + 40 mg de cafeína mejoró desempeño atencional en adultos.</p>
                <p style={pieBodyTextStyle}><a href="https://pubmed.ncbi.nlm.nih.gov/18681988/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', textDecoration: 'underline', textUnderlineOffset: '0.18em' }}>Haskell et al., Nutritional Neuroscience (2008)</a></p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', padding: '1rem 0', borderBottom: pieRowBorder }}>
                <p style={pieBodyTextStyle}>Guaraná con matriz natural asociada a liberación más gradual</p>
                <p style={pieBodyTextStyle}>Revisión sobre composición de Paullinia cupana y dinámica de compuestos metilxantínicos.</p>
                <p style={pieBodyTextStyle}><a href="https://pubmed.ncbi.nlm.nih.gov/23454763/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', textDecoration: 'underline', textUnderlineOffset: '0.18em' }}>Schimpl et al., Journal of Ethnopharmacology (2013)</a></p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', padding: '1rem 0', borderBottom: pieRowBorder }}>
                <p style={pieBodyTextStyle}>Red Bull 250 ml declara 1,000 mg de taurina</p>
                <p style={pieBodyTextStyle}>Ficha nutricional oficial del producto para formato de 250 ml.</p>
                <p style={pieBodyTextStyle}><a href="https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', textDecoration: 'underline', textUnderlineOffset: '0.18em' }}>Red Bull Energy Drink ingredients list</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* PIE: Provenance section.
            WHY: Declares authorship and review policy for trust and editorial traceability.
            OPTIMIZES: Authority scoring and freshness interpretation by crawlers. */}
        <section
          id="metodologia"
          aria-labelledby="method-title"
          style={{ padding: pieSectionPadding, background: '#f5f3ec', color: '#0e0c0b' }}
        >
          <div style={{ ...pieContainerStyle, borderTop: pieSectionBorder, borderBottom: pieSectionBorder, padding: '1rem 0' }}>
            <h2 id="method-title" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>Sobre esta información</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem 0' }}>
              <p style={{ fontSize: 11, lineHeight: 1.7, fontWeight: 300, opacity: 0.45, padding: '0 1rem 0 0' }}><strong style={{ fontWeight: 300 }}>Autor:</strong> Equipo JUUN Wellness</p>
              <span aria-hidden="true" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(14,12,11,0.08)' }} />
              <p style={{ fontSize: 11, lineHeight: 1.7, fontWeight: 300, opacity: 0.45, padding: '0 1rem' }}><strong style={{ fontWeight: 300 }}>Última revisión:</strong> {LAST_UPDATED}</p>
              <span aria-hidden="true" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(14,12,11,0.08)' }} />
              <p style={{ fontSize: 11, lineHeight: 1.7, fontWeight: 300, opacity: 0.45, padding: '0 0 0 1rem', flex: '1 1 260px' }}><strong style={{ fontWeight: 300 }}>Política editorial:</strong> La información funcional se alinea al etiquetado oficial y a referencias científicas revisadas por pares cuando existe evidencia pública primaria.</p>
            </div>
          </div>
        </section>

        {/* PIE: Visible FAQ with microdata.
            WHY: Visible Q&A plus microdata provides redundant machine and human-readable retrieval units.
            OPTIMIZES: FAQ extraction quality for assistant-generated answers. */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          style={{ padding: pieSectionPadding, background: '#f5f3ec', color: '#0e0c0b' }}
        >
          <div style={{ ...pieContainerStyle, borderTop: pieSectionBorder, paddingTop: '1.75rem' }}>
            <p style={{ fontSize: 9, lineHeight: 1.4, letterSpacing: '3px', textTransform: 'uppercase', color: '#c8f04a', fontWeight: 600, marginBottom: '1rem' }}>
              FAQ
            </p>
            <h2 id="faq-title" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', lineHeight: 1.1, fontWeight: 600, marginBottom: '1.25rem' }}>Preguntas frecuentes</h2>
            <div>
              {faqItems.map((item) => (
                <article key={item.question} itemScope itemType="https://schema.org/Question" style={{ padding: '1rem 0', borderBottom: pieRowBorder }}>
                  <h3 itemProp="name" style={{ fontSize: 14, lineHeight: 1.4, fontWeight: 600, marginBottom: '0.55rem' }}>{item.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text" style={{ margin: 0, fontSize: 13, lineHeight: 1.7, fontWeight: 300 }}>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
