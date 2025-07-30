---
title: Datama Compare Concepts
layout: new-page
scope: Datama/light/compare
keywords: light compare concept
---

<br>

> **Learn the key concepts behind Datama to better understand how the solution works**

<br>

This page covers:
1. [What problems we solve](#1-what-problems-we-solve)
2. [Required data types](#2-required-data-types)
3. [Understanding Metric Relations](#3-metric-relations) 
4. [How to interpret waterfall charts](#4-how-to-interpret-waterfall-charts-in-datama)

<br/>

## 1. What problems we solve

The Compare extension helps you identify the exact causes behind performance variations.

Whether you're comparing different time periods or regions, this tool provides clear insights into what's driving changes.

Results are presented through an intuitive waterfall chart visualization.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/compare/images/compare_introduction.png" style="width: 70%;" /></center>

<br>

## 2. Required data types

The analysis requires two main types of business data:

* **Business Metrics** (revenue, sales volume, marketing campaign reach, etc.)
* **Associated Dimensions** (customer segments, product types, countries, vendors, demographics, time periods, etc.)

Specifically, you'll need to configure four key elements:

1. **Main KPI:** The primary metric you want to analyze (e.g., Revenue, Leads, Margin)
2. **Comparison Dimensions:** The elements you want to compare your KPI across (e.g., Month-over-Month, Country-to-Country)
    - By default, Datama selects the first two elements or splits a date range in two
3. **Steps:** The funnel stages leading to your main KPI (e.g., eCommerce or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
    - For help defining your steps (metric equations), read our [dedicated article](https://datama.io/how-to-build-my-business-metric-relation/)
4. **Explanation Dimensions:** Additional dimensions that help explain performance variations, each with an interest score indicating its importance

<br>

## 3. Metric relations

A metric relation describes how different metrics in your data source combine to compute your target KPI.

### Simple Example

Consider a retail scenario where we want to understand Revenue. The main KPI is <span style="color:#00484A">Revenue</span>.

We can break Revenue down as: <span style="color:#00484A">Revenue = Volume * Revenue/Volume</span>. This creates two meaningful performance indicators (PIs):
- <span style="color:#00484A">Volume</span> (number of products sold)
- <span style="color:#00484A">Revenue/Volume</span> (unit price)

This breakdown helps separate effects managed by different teams (sales volume vs. pricing strategy).

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Concept_MarketEquation.PNG" style="width: 100%;" /></center>

<br/>

### Advanced applications

Each PI becomes a "Step" in your waterfall chart. While there's no technical limit to the number of steps, we recommend keeping it under 10 for clarity.

A step represents a ratio between two metrics. For simple metrics like <span style="color:#00484A">Volume</span>, the denominator is 1.

For example, with 5 metrics (<span style="color:#00484A">Metric1, Metric2, ..., Metric5</span>), your KPI equation might look like:

<center><span style="color:#00484A">Metric5 = Metric1 * Metric2/Metric1 * Metric3/Metric2 * Metric4/Metric3 * Metric5/Metric4</span></center>

Don't worry about complexity - Datama Compare lets you zoom into specific parts or aggregate components using the "Skip steps" feature.

<br>

## 4. How to interpret waterfall charts in Datama

The waterfall chart is the core visualization tool in the extension.

> Datama shows how each data variation affects your Key Performance Indicators (KPIs):

Each step shows a performance ratio's variance and its contribution to overall change.

Example interpretation:
- The chart explains a -28.1% Revenue drop from last year (45,549€) to this year (32,747€)
- Key factors include -11.7% in Users and -26.7% in Checkout/Session rates
- The Checkout/Sessions decrease of -26.7% impacts Revenue by 12,298€

<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Structure_Waterfall.PNG" /></center>

<br/>

To dive deeper(demonstration with another use cas but the logic is the same):
- Click any step to see which dimension best explains its variations (In this case, we can see that Canada contributes most nagatively for the performance of transactions in this year compared to last year.)
<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/compare_zoom.gif" /></center>
By default, the waterfall will group segments with smaller effects into the ‘Remaining’ category to simplify the view. However, you can easily examine these categories more closely by simply clicking to expand any bars labeled ‘Remaining’, like below
<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/compare_zoom_remaining.gif" /></center>
- Use "Split by" (right-click) to view interest scores of other dimensions and change the display
<center><img src="{{site.url}}/{{site.baseurl}}/extensions/datama-compare/assets/gif/compare_splitby.gif" /></center>
- Each variation breaks down into mix and performance effects (explained in the next section)

<br>

---

<br>

Please [share your thoughts](https://Datama.io/lets-talk/) with us. Whether you have questions about the solution, your analysis, or the documentation, we're always happy to help and hear your perspective.
