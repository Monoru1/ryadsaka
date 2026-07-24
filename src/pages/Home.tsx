import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Window } from '../components/ui/Window'
import { getProject, Project } from '../data/projects'
import { getProblems } from '../data/problems'
import { getServiceContent } from '../data/services'
import { getSiteContent } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'

export function Home() {
  const { locale, href, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)

  usePageMeta({
    title: isEnglish
      ? 'Ryad Saka — Bespoke websites for places, brands and independent businesses'
      : 'Ryad Saka — Sites sur mesure pour hôtels, restaurants, marques et indépendants',
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
        <p className="eyebrow">{isEnglish ? 'What comes next is yours' : 'La suite vous appartient'}</p>
        <h2>
          {isEnglish
            ? 'Your business does not need another website. It needs the right one.'
            : 'Votre activité n’a pas besoin d’un site de plus. Elle a besoin du bon.'}
        </h2>
        <p>
          {isEnglish
            ? 'If your work deserves to be understood more clearly, desired more strongly or easier to contact, let us begin with what is getting in the way today.'
            : 'Si votre travail mérite d’être mieux compris, mieux désiré ou plus simple à contacter, commençons par regarder ce qui bloque aujourd’hui.'}
        </p>
        <Link className="button light" to={href('/contact')}>
          {isEnglish ? 'Describe what I need' : 'Décrire mon besoin'}
        </Link>
      </section>
    </Layout>
  )
}

/* ------------------------------------------------------------------ */

function Hero() {
  const { locale, href, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)
  const heroScreens = [
    {
      src: '/projects/saint-jules/desktop.webp',
      alt: isEnglish
        ? 'Maison Saint-Jules private hotel website, designed and developed by Ryad Saka'
        : 'Site de l’hôtel particulier Maison Saint-Jules, conçu et développé par Ryad Saka',
      ref: 'SAINT-JULES',
    },
    {
      src: '/projects/heritage/mobile.webp',
      alt: isEnglish
        ? 'Mobile version of the Héritage restaurant website'
        : 'Version mobile du site du restaurant Héritage',
      ref: 'HÉRITAGE · MOBILE',
    },
    {
      src: '/projects/zion/desktop.webp',
      alt: isEnglish ? 'Website for the ZION streetwear brand' : 'Site de la marque streetwear ZION',
      ref: 'ZION',
    },
  ]

  return (
    <section className="hero">
      <p className="eyebrow">
        {site.role} · {site.location}
      </p>
      <h1>
        {isEnglish ? 'Serious work, poorly presented, ' : 'Un travail sérieux, mal montré, '}
        <em>{isEnglish ? 'remains invisible.' : 'reste invisible.'}</em>
      </h1>
      <div className="hero-bottom">
        <div className="hero-pitch">
          <p>
            {isEnglish
              ? 'I design and develop websites from beginning to end — positioning, visual direction, code and launch. You speak to one person, and that person does the work.'
              : 'Je conçois et développe des sites de bout en bout — le positionnement, le dessin, le code, la mise en ligne. Vous parlez à une seule personne, et cette personne fait le travail.'}
          </p>
          <div className="hero-actions">
            <Link className="button fill" to={href('/contact')}>
              {isEnglish ? 'Discuss my project' : 'Parler de mon projet'}
            </Link>
            <Link className="text-link" to={href('/projets')}>
              {isEnglish ? 'See the work' : 'Voir les projets'}
            </Link>
          </div>
          <p className="hero-proof-line">
            {isEnglish
              ? 'Six live projects. Every page shown here can be opened and inspected.'
              : 'Six projets en ligne. Chaque page montrée ici peut être ouverte et vérifiée.'}
          </p>
        </div>

        <div
          className="hero-proof"
          aria-label={isEnglish ? 'Previews of completed projects' : 'Aperçus de projets réalisés'}
        >
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
  const { href, isEnglish } = useLanguage()

  return (
    <div className="folio-links">
      <Link className="text-link" to={href(`/projets/${project.slug}`)}>
        {isEnglish ? 'Read the case study' : 'Lire l’étude de cas'}
      </Link>
      {project.url && (
        <a className="text-link quiet" href={project.url} target="_blank" rel="noreferrer">
          {isEnglish ? `Open ${project.title}` : `Ouvrir ${project.title}`}
        </a>
      )}
    </div>
  )
}

function Folio() {
  const { locale, href, isEnglish } = useLanguage()
  const sj = getProject('saint-jules', locale)
  const vortex = getProject('vortex', locale)
  const heritage = getProject('heritage', locale)
  const pyjamas = getProject('pyjamas', locale)
  const emma = getProject('emma', locale)
  const zion = getProject('zion', locale)
  if (!sj || !vortex || !heritage || !pyjamas || !emma || !zion) return null

  return (
    <section aria-label={isEnglish ? 'Selected projects' : 'Projets sélectionnés'}>
      <div className="folio-head section-head">
        <p className="eyebrow">{isEnglish ? 'Six projects, six climates' : 'Six projets, six climats'}</p>
        <h2>
          {isEnglish
            ? 'A hotel is not presented like a museum. A restaurant does not speak like a brand.'
            : 'Un hôtel ne se montre pas comme un musée. Un restaurant ne parle pas comme une marque.'}
        </h2>
        <p className="section-note">
          {isEnglish
            ? 'Each project below sets its own climate, and every page shown is the real one currently online.'
            : 'Chaque projet ci-dessous impose son propre climat — et chaque page présentée est la vraie, telle qu’elle est en ligne aujourd’hui.'}
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
                  alt={
                    isEnglish
                      ? 'Maison Saint-Jules homepage showing the private hotel at dusk'
                      : 'Page d’accueil de Maison Saint-Jules : la façade de l’hôtel particulier à la tombée du jour'
                  }
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span className="plate-ref">
                  {isEnglish ? 'Room 01 · arrival' : 'Pièce 01 · l’arrivée'}
                </span>
                <span className="plate-note">
                  {isEnglish ? 'the place first, the explanation second' : 'le lieu d’abord, le discours ensuite'}
                </span>
              </figcaption>
            </figure>
            <figure className="plate plate-mobile">
              <div className="plate-frame">
                <img
                  src="/projects/saint-jules/mobile.webp"
                  alt={isEnglish ? 'Mobile version of Maison Saint-Jules' : 'Version mobile de Maison Saint-Jules'}
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
            alt={
              isEnglish
                ? 'Complete Vortex collections page showing the museum’s four rooms'
                : 'Page collections complète du site Vortex : les quatre salles du musée'
            }
            tag={isEnglish ? 'Collections page — scroll' : 'Page collections — faites défiler'}
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
            alt={
              isEnglish
                ? 'Complete Héritage restaurant homepage from header to footer'
                : 'Page d’accueil complète du restaurant Héritage, du haut jusqu’au pied de page'
            }
            tag={isEnglish ? 'Complete homepage — scroll' : 'Accueil complet — faites défiler'}
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
            alt={isEnglish ? 'Complete La Maison des Pyjamas homepage' : 'Page d’accueil complète de La Maison des Pyjamas'}
            tag={isEnglish ? 'Shop window — scroll' : 'La vitrine — faites défiler'}
          />
          <Window
            src="/projects/pyjamas/full-catalogue.webp"
            alt={isEnglish ? 'Complete La Maison des Pyjamas catalogue page' : 'Page catalogue complète de La Maison des Pyjamas'}
            tag={isEnglish ? 'Catalogue — scroll' : 'Le catalogue — faites défiler'}
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
                alt={
                  isEnglish
                    ? 'emma.illustre portfolio homepage with the words “un trait sincère”'
                    : 'Page d’accueil du portfolio emma.illustre : « un trait sincère »'
                }
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              <span className="plate-ref">{isEnglish ? 'Print 01' : 'Tirage 01'}</span>
              <span className="plate-note">
                {isEnglish ? 'the interface steps back behind the line' : 'l’interface s’efface derrière le trait'}
              </span>
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
            alt={isEnglish ? 'Complete ZION manifesto page in gold on black' : 'Page manifeste complète du site ZION, or sur noir'}
            tag={isEnglish ? 'Manifesto — scroll' : 'Le manifeste — faites défiler'}
          />
        </div>
      </article>

      <div className="folio-foot">
        <Link className="text-link" to={href('/projets')}>
          {isEnglish ? 'Explore all six projects' : 'Voir les six projets en détail'}
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function Recognition() {
  const { locale, isEnglish } = useLanguage()
  const problems = getProblems(locale)

  return (
    <section className="recognition">
      <div className="recognition-intro">
        <p className="eyebrow">{isEnglish ? 'This may sound familiar' : 'Vous vous reconnaîtrez peut-être'}</p>
        <h2>
          {isEnglish
            ? 'A good project rarely begins with “I need a website”.'
            : 'Un bon projet commence rarement par « il me faut un site ».'}
        </h2>
        <p className="lead">
          {isEnglish
            ? 'Six situations I actually encounter. If one sounds like yours, let us discuss the business before pages or technology.'
            : 'Six situations que je rencontre vraiment. Si l’une vous ressemble, parlons de votre activité avant de parler de pages ou de technologie.'}
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
  const { locale, href, isEnglish } = useLanguage()
  const { tiers } = getServiceContent(locale)

  return (
    <section className="services-summary">
      <div className="section-head">
        <p className="eyebrow">{isEnglish ? 'Three ways to work together' : 'Trois façons de travailler ensemble'}</p>
        <h2>
          {isEnglish
            ? 'Clear formats and a written scope before work begins.'
            : 'Des formats clairs, un périmètre écrit avant de commencer.'}
        </h2>
      </div>
      <div className="tiers-row">
        {tiers.map((t) => (
          <article key={t.id}>
            <h3>{t.name}</h3>
            <p className="tier-price">{t.price}</p>
            <p>{t.promise}</p>
            <Link className="text-link" to={href('/services')}>
              {isEnglish ? 'See the details' : 'Voir le détail'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function Diagnostic() {
  const { href, isEnglish } = useLanguage()

  return (
    <section className="diagnostic">
      <div>
        <p className="eyebrow">{isEnglish ? 'Still unsure? Begin here.' : 'Vous hésitez encore ? Commencez ici.'}</p>
        <h2>
          {isEnglish
            ? 'Show me your business — or your current website.'
            : 'Montrez-moi votre activité — ou votre site actuel.'}
        </h2>
        <p className="lead">
          {isEnglish
            ? 'Send a link to your website, Instagram or even a photograph of your menu. I will reply with an honest first reading and a few useful questions. A short conversation, not an automated report, with no commitment.'
            : 'Envoyez un lien : votre site, votre Instagram, votre carte en photo. Je réponds avec une première lecture honnête et quelques questions utiles. Une conversation courte, pas un rapport automatique — et aucun engagement.'}
        </p>
      </div>
      <Link className="button fill" to={href('/contact?entree=diagnostic')}>
        {isEnglish ? 'Send me a link' : 'Envoyer un lien à regarder'}
      </Link>
    </section>
  )
}

function Reassurance() {
  const { locale, isEnglish } = useLanguage()
  const { proofPoints } = getSiteContent(locale)

  return (
    <section className="reassurance">
      <div className="section-head">
        <p className="eyebrow">{isEnglish ? 'What you can count on' : 'Ce sur quoi vous pouvez compter'}</p>
        <h2>
          {isEnglish
            ? 'Verifiable facts, not decorative promises.'
            : 'Des faits vérifiables, pas des promesses décoratives.'}
        </h2>
      </div>
      <ul className="facts">
        {proofPoints.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  )
}
