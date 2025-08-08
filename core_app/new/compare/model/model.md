---
title: Model
description: Here is what you should know about Datama to understand what is behind the solution
layout: new-page
scope: Datama/saas/compare
keywords: full app compare model
---

<br>

> Here is what you should know about Datama to understand what is behind the solution

<br>

# 1. Waterfall Analysis

Identify which step of the funnel is driving the change. Better understand how to interpret the waterfall. 

See details [here]({{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/waterfall.html)

<br>

# 2. Dimension Analysis

Identify which dimension in a specific step is driving the change with some details on Mix and Performance effect.

See details here for [Mix Effects]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html) and for [performance effects]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html)

<br>

## 2.1 Mix Effect
For each step, analyze how much mix effects on each dimension contributes to the observed gap

See details [here]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html)

<br>

## 2.2 Segment Performance
For each step and each dimension, identify which specific segment performance is driving the observed gap

See details [here]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html)

<br>

# 3. Other Modeling Components

## 3.1 Clustering

Clustering is necessary for dimension analysis:
- For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into "other"
- For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets.

Read docs related to [continuous dimension]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/marketing_continuous.html)

<br>

## 3.2 Interdependence

In 'Safe Mode', most correlated dimensions are flagged. Interdependencies between dimensions are tested using Chi-Square and simple business calculation.

<br>

## 3.3 Combined Dimension

Combined dimension is created by concatenating all clustered dimensions into one "Combined_Dimension". It is then considered as all other dimensions and its contribution in the variation performance is assessed as it is for the other dimensions.

<br>

## 3.4 Significance

In 'Safe Mode', simple check of minimal volume (manually inputted) for given metric in Start and End.
You can also use Datama Impact to assess properly significance of variations.

<br>

## 3.5 Scope

'Out' segment defined in column 'Scope' is excluded from analysis, and simply stacked on Start and End column in waterfall chart.

<br>

## 3.6 Covariance

A Covariance ratio appears on the top left of the waterfall.

For waterfall analysis, covariance is distributed on each step. User should check that it remains reasonable (typically, <30%).

For Dimension analysis, covariance is not distributed on neither mix nor performance sizing. Hence user should be careful when looking at dimension impact.

Read more about [Covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/covariance)

<br>


<!-- <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/Model-300x266.jpg"/></center> -->
