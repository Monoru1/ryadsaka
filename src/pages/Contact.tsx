import { useSearchParams } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { ContactForm } from '../components/contact/ContactForm'
import { getSiteContent } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const [params] = useSearchParams()
  const { locale, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)
  const diagnostic = params.get('entree') === 'diagnostic'

  usePageMeta({
    title: 'Contact — Ryad Saka',
    description: isEnglish
      ? 'Describe your business and what is not working today, even if the idea is still rough. A personal answer, not an automated proposal.'
      : 'Décrivez votre activité et ce qui vous gêne aujourd’hui — même avec une idée floue. Réponse personnelle, pas de proposition automatique.',
    path: '/contact',
  })

  return (
    <Layout>
      <section className="contact">
        <div className="contact-intro">
          <p className="eyebrow">
            {diagnostic
              ? isEnglish
                ? 'A first look, with no commitment'
                : 'Première lecture, sans engagement'
              : isEnglish
                ? 'Let us talk about what you want to improve'
                : 'Parlons de ce que vous voulez améliorer'}
          </p>
          <h1>
            {diagnostic
              ? isEnglish
                ? 'Send a link. I will tell you what I see.'
                : 'Envoyez un lien, je vous dis ce que j’en pense.'
              : isEnglish
                ? 'You do not need a perfect brief.'
                : 'Vous n’avez pas besoin d’avoir le brief parfait.'}
          </h1>
          <p className="lead">
            {diagnostic
              ? isEnglish
                ? 'Your current website, Instagram account or a photograph of your menu is enough. I will reply with an honest first reading and a few useful questions — a short conversation, not an automated report.'
                : 'Votre site actuel, votre Instagram, une photo de votre carte : ce que vous avez suffit. Je vous réponds avec une première lecture honnête et quelques questions utiles — une courte discussion, pas un rapport automatique.'
              : isEnglish
                ? 'Simply tell me what you do, what is getting in the way and what you would like to make easier. I will reply with useful questions, not an automated proposal.'
                : 'Dites-moi simplement ce que vous faites, ce qui vous gêne et ce que vous aimeriez rendre plus simple. Je vous répondrai avec des questions utiles, pas avec une proposition automatique.'}
          </p>
          <a className="text-link" href={`mailto:${site.email}`}>
            {isEnglish ? `Or email ${site.email} directly` : `Ou écrire directement à ${site.email}`}
          </a>
          <div className="contact-facts">
            <p className="plate-ref">{isEnglish ? 'What happens next' : 'Comment ça se passe ensuite'}</p>
            <ol>
              <li>
                {isEnglish
                  ? 'I read your message and answer personally.'
                  : 'Je lis votre message et je réponds personnellement.'}
              </li>
              <li>
                {isEnglish
                  ? 'We clarify the need in writing or on a call, whichever you prefer.'
                  : 'On précise le besoin — par écrit ou en appel, comme vous préférez.'}
              </li>
              <li>
                {isEnglish
                  ? 'You receive a written scope and estimate. You decide.'
                  : 'Vous recevez un périmètre et une estimation écrits. Vous décidez.'}
              </li>
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
