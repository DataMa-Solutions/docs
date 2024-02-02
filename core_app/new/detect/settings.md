---
title: Detect - Settings
description: Here is the different settings available in DataMa detect
layout: page
scope: datama/saas/detect
keywords: full app detect settings
---

<br>

> **Here is the different settings available in DataMa Detect**

<br>

<b>Scope for detection:<b><br>
- [Analyse All Metrics Relation Steps](#analyse-all-metrics-relation-steps)
- [Display Main KPI Impact](#display-main-kpi-impact)
- [Inspect Numerator only](#inspect-numerator-only)
- [Analyse Latest Point Only](#analyse-latest-point-only)

<br>
<b>Detect methodology:<b><br>
- [Detection Method](#detection-method)
- [Threshold value](#threshold-value)
- [Confidence Interval](#confidence-interval)
- [Points Included in Baseline](#points-included-in-baseline)
- [Number of Points in Baseline](#number-of-points-in-baseline)

<br>
<b>Explanation settings:<b><br>
- [Analysis Depth](#analysis-depth)
- [Segment text complement](#segment-text-complement)
- [Aggregation in %](#aggregation-in-)

<br>
<b>Basic setting:s<b><br>
- [Comparison](#comparison)
- [KPI](#kpi) (metric relation)

<br>

> Find here the details of the main settings DataMa Detect

<br>

# <b>Scope for detection<b>
<br>

## Analyse All Metrics Relation Steps

DataMa Detect can analyse one step or all the steps of your funnel. When all step are selected, you will be able to see in a dropdown menu every step with an anomaly.

<br>

## Display Main KPI Impact

When analysing all metrics relation steps, by default, Datama Detect will display the resulting Main KPI of your market equation on the anomaly detection chart. This allows you to see on the same chart the trend of on of the step of your market equation AND the total step (in dotted lines). <br>
Since this calculation takes a little bit of time, you can deactivate this setting if you want to optimise for time of computation. <br>
Also, a "f" icon at the top right of the chart allows to hide/ display the main KPI dotted line without launching another calculation, just for readibility purposes
> Activating the Main KPI settings also includes the Main KPI impact in the alert messaging at the top: Datama will add a wording on whether or not the Main KPI seems abnormal if one of the step is abnormal.

<br>

## Inspect Numerator only

When you're NOT analysig all metrics relation steps, you can choose to analyse only the numerator.
This is useful when your market equation is not important or not relevant and you prefer to analyse only the numerator of the KPI. 

## Analyse Latest Point Only

You can choose to display the anomalies of each date or only for the latest point in the data.
In run mode (i.e. when sending alerts on a daily basis for instance), we recommand to activate this parameter, to avoid having all the anomalies raised.

<br>

# <b>Detect Methodology<b>
<br>

## Detection Method

Detection method defines which algorithm DataMa uses to flag anomalies.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

## Threshold value

Threshold is used by some anomaly detection methods to define the cutoff between anomalies and normal points. The threshold will be considered as % or absolute value depending on the method.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

## Confidence Interval

A confidence interval is a range of values that is likely to contain an unknown population parameter. If you draw a random sample many times, a certain percentage of the confidence intervals will contain the population mean. This percentage is the confidence level.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/ConfidenceIntervall-Concept.jpg"/></center>

By changing the confidence interval you can modify the precision expected from the significance.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

## Points included in baseline

This allows you to define which type of points (same day, same hour etc) in your historical data the algoritm will consider for baseline.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

## Number of points in baseline

This allows you to define how many points within the defined type of points in your historical data the algoritm will consider for baseline.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

# <b>Explanation settings<b>
<br>

## Analysis Depth

This is the level of analysis in the explanation part of the solution. How many detail will be given in the comment.

<br>

## Segment text complement

Segment text complement allows to decide on what to display behind Segment name in the waterfall labelling.
As a reminder, a segment is a attribute within a dimension of your dataset.
Options for this input are:
- Variation relative to average (e.g. “x2.43”) - this is the default value and allows to spot easily "abnormal" variations way above average (i.e. above 1)
- Percentage Variation (e.g. “-46%”)
- Nothing

<br>

## Aggregation in %

The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

Click on the drop-down arrow to display the settings menu
Move the cursor to the right to increase the level of aggregation
Click on « Pivot » to get results
Segments are now aggregated at the requested level

<br>

# <b>Basic settings<b>
<br>

## Comparison

DataMa Pivot can be used with a comparison. To activate this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing.

<br>

## KPI

In DataMa Detect, you can detect the anomaly of only one KPI or all metric relation.

By default, DataMa selects the first ratio of your metric relation, but you can change that by clicking on the KPI bar in the subheader and ticking the appropriate metric within your metric relation.
