'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
  threshold?: number
}

const delayClass: Record<number, string> = {
  0: '',
  1: 'reveal-d1',
  2: 'reveal-d2',
  3: 'reveal-d3',
  4: 'reveal-d4',
}

export default function Reveal({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion at the JS level too
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn('reveal', delayClass[delay], className)}
    >
      {children}
    </div>
  )
}
