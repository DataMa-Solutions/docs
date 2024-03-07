---
title: Compare - Settings
description: Find here how to use the **Settings**
layout: page
scope: datama/saas/compare
keywords: full app compare settings
---

> Find here how to use the **Settings**

<br>

<b>Methodology:<b><br>
  - [Drill Down Hierarchy]({{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/drill_down_hierarchy.html)
  - [Split Mix and Perf](#split-mix-and-perf)
  - [Negative Driver First](#negative-driver-first)

<br>
<b>Auto-generated dimension:<b><br>
  - [Comparable Dates](#comparable-dates)
  - [Combined Dimensions](#combined-dimensions)
  - [Smart dimension](#smart-dimension)

<br>
<b>Text and comment:<b><br>
  - [Analyse Depth](#analyse-depth)
  - [Segment text complement](#segment-text-complement)

<br>
<b>Advanced settings:<b><br>
  - [Aggregation in %](#aggregation-in-)
  - [Covariance roll up](#covariance-roll-up)
  - [Max segment displayed](#max-segment-displayed)
  - [Significance test](#significance-test)
  - [Include 0 for Y axis](#include-0-for-y-axis)

<br>

Here is the panel of the Settings
<br>
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/settings.jpg"/></center>

<br>

The settings is detailed below.

<br>

> **User Preferences**
In order to customize your analysis to your needs, DataMa allows you to save user preferences at Use Case level or at your profile level.
Color palette and default language for example can be modified at both level.

<br>

# <b>Methodology<b>
<br/>
<br/>

## **Split Mix and Perf**

This settings sets how DataMa will act regarding Mix & Performance visualisation.
By default DataMa will automatically choose to split or not the Mix and Performance effect. If the Mix is too small, only Negative and Positive Segments will be displayed.

But you can disable this auto choice, and choose to always split the Mix and the Performance effects or Never split Mix and Perf. If so DataMa will only make a split by Positive and Negative Segments.

<br>

## **Negative Driver First**

By default DataMa automatically choose to display the segment that are following the variation. If your step is increasing, the segments displayed will be the one that drive this increase. On the contrary, when your step variation is going down, datama will choose to display segments that are explaining the decrease.

This could be changed by activating the “Negative Driver First”. Negative Segments will be displayed first in the waterfall whatever the variation. Because you more often will need to improve what’s driving your business down!

<br>

# <b>Auto-generated dimensions<b>
<br>
<br>

## **Comparable Dates**

Comparable Date: When comparing two ranges of dates with same number of days, DataMa now automatically creates a “Comparable_date” dimension which allows to compare similar objects between different time frames (e.g. January, February… December when comparing two years together, or Monday, Tuesday… Sunday when comparing 2 weeks)

<br>

## **Combined Dimensions**

By default <i>Combined Dimensions</i> is activated. DataMa creates an additional Dimension in your analyse which is the combination of all your dimension.

You can't change the selection of the combination, but you can concatenat two columns in your dataset if you want a specific combination.

<br/>

## **Smart dimension**
For each step of the waterfall analysis, the Smart dimension identifies the pair of dimensions which is most relevant in explaining performance variation. It comes in addition to the Combined dimension which crosses all dimensions.

<br>

<b>Example</b>

Consider the scenario in which your performance is entirely explained by a performance decline on mobile users with the Firefox browser. When turning on Smart dimension, DataMa Compare will identify the Device*Browser dimension as the most relevant dimension. However, when leaving the Smart dimension option off, DataMa Compare will attribute the performance variation to either the Device or Mobile dimension.

<br>

<b>Activate Smart Dimension</b>

To activate Smart Dimension, click in Settings and switch on the Smart dimension button. Combinaison of smart dimension will appear in the waterfall only if they are more relevant than an alone dimension.

You can't change the selection of the combination, but you can concatenat two columns in your dataset if you want a specific combination.

**Since it implies a longer computation time, this option is off by default. However, we recommend you turn it on if you have a small set of dimension (less than 10).**

<br>

# <b>Text and comment</b>
<br>
<br>

## **Analyse Depth**

This selection allows to adapt the level of detail available in the contextual help (Comments,…). By default the contextual help is at Medium.
At <i>Max</i> all the available details regarding graphs will be available.

<br>

## **Segment text complement**

Segment text complement allows to decide on what to display behind Segment name in the waterfall labelling.
As a reminder, a segment is a attribute within a dimension of your dataset.
Options for this input are:
- Variation relative to average (e.g. “x2.43”) - this is the default value and allows to spot easily "abnormal" variations way above average (i.e. above 1)
- Percentage Variation (e.g. “-46%”)
- Nothing

<br/>

# <b>Advanced Settings<b>
<br/>
<br/>

## **Aggregation in %**

**Clustering**

Clustering is necessary for dimension analysis
- For discrete dimensions, anything below X% (X=2) of primary numerator is aggregated into “other”
- For continuous dimensions, cuts are made using weighted decision tree methodology, in order to create coherent buckets.

Read [docs related to continuous dimension]({{site.url}}/{{site.baseurl}}/core_app/new/interface/homepage/get_inspired/marketing_continuous.html)

**Level of aggregation**: The level of aggregation that the model is using – e.g. if Level of aggregation is set at X%,  segment within each dimension that represents less than X% of the Primary Numerator (e.g. Revenues) of the main KPI you’re analyzing will be clustered in one « Other » segment. X is set at 2 by default, but you may want to play with this parameter quite a bit because it can change significantly the calculation of mix effects.


1. Click on the settings menu on the header
2. Move the cursor of the aggreation to the right to increase the level of aggregation
3. Close the panel to recaculate the results

Segments are now aggregated at the requested level

<br>

## **Covariance roll up**

By default in DataMa Compare, the covariance between each step of the market equation is distributed on total computation level.

However in some cases, you might want this distribution to be done at a lower level within a given dimension, so that when summing up the impact of each steps for each segment of that dimension at total level, you end up with the exact same total. This is particularly true when you systematically deep dive on each segment of a dimension (e.g. by Country) and also display to your end users the sum of all those segments (e.g. worldwide)

“Covariance roll up” toggle helps you do this calculation pattern, by computing the impact for each segment of a given dimension, and then sums them up at total level.

To use it :<br>
Activate the covariance roll up toggle.<br>
Select the dimension you want for sub-segment distribution of covariance.<br>
See an example below:
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/settings/images/CovarianceRollup.png"/></center>

<br/>

## **Max segment displayed**

Decide how many segments you want to display in every waterfall graph.
By default this parameter is set at '4'.

<br>

## **Significance test**

When owning a license of DataMa Assess (aka DataMa Impact), you can activate the significance test.
Switch on to compute significance of steps variations, using DataMa Assess methodology. Signficative variations will make % appear with a star (*) in the overall waterfall chart.
The test performed is a [Frequentist test]({{site.url}}/{{site.baseurl}}/core_app/new/assess/model/frequentist.html).
<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/images/compare_significanceTest.png"/></center>

<br>

## **Include 0 for Y axis**

By default active, this makes the 0 line appear on the waterfall
When deactivated DataMa will adapt the Axis to your dataset. This help to better display small variations.
