import { ReactNode, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { useLanguage } from '../../i18n/LanguageContext'

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const { isEnglish } = useLanguage()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#contenu">
        {isEnglish ? 'Skip to content' : 'Aller au contenu'}
      </a>
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
    </>
  )
}
