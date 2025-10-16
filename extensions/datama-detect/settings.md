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

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Detect_setting.png"/></center>

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

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_settings.png"/></center>

<br/>

## 1.1. Modeling

<br/>

### 1.1.1. Detect anomaly on xxx
Select from the available dimensions in your dataset based on which you wish to detect anomalies. We usually choose Date, Hour, or another continuous numeric field.

### 1.1.2. Detection method

*  **Observed volatility** : Uses the natural variability of the data (e.g. rolling standard deviation) to detect anomalies. It's the best method when your data fluctuates normally over time. For example: A value is flagged if it deviates more than 2× the standard deviation from the recent average.

* **Relative variation threshold** : Flags an anomaly if the percentage change between two periods exceeds a defined threshold (e.g. +30%).

* **Absolute variation threshold** : Flags an anomaly if the absolute difference between two values exceeds a fixed amount (e.g. +50 units).

* **Absolute value threshold** : Triggers an alert when the actual value goes above or below a predefined threshold. This method is good for hard business limits (e.g. Any value above 80 is automatically flagged as abnormal).

Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more


{% include embed_totw.html num=145 %}


### 1.1.3. Baseline mode
These settings determine which historical data points are used to calculate the baseline for anomaly detection:

* **All points** : Uses all historical data points to compute the baseline.
* **Same day of week** : Only uses historical data points that fall on the same weekday (e.g., all previous Mondays if the current point is a Monday).
* **Same day of year** : Compares only with data from the same calendar day in previous years.
* **Same ISO day**: Compares only with the [ISO day](https://en.wikipedia.org/wiki/ISO_week_date) (ISO 8601).

### 1.1.4. Number of Points in baseline 
It's to determine how many past data points are used to calculate the baseline (or expected value) for anomaly detection. Number of points choosen in this settings should exist in the dataset otherwise it could trigger an issue.
By default the maximum number of points available is already selected in this input.

### 1.1.5. Level of confidence

A confidence interval represents a range of values that is likely to contain an unknown population parameter. When you repeatedly draw random samples, a specific percentage of these confidence intervals will encompass the population mean. This percentage is known as the confidence level. 
You can set it as high as 99.99% - the higher the confidence level, the fewer anomalies will be detected, ensuring that only the most reliable anomalies are displayed.

<center> <img style="width: 50%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_confidenceInterval.png"/></center>


By changing the confidence interval you can modify the precision expected from the significance.

### 1.1.6. Analyse latest points only
You can choose to display the anomalies of each date or only for the latest point in the data.
In run mode (i.e. when sending alerts on a daily basis for instance), we recommand to activate this parameter, to avoid having all the anomalies raised. 

### 1.1.7. Number of points flagged
When "Latest points only" is enabled, you can define a specific number of past data points where you want to detect anomalies. For example: if you check anomalies on a weekly basis, you may want to have the 7 latest points activated. 

Even if only the latest point is activated, you will be able to see when the curve crosses the confidence interval in the past, but you won't have the green or red dots that flag the anomaly.

<br>

{% include embed_totw.html num=148 %}

<br>

### 1.1.8. Above or below confidence interval

This trigger allows to choose to detect only anomaly above or below confidence interval. There is sometimes no need to be alerted for good performance. 

<!-- <center> <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/above_below_interval.png"/></center> -->

<br>

## 1.2. Clustering

Sets the model’s aggregation level – if set at X%, segments within each dimension that represent less than X% of the Primary Numerator (e.g., Revenues) will be clustered into an “Other” segment. Default is 2%, but you may want to adjust this parameter as it can significantly impact the calculation of mix effects.

### 1.2.1. Main KPI (Metric to use for grouping)

This is to customize the “Primary Numerator” mentioned just above, based on which the system caculates X% (2% by default) when grouping.

### 1.2.2. Aggregation in % 

This is to customize X% mentioned just above.

<br>


# 2. Market Equation

<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/metrics_relation.png"/></center>

This part allow you to edit your KPIs and market equation, when you want to fit your analysis with your business.

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. 

Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to “sum” to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/gif/sum_marketequation_detect.gif"/></center>

- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/gif/Marketequation_unit_detect.gif"/></center>

<!-- - In the Metrics Relation definition, you can opt to set a given step to focus on a specific dimension. This action will disable the automatic dimension scoring in the computation result and only display the selected dimension.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/focused_dimension_marketequation.gif"/></center>

- The excluded dimension will maintain the scoring algorithm but will not consider the excluded dimension in the calculation for this step.

<center><img style="align: right; width: 900px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/img/market-equation_extension.png"/></center> -->



<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->

<br/>

# 3. Plots

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/plots.png"/></center>

<br/>

## 3.1. Axis-Behavior

<br/>

### 3.1.1. Join missing values
Collapse empty continuous values. When this option is enabled, the chart removes continuous intervals (such as dates or numeric ranges) that have no data, so the remaining values are displayed without gaps. This helps make time series or continuous charts look smoother by connecting only the periods that contain actual data, instead of showing empty spaces for missing values.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Join_missing_value.png"/></center>

### 3.1.2. Keep position

When this option is enabled, the chart preserves the full structure of grouped or stacked categories even when some combinations have no data. For example, if your X-axis represents dates and your X2 (sub-axis) represents countries, each date normally shows one bar per country. Without this option, dates with missing countries will display fewer bars, changing the visual spacing. With Keep position enabled, all expected category positions are kept — empty ones remain visible but show no value — ensuring consistent alignment across all dates.

<br/>

## 3.2. Axis-Tracker

<br/>

#### 3.2.1. Display
Enable/Disable Axis tracker
#### 3.2.2. Color
Change tracker's color
#### 3.2.3. Opacity
Adjust Opacity of tracker
#### 3.2.4. Size
Adjust size of tracker

<br/>

## 3.3. Axis-Label

<br/>

#### 3.3.1. Display
Enable/Disable displaying labels or choose displaying only measure or dimensions or both
#### 3.3.2. Color
Change label's color
#### 3.3.3. Opacity
Adjust Opacity of label
#### 3.3.4. Size
Adjust size of label
#### 3.3.5. Weight
Controls the thickness (or boldness) of text labels on the chart — for example, making axis labels or data labels appear lighter or bolder for better visual emphasis.

<br/>

<!-- 
#### 3.3.1. Separator Color
#### 3.3.2. Separator Opacity
#### 3.3.3. Ticks Color
#### 3.3.4. Ticks Opacity
Comming soon

#### 3.1.1. Hide dimensions and segments panel

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/gif/hidedimensionsandsegmentspanel.gif"/></center>

If you activate this parameter, a small copy icon will appear at the left side of KPI option, allowing you to download the data source used for this plot.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/copy data in the plot.png"/></center>



#### 3.1.3. Display axis markers

Display or hid axis markers.


#### 3.1.2. Function for line rendering

This option controls how the line is drawn between data points in a line chart.

| Option            | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| **Default**       | Uses the system's default line rendering (linear)                  |
| **Linear**        | Straight lines between each point                                        |
| **Linear closed** | Like linear, but closes the path (back to the first point) – for areas   |
| **Step**          | Draws a horizontal line, then a vertical step – ideal for step functions |
| **Step before**   | Step occurs **before** the data point                                    |
| **Step after**    | Step occurs **after** the data point                                     | -->


## 3.4. Legends


<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/display_legend.png"/></center>

<br/>

### 3.4.1. Display legends

Show or hide legend

### 3.4.2. Position

Choose left or right to display legends.

<br/>


## 3.5. Behaviors

<br/>

### 3.5.1. Shortcuts on hover

Only show values when hovering with the mouse.

### 3.5.2. Highlight primary dimension

By activating this option, the detection system will visually highlight the data point (element) that triggered the anomaly, based on the primary dimension of your report or chart

### 3.5.3. Highlight secondary dimension

With this option, the detection system will visually highlight the data point (element) that triggered the anomaly, based on the secondary dimension of your report or chart

<br/>


# 4. Calendar

You can now display Calendar Events right in Datama detect trend lines. For now, this works only if you have your events available in your extension dataset, with at least a Date column, and an event label. By activating the Calendar capabilities in the settings, you will be able to see the events or periods annotated on your trend lines. This is particularly useful for storytelling, to explain why a KPI behaves differently. In the medium term, Datama will allow you to create new events directly in the extension, and explain variations or spot anomalies based on these events.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Calendar.png"/></center>

<br>

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/calendar detect.png"/></center>

<br/>

## 4.1 Events

This Calendar settings allows to set the display and adapt the formating.

<center><img style="width: 60%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Enable_events.png"/></center>


<br/>

### 4.1.1. Calendar

Put the colonne names about events of your dataset into Label(event name),
- Description (if any), allows to display more details about this event. 
- Type (if any), allow to categorize events, will allow you to then filter on specific events.
- Scoping (a dimension you want to attach your events when scoping or filtering).

<br>

### 4.1.2. Areas

This section allows you to customize the event area — for example, display it at full size or up to a specific value, hide the area, choose whether it starts from the top or bottom, set the stroke size for calendar event areas in pixels, and adjust opacity.

### 4.1.3. Markers

You can customize markers by choosing to display only markers, only colors, both, or none. You can also define whether they start from the bottom or top, and adjust their stroke size and opacity

<br/>

## 4.2 Display Options

Show/hide weekly, monthly, yearly labels or lines 

<br/>

## 4.3 Area Configuration

Control spacing and size of event 

<br/>

## 4.4 Markers Settings

Show markers on hover or permanently

<br/>

# 5. Preferences

These settings allow you to customize the application to fit with your company, you can also change the analysis language!

<br/>

## 5.1 Global

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/preference_detect.png"/></center>

### 5.1.1 Language

 For now only French, Deutsch and English are available, let's us know if you want a new language to be added. 

### 5.1.2. Displayed title

Show or hide chart title

### 5.1.3 Plot (detect graph)

Show or hide chart itself

### 5.1.4 comment

Show or hide chart comment

<br/>

## 5.2. Colors

### 5.2.1 Application color

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_application_colors.png"/></center>.

### 5.2.2 Waterfall (Detect) color

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_waterfall_colors.png"/></center>.

<br>

# 6. Save customized setting


For **premium users on Looker Studio and Power BI**: once you customize your chart, click the **Save** button at the top right, then paste the JSON automatically copied to your clipboard into the **Config JSON** field in the style panel. **Otherwise, your settings will be lost when you refresh the BI report.

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/Save JSON.png"/></center>.

<br/>


Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/structure.html) or [therotical concept]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/concept.html) of Datama.

<br>
