import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Arrow } from '../components/ui/Arrow'
import { getProject } from '../data/projects'
import { problems } from '../data/problems'
import { tiers } from '../data/services'
import { proofPoints, site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  usePageMeta({
    title: 'Ryad Saka — Sites sur mesure pour hôtels, restaurants, marques et indépendants',
    description: site.description,
    path: '/',
  })

  const saintJules = getProject('saint-jules')
  const secondary = ['vortex', 'heritage', 'pyjamas']
    .map(getProject)
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const compact = ['emma', 'zion']
    .map(getProject)
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <Layout>
      <Hero />

      <section className="selected">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Projets sélectionnés</p>
          <h2>
            La même exigence.
            <br />
            Jamais le même monde.
          </h2>
          <p className="section-note">
            Chaque site ci-dessous est en ligne. Ouvrez-les, testez-les sur votre téléphone :
            c’est la meilleure façon de juger.
          </p>
        </div>

        {saintJules && <ProjectCard project={saintJules} variant="featured" eager />}

        <div className="project-grid">
          {secondary.map((p, i) => (
            <ProjectCard key={p.slug} project={p} showMobile={i === 1} />
          ))}
        </div>

        <div className="project-grid compact-grid">
          {compact.map((p) => (
            <ProjectCard key={p.slug} project={p} variant="compact" showMobile={p.slug === 'emma'} />
          ))}
        </div>

        <div className="selected-foot" data-reveal>
          <Link className="text-link" to="/projets">
            Tous les projets, y compris les expérimentations <Arrow />
          </Link>
        </div>
      </section>

      <Recognition />
      <ServicesSummary />
      <Diagnostic />
      <Reassurance />

      <section className="closing" data-reveal>
        <p className="eyebrow">La suite vous appartient</p>
        <h2>On peut faire plus qu’un site « propre ».</h2>
        <p>
          Si votre activité mérite d’être mieux comprise, mieux désirée ou plus simple à
          contacter, commençons par regarder ce qui bloque aujourd’hui.
        </p>
        <Link className="button light" to="/contact">
          Décrire mon besoin <Arrow />
        </Link>
      </section>
    </Layout>
  )
}

function Hero() {
  const heroScreens = [
    {
      src: '/projects/saint-jules/desktop.webp',
      alt: 'Site de l’hôtel particulier Maison Saint-Jules, conçu et développé par Ryad Saka',
      ref: 'SAINT-JULES',
    },
    {
      src: '/projects/heritage/mobile.webp',
      alt: 'Version mobile du site du restaurant Héritage',
      ref: 'HÉRITAGE · MOBILE',
    },
    {
      src: '/projects/zion/desktop.webp',
      alt: 'Site de la marque streetwear ZION',
      ref: 'ZION',
    },
  ]

  return (
    <section className="hero">
      <p className="eyebrow">{site.role} · {site.location}</p>
      <h1>
        Je conçois des sites qui donnent envie de vous choisir.
      </h1>
      <div className="hero-bottom">
        <div className="hero-pitch">
          <p>
            Hôtels, restaurants, marques, artistes, indépendants : je prends en charge la
            direction visuelle, le développement et la mise en ligne. Vous parlez à une seule
            personne — celle qui fait le travail.
          </p>
          <div className="hero-actions">
            <Link className="button fill" to="/contact">
              Parler de mon projet <Arrow />
            </Link>
            <Link className="text-link" to="/projets">
              Voir les projets <Arrow />
            </Link>
          </div>
          <p className="hero-proof-line">
            Six projets en ligne, consultables sur desktop et mobile — dont ceux-ci.
          </p>
        </div>

        <div className="hero-proof" aria-label="Aperçus de projets réalisés">
          {heroScreens.map((s, i) => (
            <figure key={s.ref} className={`hero-shot shot-${i + 1}`}>
              <img src={s.src} alt={s.alt} loading="eager" decoding="async" />
              <figcaption className="plate-ref">{s.ref}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Recognition() {
  const [active, setActive] = useState(0)
  const current = problems[active]
  const tier = tiers.find((t) => t.id === current.tierId)

  return (
    <section className="recognition">
      <div className="recognition-intro" data-reveal>
        <p className="eyebrow">Vous vous reconnaîtrez peut-être</p>
        <h2>Les vrais problèmes ne sont jamais « il me faut un site ».</h2>
        <p className="lead">
          Voici les situations que je rencontre le plus souvent. Si l’une d’elles vous ressemble,
          vous savez déjà par où commencer la conversation.
        </p>
      </div>

      <div className="recognition-body" data-reveal>
        <div className="recognition-list" role="tablist" aria-label="Situations fréquentes">
          {problems.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              id={`problem-tab-${p.id}`}
              aria-selected={i === active}
              aria-controls="recognition-panel"
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div
          className="recognition-panel"
          id="recognition-panel"
          role="tabpanel"
          aria-labelledby={`problem-tab-${current.id}`}
        >
          <p className="plate-ref">Situation</p>
          <p className="recognition-situation">{current.situation}</p>
          <p className="plate-ref">Ce qu’on ferait</p>
          <p className="recognition-response">{current.response}</p>
          {tier && (
            <Link className="text-link" to="/services">
              Format probable : {tier.name} — {tier.price} <Arrow />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

function ServicesSummary() {
  return (
    <section className="services-summary">
      <div className="section-head" data-reveal>
        <p className="eyebrow">Trois façons de travailler ensemble</p>
        <h2>Des formats clairs, un périmètre écrit avant de commencer.</h2>
      </div>
      <div className="tiers-row">
        {tiers.map((t) => (
          <article key={t.id} data-reveal>
            <h3>{t.name}</h3>
            <p className="tier-price">{t.price}</p>
            <p>{t.promise}</p>
            <Link className="text-link" to="/services">
              Voir le détail <Arrow />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function Diagnostic() {
  return (
    <section className="diagnostic" data-reveal>
      <div>
        <p className="eyebrow">Vous hésitez encore ? Commencez ici.</p>
        <h2>Montrez-moi votre activité — ou votre site actuel.</h2>
        <p className="lead">
          Envoyez simplement un lien : votre site, votre Instagram, votre carte de visite en
          photo. Je vous réponds avec une première lecture honnête de ce qui pourrait être
          amélioré, et des questions utiles. Une courte discussion, pas un rapport automatique —
          et aucun engagement.
        </p>
      </div>
      <Link className="button fill" to="/contact?entree=diagnostic">
        Envoyer un lien à regarder <Arrow />
      </Link>
    </section>
  )
}

function Reassurance() {
  return (
    <section className="reassurance">
      <div className="section-head" data-reveal>
        <p className="eyebrow">Ce sur quoi vous pouvez compter</p>
        <h2>Des faits vérifiables, pas des promesses décoratives.</h2>
      </div>
      <ul className="facts" data-reveal>
        {proofPoints.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}
