---
title: Datama Detect
description: Datama DETECT aims at evaluating over time the normality of a variation.
layout: new-page
scope: Datama/saas/detect
keywords: full app detect introduction
---

<br>


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/Detect_icon.jpg" alt="logo detect" /></center>

<br>

> **Datama Detect aims at evaluating over time the normality of a variation.**

<br>

This module allows to automate outlier identification on a given ratio, and understand the drivers of that anomaly. This is particularly useful in time series for being able to quickly spot issues in your KPIs overtime.

Datama Detect is a data analysis tool that allows you to not only to detect potential outliers in your dataset but also to explain them using the Datama Compare algorithm.

You can use Datama Detect to monitor your dataset and set up automatic monitoring of your main KPIs. If your dataset is big enough, Datama Detect will show you potential outliers as well as give you the opportunity to further investigate your data. 

<br>

## Interface of Detect

Discover [more]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detect_interface.html) about the interface in the proper section.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/Example_AnomalyDetection.gif"/></center>


<!-- You can also adjust how sensitive you want the detection to be using the “Confidence interval” slider in the settings.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_confidenceInterval.jpg"/></center> -->

By default, the most relevant outlier is selected, but you can also choose any point in your dataset that you would like to get insight for. This can be done by selecting it, or by directly clicking on the graph.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_anomalyExplanation.jpg"/></center>

<br>

<div class="info-box">
  <strong>Note</strong>: By default, Datama selects the first ratio of your metric relation, but you can change that by clicking on the KPI bar in the subheader and ticking the appropriate metric within your metric relation. 
  <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/metricchange.gif"/></center>
</div>

## Dataset needed for Detect

<i>Datama Detect</i> needs at least 30 days in a the [dataset]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) to be able to evaluate a normality. Otherwise the dataset needs to have Dimensions and Metrics as for all solutions in Datama. A dataset used in <i>Datama Detect</i> could be used in the other solution as well. 

<br>

## Anomaly methodology

In Detect, the dimension should be selected for assessing normality within your data. This dimension can be a date, category, or any other relevant data point.

**Note**: The chosen dimension should have at least 30 elements to ensure statistical significance and reliability in the analysis.

**Baseline Establishment**: Our system analyzes the volatility of the selected dimension by establishing a baseline. This baseline consists of 'X' number of previous data points.

**Weighted Standard Deviation and Average:** Using this baseline, the system calculates the weighted standard deviation and average for the specified KPI. This process involves giving different weights to the data points, typically placing more importance on recent data.

**Confidence Interval Calculation:** The system then uses these calculations to establish a confidence interval. This interval is based on the rules of normal distribution. It helps in identifying values that deviate significantly from what's expected or normal, flagging them as anomalies.

<br>