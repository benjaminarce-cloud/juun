'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/pie-content'

export default function CienciaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-title" className="science-faq-section">
      <style>{`
        .science-faq-section {
          background: #ffffff;
          border-top: 1px solid rgba(14,12,11,0.08);
          padding: clamp(4rem, 7vw, 6rem) 0;
        }
        .science-faq-shell {
          width: min(1120px, calc(100% - clamp(2rem, 6vw, 4rem)));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: clamp(2rem, 6vw, 5rem);
          align-items: start;
        }
        .science-faq-head {
          display: grid;
          gap: 1rem;
        }
        .science-faq-eyebrow {
          display: inline-block;
          font-size: 0.56rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(14,12,11,0.34);
          font-weight: 400;
        }
        .science-faq-title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 700;
        }
        .science-faq-copy {
          max-width: 24rem;
          font-size: 0.88rem;
          line-height: 1.85;
          color: rgba(14,12,11,0.56);
          font-weight: 300;
        }
        .science-faq-list {
          border-top: 1px solid rgba(14,12,11,0.08);
        }
        .science-faq-item {
          border-bottom: 1px solid rgba(14,12,11,0.08);
        }
        .science-faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.35rem 0;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }
        .science-faq-question {
          font-size: 0.94rem;
          line-height: 1.5;
          color: var(--black);
          letter-spacing: -0.02em;
          font-weight: 600;
        }
        .science-faq-icon {
          flex-shrink: 0;
          width: 1.9rem;
          height: 1.9rem;
          border: 1px solid rgba(14,12,11,0.14);
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: rgba(14,12,11,0.45);
          transform: rotate(0deg);
          transition: transform 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }
        .science-faq-item.open .science-faq-icon {
          transform: rotate(45deg);
          color: var(--black);
          border-color: rgba(14,12,11,0.28);
        }
        .science-faq-panel {
          overflow: hidden;
          transition: max-height 0.32s ease, opacity 0.24s ease;
        }
        .science-faq-answer-wrap {
          padding: 0 3rem 1.5rem 0;
        }
        .science-faq-answer {
          font-size: 0.86rem;
          line-height: 1.85;
          color: rgba(14,12,11,0.62);
          font-weight: 300;
        }
        @media (max-width: 900px) {
          .science-faq-shell {
            grid-template-columns: 1fr;
          }
          .science-faq-copy {
            max-width: none;
          }
        }
        @media (max-width: 700px) {
          .science-faq-shell {
            width: min(1120px, calc(100% - 1.5rem));
          }
          .science-faq-answer-wrap {
            padding-right: 0;
          }
        }
      `}</style>

      <div className="science-faq-shell">
        <div className="science-faq-head">
          <span className="science-faq-eyebrow">Preguntas frecuentes</span>
          <h2 id="faq-title" className="science-faq-title">
            Lo esencial,
            <br />
            respondido.
          </h2>
          <p className="science-faq-copy">
            Respuestas claras para las dudas más comunes sobre la fórmula y cómo leer
            esta sección con precisión.
          </p>
        </div>

        <div className="science-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `science-faq-panel-${index}`

            return (
              <article
                key={item.question}
                className={`science-faq-item${isOpen ? ' open' : ''}`}
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  type="button"
                  className="science-faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                >
                  <span itemProp="name" className="science-faq-question">
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="science-faq-icon">
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  className="science-faq-panel"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  style={{
                    maxHeight: isOpen ? 420 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="science-faq-answer-wrap">
                    <p itemProp="text" className="science-faq-answer">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
