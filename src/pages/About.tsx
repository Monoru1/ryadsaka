import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { site } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function About() {
  usePageMeta({
    title: 'À propos — Ryad Saka',
    description:
      'Créateur-développeur indépendant en France : je conçois et je développe moi-même chaque projet, de la première idée jusqu’à la mise en ligne.',
    path: '/a-propos',
  })

  return (
    <Layout>
      <section className="about">
        <div className="about-copy">
          <p className="eyebrow">À propos</p>
          <h1>Je fais les deux métiers qu’on vous vend d’habitude séparément.</h1>
          <p className="lead">
            Je suis Ryad Saka, créateur-développeur indépendant. Concevoir et développer sont
            pour moi un seul geste : je dessine ce que je vais coder, je code ce que j’ai
            dessiné. C’est ce qui permet aux projets d’avoir du caractère sans jamais perdre de
            vue leur rôle — faire avancer une vraie activité.
          </p>
          <p>
            Ce qui me plaît, ce sont les projets qui demandent de comprendre un monde avant de
            l’écrire : la lenteur d’un hôtel particulier, le rythme d’un service en salle, la
            fierté d’une marque qui se lance. Je pose beaucoup de questions au début. C’est
            normal — la réponse technique est la partie facile.
          </p>
          <p>
            Concrètement : je prends en charge un projet de sa définition jusqu’à son
            déploiement. Direction visuelle, contenu, développement, mise en ligne, formulaires
            qui arrivent vraiment dans votre boîte. Vous parlez à une personne, pas à une
            agence qui sous-traite — et cette personne travaille depuis la France, à distance,
            avec des points de validation réguliers.
          </p>
          <p>
            Je continue d’apprendre en permanence, et je suis exigeant sur ce que je livre :
            si un détail me gêne, je le corrige avant que vous ayez à le remarquer.
          </p>
          <Link className="button fill" to="/contact">
            Travailler ensemble
          </Link>
        </div>

        <div className="identity" role="img" aria-label="Composition graphique représentant Ryad Saka : initiales et notes de conception">
          <div className="identity-initials" aria-hidden="true">
            RS
          </div>
          <div className="identity-notes" aria-hidden="true">
            <span className="plate-ref">CARNET · EXTRAITS</span>
            <em>« le lieu d’abord, le discours ensuite »</em>
            <em>« lisible d’une main, dans le métro »</em>
            <em>« la marque parle avant de vendre »</em>
            <span className="identity-meta">{site.location}</span>
          </div>
        </div>
      </section>

      <section className="about-strip">
        <p>
          Technologie, création, résolution de problèmes : je ne les traite pas comme trois
          métiers séparés — et vos visiteurs sentent la différence.
        </p>
      </section>
    </Layout>
  )
}
