---
title: Other important modeling components
description: Here is a list of modeling components available.
layout: page
---

<br>

Here is what you are going to find in this page: 
- [Clustering](#clustering)
- [Interdependance](#interdependence)
- [Combined Dimension](#combined-dimension)
- [Significance](#significance)
- [Scope](#scope)
- [Covariance](#covariance)
- [Analysis depth](#analysis-depth)

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

## Analysis depth

This feature allows you to adapt the level of detail DataMa will describe in the comment. The default level is “Medium”.

<br>


## Comparable Date

Comparable date is an automated dimension added by DataMa when the Comparison dimension is a date. 

This will take 3 different forms : 
- Day : When you’re comparing the performance of 2 weeks, “Comparable Date” will be Day 1, Day 2 until Day 7 to be able to compare Monday versus Monday between the Weeks.
- Week : When you’re comparing the performance of 2 months, “Comparable Date” will be Week 1, Week 2 …. to be able to compare the Weeks in between the Months you are comparing.
- Month : When you’re comparing the performance of 2 years, “Comparable Date” will be Months 1, Months 2 …. to be able to compare the Months in between the Years you are comparing.
