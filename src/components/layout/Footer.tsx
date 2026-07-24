import { Link } from 'react-router-dom'
import { getSiteContent } from '../../data/site'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
  const { locale, href, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)

  return (
    <footer>
      <div className="footer-mark" aria-hidden="true">
        R<span>/</span>S
      </div>
      <div className="footer-copy">
        <p>
          {isEnglish
            ? 'Bespoke websites and tools, designed and developed by the same person you speak to.'
            : 'Sites et outils sur mesure, conçus et développés par une seule personne — celle à qui vous parlez.'}
        </p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <small>{site.location}</small>
      </div>
      <div className="footer-links">
        <Link to={href('/projets')}>{isEnglish ? 'Work' : 'Projets'}</Link>
        <Link to={href('/services')}>Services</Link>
        <Link to={href('/contact')}>
          {isEnglish ? 'Start a conversation' : 'Démarrer une conversation'}
        </Link>
        <small>
          © {new Date().getFullYear()} {site.name}
        </small>
      </div>
    </footer>
  )
}
