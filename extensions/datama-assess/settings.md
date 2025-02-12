---
title: Settings of Datama Assess
description: Discover all settings exposed by Datama Assess to improve your analysis
scope: Datama/light/Assess
keywords: light compare settings assess extension plugin
---

<br>

> Discover all settings exposed by Datama Assess extension to improve your analysis

<br>

<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/assess_settings.png"/></center>

<br>

_Find below how you can customize Datama Assess using the General settings_

- [1. General settings](#1-general-settings)
    - 1.1. [Comparison](#11-comparison)
    - 1.2. [Modeling](#12-Modeling)(#14-above-or-below-confidence-interval)
- [2. Metrics Relation](#2-metrics-relation)
- [3. Preferences](#3-preferences)

<br>

# 1. General Settings

### 1.1. Comparison

> This part allow to choose what you want to compare, you can also add others comparison to go deeper

Defining what you want to compare is the very first step of your analysis in Datama Compare as in Datama Assess In the waterfall you can either compare dates (start period vs end period) or segments of other dimensions
1. First you need to select the dimension you want to choose for comparison, and the 2nd step is to select 2 segment within the dimension. For exemple (select Test Variant as a Dimension and Variation A and Variation B as the 2 segments)
2. You can refine the selection with Advanced settings by filtering your selection


<br>

### 1.2. Modeling

#### Test to do:

For now Datama allows only Frequentist t test approach - see [concept]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/concept.html)  to learn more.

Since this assumes that observed variable are Bernoulli variables, this means that observed average ratios should always be between 0 and 1. 
<br>

#### Level of confidence

Confidence interval is set in % to decide the level of confidence, or statistical power of your assessment. It ranges from 50% to 99%.

Depending on the test you are performing, this input can be used in different ways. Please refer to the [concept]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/concept.html) section for more details

#### Test Side:

Long story short, for a typical AB test, 1-sided test readouts allows you to be confident that B is higher than A, and not that B is lower than A

[Learn More here](https://www.nipissingu.ca/sites/default/files/One-tailed-Test-or-Two-tailed-Test.pdf):

In Statistics hypothesis testing, we need to judge whether it is a one-tailed or a two-tailed test so that we can find the critical values in tables such as Standard Normal z Distribution Table and t Distribution Table. And then, by comparing test statistic value with the critical value or whether the statistical value falls in the critical region, we make a conclusion either to reject the null hypothesis or to fail to reject the null hypothesis.

How can we tell whether it is a one-tailed or a two-tailed test? It depends on the original claim in the question. A one-tailed test looks for an “increase” or “decrease” in the parameter
whereas a two-tailed test looks for a “change” (could be increase or decrease) in the parameter.
Therefore, if we see words such as “increased, greater, larger, improved and so on”, or
“decreased, less, smaller and so on” in the original claim of a question (>,'<'are used in H1), a one-tail test is applied. If words such as “change, the same, different/difference and so on” are used in the claim of the question (≠is used in H1), a two-tailed test is applied.


<br>



## 2. Metrics Relation

This part allow you to edit your KPIs and market equation, when you want to fit your analysis with your business.

Using metrics relation allows you to change your market equation, add a unit, rename your step or even indicate a threshold, exclude or focus on a dimension. Metric relation describes the equation between metrics of your source, in order to compute the KPI you want to explain.

- By default, Datama creates a product of ratios (prod) with all the steps defined in the metrics relation. However, you can change this to “sum” to add each step, e.g., Revenue = Revenue_France/1 + Revenue_UK/1 + Revenue_US/1.
- When changing the Unit to '%', in addition to change the unit, it also multiplies your figures by 100.


<center><img style="align: right; width: 600px;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/metrics_relation.PNG"/></center>

<!-- ![img]({{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_MetricsRelation.PNG){: style="align: center; width: 500px;"} -->


<br/>

## 3. Preferences

These settings allow you to customize the application to fit with your company, you can also change the analysis language !

### Language

 For now only French and English are available, let's us now if you want a new language to be added. 


<center><img style="width: 70%;" src="{{site.url}}/{{site.baseurl}}/extensions/datama-assess/assets/preferences_assess.png"/></center>

<br/>

### Fonts & Size

- **Family**: Choose amongst the Font the one that best match your current dashboard
- **Text Size**: Ajdust the visibility of your waterfall by choosin the best size of the text. 

<br>


---

<br/>

Get more information about extension [interface]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/structure.html) or [therotical concept]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/concept.html) of Datama.

<br>
