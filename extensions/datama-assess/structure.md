---
title: Interface of Datama Assess extension
description: Datama Assess plugin aims at assessing statistical significance of observed variations
layout: new-page
scope: Datama/light/assess
keywords: Datama light assess Assess anomaly structure
---

<br>

> **Datama Assess plugin aims at assessing statistical significance of observed variations**

<br>

# Overview

Datama Assess extension is composed of three sections:

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_structure.png"/></center>

<!-- 1. [Header Section](#1-Header-Section).
2. [Analysis panel](#2-Analysis-section)
3. [Footer](#3-Footer-Section) -->

<br>

## 1. Header section 

The header is used for global advanced settings to let you configure and refine your analysis. Read the dedicated section about [Settings]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html)

- **Documentation**: Direct link to this documentation
- **Settings**: Refine the settings of the analysis. Find more information on this [page]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html)


<br>

## 2. Analysis section

Datama propose 3 views for each test-type so as to visualize your data as you can see in the dropdown below

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_view_dropdown.png"/></center>

### 2.1 Views available for each tests

#### 2.1.1 Frequentist Bernoulli

- Relative variation (For A/B tests)
- Comparison
- Density of mean

#### 2.1.2 Bayesian Bernoulli

- Relative variation (For A/B tests)
- Comparison
- Outperforming chances

#### 2.1.3 Volatility

- Time series (For Volatility)
- Relative variation (For Volatility)
- Comparison

#### 3.3.4 Forecast

- Time series (For Forecast)
- Relative variation (For Forecast)
- Comparison

<br>

### 2.2 Views description

#### 2.2.1 Density of mean

This slide represents the expected distributions of compared segments (typically AB test variants)

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_density_of_mean_view.png"/></center>

Change the ratio your are analysing by using the dropdown in the title. Within the dropdown KPIs are ordered first <i>KPIs with significant variations</i> and then <i>KPIs with no significance</i>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_kpi_dropdown.png"/></center>

Datama Assess is set to analyse each steps of your market equation. You can define the market equation in [settings]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings/settings.html)

#### 2.2.2 Comparison

Breakdown by dimensions of your choice in the dropdown below, you can sometimes (Frequentist test) show the values of your KPI with confidence intervals. When a difference between start and end is significant the result is highlighted

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_comparison_view.png"/></center>

The dropdown sort dimensions with a significance score which sums the following score for each values (Here, France + Germany + Spain + UK): score = significant * denom * avgdiff.
Where 'significant' is basically 0 or 1, 'denom' is the denominator of the selected kpi and 'avgdiff' is the difference between the two ratios.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_breakdown_dropdown.png"/></center>

You can moreover choose to show denominator instead of confidence intervals with the button at the top right corner : <img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_show_denominator_button.png"/>

#### 2.2.3 Relative variation (For A/B tests)

Similar to Comparison, this view shows the relative variation sometimes (Frequentist test) with its confidence interval breakdown by dimensions of your choice.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_relative_variation_view.png"/></center>

#### 2.2.4 Outperforming chances

Available only for Bayesian test, this view shows percentages of chances that end kpi is greater than start kpi and vice-versa

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_outperforming_chances_view.png"/></center>

#### 3.2.5 Time series (For Volatility test)

Available only for Volatility test, this view shows the evolution of comparisons over time and pinpoint the selected one.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_volatility_time_series_view.png"/></center>

#### 3.2.6 Time series (For Forecast)

Available only for Forecast test, this view shows the evolution of selected KPI with a forecast, presented with a confidence interval over the end period.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_forecast_time_series_view.png"/></center>

#### 3.2.7 Relative Variation (For time series)

Available only for Volatility test, this view shows same informations than Time series view and you can breakdown by a second dimension.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_volatility_variation_view.png"/></center>

Each bar represent former typical comparisons and the bigger bar is the selected one.


#### 3.2.8 Relative Variation (For time series)

Available only for Forecast testing, this view shows the confidence interval of forecasted data with the relative variation observed. You can also break down by a second dimension in this view.

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_forecast_variation_view.png"/></center>

<br>

## 3. Footer Section

Depending on your plan the footer can have different informations: 
- Link to upgrade your plan
- [Documentation]((https://docs.Datama.io/)) 
- [Contact us](https://Datama.io/lets-talk/)

