---
title: Settings of Datama Compare Extension
description: Discover all settings exposed by Datama Compare extension to improve your analysis
scope: Datama/light/compare
layout: new-page
keywords: light compare settings
---

<br/>

> Datama compare extension interface contains 2 setting panels: General Settings and Waterfall Settings. 

<br/>

**General Settings** allows you to **modify the market equation, adjust the comparison dimension or add a second comparison, sort values, change modeling settings, change language preferences, and enable or disable comments or plots..**. 

You can access the general setting as shown below:

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/compare_extension_general_setting.gif"/></center>

<!-- Below are the detailed functions you can click on for a quick preview:
1. [Comparison definition](###11-Comparison-definition)
* First and seconde comparison
* Use indices instead of values
* Order for relative values
2. [Modelling](#2-required-data-types)
* Group values representing less than (%)
* Analysis depth
* Split Mix and Perf effects
3. [Market Equation](#2) 
4. [Preferences](#4)
* Allow Datama to execute actions on data to improve your analysis
* Language
* Smart title
* Plot (waterfall graph)
* Smart comment -->

<br/>

**Waterfall settings** allows **formatting waterfall bars, labels, text size ...**

You can access the waterfall setting as shown below:

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/comapre_extnsion_waterfall_setting.gif"/></center>

<!-- Below are the detailed functions you can click on for a quick preview:
1. [Configuration](#1-what-problems-we-solve)
* Segment text complement
* Number of bars before aggregation
* Exploration Method (Tree view only)
* Number of bar included in Top exploration method (Tree view only)
* Y axis auto scaling
* Open biggest/focused element by default
* Draw links between elements
* Reverse axis
2. [Fonts](#2-required-data-types)
* Family
* Text Size
3. [Labels & Indicators](#3-metric-relations)  -->

Let's explain option by option.
<br/>

# General Settings

# 1. General Settings

## 1.1.1 Comparison Definition

> This section allows you to choose what you want to compare and add additional comparisons for deeper analysis

Defining what you want to compare is the very first step of your analysis in the Compare extension. In the waterfall, you can either compare dates (start period vs end period) or segments of other dimensions. For example:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/compare mindset.png"/></center>

You can start your comparison as suggested below: (here's a quick demonstration to use Compare extension in looker studio, you can also find detailed guide by clicking [Looker studio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio_compare.html), [Tableau]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/tableau-viz_compare.html), [PowerBI]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/power-bi_compare.html), [Qlik]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/qlik_compare.html))

* First, add Datama light compare extension into your platform. See the example in looker studio shown as below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Add_compare_extension.gif"/></center>

* Second, add the dimension(s) and metric(s) to plot datama compare. For example, if you want to compare "Sessions"(metric) between "This Year" and "Last Year" (Included in dimension named "Period"). You can do as below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Adddimensionandmetric.gif"/></center>

* Third, using General settings, you can choose for comparison any other dimension added to the "Dimension" field in your data visualization solution.

If your dimension includes more than two segments — like "Country", which might contain several countries — start by adding "Country" as the dimension and "Sessions"  (or another metric) as the metric. Then, switch between the countries you want to compare.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/change_segement_country.gif"/></center>

You can also add more metrics to visualize the variation across different KPIs. To do this, make sure to add the metrics in an order that follows the logic used by Datama Compare, as shown below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Metrics_order.png"/></center>


<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/add_funnel.gif"/></center>

## 1.1.2. Secondary Comparison

 Add a comparison to duplicate your waterfall chart with a secondary one based on a different scope. For example, in addition to comparing USA and UK, you can also compare Mobile and Desktop within the 'Device' dimension.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/secondary_comparison_setting.gif"/></center>


## 1.1.3. Use indices instead of values

Choose between relative (dynamic) or absolute comparisons:
    - When enabled (default): The analysis is dynamic and uses relative indices that change based on the newest entries in the datasource
    - When disabled: Uses absolute values fixed to your initial selection, providing a static comparison baseline

## 1.1.4. Order for relative values

Configure the dynamic comparison order:
    - Descending (default): Takes the most recent value
    - Ascending: Takes the oldest value

<br/>


# 1.2. Modelling

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/modelling.png"/></center>

## 1.2.1. Group values representing less than (%)

<center><img style="align: right; width: 400px;" src="{{site.url}}/{{site.baseurl}}/core_app\new\interface\subheader\settings\images\settings_agg2percent.jpg"/></center>

Sets the model's aggregation level – if set at X%, segments within each dimension that represent less than X% of the Primary Numerator (e.g., Revenues) will be clustered into an "Other" segment. Default is 2%, but you may want to adjust this parameter as it can significantly impact the calculation of mix effects.

## 1.2.2. Metric to use for grouping

This is to customize the "Primary Numerator" mentioned just above, based on which the system caculates X% (2% by default) when grouping.

## 1.2.3. Analysis depth

Adjust the level of detail available in the comment section.

## 1.2.4. Split Mix and Perf effects

Choose whether to display mix effect contribution. "Never" split by mix effect is the default value. Select "auto" to let the tool decide when to display the Mix effect (when the mix contribution reaches a threshold).

<br/>

# 2. Market Equation

> This section allows you to edit your KPIs and market equation to align with your business needs

Market ralation describes the equation between metrics of your source to compute the KPI you want to explain. It allows you to modify your market equation, add units, rename steps, set thresholds, and exclude or focus on dimensions.

- By default, Datama creates a product of ratios (prod) with all steps defined in the market equation. You can change this to "sum" to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/sum_marketequation.gif"/></center>

- When changing the unit to '%', the figures are multiplied by 100 and displayed as percentages. When selecting a currency unit, the chart will display the results with the corresponding currency symbol.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Marketequation_unit.gif"/></center>

- In the market equation definition, you can set a step to focus on a specific dimension. This disables the automatic dimension scoring and only displays the selected dimension.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/focused_dimension_marketequation.gif"/></center>

- Excluded dimensions maintain the scoring algorithm but are not considered in the calculation for that step.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/market-equation_extension.PNG"/></center>


<br/>   

# 3. Preferences

> These settings allow you to customize the application to match your company's needs and change the analysis language

## 3.1 Global

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/preference.PNG"/></center>

### 3.1.1 Allow Datama to execute actions on data to improve your analysis

In certain cases, Datama will propose adapted displays of the Waterfall to provide more insights.
    - For example, if your waterfall has only one step, Datama will unpivot your data to display all segments of a dimension replacing the single step.

### 3.1.2 Language

Currently, only French and English are available. Let us know if you would like additional languages to be added.

<br/>

## 3.2 Displayed Widgets

Choose to hide or display:

### 3.2.1 Smart title
### 3.2.2 Plot (waterfall graph)
### 3.2.3 Smart comment

You can customize plot color by setting:
### 3.2.4 Application 

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Application color.PNG"/></center>

### 3.2.5 Waterfall

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/waterfall color.PNG"/></center>


<br/>
<br/>
<br/>

# Waterfall Settings 

## 1. General

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/waterfall_general_settings.PNG"/></center>

### 1.1.1. Segment text complement 

Choose what to display after the Segment name in waterfall labels:
    - Variation relative to average (e.g., "x2.43") - default value to easily spot "abnormal" variations above average
    - Percentage Variation (e.g., "-46%") - percentage difference between start and end values
    - Variation absolute change (e.g., "-3pts") - absolute difference between start and end values in the KPI's unit
    - Nothing
### 1.1.2. Number of bars before aggregation

Number of elements to display in an opening step (default is 4).

### 1.1.3. Exploration Method (Tree view only)

In the Tree chart, only display the main segments accross the dimension. Allow to display only the most interesting element. 

### 1.1.4. Number of bar included in Top exploration method (Tree view only)

Choose number of card to display when zoomed in into a KPI.

### 1.1.5. Y axis auto scaling

Start the Y scale at zero or let Datama adjust the optimal Y scale for better visualization of small variations.

### 1.1.6. Open biggest/focused element by default

Have the extension automatically open the step with the main variation when loading the graph.

### 1.1.7. Draw links between elements

Display thin links between each waterfall step.

### 1.1.8. Reverse axis

Rotate the graph 90 degrees.

### 1.1.9. Share scales between primary and secondary comparison

keep the same scale for two waterfall plots

<br/>

## 2. Fonts

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Fonts.PNG"/></center>

### 2.1. Family

Choose from available fonts to best match your current dashboard (for now only Montserrat and Arial)

### 2.2. Module Title

Adjust text size of module title

### 2.3. Comments

Adjust text size of comments

### 2.4. Plot Title

Adjust text size of Plot title

### 2.5. Subtitle Title

Adjust text size of subtitle

### 2.6. Tree view cards name

Adjust text size of cards name of tree view

### 2.7. Main values

Adjust text size of main values

### 2.8. Additional values

Adjust text size of additional values

<br/>

## 3 Labels & Indicators

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/SettingsLabelIndicator.png"/></center>

These settings allow you to customize how information is displayed on the waterfall chart.

The first line controls elements shown in yellow in the picture below, while the second line controls elements shown in green in

For each element, you can choose what information to display:

### 3.1. Impact in points (pts)
Variation in percentage points
### 3.2. Impact in volume
Contribution to the main KPI (e.g. impact on Revenue)
### 3.3. Percent change 
Evolution in %
### 3.4. Start
Initial value (blue bar on the left)
### 3.5. End
Final value (blue bar on the right)

For each configuration, you can customize the display format:
### 3.6. Gauge
Show a gauge visualization
### 3.7. Arrows
Display directional arrows indicating positive/negative variations
### 3.8. Colors
Color-code values in green (increase) or red (decrease)
### 3.9. Hover Only
Only show values when hovering with the mouse
### 3.10. Hide
Hide the element completely

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/label.png"/></center>


<br/>

---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/structure.html) or [theoretical concepts]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/concept.html) of Datama.

<br>
