---
feed: totw_fr
title:  "Tip of the Week 95: Nouvelles méthodes pour la détection d'anomalies"
date:   2023-10-23 12:00:00 +0200
img_url: /assets/images/tip/95.gif
img_type: image/gif
img_width: 600
img_height: 300
layout: post
---


Vous disposez maintenant de nouvelles méthodes dans Datama Detect pour repérer les anomalies dans vos données :
1. Il existait les méthodes basées sur l'intervalle de confiance estimé
  * Prévision (seulement disponible dans "Analyse du dernier point seulement")
  * Volatilité observée (méthode par défaut)
2. Vous avez maintenant à votre dispositions les méthodes basées sur des seuils configurés manuellement 🥳)
  * Seuil de Variation Relative : par exemple, si le seuil est fixé à 50% alors toute variation relative qui sera supérieure à 50% sera considérée comme une anomalie.
  * Seuil de Variation Absolue : en reprenant l'exemple précédant, ici on ne définit par un seuil en pourcentage mais une valeur fixe (2k) et toute variation absolue qui excédera cette valeur (-2,1k) sera considérée comme une anomalie.
  * Seuil de Valeur Absolue : par exemple, si le seuil est fixé à 50k et que la valeur de la ligne de base est de 40k, si la valeur considérée est de 60k, cela sera considérée comme une anomalie.
