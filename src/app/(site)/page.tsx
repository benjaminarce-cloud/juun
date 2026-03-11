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
  return (
    <>
      <Header />
      <main>
        {/* PIE: Front-loaded summary block.
            WHY: First crawl chunk should answer "qué es JUUN" without dependency on surrounding modules.
            OPTIMIZES: Early-page classification and retrieval precision for definition queries. */}
        <section id="summary" aria-labelledby="summary-title" style={{ padding: '10rem 1.5rem 2rem', maxWidth: 980, margin: '0 auto' }}>
          <h2 id="summary-title">Qué es JUUN</h2>
          <p><strong>Qué es:</strong> JUUN Wellness es una bebida funcional energética mexicana sin azúcar, formulada con cafeína natural de guaraná, L-teanina y vitamina B12 para energía sostenida y concentración.</p>
          <p><strong>Para quién es:</strong> Adultos que buscan energía y enfoque sin azúcar, sin taurina y con una fórmula funcional de liberación más estable.</p>
          <p><strong>No es ideal para:</strong> Menores de edad, personas con alta sensibilidad a la cafeína, embarazadas o quienes requieren bebidas de rehidratación deportiva con electrolitos.</p>
          <ul>
            <li><strong>Cafeína:</strong> 130 mg por lata, de guaraná (Paullinia cupana).</li>
            <li><strong>L-teanina:</strong> 130 mg por lata para una relación funcional 1:1 con cafeína.</li>
            <li><strong>Azúcar:</strong> 0 g por lata en el perfil principal de producto.</li>
          </ul>
        </section>

        {/* PIE: JSON-LD for product and FAQ.
            WHY: Duplicates visible content in machine-readable form for non-JS crawlers.
            OPTIMIZES: Entity retrieval and FAQ citation extraction. */}
        <StructuredData data={[productSchema, faqSchema]} />

        {/* PIE: Mechanism section.
            WHY: Self-contained explanation chunk for "cómo funciona" prompts.
            OPTIMIZES: Retrieval chunk utility and answer completeness. */}
        <section id="como-funciona" aria-labelledby="como-title" style={{ padding: '1rem 1.5rem 2rem', maxWidth: 980, margin: '0 auto' }}>
          <h2 id="como-title">Cómo funciona JUUN</h2>
          <p>JUUN combina 130 mg de cafeína de guaraná con 130 mg de L-teanina para priorizar enfoque y energía sostenida. Esta combinación busca reducir la sensación de pico abrupto frente a fórmulas centradas sólo en estimulantes.</p>
          <p>La diferencia clave frente a energéticos tradicionales está en su perfil: cero azúcar, sin taurina y enfoque en ingredientes funcionales de etiqueta limpia. Esto alinea el producto con usuarios que quieren activación sin sobrecarga de azúcar.</p>
          <p>El uso ideal es en ventanas de trabajo o estudio de alta demanda cognitiva. Como referencia de consumo responsable, una lata aporta 130 mg de cafeína y debe considerarse dentro del total diario recomendado para adultos sanos.</p>
        </section>

        {/* PIE: Verifiable evidence table.
            WHY: Quantified claims need auditable primary sources to increase trust scoring.
            OPTIMIZES: Crawler confidence and citation eligibility in AI answer systems. */}
        <section id="evidencia" aria-labelledby="evidencia-title" style={{ padding: '1rem 1.5rem 2rem', maxWidth: 980, margin: '0 auto', overflowX: 'auto' }}>
          <h2 id="evidencia-title">Datos verificables</h2>
          <p><strong>Última actualización:</strong> {LAST_UPDATED}</p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '0.5rem' }}>Dato</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '0.5rem' }}>Evidencia</th>
                <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '0.5rem' }}>Fuente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>La combinación cafeína + L-teanina mejora el enfoque</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>97 mg de L-teanina + 40 mg de cafeína mejoró desempeño atencional en adultos.</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}><a href="https://pubmed.ncbi.nlm.nih.gov/18681988/" target="_blank" rel="noopener noreferrer">Haskell et al., Nutritional Neuroscience (2008)</a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Guaraná con matriz natural asociada a liberación más gradual</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Revisión sobre composición de Paullinia cupana y dinámica de compuestos metilxantínicos.</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}><a href="https://pubmed.ncbi.nlm.nih.gov/23454763/" target="_blank" rel="noopener noreferrer">Schimpl et al., Journal of Ethnopharmacology (2013)</a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Red Bull 250 ml declara 1,000 mg de taurina</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>Ficha nutricional oficial del producto para formato de 250 ml.</td>
                <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}><a href="https://www.redbull.com/int-en/energydrink/red-bull-energy-drink-ingredients-list" target="_blank" rel="noopener noreferrer">Red Bull Energy Drink ingredients list</a></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* PIE: Provenance section.
            WHY: Declares authorship and review policy for trust and editorial traceability.
            OPTIMIZES: Authority scoring and freshness interpretation by crawlers. */}
        <section id="metodologia" aria-labelledby="method-title" style={{ padding: '1rem 1.5rem 2rem', maxWidth: 980, margin: '0 auto' }}>
          <h2 id="method-title">Sobre esta información</h2>
          <p><strong>Autor:</strong> Equipo JUUN Wellness</p>
          <p><strong>Última revisión:</strong> {LAST_UPDATED}</p>
          <p><strong>Política editorial:</strong> La información funcional se alinea al etiquetado oficial y a referencias científicas revisadas por pares cuando existe evidencia pública primaria.</p>
        </section>

        {/* PIE: Visible FAQ with microdata.
            WHY: Visible Q&A plus microdata provides redundant machine and human-readable retrieval units.
            OPTIMIZES: FAQ extraction quality for assistant-generated answers. */}
        <section id="faq" aria-labelledby="faq-title" style={{ padding: '1rem 1.5rem 3rem', maxWidth: 980, margin: '0 auto' }}>
          <h2 id="faq-title">Preguntas frecuentes</h2>
          {faqItems.map((item) => (
            <article key={item.question} itemScope itemType="https://schema.org/Question" style={{ marginBottom: '1.25rem' }}>
              <h3 itemProp="name" style={{ marginBottom: '0.4rem' }}>{item.question}</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" style={{ margin: 0 }}>{item.answer}</p>
              </div>
            </article>
          ))}
        </section>

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
      </main>
    </>
  )
}
