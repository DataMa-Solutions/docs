# Refonte de la documentation Datama : look & feel et bonnes pratiques (option A)

> Document de proposition, sans code. Branche `docs_tree_structure`.
> Le dossier `_proposals/` commence par `_` : Jekyll ne le publie pas.

## Décisions validées

| Sujet | Décision |
|---|---|
| Outil | **Option A** : on garde Jekyll et on l'améliore. La doc reste un support secondaire ; pas de migration vers Starlight. |
| Arborescence | **Gardée telle quelle**, à quelques regroupements de dossiers près dans le menu (voir §3). |
| Langue | **EN uniquement**, sauf les quelques pages qui ont déjà une version FR (astuces de la semaine). |
| Hébergement | Inchangé : GitHub Pages, `datama-solutions.github.io/docs`. |
| URL | **Aucune URL ne change** : pas de fichier déplacé, renommé ou supprimé. |

Ces décisions fixent une règle pour tout le plan : **on modifie le rendu et le menu, jamais l'emplacement des pages.**

---

## 1. Constat (audit du repo `docs`)

### Stack
- Jekyll 4.3 avec le thème `minima` déclaré mais presque entièrement surchargé par du SCSS maison (`_sass/main.scss`, 620 lignes).
- jQuery, Font Awesome **5.15** (2021), un moteur de recherche maison (`sws.js`), Open Sans et Montserrat.
- 4 layouts (`default`, `page`, `new-page`, `post`) qui dupliquent chacun le `<head>`.
- Pas de dossier `.github/` : le site est probablement construit par GitHub Pages en mode « classique », qui n'accepte que les plugins de la liste blanche.

### Menu (`_data/navigation.yml`)
| Problème | Détail |
|---|---|
| Taille | 367 entrées, 14 racines, jusqu'à 6 niveaux de profondeur |
| Doublons | Les pages « X on Looker Studio / Power BI… » apparaissent sous chaque solution **et** dans *Marketplace* ; « Pricing Plan » revient environ 17 fois |
| Bruit de travail | Marqueurs `#done`, `#under construction`, `# mettre les images à jour`, gros blocs commentés |
| Coquilles visibles | *Simgle*, *Markeplace*, *Signifiance*, *Analise Sequences*, *Google Google BigQuery* |
| Racines incohérentes | Calendar, Explore et Spreadsheet sont au même niveau que les solutions ; Privacy/ToS sont dans le menu principal |

