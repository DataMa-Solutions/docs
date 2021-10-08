---
title: Smart dimension
description: The Smart dimension identifies the pair of dimensions which is most relevant in explaining performance variation.
layout: page
---

For each step of the waterfall analysis, the *Smart dimension* identifies the pair of dimensions which is most relevant in explaining performance variation. It comes in addition to the *Combined dimension* which crosses all dimensions.

<center><img src="{{site.url}}{{site.baseurl}}/core_app/compare/web_application/menu/images/Smart-Dimension-768x188.png"/></center>

### Example

Consider the scenario in which your performance is entirely explained by a performance decline on mobile users with the Firefox browser. When turning on Smart dimension, DataMa Compare will identify the Device*Browser dimension as the most relevant dimension. However, when leaving the Smart dimension option off, DataMa Compare will attribute the performance variation to either the Device or Mobile dimension.



### Activate Smart Dimension

To activate Smart Dimension, click in Settings and switch on the Smart dimension button. Combinaison of smart dimension will appear in the waterfall only if they are more relevant than an alone dimension.

<center><img src="{{site.url}}{{site.baseurl}}/core_app/compare/web_application/menu/images/ActivateSmartDimension-300x228.jpg"/></center>

### Downsides

> Since it implies a longer computation time, this option is off by default. However, we recommend you turn it on if you have a small set of dimension (less than 10).
