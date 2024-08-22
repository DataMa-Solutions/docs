---
title: Datama Compare on Power BI
layout: page
scope: Datama/light/compare
keywords: Power BI get started powerbi
---

> Using Datama Solutions as a Power BI extension is a great way to make your report more insightful with the benefits of both Datama and Power BI.

<br/>

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_intropage.png" align="center" width="650px" />

<br/>

Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Settings](#7-settings---advanced-usage)
8. [Get more insights](#8-get-more-insights)
9. [Support and resources](#9-support-and-resources)
10. [Release](#10-powerbi-version-history-to-be-updated)


<br/>

## 1. Overview
This document provides detailed documentation for the ["Datama Compare - What's driving my variation"](https://appsource.microsoft.com/fr-fr/product/power-bi-visuals/datama1591255760056.datama-light-compare?tab=Overview) Plugin, a powerful extension for Power BI. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.

Watch this video to properly understand our extension and how to use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/l9AydNNZw5g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br/>

## 2. Features

Here are the main features this extension is providing. These features will be completed step by step with new improvements and functionnalities such as automated comments and title, hypothesis "What if" modelisation...

- **Waterfall & Tree Analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart Scoring Engine:** Automatically identifies and displays key factors that explain performance variations, simplifying complex data.
- **Mix Effect Analysis:** Assess the specific impact of Mix effect on your performance metrics.
<!--- **Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format. --->
- **Interactive Charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization Options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>

## 3. Add the extension into your report

Follow one or the other steps to install the Datama plugin:

1. **Download the Plugin from the Marketplace**:
    1. Navigate to "Insert" > "More Visuals" > "From appSource".
    2. Search for "Compare - Smart Waterfall".
    3. The visual will appear as a new icon in the visualization pane. Click on it to create the visual on the report canvas.

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/AddExtensionPBI.gif" align="center" width="650px" />

<br/>

2. **or Install from the Visualization Pane**:
    1. In the visualization pane, click on the ellipsis ("...") to import a custom visual.
    2. Select "Import a custom visual".
    3. Choose the Datama visual from the list provided.
    4. The visual will now appear as a new icon in the visualization pane. Click on it to create the visual on the report canvas.

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/powerbi_addvisual.PNG" align="center" width="130px" />
<br/>

## 3. Get a free trial period

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. On the "Full Extension" card, click on **"🚀 Try for free"**
4. Get your Trial extension key and paste it into the Power Bi Settings

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan.html) our different plans.

<br>

## 4. Getting Started

Once you've imported the extension, here is how you can use it.

**1. First think at your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: 4 steps are needed to properly set your dataset.
1. **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2. **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
    - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3. **Steps**: Define the steps that correspond to the funnel that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
    - To better define your steps (or metric equation), you can read our dedicated [article](https://datama.io/how-to-build-my-business-metric-relation/).
4. **Explanation dimensions**: Add Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.


<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/ConfigDatasetPBI.gif" align="center" width="650px" />

<br/>

> Below is an example of a funnel with the metrics relation between each steps of the eCommerce funnel. 

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/FunnelKPI.PNG" align="center" width="600px" />

<br/>

## 5. Read Your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary Step Analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth Exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

<br/>

## 7. Settings - Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare//settings/settings.html) to get the full view of the extension Settings. 


<br/>

## 8. Get more insights

Explore related documentation to understand how to generate and read insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/Datama-compare/introduction.html)

<br/>

## 9. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
- 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
- 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>

## 10. Power BI Version History (to be updated)
- **1.0.0.1 (2024-01-20)**: Initial release.
