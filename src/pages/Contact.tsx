import { useSearchParams } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { ContactForm } from '../components/contact/ContactForm'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function Contact() {
  const [params] = useSearchParams()
  const diagnostic = params.get('entree') === 'diagnostic'

  usePageMeta({
    title: 'Contact — Ryad Saka',
    description:
      'Décrivez votre activité et ce qui vous gêne aujourd’hui — même avec une idée floue. Réponse personnelle, pas de proposition automatique.',
    path: '/contact',
  })

  return (
    <Layout>
      <section className="contact">
        <div className="contact-intro">
          <p className="eyebrow">
            {diagnostic ? 'Première lecture, sans engagement' : 'Parlons de ce que vous voulez améliorer'}
          </p>
          <h1>
            {diagnostic
              ? 'Envoyez un lien, je vous dis ce que j’en pense.'
              : 'Vous n’avez pas besoin d’avoir le brief parfait.'}
          </h1>
          <p className="lead">
            {diagnostic
              ? 'Votre site actuel, votre Instagram, une photo de votre carte : ce que vous avez suffit. Je vous réponds avec une première lecture honnête et quelques questions utiles — une courte discussion, pas un rapport automatique.'
              : 'Dites-moi simplement ce que vous faites, ce qui vous gêne et ce que vous aimeriez rendre plus simple. Je vous répondrai avec des questions utiles, pas avec une proposition automatique.'}
          </p>
          <a className="text-link" href={`mailto:${site.email}`}>
            Ou écrire directement à {site.email}
          </a>
          <div className="contact-facts">
            <p className="plate-ref">Comment ça se passe ensuite</p>
            <ol>
              <li>Je lis votre message et je réponds personnellement.</li>
              <li>On précise le besoin — par écrit ou en appel, comme vous préférez.</li>
              <li>Vous recevez un périmètre et une estimation écrits. Vous décidez.</li>
            </ol>
          </div>
        </div>
        <div className="contact-form-wrap">
          <ContactForm diagnostic={diagnostic} />
        </div>
      </section>
    </Layout>
  )
}
