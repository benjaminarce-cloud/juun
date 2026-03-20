import Link from 'next/link'
import Header from '@/components/sections/Header'
import CienciaFAQ from '@/components/sections/CienciaFAQ'
import StructuredData from '@/components/StructuredData'
import { faqSchema, productSchema } from '@/lib/pie-content'
import { ARTICLE_LIST } from './articles'

const LAST_UPDATED = '2026-03-11'

const hiddenHeadingStyle = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
} as const

export default function CienciaPage() {
  return (
    <>
      <Header />
      <StructuredData data={[productSchema, faqSchema]} />
      <main style={{ background: 'var(--linen)', color: 'var(--black)' }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #science-page .science-hero-grid {
                display: grid;
                grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
                gap: 2rem;
              }
              #science-page .science-stat-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
              #science-page .science-article-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 1px;
                background: rgba(14,12,11,0.08);
              }
              @media (max-width: 900px) {
                #science-page .science-hero-grid,
                #science-page .science-stat-grid {
                  grid-template-columns: 1fr;
                }
                #science-page .science-stat-item {
                  border-right: none !important;
                  border-bottom: 1px solid rgba(14,12,11,0.1);
                }
                #science-page .science-stat-item:last-child {
                  border-bottom: none;
                }
              }
              @media (max-width: 640px) {
                #science-page .science-article-grid {
                  grid-template-columns: 1fr;
                }
              }
            `,
          }}
        />

        <div id="science-page">
          <section
            id="summary"
            aria-labelledby="summary-title"
            style={{ background: 'var(--black)', padding: 'clamp(6rem,10vw,10rem) 3rem clamp(4rem,6vw,6rem)' }}
          >
            <div className="science-hero-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div>
                <span style={{ display: 'block', fontSize: 9, fontWeight: 300, letterSpacing: '6px', color: 'rgba(245,243,236,0.4)', marginBottom: '2rem' }}>
                  CIENCIA & FÓRMULA
                </span>
                <h1 id="summary-title" style={{ fontSize: 'clamp(3rem,7vw,6rem)', color: 'var(--linen)', lineHeight: 1, letterSpacing: '-2px', marginBottom: '1.5rem', fontWeight: 700 }}>
                  La fórmula, explicada.
                </h1>
                <p style={{ fontSize: 'clamp(0.85rem,1.5vw,1rem)', color: 'rgba(245,243,236,0.4)', lineHeight: 1.7, maxWidth: 440, fontWeight: 300 }}>
                  Cada ingrediente en JUUN tiene una razón. Aquí está la evidencia.
                </p>
                <div style={{ width: '100%', borderBottom: '1px solid rgba(245,243,236,0.1)', marginTop: '3rem' }} />
              </div>
              <div />
            </div>
          </section>

          <section style={{ background: 'var(--linen)', borderTop: '1px solid rgba(14,12,11,0.12)', borderBottom: '1px solid rgba(14,12,11,0.12)' }}>
            <div className="science-stat-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>130mg</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>CAFEÍNA DE GUARANÁ</div>
              </div>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center', borderRight: '1px solid rgba(14,12,11,0.1)' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>130mg</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>L-TEANINA 1:1</div>
              </div>
              <div className="science-stat-item" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: 'var(--black)', letterSpacing: '-1px', lineHeight: 1, fontWeight: 900 }}>0g</div>
                <div style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.4)', marginTop: '0.5rem', fontWeight: 300 }}>AZÚCAR</div>
              </div>
            </div>
          </section>

          <section id="como-funciona" aria-labelledby="como-title" style={{ background: '#ffffff', padding: 'clamp(4rem,6vw,6rem) 3rem' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <h2 id="como-title" style={hiddenHeadingStyle}>Cómo funciona JUUN</h2>
              <span style={{ display: 'block', fontSize: 9, letterSpacing: '4px', color: 'rgba(14,12,11,0.3)', marginBottom: '3rem', fontWeight: 300 }}>
                ARTÍCULOS
              </span>
              <div className="science-article-grid">
                {ARTICLE_LIST.map((article) => (
                  <article key={article.slug} style={{ background: '#ffffff', padding: '2.5rem' }}>
                    <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
                      {article.tag}
                    </span>
                    <h2 style={{ fontSize: '1.15rem', lineHeight: 1.25, marginBottom: '0.75rem', letterSpacing: '-0.3px', fontWeight: 600 }}>{article.title}</h2>
                    <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(14,12,11,0.55)', marginBottom: '2rem', fontWeight: 300 }}>
                      {article.intro}
                    </p>
                    <Link href={`/ciencia/${article.slug}`} style={{ display: 'inline-block', fontSize: 8, letterSpacing: '2px', color: 'var(--black)', textDecoration: 'none', borderBottom: '1px solid rgba(14,12,11,0.25)', paddingBottom: '2px', fontWeight: 600 }}>
                      Leer más →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <CienciaFAQ />

          <section id="metodologia" aria-labelledby="method-title" style={{ background: 'var(--black)', padding: '2.5rem 3rem' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <h2 id="method-title" style={hiddenHeadingStyle}>Sobre esta información</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Autor: Equipo JUUN Wellness</span>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Última revisión: {LAST_UPDATED}</span>
                <span style={{ fontSize: 9, letterSpacing: '1px', color: 'rgba(245,243,236,0.3)', fontWeight: 300 }}>Política editorial: etiquetado oficial + referencias peer-reviewed</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
