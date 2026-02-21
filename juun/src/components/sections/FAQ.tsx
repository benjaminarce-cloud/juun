'use client'

import { useState } from 'react'
import Reveal from '@/components/motion/Reveal'
import { copy } from '@/content/siteCopy'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { eyebrow, titleLight, titleBold, items } = copy.faq

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section
      style={{
        paddingTop: 'var(--s-pad)',
        paddingBottom: 'var(--s-pad)',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        className="ui-container"
        style={{
          padding: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'start',
        }}
      >
        {/* Sticky title */}
        <Reveal>
          <div>
            <span className="ui-eyebrow">{eyebrow}</span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                marginTop: '0.75rem',
                position: 'sticky',
                top: '5rem',
              }}
            >
              <span style={{ fontWeight: 300 }}>{titleLight}</span>
              {titleBold}
            </h2>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={1}>
          <ul
            style={{
              listStyle: 'none',
              border: '1px solid var(--border)',
            }}
          >
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <li
                  key={item.q}
                  style={{ borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      padding: '1.5rem 1.75rem',
                      fontFamily: 'inherit',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      textAlign: 'left',
                      background: isOpen ? '#f5f4e8' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--black)',
                      transition: 'background 0.2s',
                    }}
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: '22px',
                        height: '22px',
                        border: '1px solid var(--border)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 300,
                        transition: 'transform 0.3s, background 0.2s, color 0.2s',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                        background: isOpen ? 'var(--black)' : 'transparent',
                        color: isOpen ? 'var(--linen)' : 'var(--muted)',
                        borderColor: isOpen ? 'var(--black)' : 'var(--border)',
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.75rem 1.75rem',
                        fontSize: '0.62rem',
                        fontWeight: 300,
                        letterSpacing: '0.04em',
                        lineHeight: 1.9,
                        color: 'var(--muted)',
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

      </div>
    </section>
  )
}
