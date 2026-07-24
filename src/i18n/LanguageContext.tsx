import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'

export type Locale = 'fr' | 'en'

type LanguageContextValue = {
  locale: Locale
  isEnglish: boolean
  href: (path: string) => string
  alternateHref: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function addEnglishPrefix(path: string) {
  if (path === '/') return '/en'
  return `/en${path.startsWith('/') ? path : `/${path}`}`
}

function removeEnglishPrefix(path: string) {
  if (path === '/en') return '/'
  return path.startsWith('/en/') ? path.slice(3) || '/' : path
}

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      isEnglish: locale === 'en',
      href: (path) => (locale === 'en' ? addEnglishPrefix(path) : removeEnglishPrefix(path)),
      alternateHref: (path) =>
        locale === 'en' ? removeEnglishPrefix(path) : addEnglishPrefix(path),
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}
