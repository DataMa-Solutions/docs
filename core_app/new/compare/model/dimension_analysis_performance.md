---
title: Performance Effect
description: This chapter will describe both effects to allow you to properly understand the underlying composition of your performance.
layout: new-page
scope: Datama/saas/compare
keywords: full app compare dimension analysis
---

<br>

> Each performance is composed of a [Mix effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html) and a [Performance effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html).

<br>

This page focuses on describing the Performance effect.

<br>

# 1. Performance effect in the WebApp

A performance effect is an observed difference in a performance. As for example selling different number of car between two week is a performance effect. Having less user in a website is a negative performance effect.

<center> <img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/compare_perfEffectWF.png"></center>

All things being equal the performance effect is the evolution of a performance.

As presented below the performance effect could be represented at each step of your metric relation and for any dimension.

<center> <img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/Segment-performance_worst.png"></center>

<br>

# 2.Concept of segment performance

The performance effect is the variation that is dedicated to the dimension’ performance on is own. It is to be distinguished with the variation due to the volume changes (mix effect + covariance) that can’t be attributed to one of the dimension you are following.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/model/images/Segment-performance.jpg"></center>

* For each dimension on each step, flagging segments driving most of the change (worst and best, depending on whether this step is going up or down)
* Important metric to consider is the ratio change relative to average ratio change, to assess how much this is ‘normal’ given traffic on this segment
