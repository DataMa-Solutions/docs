---
title: Concept of Datama Compare
layout: page
scope: datama/light/compare
keywords: light compare concept
---

> **Here is what you should now about DataMa to understand what is behind the solution**

</br>

Here is what you get on this page:
    1. [What we are trying to answer](#1-what-we-are-trying-to-answer) 
    2. [What types of data you will need](#2-what-types-of-data-you-will-need)
    3. [How to define your Metrics Relation](#3-metrics-relation)
    4. [How to read a waterfall chart](#4-how-to-read-a-waterfall-chart-with-datama)
    
 </br>

## 1. What we are trying to answer?


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/images/compare_introduction.png" style="width: 70%;" /></center>

The Compare extension offers insightful analysis to pinpoint the exact causes behind performance variations. 

Whether you're comparing two different timeframes or two countries, this tool helps shed light on the reasons.

The results would be via a smart waterfall chart. 

<br>

## 2. What types of data you will need?

This analysis is possible thanks to **2 main types** of data collected from your business:

* **Business Metrics data of the company** (revenue, sales volume, number of users impacted by a marketing campaign, etc.)
* and the **dimensions associated** with these volumes (customer segment, type of product sold, country, vendors, age, gender, device, year, models, …)

<br>

## 3. Metrics relation

> **Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.**

### Simplistic example

A simplistic retail example: As a retailer I want to understand my Revenue. So my main KPI is <span style="color:red"> Revenue </span>.

Now, I can easily split Revenue that way: <span style="color:red"> Revenue = Volume * Revenue / Volume </span>. That makes a lot of sense, because then I have two underlying performance indicators (PI) that actually helps me split the different effect behind what I observe on my main KPI <span style="color:red"> Revenue </span>. First underlying PI is <span style="color:red"> Volume </span> (the number of products I sell), and the other is <span style="color:red"> Revenue/ Volume </span>, which is basically my unit price.

Why do I want to split those? Well basically because it’s not the same team in charge of volumes and the one in charge of pricing. So, in order to be able to identify where I need to improve, I need to split those two effects.


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/extensions/assets/gif/Concept_MarketEquation.png" style="width: 70%;" /></center>

<br>

### Generalizing

We call each underlying PI a **« Step »**, because it will be steps of the waterfall you’re building. Number of steps can be theoretically unlimited, but for obvious visual and business reasons, you probably want to limit to no more than 10 steps.

One « Step » is a ratio between two metrics of your source. You have a numerator and a denominator. When no denominator exists (e.g. <span style="color:red"> Volume </span>) we just say that Denominator is 1.

Steps gets multiplied together in order to get your KPIs. So, if your file has 5 metrics (call it <span style="color:red"> Metric1, Metric2, ..., Metric5 </span>) and your main KPI is Metric5, Metric Relation would typically look like this:

 <center> <span style="color:red"> Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4 </span> </center>

Don’t be afraid of putting too many PIs in that equation: with DataMa Compare, you can always zoom in to part of the equation, or aggregate some components using the « Skip steps » functionality.

<br>



## 4. How to Read a Waterfall Chart with Datama

Main element of the extension is the waterfall graph. 

> Datama reveals the impact of each data variation on your Key Performance Indicators (KPIs):

Each waterfall step represents a variance of a ratio of your performance, offering insights into their individual contributions.

- The waterfall below is explaining the gap of -28,1% in Revenue from last year (45,549€) to this year (32,747€)
- Each step is a variation that explains the gap of -28.1% (mainly due to -11.7% of Users and -26.7% of Checkout/ Session)
- When the Checkout/ Sessions drops from -26.7% it has an impact of 12,298€ on Revenue 


<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Structure_Waterfall.png" /></center>

</br>

- After seeing the quantitative variation of your Revenue, it’s time to understand what causes this variation.
- By clicking on a step, the graph displays the dimension that best explains your variations and give the impact each element of this dimension has on that variation. (by clicking right then "Split by" you can see the interest score of other dimension and choose to modify the dimension that appears.) 
- Each variation is split between mix and performance (see article or the next section to understand the difference)


---

### Hope you enjoy it. 

Please feel free to send any [feedback](https://datama.io/lets-talk/) and do not hesitate to reach us if you have any question about the solution, your analysis or the documentation. We will be more than happy to get your point of view.
