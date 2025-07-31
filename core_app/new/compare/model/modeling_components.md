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

When activating 'Significance Test', simple check of minimal volume (manually inputted) for given metric in Start and End
You can also use Datama Impact to assess properly signifiance of variations

<div class="info-box">
  Read more about <a href="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/settings.html#233-significance-test">Significance</a>
</div>

<br>

# 3. Scope

'Out' segment defined in column 'Scope' is excluded from analysis, and simply stacked on Start and End column in waterfall chart

<br>

# 4. Covariance

A Covariance ratio appears on the top left of the waterfall.

For waterfall analysis, covariance is distributed on each step. User should check that it remains reasonable (typically, <30%)

For Dimension analysis, covariance is not distributed on neither mix nor performance sizing. Hence user should be careful when looking at dimension impact

<div class="info-box">
Read more about [Covariance]({{site.url}}/{{site.baseurl}}/core_app/compare/model/waterfall/covariance)
</div>


<br>