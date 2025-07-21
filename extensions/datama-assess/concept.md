---
title: Assess - Significance methods
description: This page explains the existing methods for assess significance
layout: new-page
scope: Datama/light/assess
keywords: light assess significance method
---

<br>

> **Significance calculation can be based on different methods available on the shelves in Datama Assess**

<br>

<!-- Datama Assess is based on multiples methods to compute significance anomalies :
1. [Frequentist Bernoulli Welch's T test](#1-frequentist-bernoulli).
2. [Bayesian Bernoulli](#2-bayesian-bernoulli)
3. [Volatility](#3-volatility) 
4. [Forecast](#4-forecast)
-->


<br>

## 1. Frequentist Bernoulli

In the Bernoulli frequentist approach, the outcome has to be binary (1 or 0, e.g. Transactions). As long as this is true, any aggregation of the data can be used.
The resulting chart shows the probability of distribution of the average value of the considered KPI.


<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_density_of_mean_view.png" alt="assess - Frequentist model" /></center>


Behind the scenes: A frequentist Welch t-test is computed to test whether the mean outcome is significantly different between the Start and the End values of your comparison. 
The standard deviation used in the test is derived from the properties of the Bernoulli distribution.
See also: [wikipedia](https://en.wikipedia.org/wiki/Welch%27s_t-test)
Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)

<br>

<br>

## 2. Bayesian Bernoulli

In the Bernoulli frequentist approach, the outcome also has to be binary (1 or 0, e.g. Transactions). As long as this is true, any aggregation of the data can be used.
The resulting chart shows the probability than the end ratio outperform the start one and vice-versa. 


<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_outperforming_chances_view.png" alt="assess - Bayesian model" /></center>


Behind the scenes: We model the ratios with beta laws that we parameterize using the data provided. From this modeling we obtain the probabilities that in the long term one will outperform the other one.

See also : [wikipedia](https://www.evanmiller.org/bayesian-ab-testing.html)
Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)

<br>

## 3.  Volatility

<br>
Volatility test applies when you compare two periods of time with the same number of days, and you have other historical data in your data source to compare the variation you have between your two periods vs. historical variations between same time ranges.
For instance, in a given year, you want to assess the significance of the variation of Revenues/ Sessions from week 45 to week 46. A good way to do this is is to look at previous variations from one week to the next (ie. week 43 to  44, week 41 to 42 etc), and compare those variations to the one of the week 45 to 46. If the variation from week 45 to 46 is outside the distribution of previous variations, then it can be considered as a significant, abnormal variation.
Datama uses normal distribution quantiles to identify outliers and spot “abnormal variation”. It is possible to adjust sensitivity using the “Confidence interval” slider in “Settings”.

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_volatility_time_series_view.png" alt="assess - Volatility model" /></center>

<br>

See also: [wikipedia](https://en.wikipedia.org/wiki/Normal_distribution)
Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=925605184)

<br>
## 4.  Forecast

<br>
In the Forecast approach, our goal is to predict the normal behavior of a KPI for the selected end dates, so as to see significant differences in relative variation with start dates. We first make an STL decomposition and then apply ARMA models to compute a prediction. Then, we compute confidence intervals based on normal distributions.

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_forecast_time_series_view.png" alt="assess - Forecast model" /></center>

<br>

STL decomposition: [wikipedia](https://medium.com/@kis.andras.nandor/demystifying-stl-understanding-seasonal-decomposition-of-time-series-d3c50150ec12)
ARMA models: [wikipedia](https://fr.wikipedia.org/wiki/ARMA)
Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit?gid=1791585876#gid=1791585876)

<br>