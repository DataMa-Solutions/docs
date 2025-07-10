---
title: Settings of Datama Detect Extension
description: Discover all settings exposed by Datama Detect Light to improve your analysis
scope: Datama/light/detect
layout: new-page
keywords: light compare settings detect extension plugin
---

<br>

> Discover all settings exposed by Datama Detect extension to improve your analysis

<br>

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_settings.png"/></center>

<br>

<!-- _Find below how you can customize Datama Detect using the General settings_

- [1. General Settings](#1-general-settings)
    - 1.1. [Confidence interval](#11-confidence-interval)
    - 1.2. [Points in baseline](#12-number-of-points-in-the-baseline)
    - 1.3. [Latest point only](#13-latest-point-only)
    - 1.4. [above or below confidence interval](#14-above-or-below-confidence-interval)
- [2. Metrics Relation](#2-metrics-relation)
- [3. Preferences](#3-preferences) -->

<br>

# 1. General Settings

### 1.1. Anomaly dimension
#### 1.1.1. Detect anomaly on xxx
Select from the available dimensions in your dataset based on which you wish to detect anomalies. We usually choose Date, Hour, or another continuous numeric field.

<br>

### 1.2. Modeling
#### 1.2.1. Detection method

*  **Observed volatility** : Uses the natural variability of the data (e.g. rolling standard deviation) to detect anomalies. It's the best method when your data fluctuates normally over time. For example: A value is flagged if it deviates more than 2× the standard deviation from the recent average.

* **Relative variation threshold** : Flags an anomaly if the percentage change between two periods exceeds a defined threshold (e.g. +30%).

* **Absolute variation threshold** : Flags an anomaly if the absolute difference between two values exceeds a fixed amount (e.g. +50 units).

* **Absolute value threshold** : Triggers an alert when the actual value goes above or below a predefined threshold. This method is good for hard business limits (e.g. Any value above 80 is automatically flagged as abnormal).

Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

#### 1.2.2. Analyse latest points only
You can choose to display the anomalies of each date or only for the latest point in the data.
In run mode (i.e. when sending alerts on a daily basis for instance), we recommand to activate this parameter, to avoid having all the anomalies raised.

#### 1.2.3. Baseline mode
These settings determine which historical data points are used to calculate the baseline for anomaly detection:

* **All points** : Uses all historical data points to compute the baseline.
* **Same day of week** : Only uses historical data points that fall on the same weekday (e.g., all previous Mondays if the current point is a Monday).
* **Same day of year** : Compares only with data from the same calendar day in previous years.

#### 1.2.4. Number of Points in baseline 
It's to determine how many past data points are used to calculate the baseline (or expected value) for anomaly detection.

#### 1.2.5. Level of confidence

A confidence interval is a range of values that is likely to contain an unknown population parameter. If you draw a random sample many times, a certain percentage of the confidence intervals will contain the population mean. This percentage is the confidence level.

<center> <img style="width: 50%;" src="{{site.url}}/{{site.baseurl}}/core_app/impact/web_application/menu/settings/use_cases_examples/images/ConfidenceIntervall-Concept.jpg"/></center>

By changing the confidence interval you can modify the precision expected from the significance.

#### 1.2.6. Above or below confidence interval

This trigger allows to choose to detect only anomaly above or below confidence interval. There is sometimes no need to be alerted for good performance. 

<center> <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/above_below_interval.png"/></center>

<br>

### 1.3. Grouping

Sets the model’s aggregation level – if set at X%, segments within each dimension that represent less than X% of the Primary Numerator (e.g., Revenues) will be clustered into an “Other” segment. Default is 2%, but you may want to adjust this parameter as it can significantly impact the calculation of mix effects.

#### 1.3.1. Metric to use for grouping

This is to customize the “Primary Numerator” mentioned just above, based on which the system caculates X% (2% by default) when grouping.

#### 1.3.2. Group values representng less than(%)

This is to customize X% mentioned just above.

<br>



## 2. Metrics Relation

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/metrics_relation.PNG"/></center>

This part allow you to edit your KPIs and market equation, when you want to fit your analysis with your business.

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to “sum” to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/sum_marketequation.gif"/></center>

- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/Marketequation_unit.gif"/></center>

- In the Metrics Relation definition, you can opt to set a given step to focus on a specific dimension. This action will disable the automatic dimension scoring in the computation result and only display the selected dimension.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/focused_dimension_marketequation.gif"/></center>

- The excluded dimension will maintain the scoring algorithm but will not consider the excluded dimension in the calculation for this step.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/market-equation_extension.PNG"/></center>







<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->


<br/>

## 3. Display options

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/display options.png"/></center>

### 3.1. Behavior

#### 3.1.1. Hide dimensions and segments panel

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/gif/hidedimensionsandsegmentspanel.gif"/></center>

If you activate this parameter, a small copy icon will appear at the left side of KPI option, allowing you to download the data source used for this plot.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/copy data in the plot.png"/></center>

#### 3.1.2. Display shortcut on hover only

Only show values when hovering with the mouse.

#### 3.1.3. Display axis markers

Display or hid axis markers.

#### 3.1.2. Highlight element using primary dimension

By activating this option, the detection system will visually highlight the data point (element) that triggered the anomaly, based on the primary dimension of your report or chart

#### 3.1.2. Highlight element using secondary dimension

With this option, the detection system will visually highlight the data point (element) that triggered the anomaly, based on the secondary dimension of your report or chart

#### 3.1.2. Function for line rendering

This option controls how the line is drawn between data points in a line chart.

| Option            | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| **Default**       | Uses the system's default line rendering (linear)                  |
| **Linear**        | Straight lines between each point                                        |
| **Linear closed** | Like linear, but closes the path (back to the first point) – for areas   |
| **Step**          | Draws a horizontal line, then a vertical step – ideal for step functions |
| **Step before**   | Step occurs **before** the data point                                    |
| **Step after**    | Step occurs **after** the data point                                     |


### 3.2. Legends

#### 3.2.1. Display legends

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/gif/displaylegends.gif"/></center>

#### 3.2.2. Position

Choose left or right to display legends.

### 3.3. Axis 
#### 3.3.1. Separator Color
#### 3.3.2. Separator Opacity
#### 3.3.3. Ticks Color
#### 3.3.4. Ticks Opacity
Comming soon

## 4. Preferences

These settings allow you to customize the application to fit with your company, you can also change the analysis language !

### 4.1 Global
#### 4.1.1 Allow Datama to execute actions on data to improve your analysis

In certain cases, Datama will propose adapted displays of the detect to provide more insights. - For example, if your detect has only one step, Datama will unpivot your data to display all segments of a dimension replacing the single step.

#### 4.1.1 Language

 For now only French and English are available, let's us know if you want a new language to be added. 

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/preferences_detect.png"/></center>

### 4.2. Displayed Widgets

Choose to hide or display:

#### 4.2.1 Smart title

#### 4.2.2 Plot (detect graph)

#### 4.2.3 Smart comment

### 4.3. Chart colors

#### 4.3.1 Application color
#### 4.3.2 Waterfall (Detect) color

## 5. Calendar

You can now display Calendar Events right in Datama detect trend lines. For now, this works only if you have your events available in your extension dataset, with at least a Date column, and an event label. By activating the Calendar capabilities in the settings, you will be able to see the events or periods annotated on your trend lines. This is particularly useful for storytelling, to explain why a KPI behaves differently. In the medium term, Datama will allow you to create new events directly in the extension, and explain variations or spot anomalies based on these events.


<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/calendar detect.png"/></center>



<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/structure.html) or [therotical concept]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/concept.html) of Datama.

<br>
