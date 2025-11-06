---
title: Detect - interface
description: Datama DETECT aims at evaluating over time the normality of a variation.
layout: new-page
scope: Datama/saas/detect
keywords: full app detect interface
---

> Datama Detect aims at evaluating over time the normality of a variation.


**Interface of Datama Detect:** 

- [Header]({{site.url}}/{{site.baseurl}}/core_app/new/interface/header/header.html) (find here general information about the Header)
- [Subheader]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/subheader.html) (find here general information about the Subheader)
- [1st Slide](#1st-slide)
- [2nd Slide](#2nd-slide)

<br>

<center><img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_interface.png"/></center>

<br>


Datama DETECT is composed of two different pages. One which shows the variation overtime and one which represents the detail on a specific anomaly. 

<br>

# 1. First Slide

This slide represents a time series with all the anomalies (settings by default) or only a check on the latest available point in your dataset. Change this settings in the Subheader (<i>Analyse Latest Point Only</i>)

Change the ratio your are analysing by using the dropdown in the title. Within the dropdown KPIs are split between <i>KPIs with anomalies</i> and <i>Others KPIs</i>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_dropdownKPIs.jpg"/></center>

By default Datama Detect is set to analyse each steps of your market equation but you can change it to only a specific step. (in <i>Settings</i>)

<br>

# 2. Second Slide

The 2nd slide is the explanation of a selected point in the graph above. 
The bars represents the denominator and the line represents the ratio of your KPI.

By using the dropdowns in the title you can either change the date you are analysing or the dimension.