---
title: Datama Compare on Tableau Viz
layout: page
scope: Datama/light/compare
keywords: Tableau Viz get started
---

<br/>

> Using Datama Solutions as a Tableau viz extension is a great way to make your report more insightful with the benefits of both Datama and Tableau.

<br/>

Here is what you get on this page:
1. [Overview](#1-overview)
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Settings](#7-advanced-usage)
8. [Get more insights](#8-get-more-insights)
9. [Support and Resources](#9-support-and-resources)

<br/>

## 1. Overview
This document provides detailed documentation for the "Datama Compare - Smart waterfall" Plugin, a powerful extension for Tableau viz. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.

<br/>
Please watch the below video to get a quick view on how this works:
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/h-434yts75c?si=wlGYHJWzJ5hc326z" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 2. Features
- **Waterfall & Tree Analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart Scoring Engine:** Automatically identifies and displays key factors that explain performance variations, simplifying complex data.
- **Mix Effect Analysis:** Assess the specific impact of Mix effect on your performance metrics.
<!--- **Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format. --->
- **Interactive Charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization Options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>


## 3. How to use it

In order to use Datama in your report, you need to add a viz extension using a custom trex file.

Follow these steps to add Datama in your report :

1. On Tableau Desktop, create worksheet 
2. In the “Marks” block, pull down the selector and choose “Add extension”
3. Use the .trex file provided by Datama, or <a id="download-tableau-viz-light-extension" href="#" target="_blank"> download it here</a>
4. Drag and drop columns into each proper mark type [See getting started to learn more](#5-getting-started)
    * Comparison "C" dimension (the dimension on which you want to compare, typically Year, Months, or Variant of AB test for instance)
        * Note: By default, Datama will compare the last 2 values for discrete dimensions or split in two the dates dimensions. Makes sure to leverage Tableau parameters or filters to get the right comparison.
    * Dimensions "D" dimensions (the dimensions that will be used to explain the variation of each KPI)
    * Metrics "M" fields (the metrics that will be used to create your market equation for instance Quantity and Sales to create Sales = Qty x Avg Price)
        * Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.

Please refer to the full documentation to learn more about [source structure]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Tableau_Viz_Extension.gif" /></center>

<br>

## 4. Get a free trial period

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on **"Upgrade now"**
3. Create your Datama account
4. Select your plan and get your licence key
5. Add the licence key to the the extension by clicking on the "Format extension" button in the Marks pannel

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Licence_key_VizExt.png" /></center>


<br>

## 5. Read your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary Step Analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth Exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

## 6. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-compare//settings/settings.html) to get the full view of the extension Settings.

<br/>

## 87 Get more insights

Explore related documentation to understand how to generate insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html)

<br/>

## 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
- 📧 **Email**: Send us an email at [solutions@datama.io](mailto:solutions@datama.io) for any inquiries or support issues.
- 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>