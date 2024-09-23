---
title: How to use Datama Light in Looker Studio
layout: page
scope: Datama/light
keywords: Looker LookerStudio get started
---

<br/>

> Using Datama Solutions as a Looker Studio extension is a great way to make your report more insightful with the benefits of both.

<br/>

Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Looker Studio examples]()
8. [Settings](#7-advanced-usage)
9. [Get more insights](#8-get-more-insights)
10. [Support and Resources](#9-support-and-resources)

<br/>

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Lookerstudio_Wireframe.png" /></center>

## 1. Overview
This document provides detailed documentation for the "Datama Compare - What's driving my variation?" plugin, a powerful extension for Looker Studio. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data waterfall graph.

<br/>

## 2. Features
- **Waterfall & Tree analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart scoring engine:** Automatically identifies and displays key factors that explain performance variations, simplifying complex data.
- **Mix effect analysis:** Assess the specific impact of Mix effect on your performance metrics.
<!--- **Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format. --->
- **Interactive charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>


## 3. Add the extension into your report

In order to use Datama in your report, you need to start create an account in [app.datama.io](app.datama.io) and go to "My account" then "Extensions" and copy the path from the Looker Studio extension. 

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/CopyPath_lookerstudio.png" /></center>


And then, follow these steps to add Datama in your Looker Studio report : 

1. Edit your report
2. In the toolbar, click _Community visualizations and components Community visualization icon_
3. Click on "_Explore more_"
4. Select the wanted Datama extension on the list OR choose "Create your own visualization" and put your visualization ID in "Path of manifest file" (by default you can copy paste this path: `gs://app.datama.io/looker-datama-light` )

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker.gif" /></center>

<br>

## 4. Get a free trial period

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. On the "Full Extension" card, click on **"🚀 Try for free"**
3. Create your Datama account
4. Get your Trial extension

When ready, you can [buy the plan]({{site.url}}/{{site.baseurl}}/core_app/new/interface/account.html) that best fits your needs.

<!---<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker-try.gif" alt="Get a free trial period"/></center>-->

<br>

## 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. First think at your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: 4 steps are needed to properly set your dataset.
1.  **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2.  **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
     - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3.  **Steps**: Define the steps that correspond to the funnel that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
     - To better define your steps (or metric equation), you can read our dedicated [article](https://datama.io/how-to-build-my-business-metric-relation/).
4.  **Explanation dimensions**: Add Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.

<br/>
<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/MetricsDimensionLookerStudio.gif" /></center>

<br/>

> Below is an example of a funnel with the metrics relation between each steps of the eCommerce funnel. 
<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/FunnelKPI.PNG" /></center>

<br/>

## 6. Read your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary step analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

## 7. Looker Studio Guide

Following this [link](https://lookerstudio.google.com/u/0/reporting/0cdd7495-3b19-4ead-9a28-2f03f3a06835/page/p_febrf8vygd) you can access live demo of the extension on a real Looker Studio. Don't hesitate to play with the extension with your own data. This is a free trial version with limited access. 

<br/>


## 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-compare//settings/settings.html) to get the full view of the extension Settings. 

<br/>

## 9. Get more insights

Explore related documentation to understand how to generate insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html)

<br/>

## 10. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
