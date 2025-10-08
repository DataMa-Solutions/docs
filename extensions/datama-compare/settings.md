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

**General Settings** lets you quickly configure the analysis: **edit the market equation, choose the comparison dimension (or add a secondary one), control sorting, adjust modeling options, set language preferences, and enable/disable comments or charts**.

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

# 1. General Settings

# 1.1. General Settings

## 1.1.1 Comparison Definition

Choose the scope of your comparison and optionally add a second comparison to enrich the analysis.

Defining what you want to compare is the first step of the analysis. In the waterfall, you can either compare dates (start period vs. end period) or compare segments from any dimension. For example:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/compare mindset.png"/></center>

You can start your comparison as suggested below. For a quick step‑by‑step demo, see: [Looker Studio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio_compare.html), [Tableau]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/tableau-viz_compare.html), [Power BI]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/power-bi_compare.html), [Qlik]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/qlik_compare.html).

* First, add Datama light compare extension into your platform. See the example in looker studio shown as below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Add_compare_extension.gif"/></center>

* Second, add the dimension(s) and metric(s) used by Datama Compare. For example, to compare the "Sessions" metric between "This Year" and "Last Year" (segments of the "Period" dimension), proceed as below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Adddimensionandmetric.gif"/></center>

* Third, in General Settings, you can choose any other dimension available in your visualization tool’s "Dimension" field as the comparison dimension.

If a dimension includes more than two segments — e.g., "Country" — start by adding "Country" and the metric (e.g., "Sessions"). Then select the two segments you want to compare (e.g. UK vs. Spain).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/change_segement_country.gif"/></center>

You can also add more metrics to visualize the variation across different KPIs. To do this, make sure to add the metrics in an order that follows the logic used by Datama Compare, as shown below:

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Metrics_order.png"/></center>


<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/add_funnel.gif"/></center>

## 1.1.2. Secondary Comparison

Add a second comparison to display a side‑by‑side waterfall focused on another scope. For example, while comparing USA vs. UK, you can also add a Mobile vs. Desktop comparison within the "Device" dimension.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/secondary_comparison_setting.gif"/></center>


## 1.1.3. Use indices instead of values

Choose between relative (dynamic) or absolute comparisons:
    - When enabled (default): Uses dynamic indices that update with the latest data in the source
    - When disabled: Uses fixed absolute values based on your initial selection (static baseline)

## 1.1.4. Order for relative values

Control which reference the dynamic comparison uses:
    - Descending (default): Uses the most recent value as reference
    - Ascending: Uses the oldest value as reference

<br/>


# 1.2. Modelling

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/modelling.png"/></center>

## 1.2.1. Group values representing less than (%)

<center><img style="align: right; width: 400px;" src="{{site.url}}/{{site.baseurl}}/core_app\new\interface\subheader\settings\images\settings_agg2percent.jpg"/></center>

Sets the model’s aggregation level. If set to X%, segments within a dimension that represent less than X% of the Primary Numerator (e.g., Revenue) are grouped into an "Other" segment. Default is 2%. This parameter can significantly impact the computed mix effects.

## 1.2.2. Metric to use for grouping

Choose the metric used as the "Primary Numerator" for the grouping rule above. The system calculates X% (2% by default) against this metric to decide grouping.

## 1.2.3. Analysis depth

Adjust the level of detail provided in comments and explanations.

## 1.2.4. Split Mix and Perf effects

Control how the mix effect is attributed. Default is "Never". Select "Auto" to let the tool split Mix vs. Performance when the mix contribution exceeds a threshold.

<br/>

# 2. Market Equation

Edit the KPI definition and market equation so the analysis matches your business logic.

Market relation defines how metrics from your datasource combine to compute the KPI you want to explain. Here, you can modify the equation, choose units, rename steps, set thresholds, and exclude or focus dimensions.

- By default, Datama uses a product of ratios (prod) across all steps in the market equation. You can switch to a "sum" when your KPI is additive (e.g., Revenue = Revenue_France + Revenue_UK + Revenue_US).

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/sum_marketequation.gif"/></center>

- Changing the unit to '%' multiplies values by 100 and displays percentages. Selecting a currency unit will display values with the chosen currency symbol.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Marketequation_unit.gif"/></center>

- You can set a step to focus on a specific dimension. This disables automatic dimension scoring and displays only the selected dimension for that step.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/focused_dimension_marketequation.gif"/></center>

- Excluded dimensions remain scored but are ignored in the calculation for that step.

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/market-equation_extension.png"/></center>


<br/>   

# 3. Preferences

> Customize the application behavior, language, and visible widgets to match your needs.

## 3.1 Global

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/preference.png"/></center>

### 3.1.1 Allow Datama to adjust data display for better insights

In some cases, Datama suggests an adapted waterfall display to reveal more insights.
    - For example, if your waterfall has a single step, Datama can unpivot data to show all segments of a dimension instead.

### 3.1.2 Language

Currently, French and English are available. Contact us if you need additional languages.

<br/>

## 3.2 Displayed Widgets

Choose which elements to show or hide:

### 3.2.1 Smart title
### 3.2.2 Plot (waterfall graph)
### 3.2.3 Smart comment

You can customize colors for:
### 3.2.4 Application 

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Application color.png"/></center>

### 3.2.5 Waterfall

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/waterfall color.png"/></center>


<br/>
<br/>
<br/>

# Waterfall Settings 

## 1. General

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/waterfall_general_settings.png"/></center>

### 1.1.1. Segment text complement 

Choose what to display after the Segment name in waterfall labels:
    - Variation relative to average (e.g., "x2.43") - default value to easily spot "abnormal" variations above average
    - Percentage Variation (e.g., "-46%") - percentage difference between start and end values
    - Variation absolute change (e.g., "-3pts") - absolute difference between start and end values in the KPI's unit
    - Nothing
### 1.1.2. Number of bars before aggregation

Number of elements to display in an opening step (default is 4).

### 1.1.3. Exploration Method (Tree view only)

In the Tree chart, display only the main segments across the dimension to focus on the most informative elements.

### 1.1.4. Number of bars included in Top exploration method (Tree view only)

Choose how many cards to display when zooming into a KPI.

### 1.1.5. Y axis auto scaling

Start the Y scale at zero, or let Datama auto‑scale to better visualize small variations.

### 1.1.6. Open biggest/focused element by default

Automatically open the step with the largest variation when loading the graph.

### 1.1.7. Draw links between elements

Display connectors between steps to highlight transitions.

### 1.1.8. Reverse axis

Rotate the graph 90 degrees.

### 1.1.9. Share scales between primary and secondary comparison

Keep the same scale for the two waterfall plots.

<br/>

## 2. Fonts

<center><img style="align: right; width: 800px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/Fonts.png"/></center>

### 2.1. Family

Choose from available fonts to match your dashboard (currently Montserrat and Arial).

### 2.2. Module Title

Adjust module title size.

### 2.3. Comments

Adjust comments size.

### 2.4. Plot Title

Adjust plot title size.

### 2.5. Subtitle Title

Adjust subtitle size.

### 2.6. Tree view cards name

Adjust tree view card name size.

### 2.7. Main values

Adjust main values size.

### 2.8. Additional values

Adjust additional values size.

<br/>

## 3 Labels & Indicators

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/SettingsLabelIndicator.png"/></center>

These settings allow you to customize how information is displayed on the waterfall chart.

The first line controls elements shown in yellow in the picture below, while the second line controls elements shown in green.

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
