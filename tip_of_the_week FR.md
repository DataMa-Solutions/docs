---
title: Tips of the week ! In French
layout: page
img_url: /assets/images/tip/38.gif
img_type: image/gif
img_width: 600
img_height: 300
description: |
  Tips & tricks sur DataMa, mais en français 🐓
---
## Tip of the week #41
Vous avez peur de manquer l’évolution anormale d’un de vos indicateurs, DataMa vous permet d’automatiser la détection d’anomalie. Vous bénéficierez alors :
  * A chaque anomalie d’une notification par mail ou par slack
  * D’une explication de la raison qui drive la variation
  * D’un gain de temps et de réactivité quand une anomalie survient
Retrouvez comment l’implémenter dans l’article : [Accélérer la détection d’anomalies avec DataMa](https://www.datama.io/fr/2022/01/12/accelerer-la-detection-danomalies-avec-datama/)

## Tip of the week #40
Nous avons amélioré notre belle Waterfall, une première étape de notre refonte technologique qui permettra de faciliter la création de nouveaux usages dans le futur.
Il vous est désormais possible:
  * d’ouvrir le détail de plusieurs étapes en même temps
  * d’avoir des exports statiques de la waterfall qui sont interactifs
Retrouvez les derniers changements sur notre [release](https://datama-solutions.github.io/docs//release.html) de fin d’année ! 📑
![Tip 40]({{site.url}}/{{site.baseurl}}/assets/images/tip/40.gif)

## Tip of the week #39
L’équipe DataMa a pensé à vous en écrivant ces articles, retrouvez y comment analyser certaines de vos problématiques :
  * Mesure de l’impact de votre outil de consentement: [here](https://www.datama.io/fr/2021/11/04/comment-analyser-limpact-de-votre-outil-de-consentement-sur-vos-indicateurs-de-performance/)
  * Suivre la performance de vos campagnes d’acquisition: [here](https://www.datama.io/fr/2021/11/22/comment-suivre-ses-campagnes-media-avec-datama/)
  * Prendre en compte les tendances du marché dans vos analyses:[here](https://www.datama.io/fr/2021/11/22/comment-prendre-en-compte-les-tendances-de-marche-dans-son-analyse-de-performance/)

## Tip of the week #38

La dernière [release](https://datama-solutions.github.io/docs/#/release)  de DataMa a eu lieu ce weekend :slightly_smiling_face:
Parmi les nouveautés, la mise à dispo en beta :test_tube: de DataMa Prep, qui permet de générer un dataset pour DataMa de façon simple et visuelle, en combinant et retravaillant des sources.
Plus de temps perdu sur Google Sheet à joindre 25 onglets :nerd_face:
  * Plusieurs connecteurs pertinents pour DataMa, notamment Google Analytics et Google trends
  * Data manipulations simples avec Pivot/ UnPivot/ Renaming/ Column Ordering/ Append
  * Scheduleur disponible pour avoir la data immédiatement dispo dans DataMa
Pour tester, demandez accès à votre CSM DataMa, puis rdv dans l'onglet "data flow" sur la home page de DataMa


![Tip 38]({{site.url}}/{{site.baseurl}}/assets/images/tip/38.gif)

<h2>Tip of the week #37</h2>

On a du mal à suivre le rythme des release effrénées de l'équipe produit :sweat_smile:

Dernière en date il y a quelques semaines (voir la [release note](https://datama-solutions.github.io/docs/#/news)

Au menu notamment la détection d'anomalie dans DataMa Impact, qui permet d'identifier rapidement un point anormal dans le suivi d'un KPI, et de comprendre ensuite ses drivers.

Compatible avec les sources classiques Datama, il vous suffit d'activer le toggle "anomaly detection" en haut à gauche d'impact pour voir apparaître les résultats qui seront bientôt exportables automatiquement dans un slack ou un email :bell:

Lisez cet [article](https://datama-solutions.github.io/docs/#/impact/web_application/dashboard/anomaly_detection?id=anomaly-detection) pour en savoir plus, et contactez nous pour une démo !

![Tip 37]({{site.url}}/{{site.baseurl}}/assets/images/tip/37.gif)


<h2>Tip of the week #36</h2>

📢 Plein de nouveautés sur la plateforme cette semaine!  Vous avez la liste complète [ici](https://datama-solutions.github.io/docs/#/news).

 En particulier, une nouveauté de taille pour les analystes dont les beaux graphs finissent toujours en slide (on en connait quelques uns 😅): vous pouvez maintenant télécharger tous les graphs et commentaires DataMa sur PowerPoint en un clic. Il n'y a qu'à cliquer sur l'icone "ppt" en haut à droite du graph. 

Boum 💥

![Tip 36]({{site.url}}/{{site.baseurl}}/assets/images/tip/36.gif)



<h2>Tip of the week #34</h2>

Que ce soit dans Tableau ou PowerBi, retrouvez de manière transparente vos graphes DataMa 🤓
* DataMa vient récupérer directement vos données dans votre outil de dataViz
* Besoin uniquement de 3 onglets dans Tableau :
 * 1 pour les données
 * 1 pour la configuration DataMa
 * 1 pour faire un beau tableau de bord

Retrouvez plus d'information sur notre [documentation](https://datama-solutions.github.io/docs//#/general/admin/create_use_case/extensions/extension_tableau?id=tableau-extension) en ligne ! 📕

![Tip 34]({{site.url}}/{{site.baseurl}}/assets/images/tip/34.gif)



<h2>Tip of the week #33</h2>

Encore une nouvelle release cette semaine ! 

Parmi les [nouveautés](https://datama-solutions.github.io/docs/#/news), la possibilité de visualiser les ratios de votre "équation de marché" les uns à coté des autres.

 Par exemple, le taux de passage entre chaque page sur un même bar chart  📊

Baptisé 'Ratio helper', cette visualisation est utile avant même chercher à comprendre les drivers pour savoir quel ratio analyser. 

On y accède en cliquant sur le ➗ dans les paramètres .

Pour en savoir plus, rdv [ici](https://datama-solutions.github.io/docs/#/general/menu/ratio_helper).

![Tip 33]({{site.url}}/{{site.baseurl}}/assets/images/tip/33.png)


<h2>Tip of the week #32</h2>

🤔 On cherche plus souvent à améliorer ce qui drive sa performance à la baisse plutôt que d'afficher ce qui va déjà bien... et c'est pour ca qu'on a mis en place la fonctionnalité : Negative drivers first ↘️ !! 
* En activant cette fonctionnalité dans les settings du menu de gauche, la solution affichera en priorité pour chaque étape les segments qui tirent la performance à la baisse
* Cette fonctionnalité est très pratique quand vous avez une étape en croissance, beaucoup de segments différents et que vous voudriez vous concentrer sur ceux qui ont baissé plutôt que de voir apparaître ceux qui vont bien.
* On en profite aussi pour refaire le scoring des dimensions en regardant en priorité les dimensions dont les segments expliquent le mieux la baisse (même pour les étapes en croissance)

![Tip 32]({{site.url}}/{{site.baseurl}}/assets/images/tip/32.gif)



<h2>Tip of the week #31</h2>

 DataMa s'internationalise, les commentaires sont maintenant disponibles en Français !! 🇫🇷

* Vous pouvez changer la langue depuis le menu Settings > Display option > choose a language
* Pour customiser encore plus vos dashboards, pouvez également modifier la couleur des graphes en choisissant les couleurs correspondant à votre charte graphique
* Retrouvez l'historique de toutes les fonctionnalités mises en production directement sur le site de la [documentation](https://datama-solutions.github.io/docs/#/news) 🌈

![Tip 31]({{site.url}}/{{site.baseurl}}/assets/images/tip/31.gif)



<h2>Tip of the week #29</h2>

🆕 Pas mal de [nouveautés](https://datama-solutions.github.io/docs/#/news) sur la plateforme depuis ce weekend, toujours basé sur vos feedbacks ! Notamment la possibilité de cliquer "bouton droit" 🖱 sur la waterfall DataMa Compare, pour décider facilement de :

* Zoomer sur une étape pour voir l'impact d'une dimension (l'équivalent du clic gauche)
* Sauter (fusionner) une étape dans le funnel
* Filtrer/ Exclure un sous segment
* Changer la dimension de breakdown
* Afficher plus de segments dans une dimension

A vous de tester !

![Tip 29]({{site.url}}/{{site.baseurl}}/assets/images/tip/29.png)



<h2>Tip of the week #28</h2>

 Angoissé par l'idée d'avoir à expliquer un effet mix dans la réunion autour de la waterfall DataMa 😨 ? 

Bonne nouvelle, vous n'êtes pas obligé de l'afficher. Il suffit de désactiver le split entre Mix et Performance dans les settings à gauche. DataMa regroupera alors les deux effets, et séparera plutôt les variations négatives des variations positives. 

Et pour ceux qui n'ont toujours pas compris ce qu'est l'effet de mix 🎛 on a un petit webinar pour vous jeudi 25 🙂 -> inscription ici

![Tip 28]({{site.url}}/{{site.baseurl}}/assets/images/tip/28.png)



<h2>Tip of the week #27</h2>

 DataMa Pivot se dote de commentaires intelligents pour chacun de ses charts 📝 ! Retrouvez en bullet points les insights générés par DataMa Pivot sous chacun des graphs, comme un analyste l'aurait fait !

 Cette nouveauté fait partie d'une série de release ce début de semaine, que vous pouvez retrouver sur https://datama-solutions.github.io/docs/#/news 

Enjoy 😄

![Tip 27]({{site.url}}/{{site.baseurl}}/assets/images/tip/27.png)



<h2>Tip of the week #26</h2>

 Toute l'équipe DataMa vous souhaite une bonne année 2021! Vous voulez exclure cette mauvaise année 2020 de vos analyses et l'oublier définitivement 😷 ?  Rien de plus facile avec la nouvelle interface de filtres. Vous pouvez, en deux clics:

* ✔️ sélectionner les segments sur lesquels vous souhaitez filtrer
* ❎ Exclure une dimension de l'analyse, en cliquant sur sur le bouton à gauche
* Combiner les deux points précédents

Lancez ensuite l'analyse en appuyant sur le bouton en bas à gauche (raccourci "Entrée" sur votre clavier)

![Tip 26]({{site.url}}/{{site.baseurl}}/assets/images/tip/26.gif)


<h2>Tip of the week #25</h2>

 Chez DataMa, c'est Noël tous les jours.🎅

  Pourquoi ? Parce que vous n'avez pas à attendre le 25 décembre pour faire votre liste au Père Noël.

Il vous suffit de nous faire remonter vos idées de feature / améliorations par chat, directement dans l'outil ou en réponse sur ce channel, et on met ça dans la backlog.  Et un ticket prend typiquement moins de deux semaines à être en prod. ⏩

A vos stylos ✏️ et Joyeux Noël 🎁 !

![Tip 25]({{site.url}}/{{site.baseurl}}/assets/images/tip/25.gif)



<h2>Tip of the week #24</h2>

 Comme annoncé, la nouvelle version de DataMa est maintenant accessible sur [solutions.Datama.io](solutions.Datama.io)  🎉

Vous pouvez retrouver l'ensemble des nouveautés dans la section [news](https://datama-solutions.github.io/docs/#/news) de la documentation.

 Parmi les nouveautés, l'introduction d'une 'home page' 🏠, qui rassemble l'ensemble de vos workbooks. 

Chaque 'Card' représente un use case.

Depuis la home, vous pouvez facilement :  
* ✏️ Editer le titre ou la description d'un workbook  
* 🔒 Bloquer un workbook pour empecher son édition  
* ❎ Supprimer un workbook  
* ⚖️ Lancer un workbook sur la solution DataMa de votre choix ! 

Pour en savoir plus sur la Home, c'est ici ! 

![Tip 24]({{site.url}}/{{site.baseurl}}/assets/images/tip/24.png)



<h2>Tip of the week #22</h2>

 Une analyse à faire rapidos dans DataMa depuis un tableur ?  

✂️ Hop, on copie la plage de cellule à analyser (Ctrl+C) et on la colle direct sur DataMa (Ctrl + V). 

Quoi de plus simple ?

![Tip 22]({{site.url}}/{{site.baseurl}}/assets/images/tip/22.gif)



<h2>Tip of the week #21</h2>

 Quand vous sauvegardez une analyse sur DataMa, et que cette analyse est liée à une source "live" (e.g. une Gsheet), DataMa vous propose de sauvegarder les paramètres "Start" et "End" de manière dynamique. 

Sous ses jours un peu techniques 🤓, cette feature est très pratique pour une analyse récurrente, car elle permet de glisser automatiquement la fenêtre d'analyse 🗓. 

Par exemple:
* A un instant t, vous avez dans votre data source une colonne "Week" ayant pour valeur  semaine 24 ,  semaine 25  et  semaine 26 .
* Toujours à cet instant t, dans DataMa COMPARE vous comparez la semaine 25 à la semaine 26 . Vous sauvegardez ce use case dynamiquement. DataMa enregistre alors que ce sont les deux dernières valeurs dans l'ordre alphabétique qui vous intéresse pour la comparaison.
* A un instant t+1, votre données a été mises à jour avec une semaine en plus. Vous avez donc dans la colonne "Week" les valeurs semaine 24 ,  semaine 25 ,  semaine 26 ET  semaine 27 .
* DataMa va alors automatiquement mettre à jour (dans le use case, mais aussi dans vos exports par mail, slack etc) la comparaison, en prenant les deux dernières valeurs dans l'ordre alphabétique. Vous allez donc automatiquement glisser votre comparaison vers semaine 26 vs semaine 27

➡️ Votre analyse se met donc à jour de manière automatisée, sans même que vous ayez à changer le paramétrage 🤙!

![Tip 21]({{site.url}}/{{site.baseurl}}/assets/images/tip/21.png)



<h2>Tip of the week #20</h2>

 Parce que septembre vient de passer et qu'on a bien travaillé tout l'été, la nouvelle version backtoschool 🎒 de DataMa est disponible en production! 

Au programme:

* Connecteur Google Analytics dynamique
* Extension des widgets partageables sur les outils de viz 
* Bootsrap test dans DataMa Impact
* Refonte de la UI de DataMa Journey et amélioration de la performance
* Table interactive dans Compare
* et bien d'autres listés ici: https://datama-solutions.github.io/docs//#/news

Merci à tous les contributeurs pour leurs idées et à vos feedbacks constants sur l'outil ! 

Stay tune, there's a lot more to come... 🚀

![Tip 20]({{site.url}}/{{site.baseurl}}/assets/images/tip/20.JPG)



<h2>Tip of the week #18</h2>
 Si vous vous embêtez à la plage 🏖, on a une bonne lecture pour vous : la documentation sur DataMa 📖 ...

 ➡️ C'est 🔗 ici que ça se passe ! 

Et comme il nous arrive aussi d'être à la plage et de ne pas tenir le rythme effréné des nouvelles features dans la documentation, la bonne nouvelle c'est que vous pouvez maintenant contribuer à son élaboration en cliquant sur "Edit document" en haut de chaque pages et en suggérant vous même vos modifications sur github  #communitycontribution #mercidevotreaide! 

(retrouvez tous les tip of the week: https://datama.fr/category/tipoftheweek/)

datama-solutions.github.io



<h2>Tip of the week #15</h2>

➡️ Envie d’utiliser DataMa pour d’autres analyses mais vous êtes en panne d’idées 💡?

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

N’hésitez pas à nous contacter pour partager vos propres uses cases avec les utilisateurs DataMa!



<h2>Tip of the week #14</h2>

Dans les nouveautés mises en production durant le confinement, on retrouve la fonctionnalité : Export graph as public URL :bar_chart:

Tous les graphes des solutions DataMa peuvent désormais être exportés dans votre dashboards Tableau, Data Studio… ou bien dans votre navigateur web !

Cela vous permet d’enrichir vos reportings habituels avec des graphiques DataMa :

* Dans DataMa, en haut à droite de chaque graphique, sélectionnez l’icone : « Export Graph as public URL«
* Autorisez les droits pour partager cette URL sécurisée
* Puis utilisez cette URL comme un bloc « URL » dans votre outil de data visualisation habituelle et voila !

Les données de ce nouveau Widget sont constamment à jour des données chargées dans DataMa.

**Note:** Cette fonction est activée sur demande, contactez-nous si vous souhaitez activer cette fonctionnalité.


<h2>Tip of the week #13</h2>

Quand on veut utiliser DataMa, on se pose souvent la question des données… 💻

Comment connecter mes données dans DataMa ? Comment faire pour que ma donnée (et donc mes graphiques) soit mise à jour au fur et à mesure ? Une des solutions…c’est Google spreadsheet !  💡

* Dans Google Spreadsheet, vous pouvez, grâce aux extensions disponibles dans la solution, connecter n’importe quelle source de données (içi par exemple Google analytics)
* Une fois dans DataMa, en créant un nouveau Use Case à partir de l’URL de la feuille Gsheet, vous pouvez préciser (en cochant la case : Keep Live connection with Gsheet) que vous souhaitez que les données soient automatiquement mises à jour….
* Et le tour est joué…

Vous pouvez par ailleurs utiliser d’autres extensions comme « OWOX BI BigQuery » pour vos requêtes BigQuery ou bien encore l’add-on « Supermetrics » pour la connexion à toutes les autres applications du marché !


<h2>Tip of the week #12</h2>

🆕 Le nouveau bandeau est en place sur la plateforme DataMa !

Cela permet non seulement de rendre les fonctionnalités d’admin plus accessible (nouvelle source, exports…) mais aussi d’ajouter quelques fonctionnalités basiques mais toujours utiles:

* Passez d’une solution à une autre (Compare, Impact, Pivot, Journey…) dans la même page 🔄
* Vérifiez que votre travail est enregistré avec le nom du use case en cours
* Sauvez rapidement vos paramètres en cliquant sur « Save » (au lieu de « Save As »)

Merci de nous remonter vos impressions lorsque vous testez !

**Note:** Ce nouveau bandeau remplace l’ancien menu ‘Admin’ qui était en bas à gauche de la page!

![Tip 12]({{site.url}}/{{site.baseurl}}/assets/images/tip/12.gif)

<h2>Tip of the week #11</h2>

Par ces temps troublés 😷, vous avez une partie de vos données qui est « non comparable » dans votre analyse DataMa Compare (genre un canal de distribution… qui n’existe plus 😕!), mais vous souhaitez tout de même les voir apparaître à part dans votre Waterfall, pour ne comparer vos KPIs que sur des choses comparables (🍎 to 🍎) ?

➢ Créez une colonne « Scope » contenant la mention « In » pour ce que l’on veut conserver ou « Out » pour ce que l’on souhaite exclure

➢ DataMa excluera automatiquement le « Out » de l’analyse et le fera apparaître dans un bloc à part de la waterfall, en bleu clair « Out of Scope »

Voir un exemple concret [ici](https://www.docs.datama.fr/docs/datama-compare/general-introduction/use-cases-examples/marketing-campaign/marketing-campaign-scope/) !

Préparé avec ❤️ depuis chez nous, on pense à vous et on vous accompagne sur tous vos sujets à distance!

 ![Tip 11]({{site.url}}/{{site.baseurl}}/assets/images/tip/11.png)

<h2>Tip of the week #10</h2>

Lorsque vous utilisez DataMa COMPARE pour comparer deux périodes de temps. Vous pouvez paramétrer la solution pour que vos analyses dans DataMa soient toujours à jour de vos dernières données. 🏃‍♀️

Il vous suffit de :

1. Charger une nouvelle source (menu « Change source« ) via une « Google Sheet« .
2. Puis sélectionner l’option « Keep Live connexion with Gsheet«
3. Une fois l’analyse en place, il vous faut sauvegarder le Use case en laissant sélectionnée l’option « Dynamic saving of Start & End«.🚧  Attention à ce que les dates utilisées comme Start et End existent bien dans le dataset !
4. A partir de l’intervalle utilisé pour Start et End (1ère semaine comparé à la 4ème semaine du dataset par exemple), DataMa reproduira ce même intervalle selon les dernières données existantes…

Une fois que vos données se mettent à jour toutes seules, vous n’avez plus qu’a paramétrer un envoie régulier vers votre boite mail ou un channel Slack et le tour est joué

![Tip 10]({{site.url}}/{{site.baseurl}}/assets/images/tip/10.gif)

<h2>Tip of the week #9</h2>

Pour accélérer vos analyses nous avons accéléré le chargement de vos données. 🚀

Dans DataMa, vous pouvez maintenant :

* Copier-coller vos tableaux Excel ou vos URL Gsheet
* faire un drag & drop de vos fichiers de données (excel, csv)

DataMa reconnaît directement la source et vous propose de lancer directement l’analyse !

Pour en savoir plus:


<h2>Tip of the week #8</h2>

Vous pouvez maintenant utiliser DataMa comme une extension de Tableau ➕ !

Vous glissez-déposez l’extension fournie par DataMa dans votre dashboard Tableau, et vous accédez depuis DataMa à la donnée visualisée dans une worksheet Tableau.

Non seulement vos données sont à jour de ce que vous avez déjà dans Tableau, mais vos filtres et autres actions dans Tableau sont alors actifs dans DataMa ! 🔄

![Tip 8]({{site.url}}/{{site.baseurl}}/assets/images/tip/8.gif)

Pour en savoir plus: https://www.docs.datama.fr/docs/extensions/tableau-extension/


<h2>Tip of the week #7</h2>

* Saviez vous qu’il suffisait d’appuyer sur le raccourci « Entrée » ↪️ dans votre clavier pour mettre à jour les calculs dans DataMa ?

* Maintenant oui 🙂

![Tip 7]({{site.url}}/{{site.baseurl}}/assets/images/tip/7.png)

<h2>Tip of the week #6</h2>

Perdu dans DataMa :question:

En plus de la documentation, il existe depuis peu un tutoriel qui vous guide de manière interactive dans vos premiers pas sur l’app 👣

* Cliquez sur « Launch tutorial » en haut à droite de l’écran pour vous mettre sur la bonne voie ! 🧗‍♂️

![Tip 6]({{site.url}}/{{site.baseurl}}/assets/images/tip/6.png)

<h2>Tip of the week #5</h2>

Vous pouvez facilement filtrer vos analyses dans DataMa sur une partie de votre dataset source.

* Excluez purement et simplement toute une dimension de l’analyse en utilisant « Excluded Dimension ». DataMa ne remontera plus cette dimension comme étant celle qui peut expliquer la variation de votre performance, mais cela ne change pas le total de la performance que vous expliquez.
* Filtrez uniquement sur une partie de vos données en utilisant les filtres, en sélectionnant la dimension puis le/ les segments de cette dimension à conserver. Vous pouvez filtrer sur deux dimensions en même temps (Level 1 et Level 2). Ces filtres apparaîtront dans les titres de vos graphs pour plus de contexte.


<h2>Tip of the week #4</h2>

Comme vous le savez, afin de vous expliquer votre variation de performance globale, DataMa analyse indépendamment pour chaque étape chacune de vos dimensions pour vous remonter celles qui expliquent le mieux la variation de cette étape. Mais l’outil analyse également des combinaisons de dimensions. Soit toutes les dimensions combinées ensemble (Combined Dimensions) soit toutes les paires de dimensions (Smart Dimension). 👨‍🔬

* La dimension Combined Dimension est activée par défaut mais l’option Smart Dimension est à activer dans le menu Settings.
* Une fois activée, la fonction Smart Dimension va identifier pour chaque étape, la meilleure combinaison de dimension. Lorsqu’une paire de dimension a plus de sens pour votre variation qu’une dimension seule elle s’affiche avec le signe « x » entre les 2 dimensions sélectionnées. 💑
* La combinaison choisie par la fonction Smart Dimension est disponible dans les différents graphiques de l’outil.


<h2>Tip of the week #3</h2>

Dans toutes les solutions DataMa, vous avez la possibilité de regrouper ensemble les éléments d’une dimension qui ne représente presque rien sur votre performance. 🧐

* Dans le menu Settings, la barre « aggregation in % » correspond au niveau d’agrégation que vous pouvez choisir. vous pouvez ainsi regrouper ensemble les éléments qui représentent moins de 2%, 3%, 4%…du total de votre indicateur global. (Par défaut DataMa agrège ce qui représente moins de 2% du total)

* Cette fonctionnalité correspond à la mention « Other (<2% ot the total) » que vous pouvez retrouver souvent dans les graphiques !

Utile notamment quand vos données présentent des dimensions avec des centaines de valeurs différentes.


<h2>Tip of the week #2</h2>

Dans DataMa Compare et Impact, vous pouvez pré visualiser la définition de « Start » et « End » en utilisant « Overview chart »

* Cliquez sur la petite icone de graph à droite de « Start & End Dimension »
* Les barres représentent la métrique que vous cherchez à suivre. En bleu, « Start », en orange « End », en gris ce qui est « other » ni Start ni End
* L’onglet « Overview summarize » permet d’avoir une vision aggrégée

Utile notamment dans le cas où l’on n’est pas certain de ce qu’on souhaite comparer !
