import { useEffect } from 'react'

/**
 * Révèle au scroll les éléments portant `data-reveal`.
 * Un seul observer par page ; les préférences de mouvement réduit
 * court-circuitent l'effet (les éléments restent simplement visibles).
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
