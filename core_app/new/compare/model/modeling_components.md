---
title: Other important modeling components
description: Here is a list of modeling components available.
layout: new-page
scope: Datama/saas/compare
keywords: full app compare model modeling component
---


<br>

# 1. Clustering

Clustering is necessary for dimension analysis
* For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into “other”
* For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets.

Read docs related to [continuous dimension]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/marketing_continuous.html)

<br>

# 2. Significance Test

When activating the ‘Significance Test’, a simple check is performed to ensure the minimum volume (manually inputted) is met for the selected metric in both the Start and End periods.

You can also use Datama Assess to properly assess the significance of variations.

<div class="info-box">
  Read more about <a href="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/settings.html#233-significance-test">Significance</a>
</div>

<br>

# 3. Scope

The Scope feature allows you to analyze a specific segment of your dataset (using a column named "Scope" with values "In" or "Out") while still preserving the overall KPIs.

For example, let’s say your dataset includes both store data and ecommerce data. If you want to analyze the conversion rate evolution of your ecommerce platform, but still keep the total revenue (from both stores and ecommerce), you can:

- Create a "Scope" column,

- Mark ecommerce-related rows as "In",

- And mark store-related rows as "Out".

The resulting analysis will focus only on the ecommerce segment, but will retain the total revenue in the background, giving you a more precise view without losing overall context.

'Out' segment defined in column 'Scope' is excluded from analysis, and simply stacked on Start and End column in waterfall chart

<div class="info-box">
  <strong>Note</strong>: You can see an example 
  <a href="{{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/marketing_scope.html">here</a>
</div>

<br>

# 4. Covariance

A Covariance ratio appears on the top left of the waterfall.

For waterfall analysis, covariance is distributed on each step. User should check that it remains reasonable (typically, <30%)

For Dimension analysis, covariance is not distributed on neither mix nor performance sizing. Hence user should be careful when looking at dimension impact

<div class="info-box">
  Read more about <a href="{{site.url}}/{{site.baseurl}}/core_app/compare/model/waterfall/covariance.html">Covariance</a>
</div>


<br>