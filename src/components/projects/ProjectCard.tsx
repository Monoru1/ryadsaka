import { Link } from 'react-router-dom'
import { Project } from '../../data/projects'
import { Arrow } from '../ui/Arrow'

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
  const desktop = project.screens.find((s) => s.kind === 'desktop')
  const mobile = project.screens.find((s) => s.kind === 'mobile')
  const cover = showMobile && mobile ? mobile : (desktop ?? mobile)

  return (
    <article className={`project-card ${variant} tone-${project.tone}`} data-reveal>
      {cover ? (
        <Link
          to={`/projets/${project.slug}`}
          className="project-card-visual"
          aria-label={`Voir l’étude de cas : ${project.title}`}
        >
          <img
            src={cover.src}
            alt={cover.alt}
            className={cover.kind === 'mobile' ? 'is-mobile-cover' : undefined}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
          {variant === 'featured' && mobile && cover !== mobile && (
            <img
              className="project-card-mobile"
              src={mobile.src}
              alt={mobile.alt}
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
            />
          )}
        </Link>
      ) : (
        <Link to={`/projets/${project.slug}`} className="project-card-visual is-typographic">
          <span>{project.sector}</span>
          <b>{project.title}</b>
        </Link>
      )}

      <div className="project-card-copy">
        <p className="project-card-meta">
          {project.nature} · {project.sector}
        </p>
        <h3>
          <Link to={`/projets/${project.slug}`}>{project.title}</Link>
        </h3>
        {variant !== 'compact' && <p className="project-card-summary">{project.summary}</p>}
        <div className="project-card-actions">
          <Link className="text-link" to={`/projets/${project.slug}`}>
            Voir l’étude de cas <Arrow />
          </Link>
          {project.url && (
            <a className="text-link quiet" href={project.url} target="_blank" rel="noreferrer">
              Ouvrir le site <Arrow />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
