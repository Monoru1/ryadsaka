import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Window } from '../components/ui/Window'
import { getProject, Project } from '../data/projects'
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

  return (
    <Layout>
      <Hero />
      <Folio />
      <Recognition />
      <ServicesSummary />
      <Diagnostic />
      <Reassurance />

      <section className="closing">
        <p className="eyebrow">La suite vous appartient</p>
        <h2>Votre activité n’a pas besoin d’un site de plus. Elle a besoin du bon.</h2>
        <p>
          Si votre travail mérite d’être mieux compris, mieux désiré ou plus simple à contacter,
          commençons par regarder ce qui bloque aujourd’hui.
        </p>
        <Link className="button light" to="/contact">
          Décrire mon besoin
        </Link>
      </section>
    </Layout>
  )
}

/* ------------------------------------------------------------------ */

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
      <p className="eyebrow">
        {site.role} · {site.location}
      </p>
      <h1>
        Un travail sérieux, mal montré, <em>reste invisible.</em>
      </h1>
      <div className="hero-bottom">
        <div className="hero-pitch">
          <p>
            Je conçois et développe des sites de bout en bout — le positionnement, le dessin, le
            code, la mise en ligne. Vous parlez à une seule personne, et cette personne fait le
            travail.
          </p>
          <div className="hero-actions">
            <Link className="button fill" to="/contact">
              Parler de mon projet
            </Link>
            <Link className="text-link" to="/projets">
              Voir les projets
            </Link>
          </div>
          <p className="hero-proof-line">
            Six projets en ligne. Chaque page montrée ici peut être ouverte et vérifiée.
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

/* ------------------------------------------------------------------ */

function FolioMeta({ index, project }: { index: string; project: Project }) {
  return (
    <p className="folio-meta">
      <b>{index}</b>
      <span>{project.nature}</span>
      <span>{project.sector}</span>
    </p>
  )
}

function FolioLinks({ project }: { project: Project }) {
  return (
    <div className="folio-links">
      <Link className="text-link" to={`/projets/${project.slug}`}>
        Lire l’étude de cas
      </Link>
      {project.url && (
        <a className="text-link quiet" href={project.url} target="_blank" rel="noreferrer">
          Ouvrir {project.title}
        </a>
      )}
    </div>
  )
}

