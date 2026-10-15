# Refonte de la documentation Datama : arborescence, look & feel, bonnes pratiques

> Document de proposition, sans code. Branche `docs_tree_structure`.
> Le dossier `_proposals/` commence par `_` : Jekyll ne le publie pas.

---

## 1. Constat (audit du repo `docs`)

### Stack
- Jekyll 4.3 avec le thème `minima` déclaré mais presque entièrement surchargé par du SCSS maison (`_sass/main.scss`, 620 lignes).
- jQuery, Font Awesome **5.15** (2021), un moteur de recherche maison (`sws.js`), Open Sans et Montserrat.
- 4 layouts (`default`, `page`, `new-page`, `post`) qui dupliquent chacun le `<head>`.
- Pas de dossier `.github/` : le site est probablement construit par GitHub Pages en mode « classique », qui n'accepte que les plugins de la liste blanche.

### Arborescence (`_data/navigation.yml`)
| Problème | Détail |
|---|---|
| Taille | **367 entrées**, 14 racines, jusqu'à **6 niveaux** de profondeur |
| Duplication N×M | Chaque solution × chaque outil BI a sa page (Compare on Looker Studio, Detect on Looker Studio…), **et** la section *Marketplace* reliste ces mêmes pages par outil |
| « Pricing Plan » | Répété environ 17 fois dans le menu |
| Subheader | *Dimension comparison / Dimension Helper / Filters / Metrics relation / Settings* est redocumenté 5 fois (General, Compare, Detect, Pivot, Assess, Journey) |
| Présentation dans les données | `type: bold / separated / h3 / h4` : la hiérarchie visuelle est saisie à la main au lieu d'être déduite de la profondeur |
| Bruit de travail | Marqueurs `#done`, `#under construction`, `# mettre les images à jour`, gros blocs commentés |
| Coquilles visibles | *Simgle*, *Markeplace*, *Signifiance*, *Analise Sequences*, *Google Google BigQuery* |
| Incohérences | « General » contient l'interface **et** les plans/On-Premise/OpenAI ; Calendar, Explore et Spreadsheet sont des racines au même niveau que les solutions ; Privacy/ToS sont dans le menu principal |

