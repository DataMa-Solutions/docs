---
title: Assess - Significance methods
description: This page explains the existing methods for assess significance
layout: page
scope: Datama/light/assess
keywords: light assess significance method
---

<br>

> **Significance calculation can be based on different methods available on the shelves in Datama Assess**

<br>

Datama Assess is based on a method to compute significance anomalies called [Frequentist Bernouilli Welch's T test](#Frequentist-Bernoulli). 


<br>


<br>
## Frequentist Bernoulli

In the Bernoulli frequentist approach, the outcome has to be binary (1 or 0, e.g. Transactions). As long as this is true, any aggregation of the data can be used.
The resulting chart shows the probability of distribution of the average value of the considered KPI.


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_frequentist.png" alt="assess - Frequentist model" /></center>


Behind the scenes: A frequentist Welch t-test is computed to test whether the mean outcome is significantly different between the Start and the End values of your comparison. 
The standard deviation used in the test is derived from the properties of the Bernoulli distribution.
See also: [wikipedia](https://en.wikipedia.org/wiki/Welch%27s_t-test)
Test data: [Gsheet](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=0)

<br>