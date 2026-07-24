import { FormEvent, useState } from 'react'
import { getSiteContent } from '../../data/site'
import { useLanguage } from '../../i18n/LanguageContext'

const existingOptions = [
  'Rien pour l’instant — je pars de zéro',
  'Un compte Instagram ou d’autres réseaux',
  'Un site que je veux refaire',
  'Un site correct que je veux faire évoluer',
  'Des textes, photos ou un logo déjà prêts',
]

const needOptions = [
  'Une page ou un petit site',
  'Un site complet avec plusieurs pages',
  'Une boutique ou un catalogue',
  'Un outil ou un espace d’administration',
  'Une refonte de mon site actuel',
  'Autre chose / je ne sais pas encore',
]

const goalOptions = [
  'Présenter mon activité',
  'Obtenir plus de demandes',
  'Vendre ou présenter mes produits',
  'Permettre des réservations',
  'Refaire un site existant',
  'Créer quelque chose de plus original',
  'Automatiser une tâche',
  'Je ne sais pas encore',
]

const budgetOptions = [
  'Moins de 1 000 €',
  '1 000 – 3 000 €',
  '3 000 – 6 000 €',
  'Plus de 6 000 €',
]

const contactMethods = ['E-mail', 'Téléphone', 'WhatsApp']

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm({ diagnostic = false }: { diagnostic?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const { locale, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)
  const translatedExistingOptions = isEnglish
    ? [
        'Nothing yet — I am starting from scratch',
        'An Instagram account or other social profiles',
        'A website I want to rebuild',
        'A decent website I want to improve',
        'Copy, photography or a logo already prepared',
      ]
    : existingOptions
  const translatedNeedOptions = isEnglish
    ? [
        'One page or a small website',
        'A complete multi-page website',
        'A shop or catalogue',
        'A tool or administration space',
        'A redesign of my current website',
        'Something else / I am not sure yet',
      ]
    : needOptions
  const translatedGoalOptions = isEnglish
    ? [
        'Present my business',
        'Receive more enquiries',
        'Sell or present my products',
        'Allow bookings',
        'Rebuild an existing website',
        'Create something more original',
        'Automate a task',
        'I am not sure yet',
      ]
    : goalOptions
  const translatedBudgetOptions = isEnglish
    ? ['Under €1,000', '€1,000–€3,000', '€3,000–€6,000', 'Over €6,000']
    : budgetOptions
  const translatedContactMethods = isEnglish ? ['Email', 'Phone', 'WhatsApp'] : contactMethods

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    const data = new URLSearchParams()
    new FormData(form).forEach((value, key) => data.append(key, String(value)))

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="confirmation" role="status">
        <p className="eyebrow">{isEnglish ? 'Request sent' : 'Demande envoyée'}</p>
        <h2>
          {isEnglish
            ? 'Thank you — this is exactly what I need to begin.'
            : 'Merci — c’est exactement ce qu’il me faut pour commencer.'}
        </h2>
        <p>
          {isEnglish
            ? 'I read every request personally. You will receive my first questions or an initial reading of your situation, not an automated proposal. Messages sent late in the week may receive a reply at the beginning of the next one.'
            : 'Je lis chaque demande personnellement. Vous recevrez une réponse avec mes premières questions ou une première lecture de votre situation — pas une proposition automatique. Si votre message est parti en fin de semaine, comptez le début de la semaine suivante.'}
        </p>
        <a className="button fill" href={`mailto:${site.email}`}>
          {isEnglish ? 'Add a detail by email' : 'Ajouter un détail par e-mail'}
        </a>
      </div>
    )
  }

  return (
    <form
      name="project-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
    >
      <input type="hidden" name="form-name" value="project-request" />
      <input type="hidden" name="entry" value={diagnostic ? 'diagnostic' : 'contact'} />
      <input type="hidden" name="language" value={locale} />
      <p hidden>
        <label>
          {isEnglish ? 'Do not fill in this field' : 'Ne pas remplir ce champ'}
          <input name="bot-field" />
        </label>
      </p>

      <label>
        {isEnglish ? 'Your name' : 'Votre nom'}
        <input required name="name" autoComplete="name" />
      </label>

      <label>
        {isEnglish ? 'Your business or project' : 'Votre activité ou votre projet'}
        <input
          name="project"
          placeholder={
            isEnglish
              ? 'For example: restaurant, clothing brand, illustrator…'
              : 'Ex. restaurant, marque de vêtements, illustratrice…'
          }
        />
      </label>

      <div className="form-grid">
        <label>
          {isEnglish ? 'How would you like me to contact you?' : 'Comment préférez-vous être recontacté·e ?'}
          <select name="contact-method" defaultValue={isEnglish ? 'Email' : 'E-mail'}>
            {translatedContactMethods.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label>
          {isEnglish ? 'Your email address or number' : 'Votre e-mail ou numéro'}
          <input
            required
            name="contact"
            placeholder={isEnglish ? 'Where I can reply' : 'Où je peux vous répondre'}
          />
        </label>
      </div>

      <label>
        {isEnglish ? 'What do you already have?' : 'Qu’avez-vous déjà aujourd’hui ?'}
        <select name="existing" defaultValue="">
          <option value="" disabled>
            {isEnglish ? 'Choose the closest situation' : 'Choisir la situation la plus proche'}
          </option>
          {translatedExistingOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <div className="form-grid">
        <label>
          {isEnglish ? 'What do you need?' : 'De quoi s’agit-il ?'}
          <select name="need" defaultValue="">
            <option value="" disabled>
              {isEnglish ? 'Choose an option' : 'Choisir une option'}
            </option>
            {translatedNeedOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          {isEnglish ? 'Your main objective' : 'Votre objectif principal'}
          <select
            name="goal"
            defaultValue={diagnostic ? (isEnglish ? 'I am not sure yet' : 'Je ne sais pas encore') : ''}
          >
            <option value="" disabled>
              {isEnglish ? 'What matters most' : 'Ce qui compte le plus'}
            </option>
            {translatedGoalOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-grid">
        <label>
          {isEnglish ? 'Indicative budget (optional)' : 'Budget indicatif (facultatif)'}
          <select name="budget" defaultValue="">
            <option value="">{isEnglish ? 'I would rather discuss it' : 'Je préfère en parler'}</option>
            {translatedBudgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          {isEnglish ? 'Preferred deadline (optional)' : 'Échéance souhaitée (facultatif)'}
          <input
            name="deadline"
            placeholder={isEnglish ? 'For example: before December, no rush…' : 'Ex. avant décembre, pas d’urgence…'}
          />
        </label>
      </div>

      <label>
        {isEnglish ? 'Tell me about it in a few lines' : 'Racontez-moi en quelques lignes'}
        <textarea
          required
          name="message"
          rows={5}
          placeholder={
            diagnostic
              ? isEnglish
                ? 'Your business, a link to your website or Instagram, and what makes you hesitate…'
                : 'Votre activité, le lien de votre site ou de votre Instagram, et ce qui vous fait hésiter…'
              : isEnglish
                ? 'What you do, what is getting in the way and what you would like to make easier…'
                : 'Ce que vous faites, ce qui vous gêne aujourd’hui, ce que vous aimeriez rendre plus simple…'
          }
        />
      </label>

      {status === 'error' && (
        <p role="alert" className="form-error">
          {isEnglish
            ? `The form could not be sent. Please try again or email ${site.email}.`
            : `L’envoi n’a pas abouti. Vous pouvez réessayer, ou écrire directement à ${site.email}.`}
        </p>
      )}

      <button className="button fill" type="submit" disabled={status === 'sending'}>
        {status === 'sending'
          ? isEnglish
            ? 'Sending…'
            : 'Envoi en cours…'
          : isEnglish
            ? 'Send my request'
            : 'Envoyer ma demande'}
      </button>
    </form>
  )
}
