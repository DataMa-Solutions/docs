---
title: Assess - Settings
description: Here is the different settings available in DataMa Assess
layout: page
---


> **Here is the different settings available in DataMa Assess**


Here's what you going to find in this chapter:
- [Comparison](#comparison)
- [KPI](#kpi)
- [Confidence interval](#confidence-interval)
- [Test to compute](#test-to-compute)
- [Frequentist Weight](#frequentist-weight)
- [Test side](#test-side)


<br>
<br>

### <b>Comparison</b>

First thing you need to do in DataMa Assess is to define the comparison on which you want to assess the significance. 

Please refer to the [Dimension Comparison]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_comparison.html) section

<br>

### <b>KPI</b>

In DataMa Assess, you can assess the significance of a variation only on one given KPI. Hence, you need to select one of the step of your metric relation for that KPI. By default, DataMa selects the first ratio of your metric relation, but you can change that by clicking on the KPI bar in the subheader and ticking the appropriate metric within your metric relation

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/assess_settingsKPI.png"/></center>


If you want to assess the significance for a KPI that is not explicitly in your metric relation, you can still edit the numerator and denominator manually by clicking on the KPI pill. See specific section for more details on the KPI pill

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/assess_settingsKPI2.png"/></center>

<br>

### <b>Confidence interval</b>

Confidence interval is set in % to decide the level of confidence, or statistical power of your assessment. It ranges from 50% to 99%. 

Depending on the test you are performing, this input can be used in different ways. Please refer to the [Model]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model.html) section for more details

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/assess_settingsConfidenceInterval.png"/></center>

<br>

### <b>Test to compute</b>

You can decide which test  to perform depending by selecting the appropriate model. Please refer to the [Model]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model.html) section for more details

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/images/assess_settingsTestCompute.png"/></center>

<br>


### <b>Frequentist Weight</b>

The Frequentist Weight parameter allows you to select a metric that will multiply the number of occurrences of a given line by that metric. 

For instance, if you’re analyzing the significance of a variation of Average Basket value in an AB test, you would need to have 1 line per transaction, so that DataMa can compute the standard deviation of that Revenues generated per transaction. However, since you have many transactions, you could end up with a too large dataset. To avoid handling large datasets, DataMa allows you to define a “weight” for each line, and in that example you could group transactions by bucket of Revenues. This [dataset](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=1483851606) is a good example of that transformation from this other [dataset](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=1115355265), where “Lines” will be used as denominator for the KPI and “Weight” column as the weightening for Revenue/ Lines ratio. Note that the second data set is significantly smaller than the first one, and gives the same results.



### <b>Test side</b>

In the Settings, you can define to compute the test results with one-sided or two-sided approach for frequentist and bayesian tests. 

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_settingsTestSide.png" alt="assess interface" /></center>


Long story short, for a typical AB test, 1-sided test readouts allows you to be confident that B is higher than A, and not that B is lower than A


[Learn More here](https://www.nipissingu.ca/sites/default/files/One-tailed-Test-or-Two-tailed-Test.pdf):

In Statistics hypothesis testing, we need to judge whether it is a one-tailed or a two-tailed test so that we can find the critical values in tables such as Standard Normal z Distribution Table and t Distribution Table. And then, by comparing test statistic value with the critical value or whether the statistical value falls in the critical region, we make a conclusion either to reject the null hypothesis or to fail to reject the null hypothesis.

How can we tell whether it is a one-tailed or a two-tailed test? It depends on the original claim in the question. A one-tailed test looks for an “increase” or “decrease” in the parameter
whereas a two-tailed test looks for a “change” (could be increase or decrease) in the parameter.
Therefore, if we see words such as “increased, greater, larger, improved and so on”, or
“decreased, less, smaller and so on” in the original claim of a question (>,'<'are used in H1), a one-tail test is applied. If words such as “change, the same, different/difference and so on” are used in the claim of the question (≠is used in H1), a two-tailed test is applied.


<br>


<br>
