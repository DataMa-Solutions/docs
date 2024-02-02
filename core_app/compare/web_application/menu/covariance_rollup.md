---
title: Covariance Roll up
description: Distribute covariance for each segment level before summing up at total level
layout: page
scope: shiny
---

> **Distribute covariance for each segment level before summing up at total level

By default in DataMa Compare, the [covariance]({{site.url}}/{{site.baseurl}}//core_app/compare/model/waterfall/covariance.html) between each step of the market equation is distributed on total computation level.

However in some cases, you might want this distribution to be done at a lower level within a given dimension, so that when summing up the impact of each steps for each segment of that dimension at total level, you end up with the exact same total.
This is particularly true when you systematically deep dive on each segment of a dimension (e.g. by Country) and also display to your end users the sum of all those segments (e.g. worldwide)

"Covariance roll up" toggle helps you do this calculation pattern, by computing the impact for each segment of a given dimension, and then sums them up at total level.
To use it
* Activate the covariance roll up toggle
* Select the dimension you want for sub-segment distribution of covariance

See an example below:

![overview]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/images/covariance_rollup.png)
