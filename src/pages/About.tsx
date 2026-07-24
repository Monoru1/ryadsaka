import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { getSiteContent } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { locale, href, isEnglish } = useLanguage()
  const { site } = getSiteContent(locale)

  usePageMeta({
    title: isEnglish ? 'About — Ryad Saka' : 'À propos — Ryad Saka',
    description: isEnglish
      ? 'Independent designer-developer based in France. I personally take every project from the first question to launch.'
      : 'Créateur-développeur indépendant en France : je conçois et je développe moi-même chaque projet, de la première idée jusqu’à la mise en ligne.',
    path: '/a-propos',
  })

  return (
    <Layout>
      <section className="about">
        <div className="about-copy">
          <p className="eyebrow">{isEnglish ? 'About' : 'À propos'}</p>
          <h1>
            {isEnglish
              ? 'I am Ryad. I design the idea, then I build it for real.'
              : 'Je m’appelle Ryad. Je dessine l’idée, puis je la construis pour de vrai.'}
          </h1>
          <p className="lead">
            {isEnglish
              ? 'I am an independent designer-developer based in France. I came to the web through code, systems and problem solving, then stayed for the part where a precise idea becomes something people can actually see, touch and use.'
              : 'Je suis créateur-développeur indépendant, basé en France. Je suis arrivé au web par le code, les systèmes et la résolution de problèmes. J’y suis resté pour ce moment précis où une idée devient quelque chose que des gens peuvent vraiment voir, toucher et utiliser.'}
          </p>
          <p>
            {isEnglish
              ? 'What I enjoy most is entering a world I do not yet know: how a restaurant serves a room, what makes a hotel feel quiet, why a young brand matters to the people behind it. I ask a lot of questions at the beginning. The technical answer usually comes later — and it is rarely the hardest part.'
              : 'Ce que j’aime le plus, c’est entrer dans un monde que je ne connais pas encore : comprendre comment un restaurant reçoit, ce qui rend un hôtel silencieux, ou pourquoi une jeune marque compte pour ceux qui la portent. Je pose beaucoup de questions au début. La réponse technique vient ensuite — et c’est rarement la partie la plus difficile.'}
          </p>
          <p>
            {isEnglish
              ? 'I work alone on purpose. The person listening to you is also the person making the design decisions, writing the code, testing the form and putting the site online. That keeps the conversation direct and the final work coherent.'
              : 'Je travaille seul, volontairement. La personne qui vous écoute est aussi celle qui prend les décisions visuelles, écrit le code, teste le formulaire et met le site en ligne. La conversation reste directe et le résultat reste cohérent.'}
          </p>
          <p>
            {isEnglish
              ? 'I am still learning, constantly. I do not pretend to know everything; I do promise to look closely, say what is realistic and care about details before asking you to approve them.'
              : 'J’apprends encore, tout le temps. Je ne prétends pas tout savoir ; je promets en revanche de regarder attentivement, de dire ce qui est réaliste et de m’occuper des détails avant de vous demander de les valider.'}
          </p>
          <Link className="button fill" to={href('/contact')}>
            {isEnglish ? 'Work with me' : 'Travailler ensemble'}
          </Link>
        </div>

        <figure className="identity">
          <img
            className="identity-photo"
            src="/og-image.png"
            alt={
              isEnglish
                ? 'A selection of websites designed and developed by Ryad Saka'
                : 'Une sélection de sites conçus et développés par Ryad Saka'
            }
          />
          <figcaption className="identity-notes">
            <span className="plate-ref">{isEnglish ? 'CURRENT WORK · 2026' : 'TRAVAIL EN COURS · 2026'}</span>
            <em>
              {isEnglish
                ? 'Several weeks of real work, held in one image.'
                : 'Plusieurs semaines de travail réel, réunies en une image.'}
            </em>
            <span className="identity-meta">{site.location}</span>
          </figcaption>
        </figure>
      </section>

      <section className="about-strip">
        <p>
          {isEnglish
            ? 'Technology, visual direction and problem solving are not three separate jobs to me. They are three ways of making the same project hold together.'
            : 'La technique, la direction visuelle et la résolution de problèmes ne sont pas trois métiers séparés pour moi. Ce sont trois façons de faire tenir un même projet.'}
        </p>
      </section>
    </Layout>
  )
}
