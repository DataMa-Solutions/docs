---
title: Settings of Datama Compare
description: Discover all settings exposed by Datama Compare to improve your analysis
scope: Datama/light/compare
layout: new-page
keywords: light compare settings
---

<br/>

> Discover all settings exposed by Datama Compare extension to improve your analysis

<br/>

<!-- _Find below how you can customize Datama Compare using the General settings and the waterfall Settings_ -->
<!-- 
- [1. General Settings](#1-general-settings)
    - 1.1. [Configuration](#11-model-configuration)
    - 1.2. [Comparison](#12-comparison)
    - 1.3. [Metrics Relation](#13-metrics-relation)
    - 1.4. [Preferences](#14-preferences)
- [2. Waterfall Settings](#2-waterfall-settings)
    - 2.1. [Configuration](#21-configuration)
    - 2.2. [Font & size](#22-fonts--size)
    - 2.3. [Label & Indicator](#33-label--indicators) -->

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/general_settings.png"/></center>

<br/>

# Global extension Settings

## 1. General Settings

### 1.1. Comparison Definition

> This section allows you to choose what you want to compare and add additional comparisons for deeper analysis

Defining what you want to compare is the very first step of your analysis in the Compare extension. In the waterfall, you can either compare dates (start period vs end period) or segments of other dimensions:

1. First, add the dimension you want to use for comparison to the comparison field. By default, this will be the dimension selected for comparison.
2. Then, select 2 segments within the dimension. For example, select Month as the comparison dimension and choose January and February as the 2 segments to be compared.
3. Using the settings, you can choose for comparison any other dimension added to the "Dimension" field in your data visualization solution.

- **Secondary Comparison**: Add a comparison to duplicate your waterfall with a secondary waterfall on a different scope (e.g., Compare Week N versus Week N-1 and compare Week N-2 versus Week N-1).
  - Use the Advanced Settings to select a secondary comparison on a different scope. For example, compare Week over Week on Category A and also Week over Week on Category B.

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/comparison.png"/></center>

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/choose_comparison.PNG){: style="align: right; width: 600px;"} -->

- **Use indices instead of values**: Choose between relative (dynamic) or absolute comparisons:
    - When enabled (default): The analysis is dynamic and uses relative indices that change based on the newest entries in the datasource
    - When disabled: Uses absolute values fixed to your initial selection, providing a static comparison baseline

- **Order for relative values**: Configure the dynamic comparison order:
    - Descending (default): Takes the most recent value
    - Ascending: Takes the oldest value

<br/>

### 1.2. Modelling

<!--- **Segment text complement:** "variation relative to avg" or "variation in %" this is a display option in the label of each segment when clicking a waterfall step. 
    - each segment is written like "desktop (x...)" this x is a variation relative to average (e.g if the variation at this step is +2% and the variation of Desktop is +4% the parenthesis will "x2" which the relative variation of the segment 'Desktop' compare to the average variation). 
    - When selecting "variation in %" you only have the absolut variation of the segment in %. If desktop is moving of +4%, the label will be 'Desktop (+4)'--->

- **Group values representing less than (%):** Sets the model's aggregation level – if set at X%, segments within each dimension that represent less than X% of the Primary Numerator (e.g., Revenues) will be clustered into an "Other" segment. Default is 2%, but you may want to adjust this parameter as it can significantly impact the calculation of mix effects. [See details]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/aggregation.html)

- **Analysis depth:** Adjust the level of detail available in the comment section.

- **Split Mix and Perf effects:** Choose whether to display mix effect contribution. "Never" split by mix effect is the default value. Select "auto" to let the tool decide when to display the Mix effect (when the mix contribution reaches a threshold).

<!-- <center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/asses_aggre_level.png"/></center> -->

<br/>

# 2. Market Equation

> This section allows you to edit your KPIs and market equation to align with your business needs

Using metrics relation allows you to modify your market equation, add units, rename steps, set thresholds, and exclude or focus on dimensions. Metric relation describes the equation between metrics of your source to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all steps defined in the metrics relation. You can change this to "sum" to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.
- When changing the Unit to '%', it changes the unit and multiplies your figures by 100.
- In the Metrics Relation definition, you can set a step to focus on a specific dimension. This disables the automatic dimension scoring and only displays the selected dimension.
- Excluded dimensions maintain the scoring algorithm but are not considered in the calculation for that step.

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/market-equation_extension.PNG"/></center>

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->

<br/>   

# 3. Preferences

> These settings allow you to customize the application to match your company's needs and change the analysis language

## 3.1 Global

- **Allow Datama to execute actions on data to improve your analysis:** In certain cases, Datama will propose adapted displays of the Waterfall to provide more insights.
    - For example, if your waterfall has only one step, Datama will unpivot your data to display all segments of a dimension replacing the single step.

- **Language:** Currently, only French and English are available. Let us know if you would like additional languages to be added.

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_LanguageSettings.PNG){: style="align: right; width: 500px;"} -->

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_LanguageSettings.PNG"/></center>

## 3.2 Displayed Widgets

Choose to hide or display:
- Smart title
- Plot (waterfall graph)
- Smart comment

<br/>
<br/>
<br/>

# Waterfall Settings 

## 2. General

### 2.1. Configuration 

- **Segment text complement**: Choose what to display after the Segment name in waterfall labels:
    - Variation relative to average (e.g., "x2.43") - default value to easily spot "abnormal" variations above average
    - Percentage Variation (e.g., "-46%") - percentage difference between start and end values
    - Variation absolute change (e.g., "-3pts") - absolute difference between start and end values in the KPI's unit
    - Nothing
- **Number of bars before aggregation**: Number of elements to display in an opening step (default is 4).
- **Exploration Method (Tree view only):** in the Tree chart, only display the main segments accross the dimension. Allow to display only the most interesting element. 
- **Number of bar included in Top exploration method (Tree view only):** Choose number of card to display when zoomed in into a KPI. 
- **Y axis auto scaling**: Start the Y scale at zero or let Datama adjust the optimal Y scale for better visualization of small variations.
- **Open biggest/focused element by default**: Have the extension automatically open the step with the main variation when loading the graph.
- **Draw links between elements**: Display thin links between each waterfall step.
- **Reverse axis**: Rotate the graph 90 degrees.

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_SettingsWaterfall.png){: style="align: center; width: 500px;"} -->

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_SettingsWaterfall.png"/></center>

<br/>

### 2.2. Fonts

- **Family**: Choose from available fonts to best match your current dashboard (for now only Montserrat and Arial)
- **Text Size**: Adjust text size to optimize waterfall visibility

<br/>
### 3.3. Labels & Indicators

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/SettingsLabelIndicator.png"/></center>

These settings allow you to customize how information is displayed on the waterfall chart.

- The first line controls elements shown in yellow in the picture below, while the second line controls elements shown in green in
- For each element, you can choose what information to display:
    - **Impact in points (pts):** Variation in percentage points
    - **Impact in volume:** Contribution to the main KPI (e.g. impact on Revenue)
    - **Percent change:** Evolution in %
    - **Start:** Initial value (blue bar on the left)
    - **End:** Final value (blue bar on the right)

- For each configuration, you can customize the display format:
    - **Gauge:** Show a gauge visualization
    - **Arrows:** Display directional arrows indicating positive/negative variations
    - **Colors:** Color-code values in green (increase) or red (decrease)
    - **Hover Only:** Only show values when hovering with the mouse
    - **Hide:** Hide the element completely

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/label.png"/></center>


<br/>

---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/structure.html) or [theoretical concepts]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/concept.html) of Datama.

<br>
