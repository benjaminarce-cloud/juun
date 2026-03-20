import Link from 'next/link'
import Header from '@/components/sections/Header'
import CienciaFAQ from '@/components/sections/CienciaFAQ'
import StructuredData from '@/components/StructuredData'
import { faqSchema, productSchema } from '@/lib/pie-content'
import { ARTICLE_LIST } from './articles'

const LAST_UPDATED = '2026-03-11'

const SCIENCE_NOTES = [
  { label: 'Base', value: 'Etiquetado oficial' },
  { label: 'Soporte', value: 'Referencias peer-reviewed' },
  { label: 'Última revisión', value: LAST_UPDATED },
] as const

const SCIENCE_STATS = [
  { value: '130mg', label: 'Cafeína de guaraná', detail: 'por lata' },
  { value: '130mg', label: 'L-teanina', detail: 'relación 1:1' },
  { value: '0g', label: 'Azúcar', detail: 'en toda la fórmula' },
] as const

const SCIENCE_META = [
  { label: 'Autor', value: 'Equipo JUUN Wellness' },
  { label: 'Última revisión', value: LAST_UPDATED },
  { label: 'Política editorial', value: 'Etiquetado oficial + referencias peer-reviewed' },
] as const

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
              #science-page .science-shell {
                width: min(1120px, calc(100% - clamp(2rem, 6vw, 4rem)));
                margin: 0 auto;
              }
              #science-page .science-eyebrow {
                display: inline-block;
                font-size: 0.56rem;
                letter-spacing: 0.28em;
                text-transform: uppercase;
                font-weight: 400;
              }
              #science-page .science-hero {
                background:
                  radial-gradient(circle at top right, rgba(245,243,236,0.09), transparent 34%),
                  var(--black);
                padding: clamp(7rem, 11vw, 10rem) 0 clamp(4.5rem, 7vw, 6rem);
              }
              #science-page .science-hero-grid {
                display: grid;
                grid-template-columns: minmax(0, 1.18fr) minmax(18rem, 0.82fr);
                gap: clamp(2rem, 5vw, 5rem);
                align-items: end;
              }
              #science-page .science-hero-copy {
                max-width: 44rem;
              }
              #science-page .science-hero .science-eyebrow {
                color: rgba(245,243,236,0.42);
                margin-bottom: 1.5rem;
              }
              #science-page .science-hero-title {
                font-size: clamp(3.2rem, 8vw, 6.5rem);
                line-height: 0.96;
                letter-spacing: -0.05em;
                color: var(--linen);
                margin: 0;
              }
              #science-page .science-hero-lead {
                margin-top: 1.5rem;
                max-width: 32rem;
                font-size: clamp(0.92rem, 1.45vw, 1.02rem);
                line-height: 1.85;
                color: rgba(245,243,236,0.62);
                font-weight: 300;
              }
              #science-page .science-hero-card {
                border: 1px solid rgba(245,243,236,0.12);
                background: rgba(245,243,236,0.03);
                padding: 1.5rem;
                backdrop-filter: blur(10px);
              }
              #science-page .science-card-eyebrow {
                display: block;
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(245,243,236,0.42);
                margin-bottom: 0.85rem;
              }
              #science-page .science-hero-card-copy {
                font-size: 0.78rem;
                line-height: 1.8;
                color: rgba(245,243,236,0.68);
                font-weight: 300;
              }
              #science-page .science-note-list {
                margin-top: 1.25rem;
                border-top: 1px solid rgba(245,243,236,0.1);
              }
              #science-page .science-note-row {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                padding: 0.95rem 0;
                border-bottom: 1px solid rgba(245,243,236,0.08);
              }
              #science-page .science-note-label {
                font-size: 0.52rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: rgba(245,243,236,0.36);
              }
              #science-page .science-note-value {
                font-size: 0.72rem;
                color: var(--linen);
                text-align: right;
                line-height: 1.5;
              }
              #science-page .science-stats {
                border-top: 1px solid rgba(14,12,11,0.12);
                border-bottom: 1px solid rgba(14,12,11,0.12);
                background: rgba(255,255,255,0.6);
              }
              #science-page .science-stat-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
              }
              #science-page .science-stat-item {
                padding: 2.75rem 0;
              }
              #science-page .science-stat-item:not(:last-child) {
                border-right: 1px solid rgba(14,12,11,0.1);
              }
              #science-page .science-stat-value {
                font-size: clamp(2.6rem, 5vw, 3.8rem);
                line-height: 0.95;
                letter-spacing: -0.05em;
                color: var(--black);
                font-weight: 800;
              }
              #science-page .science-stat-label {
                margin-top: 0.85rem;
                font-size: 0.54rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.42);
              }
              #science-page .science-stat-detail {
                margin-top: 0.4rem;
                font-size: 0.76rem;
                line-height: 1.6;
                color: rgba(14,12,11,0.58);
                font-weight: 300;
              }
              #science-page .science-articles {
                background: #ffffff;
                padding: clamp(4rem, 7vw, 6rem) 0;
              }
              #science-page .science-section-header {
                display: grid;
                gap: 1rem;
                max-width: 38rem;
                margin-bottom: 2.5rem;
              }
              #science-page .science-section-header .science-eyebrow {
                color: rgba(14,12,11,0.34);
              }
              #science-page .science-section-title {
                font-size: clamp(2rem, 4vw, 3.35rem);
                line-height: 1;
                letter-spacing: -0.04em;
                margin: 0;
                font-weight: 700;
              }
              #science-page .science-section-copy {
                font-size: 0.88rem;
                line-height: 1.85;
                color: rgba(14,12,11,0.58);
                font-weight: 300;
              }
              #science-page .science-article-grid {
                display: grid;
                grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
                gap: 1px;
                background: rgba(14,12,11,0.08);
              }
              #science-page .science-article-card {
                min-height: 18rem;
                background: #ffffff;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2rem;
              }
              #science-page .science-article-card--featured {
                grid-row: span 2;
                min-height: 36rem;
                background: var(--linen);
                padding: clamp(2rem, 4vw, 3rem);
              }
              #science-page .science-article-meta {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 0.75rem 1.5rem;
              }
              #science-page .science-article-tag,
              #science-page .science-article-date {
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.36);
                font-weight: 500;
              }
              #science-page .science-article-title {
                margin: 1rem 0 0;
                font-size: clamp(1.25rem, 2.2vw, 1.8rem);
                line-height: 1.18;
                letter-spacing: -0.03em;
                font-weight: 600;
              }
              #science-page .science-article-card--featured .science-article-title {
                max-width: 24rem;
                font-size: clamp(1.8rem, 3vw, 2.75rem);
              }
              #science-page .science-article-intro {
                margin-top: 0.95rem;
                font-size: 0.84rem;
                line-height: 1.8;
                color: rgba(14,12,11,0.58);
                font-weight: 300;
              }
              #science-page .science-article-card--featured .science-article-intro {
                max-width: 30rem;
                font-size: 0.92rem;
              }
              #science-page .science-article-link {
                display: inline-flex;
                align-items: center;
                gap: 0.45rem;
                width: fit-content;
                font-size: 0.58rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                color: var(--black);
                text-decoration: none;
                padding-bottom: 0.2rem;
                border-bottom: 1px solid rgba(14,12,11,0.22);
                font-weight: 600;
              }
              #science-page .science-meta-band {
                background: var(--black);
                padding: 2.5rem 0;
              }
              #science-page .science-meta-grid {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 1px;
                background: rgba(245,243,236,0.08);
              }
              #science-page .science-meta-item {
                background: var(--black);
                padding: 1.35rem 1.5rem;
              }
              #science-page .science-meta-label {
                display: block;
                font-size: 0.5rem;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                color: rgba(245,243,236,0.34);
                margin-bottom: 0.55rem;
              }
              #science-page .science-meta-value {
                font-size: 0.76rem;
                line-height: 1.7;
                color: rgba(245,243,236,0.72);
                font-weight: 300;
              }
              @media (max-width: 980px) {
                #science-page .science-hero-grid,
                #science-page .science-stat-grid,
                #science-page .science-meta-grid {
                  grid-template-columns: 1fr;
                }
                #science-page .science-stat-item:not(:last-child),
                #science-page .science-meta-item:not(:last-child) {
                  border-right: none;
                  border-bottom: 1px solid rgba(14,12,11,0.1);
                }
                #science-page .science-meta-item:not(:last-child) {
                  border-bottom-color: rgba(245,243,236,0.08);
                }
                #science-page .science-article-grid {
                  grid-template-columns: 1fr;
                }
                #science-page .science-article-card--featured {
                  grid-row: auto;
                  min-height: 24rem;
                }
              }
              @media (max-width: 700px) {
                #science-page .science-hero {
                  padding-top: 6.75rem;
                }
                #science-page .science-shell {
                  width: min(1120px, calc(100% - 1.5rem));
                }
                #science-page .science-hero-card,
                #science-page .science-article-card,
                #science-page .science-article-card--featured {
                  padding: 1.5rem;
                }
                #science-page .science-stat-item {
                  padding: 2rem 0;
                }
                #science-page .science-section-header {
                  margin-bottom: 1.75rem;
                }
              }
            `,
          }}
        />

        <div id="science-page">
          <section id="summary" aria-labelledby="summary-title" className="science-hero">
            <div className="science-shell science-hero-grid">
              <div className="science-hero-copy">
                <span className="science-eyebrow">Ciencia & fórmula</span>
                <h1 id="summary-title" className="science-hero-title">
                  La fórmula,
                  <br />
                  explicada.
                </h1>
                <p className="science-hero-lead">
                  Cada ingrediente en JUUN tiene una razón. Esta sección reúne la evidencia,
                  los matices y las respuestas clave para entender la fórmula sin ruido ni
                  promesas infladas.
                </p>
              </div>

              <aside className="science-hero-card" aria-label="Método editorial">
                <span className="science-card-eyebrow">Método editorial</span>
                <p className="science-hero-card-copy">
                  Etiquetado oficial, bibliografía peer-reviewed y respuestas concretas para
                  entender qué sí se puede afirmar de la fórmula y qué conviene no exagerar.
                </p>
                <div className="science-note-list">
                  {SCIENCE_NOTES.map((item) => (
                    <div key={item.label} className="science-note-row">
                      <span className="science-note-label">{item.label}</span>
                      <span className="science-note-value">{item.value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="science-stats" aria-labelledby="science-stats-title">
            <div className="science-shell">
              <h2 id="science-stats-title" style={hiddenHeadingStyle}>
                Resumen de la fórmula
              </h2>
              <div className="science-stat-grid">
                {SCIENCE_STATS.map((item) => (
                  <div key={item.label} className="science-stat-item">
                    <div className="science-stat-value">{item.value}</div>
                    <div className="science-stat-label">{item.label}</div>
                    <p className="science-stat-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="como-funciona" aria-labelledby="como-title" className="science-articles">
            <div className="science-shell">
              <div className="science-section-header">
                <span className="science-eyebrow">Artículos</span>
                <h2 id="como-title" className="science-section-title">
                  Base científica, sin ruido.
                </h2>
                <p className="science-section-copy">
                  Lecturas breves para entender qué hace cada ingrediente, qué sí dice la
                  literatura y dónde conviene hablar con más precisión.
                </p>
              </div>

              <div className="science-article-grid">
                {ARTICLE_LIST.map((article, index) => (
                  <article
                    key={article.slug}
                    className={`science-article-card${index === 0 ? ' science-article-card--featured' : ''}`}
                  >
                    <div>
                      <div className="science-article-meta">
                        <span className="science-article-tag">{article.tag}</span>
                        <span className="science-article-date">{article.date}</span>
                      </div>
                      <h3 className="science-article-title">{article.title}</h3>
                      <p className="science-article-intro">{article.intro}</p>
                    </div>

                    <Link href={`/ciencia/${article.slug}`} className="science-article-link">
                      Leer más
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <CienciaFAQ />

          <section id="metodologia" aria-labelledby="method-title" className="science-meta-band">
            <div className="science-shell">
              <h2 id="method-title" style={hiddenHeadingStyle}>
                Sobre esta información
              </h2>
              <div className="science-meta-grid">
                {SCIENCE_META.map((item) => (
                  <div key={item.label} className="science-meta-item">
                    <span className="science-meta-label">{item.label}</span>
                    <span className="science-meta-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
