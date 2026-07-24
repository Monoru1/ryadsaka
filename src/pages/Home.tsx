import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { getProject } from '../data/projects'
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
      <Works />
      <ServicesSummary />
      <Diagnostic />

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
              {isEnglish ? 'Discuss my project' : 'Discuter du projet'}
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

const workTones: Record<string, string> = {
  'saint-jules': 'wc-hotel',
  vortex: 'wc-museum',
  heritage: 'wc-restaurant',
  pyjamas: 'wc-shop',
  emma: 'wc-artist',
  zion: 'wc-street',
}

function Works() {
  const { locale, href, isEnglish } = useLanguage()
  const slugs = ['saint-jules', 'vortex', 'heritage', 'pyjamas', 'emma', 'zion']
  const items = slugs
    .map((slug) => getProject(slug, locale))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <section className="works" aria-label={isEnglish ? 'Selected projects' : 'Projets sélectionnés'}>
      <div className="section-head">
        <p className="eyebrow">{isEnglish ? 'Six live projects' : 'Six projets en ligne'}</p>
        <h2>
          {isEnglish
            ? 'Each project has its own world. Open one.'
            : 'Chaque projet a son monde. Ouvrez-en un.'}
        </h2>
        <p className="section-copy">
          {isEnglish
            ? 'You do not need to know which kind of website to request. Begin with the project closest to your situation.'
            : 'Vous n’avez pas besoin de savoir quel type de site demander. Commencez par le projet le plus proche de votre situation.'}
        </p>
      </div>

      <div className="works-grid">
        {items.map((p) => {
          const cover = p.screens.find((s) => s.kind === 'desktop') ?? p.screens[0]
          return (
            <Link
              key={p.slug}
              className={`work-card ${workTones[p.slug] ?? ''}`}
              to={href(`/projets/${p.slug}`)}
              aria-label={
                isEnglish ? `Open the ${p.title} case study` : `Ouvrir l’étude de cas ${p.title}`
              }
            >
              <span className="work-card-visual">
                {cover && <img src={cover.src} alt={cover.alt} loading="eager" decoding="async" />}
              </span>
              <span className="work-card-meta">{p.sector}</span>
              <h3>{p.title}</h3>
            </Link>
          )
        })}
      </div>

      <div className="works-foot">
        <Link className="text-link" to={href('/projets')}>
          {isEnglish ? 'See the six projects in detail' : 'Voir les six projets en détail'}
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function ServicesSummary() {
  const { locale, href, isEnglish } = useLanguage()
  const { tiers } = getServiceContent(locale)

  return (
    <section className="services-summary">
      <div className="section-head">
        <p className="eyebrow">
          {isEnglish ? 'Three ways to work together' : 'Trois façons de travailler ensemble'}
        </p>
        <h2>
          {isEnglish
            ? 'Clear formats, with the scope written down before we start.'
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
        <p className="eyebrow">
          {isEnglish ? 'Still hesitating? Start here.' : 'Vous hésitez encore ? Commencez ici.'}
        </p>
        <h2>
          {isEnglish
            ? 'Show me your business — or your current website.'
            : 'Montrez-moi votre activité — ou votre site actuel.'}
        </h2>
        <p className="lead">
          {isEnglish
            ? 'Send a link: your website, your Instagram, a photo of your business card. I reply with an honest first reading and a few useful questions. A short conversation, not an automated report — and no commitment.'
            : 'Envoyez un lien : votre site, votre Instagram, votre carte en photo. Je réponds avec une première lecture honnête et quelques questions utiles. Une conversation courte, pas un rapport automatique — et aucun engagement.'}
        </p>
      </div>
      <Link className="button fill" to={href('/contact?entree=diagnostic')}>
        {isEnglish ? 'Send a link to look at' : 'Envoyer un lien à regarder'}
      </Link>
    </section>
  )
}
