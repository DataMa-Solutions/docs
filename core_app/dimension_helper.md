---
title: Dimension Helper
description: The Dimension Helper tabset helps you understand what you should define as a start point (or interval) and end point for your comparative analysis, By showing the KPI values across your dimensions.
layout: page
---

> The Dimension Helper tabset helps you understand what you should define as a start point (or interval) and end point for your comparative analysis, By showing the KPI values across your dimensions.
## How to access it?
Click on filters to see your dimensions then hover over them untill the bar is full. Once that's done a new pannel will show up holding the dimension helper.
## Overview chart - Default mode

After selecting a dimension you need to select a KPI using the pills inside the pannel.
<center> <img src="{{site.url}}/{{site.baseurl}}/assets/images/helpers/pills-DH.png"/></center>
As for the shown graphic it's composed of a bar chart that represents the denominator value, and on the specific case where denomonator doesn't exist the value of the KPI.
The other part is either a gantt chart for discrete dimensions (text) and lines for continuous dimensions such as dates and numbers. It represents the value of the KPI or the ratio ( numerator/ denominator).
<center> <img src="{{site.url}}/{{site.baseurl}}/assets/images/helpers/default-mode-DH.png"/></center>

## Overview chart - Filter mode

Now what happens when we add filters on other dimensions or when we exclude them?
The charts keep the same meaning but now they're separated into 2 categories:
    - Filtered: The actual values when we apply the filters.(blue)
    - Others: The leftout value.(gray)

<center> <img src="{{site.url}}/{{site.baseurl}}/assets/images/helpers/filtered-mode-DH.png"/></center>

## Overview chart - Compare mode

We can now see our KPI and denominator values grouped via a specific dimension values. But it's not enough to study the changes in KPI trends let alone finding or understading them. That's why it's important to add an extra layer. By Setting a dimension as a ** Compare dimension ** and choosing the start and end intervals that the comparaison will take place on we can gain even more information for the trend analysis.

In case we select the compare dimension itself the results should be similar to the image bellow.
<center> <img src="{{site.url}}/{{site.baseurl}}/assets/images/helpers/compare-mode-DH.png"/></center>
The categories which our data is separated into are:
    - Start : The values in the selected start interval. (blue)
    - End : The values in the selected end interval. (orange)
    - Other : The values of the elements left in that interval that are neither in start nor in end. (gray)

In case we select another dimension, when a compare dimension is defined, the results will be grouped based on the selected dimension and only the sum of all values will be shown on the start,end and other charts.
<center> <img src="{{site.url}}/{{site.baseurl}}/assets/images/helpers/selected-compare-mode-DH.png"/></center>

## Overlay chart

The overlay is the same as the overview chart with the exception of it overlaying both start and end. And it's available only when a compare dimension is defined.
> This chart is particularly helpful for time series, e.g. to compare day by day how start and end differs

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/menu/images/overlay-mode-DH.png"/></center>
