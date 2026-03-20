'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/pie-content'

export default function CienciaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-title" style={{ background: '#ffffff', padding: 'clamp(4rem,6vw,5rem) 3rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <span style={{ display: 'block', fontSize: 9, letterSpacing: '4px', color: 'rgba(14,12,11,0.3)', marginBottom: '1.5rem', fontWeight: 300 }}>
          PREGUNTAS FRECUENTES
        </span>
        <h2 id="faq-title" style={{ fontSize: '1.75rem', lineHeight: 1.15, marginBottom: '1rem', fontWeight: 600 }}>Preguntas frecuentes</h2>
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `science-faq-panel-${index}`

          return (
            <article key={item.question} itemScope itemType="https://schema.org/Question" style={{ position: 'relative', borderBottom: '1px solid rgba(14,12,11,0.06)', padding: 0 }}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '1.25rem 2rem 1.25rem 0',
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <span itemProp="name" style={{ fontSize: '0.9rem', color: 'var(--black)', letterSpacing: '-0.2px', fontWeight: 600 }}>
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: `translateY(-50%) rotate(${isOpen ? 45 : 0}deg)`,
                    transition: 'transform 0.3s ease',
                    fontSize: '1.2rem',
                    color: 'rgba(14,12,11,0.3)',
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{
                  maxHeight: isOpen ? 500 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease, opacity 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div style={{ paddingBottom: '1.25rem', paddingRight: '2rem' }}>
                  <p itemProp="text" style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(14,12,11,0.6)', fontWeight: 300 }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
