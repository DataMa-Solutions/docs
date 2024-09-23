---
title: Settings of Datama Detect
description: Discover all settings exposed by Datama Detect to improve your analysis
scope: Datama/light/detect
keywords: light compare settings detect extension plugin
---

<br>

> Discover all settings exposed by Datama Detect extension to improve your analysis

<br>

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_settings.png"/></center>

<br>

_Find below how you can customize Datama Detect using the General settings_

- [1. General Settings](#1-general-settings)
    - 1.1. [Confidence interval](#11-confidence-interval)
    - 1.2. [Points in baseline](#12-number-of-points-in-the-baseline)
    - 1.3. [Latest point only](#13-latest-point-only)
    - 1.4. [above or below confidence interval](#14-above-or-below-confidence-interval)
- [2. Metrics Relation](#2-metrics-relation)
- [3. Preferences](#3-preferences)

<br>

# 1. General Settings

### 1.1. Confidence interval

A confidence interval is a range of values that is likely to contain an unknown population parameter. If you draw a random sample many times, a certain percentage of the confidence intervals will contain the population mean. This percentage is the confidence level.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/impact/web_application/menu/settings/use_cases_examples/images/ConfidenceIntervall-Concept.jpg"/></center>

By changing the confidence interval you can modify the precision expected from the significance.


<br>

### 1.2. Number of Points in the baseline 

This allows you to define how many points within the defined type of points in your historical data the algoritm will consider for baseline.
Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more

<br>

### 1.3. Latest point only

You can choose to display the anomalies of each date or only for the latest point in the data.
In run mode (i.e. when sending alerts on a daily basis for instance), we recommand to activate this parameter, to avoid having all the anomalies raised.

<br>

### 1.4. Above or below confidence interval

This trigger allows to choose to detect only anomaly above or below confidence interval. There is sometimes no need to be alerted for good performance. 

<center> <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/above_below_interval.png"/></center>


<br>



## 2. Metrics Relation

This part allow you to edit your KPIs and market equation, when you want to fit your analysis with your business.

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to “sum” to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.
- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100.
- In the Metrics Relation definition, you can opt to set a given step to focus on a specific dimension. This action will disable the automatic dimension scoring in the computation result and only display the selected dimension.
- The excluded dimension will maintain the scoring algorithm but will not consider the excluded dimension in the calculation for this step.


<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/metrics_relation.PNG"/></center>

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->


<br/>

## 3. Preferences

These settings allow you to customize the application to fit with your company, you can also change the analysis language !

### Language

 For now only French and English are available, let's us now if you want a new language to be added. 


<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/preferences_detect.png"/></center>

<br/>

### Fonts & Size

- **Family**: Choose amongst the Font the one that best match your current dashboard
- **Text Size**: Ajdust the visibility of your waterfall by choosin the best size of the text. 

<br>


---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/structure.html) or [therotical concept]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/concept.html) of Datama.

<br>
