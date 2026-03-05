'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    // Fallback: mark all visible on load in case observer fails (iOS Safari)
    const markVisible = (el: Element) => el.classList.add('visible')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // Safety fallback for iOS Safari — reveal all after 1.5s if still hidden
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(markVisible)
    }, 1500)

    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [])

  return null
}
