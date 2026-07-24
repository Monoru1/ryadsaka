import { useEffect } from 'react'
import { site } from '../data/site'
import { useLanguage } from '../i18n/LanguageContext'

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
  const { locale, href } = useLanguage()

  useEffect(() => {
    const localizedPath = href(path)
    const url = `${site.url}${localizedPath}`
    const img = `${site.url}${image ?? site.ogImage}`
    const frenchUrl = `${site.url}${path}`
    const englishUrl = `${site.url}${path === '/' ? '/en' : `/en${path}`}`

    document.title = title
    document.documentElement.lang = locale
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:locale', locale === 'en' ? 'en_GB' : 'fr_FR')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)

    setAlternate('fr', frenchUrl)
    setAlternate('en', englishUrl)
    setAlternate('x-default', frenchUrl)
  }, [title, description, path, image, locale, href])
}

function setAlternate(language: string, url: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${language}"]`,
  )
  if (!el) {
    el = document.createElement('link')
    el.rel = 'alternate'
    el.hreflang = language
    document.head.appendChild(el)
  }
  el.href = url
}
