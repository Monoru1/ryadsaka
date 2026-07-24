import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'

const stepsFr: Array<[string, string]> = [
  [
    'Comprendre',
    'On parle de votre activité, de vos clients, de vos contraintes et de ce qui ne fonctionne pas aujourd’hui. C’est la partie la plus importante — et elle ne vous demande aucune compétence technique.',
  ],
  [
    'Donner une direction',
    'Je pose le ton, les priorités et le chemin du visiteur avant de choisir le moindre effet. Vous validez une intention claire, pas un jargon.',
  ],
  [
    'Concevoir et construire',
    'Les écrans prennent forme, avec des points de validation réguliers. Vous voyez le site avancer réellement, pas des maquettes qui ne seront jamais codées.',
  ],
  [
    'Mettre en ligne',
    'Mobile, référencement de base, formulaires testés, déploiement : le site part en ligne vérifié, pas « à peu près prêt ».',
  ],
  [
    'Rester disponible',
    'Après la publication, on peut faire évoluer ce qui doit l’être. Vous n’êtes pas laissé·e seul·e avec un site figé.',
  ],
]

export function Method() {
  const { href, isEnglish } = useLanguage()
  const steps: Array<[string, string]> = isEnglish
    ? [
        ['Understand', 'We discuss your business, customers, constraints and what is not working today. This is the most important part, and it requires no technical knowledge from you.'],
        ['Set a direction', 'I define the tone, priorities and visitor journey before choosing any visual effect. You approve a clear intention, not jargon.'],
        ['Design and build', 'The screens take shape with regular checkpoints. You see the real website move forward, not static mock-ups that may never be built.'],
        ['Launch', 'Mobile, essential SEO, tested forms and deployment: the website goes live after verification, not when it is “almost ready”.'],
        ['Stay available', 'After launch, we can improve what needs to evolve. You are not left alone with a frozen website.'],
      ]
    : stepsFr

  usePageMeta({
    title: isEnglish ? 'Process — Ryad Saka' : 'Méthode — Ryad Saka',
    description: isEnglish
      ? 'Five clear stages: understand, set direction, design and build, launch, and stay available. You always know where the project stands.'
      : 'Cinq étapes sans brouillard : comprendre, donner une direction, concevoir et construire, mettre en ligne, rester disponible. Vous savez toujours où en est le projet.',
    path: '/methode',
  })

  return (
    <Layout>
      <section className="method-hero">
        <p className="eyebrow">{isEnglish ? 'A process without fog' : 'Une méthode sans brouillard'}</p>
        <h1>
          {isEnglish
            ? 'You do not need to know how websites are made to commission one well.'
            : 'Vous n’avez pas besoin de savoir commander un site pour bien le commander.'}
        </h1>
        <p className="lead">
          {isEnglish
            ? 'Part of my role is making every choice understandable. At each stage, you know what is happening, what we are deciding and what is ready to approve.'
            : 'Mon rôle est aussi de rendre les choix compréhensibles. À chaque étape, vous savez ce qui se passe, ce que l’on décide, et ce qui est prêt à être validé.'}
        </p>
      </section>

      <ol className="method-list">
        {steps.map(([title, copy], i) => (
          <li key={title}>
            <span className="plate-ref">{isEnglish ? `Step ${i + 1}` : `Étape ${i + 1}`}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </li>
        ))}
      </ol>

      <section className="method-cta">
        <h2>
          {isEnglish
            ? 'A rough idea, a website to rebuild or simply a problem to solve is enough to start the conversation.'
            : 'Une idée floue, un site à refaire, ou juste un problème à résoudre ? C’est suffisant pour démarrer la discussion.'}
        </h2>
        <Link className="text-link" to={href('/contact')}>
          {isEnglish ? 'Tell me about the situation' : 'Me raconter la situation'}
        </Link>
      </section>
    </Layout>
  )
}
