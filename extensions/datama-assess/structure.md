---
title: Interface of Datama Assess extension
description: Datama Assess plugin aims at assessing statistical significance of observed variations
layout: page
scope: Datama/light/assess
keywords: Datama light assess Assess anomaly structure
---

<br>

> **Datama Assess plugin aims at assessing statistical significance of observed variations**

<br>

## 1. Overview

Datama Assess extension is composed of three sections (header, analysis & footer)

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_structure.png"/></center>


<br>

## 2. Header section 

The header is used for global advanced settings to let you configure and refine your analysis. Read the dedicated section about [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/settings.html)

- **Documentation**: Direct link to this documentation
- **Settings**: Refine the settings of the analysis. Find more information on this [page]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)


<br>

## 3. Analysis section

Datama propose 3 views so as to visualize your data as you can see in the dropdown below

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_view_dropdown.png"/></center>

### 3.1 Density of mean

This slide represents the expected distributions of compared segments (typically AB test variants)

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_density_of_mean_view.png"/></center>

Change the ratio your are analysing by using the dropdown in the title. Within the dropdown KPIs are ordered first <i>KPIs with significant variations</i> and then <i>KPIs with no significance</i>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_kpi_dropdown.png"/></center>

### 3.2 Comparison

Breakdown by the dimensions of you choice in the dropdown below, you can the values of your KPI with confidence intervals. When a difference between is significant the result is highlighted

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_comparison_view.png"/></center>

The dropdown sort dimensions with a significance score which sums the following score for each values (Here, France + Germany + Spain + UK): score = significant * denom * avgdiff.
Where 'significant' is basically 0 or 1, 'denom' is the denominator of the selected kpi and 'avgdiff' is the difference between the two ratios.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_breakdown_dropdown.png"/></center>

You can moreover choose to show denominator instead of confidence intervals with the button at the top right corner : <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_show_denominator_button.png"/>

### 3.3 Relative variation

Similar to Comparison, this view shows the relative variation with its confidence interval breakdown by the dimension of your choice.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_relative_variation_view.png"/></center>

Similar to Comparison, this view shows the relative variation with its confidence interval breakdown by the dimension of your choice.

Datama Assess is set to analyse each steps of your market equation. You can define the market equation in [settings]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)

<br>

## 4. Footer Section

Depending on your plan the footer can have different informations: 
- Link to upgrade your plan
- [Documentation]((https://docs.Datama.io/)) 
- [Contact us](https://Datama.io/lets-talk/)

