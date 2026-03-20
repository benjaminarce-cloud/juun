import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/sections/Header'
import { ARTICLE_LIST, ARTICLE_SLUGS, getArticleBySlug } from '../articles'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }))
}

export default async function CienciaArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = ARTICLE_LIST.filter((candidate) => candidate.slug !== article.slug)

  return (
    <div
      id="science-article-page"
      style={{
        background: 'linear-gradient(180deg, #171412 0px, #1d1918 28rem, var(--linen) 28rem, var(--linen) 100%)',
        color: 'var(--black)',
        minHeight: '100vh',
      }}
    >
      <Header />
      <main style={{ paddingTop: '5.5rem' }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #science-article-page .science-shell {
                width: min(1100px, calc(100% - clamp(2rem, 6vw, 4rem)));
                margin: 0 auto;
              }
              #science-article-page .science-article-layout {
                display: grid;
                gap: clamp(3rem, 6vw, 5rem);
                padding: clamp(4rem, 7vw, 6rem) 0;
                overflow: visible;
              }
              #science-article-page .science-article-main {
                min-width: 0;
                overflow: visible;
                text-align: left;
              }
              #science-article-page .science-crumb {
                margin-bottom: 2.25rem;
                font-size: 0.52rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: rgba(245,243,236,0.46);
              }
              #science-article-page .science-crumb a {
                color: inherit;
                text-decoration: none;
              }
              #science-article-page .science-article-hero {
                padding: clamp(2rem, 4vw, 3rem);
                padding-bottom: clamp(3rem, 6vw, 6rem);
                height: auto;
                min-height: clamp(320px, 40vw, 520px);
                border: 1px solid rgba(245,243,236,0.12);
                background:
                  radial-gradient(circle at top left, rgba(106,126,88,0.18), transparent 34%),
                  radial-gradient(circle at top right, rgba(214,184,123,0.12), transparent 30%),
                  rgba(255,255,255,0.04);
                backdrop-filter: blur(12px);
                overflow: visible;
                text-align: left;
              }
              #science-article-page .science-article-kicker-row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 0.75rem 1.5rem;
                margin-bottom: 1rem;
                overflow: visible;
              }
              #science-article-page .science-tag,
              #science-article-page .science-date {
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(245,243,236,0.46);
                font-weight: 500;
              }
              #science-article-page .science-article-title {
                max-width: 48rem;
                margin: 0;
                font-size: clamp(2.2rem, 4.4vw, 4rem);
                line-height: 0.98;
                letter-spacing: -0.05em;
                font-weight: 700;
                color: var(--linen);
                white-space: normal;
                word-break: break-word;
                overflow-wrap: break-word;
              }
              #science-article-page .science-article-intro {
                max-width: 46rem;
                margin-top: 1.35rem;
                font-size: clamp(0.96rem, 1.3vw, 1.08rem);
                line-height: 1.9;
                color: rgba(245,243,236,0.68);
                font-weight: 300;
              }
              #science-article-page .science-prose-section,
              #science-article-page .science-data-section,
              #science-article-page .science-faq-block,
              #science-article-page .science-reference-block {
                max-width: 48rem;
              }
              #science-article-page .science-prose-section {
                margin-top: 2.75rem;
                padding-left: 1.25rem;
                border-left: 1px solid rgba(14,12,11,0.14);
              }
              #science-article-page .science-prose-section h2,
              #science-article-page .science-faq-question {
                font-size: 1.06rem;
                line-height: 1.35;
                letter-spacing: -0.02em;
                font-weight: 600;
              }
              #science-article-page .science-prose-section p,
              #science-article-page .science-faq-answer {
                margin-top: 0.7rem;
                font-size: 0.9rem;
                line-height: 1.9;
                color: rgba(14,12,11,0.66);
                font-weight: 300;
              }
              #science-article-page .science-data-section,
              #science-article-page .science-faq-block,
              #science-article-page .science-reference-block {
                margin-top: 3.25rem;
                padding: 1.6rem 1.5rem 1.7rem;
                border: 1px solid rgba(14,12,11,0.08);
                background: rgba(255,255,255,0.68);
              }
              #science-article-page .science-section-eyebrow {
                display: block;
                margin-bottom: 1rem;
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.36);
                font-weight: 500;
              }
              #science-article-page .science-evidence-grid {
                display: grid;
                grid-template-columns: 1.15fr 1.6fr 0.95fr;
                gap: 1.25rem;
                border-top: 1px solid rgba(14,12,11,0.06);
              }
              #science-article-page .science-evidence-grid--head {
                gap: 1.25rem;
                border-top: none;
                padding-bottom: 0.4rem;
              }
              #science-article-page .science-evidence-heading {
                font-size: 0.48rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.34);
                font-weight: 600;
              }
              #science-article-page .science-evidence-cell {
                padding: 0.95rem 0;
              }
              #science-article-page .science-evidence-label {
                display: none;
                margin-bottom: 0.45rem;
                font-size: 0.46rem;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.34);
                font-weight: 600;
              }
              #science-article-page .science-evidence-text {
                font-size: 0.8rem;
                line-height: 1.7;
                color: rgba(14,12,11,0.66);
                font-weight: 300;
              }
              #science-article-page .science-evidence-source {
                color: var(--black);
                text-decoration: none;
                border-bottom: 1px solid rgba(14,12,11,0.2);
                padding-bottom: 0.15rem;
              }
              #science-article-page .science-faq-item {
                padding: 1rem 0;
                border-top: 1px solid rgba(14,12,11,0.06);
              }
              #science-article-page .science-reference-list {
                padding-left: 1.1rem;
                font-size: 0.8rem;
                line-height: 1.8;
                color: rgba(14,12,11,0.46);
                font-weight: 300;
              }
              #science-article-page .science-reference-list li + li {
                margin-top: 0.65rem;
              }
              #science-article-page .science-reference-list a {
                color: rgba(14,12,11,0.56);
                border-bottom: 1px solid rgba(14,12,11,0.16);
                text-decoration: none;
              }
              #science-article-page .science-sidebar {
                min-width: 0;
                display: grid;
                gap: 1rem;
                align-content: start;
              }
              #science-article-page .science-sidebar-panel {
                border: 1px solid rgba(14,12,11,0.1);
                background: rgba(255,255,255,0.72);
                padding: 1.4rem;
              }
              #science-article-page .science-sidebar-heading {
                display: block;
                margin-bottom: 1rem;
                font-size: 0.5rem;
                letter-spacing: 0.24em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.34);
                font-weight: 600;
              }
              #science-article-page .science-related-link {
                display: block;
                padding: 1rem 0;
                color: var(--black);
                text-decoration: none;
                border-top: 1px solid rgba(14,12,11,0.06);
              }
              #science-article-page .science-related-link:first-of-type {
                padding-top: 0;
                border-top: none;
              }
              #science-article-page .science-related-tag {
                display: block;
                font-size: 0.48rem;
                letter-spacing: 0.22em;
                text-transform: uppercase;
                color: rgba(14,12,11,0.34);
                margin-bottom: 0.55rem;
                font-weight: 500;
              }
              #science-article-page .science-related-title {
                display: block;
                font-size: 0.82rem;
                line-height: 1.45;
                font-weight: 600;
              }
              #science-article-page .science-buy-card {
                background: var(--black);
                border: none;
              }
              #science-article-page .science-buy-card .science-sidebar-heading {
                color: rgba(245,243,236,0.34);
              }
              #science-article-page .science-buy-name {
                font-size: 1rem;
                color: var(--linen);
                font-weight: 700;
              }
              #science-article-page .science-buy-copy {
                margin-top: 0.6rem;
                font-size: 0.78rem;
                line-height: 1.7;
                color: rgba(245,243,236,0.5);
                font-weight: 300;
              }
              #science-article-page .science-buy-link {
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
                margin-top: 1.25rem;
                color: var(--linen);
                text-decoration: none;
                border-bottom: 1px solid rgba(245,243,236,0.25);
                padding-bottom: 0.15rem;
                font-size: 0.54rem;
                letter-spacing: 0.18em;
                text-transform: uppercase;
                font-weight: 600;
              }
              #science-article-page .header:not(.scrolled) .header-logo-link img {
                filter: none;
              }
              #science-article-page .header:not(.scrolled) .cart-btn,
              #science-article-page .header:not(.scrolled) .menu-btn {
                color: var(--linen) !important;
                border-color: rgba(252,251,240,0.24) !important;
              }
              #science-article-page .header:not(.scrolled) .nav-cta {
                background: var(--linen);
                color: var(--black);
                border-color: rgba(252,251,240,0.24);
              }
              @media (min-width: 1024px) {
                #science-article-page .science-article-layout {
                  grid-template-columns: minmax(0, 1fr) 300px;
                }
                #science-article-page .science-sidebar {
                  position: sticky;
                  top: 6rem;
                }
              }
              @media (max-width: 768px) {
                #science-article-page .science-shell {
                  width: min(1100px, calc(100% - 3rem));
                }
                #science-article-page .science-article-layout {
                  grid-template-columns: 1fr;
                }
                #science-article-page .science-article-main {
                  width: 100%;
                }
                #science-article-page .science-article-hero,
                #science-article-page .science-data-section,
                #science-article-page .science-faq-block,
                #science-article-page .science-reference-block {
                  padding: 1.35rem;
                }
                #science-article-page .science-prose-section {
                  padding-left: 0.9rem;
                }
                #science-article-page .science-evidence-grid {
                  grid-template-columns: 1fr;
                  gap: 0;
                }
                #science-article-page .science-evidence-grid--head {
                  display: none;
                }
                #science-article-page .science-evidence-label {
                  display: block;
                }
                #science-article-page .science-sidebar-panel {
                  padding: 1.2rem;
                }
              }
            `,
          }}
        />

        <div className="science-shell science-article-layout">
          <article className="science-article-main">
            <div className="science-crumb">
              <Link href="/ciencia">Ciencia</Link> / {article.title}
            </div>

            <header className="science-article-hero">
              <div className="science-article-kicker-row">
                <span className="science-tag">{article.tag}</span>
                <span className="science-date">Publicado {article.date}</span>
              </div>
              <h1 className="science-article-title">{article.title}</h1>
              <p className="science-article-intro">{article.intro}</p>
            </header>

            {article.sections.map((section) => (
              <section key={section.heading} className="science-prose-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section className="science-data-section">
              <span className="science-section-eyebrow">Evidencia</span>
              <div className="science-evidence-grid science-evidence-grid--head">
                <div className="science-evidence-heading">Dato</div>
                <div className="science-evidence-heading">Evidencia</div>
                <div className="science-evidence-heading">Fuente</div>
              </div>

              {article.evidenceRows.map((row) => (
                <div key={row.dato + row.href} className="science-evidence-grid">
                  <div className="science-evidence-cell">
                    <div className="science-evidence-label">Dato</div>
                    <div className="science-evidence-text">{row.dato}</div>
                  </div>
                  <div className="science-evidence-cell">
                    <div className="science-evidence-label">Evidencia</div>
                    <div className="science-evidence-text">{row.evidencia}</div>
                  </div>
                  <div className="science-evidence-cell">
                    <div className="science-evidence-label">Fuente</div>
                    <a href={row.href} target="_blank" rel="noopener noreferrer" className="science-evidence-text science-evidence-source">
                      {row.fuente}
                    </a>
                  </div>
                </div>
              ))}
            </section>

            {article.faq.length > 0 ? (
              <section className="science-faq-block">
                <span className="science-section-eyebrow">Preguntas frecuentes</span>
                {article.faq.map((item) => (
                  <div key={item.q} className="science-faq-item">
                    <h2 className="science-faq-question">{item.q}</h2>
                    <p className="science-faq-answer">{item.a}</p>
                  </div>
                ))}
              </section>
            ) : null}

            {article.references.length > 0 ? (
              <section className="science-reference-block">
                <span className="science-section-eyebrow">Referencias</span>
                <ol className="science-reference-list">
                  {article.references.map((reference) => (
                    <li key={reference.text}>
                      {reference.href ? (
                        <a href={reference.href} target="_blank" rel="noopener noreferrer">
                          {reference.text}
                        </a>
                      ) : (
                        reference.text
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </article>

          <aside className="science-sidebar">
            <div className="science-sidebar-panel">
              <span className="science-sidebar-heading">Artículos relacionados</span>
              {relatedArticles.map((related) => (
                <Link key={related.slug} href={`/ciencia/${related.slug}`} className="science-related-link">
                  <span className="science-related-tag">{related.tag}</span>
                  <span className="science-related-title">{related.title}</span>
                </Link>
              ))}
            </div>

            <div id="comprar" className="science-sidebar-panel science-buy-card">
              <span className="science-sidebar-heading">Fórmula</span>
              <div className="science-buy-name">JUUN Wellness</div>
              <p className="science-buy-copy">
                130mg cafeína de guaraná, 130mg L-teanina y 0g azúcar en una
                formulación diseñada para energía más clara.
              </p>
              <Link href="/comprar" className="science-buy-link">
                Comprar
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
