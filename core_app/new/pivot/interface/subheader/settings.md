---
title: Pivot - Settings
description: Here is the different settings available in DataMa Pivot
layout: page
---


> Here is the different settings available in DataMa **Pivot**

<br>

<b>Single Dimension Clusturing:<b><br>
- [Aggregation in %](#aggregation-in-)
- [Maximum Depth For Continuous Grouping](#maximum-depth-for-continuous-grouping)

<br>
<b>Multiple Dimensions Clusturing:<b><br>
- [Maximum Depth Of Decision Tree](#maximum-depth-of-decision-tree)

<br>
<b>Basic setting:s<b><br>
- [Comparison](#comparison)
- [KPI](#kpi) (Metric Relation)

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/pivot/images/pivot_settings.jpg">

> Find here the details of the main settings DataMa Pivot

<br/>

# <b>Single Dimension Clustering<b>
<br>

## Aggregation in %

The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

Click on the drop-down arrow to display the settings menu
Move the cursor to the right to increase the level of aggregation
Click on « Pivot » to get results
Segments are now aggregated at the requested level

<br>

## Maximum Depth For Continuous Grouping

For continuous elements, multiple clusters are created aggregating elements having a similar average KPI. The level of aggregation of the clustering is set by this parameter.

<br/>

# <b>Multiple Dimension Clustering<b>
<br/>

## Maximum Depth Of Decision Tree

**The Decision Tree is not yet avalaible in the latest version of DataMa Pivot**

By increasing the tree depth you increase the detail of the decision tree. It will be more detailed.

<br>

# <b>Basic settings<b>
<br>

## Comparison

DataMa Pivot can be used with a comparison. To enable this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing.

<br>

## KPI

In DataMa Pivot, there is only one ratio to be defined to run the module. This ratio will be used to understand the performance of the dimensions.
