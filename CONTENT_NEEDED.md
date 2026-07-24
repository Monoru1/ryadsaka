# Contenu et actions restantes

Le site est construit sans chiffres, témoignages ou résultats client inventés. État après la refonte `claude/conversion-refactor` :

## Fait pendant la refonte

- ✅ Captures réelles desktop, mobile et détails pour les 6 projets (`public/projects/`), en WebP optimisé.
- ✅ Image Open Graph dédiée (`public/og-image.png`), régénérable en modifiant la composition si besoin.
- ✅ Prix, e-mail, URLs et services centralisés dans `src/data/` (`site.ts`, `services.ts`, `projects.ts`, `problems.ts`).
- ✅ Métadonnées par page (titre, description, canonical, OG) via `src/hooks/usePageMeta.ts`, avec `https://ryadsaka.netlify.app` comme URL canonique.
- ✅ Sitemap et robots.txt à jour.

## À faire côté Netlify / contenu

- **Notifications Netlify Forms** : après le premier déploiement de cette branche, ouvrir *Forms* → *Form notifications* et vérifier que la notification e-mail vers `contact@ryadsaka.com` couvre bien le formulaire `project-request` (les champs ont changé : `contact-method`, `existing`, `goal`, `entry` s'ajoutent aux anciens).
- **Portrait** : la page À propos utilise une composition identitaire (initiales + extraits du carnet). Si un jour une photo est souhaitée, remplacer le bloc `.identity` dans `src/pages/About.tsx`.
- **Prix** : les montants « à partir de » se modifient dans `src/data/services.ts` uniquement.
- **Rafraîchir les captures** : si un site projet évolue, re-capturer et remplacer les fichiers dans `public/projects/<slug>/` (formats : `desktop.webp` 1600 px, `mobile.webp` 640 px, `detail-*.webp` 1400 px).
- **Brevo (optionnel)** : uniquement côté fonction serveur si un routage e-mail devient nécessaire. Jamais de clé dans le frontend.
- **Nom de domaine** : le jour où un domaine personnalisé remplace `ryadsaka.netlify.app`, changer `url` dans `src/data/site.ts`, le canonical de `index.html`, `public/sitemap.xml` et `public/robots.txt`.
- **Réseaux sociaux** : ajouter uniquement les profils que Ryad souhaite rendre publics (footer).
- **Données commerciales vérifiables** : si de vrais retours clients ou résultats peuvent être publiés plus tard, les ajouter avec leur contexte — jamais sous forme de promesse générale.
