import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'

export function NotFound() {
  const { href, isEnglish } = useLanguage()

  usePageMeta({
    title: isEnglish ? 'Page not found — Ryad Saka' : 'Page introuvable — Ryad Saka',
    description: isEnglish
      ? 'This page does not exist. Return to Ryad Saka’s portfolio.'
      : 'Cette page n’existe pas. Retour à l’accueil du portfolio de Ryad Saka.',
    path: '/404',
  })

  return (
    <Layout>
      <section className="not-found">
        <p className="eyebrow">404</p>
        <h1>
          {isEnglish
            ? 'This page does not exist — but your project does.'
            : 'Cette page n’existe pas — mais votre projet, oui.'}
        </h1>
        <Link className="button fill" to={href('/')}>
          {isEnglish ? 'Return home' : 'Revenir à l’accueil'}
        </Link>
      </section>
    </Layout>
  )
}
