import { Link } from 'react-router-dom'
import { site } from '../../data/site'

export function Footer() {
  return (
    <footer>
      <div className="footer-mark" aria-hidden="true">
        R<span>/</span>S
      </div>
      <div className="footer-copy">
        <p>
          Sites et outils sur mesure, conçus et développés par une seule personne —
          celle à qui vous parlez.
        </p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <small>{site.location}</small>
      </div>
      <div className="footer-links">
        <Link to="/projets">Projets</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Démarrer une conversation</Link>
        <small>
          © {new Date().getFullYear()} {site.name}
        </small>
      </div>
    </footer>
  )
}
