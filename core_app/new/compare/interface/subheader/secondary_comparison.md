---
title: Secondary Comparison
description: Find here how you can use the Comparison menu of the subheader of the Datama Solutions
layout: page
scope: Datama/saas/compare
keywords: full app compare coc compare of compare secondary comparison
---

<br>

> Find here how you can use **the Dimension Comparison** of the subheader of the Datama solution**

<br>

# What is the secondary comparison:

Previously known as "Compare of Compare", this mode allows you to compare two waterfalls. The secondary waterfall is defined by turning the secondary comparison on (on any available dimensions) and then defining the start and end of your secondary waterfall. 

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/secondary_comparison.png"></center>

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/secondary_comparison_selection.png"></center>

In the background, Datama will then run the same analysis for the two defined start and end points, then display secondary analysis results. Main output is :

*  In the Waterfall « Chart », the secondary waterfall is displayed in the background.
*  In the Comments, the trend between secondary and primary analysis will be described.

<br>

# **When to use it**

The secondary comparison mode is particularly useful when you regularly run the same analysis for different time periods.
We can take the example of this [dataset](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1243203565).

You’re in Week 3 of 2022, and want to compare it to Week 3 2021. Using Datama Compare, you'll get the following result:

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonSimple.png"></center>


Now, the key question that you’re asking when you run this every week (so you ran this also in week 2) is: how does this differ from last week?

This is where you activate Compare of Compare, and add Week 2 YoY analysis as a secondary waterfall (assuming you've also kept the data for week 2 in the source you’re analyzing).


<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonDouble.png"></center>
