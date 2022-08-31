---
title: Ratio Helper
description: The Ratio Helper tabset helps you understand which ratio you want to analyze. You can display this tabset by hovering on a step in 'KPI' section of Impact/ Pivot.
layout: page
---

> The Ratio Helper tabset helps you understand which ratio you want to analyze. You can display this tabset by hovering on a step in 'KPI' section of Impact/ Pivot.

## Ratio view - Default

The Ratio view displays the value of each ratio defined as steps in your [metric relation]({{site.url}}/{{site.baseurl}}/core_app/header/input/metric_relation?id=metric-relation)
The ratio defined by the Primary Numerator and Denominator appears in orange (if matching)
Note that you can skip/ merge some ratios using the [included steps]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/included_steps) setting in DataMa Compare.
> This chart should help you understand which ratio is high/ low relative to others, so that you can focus on analysing the right one

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/menu/images/ratio-default-RH.png"/></center>


## Numerator view - Default

The Numerator view displays the value of the numerator for each ratio defined as steps in your [metric relation]({{site.url}}/{{site.baseurl}}/core_app/header/input/metric_relation?id=metric-relation)
The ratio defined by the Primary Numerator appears in orange (if matching)
Note that all numerators appear on the same Y-scale. This only makes sense when units are the same for the numerators
> This chart is particularly helpful to materialize a funnel analysis, where all numerators are comparable and are in fact users reaching different steps of the funnel

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/menu/images/numerator-default-RH.png"/></center>

## Compare mode

Similarly to the [dimension helper]({{site.url}}/{{site.baseurl}}/core_app/dimension_helper), when a dimension is defined as a compare dimension the results are split into two categories start and end for both the Numerator view and the Ratio view
<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/menu/images/ratio-compare-RH.png"/></center>
> This chart should help you see on which interval is your ratios high or low relative to the compare dimension. So that you can focus on analysing a ratio based on a specific interval.
<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/menu/images/numerator-compare-RH.png"/></center>
> This chart is usefull when comparing trends on each funnel step between different intervals.