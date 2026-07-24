import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta({
    title: 'Page introuvable — Ryad Saka',
    description: 'Cette page n’existe pas. Retour à l’accueil du portfolio de Ryad Saka.',
    path: '/404',
  })

  return (
    <Layout>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>Cette page n’existe pas — mais votre projet, oui.</h1>
        <Link className="button fill" to="/">
          Revenir à l’accueil
        </Link>
      </section>
    </Layout>
  )
}
