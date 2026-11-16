---
feed: totw_fr
title:  "Tip of the week 199: Gardez 'Other' sous contrôle avec le clustering Long tail"
date:   2026-11-19 08:00:00 +0100
img_url: /assets/images/tip/199.gif
img_type: image/gif
img_width: 800
img_height: 450
layout: post
---

"Other" est la plus grande barre de votre graphique ? 🧺

Datama regroupe les petits segments dans "Other" pour garder vos visuels lisibles. Sur une dimension avec beaucoup de petites valeurs (villes, magasins, SKU), "Other" peut finir par peser plus que votre premier segment. **Long tail** règle le problème : seuls les plus petits segments sont regroupés, tant que leur total reste sous votre seuil.

Comment faire 👇

* ⚙️ Ouvrez **Settings**, puis la section **Clustering**
* 🎯 Réglez le **Threshold** : à 5 %, "Other" ne pèse jamais plus de 5 % de votre KPI
* 🧮 Passez la **Method** de **Smallest segments** à **Long tail**, puis cliquez sur **Apply**
* 🧩 Disponible dans **Explore**, **Compare**, **Detect** et **Assess**

✨ Vos vrais leviers restent visibles, et "Other" redevient une simple note de bas de page.
