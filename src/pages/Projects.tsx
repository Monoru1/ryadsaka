import { Layout } from '../components/layout/Layout'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

export function Projects() {
  usePageMeta({
    title: 'Projets — Ryad Saka',
    description:
      'Hôtel particulier, musée automobile, restaurant gastronomique, boutique, portfolio d’artiste, marque streetwear : des sites réels, en ligne, chacun avec son propre univers.',
    path: '/projets',
  })

  return (
    <Layout>
      <section className="page-intro">
        <p className="eyebrow">Sélection 2026 — tous les sites sont en ligne</p>
        <h1>Six projets. Six usages. Six façons différentes de faire rester quelqu’un.</h1>
        <p className="lead">
          Ici, pas de prototypes interchangeables : chaque étude de cas montre la page d’accueil,
          des pages intérieures et la version mobile du projet concerné.
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
