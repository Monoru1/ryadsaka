export type Tone = 'hotel' | 'museum' | 'restaurant' | 'shop' | 'artist' | 'street' | 'story'

export type Screen = {
  src: string
  alt: string
  kind: 'desktop' | 'mobile' | 'detail'
  caption: string
  /** Annotation courte, façon note de conception, pointant un élément réel de l'écran. */
  note?: string
}

export type Decision = { title: string; text: string }

export type Project = {
  slug: string
  title: string
  /** Nature honnête du projet — jamais « client » si ce n'en est pas un. */
  nature: string
  sector: string
  year: string
  url?: string
  tone: Tone
  /** Une phrase qui situe le projet, utilisée dans les listes. */
  summary: string
  context: string
  challenge: string
  decisions: Decision[]
  /** Ce qui a été réellement construit et qui est vérifiable en ouvrant le site. */
  built: string[]
  screens: Screen[]
  stack: string[]
  /** Limites ou suites honnêtes, si utile. */
  status?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'saint-jules',
    title: 'Maison Saint-Jules',
    nature: 'Concept indépendant',
    sector: 'Hôtel particulier · Paris',
    year: '2026',
    url: 'https://saintjules.netlify.app',
    tone: 'hotel',
    summary:
      'Un hôtel particulier cinq étoiles présenté comme une demeure à traverser, pièce après pièce, jusqu’à la réservation.',
    context:
      'Les sites d’hôtels se ressemblent : une grille de chambres, des tarifs, un moteur de réservation froid. Maison Saint-Jules explore l’inverse — et si le site faisait ce que fait un bon lieu, c’est-à-dire accueillir avant de vendre ?',
    challenge:
      'Installer une atmosphère de silence et d’hospitalité sur un écran, sans sacrifier ce qu’un visiteur vient chercher : voir les suites, comprendre les lieux, réserver.',
    decisions: [
      {
        title: 'Le site est construit comme une visite',
        text:
          'La page d’accueil traverse la demeure scène par scène — la rue, le seuil, le salon, les suites, le cabinet, les bains, le jardin, la nuit. On ne « scrolle » pas une page, on avance dans un lieu.',
      },
      {
        title: 'La lenteur est un choix, pas un défaut',
        text:
          'Transitions longues, images pleine hauteur, typographie posée. Tout est réglé pour ralentir le regard, parce que c’est exactement la promesse de ce type de maison.',
      },
      {
        title: 'La réservation prolonge le ton',
        text:
          'Le parcours de réservation garde le même vocabulaire et la même retenue que le reste du site, au lieu de basculer vers un formulaire générique.',
      },
    ],
    built: [
      'Parcours d’accueil en huit scènes traversant la demeure',
      'Pages dédiées : maison, suites, cabinet, bains, jardin, nuit, journal',
      'Parcours de réservation complet, cohérent avec l’univers',
      'Version mobile pensée pour conserver la respiration du site',
      'Contact direct : téléphone et conciergerie par e-mail',
    ],
    screens: [
      {
        src: '/projects/saint-jules/desktop.webp',
        alt: 'Page d’accueil de Maison Saint-Jules : façade de l’hôtel particulier à la tombée du jour, titre « Une demeure à traverser »',
        kind: 'desktop',
        caption: 'Écran d’arrivée — la façade avant les arguments',
        note: 'le lieu d’abord, le discours ensuite',
      },
      {
        src: '/projects/saint-jules/detail-1.webp',
        alt: 'Page des suites de Maison Saint-Jules, présentation immersive des chambres',
        kind: 'detail',
        caption: 'Les suites — présentées comme des pièces, pas comme un inventaire',
      },
      {
        src: '/projects/saint-jules/detail-2.webp',
        alt: 'Parcours de réservation de Maison Saint-Jules',
        kind: 'detail',
        caption: 'La réservation — même ton, même retenue',
        note: 'aucune rupture d’univers au moment décisif',
      },
      {
        src: '/projects/saint-jules/mobile.webp',
        alt: 'Version mobile de Maison Saint-Jules',
        kind: 'mobile',
        caption: 'Sur téléphone, la traversée reste une traversée',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    featured: true,
  },
  {
    slug: 'vortex',
    title: 'Vortex Automotive Museum',
    nature: 'Concept indépendant',
    sector: 'Musée automobile',
    year: '2026',
    url: 'https://vortex13.netlify.app',
    tone: 'museum',
    summary:
      'Un musée automobile numérique où chaque véhicule est traité comme une œuvre : collections, expositions, fiches et galerie.',
    context:
      'L’automobile d’exception est presque toujours présentée en fiche technique. Vortex prend le parti inverse : l’automobile érigée en œuvre d’art, avec la scénographie que cela suppose.',
    challenge:
      'Donner à un site la densité d’un lieu d’exposition — fond noir, lumière sur l’objet, parcours par salles — tout en restant navigable comme un site.',
    decisions: [
      {
        title: 'Des collections comme des salles',
        text:
          'Classiques, supercars, hypercars, concept-cars : quatre collections structurent la visite, chacune avec son accrochage.',
      },
      {
        title: 'Des fiches véhicules traitées en cartels',
        text:
          'Bugatti Chiron SS 300, Ferrari F40, McLaren F1 — chaque véhicule a sa page, écrite et mise en scène comme le cartel d’une œuvre, pas comme une annonce.',
      },
      {
        title: 'Le noir comme matière',
        text:
          'Fond profond, typographies capitales, images qui portent seules la couleur. La palette du site est celle d’une salle d’exposition éteinte autour de l’objet éclairé.',
      },
    ],
    built: [
      'Quatre collections navigables : classiques, supercars, hypercars, concept',
      'Pages véhicules individuelles avec mise en scène dédiée',
      'Section expositions avec billetterie présentée',
      'Galerie et page histoire du musée',
      'Navigation pensée comme un parcours de visite',
    ],
    screens: [
      {
        src: '/projects/vortex/desktop.webp',
        alt: 'Page d’accueil de Vortex Automotive Museum : Ferrari rouge sur fond noir, titre « L’automobile érigée en œuvre d’art »',
        kind: 'desktop',
        caption: 'Salle 01 — l’objet éclairé, le reste éteint',
        note: 'une seule couleur : celle de la voiture',
      },
      {
        src: '/projects/vortex/detail-1.webp',
        alt: 'Fiche véhicule de la Bugatti Chiron SS 300 sur Vortex',
        kind: 'detail',
        caption: 'Fiche véhicule — un cartel, pas une annonce',
      },
      {
        src: '/projects/vortex/detail-2.webp',
        alt: 'Page collections de Vortex avec les catégories classiques, supercars, hypercars et concept',
        kind: 'detail',
        caption: 'Les collections — quatre salles, quatre accrochages',
      },
      {
        src: '/projects/vortex/mobile.webp',
        alt: 'Version mobile de Vortex Automotive Museum',
        kind: 'mobile',
        caption: 'La visite tient dans la poche',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    featured: true,
  },
  {
    slug: 'heritage',
    title: 'Héritage',
    nature: 'Projet de démonstration',
    sector: 'Restaurant gastronomique · Aix-en-Provence',
    year: '2026',
    url: 'https://heritage-restaurant.netlify.app',
    tone: 'restaurant',
    summary:
      'Un restaurant gastronomique dont le site suit le rythme du service : l’histoire, le menu, la salle, la réservation.',
    context:
      'Beaucoup de restaurants oscillent entre le menu PDF illisible et le site-catalogue froid. Héritage cherche le geste juste : donner faim, donner envie de la salle, et rendre la réservation évidente.',
    challenge:
      'Traduire en interface ce qui fait un bon service : un ordre, un rythme, une attention. Le visiteur doit passer naturellement de « ça donne envie » à « je réserve ».',
    decisions: [
      {
        title: 'L’assiette avant le discours',
        text:
          'Le site s’ouvre sur le geste culinaire — l’art de recevoir, une assiette dressée — avant toute explication. On mange d’abord avec les yeux, même en ligne.',
      },
      {
        title: 'Le menu comme un objet éditorial',
        text:
          'Le menu est une vraie page du site, lisible sur téléphone, structurée comme une carte — pas un PDF scanné qu’on pince pour zoomer.',
      },
      {
        title: 'La réservation toujours à portée',
        text:
          'Histoire, menu, galerie, contact : chaque page ramène vers la réservation sans la crier. C’est la sortie naturelle du parcours.',
      },
    ],
    built: [
      'Page d’accueil orchestrée autour du geste culinaire',
      'Menu structuré et lisible, y compris sur mobile',
      'Pages histoire et galerie pour installer le lieu',
      'Parcours de réservation dédié',
      'Identité typographique chaleureuse, cohérente sur tout le site',
    ],
    screens: [
      {
        src: '/projects/heritage/desktop.webp',
        alt: 'Page d’accueil du restaurant Héritage : assiette gastronomique et titre « L’art de recevoir »',
        kind: 'desktop',
        caption: 'L’arrivée — on mange d’abord avec les yeux',
      },
      {
        src: '/projects/heritage/detail-1.webp',
        alt: 'Page menu du restaurant Héritage, structurée comme une carte',
        kind: 'detail',
        caption: 'Le menu — une carte, pas un PDF',
        note: 'lisible d’une main, dans le métro',
      },
      {
        src: '/projects/heritage/detail-2.webp',
        alt: 'Page de réservation du restaurant Héritage',
        kind: 'detail',
        caption: 'La réservation — la sortie naturelle du parcours',
      },
      {
        src: '/projects/heritage/mobile.webp',
        alt: 'Version mobile du site du restaurant Héritage',
        kind: 'mobile',
        caption: 'Le format où un restaurant se choisit vraiment',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Supabase'],
    featured: true,
  },
  {
    slug: 'pyjamas',
    title: 'La Maison des Pyjamas',
    nature: 'Marque en lancement — e-commerce en développement',
    sector: 'Commerce · pyjamas de fête',
    year: '2026',
    url: 'https://pyjamas25.netlify.app',
    tone: 'shop',
    summary:
      'Une boutique en ligne chaleureuse : catalogue, fiches produit, panier et commande directe par WhatsApp.',
    context:
      'Une marque de pyjamas familiaux et festifs a besoin de plus qu’une vitrine : un catalogue navigable, des fiches produit claires, un panier, et un canal de commande qui colle aux habitudes réelles de sa clientèle.',
    challenge:
      'Construire du commerce sans la froideur du e-commerce générique — et brancher la commande sur WhatsApp, là où les clients de la marque achètent vraiment.',
    decisions: [
      {
        title: 'Un catalogue qui raconte des moments',
        text:
          'Noël en famille, cocooning, éditions cadeau : les produits sont organisés par usage et par moment, pas seulement par taille et par prix.',
      },
      {
        title: 'WhatsApp comme canal de commande',
        text:
          'Plutôt que d’imposer un tunnel de paiement, la commande peut partir directement en conversation WhatsApp — le canal que la clientèle utilise déjà.',
      },
      {
        title: 'Pensé pour être administré',
        text:
          'Collections, produits et promotions sont structurés pour que la gestion quotidienne de la boutique reste simple, sans dépendre d’un développeur à chaque changement.',
      },
    ],
    built: [
      'Catalogue complet avec collections et accessoires',
      'Fiches produit individuelles (tailles, déclinaisons, mise en scène)',
      'Panier fonctionnel',
      'Commande directe via WhatsApp',
      'Liens réels vers l’Instagram et le TikTok de la marque',
    ],
    screens: [
      {
        src: '/projects/pyjamas/desktop.webp',
        alt: 'Page d’accueil de La Maison des Pyjamas : ambiance chaleureuse bordeaux et crème, photos de pyjamas de fête',
        kind: 'desktop',
        caption: 'La vitrine — chaleureuse avant d’être marchande',
      },
      {
        src: '/projects/pyjamas/detail-1.webp',
        alt: 'Catalogue de La Maison des Pyjamas avec la grille des produits',
        kind: 'detail',
        caption: 'Le catalogue — organisé par moments, pas par références',
      },
      {
        src: '/projects/pyjamas/detail-2.webp',
        alt: 'Fiche produit du pyjama Noël famille velours bordeaux',
        kind: 'detail',
        caption: 'Fiche produit — tout ce qu’il faut pour décider',
        note: 'la commande part en conversation WhatsApp',
      },
      {
        src: '/projects/pyjamas/mobile.webp',
        alt: 'Version mobile de La Maison des Pyjamas',
        kind: 'mobile',
        caption: 'La boutique dans le téléphone, où elle se vit vraiment',
      },
    ],
    stack: ['React', 'TypeScript', 'Supabase'],
    status:
      'Le paiement en ligne est prévu comme prochaine étape ; la commande passe aujourd’hui par WhatsApp, volontairement.',
    featured: true,
  },
  {
    slug: 'emma',
    title: 'emma.illustre',
    nature: 'Portfolio d’artiste',
    sector: 'Illustration & design graphique',
    year: '2026',
    url: 'https://emma85.netlify.app',
    tone: 'artist',
    summary:
      'Le portfolio d’une illustratrice : sept collections d’œuvres, une interface qui s’efface derrière le trait.',
    context:
      'Emma dessine, illustre, photographie. Son portfolio devait montrer l’étendue du travail — du croquis au design graphique — sans que l’interface prenne la place des œuvres.',
    challenge:
      'Trouver le point où le site est assez présent pour guider, et assez discret pour que le premier souvenir du visiteur soit un dessin, pas un effet.',
    decisions: [
      {
        title: 'Le papier comme référence',
        text:
          'Fond clair, marges généreuses, œuvres présentées comme des tirages posés. La navigation emprunte au feuilletage plus qu’au défilement.',
      },
      {
        title: 'Sept collections pour un regard',
        text:
          'Dessin, croquis, illustrations, photographie, projets d’école, design graphique, croquis traditionnels : la curation structure l’œuvre sans la découper artificiellement.',
      },
      {
        title: 'Une navigation pensée au pouce',
        text:
          'Le portfolio se partage sur Instagram et s’ouvre donc sur téléphone : la version mobile a été traitée comme le cas principal, pas comme une adaptation.',
      },
    ],
    built: [
      'Sept collections d’œuvres organisées et navigables',
      'Pages œuvres et parcours de découverte',
      'Version mobile traitée en priorité',
      'Liens directs vers l’Instagram et le Facebook de l’artiste',
      'Identité éditoriale sobre au service des œuvres',
    ],
    screens: [
      {
        src: '/projects/emma/desktop.webp',
        alt: 'Page d’accueil du portfolio emma.illustre : « un trait sincère », illustrations sur fond clair',
        kind: 'desktop',
        caption: 'L’entrée — le trait avant l’interface',
      },
      {
        src: '/projects/emma/detail-1.webp',
        alt: 'Page des œuvres du portfolio emma.illustre avec les collections',
        kind: 'detail',
        caption: 'Les collections — une curation, pas un vrac',
      },
      {
        src: '/projects/emma/mobile.webp',
        alt: 'Version mobile du portfolio emma.illustre',
        kind: 'mobile',
        caption: 'Le format Instagram → portfolio, sans friction',
        note: 'le mobile est le cas principal, pas l’exception',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    featured: false,
  },
  {
    slug: 'zion',
    title: 'ZION',
    nature: 'Projet de marque',
    sector: 'Streetwear · culture',
    year: '2026',
    url: 'https://zion0.netlify.app',
    tone: 'street',
    summary:
      'Une marque streetwear qui s’ouvre sur un manifeste : héritage, fierté, et une pièce phare en précommande.',
    context:
      'ZION n’est pas un catalogue de vêtements : c’est une déclaration. Archive 001 « Roots » raconte des racines et une fierté avant de montrer un produit. Le site devait être la marque, pas son support.',
    challenge:
      'Faire tenir ensemble un manifeste culturel et une mécanique commerciale (la précommande de la pièce BUZZOFF) sans que l’un affaiblisse l’autre.',
    decisions: [
      {
        title: 'Le manifeste comme page d’accueil',
        text:
          '« Welcome to ZION » : le site s’ouvre sur une déclaration en capitales, or sur noir. On comprend d’où parle la marque avant de voir ce qu’elle vend.',
      },
      {
        title: 'Une pièce, pas un rayon',
        text:
          'La boutique est volontairement resserrée sur la pièce phare BUZZOFF en précommande — la rareté fait partie du positionnement.',
      },
      {
        title: 'Or sur noir, sans compromis',
        text:
          'Une palette à deux voix, des capitales larges, un rythme d’affiche. L’identité est tranchée parce que la marque l’est.',
      },
    ],
    built: [
      'Page manifeste établissant le territoire de la marque',
      'Boutique avec précommande de la pièce BUZZOFF',
      'Pages à propos et contact dans la même voix',
      'Identité visuelle or sur noir déclinée sur tout le site',
    ],
    screens: [
      {
        src: '/projects/zion/desktop.webp',
        alt: 'Page d’accueil de ZION : « Welcome to ZION » en lettres or sur fond noir, Archive 001 Roots',
        kind: 'desktop',
        caption: 'Archive 001 — la déclaration avant le produit',
        note: 'la marque parle avant de vendre',
      },
      {
        src: '/projects/zion/detail-1.webp',
        alt: 'Boutique ZION avec la pièce BUZZOFF en précommande',
        kind: 'detail',
        caption: 'La boutique — une pièce, une précommande, un parti pris',
      },
      {
        src: '/projects/zion/mobile.webp',
        alt: 'Version mobile du site ZION',
        kind: 'mobile',
        caption: 'L’affiche tient debout, même en format poche',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite'],
    status:
      'Le e-commerce complet est une suite possible ; la précommande directe suffit à la phase de lancement.',
    featured: false,
  },
  {
    slug: 'nounours',
    title: 'Inspecteur Nounours',
    nature: 'Cadeau interactif — projet privé',
    sector: 'Récit interactif',
    year: '2026',
    tone: 'story',
    summary:
      'Un cadeau d’anniversaire transformé en enquête à explorer : indices, personnages et surprises.',
    context:
      'Un anniversaire méritait mieux qu’une carte. Inspecteur Nounours est une petite enquête interactive, écrite et développée pour une seule personne.',
    challenge:
      'Faire sourire et surprendre avec les moyens du web : du rythme, des indices, des transitions qui participent au récit.',
    decisions: [
      {
        title: 'Le récit commande la technique',
        text:
          'Chaque interaction existe parce que l’histoire en a besoin — jamais l’inverse. C’est un bon exercice de discipline pour tous les autres projets.',
      },
    ],
    built: [
      'Enquête interactive complète avec indices et personnages',
      'Transitions et interactions écrites pour le récit',
      'Expérience entièrement responsive',
    ],
    screens: [],
    stack: ['React', 'TypeScript'],
    status:
      'Projet privé, non public — il montre surtout que la narration interactive fait partie de la palette.',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
