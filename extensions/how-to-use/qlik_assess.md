---
title: How to use Datama Assess (Light) in Qlik
layout: page
scope: Datama/light
keywords:  Qlik Sense Qlik assess get started
---

<br/>

> Using Datama Assess as a Qlik extension is a great way to make your report more insightful with the benefits of both Datama and Qlik.

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
This document provides detailed documentation for the "Datama Assess" plugin, a powerful extension for Qlik. This plugin enhances data analysis capabilities by computing statistical significance of variations;

Below is a short intro video
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/R4JqK1BlsZU?si=qTTPxjNSVsiaOGbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 2. Features

- **Significance calculation:** Assess the statistical significance of KPI variations with customizable level of confidence, using Welch T test method
- **Multiple KPIs monitoring:** Based on your market equation, assess significance within unlimited number of KPIs
- **Remaining sizing:** When not significant, Datama computes the missing volume to reach significance
- **Smart comments:** Title and comments are automatically written, and you can define their structure 

<br/>


## 3. Add the extension into your report


### 3.1. Add the extension to your list of Qlik extensions

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

### 3.2 Add the extension into your app

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


## 4. Get a free trial period

Datama extension in Qlik allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Let any other viewer of your dashboard to see Datama's extension

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan_pbi.html) our different plans.

<!---<center><img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/looker-try.gif" alt="Get a free trial period"/></center>-->

<br>

## 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. Comparison Dimension**: Drag and drop the dimension on which you want to compare in the appropriate field. This would typically be a AB test variant column
<br>

**2. KPIs definition**: Drag and drop the metrics you want to monitor in the appropriate field. Make sure that you add summable metrics: Datama will compute ratios based on the market equation that you define in the extension settings
<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for comparison explanation and define which metric you want to analyse in the market equation pane

**4. Save settings**: If you have a paid licence, settings will be automatically saved along with your dashboard. 

**5. Leave edit mode**: In the Qlik side panel, in the "Datama Setting" tab, untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 
<br/>



## 6. Read your Analysis

To discover more about how to use Datama Assess, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/introduction.html)

<br/>




## 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-assess/settings.html) to get the full view of the extension Settings. 
<br/>

## 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
