---
title: Detect - interface
description: DataMa DETECT aims at evaluating over time the normality of a variation.
layout: page
scope: datama/saas/detect
keywords: full app detect interface
---

> DataMa DETECT aims at evaluating over time the normality of a variation.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_interface.png"/></center>

<br><br>

**Interface of DataMa DETECT:** 

- [Header]({{site.url}}/{{site.baseurl}}/core_app/new/interface/header/header.html) (find here general information about the Header)
- [Subheader]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/subheader.html) (find here general information about the Subheader)
- [1st Slide](#1st-slide)
- [2nd Slide](#2nd-slide)


DataMa DETECT is composed of two different pages. One which shows the variation overtime and one which represents the detail on a specific anomaly. 

> ### 1st Slide ###

This slide represents a time series with all the anomalies (settings by default) or only a check on the latest available point in your dataset. Change this settings in the Subheader (<i>Analyse Latest Point Only</i>)

Change the ratio your are analysing by using the dropdown in the title. Within the dropdown KPIs are split between <i>KPIs with anomalies</i> and <i>Others KPIs</i>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_dropdownKPIs.jpg"/></center>

By default DataMa Detect is set to analyse each steps of your market equation but you can change it to only a specific step. (in <i>Settings</i>)


> ### 2nd Slide ###

The 2nd slide is the explanation of a selected point in the graph above. 
The bars represents the denominator and the line represents the ratio of your KPI.

By using the dropdowns in the title you can either change the date you are analysing or the dimension.