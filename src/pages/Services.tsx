import { Link } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { getProject } from '../data/projects'
import { clientProvides, delivered, pricingFactors, tiers } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export function Services() {
  usePageMeta({
    title: 'Services & tarifs — Ryad Saka',
    description:
      'Trois formats de mission : présence essentielle à partir de 600 €, site signature à partir de 1 500 €, outil ou site sur mesure sur devis. Périmètre écrit avant de commencer.',
    path: '/services',
  })

  return (
    <Layout>
      <section className="page-intro narrow">
        <p className="eyebrow">Ce que vous pouvez me demander</p>
        <h1>Trois formats de mission, selon là où vous en êtes.</h1>
        <p className="lead">
          Vous n’avez pas besoin de connaître le web pour bien commander un site. Ces trois
          formats couvrent la plupart des situations ; le premier échange sert à trouver le
          vôtre — et le périmètre est toujours posé par écrit avant de commencer.
        </p>
      </section>

      <section className="tiers">
        {tiers.map((tier) => {
          const examples = tier.exampleSlugs
            .map(getProject)
            .filter((p): p is NonNullable<typeof p> => Boolean(p))

          return (
            <article key={tier.id} className="tier" id={tier.id}>
              <header className="tier-head">
                <h2>{tier.name}</h2>
                <div className="tier-pricing">
                  <p className="tier-price">{tier.price}</p>
                  <p className="tier-delay">Délai typique : {tier.delay}</p>
                </div>
              </header>

              <p className="tier-audience">{tier.audience}</p>
              <p className="tier-promise">{tier.promise}</p>

              <div className="tier-body">
                <div>
                  <p className="plate-ref">Peut comprendre</p>
                  <ul>
                    {tier.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {tier.priceNote && <p className="tier-note">{tier.priceNote}</p>}
                </div>

                {examples.length > 0 && (
                  <div className="tier-examples">
                    <p className="plate-ref">Pour voir ce que ça donne</p>
                    {examples.map((p) => (
                      <Link key={p.slug} className="text-link" to={`/projets/${p.slug}`}>
                        {p.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link className="button fill" to="/contact">
                En parler
              </Link>
            </article>
          )
        })}
      </section>

      <section className="service-details">
        <div>
          <p className="plate-ref">Ce qui influence le prix</p>
          <ul>
            {pricingFactors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="plate-ref">Ce que vous apportez</p>
          <ul>
            {clientProvides.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="plate-ref">Ce qui est livré</p>
          <ul>
            {delivered.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="service-note">
        <p>
          Les délais sont des estimations honnêtes, pas des garanties : ils dépendent aussi de
          la vitesse de vos retours. Les montants « à partir de » correspondent aux versions les
          plus simples de chaque format ; une première estimation précise arrive après avoir
          compris votre besoin — jamais avant.
        </p>
        <Link className="button fill" to="/contact">
          Demander une première estimation
        </Link>
      </section>
    </Layout>
  )
}
