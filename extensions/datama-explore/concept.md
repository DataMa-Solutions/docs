---
title: Explore - Breakdown and Visualization concepts
description: This page explains the breakdown concepts and visualization types available in Datama Explore
layout: new-page
scope: Datama/light/explore
keywords: light explore breakdown visualization dimensions metrics
---

<br>

> **Datama Explore allows you to breakdown any pair of metrics on any pair of dimensions with multiple visualization types**

<br>

<!-- Datama Explore provides multiple visualization types and breakdown capabilities:
1. [Visualization Types](#1-visualization-types)
2. [Dimension Breakdown](#2-dimension-breakdown)
3. [Comparison Dimensions](#3-comparison-dimensions)
4. [Metric Variations](#4-metric-variations)
-->

# 1. Visualization Types

Datama Explore offers multiple visualization types to best represent your data analysis:

## 1.1 Bar + Line
Combines bar charts with line charts to show two different metrics simultaneously.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/bar_lines.png" alt="explore - visualization types" /></center> 

## 1.2 Overlay
Overlays multiple data series on the same chart for direct comparison.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/overlay.png" alt="explore - visualization types" /></center> 

## 1.3 Stacked Bars
Same as Bar + Line but the bars are stacked one abover the others.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/stacked.png" alt="explore - visualization types" /></center> 

## 1.4 Mekko
A specialized chart type that shows both the size and composition of data segments.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/mekko.png" alt="explore - visualization types" /></center> 

## 1.5 Moves
Displays data movements and transitions between different states or time periods.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/moves.png" alt="explore - visualization types" /></center> 

<br>

<br>

# 2. Dimension Breakdown

Datama Explore allows you to break down your data across two dimensions simultaneously:

## 2.1 Dimension 1
The first dimension used in your analysis. Its role depends on the visualization type (X-axis, legend colors, etc.).

## 2.2 Dimension 2
An optional second dimension for additional breakdown. Its role also varies by visualization type.

## 2.3 Available dimensions
All dimensions added to the extension are available for selection in your analysis. Additionally, if you have activated a comparison in the settings, a "Comparison Dimension" becomes available, allowing you to analyze variations between your defined segments.

### 2.3.1 Dimension breakdown visualization
<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/dimension_breakdown.png" alt="explore - dimension breakdown" /></center>

<br>

### 2.3.1 Comparison Dimensions

One of the key features of Datama Explore is the ability to create comparison dimensions:

You can define a comparison based on any existing dimension in your dataset. This creates a new "Comparison Dimension" that becomes available in your dimension selection dropdowns.

When you define a comparison (e.g., comparing two time periods or two segments), Datama Explore creates a synthetic dimension that groups your data into "Start" and "End" categories based on your comparison criteria.

Once created, the comparison dimension can be used as either the primary or secondary dimension in your breakdown analysis.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/comparison_dimension.png" alt="explore - comparison dimension" /></center>

<br>

# 3. Metric Selection

Datama Explore lets you configure which metrics to analyze in your breakdown, supporting flexible and insightful exploration.

## 3.1 Primary Metric
The main metric displayed in your visualization. You can select from any available metric—including raw fields from your dataset, KPIs defined in your market equation, and, if a comparison is enabled, calculated changes (Δ and % change). The primary metric typically appears on the Y-axis or as the main value in your chosen chart.

## 3.2 Secondary Metric
Optionally, you can select a secondary metric. This is useful for analyses involving two measures simultaneously—such as overlaying a line for one metric atop bars showing another. The availability and role of the secondary metric depend on the visualization type.

## 3.3 Available Metrics
You can select from:
- **All raw metrics** present in your underlying dataset.
- **All KPIs** defined using your market equation, including step-level numerators and denominators.
- **Metric changes**: If a comparison is activated, you will also see:
  - **Absolute change (Δ)**: Difference between "Start" and "End" for each metric.
  - **Percentage change (% change)**: Relative change expressed as a percent.

These change (variation) metrics are automatically included in your metric dropdowns if you have activated a comparison, enabling dynamic analysis of how your KPIs evolve across selected dimensions.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/metric_variations.png" alt="explore - metric variations" /></center>

<br>