import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Plate } from '../components/ui/Plate'
import { Window } from '../components/ui/Window'
import { getProject, getProjects, Project, Tone } from '../data/projects'
import { getServiceContent } from '../data/services'
import { useLanguage } from '../i18n/LanguageContext'
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
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale, href, isEnglish } = useLanguage()
  const localizedProject = getProject(project.slug, locale) ?? project
  const projects = getProjects(locale)
  const { tiers } = getServiceContent(locale)

  usePageMeta({
    title: `${localizedProject.title} — ${isEnglish ? 'case study' : 'étude de cas'} · Ryad Saka`,
    description: localizedProject.summary,
    path: `/projets/${localizedProject.slug}`,
    image: localizedProject.screens[0]?.src,
  })

  const config = toneConfig[localizedProject.tone]
  const [cover, ...rest] = localizedProject.screens
  const index = projects.findIndex((p) => p.slug === localizedProject.slug)
  const next = projects[(index + 1) % projects.length]
  const relatedTier = tiers.find((t) => t.exampleSlugs.includes(localizedProject.slug))
  const refWord = isEnglish
    ? {
        hotel: 'ROOM',
        museum: 'GALLERY',
        restaurant: 'SERVICE',
        shop: 'AISLE',
        artist: 'PLATE',
        street: 'ARCHIVE',
      }[localizedProject.tone]
    : config.refWord

  return (
    <Layout>
      <article className={`case tone-${localizedProject.tone}`}>
        <Link className="back" to={href('/projets')}>
          {isEnglish ? 'Back to selected work' : 'Retour aux projets'}
        </Link>

        <header className="case-header">
          <p className="eyebrow">
            {localizedProject.nature} · {localizedProject.sector} · {localizedProject.year}
          </p>
          <h1>{localizedProject.title}</h1>
          <p className="case-intro">{localizedProject.summary}</p>
          <div className="case-actions">
            {localizedProject.url && (
              <a className="button outline" href={localizedProject.url} target="_blank" rel="noreferrer">
                {isEnglish ? 'Open the website' : 'Ouvrir le site'}
              </a>
            )}
            {localizedProject.screens.some((s) => s.kind === 'mobile') && (
              <a className="text-link" href="#version-mobile">
                {isEnglish ? 'See the mobile version' : 'Voir la version mobile'}
              </a>
            )}
          </div>
        </header>

        {cover && (
          <div className="case-cover">
            <Plate screen={cover} reference={`${refWord} 01`} eager />
          </div>
        )}

        <section className="case-story">
          <div>
            <p className="plate-ref">{isEnglish ? 'Context' : 'Le contexte'}</p>
            <p className="case-text">{localizedProject.context}</p>
          </div>
          <div>
            <p className="plate-ref">{isEnglish ? 'Challenge' : 'Le défi'}</p>
            <h2>{localizedProject.challenge}</h2>
          </div>
        </section>

        <section className="case-decisions">
          <p className="eyebrow">{isEnglish ? 'Decisions that matter' : 'Les décisions qui comptent'}</p>
          <div className="decisions-list">
            {localizedProject.decisions.map((d) => (
              <div className="decision" key={d.title}>
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
                id={screen.kind === 'mobile' ? 'version-mobile' : undefined}
              >
                <Plate screen={screen} reference={`${refWord} ${pad(i + 2)}`} />
              </div>
            ))}
          </section>
        )}

        {localizedProject.pages && localizedProject.pages.length > 0 && (
          <section className="case-pages">
            <div className="section-head">
              <p className="eyebrow">{isEnglish ? 'Complete pages' : 'Les pages, en entier'}</p>
              <h2>
                {isEnglish
                  ? 'Nothing is cropped here: scroll these pages as you would on the live website.'
                  : 'Rien n’est recadré ici : ces pages se font défiler comme sur le site.'}
              </h2>
            </div>
            <div className="case-pages-grid">
              {localizedProject.pages.map((page) => (
                <figure className="plate" key={page.src}>
                  <Window src={page.src} alt={page.alt} />
                  <figcaption>
                    <span className="plate-ref">{page.label}</span>
                    {page.note && <span className="plate-note">{page.note}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="case-facts">
          <div>
            <p className="plate-ref">
              {isEnglish ? 'What is live and verifiable' : 'Ce qui est en ligne et vérifiable'}
            </p>
            <ul>
              {localizedProject.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {localizedProject.status && <p className="case-status">{localizedProject.status}</p>}
          </div>
          <div className="case-side">
            <p className="plate-ref">{isEnglish ? 'Built with' : 'Construit avec'}</p>
            <p className="case-stack">{localizedProject.stack.join(' · ')}</p>
            {relatedTier && (
              <>
                <p className="plate-ref">{isEnglish ? 'Closest service' : 'Format le plus proche'}</p>
                <Link className="text-link" to={href('/services')}>
                  {relatedTier.name} — {relatedTier.price}
                </Link>
              </>
            )}
            {localizedProject.url && (
              <a className="text-link" href={localizedProject.url} target="_blank" rel="noreferrer">
                {isEnglish ? `Open ${localizedProject.title}` : `Ouvrir ${localizedProject.title}`}
              </a>
            )}
          </div>
        </section>

        <section className="case-next">
          <div>
            <p>
              {isEnglish
                ? 'Your project should not look like this one — that is the point.'
                : 'Votre projet n’a pas à ressembler à celui-ci — c’est le principe.'}
            </p>
            <Link className="button fill" to={href('/contact')}>
              {isEnglish ? 'Imagine yours' : 'Imaginer le vôtre'}
            </Link>
          </div>
          <Link className="case-next-project" to={href(`/projets/${next.slug}`)}>
            <span className="plate-ref">{isEnglish ? 'Next project' : 'Projet suivant'}</span>
            <b>{next.title}</b>
           
          </Link>
        </section>
      </article>
    </Layout>
  )
}
