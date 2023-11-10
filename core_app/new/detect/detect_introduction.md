---
title: DataMa Detect
description: DataMa DETECT aims at evaluating over time the normality of a variation.
layout: page
scope: app
---

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/Detect_icon.jpg" alt="logo detect" /></center>

> **DataMa DETECT aims at evaluating over time the normality of a variation.**


This module allows to automate outlier identification on a given ratio, and understand the drivers of that anomaly. This is particularly useful in time series for being able to quickly spot issues in your KPIs overtime.

DataMa DETECT is a data analysis tool that allows you to not only to detect potential outliers in your dataset but also to explain them using the DataMa Compare algorithm.

You can use DataMa DETECT to monitor your dataset and set up automatic monitoring of your main KPIs. If your dataset is big enough, DataMa DETECT will show you potential outliers as well as give you the opportunity to further investigate your data. 


**Interface of DataMa DETECT** 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/Example_AnomalyDetection.gif"/></center>


You can also adjust how sensitive you want the detection to be using the “Confidence interval” slider in the settings.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_confidenceInterval.jpg"/></center>

By default, the most relevant outlier is selected, but you can also choose any point in your dataset that you would like to get insight for. This can be done by selecting it, or by directly clicking on the graph.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_anomalyExplanation.jpg"/></center>


**Dataset needed for DataMa DETECT** 

<i>DataMa Detect</i> needs at least 30 days in a the [dataset]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) to be able to evaluate a normality. Otherwise the dataset needs to have Dimensions and Metrics as for all solutions in DataMa. A dataset used in <i>DataMa Detect</i> could be used in the other solution as well. 
