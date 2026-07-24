export type Problem = {
  id: string
  label: string
  situation: string
  response: string
  tierId: 'essentielle' | 'signature' | 'sur-mesure'
}

export const problems: Problem[] = [
  {
    id: 'instagram',
    label: 'Tout repose sur Instagram',
    situation:
      'Votre activité vit sur un compte que vous ne contrôlez pas : algorithme, portée en baisse, aucun endroit à vous où l’on comprend tout en une visite.',
    response:
      'Un site à vous, même simple, devient le point fixe : on y comprend l’offre, on y trouve le contact, et Instagram redevient ce qu’il doit être — une porte d’entrée.',
    tierId: 'essentielle',
  },
  {
    id: 'mobile',
    label: 'Mon site est illisible sur téléphone',
    situation:
      'Le site date d’une autre époque : textes minuscules, menus qui débordent, photos écrasées. Or vos visiteurs arrivent presque tous depuis un téléphone.',
    response:
      'On refait le site en partant du mobile, pas en l’adaptant après coup. Chaque projet montré ici a une version mobile travaillée — vous pouvez les ouvrir pour vérifier.',
    tierId: 'signature',
  },
  {
    id: 'offre',
    label: 'On ne comprend pas ce que je vends',
    situation:
      'Vous le voyez dans les questions qu’on vous pose : les gens arrivent sans avoir compris votre offre, vos prix ou votre différence.',
    response:
      'On reprend le fond avant la forme : quoi dire, dans quel ordre, avec quels mots. Le site devient la meilleure version de votre discours.',
    tierId: 'signature',
  },
  {
    id: 'reservation',
    label: 'Réserver ou me contacter est compliqué',
    situation:
      'Pas de bouton clair, un numéro caché en bas de page, un formulaire qui ne part nulle part. Chaque friction fait perdre des demandes réelles.',
    response:
      'On installe un chemin évident : réservation, formulaire qui arrive dans votre boîte, téléphone ou WhatsApp — selon la façon dont vos clients fonctionnent vraiment.',
    tierId: 'essentielle',
  },
  {
    id: 'marque',
    label: 'Mon site pourrait être celui de n’importe qui',
    situation:
      'Le site fonctionne, mais il ne ressemble à rien de particulier. Remplacez le logo par celui d’un concurrent : personne ne verrait la différence.',
    response:
      'Regardez Saint-Jules, Héritage et ZION : même développeur, jamais le même monde. Votre site n’a pas à ressembler à celui d’à côté.',
    tierId: 'signature',
  },
  {
    id: 'manuel',
    label: 'Je perds du temps sur des tâches répétitives',
    situation:
      'Recopier des commandes, répondre dix fois aux mêmes questions, tenir un catalogue à jour à la main : des heures perdues chaque semaine.',
    response:
      'On identifie ce qui peut être outillé — catalogue administrable, formulaires structurés, automatisations — et on ne construit que ce qui vous fait gagner du temps réel.',
    tierId: 'sur-mesure',
  },
]
