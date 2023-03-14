---
title: Detect - Settings
description: Here is the different settings available in DataMa detect
layout: page
---

<br>

> **Here is the different settings available in DataMa Detect**

<br>

- [Comparison](#comparison)
- [Filters](#filters)
- [KPI](#kpi) (metric relation)
- [Aggregation in %](#aggregation-in)
- [Analysis Language](#analysis-language)
- [Colors Palette For Plots](#colors-palette-for-plots)
- [Force Rounding](#force-rounding)
- [Max Segment Displayed](#max-segment-displayed)
- [Maximum Depth For Continuous Grouping](#maximum-depth-for-continuous-grouping)
- [Analyse All Metrics Relation Steps](#analyse-all-metrics-relation-steps)
- [Inspect Numerator only](#inspect-numerator-only)
- [Analyse Latest Point Only](#analyse-latest-point-only)
- [Detection Methode](#detection-method)
- [Number of points for average window](#number-of-points-for-average-window)
- [Confidence Interval](#confidence-interval)
- [Analysis Depth](#analysis-depth)
- [Include 0 For Y Axis](#include-0-for-y-axis)


<br>

## Comparison

DataMa Pivot can be used with a comparison. To activate this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing. 

<br>

## Filters

Filter any element you want to remove from the data or from the analysis  (You can remove the dimension appearing
in the analysis by clicking the cross)

<br>

## KPI

In DataMa Detect, you can detect the anomaly of only one KPI or all metric relation. 

By default, DataMa selects the first ratio of your metric relation, but you can change that by clicking on the KPI bar in the subheader and ticking the appropriate metric within your metric relation


<br>

## Settings

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_settings.jpg">

<br>

### Aggregation in %

The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

Click on the drop-down arrow to display the settings menu
Move the cursor to the right to increase the level of aggregation
Click on « Pivot » to get results
Segments are now aggregated at the requested level

<br>

### Analysis Language

For now, DataMa is only available in English and in French. By default Datama is in english. 
- You can change the language for a specific Use Case (Settings > Analysis Language)
- or globally for the whole Use cases (Profile icon > User preferences > Analysis Language)

<br/>

### Colors Palette For Plots
    
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

### Force Rounding

The rounding setting will bypass the smart rounding available in DataMa which adapts the number of decimals according to each number. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/force_rounding.png"/></center>

<br/>

### Max Segment Displayed 

When looking at the bridge, this is the number of segment displayed for a selected dimension. The minor segments will be displayed in a bucket "other"

<br>

### Maximum Depth For Continuous Grouping

For continuous elements, multiple clusters are created aggregating elements having a similar average KPI. The level of aggregation of the clustering is set by this parameter. 

<br>

### Analyse All Metrics Relation Steps

DataMa Detect can anlyse one step or all the steps of your funnel. When all step are selected, you will be able to see in a dropdown menu every step with an anomaly. 

<br>

### Inspect Numerator only

When you're analysig all metrics relation steps, you can choose to analyse only the numerator. 
This is useful when your market equation is not important or not relevant and you prefer to analyse independently all the Numerator. 



### Analyse Latest Point Only

You can choose to display the anomalies of each date or only for the latest point in the data.
On a day over day anomaly detection we recommand to activate this parameter, to avoid having all the anomalies raised.

<br>

### Detection Method

When "Analyse latest point only" is activated you can choose the standard "Moving Window" or the "Forecast" which will forecast the most likely confidence interval.

<br>

### Number of points for average window

This allows you to define how many point in your historical data the algoritm need to take into account to forecast the confidence interval.

<br>

### Confidence Interval

A confidence interval is a range of values that is likely to contain an unknown population parameter. If you draw a random sample many times, a certain percentage of the confidence intervals will contain the population mean. This percentage is the confidence level.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/ConfidenceIntervall-Concept.jpg"/></center>

By changing the confidence interval you can modify the precision expected from the significance.


### Analysis Depth 

This is the level of analysis in the explanation part of the solution. How many detail will be given in the comment.

<br>

### Include 0 For Y Axis 

By default active, this makes the 0 line appear on the waterfall When deactivated DataMa will adapt the Axis to your dataset. This help to better display small variations.

<br>
