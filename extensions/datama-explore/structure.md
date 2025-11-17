---
title: Interface of Datama Explore extension
description: Datama Explore plugin allows to breakdown any pair of metrics on any pair of dimensions with multiple visualization types
layout: new-page
scope: Datama/light/explore
keywords: Datama light explore breakdown dimensions metrics visualization structure
---

<br>

> **Datama Explore plugin allows to breakdown any pair of metrics on any pair of dimensions and easily switch between visualization types**

<br>

# 1. Overview

Datama Explore extension is composed of three sections:

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/explore_structure.png"/></center>

<!-- 1. [Header Section](#1-Header-Section).
2. [Analysis panel](#2-Analysis-section)
3. [Footer](#3-Footer-Section) -->

<br>

# 2. Header section 

The header is used for global advanced settings to let you configure and refine your analysis. Read the dedicated section about [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html)

- **Documentation**: Direct link to this documentation
- **Settings**: Refine the settings of the analysis. Find more information on this [page]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html)


<br>

# 3. Analysis section

Datama Explore provides shortcuts at the top of the charts to quickly select dimension pairs, metric pairs, and visualization types.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/explore_shortcuts.png"/></center>

## 3.1 Shortcuts available

### 3.1.1 Dimension Selection

- **Dimension 1**: Choose the first dimension for your analysis (role varies by visualization type)
- **Dimension 2**: Optionally select a second dimension for additional breakdown (role varies by visualization type)
- **Comparison Dimension**: Available when you have defined a comparison in settings

### 3.1.2 Metric Selection

- **Metric 1**: Select the first metric to display (role varies by visualization type)
- **Metric 2**: Optionally select a second metric for dual-axis visualization (role varies by visualization type)

### 3.1.3 Visualization Types

- **Bar + Line**: Combines bar and line charts
- **Overlay**: Overlays multiple data series
- **Stacked Bars**: Shows composition through stacked segments
- **Mekko**: Specialized chart for size and composition
- **Moves**: Displays data movements and transitions

<br>

## 3.2 Interactive Chart Area

The main chart area displays your selected visualization with the chosen dimension and metric pairs.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/explore_chart_area.png"/></center>

### 3.2.1 Dynamic Updates

- Charts automatically update when you change dimension or metric selections
- Visualization type changes are applied instantly
- Hover interactions provide detailed information about data points

### 3.2.2 Market Equation Integration

Datama Explore analyzes each step of your market equation. You can define the market equation in [settings]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html)

### 3.2.3 Comparison Dimension Features

When you have defined a comparison in settings, additional features become available:

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/comparison_dimension.gif"/></center> 

- **Variation Metrics**: Access to absolute change (Δ) and percentage change (% Change) for all metrics
- **Enhanced Breakdown**: Use the comparison dimension as either Dimension 1 or Dimension 2

### 3.2.4 Visualization Type Details

Each visualization type provides specific capabilities:

**Bar + Line**:
- Line shows Metric 1
- Bars show Metric 2
- Dual-axis support for different scales

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/bar_line_view.png"/></center>

**Overlay**:
- Multiple data series on the same chart
- Direct comparison of different metrics
- Color-coded series for easy identification

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/overlay.png"/></center>

**Stacked Bars**:
- Shows composition of data segments
- Each segment represents a different Dimension 2 value
- Total height represents the sum of all segments

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/stacked.png"/></center> 

**Mekko**:
- Specialized chart showing both size and composition
- Width represents Dimension 1, height represents Dimension 2
- Useful for market share analysis

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/mekko.png"/></center>

**Moves**:
- Shows transitions between different states
- Useful for analyzing changes over time
- Displays movement patterns and trends

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/moves.png"/></center>

<br>

# 4. Footer Section

Depending on your plan the footer can have different informations: 
- Trail version has the link to upgrade your plan
<center><img style="width: 50%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-explore/assets/explore_to_upgrade.png"/></center>
- [Documentation](https://docs.Datama.io/) 
- [Contact us](https://Datama.io/lets-talk/)

