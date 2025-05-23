---
title: Metrics relation
description: Find here how you can build a market equation in Datama
layout: new-page
scope: Datama/saas
keywords: full app subheader sub header metrics relation mr metric
---

<br>

> **Metric relation** describes the equation between metrics of your source, in order to compute the KPI you want to explain.

<br>

When using the solution, you can access the definition of your metric relation in the Subheader > KPI > Settings. Otherwise metrics relation are available in the Output block of Datama Prep.
<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/Edit_metricsrel.jpg"/></center>

<br/>

Included steps (selected) are the steps that are kept within your overall Metric Relation definition. This allows you to change your overall « Market Equation » and the KPI you’re following, as well as grouping/ expanding the steps you’ve defined

In the Subheader, the steps included will be indicated by a green outline.

Excluded steps will disappear from the header.

To re-include a step, click on KPI to access all the steps from the metric relation. From here you can re-include the gray outlined steps or remove a step.

<br>

## 1. Change metrics relation

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/metrics_relation.jpg"/></center>

Instead of "prod", you can build your own market equation, such a "sum" for examples or even more customized one.

<br>

## 2. Prod, Sum and Custom

By default Datama create a product of ratio (prod) with all the steps defined in the metrics relation.
But you can change it with "sum" to add each steps. e.g: <span style="color:red">Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1) </span>.

When customising your metrics relation you should write it as below using each step between brackets (e.g. [1]) :
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/custom_metricsRel.jpg"/></center>
When modifying a market equation make sure your calculation is still correct. In your dataset your market equation of a specific row should be equal to the last column of your dataset (only for default market equation).

<br>

## 3. What's mathematically a market equation

Metric relation describes the equation between metrics of your [source]({{site.url}}/{{site.baseurl}}/core_app/header/input/source.html), in order to compute the **KPI you want to explain**.

At Datama, we call it the « Market Equation ». Find more information on how to create a metric relation in our [article](https://datama.io/how-to-build-my-business-metric-relation/).

Building it can be a little bit tricky, but generally you have it behind your business KPIs. All you need to do is come back to basics and try to write down how your metrics are related.

<br>

## 4. Simplistic example

A simplistic retail example: As a retailer I want to understand my Revenue. So my main KPI is <span style="color:red"> Revenue </span>.

Now, I can easily split Revenue that way: <span style="color:red"> Revenue = Volume * Revenue / Volume </span>. That makes a lot of sense, because then I have two underlying performance indicators (PI) that actually helps me split the different effect behind what I observe on my main KPI <span style="color:red"> Revenue </span>. First underlying PI is <span style="color:red"> Volume </span> (the number of products I sell), and the other is <span style="color:red"> Revenue/ Volume </span>, which is basically my unit price.

Why do I want to split those? Well basically because it’s not the same team in charge of volumes and the one in charge of pricing. So, in order to be able to identify where I need to improve, I need to split those two effects.

<br>

## 5. Generalizing

We call each underlying PI a **« Step »**, because it will be steps of the waterfall you’re building. Number of steps can be theoretically unlimited, but for obvious visual and business reasons, you probably want to limit to no more than 10 steps.

One « Step » is a ratio between two metrics of your source. You have a numerator and a denominator. When no denominator exists (e.g. <span style="color:red"> Volume </span>) we just say that Denominator is 1.

Steps gets multiplied together in order to get your KPIs. So, if your file has 5 metrics (call it <span style="color:red"> Metric1, Metric2, ..., Metric5 </span>) and your main KPI is Metric5, Metric Relation would typically look like this:

 <center> <span style="color:red"> Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4 </span> </center>

Don’t be afraid of putting too many PIs in that equation: with Datama Compare, you can always zoom in to part of the equation, or aggregate some components using the « Skip steps » functionality.

<br>

## 6. Get inspired

Datama Demo can help you get idea of Metric Relation you may want to build.

Just look at [demo sources](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=0), and related [demo use cases](https://app2.Datama.io/a/dashboard/home) you get an idea of how it could look.
