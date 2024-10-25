---
title: How to use Datama Detect (Light) in Looker Studio
layout: page
scope: Datama/light
keywords: Looker LookerStudio detect get started
---

<br/>

> Using Datama Detect as a Looker Studio extension is a great way to make your report more insightful with the benefits of both.

<br/>

Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Looker Studio examples](#7-looker-studio-guide)
8. [Settings](#8-advanced-usage)
9. [Support and Resources](#9-support-and-resources)

<br/>


## 1. Overview
This document provides detailed documentation for the "Datama Detect" plugin, a powerful extension for Looker Studio. This plugin enhances data analysis capabilities by detecting anomalies in KPI trends.

Below is a short intro video: 
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ulYi-09w_u0?si=U8EBgFGEQaDbh7Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

## 2. Features

- **Identification of Anomalies:** Find anomalies based on historical volatility with customizable level of confidence.
- **Multiple KPIs monitoring:** Based on your market equation, find anomalies within unlimited number of KPIs, and correlate with your North Star metric
- **Customizable focus:** You can set the anomalies to be found only on latest point to get alerted only on most recent changes.
- **KPI interest ranking:** KPIs with biggest anomalies are flagged first.
- **Smart title:** Title is automatically written, and you can define the structure. 

<br/>


## 3. Add the extension into your report

In order to use Datama in your report, you need to start create an account in [app.datama.io](app.datama.io) and go to "My account" then "Extensions" and copy the path from the Looker Studio extension. 

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/CopyPath_lookerstudio.png" /></center>


And then, follow these steps to add Datama in your Looker Studio report : 

1. Edit your report
2. In the toolbar, click _Community visualizations and components Community visualization icon_
3. Click on "_Explore more_"
4. Select the wanted Datama extension on the list OR choose "Create your own visualization" and put your visualization ID in "Path of manifest file" (by default you can copy paste this path: `gs://app.datama.io/looker-datama-light/detect` )

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker.gif" /></center>

<br>

## 4. Get a free trial period

Datama extension in Looker Studio allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Save your settings to find them back when you or others reload the page

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required


<!---<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker-try.gif" alt="Get a free trial period"/></center>-->

<br>

## 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. Anomaly dimension**: Drag and drop the dimension on which you want to detect anomalies in the appropriate field. This would typically be a Date column
<br>

**2. KPIs definition**: Drag and drop the metrics you want to monitor in the appropriate field. Make sure that you add summable metrics: Datama will compute ratios based on the market equation that you define in the extension settings
<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for anomaly detection and define which metric you want to analyse in the market equation pane

**4. [Paid user only] Save settings**: Once you are happy with your settings, in the Looker studio side panel, in the "Style" tab, paste the JSON automatically added to your clipboard in the "Config JSON" field. 

**5. [Paid user only] Leave edit mode**: In the Looker Studio side panel, in the "Style" tab, untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 

## 6. Read your Analysis

To discover more about how to use Datama Detect, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/introduction.html)

<br/>

## 7. Looker Studio Guide

Following this [link](https://lookerstudio.google.com/u/0/reporting/0cdd7495-3b19-4ead-9a28-2f03f3a06835/page/p_febrf8vygd) you can access live demo of the extension on a real Looker Studio. Don't hesitate to play with the extension with your own data. This is a free trial version with limited access. 

<br/>


## 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/settings.html) to get the full view of the extension Settings. 

<br/>


<br/>

## 9. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