function Folio() {
  const sj = getProject('saint-jules')
  const vortex = getProject('vortex')
  const heritage = getProject('heritage')
  const pyjamas = getProject('pyjamas')
  const emma = getProject('emma')
  const zion = getProject('zion')
  if (!sj || !vortex || !heritage || !pyjamas || !emma || !zion) return null

  return (
    <section aria-label="Projets sélectionnés">
      <div className="folio-head section-head">
        <p className="eyebrow">Six projets, six climats</p>
        <h2>
          Un hôtel ne se montre pas comme un musée. Un restaurant ne parle pas comme une marque.
        </h2>
        <p className="section-note">
          Chaque projet ci-dessous impose son propre climat — et chaque page présentée est la
          vraie, telle qu’elle est en ligne aujourd’hui.
        </p>
      </div>

      {/* 01 — Saint-Jules */}
      <article className="folio-entry f-hotel">
        <FolioMeta index="01" project={sj} />
        <div className="folio-body">
          <div className="duo">
            <figure className="plate">
              <div className="plate-frame">
                <img
                  src="/projects/saint-jules/desktop.webp"
                  alt="Page d’accueil de Maison Saint-Jules : la façade de l’hôtel particulier à la tombée du jour"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span className="plate-ref">Pièce 01 · l’arrivée</span>
                <span className="plate-note">le lieu d’abord, le discours ensuite</span>
              </figcaption>
            </figure>
            <figure className="plate plate-mobile">
              <div className="plate-frame">
                <img
                  src="/projects/saint-jules/mobile.webp"
                  alt="Version mobile de Maison Saint-Jules"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </div>
          <div>
            <h3>{sj.title}</h3>
            <p className="folio-text">{sj.summary}</p>
            <FolioLinks project={sj} />
          </div>
        </div>
      </article>

      {/* 02 — Vortex */}
      <article className="folio-entry f-museum">
        <FolioMeta index="02" project={vortex} />
        <div className="folio-body">
          <div>
            <h3>{vortex.title}</h3>
            <p className="folio-text">{vortex.summary}</p>
            <FolioLinks project={vortex} />
          </div>
          <Window
            src="/projects/vortex/full-collections.webp"
            alt="Page collections complète du site Vortex : les quatre salles du musée"
            tag="Page collections — faites défiler"
          />
        </div>
      </article>

      {/* 03 — Héritage */}
      <article className="folio-entry f-restaurant">
        <FolioMeta index="03" project={heritage} />
        <div className="folio-body">
          <div>
            <h3>{heritage.title}</h3>
            <p className="folio-text">{heritage.summary}</p>
            <FolioLinks project={heritage} />
          </div>
          <Window
            src="/projects/heritage/full-accueil.webp"
            alt="Page d’accueil complète du restaurant Héritage, du haut jusqu’au pied de page"
            tag="Accueil complet — faites défiler"
          />
        </div>
      </article>

      {/* 04 — Pyjamas */}
      <article className="folio-entry f-shop">
        <FolioMeta index="04" project={pyjamas} />
        <div className="folio-body">
          <div className="folio-intro">
            <h3>{pyjamas.title}</h3>
            <p className="folio-text">{pyjamas.summary}</p>
            <FolioLinks project={pyjamas} />
          </div>
          <Window
            src="/projects/pyjamas/full-accueil.webp"
            alt="Page d’accueil complète de La Maison des Pyjamas"
            tag="La vitrine — faites défiler"
          />
          <Window
            src="/projects/pyjamas/full-catalogue.webp"
            alt="Page catalogue complète de La Maison des Pyjamas"
            tag="Le catalogue — faites défiler"
          />
        </div>
      </article>

      {/* 05 — Emma */}
      <article className="folio-entry f-artist">
        <FolioMeta index="05" project={emma} />
        <div className="folio-body">
          <div>
            <h3>{emma.title}</h3>
            <p className="folio-text">{emma.summary}</p>
            <FolioLinks project={emma} />
          </div>
          <figure className="plate">
            <div className="plate-frame">
              <img
                src="/projects/emma/desktop.webp"
                alt="Page d’accueil du portfolio emma.illustre : « un trait sincère »"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <span className="plate-ref">Tirage 01</span>
              <span className="plate-note">l’interface s’efface derrière le trait</span>
            </figcaption>
          </figure>
        </div>
      </article>

      {/* 06 — ZION */}
      <article className="folio-entry f-street">
        <FolioMeta index="06" project={zion} />
        <div className="folio-body">
          <div>
            <h3>{zion.title}</h3>
            <p className="folio-text">{zion.summary}</p>
            <FolioLinks project={zion} />
          </div>
          <Window
            src="/projects/zion/full-accueil.webp"
            alt="Page manifeste complète du site ZION, or sur noir"
            tag="Le manifeste — faites défiler"
          />
        </div>
      </article>

      <div className="folio-foot">
        <Link className="text-link" to="/projets">
          Voir les six projets en détail
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Recognition() {
  return (
    <section className="recognition">
      <div className="recognition-intro">
        <p className="eyebrow">Vous vous reconnaîtrez peut-être</p>
        <h2>Un bon projet commence rarement par « il me faut un site ».</h2>
        <p className="lead">
          Six situations que je rencontre vraiment. Si l’une vous ressemble, parlons de votre
          activité avant de parler de pages ou de technologie.
        </p>
      </div>

      <div className="recognition-notes">
        {problems.map((problem, index) => (
          <article key={problem.id}>
            <p className="plate-ref">
              0{index + 1} · {problem.label}
            </p>
            <p>{problem.situation}</p>
            <p className="recognition-response">{problem.response}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesSummary() {
  return (
    <section className="services-summary">
      <div className="section-head">
        <p className="eyebrow">Trois façons de travailler ensemble</p>
        <h2>Des formats clairs, un périmètre écrit avant de commencer.</h2>
      </div>
      <div className="tiers-row">
        {tiers.map((t) => (
          <article key={t.id}>
            <h3>{t.name}</h3>
            <p className="tier-price">{t.price}</p>
            <p>{t.promise}</p>
            <Link className="text-link" to="/services">
              Voir le détail
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function Diagnostic() {
  return (
    <section className="diagnostic">
      <div>
        <p className="eyebrow">Vous hésitez encore ? Commencez ici.</p>
        <h2>Montrez-moi votre activité — ou votre site actuel.</h2>
        <p className="lead">
          Envoyez un lien : votre site, votre Instagram, votre carte en photo. Je réponds avec
          une première lecture honnête et quelques questions utiles. Une conversation courte,
          pas un rapport automatique — et aucun engagement.
        </p>
      </div>
      <Link className="button fill" to="/contact?entree=diagnostic">
        Envoyer un lien à regarder
      </Link>
    </section>
  )
}

function Reassurance() {
  return (
    <section className="reassurance">
      <div className="section-head">
        <p className="eyebrow">Ce sur quoi vous pouvez compter</p>
        <h2>Des faits vérifiables, pas des promesses décoratives.</h2>
      </div>
      <ul className="facts">
        {proofPoints.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}
