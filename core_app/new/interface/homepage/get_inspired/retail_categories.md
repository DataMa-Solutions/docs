---
title: Retail Categories
description: This use case focuses on assisting category managers in analyzing category performance using a tailored business equation to evaluate revenue generation.
layout: page
scope: app
---

> Explore the **« Category Performance Analysis** example in our [demo](https://app.datama.io) solution.

<br>

## Overview 

This use case presents a category management performance analysis for different categories, channels, and brands to help businesses understand their sales performance and make informed decisions. By comparing sales data from 2022 and 2023, the business can identify trends, patterns, and areas of improvement to optimize category management and increase revenue.

<br>

## Data source

The data for this use case is provided in the form of a table containing the following columns:

- Period (Year)
- Category
- Channel
- Brand
- ND (Stores)
- Units
- Value.Sales

Take a look at the data:

<center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXYphkUS8WX6Wa4GZp5LBisnEOoqdLyp9darrXuIJPqmsnv_f8Tvhq_0sNX7L2uVfIaJjonTP2j8Fm/pubhtml?gid=1538112802&amp;single=true&amp;widget=true&amp;headers=false#" width="610" height="260"></iframe></center>

You can download the source: [Gsheet](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=1538112802)

<br>

## In DataMa Compare

This use case is specifically designed to help category managers analyze category performance using a customized business equation that assesses revenue generation.


Our objective is to evaluate revenue from one year to another for each category based on the following equation:


<span style="color:red"> Revenue = ND (Nb Stores) x (Units/ NbStores) x (Revenue/ Unit) </span>


This equation calculates revenue by considering the number of distribution points (Nb Stores), the average number of units sold per store, and the revenue generated per unit. It enables category managers to better understand the performance of each category in terms of sales volume and revenue generation.

The equation can be further refined by incorporating other variables, such as promotional activities, seasonality, product placement, and more. This additional information will provide category managers with a comprehensive understanding of category performance, empowering them to make informed decisions for optimizing sales and revenue.

<br>

## Conclusion 

By conducting a category management performance analysis, businesses can gain valuable insights into sales trends and patterns across various categories, channels, and brands. This information can help the business implement targeted strategies to optimize category management and drive revenue growth.


<br>

To gain a deeper understanding of Metric Relation, [read our article]({{site.url}}/{{site.baseurl}}/core-app/header/input/metric-relation).
