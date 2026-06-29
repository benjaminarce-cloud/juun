import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/sections/Header'

export const metadata: Metadata = {
  title: 'Gracias por tu compra | JUUN',
  description: 'Tu pedido JUUN Wellness fue confirmado. Gracias por tu compra.',
  robots: { index: false, follow: false },
}

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams
  const reference = session_id ? session_id.slice(-8).toUpperCase() : null

  return (
    <>
      <Header startOnLight />
      <main>
        <section className="final-cta gracias">
          <div className="cta-inner reveal gracias-inner">
            <span className="gracias-check" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path className="gracias-check-mark" d="M4 12.5l5 5L20 6.5" />
              </svg>
            </span>

            <div className="cta-rule" />

            <p className="gracias-eyebrow">Pedido confirmado</p>

            <h2 className="cta-title">
              Gracias
              <br />
              <span>por tu compra.</span>
            </h2>

            <p className="cta-sub gracias-sub">
              Recibimos tu pedido. Te enviaremos la confirmación y los detalles de
              entrega en Mexicali a tu correo.
            </p>

            {reference && (
              <p className="gracias-ref">Referencia · {reference}</p>
            )}

            <Link className="gracias-button" href="/">
              Volver al inicio
            </Link>

            <div className="cta-strip">
              <span className="cta-strip-item">Hecho en México</span>
              <span className="cta-strip-item">Envío a Mexicali</span>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .gracias {
          min-height: 100vh;
          justify-content: center;
          padding-top: 9rem;
          padding-bottom: 5rem;
        }
        .gracias-inner {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gracias-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 99px;
          border: 1px solid rgba(35,31,32,0.18);
          color: var(--black, #231f20);
          margin-bottom: 2.25rem;
        }
        .gracias-check-mark {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: gracias-draw 0.7s ease 0.15s forwards;
        }
        @keyframes gracias-draw {
          to { stroke-dashoffset: 0; }
        }
        .gracias-eyebrow {
          font-size: 0.6rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(35,31,32,0.4);
          margin-bottom: 1.25rem;
        }
        .gracias-sub {
          margin-bottom: 2.5rem;
          max-width: 30rem;
        }
        .gracias-ref {
          font-size: 0.55rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(35,31,32,0.35);
          padding: 0.5rem 1.1rem;
          border: 1px solid rgba(35,31,32,0.12);
          border-radius: 99px;
          margin-bottom: 3rem;
        }
        .gracias-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          background: var(--black, #231f20);
          color: var(--linen, #fcfbf0);
          text-decoration: none;
          border-radius: 99px;
          border: 2px solid var(--black, #231f20);
          font-family: 'Unbounded', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: background 0.3s, color 0.3s;
        }
        .gracias-button:hover {
          background: transparent;
          color: var(--black, #231f20);
        }
        @media (prefers-reduced-motion: reduce) {
          .gracias-check-mark { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  )
}
