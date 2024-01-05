---
title: Waterfall
description: The waterfall analysis is the main element of DataMa COMPARE interface. It concatenates all the detailed analysis that appear in other graphs.
layout: page
scope: datama/saas/compare
keywords: full app compare waterfall
---

> The **waterfall analysis** is the main element of DataMa COMPARE interface. It concatenates all the detailed analysis that appear in other graphs.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/Waterfall-768x627.jpg"> </center>


Waterfall is a group of 3 tabs. See below articles for details on each tab:

* [Waterfall Chart](#waterfall-chart)
* [Funnel](#funnel)
* [Dimension Comparison](#dimension-comparison)
    *   [Mix Effect](#mix-effect)
    *   [Performance Effect - Min](#performance-effect-min)
    *   [Performance Effect - Max](#performance-effect-max)





<br>

# <b><u>Waterfall Chart</u></b>

<br>
<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_waterfall.png"> </center>

<br>

* The Steps can be a multiplication of each KPI or can be additive
* Need to distribute co-variance proportionally to abs(gap) to 'make it match'. Co-variance has to be monitored in final output. See [Covariance]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/modeling_components.html) page
* Last step ("End") is considered as a step by itself when doing dimension calculations

To better defined your steps (or metric equation), you can read our dedicated [article](https://datama.fr/2020/03/24/how-to-build-my-business-metric-relation/).

<br>

Shows the impact of each step on your primary metric, from Start to End.

Click on a step to see the details of this step.

By default, the most interesting dimension will be selected for this zoomed step.



You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by".

You can unzoom by clicking on other steps or clicking on the box again.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_zoomedView.jpg"> </center>


# <b><u>Funnel</u></b>

The funnel section shows the % change and absolute values of each KPI.

This funnel gives details on numbers behind waterfall chart. Each step of your conversion funnel is a box, total step is squared in black. Hovering gives you details on numerator and denominator behind the ratio. You can remove the funnel shape in display settings.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_funnel.png"> </center>

<br>

# <b><u>Dimension Comparison</u></b>

<br>

## **Mix effect**

For each step, it shows the total mix effect of each dimension (which has a mix effect).

<i>>eg.The mix effect is the impact on your performance that is coming from an evolution of the distribution of your "denominator" in input. If you have more people in input with a better conversion rate, you will have a positive mix effect due to the type of client coming into your store or your website.</i>

This graph represents the sum of the Mix impact of each dimension at each step of your funnel. The red circle represents the gap your are trying to understand at this step of the funnel, to allow evaluation of mix effect contribution to overall impact.


<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_dimensionComparisonMix.jpg"> </center>

<br>

read more about [Mix effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html#mix-effect)

<br>


## **Performance effect: Min**

A performance effect is an observed difference in a performance. <i>eg.As for example selling different number of car between two week is a performance effect. Having less user in a website is a negative performance effect.</i>

All things being equal the performance effect is the evolution of a performance.

As presented below the performance effect could be represented at each step of your metric relation and for any dimension.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_dimensionComparisonPerfMin.jpg"> </center>

<br>

## **Performance effect: Max**

For each step, within each dimension, it shows the segment having the biggest positive contribution in performance, net of mix effects, in bars.
The width of the bar and the parenthesis ‘(x…)’ in the call outs refers to how fast this performance change is relative to the other segments.

Red dots refer to the total impact of that step (as in ‘Waterfall Chart’), to allow evaluation of segment performance contribution to overall impact.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_dimensionComparisonPerfMax.jpg"> </center>
