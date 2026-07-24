export type ServiceTier = {
  id: string
  name: string
  audience: string
  promise: string
  includes: string[]
  price: string
  priceNote?: string
  delay: string
  exampleSlugs: string[]
}

/**
 * Prix et délais : valeurs indicatives, centralisées ici pour être
 * modifiées en un seul endroit. Les délais sont des estimations,
 * jamais des garanties — le copywriting des pages le rappelle.
 */
export const tiers: ServiceTier[] = [
  {
    id: 'essentielle',
    name: 'Présence essentielle',
    audience:
      'Indépendants, artistes, restaurants, artisans et petites activités qui ont besoin d’exister clairement en ligne.',
    promise:
      'Une page ou un petit site qui dit ce que vous faites, pour qui, et comment vous joindre — sans détour.',
    includes: [
      'Une page ou un petit site (jusqu’à 3 écrans)',
      'Direction visuelle légère, adaptée à votre activité',
      'Présentation claire de l’offre',
      'Contact direct : formulaire, téléphone, WhatsApp ou réservation simple',
      'Version mobile soignée',
      'Mise en ligne et vérifications de base',
    ],
    price: 'à partir de 600 €',
    delay: 'généralement 1 à 2 semaines',
    exampleSlugs: ['emma'],
  },
  {
    id: 'signature',
    name: 'Site signature',
    audience:
      'Activités et marques qui ont besoin d’une identité forte, de plusieurs pages et d’un site qui mène quelque part.',
    promise:
      'Un site qui installe une atmosphère, raconte votre singularité et transforme la visite en prise de contact.',
    includes: [
      'Stratégie de contenu : quoi dire, dans quel ordre, à qui',
      'Direction artistique complète',
      'Développement sur mesure, sans template',
      'Animations et transitions au service du propos',
      'Pages de services, de lieux ou de produits',
      'SEO de base et métadonnées de partage',
      'Formulaire de contact ou de réservation',
      'Déploiement et accompagnement à la mise en ligne',
    ],
    price: 'à partir de 1 500 €',
    delay: 'généralement 3 à 6 semaines',
    exampleSlugs: ['saint-jules', 'heritage', 'zion'],
  },
  {
    id: 'sur-mesure',
    name: 'Expérience ou outil sur mesure',
    audience:
      'Boutiques, catalogues, projets avec espace d’administration, automatisations ou fonctionnalités interactives.',
    promise:
      'Au-delà de la vitrine : un outil que vous utilisez au quotidien, ou un site dont on se souvient.',
    includes: [
      'Interfaces complexes (3D, animation, catalogue avancé)',
      'Gestion de contenu : vous mettez à jour sans dépendre de moi',
      'Paiements, commandes ou réservations avancées',
      'Espace d’administration adapté à votre quotidien',
      'Automatisations des tâches répétitives',
      'Intégrations avec vos outils existants',
    ],
    price: 'sur devis',
    priceNote: 'Chiffré après un premier échange, avec périmètre écrit avant de commencer.',
    delay: 'selon le périmètre — estimé dès le devis',
    exampleSlugs: ['pyjamas', 'vortex'],
  },
]

export const pricingFactors = [
  'Le nombre de pages ou d’écrans réellement nécessaires',
  'La matière existante : textes, photos, logo, ou tout à créer',
  'Les fonctions : réservation, paiement, catalogue, espace d’administration',
  'Le niveau d’exigence visuelle et d’animation',
  'Les délais, si une échéance ferme existe',
]

export const clientProvides = [
  'Une description honnête de votre activité et de vos clients',
  'Vos textes et photos si vous en avez — sinon on construit avec ce qui existe',
  'Des retours à chaque point de validation',
  'Les accès utiles (nom de domaine, réseaux) le moment venu',
]

export const delivered = [
  'Un site en ligne, testé sur mobile et desktop',
  'Des formulaires qui arrivent réellement dans votre boîte mail',
  'Les bases du référencement et du partage sur les réseaux',
  'Les accès et les explications pour la suite',
]

export const getServiceContent = (locale: Locale = 'fr') => ({
  tiers: locale === 'en' ? tiersEn : tiers,
  pricingFactors: locale === 'en' ? pricingFactorsEn : pricingFactors,
  clientProvides: locale === 'en' ? clientProvidesEn : clientProvides,
  delivered: locale === 'en' ? deliveredEn : delivered,
})
import type { Locale } from '../i18n/LanguageContext'
import {
  clientProvidesEn,
  deliveredEn,
  pricingFactorsEn,
  tiersEn,
} from '../i18n/content.en'
