import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/projets', label: 'Projets' },
  { to: '/services', label: 'Services' },
  { to: '/methode', label: 'Méthode' },
  { to: '/a-propos', label: 'À propos' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef<HTMLElement>(null)

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
      <Link className="brand" to="/" aria-label="Accueil — Ryad Saka">
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
        {open ? 'Fermer' : 'Menu'}
      </button>

      <nav
        id="main-nav"
        ref={navRef}
        className={open ? 'open' : ''}
        aria-label="Navigation principale"
      >
        {links.map((l) => (
          <NavLink key={l.to} to={l.to}>
            {l.label}
          </NavLink>
        ))}
        <NavLink className="nav-contact" to="/contact">
          Parler du projet
        </NavLink>
      </nav>
    </header>
  )
}
