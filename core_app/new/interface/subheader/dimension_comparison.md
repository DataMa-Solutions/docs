---
title: Dimension Comparison
description: Find here how you can use the Comparison menu of the subheader of the DataMa Solutions
layout: page
scope: app
---

<br>

> Find here how you can use **the Dimension Comparison** of the subheader of the DataMa solution**

<br>

Defining what you want to compare is the very first step of your analysis in DataMa Compare as in DataMa Assess
In the waterfall you can either compare dates (start period vs end period) or segments of other dimensions

<br>

## **Select Dimension used for comparison**

By default, DataMa selects the first column of your dimensions as the comparison dimension.
You can change the comparison dimension by two manners:
- Click on the comparison icon on the top left corner and then click on the balance icon on the dimension you want to use for comparison
<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison.png"/></center>

- Click on the filter section and then on a pill of the dimension you want to use for comparison, and then toggle the “Compare” button

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison2.png"/></center>

<br>

## **Select segments for comparison**

By default, DataMa selects values for comparison as follows:
- If the comparison dimension is a date, then DataMa splits the total range of time in two periods of equal size and use the first part as definition for Starting point of your comparison, and the second part of the time range as the end point of your comparison
- If the comparison dimension is anything other than a date (string or int), then DataMa uses the last value (in alphabetical order) as the end point and the pre-last value as the starting point.
You can choose what you want to Compare by selecting the appropriate value for the end point (on the top part) and the starting point of your comparison (on the bottom part)

Here is an example for a date:
<left><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison_date.png"/></left>

Here is an example for a string:
<left><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/images/comparison_text.png"/></left>

[Dimension Helper]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_helper.html) chart can help you to understand what you want to compare, in case you don’t know 😅
