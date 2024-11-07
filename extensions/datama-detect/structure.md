---
title: Interface of Datama Detect extension
description: Datama Detect aims at evaluating over time the normality of a variation.
layout: page
scope: Datama/light/detect
keywords: Datama light detect Detect anomaly structure
---

<br>

> **Datama Detect plugin aims at evaluating over time the normality of a variation and explain it**

<br>

## 1. Overview

Datama Detect extension is composed of three sections (header, analysis & footer)

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_structure.png"/></center>


<br>

## 2. Header section 

The header is used for global advanced settings to let you configure and refine your analysis. Read the dedicated section about [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)

- **Documentation**: Direct link to this documentation
- **Settings**: Define your modeling settings. Find more information on this [page]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)


<br>

## 3. Analysis section

This slide represents a time series with all the anomalies (settings by default) or only a check on the latest available point in your dataset. Change this settings in the Subheader (<i>Analyse Latest Point Only</i>)

Change the ratio your are analysing by using the dropdown in the title. Within the dropdown KPIs are split between <i>KPIs with anomalies</i> and <i>Others KPIs</i>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-detect/assets/detect_dropdown.png"/></center>

By default Datama Detect is set to analyse each steps of your market equation but you can change it to only a specific step. (in <i>Settings</i>)

This view has settings dedicated to the graph to adapt the display: 
1. **Selected step**: change the KPI your are watching
2. **Toggle denominator**: display denominator has a bars graph.
3. **Toggle Main KPI**: display line of the main KPI, this allows to check if the variation on a KPI has an impact on the main KPI.
4. **Pivot**: rotate your graph of 90°
5. **Stack traces**: ....

<br>

## 4. Footer Section

Depending on your plan the footer can have different informations: 
- Link to upgrade your plan,
- [Documentation]((https://docs.Datama.io/)) 
- [Contact us](https://Datama.io/lets-talk/)

