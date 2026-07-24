import { Link } from 'react-router-dom'
import { Project } from '../../data/projects'
import { useLanguage } from '../../i18n/LanguageContext'

type Variant = 'featured' | 'standard' | 'compact'

type ProjectCardProps = {
  project: Project
  variant?: Variant
  /** Affiche la capture mobile plutôt que desktop, pour alterner les formats. */
  showMobile?: boolean
  eager?: boolean
}

export function ProjectCard({
  project,
  variant = 'standard',
  showMobile = false,
  eager = false,
}: ProjectCardProps) {
  const { href, isEnglish } = useLanguage()
  const desktop = project.screens.find((s) => s.kind === 'desktop')
  const mobile = project.screens.find((s) => s.kind === 'mobile')
  const cover = showMobile && mobile ? mobile : (desktop ?? mobile)

  return (
    <article className={`project-card ${variant} tone-${project.tone}`}>
      {cover ? (
        <Link
          to={href(`/projets/${project.slug}`)}
          className="project-card-visual"
          aria-label={
            isEnglish
              ? `Read the ${project.title} case study`
              : `Voir l’étude de cas : ${project.title}`
          }
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className={cover.kind === 'mobile' ? 'is-mobile-cover' : undefined}
            loading={eager ? 'eager' : 'lazy'}
            decoding={eager ? 'sync' : 'async'}
          />
        </Link>
      ) : (
        <Link
          to={href(`/projets/${project.slug}`)}
          className="project-card-visual is-typographic"
        >
          <span>{project.sector}</span>
          <b>{project.title}</b>
        </Link>
      )}

      <div className="project-card-copy">
        <p className="project-card-meta">
          {project.nature} · {project.sector}
        </p>
        <h3>
          <Link to={href(`/projets/${project.slug}`)}>{project.title}</Link>
        </h3>
        {variant !== 'compact' && <p className="project-card-summary">{project.summary}</p>}
        <div className="project-card-actions">
          <Link className="text-link" to={href(`/projets/${project.slug}`)}>
            {isEnglish ? 'Read the case study' : 'Voir l’étude de cas'}
          </Link>
          {project.url && (
            <a className="text-link quiet" href={project.url} target="_blank" rel="noreferrer">
              {isEnglish ? 'Open the website' : 'Ouvrir le site'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