### Contenu et hygiène
- **629** balises `<center>` et **1004** `<br>` dans le Markdown : la mise en page est faite à la main.
- **48** pages de `core_app/` et `extensions/` sans `description` (SEO, aperçus de liens).
- Pages héritées toujours en ligne : `core_app.md`, `web_application.md` et `home.md` pointent vers *Impact* et *Source* (anciennes solutions) ; plusieurs `_includes/*_old.md`.
- Liens construits avec `{{site.url}}/{{site.baseurl}}` alors que `baseurl` vaut déjà `/docs` : cela produit des URL `…github.io//docs/…`.
- Domaines mélangés : `Datama.fr`, `datama.io`, `solutions.Datama.fr`, `Datama-solutions.github.io`.
- Textes alternatifs génériques (« logo impact » sur des captures sans rapport).
- `user-scalable=no` dans 6 layouts : le zoom est bloqué sur mobile (problème d'accessibilité).
- Iframes YouTube en largeur fixe de 800 px (débordent sur mobile).
- Environ **560 Mo de GIF** : pages lourdes et lentes.
- `sitemap.xml` statique de 42 Ko maintenu à la main (`jekyll-sitemap` est dans le Gemfile mais n'est pas activé).
- La recherche référence des scopes obsolètes (`shiny`, `old-ui`).

### Look & feel
- La page d'accueil s'ouvre sur un hero plein écran (« Smart analytics. Documented ») : le contenu utile est sous la ligne de flottaison.
- Il manque les standards actuels d'un site de documentation : sommaire « Sur cette page », boutons précédent/suivant, date de mise à jour, « Modifier sur GitHub », retour « Cette page vous a aidé ? », encadrés typés, onglets, bouton de copie sur le code, zoom sur les captures, mode sombre.
- Typographie et couleurs proches mais pas alignées avec le nouveau site public.

---

## 2. Identité à reprendre depuis `public-website`

Source : `public-website/tailwind.config.ts`, `src/app/globals.css`, `src/fonts/`, `public/brand/`.

### Couleurs (tokens)
| Token | Valeur | Usage proposé dans la doc |
|---|---|---|
| `pine` | `#00484A` | Texte des titres, liens, boutons principaux, élément actif du menu |
| `pine-deep` | `#02292B` | Footer, fond du mode sombre |
| `pine-soft` | `#33686A` | Texte secondaire, breadcrumb |
| `aqua` | `#16D0B4` | Accents : soulignement des liens, barre de l'élément actif, focus, sélection |
| `aqua-dark` | `#0EA893` | Survol |
| `aqua-soft` / `aqua-mist` | `#E3F9F4` / `#F3FBF9` | Fond de la sidebar, encadrés « Astuce », cartes |
| `coral` / `coral-soft` | `#F8663C` / `#FEEFE9` | Encadrés « Attention », badges « Déprécié » (avec parcimonie, comme sur le site) |
| `azure` / `azure-soft` | `#4285F4` / `#EAF1FE` | Encadrés « Note / Info » |

> ⚠️ **Accessibilité :** l'aqua `#16D0B4` sur fond blanc a un contraste d'environ 1,9:1, sous le minimum WCAG (4,5:1 pour du texte). Il faut le garder pour les **accents** (bordures, soulignements, icônes, fonds), jamais pour du texte courant. Les liens restent en `pine`, soulignés en `aqua`.

### Typographie
- **Montserrat** pour le corps et l'interface (déjà utilisé par le site). Corps de texte à 16–17 px, interligne 1,7, largeur de lecture d'environ 72 caractères (≈ 760 px).
- **Blimone** (`public-website/src/fonts/*.woff2`) pour **H1 et le hero uniquement**, comme les `font-display` du site. Pas en H3/H4, où elle nuirait à la lisibilité d'un contenu technique.
- Une police monospace système pour le code.
- Abandon d'Open Sans.

### Formes et composants
- Boutons en pilule (`rounded-full`) : *primary* fond pine, *accent* fond aqua + texte pine, *ghost* bordure `pine/15`.
- Cartes : rayon de 16 px, ombre `card` du site (`0 1px 2px rgba(0,72,74,.05), 0 8px 24px rgba(0,72,74,.07)`).
- Header collant, fond blanc à 85 % avec flou (`bg-white/85 backdrop-blur-md`), bordure `pine/5`.
- `::selection` et `:focus-visible` identiques au site.
- Éléments de marque : `Logo_Datama_Vert_Fonce.svg` / `Blanc.svg`, les « bulles » et les « yeux » pour la page d'accueil, la 404 et les états vides.

**Mise en œuvre :** un fichier `_sass/_tokens.scss` qui expose ces valeurs en variables CSS (`--pine`, `--aqua`…), avec la même règle que le site : « aucun code couleur en dur ailleurs ». Une refonte de marque se fera alors en modifiant un seul fichier dans chaque repo.

---

## 3. Nouvelle arborescence proposée

### Principes
1. **3 niveaux maximum** dans la sidebar ; le reste passe par le sommaire « Sur cette page ».
2. **Organisation par intention utilisateur** (inspirée de Diátaxis : *démarrer → faire → comprendre → référence*), et non par l'historique des produits.
3. **On documente une chose une seule fois** : le subheader commun, les plans tarifaires et l'installation par outil BI ont chacun une page unique, liée depuis les autres.
4. **Même plan de page pour chaque solution** : Vue d'ensemble → Concepts & modèle → Utiliser dans la WebApp → Réglages (référence) → Cas d'usage.
5. La hiérarchie visuelle est **déduite de la profondeur**, et non plus saisie (`type: h3/h4`).

### Arbre cible
```
🚀 Démarrer
   ├─ Qu'est-ce que Datama ?
   ├─ Démarrage rapide (10 min)              ← ex « Get Started »
   ├─ Concepts clés                           (workbook, dataset, metrics relation, market equation, KPI/denominator)
   └─ Glossaire

🧰 Préparer ses données
   ├─ Datasets & Prep                         ← ex Prep (Dataset, Refine, Calculated fields, Block output…)
   ├─ Connecteurs de sources                  (1 page index + 1 page par source : GSheets, Excel, CSV, GA4, BigQuery, Snowflake, Redshift, Piano, Metabase, Facebook, Trends, Mail, AI dataset)
   ├─ Calendrier                              ← ex racine « Calendar »
   └─ Export d'analyse

📊 Analyser : les solutions
   ├─ Compare      (Vue d'ensemble · Concepts & modèle · WebApp · Réglages · What-if · Sub-steps · Out of scope)
   ├─ Detect       (même plan)
   ├─ Assess       (même plan ; les modèles Frequentist/Bayesian/… deviennent des sections)
   ├─ Pivot        (même plan ; les 9 types de graphiques regroupés dans « Visualisations »)
   ├─ Journey      (même plan)
   ├─ Explore      (même plan)
   └─ Spreadsheet  (même plan)

🧭 Interface commune
   ├─ Page d'accueil & workbooks
   ├─ Barre d'outils d'une solution           ← subheader : Comparaison, Dimension Helper, Filtres, Metrics relation, Réglages (documenté UNE fois)
   └─ Exemples de workbooks / cas d'usage

🔌 Intégrations
   ├─ Vue d'ensemble du Data Viz Plugin        (matrice solution × outil)
   ├─ Looker Studio   ┐
   ├─ Power BI        │  1 page par outil : installation, licence, ajout du visuel,
   ├─ Tableau         │  puis des ONGLETS Compare / Detect / Assess / Explore / Spreadsheet
   ├─ Qlik            │  → remplace les pages N×M ET la section « Marketplace »
   ├─ Google Sheets™  │
   ├─ Excel           │
   ├─ PowerPoint      ┘
   ├─ Skills IA (Claude, Cursor…)
   └─ OpenAI

🔐 Compte & administration
   ├─ Plans & tarifs                          ← les ~17 pages « Pricing Plan » fusionnées
   ├─ Clés de licence
   ├─ Administration & limites des workbooks
   └─ Datama On-Premise

📰 Nouveautés
   ├─ Notes de version
   ├─ Astuce de la semaine (EN / FR)
   └─ Cas client du mois

(Footer uniquement) Confidentialité · Conditions d'utilisation · Licence
```

### Ce que ça change
| | Avant | Après |
|---|---|---|
| Entrées de menu | 367 | environ 90 |
| Profondeur max | 6 | 3 |
| Pages « Pricing Plan » | ~17 | 1 |
| Documentation du subheader | ×6 | ×1 |
| Accès à « Compare sur Power BI » | 2 chemins (Compare › Extensions, Marketplace › Power BI) | 1 page Power BI, onglet Compare, liée depuis Compare › WebApp et la matrice |

### Conserver les URL
- Plugin **`jekyll-redirect-from`** (autorisé par GitHub Pages) : un `redirect_from:` dans le frontmatter de chaque page déplacée. Les liens externes, ceux de l'app, les extensions BI et le référencement continuent de fonctionner.
- Avant de déplacer quoi que ce soit, on produit une **table de correspondance ancienne URL → nouvelle URL** (générée depuis `navigation.yml` et `sitemap.xml`), relue par l'équipe produit.
- Attention aux liens « help » codés en dur dans l'app et dans les extensions (repo `datama-os`) : à recenser avant la migration.

---

## 4. Look & feel : propositions

### 4.1 Structure de page (3 colonnes)
```
┌──────────────────────────────── Header collant (logo · recherche ⌘K · Solutions · Intégrations · Nouveautés · [Essayer Datama]) ┐
│ Sidebar 280px      │  Breadcrumb                                   │ Sur cette page  │
│ (sections + icônes,│  H1 Blimone                                   │ (H2/H3, collant,│
│  ligne d'indent,   │  Chapô (description du frontmatter)           │  section active │
│  actif = barre     │  Badges : WebApp · Looker · Power BI · Beta   │  surlignée)     │
│  aqua + fond mist) │  Contenu (max 760px)                          │                 │
│                    │  ─────────                                    │                 │
│                    │  ← Précédent        Suivant →                 │                 │
│                    │  Cette page vous a aidé ? 👍 👎 · Modifier sur GitHub · MAJ le … │
└────────────────────┴───────────────────────────────────────────────┴─────────────────┘
Footer pine-deep (liens site, légal, réseaux)
```
- Sur mobile : la sidebar devient un tiroir (burger) et le sommaire devient un menu déroulant « Sur cette page » en haut de l'article.

### 4.2 Page d'accueil
- Supprimer le hero plein écran. Le remplacer par un **hero compact** : H1 Blimone, une phrase, une **grande barre de recherche**, fond `bg-glow-hero` du site.
- **Grille de cartes « Solutions »** (7 cartes avec les logos `logo4_3.ext.datama.*.png` existants et une ligne « à quoi ça sert »).
- **Grille « Intégrations »** avec les logos des outils BI.
- **« Articles populaires »** et **« Dernières nouveautés »** (dernière note de version + dernière astuce, tirées automatiquement de `_posts`).
- Les deux vidéos passent dans une section « Voir Datama en action », en intégration responsive (16:9) et chargement différé.

### 4.3 Composants de contenu (includes Liquid réutilisables)
| Composant | Rendu | Remplace |
|---|---|---|
| `callout` (note / astuce / attention / danger) | Bordure gauche + icône, couleurs azure / aqua / coral | `info-box`, citations `>` détournées |
| `figure` | Image centrée, légende, `loading="lazy"`, zoom au clic, cadre léger | `<center><img …></center>` + `<br>` |
| `video` | MP4/WebM en boucle, sans son, lecture au survol ou à l'entrée dans l'écran | GIF de plusieurs Mo |
| `tabs` | Onglets (WebApp / Looker / Power BI…) | Pages N×M |
| `steps` | Étapes numérotées avec pastille aqua | Listes « 1. 2. 3. » + captures |
| `cards` | Grille de liens avec icône et description | Listes de liens à puces |
| `badge` | New / Beta / Extension / Déprécié | — |
| Code | Coloration syntaxique et bouton copier | — |

### 4.4 Détails visuels
- Sidebar : icône par section racine (Lucide / FA6), sections fermées par défaut sauf la branche courante (c'est déjà en partie le cas), compteur ou badge « New ».
- Titres H2 avec ancre `#` au survol (lien copiable).
- Captures : convention commune (largeur max, coins arrondis à 8 px, ombre légère, annotations en aqua/coral).
- 404 à l'identité de marque (yeux Datama, recherche, liens populaires).
- Mode sombre (optionnel, phase 2) : fond `pine-deep`, texte blanc à 90 %, accents aqua.

---

## 5. Bonnes pratiques et maintenance

### Rédaction
- **Guide de style** court (`CONTRIBUTING.md`) : ton, tutoiement ou vouvoiement, casse des titres, vocabulaire figé (*WebApp*, *Google Sheets™*, *Metrics relation*…), format des captures, une idée par page.
- **Frontmatter standard** : `title`, `description` (obligatoire), `solution`, `platforms`, `redirect_from`, `last_reviewed`.
- Plus de HTML de mise en page dans le Markdown (`<center>`, `<br>`) : uniquement des includes.
- Le statut de rédaction (`#done`, « images à mettre à jour ») sort du YAML et passe dans des issues GitHub ou un tableau de projet.
- Corriger les coquilles listées en §1.

### Technique
- **Un seul layout de base** (`base.html` : head, header, footer) et des variantes (`doc`, `post`, `home`).
- Liens via le filtre `relative_url`, pour supprimer le `//docs`.
- Activer **`jekyll-sitemap`** et **`jekyll-seo-tag`** (canonical, Open Graph, Twitter cards), supprimer le `sitemap.xml` manuel. Ajouter un `llms.txt` comme sur le site public.
- Retirer `user-scalable=no`. Revoir les `alt` des images.
- Médias : GIF → MP4/WebM, PNG → WebP, `loading="lazy"`. Objectif : diviser par 5 à 10 le poids des pages les plus lourdes.
- Supprimer jQuery et Font Awesome 5 (icônes SVG inline). Rendre la recherche moins dépendante d'un script maison, ou la remplacer (voir §6).
- Charger le chat HubSpot de façon différée (au clic ou après interaction) pour ne pas pénaliser le temps de chargement.
- Supprimer les pages héritées (`core_app.md`, `web_application.md`, `home.md`, `_includes/*_old.md`), avec redirections.

### Qualité automatisée (GitHub Actions)
- Build Jekyll à chaque PR.
- **html-proofer** : liens cassés, images sans `alt`, ancres mortes.
- **markdownlint** et **cspell** (dictionnaire Datama) pour les coquilles.
- Le build passe alors par Actions plutôt que par GitHub Pages classique, ce qui débloque aussi des plugins hors liste blanche (`jekyll-last-modified-at` pour la date de mise à jour).

---

## 6. Option structurante : rester sur Jekyll ou migrer ?

| | **A. Faire évoluer Jekyll** | **B. Migrer vers Astro Starlight** |
|---|---|---|
| Sommaire, précédent/suivant, mode sombre, encadrés, onglets, copie du code | À développer (includes + JS) | Inclus nativement |
| Recherche | `sws.js` maison à refaire | Pagefind, plein texte, hors-ligne, très rapide |
| i18n EN/FR | Bricolage par dossiers | Natif (utile pour les astuces FR/EN) |
| Identité du site | Tokens SCSS | Tokens CSS + police Blimone, assez proche de la stack Tailwind du site |
| Hébergement | GitHub Pages (inchangé) | Statique, déployable sur **Cloudflare** comme `public-website` (cohérence de l'infrastructure) |
| Coût de migration | Faible au départ, mais tout le reste est à construire | ~220 pages + ~290 posts en Markdown à convertir (Liquid → MDX, en grande partie automatisable) |
| Risque | Faible | Moyen (URL à rediriger, à tester) |

**Recommandation :** si l'objectif est un vrai saut de qualité, **B**. La plupart des points de la §4 sont fournis par Starlight au lieu d'être recodés, et la doc rejoint l'infrastructure Cloudflare du site. Si l'on veut un gain rapide sans changer d'outil, **A** avec les lots 0 à 2 ci-dessous. La nouvelle arborescence (§3) est valable dans les deux cas.

---

## 7. Feuille de route proposée

| Lot | Contenu | Effort estimé | Dépend de |
|---|---|---|---|
| **0. Quick wins** | Coquilles, marqueurs `#done`, `//docs`, `user-scalable`, descriptions manquantes, pages héritées, `jekyll-sitemap` / `seo-tag` | 1–2 j | — |
| **1. Identité** | `_tokens.scss`, Montserrat + Blimone, header/footer alignés sur le site, boutons, liens, 404 | 2–3 j | Choix A/B |
| **2. Arborescence** | Table de correspondance des URL, nouveau `navigation.yml` (≤ 3 niveaux), fusion Pricing / subheader / Marketplace, `redirect_from` | 4–5 j | Validation de l'arbre §3 |
| **3. Composants** | Callouts, figure, vidéo, onglets, étapes, cartes, sommaire, précédent/suivant, feedback, « Modifier sur GitHub » | 4–5 j (A) / ~1 j (B) | Lot 1 |
| **4. Accueil & recherche** | Nouvelle page d'accueil, recherche ⌘K | 2–3 j | Lots 1 et 3 |
| **5. Contenu & médias** | Migration progressive `<center>/<br>` → includes, GIF → vidéo, plan de page standard par solution | Continu, solution par solution (Compare en premier) | Lot 3 |
| **6. Qualité** | CI : html-proofer, markdownlint, cspell ; guide de style | 1–2 j | — |

---

## 8. Décisions attendues
1. **Option A (Jekyll) ou B (Starlight)** ?
2. Validation (ou ajustements) de **l'arbre cible** de la §3, notamment la fusion des pages par outil BI en pages avec onglets.
3. **Langue** de la documentation : EN seul (comme aujourd'hui) ou EN + FR ?
4. **Hébergement / domaine** : rester sur `datama-solutions.github.io/docs` ou passer sur un sous-domaine (`docs.datama.io`) servi par Cloudflare ?
5. Faut-il recenser les **liens d'aide codés en dur** dans l'app et les extensions (`datama-os`) avant de déplacer les pages ?
