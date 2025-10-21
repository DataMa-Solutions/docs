---
title: Settings of Datama Explore Extension
description: Discover all settings exposed by Datama Explore to improve your analysis
scope: Datama/light/explore
layout: new-page
keywords: light explore settings breakdown dimensions metrics extension plugin
---

<br>

> Discover all settings exposed by Datama Explore extension to improve your analysis

<br>

<center><img style="width: 50%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/explore_settings.png"/></center> <--GDB#TODO-->

<br>

<!-- 
_Find below how you can customize Datama Explore using the General settings_

<!-- - [1. General settings](#1-general-settings)
    - 1.1. [Comparison](#11-comparison)
    - 1.2. [Modeling](#12-Modeling)
- [2. Metrics Relation](#2-metrics-relation)
- [3. Preferences](#3-preferences) -->

<br>

# 1. General Settings

## 1.1. Comparison definition

> This part allows you to choose what you want to compare, creating a comparison dimension for deeper analysis

Defining a comparison is optional in Datama Explore but enables powerful variation analysis. You can compare dates (start period vs end period) or segments of other dimensions.

1. **Add a comparison**: Select the dimension you want to use for comparison, then select 2 segments within that dimension. For example, select "Test Variant" as a dimension and "Variation A" and "Variation B" as the 2 segments.
2. **Comparison Dimension**: Once defined, a "Comparison Dimension" becomes available in your dimension selection dropdowns, allowing you to analyze variations between your defined segments.
3. **Variation Metrics**: When using a comparison, additional metrics become available showing absolute change (Δ) and percentage change (% Change) for all your KPIs and metrics.


<br>

## 1.2 Dimensions & Measure display

### 1.2.1 Dimension 1

Select the first dimension for your analysis. Its role depends on the visualization type (X-axis, legend colors, etc.).

### 1.2.2 Dimension 2

Optionally select a second dimension for additional breakdown. Its role also varies by visualization type. You can also choose "No secondary split" to disable this feature.

### 1.2.3 Metric 1

Select the first metric to display. This can be either:
- A step from your market equation (showing calculated KPIs)
- A raw metric from your dataset

### 1.2.4 Metric 2

Optionally select a second metric for dual-axis visualization. This allows you to compare two different metrics simultaneously. You can choose "No secondary measure" to disable this feature.

When using comparison dimensions, additional variation metrics become available:
- **Absolute Change (Δ)**: Shows the absolute difference between start and end values
- **Percentage Change (% Change)**: Shows the relative change as a percentage

<br>

## 1.3 Clustering

### 1.3.1 Main K.P.I

Select the metric to use for grouping calculations. This metric determines how segments are aggregated when they fall below the threshold.

### 1.3.2 Threshold

Sets the model's aggregation level – if set at X%, segments within each dimension that represent less than X% of the selected Main K.P.I will be clustered into an "Other" segment. Default is 2%, but you may want to adjust this parameter as it can significantly impact the calculation of mix effects. [See details]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/aggregation.html)


<br>

## 2. Metrics Relation

This part allows you to edit your KPIs and market equation to fit your analysis with your business needs.

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to "sum" to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.
- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100.
- When using comparison dimensions, variation metrics (Δ and % Change) are automatically calculated for all steps in your market equation.


<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/metrics_relation.png"/></center> <--GDB#TODO-->

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->


<br/>

## 3. Preferences

These settings allow you to customize the application to fit with your company, you can also change the analysis language !

### 3.1. Language

 For now only French and English are available, let's us now if you want a new language to be added. 
<!-- <center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/preferences_explore.png"/></center> <--GDB#TODO--> -->
<br/>

### 3.2. Fonts & Size

- **Family**: Choose amongst the Font the one that best match your current dashboard
- **Text Size**: Adjust the visibility of your charts by choosing the best size of the text. 

<br>


---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/structure.html) or [theoretical concept]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/concept.html) of Datama.

<br>
