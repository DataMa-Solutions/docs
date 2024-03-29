---
title: Dimension comparison
description: The dimension comparison is the first element of Datama PIVOT interface. It sorts all the dimension by importance from left to right.
layout: page
scope: shiny
---

The dimension comparison is the first element of Datama PIVOT interface. It sorts all the dimension by importance from left to right, regarding the KPI your are following (see *Definitions* in the left menu).

* Dimensions is sorted according to the *Standard deviation* which is weighted according to the volume. This basically means that dimensions on the left of the charts have segments that differs a lot on the selected KPIs. Depending on the dimension you're looking at, one could then identify business opportunities in increasing the performance of low bubbles on this chart, if that is feasible.  
* Size of the bubble represent the volume and height of the bubble represents the value of your KPI for that specific segment.


### Examples:

The eCommerce example below shows the importance of 5 dimensions to measure the *Revenue per User*.

Medium is the most important dimension and Gender is the less important.

Each bubble of Medium, represent a type of medium (referral, organic, direct…), the grey bar represents the value of the *Weighted Standard deviation* used to sort the dimension.

![bubble]({{site.url}}/{{site.baseurl}}/core_app/pivot/web_application/dashboard/dimension_importance/images/DimensionImportance-1-1024x312.jpg)
