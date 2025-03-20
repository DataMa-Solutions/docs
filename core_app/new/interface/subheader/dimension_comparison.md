---
title: Comparison
description: Find here how you can use the Comparison menu of the subheader of the Datama Solutions
layout: new-page
scope: Datama/saas
keywords: full app subheader sub header settings dimension comparison
---

<br>

> Find here how you can use **the Dimension Comparison** of the subheader of the Datama solution

<br>

Defining what you want to compare is the very first step of your analysis in Datama Compare. In the waterfall you can either compare dates (start period vs end period) or segments of other dimensions. This menu will also allo to compare a comparison. 

<br>

# 1. Start/ End Comparison

<br>

## 1.1 Select Dimension used for comparison

By default, Datama selects the first column of your dataset as the comparison dimension.

You can change the comparison dimension by:
- Click on the comparison icon on the top left corner and then click on the gear icon to access the dimension you want to use for comparison
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison.png"/></center>

<br>

- Click the drop-down list do choose the dimension you want to compare.

- And select the dimension you want to compare on : 

<centre><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/dimension_selection.png"/></centre>

<br>

- Then select your segments for each of your comparisons.

<centre><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/segment_selection.png"/></centre>

<br>

- The graph will appear with in the subheader the selected comparison.

<centre><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/result.png"/></centre>

<br>

<br>



[Dimension Helper]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_helper.html) chart can also help you to understand what you want to compare, in case you don’t know 😅

<!-- **Note:** you can also activate/deactivate  “Open comparison helper by default” and choose the view that suits you best

<centre><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison_helper.png"/></centre> -->

<br>

# 2. Secondary comparison

Previously known as "Compare of Compare", this mode allows you to compare two waterfalls. The secondary waterfall is defined by turning the secondary comparison on (on any available dimensions) and then defining the start and end of your secondary waterfall. 

<center> <img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/secondary_comparison.png"></center>

<center> <img style="width:70%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/secondary_comparison_selection.png"></center>

In the background, Datama will then run the same analysis for the two defined start and end points, then display secondary analysis results. Main output is :

*  In the Waterfall « Chart », the secondary waterfall is displayed in the background.
*  In the Comments, the trend between secondary and primary analysis will be described.

<br>

## 2.1 When to use it

The secondary comparison mode is particularly useful when you regularly run the same analysis for different time periods.
We can take the example of this [dataset](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1243203565).

You’re in Week 3 of 2022, and want to compare it to Week 3 2021. Using Datama Compare, you'll get the following result:

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonSimple.png"></center>


Now, the key question that you’re asking when you run this every week (so you ran this also in week 2) is: how does this differ from last week?

This is where you activate Compare of Compare, and add Week 2 YoY analysis as a secondary waterfall (assuming you've also kept the data for week 2 in the source you’re analyzing).


<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/images/compare_2ComparisonDouble.png"></center>

## 2.2 Specific display

The second graph can either be displayed in overlay (by default), below or right close to the first comparison. To change the display click right > Display > secondary comparison > Right / below or overlay.

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/interface/subheader/images/secondarycomparison_layer-right.png"></center>


