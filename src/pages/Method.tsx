import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { usePageMeta } from '../hooks/usePageMeta'

const steps: Array<[string, string]> = [
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
  usePageMeta({
    title: 'Méthode — Ryad Saka',
    description:
      'Cinq étapes sans brouillard : comprendre, donner une direction, concevoir et construire, mettre en ligne, rester disponible. Vous savez toujours où en est le projet.',
    path: '/methode',
  })

  return (
    <Layout>
      <section className="method-hero">
        <p className="eyebrow">Une méthode sans brouillard</p>
        <h1>Vous n’avez pas besoin de savoir commander un site pour bien le commander.</h1>
        <p className="lead">
          Mon rôle est aussi de rendre les choix compréhensibles. À chaque étape, vous savez ce
          qui se passe, ce que l’on décide, et ce qui est prêt à être validé.
        </p>
      </section>

      <ol className="method-list">
        {steps.map(([title, copy], i) => (
          <li key={title}>
            <span className="plate-ref">Étape {i + 1}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </li>
        ))}
      </ol>

      <section className="method-cta">
        <h2>
          Une idée floue, un site à refaire, ou juste un problème à résoudre ? C’est suffisant
          pour démarrer la discussion.
        </h2>
        <Link className="text-link" to="/contact">
          Me raconter la situation
        </Link>
      </section>
    </Layout>
  )
}
