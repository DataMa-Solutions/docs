---
title: How to use Datama Light in Qlik
layout: page
scope: Datama/light
keywords: Looker Qlik get started
---

<br/>

> Using Datama Solutions as a Qlik extension is a great way to make your report more insightful with the benefits of both Datama and Qlik.

<br/>

Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Import Extension](#3-add-the-extension-to-your-list-of-qlik-extensions)
4. [Installation](#4-add-the-extension-into-your-app)
5. [Free trial Period](#5-get-a-free-trial-period)
6. [How to use](#6-getting-started)
7. [Read your analysis](#7-read-your-analysis)
8. [Settings](#8-advanced-usage)
9. [Get more insights](#9-get-more-insights)
10. [Support and Resources](#10-support-and-resources)

<br/>

## 1. Overview
This document provides detailed documentation for the "Datama Compare - Smart waterfall" Plugin, a powerful extension for Qlik. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.

<br/>

## 2. Features
- **Waterfall & Tree Analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart Scoring Engine:** Automatically identifies and displays key factors that explain performance variations, simplifying complex data.
- **Mix Effect Analysis:** Assess the specific impact of Mix effect on your performance metrics.
<!--- **Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format. --->
- **Interactive Charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization Options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>

## 3. Add the extension to your list of Qlik extensions

In order to use Datama in your report, you first need to add a new extension to your Management Console. 

To add the Datama extension to Qlik Sense Online, follow these steps : 

1. Open your _Management console_
2. On the left side panel, click _Extensions_
3. Click on the _Add_ button on the top right of the page
4. Then browse your file and add the extension
5. Finally, click _Upload_

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/qlik_upload_extension.gif" /></center>

<br/>

## 4. Add the extension into your app

Follow these steps to add Datama in your app : 

1. From the _Analytics Services_ page, open your App
2. Click on the sheet you want to use Datama on
3. If you are not in edit mode, click on _Edit sheet_
4. Make sure _Advanced options_ is turned on
5. On the _Assets_ panel on the left, click _Custom objects_
6. Click on _Extension_
7. Drag and drop the Datama extension in your sheet

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/qlik_add_to_app.gif" /></center>

<br>

## 5. Get a free trial period

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. On the "Full Extension" card, click on **"🚀 Try for free"**
3. Create your Datama account
4. Get your Trial extension

<br>

## 6. Getting started

Once you've imported the extension, here is how you can use it.

**1. First think at your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: 4 steps are needed to properly set your dataset.
1.  **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2.  **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
     - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3.  **Steps**: Define the steps that correspond to the funnel that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
     - To better defined your steps (or metric equation), you can read our dedicated [article](https://Datama.fr/2020/03/24/how-to-build-my-business-metric-relation/).
4.  **Explanation dimensions**: Add Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.

<br/>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/qlik_add_dimensions_and_metrics.gif" /></center>

<br/>

> Below is an example of a funnel with the metrics relation between each steps of the eCommerce funnel. 
<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/FunnelKPI.PNG" /></center>

<br/>

## 7. Read your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary Step Analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth Exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

## 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare//settings/settings.html) to get the full view of the extension Settings. 

<br/>

## 9. Get more insights

Explore related documentation to understand how to generate insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare/introduction.html)

<br/>

## 10. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>