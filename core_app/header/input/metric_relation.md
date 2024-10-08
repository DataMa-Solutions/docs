---
title: Metric relation
description: Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.
layout: page
scope: shiny
---

> Metric relation describes the equation between metrics of your [source]({{site.url}}/{{site.baseurl}}/core_app/header/input/source.md), in order to compute the **KPI you want to explain**.

At Datama, we call it the « Market Equation ». Find more information on how to create a metric relation in our [article](https://datama.io/how-to-build-my-business-metric-relation/).

Building it can be a little bit tricky, but generally you have it behind your business KPIs. All you need to do is come back to basics and try to write down how your metrics are related.

## Simplistic example

A simplistic retail example: As a retailer I want to understand my Revenue. So my main KPI is <span style="color:red"> Revenue </span>.

Now, I can easily split Revenue that way: <span style="color:red"> Revenue = Volume * Revenue / Volume </span>. That makes a lot of sense, because then I have two underlying performance indicators (PI) that actually helps me split the different effect behind what I observe on my main KPI <span style="color:red"> Revenue </span>. First underlying PI is <span style="color:red"> Volume </span> (the number of products I sell), and the other is <span style="color:red"> Revenue/ Volume </span>, which is basically my unit price.

Why do I want to split those? Well basically because it’s not the same team in charge of volumes and the one in charge of pricing. So, in order to be able to identify where I need to improve, I need to split those two effects.

## Generalizing

We call each underlying PI a **« Step »**, because it will be steps of the waterfall you’re building. Number of steps can be theoretically unlimited, but for obvious visual and business reasons, you probably want to limit to no more than 10 steps.

One « Step » is a ratio between two metrics of your source. You have a numerator and a denominator. When no denominator exists (e.g. <span style="color:red"> Volume </span>) we just say that Denominator is 1.

Steps gets multiplied together in order to get your KPIs. So, if your file has 5 metrics (call it <span style="color:red"> Metric1, Metric2, ..., Metric5 </span>) and your main KPI is Metric5, Metric Relation would typically look like this:

 <center> <span style="color:red"> Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4 </span> </center>

Don’t be afraid of putting too many PIs in that equation: with Datama Compare, you can always zoom in to part of the equation, or aggregate some components using the « Skip steps » functionality.

## Get inspired

Datama Demo can help you get idea of Metric Relation you may want to build.

Just look at [demo sources](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=0), and related [demo use cases](http://solutions.Datama.fr/) you get an idea of how it could look.
