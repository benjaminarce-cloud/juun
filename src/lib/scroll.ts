'use client'

// Client-side scroll helper
// Import this in client components to avoid passing handlers through server→client boundary

export function scrollToId(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
