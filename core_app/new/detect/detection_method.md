---
title: Detection methods
description: This page explains the existing methods for anomaly detection
layout: new-page
scope: Datama/saas/detect
keywords: full app detect detection method 
---

<br>

> **Anomaly detection can be based on different methods available on the shelves in Datama Detect**

<br>

There is basically two type of methods existing in Datama Detect to spot anomalies in your data:

1. Methods based on estimated confidence interval
    - [Forecast](#11-forecast)
    - [Observed volatilty](#12-observed-volatility)
2. Methods based on manually configured thresholds
    - [Relative variation threshold](#relative-variation-threshold)
    - [Absolute variation threshold](#absolute-variation-threshold)
    - [Absolute value threshold](#absolute-value-threshold)

The default value and more generic approach is the [Observed volatilty](#Observed-volatility). 
However, depending on your  use case, you may want to change that input

<br>

# 1. Methods based on confidence interval

Methods based on confidence interval takes into account relatively complex algorithm based on your historical data to define an expected confidence interval for next points.
This assumes the definition of a [confidence interval]({{site.url}}/{{site.baseurl}}/core_app/new/detect/settings.html#confidence-interval) which is set by default at 95%

We will use the following dataset for example on those methods

<center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXYphkUS8WX6Wa4GZp5LBisnEOoqdLyp9darrXuIJPqmsnv_f8Tvhq_0sNX7L2uVfIaJjonTP2j8Fm/pubhtml?gid=33769454&amp;single=true&amp;widget=true&amp;headers=false" width="720" height="270"></iframe></center>

<br>

## 1.1 Forecast

Forecast methods leverage machine learning and ARIMA modeling to define an expected confidence interval for the latest point. 

This forecast takes into account the seasonality of your data, including yearly/ monthly/ weekly seasonality

In the output slide, the forecast line is displayed in orange, and the confidence interval is in blue. Points outside the confidence interval will be considered as anomalies.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_forecast.png"/></center>

> Note that Forecast method is available only when analysing [latest point only]({{site.url}}/{{site.baseurl}}/core_app/new/detect/settings.html#analyse-latest-point-only)

<br>

## 1.2 Observed volatility

The observed volatility takes into account a baseline of X previous points (X can be defined in [Number of points in baseline]({{site.url}}/{{site.baseurl}}/core_app/new/detect/settings.html#25-number-of-points-in-baseline) input) and computes the weighted standard deviation and average of that baseline for a given KPI to get a confidence interval based on normal distribution rules. 

The confidence interval is in light blue. Points outside the confidence interval will be considered as anomalies.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_volatility.png"/></center>

In the above screenshot, note that the number of points in baseline is set to 20, which is obvious for instance when looking as the spike of the 9th of June impact makes the confidence interval narrow down starting on the 29th of June, i.e. 20 days later. 

<br>

### 1.2.1 Smart Interval

By default, when "Observed Volatility" is selected, the Smart Interval button is enabled.  
Smart Interval calculates a theoretical confidence interval instead of an observed interval, using the Wilson method ([click here to learn more](https://corpus.ulaval.ca/server/api/core/bitstreams/aecd68a4-0d76-45da-b2e3-d6e0e7547a9c/content)). This applies only to ratios between 0 and 1 since Wilson method relies on a Binomial distribution. Smart Interval only calculates the Lower Bound of the interval with the Wilson method, allowing for better detection of values close to 0.

Below is an example of anomaly detection with and without Smart Interval.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_wo_smart_interval.png"/></center>
<p align="center"><em>Without Smart Interval</em></p>


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_with_smart_interval.png"/></center>
<p align="center"><em>With Smart Interval</em></p>

<br>

# 2. Methods based on manually configured thresholds

Methods based on manually configured thresholds take into account a 

We will use the following dataset for example on those methods

<center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXYphkUS8WX6Wa4GZp5LBisnEOoqdLyp9darrXuIJPqmsnv_f8Tvhq_0sNX7L2uVfIaJjonTP2j8Fm/pubhtml?gid=33769454&amp;single=true&amp;widget=true&amp;headers=false" width="720" height="270"></iframe></center>

<br>

## 2.1 Relative variation threshold

This methods flags as anomaly any relative variation that is higher or lower than the defined threshold vs. the defined base line.

For instance, in the screenshot below, we compare each point to the previous same hour of the same day of week and if the relative variation is above or below 50%, the value will be considered as an outlier, which is the case for the latest point

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_relative_var_input.png"/></center>
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_relative_var_output.png"/></center>

> Note that in this case, threshold input is considered in % if above 1, so there is no need to put a decimal value
<br>
> Also note that you might want to use more than one point in your base line, to smooth the expected value

<br>

## 2.2 Absolute variation threshold

This methods flags as anomaly any absolute variation that is higher or lower than the defined threshold by difference vs. the defined base line.

For instance, in the screenshot below, we compare each point to the previous same hour of the same day of week and if the absolute variation is above or below 20k, the value will be considered as an outlier, which is the case for two points

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_absolute_var_input.png"/></center>
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_absolute_var_output.png"/></center>

> Note that the flagged outliers are not the same as in the previous relative method, which comes from the fact that there is a weekly seasonlity in the data and low values (typically weekends) have less chance to get flagged since the threshold is absolute

<br>

## 2.3 Absolute value threshold

This methods flags as anomaly any value that is not on the same side as the defined base line of the hard line defined in the threshold.
For instance if the threshold is set to 50k and the base line value is 40k, if the considered value is 60k, this will be considered as an anomaly

In the screenshot below, we compare each point to the previous point and if the value changes sign vs. 50k, the value will be considered as an outlier

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_absolute_value_input.png"/></center>
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/detect/images/detect_absolute_value_output.png"/></center>
