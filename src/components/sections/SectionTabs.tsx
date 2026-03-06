'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { href: '/', label: 'Home / Comprar' },
  { href: '/formula', label: 'La Fórmula' },
  { href: '/voces', label: 'La gente habla' },
]

export default function SectionTabs() {
  const pathname = usePathname()

  return (
    <nav className="section-tabs" aria-label="Navegación principal">
      <div className="section-tabs-inner">
        {TABS.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={'section-tab-link' + (pathname === tab.href ? ' active' : '')}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
