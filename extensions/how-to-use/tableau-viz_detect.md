---
title: How to use Datama Detect (Light) in Tableau Viz
layout: page
scope: Datama/light
keywords: Tableau Viz PowerBI detect get started
---

<br/>

> Using Datama Detect as a Tableau Viz extension is a great way to make your report more insightful with the benefits of both.

<br/>

Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Settings](#7-advanced-usage)
8. [Support and Resources](#8-support-and-resources)

<br/>


## 1. Overview
This document provides detailed documentation for the "Datama Detect" plugin, a powerful extension for Tableau Viz. This plugin enhances data analysis capabilities by detecting anomalies in KPI trends.

Below is a short intro video
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/F1upvKyZQxE?si=1_07ffSyA-aDcemg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<br/>

## 2. Features

- **Identification of Anomalies:** Find anomalies based on historical volatility with customizable level of confidence.
- **Multiple KPIs monitoring:** Based on your market equation, find anomalies within unlimited number of KPIs, and correlate with your North Star metric
- **Customizable focus:** You can set the anomalies to be found only on latest point to get alerted only on most recent changes.
- **KPI interest ranking:** KPIs with biggest anomalies are flagged first.
- **Smart title:** Title is automatically written, and you can define the structure. 

<br/>


## 3. Add the extension into your report

In order to use Datama in your report, you need to add a viz extension using a custom trex file.

Follow these steps to add Datama in your report :

1. On Tableau Desktop, create worksheet 
2. In the “Marks” block, pull down the selector and choose “Add extension”
3. Use the .trex file provided by Datama, or <a id="download-tableau-viz-light-extension-detect" href="#" target="_blank"> download it here</a>
4. Drag and drop columns into each proper mark type [See getting started to learn more](#5-getting-started)
    * Detection "D" dimension (the dimension on which you want to detect anomalies, typically Date)
    * Metrics "M" fields (the metrics that will be used to create your market equation for instance Quantity and Sales to create Sales = Qty x Avg Price)
        * Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence

Please refer to the full documentation to learn more about [source structure]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

## 4. Get a free trial period

Datama extension in Tableau Viz allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Let any other viewer of your dashboard to see Datama's extension

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required
5. Add the licence key to the the extension by clicking on the "Format extension" button in the Marks pannel

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan_pbi.html) our different plans.

<br>

## 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. Anomaly dimension**: Drag and drop the dimension on which you want to detect anomalies in the appropriate field. This would typically be a Date column
<br>

**2. KPIs definition**: Drag and drop the metrics you want to monitor in the appropriate field. Make sure that you add summable metrics: Datama will compute ratios based on the market equation that you define in the extension settings
<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for anomaly detection and define which metric you want to analyse in the market equation pane

**4. Leave edit mode**: In the "Format extension" panel (under the marks on the left hand side) untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 



## 6. Read your Analysis

To discover more about how to use Datama Detect, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/introduction.html)

<br/>


<br/>


## 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings.html) to get the full view of the extension Settings. 

<br/>


<br/>

## 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
