---
title: Tableau extension demo
description: Tableau extension demo is an introduction to DataMa analysis limited in time and capacity. You may want to contact us for getting fully up to speed
layout: page
---

> Tableau extension demo is an introduction to DataMa analysis limited in time and capacity. You may want to contact us for getting fully up to speed

DataMa helps you do the job of an advanced data analyst faster, in Tableau.
It's particularly helpful for marketing analysis, such has gap/ root cause analysis.
Using this extension you will have access to
* Waterfall analysis using [DataMa Compare]({{site.url}}/{{site.baseurl}}/core_app/compare)
* Significance analysis using [DataMa Impact]({{site.url}}/{{site.baseurl}}/core_app/impact)
* Driver analysis using [DataMa Pivot]({{site.url}}/{{site.baseurl}}/core_app/pivot)

Below is a step by step on how to get it working in tableau

## 1. Create a source worksheet

In Tableau Desktop, create a new worksheet a source for DataMa.

A source worksheet should have all the metrics and dimensions you want to analyse in DataMa.
Typically a source for DataMa will have
* A set of dimensions in Rows
  * The dimension you want to compare on should come first
* A set of metrics in columns
  * The metrics should come in alphabetical order, so that DataMa automatically creates the right [Metric relation]({{site.url}}/{{site.baseurl}}/core_app/header/input/metric_relation).
    Adding a "1_..", "2_.." in the naming of your metrics should help in that regard

Here is an example of a source from The SuperStore default dataset of Tableau.
![Source example]({{site.url}}/{{site.baseurl}}/core_app/header/create_new_use_case/extensions/tableau_demo/images/Source_Example.png)

Please refer to the full documentation to learn more about [sources]({{site.url}}/{{site.baseurl}}/core_app/header/input/source) or see [example of use cases]({{site.url}}/{{site.baseurl}}/home/use_cases/use_cases_examples)

## 2. Insert the DataMa extension in a dashboard

* Download the DataMa demo Tableau extension .trex file. It is available on the [Tableau Gallery](https://extensiongallery.tableau.com/extensions).
* In Tableau desktop, create a dashboard, and add your worksheet to this dashboard
* Drag and drop 'extension' Object in your dashboard and select the .trex file you just downloaded
* Click 'Start' at the bottom of the welcome modal when it appears

Here is an example of a source from The SuperStore default dataset of Tableau.
![Dashboard example]({{site.url}}/{{site.baseurl}}/core_app/header/create_new_use_case/extensions/tableau_demo/images/Dashboard_welcome.png)

## 3. Get insights

By default, DataMa brings you in DataMa compare and shows a waterfall analysis, which is interactive (by clicking on the steps of the funnel)
You can switch DataMa solution and visualisation using the top left menu
We encourage that you read the documentation about each solution to understand what's in there and how it works.

* Waterfall analysis using [DataMa Compare]({{site.url}}/{{site.baseurl}}/core_app/compare)
* Significance analysis using [DataMa Impact]({{site.url}}/{{site.baseurl}}/core_app/impact)
* Driver analysis using [DataMa Pivot]({{site.url}}/{{site.baseurl}}/core_app/pivot)

### Example of Compare analysis for the SuperStore default dataset of Tableau.
![Waterfall example]({{site.url}}/{{site.baseurl}}/core_app/header/create_new_use_case/extensions/tableau_demo/images/Waterfall_Example.png)
In a glimpse, we get the waterfall that explains the gap of Sales between 2018 and 2019, driven by quantity increase and in particular the one of Office Supplies in the west, as we can read by selecting the 'Executive Summary' in the output menu.
![Waterfall example]({{site.url}}/{{site.baseurl}}/core_app/header/create_new_use_case/extensions/tableau_demo/images/ExecSum_Example.png)

### Example of Compare analysis for Digital display campaigns

<iframe width="560" height="315" src="https://www.youtube.com/embed/OaoVK166Bl0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
