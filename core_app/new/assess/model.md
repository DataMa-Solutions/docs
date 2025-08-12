---
title: Datama Assess - Our Models
description: Statistical models used by Datama to assess the significance are based on common models for a data scientist. 
layout: page
scope: Datama/saas/assess
keywords: full app assess model concept
---


> Statistical models used by Datama to assess the significance are based on common models for a data scientist. 

By default, Datama will select the most appropriate model based on the data you are comparing. It will likely be a Welch t test if you are comparing two discrete segments, and a forecasting approach if you are comparing two -long enough- periods.

However, you can select the test you want within model settings, under [Test to Compute]({{site.url}}/{{site.baseurl}}/core_app/new/assess/settings.html#test-to-compute) input. 

<br>

We have two main types of models:

## <b>AB Test tests:</b>

Those are classic AB test significance calculation:

- [Welch t-test]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/frequentist.html) using a frequentist approach (either for Bernoulli variables such has conversion or any other variables, such as basket value)
- [Bayesian test]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/bayesian.html)
- [Bootstrap test]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/bootstrap.html)

In case you’re wondering which test is best to use for your AB test, you may want to report to this [article](https://www.linkedin.com/pulse/ab-test-optimisation-earlier-decisions-new-readout-de-b%C3%A9naz%C3%A9/) which compares the accuracy and reliability of each test

<br>

## <b>Time Series tests:</b>
 
Those are tests that you want to use when comparing two periods:

- [Forecasting]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/forecast.html)
- [Volatility]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/volatility.html)
- [Causal Impact]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/causal.html)
