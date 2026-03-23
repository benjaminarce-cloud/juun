'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Fallback: mark all visible on load in case observer fails (iOS Safari)
    const markVisible = (el: Element) => el.classList.add('visible')
    const seen = new WeakSet<Element>()

    const observer =
      typeof window !== 'undefined' && 'IntersectionObserver' in window
        ? new IntersectionObserver(
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
        : null

    const observeReveal = (el: Element) => {
      if (seen.has(el)) return
      seen.add(el)
      if (!observer) {
        markVisible(el)
        return
      }
      observer.observe(el)
    }

    const scanRevealNodes = (root: ParentNode) => {
      root.querySelectorAll('.reveal').forEach(observeReveal)
    }

    scanRevealNodes(document)

    const domObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.matches('.reveal')) observeReveal(node)
          scanRevealNodes(node)
        })
      })
    })
    domObserver.observe(document.body, { childList: true, subtree: true })

    // Safety fallback for iOS Safari — reveal all after 1.5s if still hidden
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(markVisible)
    }, 1500)

    return () => {
      observer?.disconnect()
      domObserver.disconnect()
      clearTimeout(fallback)
    }
  }, [pathname])

  return null
}
