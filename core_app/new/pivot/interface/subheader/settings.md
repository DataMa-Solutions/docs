---
title: Pivot - Settings
description: Here is the different settings available in DataMa Pivot
layout: page
---


> Here is the different settings available in DataMa **Pivot**

<br>

- [Comparison](#comparison)
- [Filters](#filters)
- [KPI](#filters) (Metric Relation)
- [Maximum Depth Of Decision Tree](#maximum-depth-of-decision-tree)
- [Maximum Depth For Continuous Grouping](#maximum-depth-for-continuous-grouping)


<br>

> Find here the details of the main settings DataMa Pivot

<br>

## Comparison

DataMa Pivot can be used with a comparison. To enable this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing.

<br>

## Filters

Filter any element you want to remove from the data or from the analysis  (You can remove the dimension appearing
in the analysis by clicking the cross)

<br>

## KPI

In DataMa Pivot, there is only one ratio to be defined to run the module. This ratio will be used to understand the performance of the dimensions.

<br>

## Settings

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_settings.jpg">

<br/>

## Aggregation in %

The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

Click on the drop-down arrow to display the settings menu
Move the cursor to the right to increase the level of aggregation
Click on « Pivot » to get results
Segments are now aggregated at the requested level

<br/>

## Maximum Depth Of Decision Tree

**The Decision Tree is not yet avalaible in the latest version of DataMa Pivot**

By increasing the tree depth you increase the detail of the decision tree. It will be more detailed.

<br/>

## Maximum Depth For Continuous Grouping

For continuous elements, multiple clusters are created aggregating elements having a similar average KPI. The level of aggregation of the clustering is set by this parameter.
