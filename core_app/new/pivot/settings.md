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
- [Analysis Language](#analysis-language)
- [Colors Palette For Plots](#colors-palette-for-plots)
- [Force Rounding](#force-rounding)


<br>

> Find here the details of the main settings DataMa Pivot

<br>

## Comparison

DataMa Pivot can be used with a comparison. To activate this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing. 

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

<br/>

## Analysis Language

For now, DataMa is only available in English and in French. By default Datama is in english. 
- You can change the language for a specific Use Case (Settings > Analysis Language)
- or globally for the whole Use cases (Profile icon > User preferences > Analysis Language)

<br/>

## Colors Palette For Plots
    
Graphs colors are customizable, in 3 different ways. 
Grayscale, scattered and Custom. 
The custom method allows to refine color by color all the graphs available in the solution. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/colors_palette.png"/></center>

- Select <i>>custom</i> in the dropdown meny : "Colors Palette for plots"
- Click to the palette to Edit the colors
- Select the graph you want to modify
- Select the color you want to change by clicking on the part of the graph
- Select a new color and close the popup (no apply or OK button...it's automatically saved)
- DataMa is going the refresh the graph with the new color

<br/>

## Force Rounding

The rounding setting will bypass the smart rounding available in DataMa which adapts the number of decimals according to each number. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/force_rounding.png"/></center>
<br/>
