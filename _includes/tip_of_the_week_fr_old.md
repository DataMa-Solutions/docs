## Tip of the week #83: Smart Dimension
Dans la Waterfall de Datama Compare, quand vous zoomez sur une étape vous pouvez observer la variation de chaque segment d'une dimension. Mais il peut être intéressant d'aller se concentrer sur une combinaison de dimensions, pour cela Datama vous propose la Smart Dimension 🤓: qui va pour chaque étape de la Waterfall, identifier la paire de dimensions la plus pertinente pour expliquer la variation des performances.
Par exemple: Considérez le scénario dans lequel votre performance est entièrement expliquée par une baisse de performance sur les utilisateurs mobiles avec le navigateur Firefox. En activant l'option Smart dimension, Datama Compare identifiera la dimension Device*Browser comme la dimension la plus pertinente 🎯. Cependant, si l'option Smart Dimension n'est pas activée, Datama Compare attribuera la variation de performance à la dimension Device ou Browser.
NB: il existe la Combined Dimension qui vient recouper non pas 2 dimensions mais toutes les dimensions disponibles dans le dataset.
![Tip 83]({{site.url}}{{site.baseurl}}/assets/images/tip/83.gif)

## Tip of the week #82: Looker Studio extension “Save in Datama”
Datama est disponible sur Looker Studio comme une extension, si vous ne l’utilisez pas encore et que cela vous intéresse voici le lien vers la documentation pour l'ajouter à votre Dashboard et n’hésitez pas à contacter le Service Client Datama pour avoir la clé de licence associée à votre compte 😉
Vous pouvez désormais avoir votre Use Case à la fois dans Looker Studio et dans Datama grâce à l’option "Save in Datama" 💾 que vous trouverez dans les trois petits points en haut à droite de l’extension.
Cette option vous permettra de personnaliser votre Waterfall avec tous les paramètres disponibles dans Datama pour améliorer la visualisation dans LookerStudio, vous pourrez par exemple modifier:
  * les couleurs 🎨
  * le niveau d’agrégation
  * le nom des étapes
  * …
![Tip 82]({{site.url}}{{site.baseurl}}/assets/images/tip/82.gif)

## Tip of the week #81: Drill Down par Dimensions puis par Etapes
Jusqu'à présent, Datama Compare analysait une variation d'abord par étapes de l'équation de marché, puis par dimension à l'intérieur d'une étape. Vous pouvez désormais décider d'inverser ce schéma et de distribuer la variation totale par segment ayant le plus d'impact dans n'importe quelle dimension, puis par étape dans chaque segment.
Pour activer cette option, il faut aller dans Settings, puis choisir parmi les trois options suivantes :
  * « Auto » qui vous permet avec un clic droit sur les barres bleues de la Waterfall de passer d’un état à l’autre 🖱️
  * « Steps than Dimensions » (par défaut)
  * « Dimensions than Steps » (pour forcer la vue Dimension puis étapes)
Quand vous êtes en mode « Auto », Datama vous donne même une évaluation de ce qui pourrait être le schéma le plus intéressant avec un score d'intérêt classant les deux approches 😉
![Tip 81]({{site.url}}{{site.baseurl}}/assets/images/tip/81.gif)

## Tip of the week #80: Compact Numbers
Petite astuce qui allègera le visuel de vos graphiques quand vous avez des grands nombres, en allant dans les « Settings » puis en validant l’option « Compact Numbers », vous allez transformer les labels en millier, millions ou plus par tranche de millier atteinte 😉
Par exemple:
  * si vous avez un revenue de 45 548€, avec l’option "Compact numbers" il apparaitra sous la forme 45.5k
  * si vous avez 11 342 764 visiteurs cela deviendra 11.3M
  * ...
![Tip 80]({{site.url}}{{site.baseurl}}/assets/images/tip/80.gif)

## Tip of the week #79: Personnalisation de l'indication de performance d'un segment sur la waterfall
Par défaut, Datama affiche après le nom d'un segment sa variation relative par rapport à la variation moyenne (e.g. organic (x2.43)). Vous avez désormais la possibilité de modifier dans les "Settings" ce complément de texte par l'une de ces trois options :
  * Afficher la variation relative à la moyenne (par défaut)
  * Afficher la variation en pourcentage
  * Le désactiver
Quel que soit l’option que vous choisirez, toutes les informations resteront disponibles lors dans le label quand vous passerez la souris sur un segment 😉
![Tip 79]({{site.url}}{{site.baseurl}}/assets/images/tip/79.gif)

## Tip of the week #78: Table de Comparison dans Datama Journey
En effectuant une analyse de parcours utilisateur dans Datama Journey, découvrez notre nouvelle fonctionnalité : La table interactive. 😎
En passant votre souris sur les différentes étapes du Sunburst, cette table vous permettra de :
  * Visualiser la proportion d'utilisateurs à chaque étape du parcours sélectionné.
  * Dans le cadre d'une analyse comparative, la table offre une vue en pourcentage d'utilisateurs entre vos deux éléments de comparaison, ainsi que la vue du différentiel en points. 😉
![Tip 78]({{site.url}}{{site.baseurl}}/assets/images/tip/78.gif)

## Tip of the week #77: Filtrer avec des REGEXP
Dans une dimension quand vous avez de nombreux segments, il est long de sélectionner/désélectionner les segments que vous souhaitez filtrer, néanmoins vous avez la possibilité dans les « advance settings » de filtrer grâce une REGEXP (Expression Régulière) pour gagner du temps 😉
Voici quelques cas d’usage :
  * Sur les parcours utilisateur dans Journey, si l’on souhaite filtrer tous les parcours qui sont passés par une certaine page (ex: ^Search correspond aux parcours des utilisateurs qui ont commencé par la Search)
  * Sur les dates, si l’on souhaite filtrer que les dates contenant l’année 2023 ou un certain mois (ex: 2023-03-.* pour tout le mois de mars 2023)
  * Sur les campagnes media (ex: paid_search_.*  pour les campagnes search)
![Tip 77]({{site.url}}{{site.baseurl}}/assets/images/tip/77.gif)

## Tip of the week #76: Dimension Helper
Connaissez-vous le « Dimension Helper » ? 🤔 Ce dernier vous permettra de voir de manière synthétique la valeur (en ligne) et la distribution (en barre) des KPIs de votre équation de marché sur les segments d'une dimension 🤩
Pour l’ouvrir, il suffit d’aller dans l’onglet "Filters" de la barre du haut, vous pourrez alors :
  * sélectionner votre dimension
  * sélectionner l’étape de l’équation de marché que vous souhaitez suivre
  * pour avoir une meilleure comparaison, sélectionner la vue « Overlay »
  * appliquer des filtres sur les différentes dimensions à votre disposition
![Tip 76]({{site.url}}{{site.baseurl}}/assets/images/tip/76.gif)

