import { Layout } from '../components/layout/Layout'
import { ProjectCard } from '../components/projects/ProjectCard'
import { getProjects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'

export function Projects() {
  const { locale, isEnglish } = useLanguage()
  const projects = getProjects(locale)

  usePageMeta({
    title: isEnglish ? 'Selected work — Ryad Saka' : 'Projets — Ryad Saka',
    description: isEnglish
      ? 'Private hotel, automotive museum, fine-dining restaurant, shop, artist portfolio and streetwear brand: six live websites with distinct identities.'
      : 'Hôtel particulier, musée automobile, restaurant gastronomique, boutique, portfolio d’artiste, marque streetwear : des sites réels, en ligne, chacun avec son propre univers.',
    path: '/projets',
  })

  return (
    <Layout>
      <section className="page-intro">
        <p className="eyebrow">
          {isEnglish ? '2026 selection — every website is live' : 'Sélection 2026 — tous les sites sont en ligne'}
        </p>
        <h1>
          {isEnglish
            ? 'Six projects. Six uses. Six different reasons to stay.'
            : 'Six projets. Six usages. Six façons différentes de faire rester quelqu’un.'}
        </h1>
        <p className="lead">
          {isEnglish
            ? 'No interchangeable prototypes: every case study shows the homepage, interior pages and the project’s mobile version.'
            : 'Ici, pas de prototypes interchangeables : chaque étude de cas montre la page d’accueil, des pages intérieures et la version mobile du projet concerné.'}
        </p>
      </section>

      <section className="all-projects">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            variant={i === 0 ? 'featured' : 'standard'}
            showMobile={i % 3 === 2}
            eager={i === 0}
          />
        ))}
      </section>

    </Layout>
  )
}
