---
title: Other important modeling components
description: Here is a list of modeling components available.
layout: page
scope: datama/saas/compare
keywords: full app compare model modeling component
---

<br>

Here is what you are going to find in this page: 
- [Clustering](#clustering)
- [Interdependance](#interdependence)
- [Combined Dimension](#combined-dimension)
- [Significance](#significance)
- [Scope](#scope)
- [Covariance](#covariance)

<br>

## <b>Clustering </b>

Clustering is necessary for dimension analysis
* For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into “other”
* For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets.

Read docs related to [continuous dimension]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/marketing_continuous.html)

<br>

## <b>Interdependence</b>

In 'Safe Mode', most correlated dimensions are flagged. Interdependencies between dimensions are tested using Chi-Square and simple business calculation.

<br>

## <b>Combined dimension</b>

Combined dimension is created by concatenating all clustered dimensions into one “Combined_Dimension”. It is then considered as all other dimensions and it’s contribution in the variation performance is assessed as it is for the other dimensions.

<br>

## <b>Significance</b>

In 'Safe Mode', simple check of minimal volume (manually inputted) for given metric in Start and End
You can also use DataMa Impact to assess properly signifiance of variations

<br>

## <b>Scope</b>

'Out' segment defined in column 'Scope' is excluded from analysis, and simply stacked on Start and End column in waterfall chart

<br>

## <b>Covariance</b>

A Covariance ratio appears on the top left of the waterfall.

For waterfall analysis, covariance is distributed on each step. User should check that it remains reasonable (typically, <30%)

For Dimension analysis, covariance is not distributed on neither mix nor performance sizing. Hence user should be careful when looking at dimension impact

Read more about [Covariance]({{site.url}}/{{site.baseurl}}/core_app/compare/model/waterfall/covariance)

<br>