## Tip of the week #75: Affichage de la waterfall en points
Dans Datama Compare, vous pouvez désormais afficher votre Waterfall en points (%) au lieu de la vue en volume des KPI totaux 🤩
Pour passer d’une vue à l’autre, il vous suffit de faire un clic droit de la souris sur les barres totales bleues et sélectionner «% Display impact in points» 😉
![Tip 75]({{site.url}}{{site.baseurl}}/assets/images/tip/75.gif)

## Tip of the week #74: Secondary Comparison disponible dans la Table
Datama continue d’améliorer ses extensions dans les outils de visualisation. Dans Looker Studio vous pouvez maintenant activer la fonctionnalité "comparison date range" pour comparer B (la période que vous sélectionnez dans le filtre) vs A (la période de comparaison que vous sélectionnez dans le menu déroulant : previous period, previous year,...), ce qui rendra son utilisation plus dynamique 😃
![Tip 74]({{site.url}}{{site.baseurl}}/assets/images/tip/74.gif)

## Tip of the week #73: Secondary Comparison disponible dans la Table
Dans Datama Compare vous avez la possibilité de comparer une variation avec une autre variation, c’est ce qui vous est proposé avec le "Secondary Comparison". C’est utile lorsque vous comparez par exemple une période par rapport à une autre et que vous voulez mettre en relief cette comparaison avec ce qui c’était passé sur les mêmes périodes l’année précédente.
La dernière release a ajouté la "Secondary Comparison" à la Table, maintenant quand vous l'activez une ligne sera ajoutée sous chaque segment correspondant à la variation sur cette seconde comparaison 😉
![Tip 73]({{site.url}}{{site.baseurl}}/assets/images/tip/73.gif)

## Tip of the week #72: CSV Skip Raw
Petite amélioration dans Datama Prep, maintenant vous avez une option pour ne pas prendre en compte un certain nombre de lignes dans votre CSV. Par exemple, si vous avez un titre lorsque vous faites l’export du CSV, plus besoin de supprimer les premières lignes du fichier avant de l'importer dans Datama, vous pouvez sélectionner le nombre de lignes à ne pas prendre en compte 😉
![Tip 72]({{site.url}}{{site.baseurl}}/assets/images/tip/72.gif)

