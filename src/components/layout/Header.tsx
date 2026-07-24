import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, search, hash } = useLocation()
  const { href, alternateHref, isEnglish } = useLanguage()
  const navRef = useRef<HTMLElement>(null)
  const links = [
    { to: '/projets', label: isEnglish ? 'Work' : 'Projets' },
    { to: '/services', label: 'Services' },
    { to: '/methode', label: isEnglish ? 'Process' : 'Méthode' },
    { to: '/a-propos', label: isEnglish ? 'About' : 'À propos' },
  ]
  const currentPath = `${pathname}${search}${hash}`
  const otherLanguagePath = alternateHref(currentPath)

  // Fermer le menu à chaque changement de route.
  useEffect(() => setOpen(false), [pathname])

  // Bloquer le scroll arrière quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  // Échap ferme le menu ; le focus reste gérable au clavier.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    navRef.current?.querySelector<HTMLElement>('a')?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <Link className="brand" to={href('/')} aria-label={isEnglish ? 'Home — Ryad Saka' : 'Accueil — Ryad Saka'}>
        <i aria-hidden="true">R</i>
        <span>
          RYAD
          <br />
          SAKA
        </span>
      </Link>

      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (isEnglish ? 'Close' : 'Fermer') : 'Menu'}
      </button>

      <nav
        id="main-nav"
        ref={navRef}
        className={open ? 'open' : ''}
        aria-label={isEnglish ? 'Main navigation' : 'Navigation principale'}
      >
        {links.map((l) => (
          <NavLink key={l.to} to={href(l.to)}>
            {l.label}
          </NavLink>
        ))}
        <div className="language-switch" aria-label={isEnglish ? 'Language' : 'Langue'}>
          {isEnglish ? (
            <>
              <Link to={otherLanguagePath} lang="fr" hrefLang="fr">
                FR
              </Link>
              <span aria-current="page">EN</span>
            </>
          ) : (
            <>
              <span aria-current="page">FR</span>
              <Link to={otherLanguagePath} lang="en" hrefLang="en">
                EN
              </Link>
            </>
          )}
        </div>
        <NavLink className="nav-contact" to={href('/contact')}>
          {isEnglish ? 'Discuss a project' : 'Parler du projet'}
        </NavLink>
      </nav>
    </header>
  )
}
