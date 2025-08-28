---
title: Covariance
description: Basically the share of the variation that you can’t attribute to one of the effect you’re trying to split out.
layout: new-page
scope: Datama/saas/compare
keywords: full app compare model covariance
---

<br>

> <b>Covariance</b>, is basically the share of the variation that you can’t attribute to one of the effect you’re trying to split out.

<br>

In general, **Covariance** is a statistic measure of joint variability between two variables. You can learn more statistical docs on the [web](https://en.wikipedia.org/wiki/Covariance), but this article focuses on the business usage in Datama Compare.

In our case, covariance is basically the share of the variation that you can’t attribute to one of the effect you’re trying to split out.

In waterfall analysis, the different effects are the different steps that you’ve defined within Metric Relation.

<br>

# 1. A basic example

You want to analyze your Revenue (<span style="color:red">A</span>) variations between Last Year (<span style="color:red"> Start </span>) and with This Year (<span style="color:red">End</span>)

For business reasons, you may want to split your Revenue (<span style="color:red">A</span>) between Volume (<span style="color:red">B</span>) and Price (<span style="color:red">B/A</span>) .

So what you want, is to really explain Revenue_ThisYear – Revenue_LastYear. (<span style="color:red">A_End - A_Start</span>)


Well, this can be written as following:

![equation]({{site.url}}/{{site.baseurl}}/core_app/new/compare/images/equation.png)

The visual representation below is much easier to get:

![covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/images/Covariance.gif)

What you want to explain is the gap in surface between the two green squares.

Well, you just split it into B effect (Purple), A/B effect (Yellow) and Covariance (Orange).

<br>

# 2. How it impacts Waterfall analysis

The above maths is great, but hard to show and explain to a business man that just want to understand why its revenue went down, or up.

So, in order to display this in a waterfall, with just volume and price effect -or whatever steps you’ve defined-, we just re attribute the covariance to each other effect, proportionally to its size.

The % of Covariance that we display in Datama Compare charts is the ratio between the Covariance and the overall gap you’re trying to explain.

We put a flag (!) when Covariance gets high (>30%), but the analysis remains true. Just think that the effects you’re trying to sort out are not fully independent, so sometimes it’s not one effect (e.g. Price) or the other (e.g. Volume) that affects your overall KPI (e.g. Revenue), but both at the same time. And that’s your Covariance!


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/compare_covariance.png"/></center>
