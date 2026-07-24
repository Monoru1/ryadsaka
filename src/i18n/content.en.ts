import type { Problem } from '../data/problems'
import type { ServiceTier } from '../data/services'

export const siteEn = {
  role: 'Independent designer-developer',
  location: 'France — working worldwide',
  description:
    'Ryad Saka designs and develops bespoke websites for hotels, restaurants, brands, artists and independent businesses. Visual direction, development and launch, handled by one person.',
}

export const proofPointsEn = [
  'Six live projects available to inspect on desktop and mobile',
  'Design, development and launch handled from beginning to end',
  'Mobile designed as part of every project, never patched in afterwards',
  'Forms, bookings, catalogues and admin spaces according to the real need',
  'Direct contact with the person designing and developing the work',
  'Based in France and available worldwide',
]

export const problemsEn: Problem[] = [
  {
    id: 'instagram',
    label: 'Everything depends on Instagram',
    situation:
      'Your business lives on an account you do not control: algorithms, declining reach and no place of your own where the whole offer makes sense in one visit.',
    response:
      'Even a simple website becomes a fixed point you own: people understand the offer, find the contact details, and Instagram returns to its proper role — an entrance.',
    tierId: 'essentielle',
  },
  {
    id: 'mobile',
    label: 'My website is unreadable on a phone',
    situation:
      'The site belongs to another era: tiny text, overflowing menus and crushed images. Yet most visitors now arrive from a phone.',
    response:
      'The site is rebuilt from the mobile experience up. Every project shown here has a considered mobile version you can open and inspect.',
    tierId: 'signature',
  },
  {
    id: 'offre',
    label: 'People do not understand what I sell',
    situation:
      'You hear it in the questions people ask: they arrive without understanding your offer, your prices or what makes you different.',
    response:
      'We work on substance before form: what to say, in which order and in which words. The website becomes the strongest version of your pitch.',
    tierId: 'signature',
  },
  {
    id: 'reservation',
    label: 'Booking or contacting me is difficult',
    situation:
      'No clear button, a phone number buried at the bottom, or a form that goes nowhere. Every friction point loses real enquiries.',
    response:
      'We create one obvious route: booking, a form that reaches your inbox, phone or WhatsApp — according to how your customers actually behave.',
    tierId: 'essentielle',
  },
  {
    id: 'marque',
    label: 'My website could belong to anyone',
    situation:
      'It works, but it has no particular identity. Replace the logo with a competitor’s and nobody would notice.',
    response:
      'Look at Saint-Jules, Héritage and ZION: one designer-developer, three different worlds. Your website should not look like the one next door.',
    tierId: 'signature',
  },
  {
    id: 'manuel',
    label: 'I lose time to repetitive work',
    situation:
      'Copying orders, answering the same question ten times, updating a catalogue by hand: hours disappear every week.',
    response:
      'We identify what deserves a tool — editable catalogues, structured forms and automation — then build only what saves real time.',
    tierId: 'sur-mesure',
  },
]

export const tiersEn: ServiceTier[] = [
  {
    id: 'essentielle',
    name: 'Essential presence',
    audience:
      'Independent professionals, artists, restaurants, craftspeople and small businesses that need a clear place online.',
    promise:
      'One page or a small website explaining what you do, who it is for and how to reach you — directly.',
    includes: [
      'One page or a small website, up to three screens',
      'Light visual direction tailored to your activity',
      'Clear presentation of the offer',
      'Direct contact through a form, phone, WhatsApp or simple booking',
      'Carefully designed mobile version',
      'Launch and essential checks',
    ],
    price: 'from €600',
    delay: 'usually 1 to 2 weeks',
    exampleSlugs: ['emma'],
  },
  {
    id: 'signature',
    name: 'Signature website',
    audience:
      'Businesses and brands that need a strong identity, several pages and a website that leads somewhere.',
    promise:
      'A website that establishes an atmosphere, tells what makes you different and turns visits into conversations.',
    includes: [
      'Content strategy: what to say, in what order and to whom',
      'Complete art direction',
      'Bespoke development without a template',
      'Animation and transitions serving the idea',
      'Service, venue or product pages',
      'Essential SEO and sharing metadata',
      'Contact or booking form',
      'Deployment and launch support',
    ],
    price: 'from €1,500',
    delay: 'usually 3 to 6 weeks',
    exampleSlugs: ['saint-jules', 'heritage', 'zion'],
  },
  {
    id: 'sur-mesure',
    name: 'Bespoke experience or tool',
    audience:
      'Shops, catalogues and projects requiring admin spaces, automation or advanced interactive features.',
    promise:
      'Beyond a showcase: a tool you use every day, or a website people remember.',
    includes: [
      'Advanced interfaces including 3D, animation or complex catalogues',
      'Content management you can update without a developer',
      'Payments, orders or advanced bookings',
      'Admin space designed around your daily work',
      'Automation of repetitive tasks',
      'Integration with your existing tools',
    ],
    price: 'on request',
    priceNote: 'Quoted after an initial conversation, with a written scope before work begins.',
    delay: 'depends on scope — estimated with the proposal',
    exampleSlugs: ['pyjamas', 'vortex'],
  },
]

export const pricingFactorsEn = [
  'The number of pages or screens genuinely required',
  'Existing material: copy, photography, logo, or everything still to create',
  'Features such as booking, payment, catalogue or administration',
  'The level of visual and motion design required',
  'Timing when a firm deadline exists',
]

export const clientProvidesEn = [
  'An honest description of your work and your customers',
  'Your copy and photography when available — otherwise we work with what exists',
  'Feedback at each validation point',
  'Domain and social access when the time comes',
]

export const deliveredEn = [
  'A live website tested on mobile and desktop',
  'Forms that genuinely reach your inbox',
  'The foundations for search visibility and social sharing',
  'Access and clear explanations for what comes next',
]