## Tip of the week #71:
Sur la nouvelle version de Datama dans la solution Compare, la table disponible dans la deuxième slide sous la Waterfall a été améliorée 🥳
  * Avec l’ajout d’une expansion de chaque colonne et d'un petit cadenas 🔒 vous permettant de bloquer l’ouverture d'une colonne pour en avoir plusieurs d'ouvertes
  * Avec l'ajout de nouvelle colonnes: Rank et Rank Change, qui permet de savoir le ranking d'un segment sur une métrique (eg. le desktop est n°1 en conversion) et la variation de ce rank entre les deux points de comparaison (e.g. le desktop était n°2 en conversion et c'est maintenant le n°1)
  * Avec l'implémentation d'un menu de configuration de la table qui vous permettra:
    * De changer l’ordre des colonnes
    * D’afficher les colonnes que vous souhaitez visualiser
    * D'appliquer une mise en forme conditionnelle (couleur, barre, flèche up & down ...)
![Tip 71]({{site.url}}{{site.baseurl}}/assets/images/tip/71.gif)

## Tip of the week #70
Avec l’arrivée de la nouvelle version de Datama en plus de la refonte de l’interface graphique, nous avons également amélioré le fonctionnement des "Use Cases" 💡
  * En effet, Datama Prep est devenu l'outil unique de chargement et de transformation de la donnée
  * Et nous avons combiné les "Use Cases" et les "Flows" pour ne créer plus qu'un seul élément les "workbooks"
Et ceci à des impacts (positifs, bien entendu 🤩):
  * Uniquement vos anciens Flow crée via Datama Prep ont été basculés dans la nouvelle solution
    * heureusement l’équipe Datama vous accompagnera pour vous aider à faire la migration des autres Use Cases au cours des prochains mois 😉
  * Mais surtout cette évolution permet de clarifier les informations de vos analyses, en affichant depuis la page d'accueil pour chaque Workbook :
    * une vue claire de la (ou des) source de données connectée
    * des différents exports programmés (Mail, Slack, statics URL, ...)
    * de la solution favorite utilisée pour cette analyse
    * du dossier auquel elle appartient
    * et beaucoup d'autres informations à venir 🎁
N'hésitez pas à nous contacter pour en savoir plus sur cette migration... et surtout... allez jeter un coup d'œil sur la nouvelle [platforme](https://websso.Datama.io/)!!
![Tip 70]({{site.url}}{{site.baseurl}}/assets/images/tip/70.gif)

## Tip of the week #69
Vous avez peut-être remarqué, dans la [nouvelle version de Datama](https://websso.Datama.io/), la solution "Impact" n’apparait plus. Elle a été divisée en deux solutions distinctes "Assess" et "Detect" pour répondre à deux besoins :
  * Assess : vous permettra de déterminer la significativité de vos variations aux travers de différents tests (Bayesian, Bootstrap, Frequentist) au niveau global et sur chacune de vos dimensions
  * Detect : se focalisera sur la détection d’anomalie que ce soit l’un de vos KPIs ou sur tous avec une explication sur l’origine de l’anomalie 🔍
![Tip 69]({{site.url}}{{site.baseurl}}/assets/images/tip/69.png)

## Tip of the week #68
Dans la [nouvelle version de Datama](https://websso.Datama.io/), l'ancien menu de gauche, où étaient définis les filtres, est maintenant dans la barre du haut.
En cliquant sur le bouton "filtres", toutes les dimensions filtrables existant dans votre jeu de données apparaitront.
Le « Helper » 📊 est une aide graphique pour voir la répartition des éléments de votre dimension sur l'une des étapes.
Les filtres appliqués apparaitront dans la barre du haut à côté du bouton "Filter". Vous pouvez ensuite modifier un filtre en cliquant dessus ou le supprimer en cliquant sur la petite poubelle 😉
![Tip 68]({{site.url}}{{site.baseurl}}/assets/images/tip/68.gif)

## Tip of the week #67
Dans la nouvelle version de Datama, le flow Prep fait partie intégrante de votre use case. De ce fait, vous pouvez naviguer de ce dernier grâce à la « side bar » de gauche vers la ou les solutions (Compare, Detect, Pivot ...) que vous souhaitez utiliser.
De plus une icone favoris ⭐, vous permet de définir la solution que vous voulez ouvrir par défaut depuis la Home Page 😉
![Tip 67]({{site.url}}{{site.baseurl}}/assets/images/tip/67.gif)

## Tip of the week #66
Avec la nouvelle version de Datama arrive une nouvelle Home 😃
En plus des fonctionnalités existantes, vous pouvez désormais:
  * Organiser les uses cases dans des dossiers avec de jolis emojis 📁
  * Retrouver visuellement à quelles sources ils sont connectés (sous le nom de votre use case, il y aura les logos des sources, par exemple: celui de deux Google Sheet et un Google Analytics), s'ils sont schedulés, et s'ils sont exportés
  * Voir quand ils ont été créé/ edités pour la dernière fois
  * Ajouter un lien dans la description du worbook vers de la documentation interne (en cliquant sur les trois petits points en bas à droite et en ajoutant un URL sur "Learn More...")
![Tip 66]({{site.url}}{{site.baseurl}}/assets/images/tip/66.png)

## Tip of the week #65
Quand on compare deux segments dans le cas d’un AB test ou quand on compare deux périodes, on peut se poser la question : la variation est-elle significative? Dans Datama, il vous suffit simplement d’activer dans Settings le toggle « Significance test », vous pouvez ensuite choisir
  * le niveau de confiance que vous souhaitez avoir avec le paramètre
  * le type de test (forecast / volatilité quand vous comparez deux périodes, frequentist/ bayesian quand vous comparez deux variantes d'AB test)
Sur la waterfall, un astérisque apparaitra à côté des variations qui sont significatives, cela s'applique à la fois au KPI principal comme à chacune des étapes 😉
![Tip 65]({{site.url}}{{site.baseurl}}/assets/images/tip/65.gif)

## Tip of the week #64
Dans le cas où vous avez une partie de vos données qui est « non comparable » dans votre analyse Datama Compare (par exemple la fermeture d’un marché), mais vous souhaitez tout de même les voir apparaître à part dans votre Waterfall, pour ne comparer vos KPIs que sur des choses comparables (🍎 to 🍎):
  * Créez une colonne « Scope » contenant la mention « In » pour ce que l’on veut conserver ou « Out » pour ce que l’on souhaite exclure
  * Datama exclura automatiquement le « Out » de l’analyse et le fera apparaître dans un bloc à part de la waterfall, en bleu clair « Out of Scope »
Note: vous pouvez aussi traiter le « Out of scope » comme une étape à part entière en le faisant apparaitre explicitement dans l'équation de marché. Pour information la covariance est maintenant redistribuée que sur les étapes qui ne sont pas indépendantes (pour ne pas mélanger des morceaux de 🍎 avec des 🍐)
![Tip 64]({{site.url}}{{site.baseurl}}/assets/images/tip/64.png)

## Tip of the week #63
Pour faciliter la communication et le partage de l’analyse augmentée, Datama se déploie sur une nouvelle solution de Data Visualisation:
  * Après l’extension Tableau Software,
  * Datama arrive sur Data Studio/Looker Studio 🥳
  * La prochaine étape sur Power BI !
![Tip 63]({{site.url}}{{site.baseurl}}/assets/images/tip/63.gif)

## Tip of the week #62
La nouvelle interface de Datama arrive bientôt! (Stay tuned 😃). Spoiler: elle se base sur l'interface Datama Prep à laquelle vous avez déjà accès. C'est l'occasion de tester Datama Prep si vous ne l'avez pas encore fait!😉
Sur la HomePage, cliquez sur Data Flows puis sur le ➕ et vous pourrez:
  * Retrouver tous les connecteurs que vous aviez et bien d'autres encore (BigQuery, Snowflake, Google Trends ...)
  * Nettoyer et préparer vos colonnes
  * Scheduler l'actualisation de votre source de données
![Tip 62]({{site.url}}{{site.baseurl}}/assets/images/tip/62.png)

## Tip of the week #61
Datama vous propose dans la solution Impact d'analyser la variation pre-post une intervention sur un groupe test. Vous trouverez des cas d'usage quand vous voulez tester:
  * une nouvelle stratégie SEO
  * l'impact d'une nouvelle campagne de publicité
Retrouver l'analyse détailler dans notre [documentation](https://Datama-solutions.github.io/docs/core_app/impact/web_application/dashboard/causal_impact.html)
![Tip 61]({{site.url}}{{site.baseurl}}/assets/images/tip/61.gif)

## Tip of the week #60
Comme dans de nombreux pays, le week-end dernier nous sommes passé à l’heure d’hiver ⌚ Pour éviter toute confusion dans les schedulers sur Datama (par exemple pour Datama Prep, les exports statics ou par mail), l’heure affichée est l’heure en UTC +0, donc indépendante de votre fuseau horaire.
PS : restez au courant des dernières informations grâce aux notifications sur la home page 😉
![Tip 60]({{site.url}}{{site.baseurl}}/assets/images/tip/60.png)

## Tip of the week #59
Que vous soyez sur Compare, Pivot ou Impact, vous avez sûrement vu un segment nommé "Other (<2% of the total)" qui permet de regrouper tous les petits segments en un seul pour alléger la visualisation et l’interprétation des résultats. Néanmoins, vous pouvez régler ce paramètre en allant dans "Settings" → "Aggregation in %", vous pourrez alors:
  * soit augmenter ce niveau d’agrégation jusqu’à 10%
  * soit le diminuer pour rentrer dans le détail de ce segment
![Tip 59]({{site.url}}{{site.baseurl}}/assets/images/tip/59.png)

## Tip of the week #58
Connaissez-vous le dynamic filter sur la Waterfall? Après avoir zoomé sur une étape, faites un clic droit sur un des segments affichés et sélectionnez soit :
  * "Keep only": pour filtrer uniquement sur le segment de la dimension sélectionné
  * "Exclude" : pour exclure le segment en question
Les filtres correspondant se mettent automatiquement à jour dans le menu de gauche 😉
PS: pour revenir à l'état initial, il faut réinitialiser les filtres dans le menu de gauche
![Tip 58]({{site.url}}{{site.baseurl}}/assets/images/tip/58.gif)

## Tip of the week #57
Dans Datama Compare, si vous souhaitez zoomer sur plusieurs étapes en même temps, vous pouvez forcer l'étape ouverte à rester visuellement ouverte sur la dimension sélectionnée, soit:
  * à l’aide du petit cadenas 🔒 en haut à droite de l’étape zoomée
  * avec un clic droit sur l'étape, puis sélectionnez «Lock»
Pour déverrouiller l'étape, refaite la même chose en cliquant sur le cadenas ou avec le click droit vous aurez l’option « Unlock » 🔓
![Tip 57]({{site.url}}{{site.baseurl}}/assets/images/tip/57.gif)

## Tip of the week #56
Dans votre waterfall, si vous souhaitez visualiser plus finement les variations, vous pouvez décaler l'axe des Y pour qu'il ne démarre pas à 0, pour cela il vous suffit de 3 clics:
Aller dans "Settings" → puis "Display Options" → désactiver le toggle: "Y Axis Include 0" et appuyer sur "Entrer" 😉
![Tip 56]({{site.url}}{{site.baseurl}}/assets/images/tip/56.gif)

## Tip of the week #55
N'oubliez pas de sauvegarder votre workbook 💾
Tout ce que vous avez à faire, c'est appuyer sur “Ctrl + S” sur votre clavier pour que cela sauvegarde vos modification dans Datama!
![Tip 55]({{site.url}}{{site.baseurl}}/assets/images/tip/55.png)

## Tip of the week #54
De nouveaux connecteurs sont disponibles dans Datama Prep 🥳
  * L'Email Connector: il permet de récupérer des fichiers CSV depuis vos mails, ce qui vous permet de récupérer simplement des données de différentes plateformes tel que Teads, Forms, Pinterest et bien d'autres encore.
  * Snowflake Connector: avec une simple connexion à votre compte, vous pourrez importer directement votre data Snowflake dans Datama
![Tip 54]({{site.url}}{{site.baseurl}}/assets/images/tip/54.gif)

## Tip of the week #53
In Datama you have the possibility to change the units of your steps and your KPI. Just go to the metric relation menu to change the unit and possibly also the name of your steps.
NB: when you compare a dimension in %, Datama interprets it and displays the % variations in 'pts'.
![Tip 53]({{site.url}}{{site.baseurl}}/assets/images/tip/53.gif)

## Tip of the week #52
Une petite pub pour changer, mais qui pourrait vous intéresser...
Connaissez-vous le système de parrainage chez Datama ?
Parce que nos clients sont nos meilleurs porte-paroles, petit rappel pour ceux qui ne s'en souviennent plus:
  * vous gagnez -20% sur votre licence Datama pendant 1 an pour toute souscription d'une client référencé par vous ! 🥳
  * et les goodies qui vont avec... à vous la doudoune Datama 😊
Au passage on vous partage quelques références Q2 chez vous ou ailleurs, pour vous donner des nouvelles et des idées 💡
![Tip 52]({{site.url}}{{site.baseurl}}/assets/images/tip/52.png)

## Tip of the week #51
Petite astuce pour les utilisateurs de Datama, dans Datama Compare quand vous souhaitez faire un breakdown d’une étape de la Waterfall, Datama vous fera par défaut un split par la dimension avec l’ « interest score » le plus élevé.
Il vous est néanmoins possible de choisir un breakdown par une autre dimension en faisant un clic droit sur l’étape en question et en choisissant « split by …» et vous verrez apparaitre les dimensions disponibles avec l’« interest score » associé. Plus ce dernier est élevé, les variations des segments seront pertinentes
![Tip 51]({{site.url}}{{site.baseurl}}/assets/images/tip/51.gif)

## Tip of the week #50
Envie d’intégrer Datama directement dans vos dashboards? Vous êtes sur :
l’image
* Tableau? Utilisez l’extension Datama dans Tableau (voir la documentation)
l’image
* Power BI? Suivez ce processus pour utiliser l'extention Datama
l’image
* Pour tout autre solution de datavisualisation en ligne comme DataStudio, vous pouvez utiliser les exports statics, que vous pouvez plannifier (avec l’option «Automatically Schedule») pour que les graphiques s’actualisent avec votre source.
PS : si vous voulez exporter tous les graphiques exportables d’une solution, faites l’export depuis le bouton d’export à côté du bouton « Save », sinon exporter seulement le graphique voulu avec le bouton au niveau du graphique « Export graph as Public URL »
![Tip 50]({{site.url}}{{site.baseurl}}/assets/images/tip/50.gif)

## Tip of the week #49
Une nouvelle release de Datama inclut un nouveau connecteur
Testez de manière très simple le connecteur GA4, pour par exemple vérifier la cohérence de vos données avec celle de GA3, pour cela :
  * Préparez votre DataFlow en 3 clics comme sur l’image
  * Ouvrez le dans Datama Compare
  * Identifiez ce qu’il faut améliorer/corriger

![Tip 49]({{site.url}}{{site.baseurl}}/assets/images/tip/49.jpg)

## Tip of the week #48
Vous souhaitez que la plage de date de votre use case évolue en fonction de l’actualisation de votre source, c’est très simple lors de la création de votre use case, sélectionnez la période souhaitée, puis au moment de la sauvegarde, vérifiez que la case «Dynamic saving of Start & End» est bien cochée ✅  
Dans le cas où votre source s’actualise quotidiennement 📅 et que vous voulez faire par exemple une analyse hebdomadaire comparée à la même semaine l’année dernière, il vous faut créer une dimension Year-Week et répéter l’opération ci-dessus en définissant cette nouvelle dimension en Start/End. Ce cas d’usage peut-être mis en place pour des analyses:
  * Hebdomadaire
  * Mensuelle
  * Trimestrielle
  * Annuelle
  * Custom (si vous souhaitez avoir une actualisation de la donnée non pas de la plus récente mais de la plus ancienne, vous pouvez décocher l’option « Use decreasing order » qui est sous «Dynamic saving of Start & End» dans le menu Save As)
⚠ Remarque: il faut que votre source de donnée soit
  * comprenne la donnée Full Last Year et This Year To Date
  * ou ait exactement le même nombre de semaine/mois/... à chaque actualisation.

![Tip 48]({{site.url}}{{site.baseurl}}/assets/images/tip/48.gif)

## Tip of the week #47
Le saviez-vous ? Il vous est possible de télécharger la source utilisée par Datama, pour cela aller dans l’onglet Source, puis juste en dessous « Full Data Source » cliquez sur l’icône Excel pour télécharger votre source au format Excel.
Pratique quand la source a été créée dans Datama prep ou via le connecteur GA et qu'on veut vérifier ses chiffres !
![Tip 47]({{site.url}}{{site.baseurl}}/assets/images/tip/47.gif)

## Tip of the week #46
Datama Prep continue son expansion avec l’arrivée du connecteur Facebook Ads en plus de ceux existant 🥳
Petit rappel pour ceux qui veulent prendre en compte l'effet de l’évolution de leur marché dans leurs analyses, rien de plus simple sur Datama Prep, il vous est possible de le faire en quelques clics avec le bon indice Google Trend, pour plus de précision n'hésitez pas à consulter cet [article](https://www.Datama.io/fr/2021/11/22/comment-prendre-en-compte-les-tendances-de-marche-dans-son-analyse-de-performance/)
![Tip 46]({{site.url}}{{site.baseurl}}/assets/images/tip/46.gif)

## Tip of the week #45
Le saviez-vous, vous avez la possibilité de voir vos ratios ou la valeur de vos étapes grâce au « Ratio Definition Helper » disponible en cliquant sur l'icône "chart" 📊 à côté du Include Step dans les Settings dans Compare ou l’icône "division" ➗ à côté de KPI Denominator dans Pivot.
Pour avoir une vision avec les deux segments sélectionnés, pensez à activer le Compare mode dans Pivot 😉
![Tip 45]({{site.url}}{{site.baseurl}}/assets/images/tip/45.gif)

## Tip of the week #44
Pour compléter votre analyse dans Datama Compare, découvrez le « Comparison Definition Helper » disponible en cliquant sur l'icône "chart" à côté de la Dimension Start/ End. Il vous permet de suivre l’évolution temporelle du ratio choisi (en courbe) et de son dénominateur (en barre 📊).
Une vue « Overview Overlay » est également disponible afin de superposer les deux périodes comparées.
![Tip 44]({{site.url}}{{site.baseurl}}/assets/images/tip/44.gif)

## Tip of the week #43
Aujourd’hui une petite astuce pour aller plus loin dans votre analyse sur Compare, il est possible pour vous d’activer l’option « Compare of Compare » dans les settings.
Cette visualisation vous permettra de voir en arrière-plan de votre Waterfall les variations sur une autre période
Ainsi il vous est possible de mettre en relief les résultats que vous analysez en la comparant par exemple à la même période de l’année précédente.
![Tip 43]({{site.url}}{{site.baseurl}}/assets/images/tip/43.gif)

## Tip of the week #42
La Beta de Datama Prep qui vous permet de travailler vos sources directement dans Datama évolue.
Un petit aperçu de features récentes :
  * Connection directe à Bigquery
  * Création de filtres
  * Ajout de champs calculés
Si vous ne l’avez pas encore découvert, demandez accès à votre CSM Datama, puis rdv dans l'onglet "data flow" sur la home page de Datama
![Tip 42]({{site.url}}{{site.baseurl}}/assets/images/tip/42.gif)

## Tip of the week #41
Vous avez peur de manquer l’évolution anormale d’un de vos indicateurs, Datama vous permet d’automatiser la détection d’anomalie. Vous bénéficierez alors :
  * A chaque anomalie d’une notification par mail ou par slack
  * D’une explication de la raison qui drive la variation
  * D’un gain de temps et de réactivité quand une anomalie survient
Retrouvez comment l’implémenter dans l’article : [Accélérer la détection d’anomalies avec Datama](https://www.Datama.io/fr/2022/01/12/accelerer-la-detection-danomalies-avec-Datama/)

## Tip of the week #40
Nous avons amélioré notre belle Waterfall, une première étape de notre refonte technologique qui permettra de faciliter la création de nouveaux usages dans le futur.
Il vous est désormais possible:
  * d’ouvrir le détail de plusieurs étapes en même temps
  * d’avoir des exports statiques de la waterfall qui sont interactifs
Retrouvez les derniers changements sur notre [release](https://Datama-solutions.github.io/docs//release.html) de fin d’année ! 📑
![Tip 40]({{site.url}}{{site.baseurl}}/assets/images/tip/40.gif)

## Tip of the week #39
L’équipe Datama a pensé à vous en écrivant ces articles, retrouvez y comment analyser certaines de vos problématiques :
  * Mesure de l’impact de votre outil de consentement: [here](https://www.Datama.io/fr/2021/11/04/comment-analyser-limpact-de-votre-outil-de-consentement-sur-vos-indicateurs-de-performance/)
  * Suivre la performance de vos campagnes d’acquisition: [here](https://www.Datama.io/fr/2021/11/22/comment-suivre-ses-campagnes-media-avec-Datama/)
  * Prendre en compte les tendances du marché dans vos analyses:[here](https://www.Datama.io/fr/2021/11/22/comment-prendre-en-compte-les-tendances-de-marche-dans-son-analyse-de-performance/)

## Tip of the week #38

La dernière [release](https://Datama-solutions.github.io/docs/#/release)  de Datama a eu lieu ce weekend :slightly_smiling_face:
Parmi les nouveautés, la mise à dispo en beta :test_tube: de Datama Prep, qui permet de générer un dataset pour Datama de façon simple et visuelle, en combinant et retravaillant des sources.
Plus de temps perdu sur Google Sheet à joindre 25 onglets :nerd_face:
  * Plusieurs connecteurs pertinents pour Datama, notamment Google Analytics et Google trends
  * Data manipulations simples avec Pivot/ UnPivot/ Renaming/ Column Ordering/ Append
  * Scheduleur disponible pour avoir la data immédiatement dispo dans Datama
Pour tester, demandez accès à votre CSM Datama, puis rdv dans l'onglet "data flow" sur la home page de Datama


![Tip 38]({{site.url}}{{site.baseurl}}/assets/images/tip/38.gif)

<h2>Tip of the week #37</h2>

On a du mal à suivre le rythme des release effrénées de l'équipe produit :sweat_smile:

Dernière en date il y a quelques semaines (voir la [release note](https://Datama-solutions.github.io/docs/#/news)

Au menu notamment la détection d'anomalie dans Datama Impact, qui permet d'identifier rapidement un point anormal dans le suivi d'un KPI, et de comprendre ensuite ses drivers.

Compatible avec les sources classiques Datama, il vous suffit d'activer le toggle "anomaly detection" en haut à gauche d'impact pour voir apparaître les résultats qui seront bientôt exportables automatiquement dans un slack ou un email :bell:

Lisez cet [article](https://Datama-solutions.github.io/docs/#/impact/web_application/dashboard/anomaly_detection?id=anomaly-detection) pour en savoir plus, et contactez nous pour une démo !

![Tip 37]({{site.url}}{{site.baseurl}}/assets/images/tip/37.gif)


<h2>Tip of the week #36</h2>

📢 Plein de nouveautés sur la plateforme cette semaine!
 Vous avez la liste complète [ici](https://Datama-solutions.github.io/docs/#/news).


En particulier, une nouveauté de taille pour les analystes dont les beaux graphs finissent toujours en slide (on en connait quelques uns 😅): vous pouvez maintenant télécharger tous les graphs et commentaires Datama sur PowerPoint en un clic.
Il n'y a qu'à cliquer sur l'icone "ppt" en haut à droite du graph.


Boum 💥

![Tip 36]({{site.url}}{{site.baseurl}}/assets/images/tip/36.gif)



<h2>Tip of the week #34</h2>

Que ce soit dans Tableau ou Power BI, retrouvez de manière transparente vos graphes Datama 🤓
* Datama vient récupérer directement vos données dans votre outil de dataViz
* Besoin uniquement de 3 onglets dans Tableau :
 * 1 pour les données
 * 1 pour la configuration Datama
 * 1 pour faire un beau tableau de bord

Retrouvez plus d'information sur notre [documentation](https://Datama-solutions.github.io/docs//#/general/admin/create_use_case/extensions/extension_tableau?id=tableau-extension) en ligne ! 📕

![Tip 34]({{site.url}}{{site.baseurl}}/assets/images/tip/34.gif)



<h2>Tip of the week #33</h2>

Encore une nouvelle release cette semaine !


Parmi les [nouveautés](https://Datama-solutions.github.io/docs/#/news), la possibilité de visualiser les ratios de votre "équation de marché" les uns à coté des autres.


Par exemple, le taux de passage entre chaque page sur un même bar chart 
📊

Baptisé 'Ratio helper', cette visualisation est utile avant même chercher à comprendre les drivers pour savoir quel ratio analyser.


On y accède en cliquant sur le ➗ dans les paramètres
.

Pour en savoir plus, rdv [ici](https://Datama-solutions.github.io/docs/#/general/menu/ratio_helper).

![Tip 33]({{site.url}}{{site.baseurl}}/assets/images/tip/33.png)


<h2>Tip of the week #32</h2>

🤔 On cherche plus souvent à améliorer ce qui drive sa performance à la baisse plutôt que d'afficher ce qui va déjà bien... et c'est pour ca qu'on a mis en place la fonctionnalité : Negative drivers first ↘️ !! 
* En activant cette fonctionnalité dans les settings du menu de gauche, la solution affichera en priorité pour chaque étape les segments qui tirent la performance à la baisse
* Cette fonctionnalité est très pratique quand vous avez une étape en croissance, beaucoup de segments différents et que vous voudriez vous concentrer sur ceux qui ont baissé plutôt que de voir apparaître ceux qui vont bien.
* On en profite aussi pour refaire le scoring des dimensions en regardant en priorité les dimensions dont les segments expliquent le mieux la baisse (même pour les étapes en croissance)

![Tip 32]({{site.url}}{{site.baseurl}}/assets/images/tip/32.gif)



<h2>Tip of the week #31</h2>


Datama s'internationalise, les commentaires sont maintenant disponibles en Français !! 🇫🇷

* Vous pouvez changer la langue depuis le menu Settings > Display option > choose a language
* Pour customiser encore plus vos dashboards, pouvez également modifier la couleur des graphes en choisissant les couleurs correspondant à votre charte graphique
* Retrouvez l'historique de toutes les fonctionnalités mises en production directement sur le site de la [documentation](https://Datama-solutions.github.io/docs/#/news) 🌈

![Tip 31]({{site.url}}{{site.baseurl}}/assets/images/tip/31.gif)



<h2>Tip of the week #29</h2>

🆕 Pas mal de [nouveautés](https://Datama-solutions.github.io/docs/#/news) sur la plateforme depuis ce weekend, toujours basé sur vos feedbacks !
Notamment la possibilité de cliquer "bouton droit" 🖱 sur la waterfall Datama Compare, pour décider facilement de :

* Zoomer sur une étape pour voir l'impact d'une dimension (l'équivalent du clic gauche)
* Sauter (fusionner) une étape dans le funnel
* Filtrer/ Exclure un sous segment
* Changer la dimension de breakdown
* Afficher plus de segments dans une dimension

A vous de tester !

![Tip 29]({{site.url}}{{site.baseurl}}/assets/images/tip/29.png)



<h2>Tip of the week #28</h2>


Angoissé par l'idée d'avoir à expliquer un effet mix dans la réunion autour de la waterfall Datama 😨 ?


Bonne nouvelle, vous n'êtes pas obligé de l'afficher. Il suffit de désactiver le split entre Mix et Performance dans les settings à gauche. Datama regroupera alors les deux effets, et séparera plutôt les variations négatives des variations positives.


Et pour ceux qui n'ont toujours pas compris ce qu'est l'effet de mix 🎛 on a un petit webinar pour vous jeudi 25 🙂 -> inscription ici

![Tip 28]({{site.url}}{{site.baseurl}}/assets/images/tip/28.png)



<h2>Tip of the week #27</h2>


Datama Pivot se dote de commentaires intelligents pour chacun de ses charts 📝 !
Retrouvez en bullet points les insights générés par Datama Pivot sous chacun des graphs, comme un analyste l'aurait fait !


Cette nouveauté fait partie d'une série de release ce début de semaine, que vous pouvez retrouver sur https://Datama-solutions.github.io/docs/#/news


Enjoy 😄

![Tip 27]({{site.url}}{{site.baseurl}}/assets/images/tip/27.png)



<h2>Tip of the week #26</h2>


Toute l'équipe Datama vous souhaite une bonne année 2021!
Vous voulez exclure cette mauvaise année 2020 de vos analyses et l'oublier définitivement 😷 ?  Rien de plus facile avec la nouvelle interface de filtres. Vous pouvez, en deux clics:

* ✔️ sélectionner les segments sur lesquels vous souhaitez filtrer
* ❎ Exclure une dimension de l'analyse, en cliquant sur sur le bouton à gauche
* Combiner les deux points précédents

Lancez ensuite l'analyse en appuyant sur le bouton en bas à gauche (raccourci "Entrée" sur votre clavier)

![Tip 26]({{site.url}}{{site.baseurl}}/assets/images/tip/26.gif)


<h2>Tip of the week #25</h2>


Chez Datama, c'est Noël tous les jours.🎅

 
Pourquoi ? Parce que vous n'avez pas à attendre le 25 décembre pour faire votre liste au Père Noël.

Il vous suffit de nous faire remonter vos idées de feature / améliorations par chat, directement dans l'outil ou en réponse sur ce channel, et on met ça dans la backlog.
 Et un ticket prend typiquement moins de deux semaines à être en prod. ⏩

A vos stylos ✏️ et Joyeux Noël 🎁 !

![Tip 25]({{site.url}}{{site.baseurl}}/assets/images/tip/25.gif)



<h2>Tip of the week #24</h2>


Comme annoncé, la nouvelle version de Datama est maintenant accessible sur [solutions.Datama.io](solutions.Datama.io) 
🎉

Vous pouvez retrouver l'ensemble des nouveautés dans la section [news](https://Datama-solutions.github.io/docs/#/news) de la documentation.


Parmi les nouveautés, l'introduction d'une 'home page' 🏠, qui rassemble l'ensemble de vos workbooks.


Chaque 'Card' représente un use case.

Depuis la home, vous pouvez facilement :
 
* ✏️ Editer le titre ou la description d'un workbook
 
* 🔒 Bloquer un workbook pour empecher son édition
 
* ❎ Supprimer un workbook
 
* ⚖️ Lancer un workbook sur la solution Datama de votre choix !


Pour en savoir plus sur la Home, c'est ici !


![Tip 24]({{site.url}}{{site.baseurl}}/assets/images/tip/24.png)



<h2>Tip of the week #22</h2>


Une analyse à faire rapidos dans Datama depuis un tableur ?
 

✂️ Hop, on copie la plage de cellule à analyser (Ctrl+C) et on la colle direct sur Datama (Ctrl + V).


Quoi de plus simple ?

![Tip 22]({{site.url}}{{site.baseurl}}/assets/images/tip/22.gif)



<h2>Tip of the week #21</h2>


Quand vous sauvegardez une analyse sur Datama, et que cette analyse est liée à une source "live" (e.g. une Gsheet), Datama vous propose de sauvegarder les paramètres "Start" et "End" de manière dynamique.


Sous ses jours un peu techniques 🤓, cette feature est très pratique pour une analyse récurrente, car elle permet de glisser automatiquement la fenêtre d'analyse 🗓.


Par exemple:
* A un instant t, vous avez dans votre data source une colonne "Week" ayant pour valeur  semaine 24 ,  semaine 25  et  semaine 26 .
* Toujours à cet instant t, dans Datama COMPARE vous comparez la semaine 25 à la semaine 26 . Vous sauvegardez ce use case dynamiquement. Datama enregistre alors que ce sont les deux dernières valeurs dans l'ordre alphabétique qui vous intéresse pour la comparaison.
* A un instant t+1, votre données a été mises à jour avec une semaine en plus. Vous avez donc dans la colonne "Week" les valeurs semaine 24 ,  semaine 25 ,  semaine 26 ET  semaine 27 .
* Datama va alors automatiquement mettre à jour (dans le use case, mais aussi dans vos exports par mail, slack etc) la comparaison, en prenant les deux dernières valeurs dans l'ordre alphabétique. Vous allez donc automatiquement glisser votre comparaison vers semaine 26 vs semaine 27

➡️ Votre analyse se met donc à jour de manière automatisée, sans même que vous ayez à changer le paramétrage 🤙!

![Tip 21]({{site.url}}{{site.baseurl}}/assets/images/tip/21.png)



<h2>Tip of the week #20</h2>


Parce que septembre vient de passer et qu'on a bien travaillé tout l'été, la nouvelle version backtoschool 🎒 de Datama est disponible en production!


Au programme:

* Connecteur Google Analytics dynamique
* Extension des widgets partageables sur les outils de viz 
* Bootsrap test dans Datama Impact
* Refonte de la UI de Datama Journey et amélioration de la performance
* Table interactive dans Compare
* et bien d'autres listés ici: https://Datama-solutions.github.io/docs//#/news

Merci à tous les contributeurs pour leurs idées et à vos feedbacks constants sur l'outil !


Stay tune, there's a lot more to come... 🚀

![Tip 20]({{site.url}}{{site.baseurl}}/assets/images/tip/20.jpg)



<h2>Tip of the week #18</h2>

Si vous vous embêtez à la plage 🏖, on a une bonne lecture pour vous : la documentation sur Datama 📖 ...


➡️ C'est 🔗 ici que ça se passe !


Et comme il nous arrive aussi d'être à la plage et de ne pas tenir le rythme effréné des nouvelles features dans la documentation, la bonne nouvelle c'est que vous pouvez maintenant contribuer à son élaboration en cliquant sur "Edit document" en haut de chaque pages et en suggérant vous même vos modifications sur github 
#communitycontribution #mercidevotreaide!


(retrouvez tous les tip of the week: https://Datama.fr/category/tipoftheweek/)

Datama-solutions.github.io



<h2>Tip of the week #15</h2>

➡️ Envie d’utiliser Datama pour d’autres analyses mais vous êtes en panne d’idées 💡?

Retrouvez des exemples de use cases et les data sets correspondants ici:

* [Period to period conversion comparison](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=0)
* [Email campaigns comparison](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1286768317)
* [AB test analysis](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1756377864)
* [Finance Budget vs. Actual controlling](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1408263987)
* [In page product analytics between two pages](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1740449585)
* [Media display campaigns ROI](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=42212778)
* [NPS evolution](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=256547091)
* [Churn Rate](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=2097497440)
* … et bien d’autres uses cases que nous résolvons ensemble chaque jour!

N’hésitez pas à nous contacter pour partager vos propres uses cases avec les utilisateurs Datama!



<h2>Tip of the week #14</h2>

Dans les nouveautés mises en production durant le confinement, on retrouve la fonctionnalité : Export graph as public URL :bar_chart:

Tous les graphes des solutions Datama peuvent désormais être exportés dans votre dashboards Tableau, Data Studio… ou bien dans votre navigateur web !

Cela vous permet d’enrichir vos reportings habituels avec des graphiques Datama :

* Dans Datama, en haut à droite de chaque graphique, sélectionnez l’icone : « Export Graph as public URL«
* Autorisez les droits pour partager cette URL sécurisée
* Puis utilisez cette URL comme un bloc « URL » dans votre outil de data visualisation habituelle et voila !

Les données de ce nouveau Widget sont constamment à jour des données chargées dans Datama.

**Note:** Cette fonction est activée sur demande, contactez-nous si vous souhaitez activer cette fonctionnalité.


<h2>Tip of the week #13</h2>

Quand on veut utiliser Datama, on se pose souvent la question des données… 💻

Comment connecter mes données dans Datama ? Comment faire pour que ma donnée (et donc mes graphiques) soit mise à jour au fur et à mesure ? Une des solutions…c’est Google spreadsheet !  💡

* Dans Google Spreadsheet, vous pouvez, grâce aux extensions disponibles dans la solution, connecter n’importe quelle source de données (içi par exemple Google analytics)
* Une fois dans Datama, en créant un nouveau Use Case à partir de l’URL de la feuille Gsheet, vous pouvez préciser (en cochant la case : Keep Live connection with Gsheet) que vous souhaitez que les données soient automatiquement mises à jour….
* Et le tour est joué…

Vous pouvez par ailleurs utiliser d’autres extensions comme « OWOX BI BigQuery » pour vos requêtes BigQuery ou bien encore l’add-on « Supermetrics » pour la connexion à toutes les autres applications du marché !


<h2>Tip of the week #12</h2>

🆕 Le nouveau bandeau est en place sur la plateforme Datama !

Cela permet non seulement de rendre les fonctionnalités d’admin plus accessible (nouvelle source, exports…) mais aussi d’ajouter quelques fonctionnalités basiques mais toujours utiles:

* Passez d’une solution à une autre (Compare, Impact, Pivot, Journey…) dans la même page 🔄
* Vérifiez que votre travail est enregistré avec le nom du use case en cours
* Sauvez rapidement vos paramètres en cliquant sur « Save » (au lieu de « Save As »)

Merci de nous remonter vos impressions lorsque vous testez !

**Note:** Ce nouveau bandeau remplace l’ancien menu ‘Admin’ qui était en bas à gauche de la page!

![Tip 12]({{site.url}}{{site.baseurl}}/assets/images/tip/12.gif)

<h2>Tip of the week #11</h2>

Par ces temps troublés 😷, vous avez une partie de vos données qui est « non comparable » dans votre analyse Datama Compare (genre un canal de distribution… qui n’existe plus 😕!), mais vous souhaitez tout de même les voir apparaître à part dans votre Waterfall, pour ne comparer vos KPIs que sur des choses comparables (🍎 to 🍎) ?

➢ Créez une colonne « Scope » contenant la mention « In » pour ce que l’on veut conserver ou « Out » pour ce que l’on souhaite exclure

➢ Datama excluera automatiquement le « Out » de l’analyse et le fera apparaître dans un bloc à part de la waterfall, en bleu clair « Out of Scope »

Voir un exemple concret [ici](https://www.docs.Datama.fr/docs/datama-compare/general-introduction/use-cases-examples/marketing-campaign/marketing-campaign-scope/) !

Préparé avec ❤️ depuis chez nous, on pense à vous et on vous accompagne sur tous vos sujets à distance!

 ![Tip 11]({{site.url}}{{site.baseurl}}/assets/images/tip/11.png)

<h2>Tip of the week #10</h2>

Lorsque vous utilisez Datama COMPARE pour comparer deux périodes de temps. Vous pouvez paramétrer la solution pour que vos analyses dans Datama soient toujours à jour de vos dernières données. 🏃‍♀️

Il vous suffit de :

1. Charger une nouvelle source (menu « Change source« ) via une « Google Sheet« .
2. Puis sélectionner l’option « Keep Live connexion with Gsheet«
3. Une fois l’analyse en place, il vous faut sauvegarder le Use case en laissant sélectionnée l’option « Dynamic saving of Start & End«.🚧  Attention à ce que les dates utilisées comme Start et End existent bien dans le dataset !
4. A partir de l’intervalle utilisé pour Start et End (1ère semaine comparé à la 4ème semaine du dataset par exemple), Datama reproduira ce même intervalle selon les dernières données existantes…

Une fois que vos données se mettent à jour toutes seules, vous n’avez plus qu’a paramétrer un envoie régulier vers votre boite mail ou un channel Slack et le tour est joué

![Tip 10]({{site.url}}{{site.baseurl}}/assets/images/tip/10.gif)

<h2>Tip of the week #9</h2>

Pour accélérer vos analyses nous avons accéléré le chargement de vos données. 🚀

Dans Datama, vous pouvez maintenant :

* Copier-coller vos tableaux Excel ou vos URL Gsheet
* faire un drag & drop de vos fichiers de données (excel, csv)

Datama reconnaît directement la source et vous propose de lancer directement l’analyse !

Pour en savoir plus:


<h2>Tip of the week #8</h2>

Vous pouvez maintenant utiliser Datama comme une extension de Tableau ➕ !

Vous glissez-déposez l’extension fournie par Datama dans votre dashboard Tableau, et vous accédez depuis Datama à la donnée visualisée dans une worksheet Tableau.

Non seulement vos données sont à jour de ce que vous avez déjà dans Tableau, mais vos filtres et autres actions dans Tableau sont alors actifs dans Datama ! 🔄

![Tip 8]({{site.url}}{{site.baseurl}}/assets/images/tip/8.gif)

Pour en savoir plus: https://www.docs.Datama.fr/docs/extensions/tableau-extension/


<h2>Tip of the week #7</h2>

* Saviez vous qu’il suffisait d’appuyer sur le raccourci « Entrée » ↪️ dans votre clavier pour mettre à jour les calculs dans Datama ?

* Maintenant oui 🙂

![Tip 7]({{site.url}}{{site.baseurl}}/assets/images/tip/7.png)

<h2>Tip of the week #6</h2>

Perdu dans Datama :question:

En plus de la documentation, il existe depuis peu un tutoriel qui vous guide de manière interactive dans vos premiers pas sur l’app 👣

* Cliquez sur « Launch tutorial » en haut à droite de l’écran pour vous mettre sur la bonne voie ! 🧗‍♂️

![Tip 6]({{site.url}}{{site.baseurl}}/assets/images/tip/6.png)

<h2>Tip of the week #5</h2>

Vous pouvez facilement filtrer vos analyses dans Datama sur une partie de votre dataset source.

* Excluez purement et simplement toute une dimension de l’analyse en utilisant « Excluded Dimension ». Datama ne remontera plus cette dimension comme étant celle qui peut expliquer la variation de votre performance, mais cela ne change pas le total de la performance que vous expliquez.
* Filtrez uniquement sur une partie de vos données en utilisant les filtres, en sélectionnant la dimension puis le/ les segments de cette dimension à conserver. Vous pouvez filtrer sur deux dimensions en même temps (Level 1 et Level 2). Ces filtres apparaîtront dans les titres de vos graphs pour plus de contexte.


<h2>Tip of the week #4</h2>

Comme vous le savez, afin de vous expliquer votre variation de performance globale, Datama analyse indépendamment pour chaque étape chacune de vos dimensions pour vous remonter celles qui expliquent le mieux la variation de cette étape. Mais l’outil analyse également des combinaisons de dimensions. Soit toutes les dimensions combinées ensemble (Combined Dimensions) soit toutes les paires de dimensions (Smart Dimension). 👨‍🔬

* La dimension Combined Dimension est activée par défaut mais l’option Smart Dimension est à activer dans le menu Settings.
* Une fois activée, la fonction Smart Dimension va identifier pour chaque étape, la meilleure combinaison de dimension. Lorsqu’une paire de dimension a plus de sens pour votre variation qu’une dimension seule elle s’affiche avec le signe « x » entre les 2 dimensions sélectionnées. 💑
* La combinaison choisie par la fonction Smart Dimension est disponible dans les différents graphiques de l’outil.


<h2>Tip of the week #3</h2>

Dans toutes les solutions Datama, vous avez la possibilité de regrouper ensemble les éléments d’une dimension qui ne représente presque rien sur votre performance. 🧐

* Dans le menu Settings, la barre « aggregation in % » correspond au niveau d’agrégation que vous pouvez choisir. vous pouvez ainsi regrouper ensemble les éléments qui représentent moins de 2%, 3%, 4%…du total de votre indicateur global. (Par défaut Datama agrège ce qui représente moins de 2% du total)

* Cette fonctionnalité correspond à la mention « Other (<2% ot the total) » que vous pouvez retrouver souvent dans les graphiques !

Utile notamment quand vos données présentent des dimensions avec des centaines de valeurs différentes.


<h2>Tip of the week #2</h2>

Dans Datama Compare et Impact, vous pouvez pré visualiser la définition de « Start » et « End » en utilisant « Overview chart »

* Cliquez sur la petite icone de graph à droite de « Start & End Dimension »
* Les barres représentent la métrique que vous cherchez à suivre. En bleu, « Start », en orange « End », en gris ce qui est « other » ni Start ni End
* L’onglet « Overview summarize » permet d’avoir une vision aggrégée

Utile notamment dans le cas où l’on n’est pas certain de ce qu’on souhaite comparer !
