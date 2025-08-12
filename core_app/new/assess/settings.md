---
title: Assess - Settings
description: Here is the different settings available in Datama Assess
layout: new-page
scope: Datama/saas/assess
keywords: full app assess settings
---


> **Here is the different settings available in Datama Assess**


Here's what you going to find in this chapter:

<br>

<!-- Statistical approach:<b>
[Test to Compute](#test-to-compute)
- [Confidence Interval](#confidence-interval)
- [Frequentist Weight](#frequentist-weight)
- [Impacted Dimension](#impacted-dimension)
- [Impacted Segment](#impacted-segment)
- [Impact Sizing](#impact-sizing)
- [Test Side](#test-side)

<b>Advanced settings:<b>
- [Aggregation in %](#aggregation-in-)
- [Significance for each Segment](#significance-for-each-segment)
- [Cumulative Significance](#cumulative-significance)

<b>Basic settings:<b><br>
- [Comparison](#comparison)
- [KPI](#kpi) -->


# 1. <b>Statistical approach<b>
<br>

## 1.1. Test to Compute

You can decide which test  to perform depending by selecting the appropriate model. Please refer to the [Model]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model.html) section for more details

Go to the advanced setting:
<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/to_advanced_setting.png"/></center>

Find your model here:
<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_settingsTestCompute.png"/></center>

<br>

## 1.2. Confidence interval

Confidence interval is set in % to decide the level of confidence, or statistical power of your assessment. It ranges from 50% to 99%.

Depending on the test you are performing, this input can be used in different ways. Please refer to the [Model]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model.html) section for more details

<center><img tyle="width:50%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_settingsConfidenceInterval.png"/></center>

<br>

## 1.3.  Frequentist Weight

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/frequentist_model.png"/></center>

The Frequentist Weight parameter allows you to select a metric that will multiply the number of occurrences of a given line by that metric.

For instance, if you’re analyzing the significance of a variation of Average Basket value in an AB test, you would need to have 1 line per transaction, so that Datama can compute the standard deviation of that Revenues generated per transaction. However, since you have many transactions, you could end up with a too large dataset. To avoid handling large datasets, Datama allows you to define a “weight” for each line, and in that example you could group transactions by bucket of Revenues. This [dataset](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=1483851606) is a good example of that transformation from this other [dataset](https://docs.google.com/spreadsheets/d/1VJJ2j5ldrSfvLQatd9SAikIJX_2dhBgDCjkdX_oUgB4/edit#gid=1115355265), where “Lines” will be used as denominator for the KPI and “Weight” column as the weightening for Revenue/ Lines ratio. Note that the second data set is smaller than the first one, and gives the same results.

<br>

## 1.4.  Causal Impact

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/causal_impact.png"/></center>

The Causal Impact test allows for the assessment of the significance of a variation between pre- and post-intervention periods on a test group. To read more about the Causal Impact test, please refer to the relevant literature.

<br>

### 1.4.1. Impacted Dimension

 Impacted dimension refers to the specific metric or variable that you are evaluating to determine the effect of an intervention. This could be any quantifiable measure that you believe is influenced by the intervention, such as sales figures, website traffic, customer satisfaction scores, or any other key performance indicator (KPI).

To conduct this test in datama assess, first define the dimensions impacted by the change. In this context, you will have a "Control" group and a "Variant" group.

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/impacted_dimension_segment.png"/></center>

<br>

### 1.4.2. Impacted Segment

Impacted Segment refers to the specific part of your data or population that is affected by the intervention being studied. This is usually the "Variant" group, which is subject to the change or treatment, as opposed to the "Control" group, which remains unaffected. (see the screenshot above)

<br>

<!-- ## 1.5.  Impact Sizing

Impact Sizing tells you how important is the relationship between two segments in a specific metric.

e.g. Significance between "Test A" and "Test B" can be sized in Revenue or in Purchase, or marge...

<br> -->

<!-- ## 1.6. Test side

In the Settings, you can define to compute the test results with one-sided or two-sided approach for frequentist and bayesian tests.

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/assess_settingsTestSide.png" alt="assess interface" /></center>


Long story short, for a typical AB test, 1-sided test readouts allows you to be confident that B is higher than A, and not that B is lower than A -->


<!-- [Learn More here](https://www.nipissingu.ca/sites/default/files/One-tailed-Test-or-Two-tailed-Test.pdf):

In Statistics hypothesis testing, we need to judge whether it is a one-tailed or a two-tailed test so that we can find the critical values in tables such as Standard Normal z Distribution Table and t Distribution Table. And then, by comparing test statistic value with the critical value or whether the statistical value falls in the critical region, we make a conclusion either to reject the null hypothesis or to fail to reject the null hypothesis.

How can we tell whether it is a one-tailed or a two-tailed test? It depends on the original claim in the question. A one-tailed test looks for an “increase” or “decrease” in the parameter
whereas a two-tailed test looks for a “change” (could be increase or decrease) in the parameter.
Therefore, if we see words such as “increased, greater, larger, improved and so on”, or
“decreased, less, smaller and so on” in the original claim of a question (>,'<'are used in H1), a one-tail test is applied. If words such as “change, the same, different/difference and so on” are used in the claim of the question (≠is used in H1), a two-tailed test is applied.

<br> -->

# 2. <b>Advanced settings<b>
<br>

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/asses_advanced_setting.png" alt="assess interface" /></center>

## 2.1. Aggregation in %

Level of aggregation: The level of aggregation that the model is using

<br>

e.g. if Level of aggregation is set at X%, segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.

<br>

- Click on the drop-down arrow to display the settings menu

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/asses_setting.png" alt="assess interface" /></center>

- Move the cursor to the right to increase the level of aggregation

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/asses_aggre_level.png" alt="assess interface" /></center>

- Segments are now aggregated at the requested level

<br>

## 2.2. Significance for each Segment

This parameter is activated by default.
This allows to calculate the significance for every Dimension, and for every Segment within Dimensions. Deactivate this parameter to accelerate time of calculation.

<br>


## 2.3. Cumulative significance

This parameter is de-activated by default.
Instead of calculating the significance independantly for every segment in a dimension, it will add every segment with the previous one.
This is interesting when you are mesuring the significance for <i>date</i>, it will allows you to measure at which date you reached the significance.

<br>

# 3. <b>Basic settings<b>
<br>

## 3.1. Comparison

First thing you need to do in Datama Assess is to define the comparison on which you want to assess the significance.

Please refer to the [Dimension Comparison]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_comparison.html) section

<br>

## 3.2. KPI

In Datama Assess, you can assess the significance of a variation only on one given KPI. Hence, you need to select one of the step of your metric relation for that KPI. By default, Datama selects the first ratio of your metric relation, but you can change that by clicking on the KPI bar in the subheader and ticking the appropriate metric within your metric relation

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/asses_kpi.png"/></center>


If you want to assess the significance for a KPI that is not explicitly in your metric relation, you can still edit the numerator and denominator manually by clicking on the KPI pill. See specific section for more details on the KPI pill

<center><img tyle="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/assess/images/asses_kpi2.png"/></center>
