import { FormEvent, useState } from 'react'
import { site } from '../../data/site'
import { Arrow } from '../ui/Arrow'

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
        <p className="eyebrow">Demande envoyée</p>
        <h2>Merci — c’est exactement ce qu’il me faut pour commencer.</h2>
        <p>
          Je lis chaque demande personnellement. Vous recevrez une réponse avec mes premières
          questions ou une première lecture de votre situation — pas une proposition automatique.
          Si votre message est parti en fin de semaine, comptez le début de la semaine suivante.
        </p>
        <a className="button fill" href={`mailto:${site.email}`}>
          Ajouter un détail par e-mail <Arrow />
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
      <p hidden>
        <label>
          Ne pas remplir ce champ
          <input name="bot-field" />
        </label>
      </p>

      <label>
        Votre nom
        <input required name="name" autoComplete="name" />
      </label>

      <label>
        Votre activité ou votre projet
        <input
          name="project"
          placeholder="Ex. restaurant, marque de vêtements, illustratrice…"
        />
      </label>

      <div className="form-grid">
        <label>
          Comment préférez-vous être recontacté·e ?
          <select name="contact-method" defaultValue="E-mail">
            {contactMethods.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label>
          Votre e-mail ou numéro
          <input required name="contact" placeholder="Où je peux vous répondre" />
        </label>
      </div>

      <label>
        Qu’avez-vous déjà aujourd’hui ?
        <select name="existing" defaultValue="">
          <option value="" disabled>
            Choisir la situation la plus proche
          </option>
          {existingOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <div className="form-grid">
        <label>
          De quoi s’agit-il ?
          <select name="need" defaultValue="">
            <option value="" disabled>
              Choisir une option
            </option>
            {needOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          Votre objectif principal
          <select name="goal" defaultValue={diagnostic ? 'Je ne sais pas encore' : ''}>
            <option value="" disabled>
              Ce qui compte le plus
            </option>
            {goalOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="form-grid">
        <label>
          Budget indicatif (facultatif)
          <select name="budget" defaultValue="">
            <option value="">Je préfère en parler</option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label>
          Échéance souhaitée (facultatif)
          <input name="deadline" placeholder="Ex. avant décembre, pas d’urgence…" />
        </label>
      </div>

      <label>
        Racontez-moi en quelques lignes
        <textarea
          required
          name="message"
          rows={5}
          placeholder={
            diagnostic
              ? 'Votre activité, le lien de votre site ou de votre Instagram, et ce qui vous fait hésiter…'
              : 'Ce que vous faites, ce qui vous gêne aujourd’hui, ce que vous aimeriez rendre plus simple…'
          }
        />
      </label>

      {status === 'error' && (
        <p role="alert" className="form-error">
          L’envoi n’a pas abouti. Vous pouvez réessayer, ou écrire directement à {site.email}.
        </p>
      )}

      <button className="button fill" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'} <Arrow />
      </button>
    </form>
  )
}
