import type { PageShot, Project, Screen } from '../data/projects'

type ScreenWords = Pick<Screen, 'alt' | 'caption' | 'note'>
type PageWords = Pick<PageShot, 'alt' | 'label' | 'note'>

type ProjectWords = Pick<
  Project,
  'nature' | 'sector' | 'summary' | 'context' | 'challenge' | 'decisions' | 'built' | 'status'
> & {
  screens: ScreenWords[]
  pages?: PageWords[]
}

const projectWords: Record<string, ProjectWords> = {
  'saint-jules': {
    nature: 'Independent concept',
    sector: 'Private hotel · Paris',
    summary:
      'A five-star private hotel presented as a house to walk through, room after room, all the way to booking.',
    context:
      'Hotel websites often look alike: a room grid, rates and a cold booking engine. Maison Saint-Jules explores the opposite idea — what if the website did what a good place does, and welcomed people before trying to sell?',
    challenge:
      'Create a feeling of quiet hospitality on a screen without hiding what visitors came for: seeing the suites, understanding the place and making a booking.',
    decisions: [
      {
        title: 'The website is built as a visit',
        text:
          'The homepage moves through the house scene by scene — street, threshold, lounge, suites, cabinet, baths, garden and night. Visitors do not simply scroll down a page; they move through a place.',
      },
      {
        title: 'Slowness is deliberate',
        text:
          'Long transitions, full-height imagery and quiet typography slow the eye down, because that is precisely what this kind of house promises.',
      },
      {
        title: 'Booking keeps the same voice',
        text:
          'The booking journey uses the same vocabulary and restraint as the rest of the website instead of switching to a generic form at the decisive moment.',
      },
    ],
    built: [
      'Homepage in eight scenes moving through the house',
      'Dedicated pages for the house, suites, cabinet, baths, garden, night and journal',
      'Complete booking journey consistent with the visual world',
      'Mobile version designed to preserve the pace and breathing room',
      'Direct contact by phone and concierge email',
    ],
    screens: [
      {
        alt: 'Maison Saint-Jules homepage showing the private hotel at dusk and the words “Entrez. Paris attendra.”',
        caption: 'Arrival screen — the place before the arguments',
        note: 'the place first, the explanation second',
      },
      {
        alt: 'Maison Saint-Jules suites page, with each room presented individually',
        caption: 'The suites — rooms, not inventory',
      },
      {
        alt: 'Maison Saint-Jules booking journey',
        caption: 'Booking — same tone, same restraint',
        note: 'no change of world at the decisive moment',
      },
      {
        alt: 'Mobile version of Maison Saint-Jules',
        caption: 'On a phone, the journey still feels like a journey',
      },
    ],
    pages: [
      {
        alt: 'Complete Suites page from the Maison Saint-Jules website',
        label: 'The suites — full page',
        note: 'rooms, not inventory',
      },
      {
        alt: 'Complete booking journey from the Maison Saint-Jules website',
        label: 'Booking — full page',
      },
    ],
  },
  vortex: {
    nature: 'Independent concept',
    sector: 'Automotive museum',
    summary:
      'A digital automotive museum where every car is treated as an artwork: collections, exhibitions, individual records and gallery.',
    context:
      'Exceptional cars are almost always reduced to technical specifications. Vortex takes the opposite position: the automobile as a work of art, with the scenography that idea requires.',
    challenge:
      'Give a website the density of an exhibition space — darkness, light on the object, a room-by-room journey — while keeping it as clear to navigate as a website.',
    decisions: [
      {
        title: 'Collections become rooms',
        text:
          'Classics, supercars, hypercars and concept cars structure the visit as four collections, each with its own display.',
      },
      {
        title: 'Vehicle pages become museum labels',
        text:
          'Bugatti Chiron SS 300, Ferrari F40, McLaren F1 — every vehicle has a dedicated page written and staged as an exhibit label, not a classified ad.',
      },
      {
        title: 'Black is treated as a material',
        text:
          'Deep backgrounds, capital letters and images carrying all the colour. The palette is that of a dark exhibition room built around one illuminated object.',
      },
    ],
    built: [
      'Four browsable collections: classics, supercars, hypercars and concepts',
      'Individual vehicle pages with dedicated art direction',
      'Exhibitions section with ticketing presentation',
      'Gallery and museum history page',
      'Navigation conceived as a museum visit',
    ],
    screens: [
      {
        alt: 'Vortex Automotive Museum homepage with a red Ferrari on black and the statement “L’automobile érigée en œuvre d’art”',
        caption: 'Room 01 — the object lit, everything else dark',
        note: 'one colour only: the car’s',
      },
      {
        alt: 'Bugatti Chiron SS 300 vehicle page on Vortex',
        caption: 'Vehicle page — a museum label, not an advert',
      },
      {
        alt: 'Vortex collections page with classics, supercars, hypercars and concepts',
        caption: 'The collections — four rooms, four displays',
      },
      {
        alt: 'Mobile version of Vortex Automotive Museum',
        caption: 'The visit fits in a pocket',
      },
    ],
    pages: [
      {
        alt: 'Complete Vortex Collections page showing the four rooms',
        label: 'Collections — full page',
        note: 'four rooms, four displays',
      },
      {
        alt: 'Complete Ferrari F40 page on the Vortex website',
        label: 'Ferrari F40 record — full page',
      },
    ],
  },
  heritage: {
    nature: 'Demonstration project',
    sector: 'Fine-dining restaurant · Aix-en-Provence',
    summary:
      'A fine-dining restaurant website paced like a service: story, menu, dining room and reservation.',
    context:
      'Many restaurants alternate between an unreadable PDF menu and a cold catalogue-like website. Héritage aims for the right gesture: make people hungry, make them want the room, and make booking obvious.',
    challenge:
      'Translate good service into an interface: order, rhythm and attention. The visitor should move naturally from “this looks good” to “I am booking”.',
    decisions: [
      {
        title: 'The plate before the speech',
        text:
          'The site opens on the culinary gesture — the art of hospitality and a plated dish — before any explanation. We eat with our eyes first, even online.',
      },
      {
        title: 'The menu as an editorial object',
        text:
          'The menu is a real, phone-readable web page structured like a restaurant menu — not a scanned PDF that has to be pinched and zoomed.',
      },
      {
        title: 'Booking is always within reach',
        text:
          'Story, menu, gallery and contact: every page leads back to booking without shouting. It is the natural conclusion of the visit.',
      },
    ],
    built: [
      'Homepage orchestrated around the culinary gesture',
      'Structured, readable menu including on mobile',
      'Story and gallery pages establishing the place',
      'Dedicated booking journey',
      'Warm typographic identity used consistently throughout the site',
    ],
    screens: [
      {
        alt: 'Héritage restaurant homepage with a plated dish and the words “L’art de recevoir”',
        caption: 'Arrival — we eat with our eyes first',
      },
      {
        alt: 'Héritage restaurant menu page structured like a printed menu',
        caption: 'The menu — a menu, not a PDF',
        note: 'readable with one hand on the train',
      },
      {
        alt: 'Héritage restaurant booking page',
        caption: 'Booking — the natural end of the journey',
      },
      {
        alt: 'Mobile version of the Héritage restaurant website',
        caption: 'The format where a restaurant is really chosen',
      },
    ],
    pages: [
      {
        alt: 'Complete Héritage restaurant homepage, from header to footer',
        label: 'Homepage — full page',
        note: 'service from the threshold to dessert',
      },
      {
        alt: 'Complete Héritage restaurant menu page',
        label: 'Menu — full page',
      },
    ],
  },
  pyjamas: {
    nature: 'Launching brand — e-commerce in progress',
    sector: 'Retail · festive sleepwear',
    summary:
      'A warm online shop with catalogue, product pages, basket and direct ordering through WhatsApp.',
    context:
      'A family and festive sleepwear brand needs more than a shop window: a browsable catalogue, clear product pages, a basket and an ordering channel that matches how its customers actually buy.',
    challenge:
      'Build commerce without the coldness of generic e-commerce, and connect ordering to WhatsApp, where the brand’s customers already shop.',
    decisions: [
      {
        title: 'A catalogue organised around moments',
        text:
          'Family Christmas, cocooning and gift editions: products are organised by use and occasion, not only by size and price.',
      },
      {
        title: 'WhatsApp as the ordering channel',
        text:
          'Rather than impose a payment funnel, an order can move directly into a WhatsApp conversation — the channel customers already use.',
      },
      {
        title: 'Designed to be managed',
        text:
          'Collections, products and promotions are structured so daily shop management stays simple without requiring a developer for every change.',
      },
    ],
    built: [
      'Complete catalogue with collections and accessories',
      'Individual product pages with sizes, variations and photography',
      'Working shopping basket',
      'Direct ordering through WhatsApp',
      'Real links to the brand’s Instagram and TikTok accounts',
    ],
    screens: [
      {
        alt: 'La Maison des Pyjamas homepage with warm burgundy and cream colours and festive sleepwear photography',
        caption: 'The shop window — warm before commercial',
      },
      {
        alt: 'La Maison des Pyjamas catalogue with a grid of products',
        caption: 'The catalogue — organised by moments, not references',
      },
      {
        alt: 'Product page for the burgundy velvet family Christmas pyjamas',
        caption: 'Product page — everything needed to decide',
        note: 'the order continues in WhatsApp',
      },
      {
        alt: 'Mobile version of La Maison des Pyjamas',
        caption: 'The shop in the phone, where it is actually used',
      },
    ],
    pages: [
      {
        alt: 'Complete La Maison des Pyjamas homepage',
        label: 'The shop window — full page',
      },
      {
        alt: 'Complete La Maison des Pyjamas catalogue page',
        label: 'The catalogue — full page',
        note: 'organised by moments, not references',
      },
    ],
    status:
      'Online payment is planned as the next stage; orders currently go through WhatsApp by design.',
  },
  emma: {
    nature: 'Artist portfolio',
    sector: 'Illustration & graphic design',
    summary:
      'An illustrator’s portfolio: seven collections of work and an interface that steps back behind the line.',
    context:
      'Emma draws, illustrates and photographs. The portfolio had to show the range of the work — from sketching to graphic design — without allowing the interface to take the place of the artwork.',
    challenge:
      'Find the point where the website is present enough to guide and discreet enough for the visitor’s first memory to be a drawing, not an effect.',
    decisions: [
      {
        title: 'Paper as the reference',
        text:
          'Light backgrounds, generous margins and works presented as laid-out prints. The navigation borrows more from leafing through pages than scrolling.',
      },
      {
        title: 'Seven collections, one eye',
        text:
          'Drawing, sketching, illustration, photography, school projects, graphic design and traditional sketches: curation structures the work without splitting it artificially.',
      },
      {
        title: 'Navigation made for the thumb',
        text:
          'The portfolio is shared on Instagram and therefore opened on phones. Mobile was treated as the primary case, not a later adaptation.',
      },
    ],
    built: [
      'Seven organised and browsable collections',
      'Work indexes and detailed project pages',
      'Mobile version treated as the priority',
      'Direct links to the artist’s Instagram and Facebook',
      'Quiet editorial identity serving the artwork',
    ],
    screens: [
      {
        alt: 'emma.illustre portfolio homepage with the words “un trait sincère” and illustrations on a light background',
        caption: 'The entrance — the line before the interface',
      },
      {
        alt: 'emma.illustre works page showing the collections',
        caption: 'The collections — curation, not a pile',
      },
      {
        alt: 'Mobile version of the emma.illustre portfolio',
        caption: 'Instagram to portfolio, without friction',
        note: 'mobile is the main case, not the exception',
      },
    ],
    pages: [
      {
        alt: 'Complete emma.illustre portfolio homepage',
        label: 'Homepage — full page',
      },
    ],
  },
  zion: {
    nature: 'Brand project',
    sector: 'Streetwear · culture',
    summary:
      'A streetwear brand opening with a manifesto about heritage and pride, followed by one hero piece available for pre-order.',
    context:
      'ZION is not a clothing catalogue; it is a statement. Archive 001 “Roots” speaks about origin and pride before showing a product. The website had to embody the brand, not merely support it.',
    challenge:
      'Hold a cultural manifesto and a commercial mechanism — the BUZZOFF pre-order — in the same space without either weakening the other.',
    decisions: [
      {
        title: 'The manifesto is the homepage',
        text:
          '“Welcome to ZION”: the website opens with a statement in large gold capitals on black. The brand’s point of view is clear before its product appears.',
      },
      {
        title: 'One piece, not an aisle',
        text:
          'The shop deliberately focuses on the BUZZOFF hero piece available for pre-order. Scarcity is part of the positioning.',
      },
      {
        title: 'Gold on black, without compromise',
        text:
          'A two-tone palette, wide capitals and the rhythm of a poster. The identity is decisive because the brand is decisive.',
      },
    ],
    built: [
      'Manifesto page establishing the brand territory',
      'Shop with BUZZOFF hero-piece pre-order',
      'About and contact pages in the same voice',
      'Gold-on-black visual identity carried across the website',
    ],
    screens: [
      {
        alt: 'ZION homepage with “Welcome to ZION” in gold on black and Archive 001 Roots',
        caption: 'Archive 001 — the statement before the product',
        note: 'the brand speaks before it sells',
      },
      {
        alt: 'ZION shop featuring the BUZZOFF piece on pre-order',
        caption: 'The shop — one piece, one pre-order, one position',
      },
      {
        alt: 'Mobile version of the ZION website',
        caption: 'The poster still stands in pocket format',
      },
    ],
    pages: [
      {
        alt: 'Complete ZION manifesto page',
        label: 'The manifesto — full page',
        note: 'the statement can be read in full',
      },
      {
        alt: 'Complete ZION shop page with the BUZZOFF pre-order',
        label: 'The shop — full page',
      },
    ],
    status:
      'Full e-commerce can follow later; direct pre-ordering is enough for the launch stage.',
  },
}

export function localizeProject(project: Project): Project {
  const words = projectWords[project.slug]
  if (!words) return project

  return {
    ...project,
    ...words,
    screens: project.screens.map((screen, index) => ({
      ...screen,
      ...words.screens[index],
    })),
    pages: project.pages?.map((page, index) => ({
      ...page,
      ...words.pages?.[index],
    })),
  }
}
