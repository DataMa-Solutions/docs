---
title: Secondary Comparison
description: Find here how you can use the Comparison menu of the subheader of the Datama Solutions
layout: page
scope: Datama/saas/compare
keywords: full app compare coc compare of compare secondary comparison
---

> Find here how you can use **the Dimension Comparison** of the subheader of the Datama solution**

<br>

# **What it is:**

Previously known as Compare of Compare, this mode allows you to compare 2 waterfalls. The secondary waterfall is defined by turning the secondary comparison on (on any available dimensions) and then defining the start of your secondary waterfall and the end of your secondary waterfall. 

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/Compare_secondaryComparison.png"></center>

In the background, Datama will then run the same analysis for the 2 definitions of start and end, and then display the results of the secondary analysis in the background. Main output is :

*  In the Waterfall « Chart », the secondary waterfall is displayed in the background
*  In the Comments, the trend between secondary and primary analysis will be worded

<br>

# **When to use it**
Compare of Compare mode is particularly useful when you regularly run the same analysis for different periods of time.
We can take the example of this [dataset](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1243203565).

You’re in Week 3 2022, and you want to compare to Week 3 2021. Using Datama Compare, you get this:

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonSimple.png"></center>


Now, the real question that you’re asking when you run this every week (so you ran this also in week 2) is: how is that different from last week?

This is where you activate Compare of Compare, and add Week 2 YoY analysis as a secondary waterfall (yes, this assumes you also kept week 2 in the source you’re analyzing).


<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonDouble.png"></center>
