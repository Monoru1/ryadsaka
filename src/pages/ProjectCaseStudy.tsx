import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Plate } from '../components/ui/Plate'
import { Arrow } from '../components/ui/Arrow'
import { Project, Tone, projects } from '../data/projects'
import { tiers } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

/**
 * Chaque univers projet a son vocabulaire de planches et son mode
 * d'accrochage. C'est ce qui empêche les études de cas de se ressembler :
 * la structure narrative reste lisible, mais la mise en scène change.
 */
const toneConfig: Record<
  Tone,
  { refWord: string; gallery: 'traversee' | 'galerie' | 'service' | 'boutique' | 'atelier' | 'affiche' }
> = {
  hotel: { refWord: 'PIÈCE', gallery: 'traversee' },
  museum: { refWord: 'SALLE', gallery: 'galerie' },
  restaurant: { refWord: 'SERVICE', gallery: 'service' },
  shop: { refWord: 'RAYON', gallery: 'boutique' },
  artist: { refWord: 'PLANCHE', gallery: 'atelier' },
  street: { refWord: 'ARCHIVE', gallery: 'affiche' },
  story: { refWord: 'CHAPITRE', gallery: 'atelier' },
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ProjectCaseStudy({ project }: { project: Project }) {
  usePageMeta({
    title: `${project.title} — étude de cas · Ryad Saka`,
    description: project.summary,
    path: `/projets/${project.slug}`,
    image: project.screens[0]?.src,
  })

  const config = toneConfig[project.tone]
  const [cover, ...rest] = project.screens
  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const relatedTier = tiers.find((t) => t.exampleSlugs.includes(project.slug))

  return (
    <Layout>
      <article className={`case tone-${project.tone}`}>
        <Link className="back" to="/projets">
          ← Retour aux projets
        </Link>

        <header className="case-header">
          <p className="eyebrow">
            {project.nature} · {project.sector} · {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="case-intro">{project.summary}</p>
          <div className="case-actions">
            {project.url && (
              <a className="button outline" href={project.url} target="_blank" rel="noreferrer">
                Ouvrir le site <Arrow />
              </a>
            )}
            {project.screens.some((s) => s.kind === 'mobile') && (
              <a className="text-link" href="#version-mobile">
                Voir la version mobile
              </a>
            )}
          </div>
        </header>

        {cover && (
          <div className="case-cover" data-reveal>
            <Plate screen={cover} reference={`${config.refWord} 01`} eager />
          </div>
        )}

        <section className="case-story">
          <div data-reveal>
            <p className="plate-ref">Le contexte</p>
            <p className="case-text">{project.context}</p>
          </div>
          <div data-reveal>
            <p className="plate-ref">Le défi</p>
            <h2>{project.challenge}</h2>
          </div>
        </section>

        <section className="case-decisions">
          <p className="eyebrow" data-reveal>
            Les décisions qui comptent
          </p>
          <div className="decisions-list">
            {project.decisions.map((d) => (
              <div className="decision" key={d.title} data-reveal>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </section>

        {rest.length > 0 && (
          <section className={`case-gallery gallery-${config.gallery}`}>
            {rest.map((screen, i) => (
              <div
                key={screen.src}
                data-reveal
                id={screen.kind === 'mobile' ? 'version-mobile' : undefined}
              >
                <Plate screen={screen} reference={`${config.refWord} ${pad(i + 2)}`} />
              </div>
            ))}
          </section>
        )}

        <section className="case-facts" data-reveal>
          <div>
            <p className="plate-ref">Ce qui est en ligne et vérifiable</p>
            <ul>
              {project.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {project.status && <p className="case-status">{project.status}</p>}
          </div>
          <div className="case-side">
            <p className="plate-ref">Construit avec</p>
            <p className="case-stack">{project.stack.join(' · ')}</p>
            {relatedTier && (
              <>
                <p className="plate-ref">Format le plus proche</p>
                <Link className="text-link" to="/services">
                  {relatedTier.name} — {relatedTier.price} <Arrow />
                </Link>
              </>
            )}
            {project.url && (
              <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                Ouvrir {project.title} <Arrow />
              </a>
            )}
          </div>
        </section>

        <section className="case-next" data-reveal>
          <div>
            <p>Votre projet n’a pas à ressembler à celui-ci — c’est le principe.</p>
            <Link className="button fill" to="/contact">
              Imaginer le vôtre <Arrow />
            </Link>
          </div>
          <Link className="case-next-project" to={`/projets/${next.slug}`}>
            <span className="plate-ref">Projet suivant</span>
            <b>{next.title}</b>
            <Arrow />
          </Link>
        </section>
      </article>
    </Layout>
  )
}
