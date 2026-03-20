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
    <div id="science-article-page" style={{ background: 'var(--linen)', color: 'var(--black)', minHeight: '100vh' }}>
      <Header />
      <main style={{ paddingTop: '5.5rem' }}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #science-article-page .science-article-layout {
                display: grid;
                gap: 4rem;
              }
              #science-article-page .science-evidence-grid {
                display: grid;
                grid-template-columns: 2fr 3fr 2fr;
                column-gap: 1.25rem;
              }
              #science-article-page .header:not(.scrolled) .header-logo-link img {
                filter: invert(1);
              }
              #science-article-page .header:not(.scrolled) .cart-btn,
              #science-article-page .header:not(.scrolled) .menu-btn {
                color: var(--black) !important;
                border-color: rgba(14,12,11,0.14) !important;
              }
              #science-article-page .header:not(.scrolled) .nav-cta {
                background: var(--black);
                color: var(--linen);
                border-color: var(--black);
              }
              @media (min-width: 1024px) {
                #science-article-page .science-article-layout {
                  grid-template-columns: minmax(0, 1fr) 280px;
                }
                #science-article-page .science-sidebar {
                  position: sticky;
                  top: 6rem;
                  align-self: start;
                }
              }
              @media (max-width: 700px) {
                #science-article-page .science-evidence-grid {
                  grid-template-columns: 1fr;
                  row-gap: 0.25rem;
                }
              }
            `,
          }}
        />

        <div className="science-article-layout" style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(4rem,6vw,6rem) 1.5rem', gap: '4rem' }}>
          <article style={{ minWidth: 0 }}>
            <div style={{ fontSize: 9, letterSpacing: '2px', color: 'rgba(14,12,11,0.35)', marginBottom: '3rem', fontWeight: 300 }}>
              <Link href="/ciencia" style={{ color: 'inherit', textDecoration: 'none' }}>
                Ciencia
              </Link>{' '}
              → {article.title}
            </div>

            <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
              {article.tag}
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.1, letterSpacing: '-1px', marginBottom: '0.5rem', fontWeight: 700 }}>
              {article.title}
            </h1>
            <p style={{ fontSize: 9, color: 'rgba(14,12,11,0.3)', marginBottom: '3rem', fontWeight: 300 }}>
              Publicado {article.date}
            </p>
            <div style={{ borderTop: '1px solid rgba(14,12,11,0.1)' }} />

            <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(14,12,11,0.7)', marginTop: '2rem', fontWeight: 300 }}>
              {article.intro}
            </p>

            {article.sections.map((section) => (
              <section key={section.heading} style={{ marginTop: '2.5rem' }}>
                <h2 style={{ fontSize: '1rem', lineHeight: 1.3, letterSpacing: '-0.3px', marginBottom: '0.75rem', fontWeight: 600 }}>
                  {section.heading}
                </h2>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(14,12,11,0.7)', fontWeight: 300 }}>
                  {section.body}
                </p>
              </section>
            ))}

            <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(14,12,11,0.1)', paddingTop: '1.5rem' }}>
              <div className="science-evidence-grid" style={{ paddingBottom: '0.75rem' }}>
                <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>
                  Dato
                </div>
                <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>
                  Evidencia
                </div>
                <div style={{ fontSize: 8, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', paddingBottom: '0.75rem', fontWeight: 600 }}>
                  Fuente
                </div>
              </div>

              {article.evidenceRows.map((row) => (
                <div key={row.dato + row.href} className="science-evidence-grid" style={{ borderTop: '1px solid rgba(14,12,11,0.06)' }}>
                  <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>
                    {row.dato}
                  </div>
                  <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>
                    {row.evidencia}
                  </div>
                  <div style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'rgba(14,12,11,0.7)', padding: '0.875rem 0', fontWeight: 300 }}>
                    <a href={row.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', borderBottom: '1px solid rgba(14,12,11,0.2)', textDecoration: 'none', fontSize: '0.75rem' }}>
                      {row.fuente}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {article.faq.length > 0 ? (
              <section style={{ marginTop: '3rem', borderTop: '1px solid rgba(14,12,11,0.1)', paddingTop: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
                  Preguntas frecuentes
                </span>
                {article.faq.map((item) => (
                  <div key={item.q} style={{ borderTop: '1px solid rgba(14,12,11,0.06)', padding: '1rem 0' }}>
                    <h2 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', letterSpacing: '-0.2px', fontWeight: 600 }}>
                      {item.q}
                    </h2>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(14,12,11,0.6)', fontWeight: 300 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </section>
            ) : null}

            {article.references.length > 0 ? (
              <section style={{ marginTop: '3rem', borderTop: '1px solid rgba(14,12,11,0.1)', paddingTop: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '1.25rem', fontWeight: 300 }}>
                  REFERENCIAS
                </span>
                <ol style={{ paddingLeft: '1.1rem', fontSize: '0.78rem', lineHeight: 1.7, color: 'rgba(14,12,11,0.4)', fontWeight: 300 }}>
                  {article.references.map((reference) => (
                    <li key={reference.text} style={{ marginTop: '0.65rem' }}>
                      {reference.href ? (
                        <a href={reference.href} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(14,12,11,0.5)', borderBottom: '1px solid rgba(14,12,11,0.15)', textDecoration: 'none' }}>
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

          <aside className="science-sidebar" style={{ minWidth: 0 }}>
            <div style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.3)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(14,12,11,0.1)', paddingBottom: '1rem', fontWeight: 300 }}>
              Artículos relacionados
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/ciencia/${related.slug}`}
                  style={{
                    display: 'block',
                    color: 'var(--black)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(14,12,11,0.06)',
                    paddingBottom: '1.25rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span style={{ display: 'block', fontSize: 8, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(14,12,11,0.35)', marginBottom: '0.65rem', fontWeight: 300 }}>
                    {related.tag}
                  </span>
                  <span style={{ display: 'block', fontSize: '0.8rem', lineHeight: 1.3, color: 'var(--black)', fontWeight: 600 }}>
                    {related.title}
                  </span>
                </Link>
              ))}
            </div>

            <div id="comprar" style={{ background: 'var(--black)', padding: '1.5rem' }}>
              <div style={{ fontSize: 8, letterSpacing: '3px', color: 'rgba(245,243,236,0.35)', marginBottom: '0.75rem', fontWeight: 300 }}>
                FÓRMULA
              </div>
              <div style={{ fontSize: '1rem', color: 'var(--linen)', marginBottom: '0.5rem', fontWeight: 700 }}>
                JUUN Wellness
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(245,243,236,0.45)', marginBottom: '1.25rem', lineHeight: 1.6, fontWeight: 300 }}>
                130mg cafeína · 130mg L-teanina · 0g azúcar
              </p>
              <Link href="/comprar" style={{ fontSize: 8, letterSpacing: '2px', color: 'var(--linen)', borderBottom: '1px solid rgba(245,243,236,0.25)', paddingBottom: 2, textDecoration: 'none', fontWeight: 600 }}>
                Comprar →
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
