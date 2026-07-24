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

  const main = projects.filter((p) => p.screens.length > 0)
  const experiments = projects.filter((p) => p.screens.length === 0)

  return (
    <Layout>
      <section className="page-intro">
        <p className="eyebrow">Sélection 2026 — tous les sites sont en ligne</p>
        <h1>Un site ne devrait jamais avoir l’air d’avoir été fait pour quelqu’un d’autre.</h1>
        <p className="lead">
          Un hôtel particulier, un musée automobile, un restaurant gastronomique, une boutique,
          un portfolio d’artiste, une marque streetwear : mêmes mains, six mondes. Ouvrez-les —
          la différence se voit mieux qu’elle ne s’explique.
        </p>
      </section>

      <section className="all-projects">
        {main.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            variant={i === 0 ? 'featured' : 'standard'}
            showMobile={i % 3 === 2}
            eager={i === 0}
          />
        ))}
      </section>

      {experiments.length > 0 && (
        <section className="experiments" data-reveal>
          <div className="section-head">
            <p className="eyebrow">Expérimentations</p>
            <h2>Ce qui ne se vend pas mais dit quelque chose.</h2>
          </div>
          <div className="project-grid compact-grid">
            {experiments.map((p) => (
              <ProjectCard key={p.slug} project={p} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}
