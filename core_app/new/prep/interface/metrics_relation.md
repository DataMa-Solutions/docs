---
title: Metric relation
description: Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.
layout: new-page
scope: Datama/saas/prep
keywords: full app prep metrics relation metric mr
---

<br>

> Metric relation describes the equation between metrics of your [source]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html), in order to compute the **KPI you want to explain**.

<br>

**Read more:** At Datama, we call it the « Market Equation ». Find more information on how to create a metric relation in our [article](https://Datama.fr/how-to-build-my-business-metric-relation/) .

<br>

In order to have the most relevant analysis of your data, Datama allows you to manually define your market equation. 

To do so, click on the Datama block, define your metrics and dimensions, then define your market equation.

Add the number of steps you want and define the function to join your different steps !

By default, Datama generates a funnel market equation.



Building it can be a little bit tricky, but generally you have it behind your business KPIs. All you need to do is come back to basics and try to write down how your metrics are related.

<br>

# 1. Simplistic example

A simplistic retail example: As a retailer I want to understand my Revenue. So my main KPI is <span style="color:red"> Revenue </span>.

Now, I can easily split Revenue that way: <span style="color:red"> Revenue = Volume * Revenue / Volume </span>. That makes a lot of sense, because then I have two underlying performance indicators (PI) that actually helps me split the different effect behind what I observe on my main KPI <span style="color:red"> Revenue </span>. First underlying PI is <span style="color:red"> Volume </span> (the number of products I sell), and the other is <span style="color:red"> Revenue/ Volume </span>, which is basically my unit price.

Why do I want to split those? Well basically because it’s not the same team in charge of volumes and the one in charge of pricing. So, in order to be able to identify where I need to improve, I need to split those two effects.

<br>

# 2. Generalizing

We call each underlying PI a **« Step »**, because it will be steps of the waterfall you’re building. Number of steps can be theoretically unlimited, but for obvious visual and business reasons, you probably want to limit to no more than 10 steps.

One « Step » is a ratio between two metrics of your source. You have a numerator and a denominator. When no denominator exists (e.g. <span style="color:red"> Volume </span>) we just say that Denominator is 1.

Steps gets multiplied together in order to get your KPIs. So, if your file has 5 metrics (call it <span style="color:red"> Metric1, Metric2, ..., Metric5 </span>) and your main KPI is Metric5, Metric Relation would typically look like this:

 <center> <span style="color:red"> Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4 </span> </center>

Don’t be afraid of putting too many PIs in that equation: with Datama Compare, you can always zoom in to part of the equation, or aggregate some components using the « Skip steps » functionality.


Datama goes further with Metric Relation by adding multiple properties to refine your analysis for your use case, like Unit, focused dimension and excluded dimensions

<br>

# 3. Get inspired

[Datama examples]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/get_inspired.html) can help you get idea of Metric Relation you may want to build.
