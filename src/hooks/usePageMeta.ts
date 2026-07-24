import { useEffect } from 'react'
import { site } from '../data/site'

type PageMeta = {
  title: string
  description: string
  /** Chemin absolu depuis la racine, ex. `/projets/vortex`. */
  path: string
  /** Image de partage, chemin depuis la racine. Par défaut : l'image OG du site. */
  image?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

export function usePageMeta({ title, description, path, image }: PageMeta) {
  useEffect(() => {
    const url = `${site.url}${path}`
    const img = `${site.url}${image ?? site.ogImage}`

    document.title = title
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:locale', 'fr_FR')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
  }, [title, description, path, image])
}
