'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import ValueProps from '@/components/sections/ValueProps'
import PurchaseModule from '@/components/sections/PurchaseModule'
import Formula from '@/components/sections/Formula'
import SocialProof from '@/components/sections/SocialProof'
import FinalCTA from '@/components/sections/FinalCTA'

type TabKey = 'comprar' | 'formula' | 'voces'

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabKey>('comprar')

  return (
    <>
      <Header onSelectTab={setActiveTab} />
      <main>
        <Hero />
        <div className="tab-switcher-wrap">
          <div className="tab-switcher">
            <button className={'tab-switcher-btn' + (activeTab === 'comprar' ? ' active' : '')} onClick={() => setActiveTab('comprar')}>COMPRAR</button>
            <button className={'tab-switcher-btn' + (activeTab === 'formula' ? ' active' : '')} onClick={() => setActiveTab('formula')}>FÓRMULA</button>
            <button className={'tab-switcher-btn' + (activeTab === 'voces' ? ' active' : '')} onClick={() => setActiveTab('voces')}>HABLAN</button>
          </div>
        </div>

        {activeTab === 'comprar' && (
          <>
            <ValueProps />
            <section className="tab-photo-break reveal">
              <img
                src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879321/1A7A1920_w4e5fq.jpg"
                alt="JUUN energía diaria"
                loading="eager"
                style={{ objectPosition: 'var(--photo-desktop-pos)', ['--photo-desktop-pos' as string]: 'center 65%', ['--photo-mobile-pos' as string]: 'center 60%' } as CSSProperties}
              />
            </section>
            <PurchaseModule />
            <FinalCTA />
          </>
        )}

        {activeTab === 'formula' && (
          <>
            <Formula />
            <FinalCTA />
          </>
        )}

        {activeTab === 'voces' && (
          <>
            <SocialProof />
            <section className="tab-photo-break reveal">
              <img
                src="https://res.cloudinary.com/dzjcndphq/image/upload/f_auto,q_auto,w_1400/v1771879163/1A7A1317_mvd47a.jpg"
                alt="JUUN comunidad"
                loading="eager"
                style={{ objectPosition: 'var(--photo-desktop-pos)', ['--photo-desktop-pos' as string]: 'center 30%', ['--photo-mobile-pos' as string]: 'center 25%' } as CSSProperties}
              />
            </section>
            <FinalCTA />
          </>
        )}
      </main>
    </>
  )
}
