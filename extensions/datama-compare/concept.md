---
title: Concept of Datama Compare
layout: page
scope: datama/light/compare
---

> **Here is what you should now about DataMa to understand what is behing the solution**


## What we are trying to answer?

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/images/compare_introduction.png" /></center>

<br>

This analysis is possible thanks to **2 main types** of data collected from your business:

* **Business Metrics data of the company** (revenue, sales volume, number of users impacted by a marketing campaign, etc.)
* and the **dimensions associated** with these volumes (customer segment, type of product sold, country, vendors, age, gender, device, year, models, …)

<br>

### Analysis Structure

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/Model-300x266.jpg"/></center>

<br>

## Metrics relation

> **Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.**

### Simplistic example

A simplistic retail example: As a retailer I want to understand my Revenue. So my main KPI is <span style="color:red"> Revenue </span>.

Now, I can easily split Revenue that way: <span style="color:red"> Revenue = Volume * Revenue / Volume </span>. That makes a lot of sense, because then I have two underlying performance indicators (PI) that actually helps me split the different effect behind what I observe on my main KPI <span style="color:red"> Revenue </span>. First underlying PI is <span style="color:red"> Volume </span> (the number of products I sell), and the other is <span style="color:red"> Revenue/ Volume </span>, which is basically my unit price.

Why do I want to split those? Well basically because it’s not the same team in charge of volumes and the one in charge of pricing. So, in order to be able to identify where I need to improve, I need to split those two effects.

<br>

### Generalizing

We call each underlying PI a **« Step »**, because it will be steps of the waterfall you’re building. Number of steps can be theoretically unlimited, but for obvious visual and business reasons, you probably want to limit to no more than 10 steps.

One « Step » is a ratio between two metrics of your source. You have a numerator and a denominator. When no denominator exists (e.g. <span style="color:red"> Volume </span>) we just say that Denominator is 1.

Steps gets multiplied together in order to get your KPIs. So, if your file has 5 metrics (call it <span style="color:red"> Metric1, Metric2, ..., Metric5 </span>) and your main KPI is Metric5, Metric Relation would typically look like this:

 <center> <span style="color:red"> Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4 </span> </center>

Don’t be afraid of putting too many PIs in that equation: with DataMa Compare, you can always zoom in to part of the equation, or aggregate some components using the « Skip steps » functionality.

<br>

---

Hope you enjoy it.

Please feel free to send any [feedback](https://datama.io/lets-talk/) and do not hesitate to reach us if you have any question about the solution, your analysis or the documentation. We will be more than happy to get your point of view.