### Contenu et hygiène
- **629** balises `<center>` et **1004** `<br>` dans le Markdown : la mise en page est faite à la main.
- **48** pages de `core_app/` et `extensions/` sans `description` (SEO, aperçus de liens).
- Pages héritées toujours en ligne : `core_app.md`, `web_application.md` et `home.md` pointent vers *Impact* et *Source* (anciennes solutions).
- Liens construits avec `{{site.url}}/{{site.baseurl}}` alors que `baseurl` vaut déjà `/docs` : cela produit des URL `…github.io//docs/…`.
- Domaines mélangés dans les liens : `Datama.fr`, `datama.io`, `solutions.Datama.fr`.
- Textes alternatifs génériques (« logo impact » sur des captures sans rapport).
- `user-scalable=no` dans 6 layouts : le zoom est bloqué sur mobile (problème d'accessibilité).
- Iframes YouTube en largeur fixe de 800 px (débordent sur mobile).
- Environ **560 Mo de GIF** : pages lourdes et lentes.
- `sitemap.xml` statique de 42 Ko maintenu à la main.

### Look & feel
- La page d'accueil s'ouvre sur un hero plein écran : le contenu utile est sous la ligne de flottaison.
- Il manque : un sommaire « Sur cette page », des boutons précédent/suivant, des encadrés typés, des captures avec légende et zoom, un bouton de copie sur le code.
- Typographie et couleurs proches mais pas alignées avec le nouveau site public.

---

## 2. Identité à reprendre depuis `public-website`

Source : `public-website/tailwind.config.ts`, `src/app/globals.css`, `src/fonts/`, `public/brand/`.

### Couleurs (tokens)
| Token | Valeur | Usage dans la doc |
|---|---|---|
| `pine` | `#00484A` | Titres, liens, boutons principaux, élément actif du menu |
| `pine-deep` | `#02292B` | Footer |
| `pine-soft` | `#33686A` | Texte secondaire, breadcrumb |
| `aqua` | `#16D0B4` | Accents : soulignement des liens, barre de l'élément actif, focus, sélection |
| `aqua-dark` | `#0EA893` | Survol |
| `aqua-soft` / `aqua-mist` | `#E3F9F4` / `#F3FBF9` | Fond de la sidebar, encadrés « Tip », cartes |
| `coral` / `coral-soft` | `#F8663C` / `#FEEFE9` | Encadrés « Warning », avec parcimonie |
| `azure` / `azure-soft` | `#4285F4` / `#EAF1FE` | Encadrés « Note » |

> ⚠️ **Accessibilité :** l'aqua `#16D0B4` sur fond blanc a un contraste d'environ 1,9:1, sous le minimum WCAG (4,5:1 pour du texte). Il faut le réserver aux **accents** (bordures, soulignements, icônes, fonds). Les liens restent en `pine`, soulignés en `aqua`.

### Typographie
- **Montserrat** pour le corps et l'interface. Corps de texte à 16–17 px, interligne 1,7, largeur de lecture d'environ 760 px.
- **Blimone** (`public-website/src/fonts/*.woff2`, à copier dans `assets/fonts/`) pour **H1 et le hero uniquement**.
- Abandon d'Open Sans.

### Formes et composants
- Boutons en pilule : *primary* fond pine, *accent* fond aqua + texte pine, *ghost* bordure `pine/15`.
- Cartes : rayon de 16 px, ombre `card` du site (`0 1px 2px rgba(0,72,74,.05), 0 8px 24px rgba(0,72,74,.07)`).
- Header collant, fond blanc à 85 % avec flou, bordure `pine/5`.
- `::selection` et `:focus-visible` identiques au site.
- Logos `Logo_Datama_Vert_Fonce.svg` / `Blanc.svg`, et les « bulles » et « yeux » pour l'accueil et la 404.

**Mise en œuvre :** un fichier `_sass/_tokens.scss` qui remplace `_colors.scss` et expose ces valeurs en variables CSS. Même règle que le site : aucun code couleur en dur ailleurs.

---

## 3. Menu : nettoyage sans changer les URL

L'arborescence est conservée. Les changements se font **uniquement dans `_data/navigation.yml`** (libellés, ordre, regroupements). Les fichiers restent où ils sont, donc **les URL ne changent pas**.

### À faire dans tous les cas
- Corriger les coquilles des libellés.
- Supprimer les marqueurs `#done` / `#under construction` et les blocs commentés morts. Le suivi de rédaction passe dans des issues GitHub.
- Sortir Privacy policy / Terms of Service du menu principal vers le footer : les pages restent accessibles à la même URL.

### Regroupements possibles (à choisir)
Ce sont des pistes pour les « quelques dossiers » à changer. Chacune ne touche que le menu :

| Piste | Effet dans le menu | URL |
|---|---|---|
| Ranger **Calendar** sous **Prep** | Calendar n'est plus une racine | Inchangées |
| Ranger **Explore** et **Spreadsheet** avec les autres solutions (après Journey) | Ordre cohérent : solutions groupées | Inchangées |
| Replier **Marketplace** (fermée par défaut) ou la renommer « By BI tool » | Moins de bruit, sans retirer le doublon | Inchangées |
| Remplacer les ~17 entrées « Pricing Plan » par **une seule** entrée dans *General › Type of account and plan* | Menu plus court ; les pages Pricing restent en ligne et accessibles depuis leurs pages parentes | Inchangées |
| Isoler *Type of account and plan*, *On-Premise* et *Integrations* dans une racine **Account & admin** | « General » ne contient plus que l'interface | Inchangées |

> **Questions ouvertes :** quels regroupements retenir ? « Changer quelques dossiers » signifie-t-il bien regrouper dans le menu, et non déplacer les fichiers ? Déplacer un fichier changerait son URL.

### Réduire les doublons de contenu sans toucher aux URL
- Les pages répétées (« Pricing Plan », sous-pages du subheader : Dimension Helper, Filters, Metrics relation…) gardent leurs URL. Leur **contenu** vient d'un seul fichier `_includes/shared/…` : on corrige une fois, et toutes les pages sont à jour.
- Les pages héritées (`core_app.md`, `web_application.md`, `home.md`) sont retirées du menu et reçoivent un bandeau « Cette page est obsolète → voir … ». Elles ne sont pas supprimées, pour ne pas casser de liens.

---

## 4. Look & feel

### 4.1 Structure de page (3 colonnes)
```
┌──────────────── Header collant (logo · recherche · Solutions · News · [Try Datama]) ─────────────────┐
│ Sidebar            │  Breadcrumb                                   │ On this page    │
│ (actif = barre     │  H1 Blimone                                   │ (H2/H3, collant,│
│  aqua + fond mist) │  Chapô (description du frontmatter)           │  section active │
│                    │  Contenu (max 760px)                          │  surlignée)     │
│                    │  ← Previous                      Next →       │                 │
│                    │  Was this page helpful? 👍 👎 · Edit on GitHub                  │
└────────────────────┴───────────────────────────────────────────────┴─────────────────┘
Footer pine-deep (site, Privacy, Terms, LinkedIn)
```
- Sur mobile : la sidebar devient un tiroir, et le sommaire un menu déroulant en haut de l'article.
- Les boutons précédent/suivant sont calculés depuis l'ordre de `navigation.yml`, comme le breadcrumb actuel.

### 4.2 Page d'accueil (`index.md`, même URL)
- Remplacer le hero plein écran par un hero compact : H1, une phrase, une barre de recherche.
- Une grille de cartes **Solutions** (logos `logo4_3.ext.datama.*.png` existants) et une grille **BI tools**.
- Un bloc **Latest news** : dernière note de version et dernière astuce, tirées automatiquement de `_posts`.
- Vidéos en intégration responsive (16:9) avec chargement différé.

### 4.3 Composants (includes Liquid)
| Composant | Rendu | Remplace |
|---|---|---|
| `callout` (note / tip / warning) | Bordure gauche + icône, couleurs azure / aqua / coral | `info-box`, citations `>` détournées |
| `figure` | Image centrée, légende, `loading="lazy"`, zoom au clic | `<center><img …></center>` + `<br>` |
| `video` | MP4/WebM en boucle, sans son | GIF lourds |
| `cards` | Grille de liens avec icône | Listes de liens à puces |
| `steps` | Étapes numérotées, pastille aqua | Listes « 1. 2. 3. » |

Le zoom au clic et le bouton copier demandent un peu de JS, sans jQuery.

### 4.4 Pages FR existantes
- Les astuces FR gardent leurs URL `/fr/…`.
- Un petit lien **EN ⇄ FR** s'affiche seulement sur les pages qui ont une jumelle (appariées par un champ de frontmatter, par exemple `translation_key`), avec les balises `hreflang`.
- Aucun sélecteur de langue global.

---

## 5. Bonnes pratiques et maintenance

### Rédaction
- Un **guide de style** court (`CONTRIBUTING.md`) : ton, casse des titres, vocabulaire figé (*WebApp*, *Google Sheets™*, *Metrics relation*…), format des captures. Il doit s'accorder avec la règle Cursor `.cursor/…/docs-cursor-rule.mdc` et les modèles `dev/templates_posts/`.
- **Frontmatter standard** : `title` et `description` obligatoires, plus des `keywords` pour la recherche.
- Plus de `<center>` / `<br>` dans les nouvelles pages. Pour les pages existantes, la migration se fait page par page, quand on y touche.

### Technique (sans changer les URL)
- **Un seul layout de base** (`_layouts/base.html` : head, header, footer). `default`, `page`, `new-page` et `post` en héritent ; les pages n'ont pas besoin d'être modifiées.
- Liens via le filtre `relative_url`, pour supprimer le `//docs`. Cela change la forme du lien, pas l'adresse de la page.
- Activer **`jekyll-sitemap`** et **`jekyll-seo-tag`** (tous deux autorisés par GitHub Pages) et supprimer le `sitemap.xml` manuel, après avoir vérifié qu'il liste les mêmes URL.
- Retirer `user-scalable=no` et revoir les `alt` des images.
- Médias : convertir les GIF les plus lourds en MP4/WebM, ajouter `loading="lazy"` partout. Les anciens fichiers peuvent rester en place si des liens externes pointent dessus.
- Remplacer Font Awesome 5 par des icônes SVG inline, retirer jQuery si `sws.js` et `main.js` peuvent s'en passer, et nettoyer les scopes obsolètes de la recherche (`shiny`, `old-ui`).
- Charger le chat HubSpot en différé.

### Qualité automatisée (optionnel, lot 5)
- Une GitHub Action qui construit le site à chaque PR et lance **html-proofer** (liens cassés, `alt` manquants) et **cspell** (coquilles).
- Le déploiement peut rester sur GitHub Pages classique : l'Action ne sert qu'à vérifier.

---

## 6. Feuille de route (option A)

| Lot | Contenu | Effort estimé |
|---|---|---|
| **0. Quick wins** | Coquilles et marqueurs du menu, `//docs` → `relative_url`, `user-scalable`, descriptions manquantes, bandeau sur les pages héritées, `jekyll-sitemap` / `jekyll-seo-tag` | 1–2 j |
| **1. Identité** | `_tokens.scss`, Montserrat + Blimone, `base.html` unique, header/footer alignés sur le site, liens, boutons, 404 | 2–3 j |
| **2. Menu** | Regroupements retenus au §3, Privacy/ToS vers le footer, une seule entrée Pricing, contenus partagés via `_includes/shared/` | 1–2 j |
| **3. Composants** | Sommaire « On this page », précédent/suivant, callout, figure, video, cards, steps, feedback, « Edit on GitHub », lien EN ⇄ FR | 3–4 j |
| **4. Accueil** | Nouvelle `index.md` (hero compact, cartes, dernières nouveautés) | 1–2 j |
| **5. Contenu & qualité** | Migration progressive des pages vers les composants (Compare en premier), GIF → vidéo, CI html-proofer + cspell | Continu |

Total des lots 0 à 4 : **8 à 13 jours**. Chaque lot est livrable seul, dans sa propre PR.

---

## 7. Garde-fous « URL inchangées »
- Aucun `git mv` ni suppression de page `.md` ou `.html`.
- Aucun changement de `permalink` (ni dans `_config.yml`, ni dans les frontmatters).
- Vérification à chaque lot : on compare la liste des URL produites par le build (`_site/**/*.html`) avant et après. Le seul écart toléré est un nouveau fichier.
