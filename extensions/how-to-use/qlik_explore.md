---
title: How to use Datama Explore (Light) in Qlik
layout: new-page
scope: Datama/light
keywords:  Qlik Sense Qlik explore get started
---

<br/>

> Using Datama Explore as a Qlik extension is a great way to make your report more insightful with the benefits of both Datama and Qlik.

<br/>

# 1. Overview
This document provides detailed documentation for the "Datama " plugin, a powerful extension for Qlik. This plugin enhances data analysis capabilities by computing statistical significance of variations;

Below is a short intro video
<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TdI9UqVpGqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# 2. Features

- **Significance calculation:** Explore the statistical significance of KPI variations with customizable level of confidence, using Welch T test method
- **1. Dimension and second breakdown:** Datama Explore lets you break down every metric in your dataset across any available dimension. You can also drill down dimension-by-dimension: for instance, start by breaking down product sales by Country in D1. If you want to focus on the UK, you can then introduce a second breakdown dimension in D2—such as Channel, Device, or any other available dimension—to refine the analysis.
<br>

- **2. Second metric:** Datama Explore also supports comparing two KPIs side by side. Simply add a second metric in M2. For example, you can define M1 = Sessions and M2 = ABV to visualize how the two metrics evolve across your chosen dimensions.
<br/>

- **3. Comparison dimension:** When you set a comparison dimension—e.g., Device—and compare two segments such as Tablet vs. Mobile on the Sessions KPI, Datama Explore automatically builds a comparison dimension. This new dimension aggregates the metric values by the selected segments, including Mobile, Tablet, and any other device category.

- **4. KPI change in Absolute value or Percentage:** For comparisons between segments or between time periods, Datama Explore allows you to show the variations either as absolute differences or as percent changes, depending on the format that best fits your analysis. 

<br/>


# 3. Add the extension into your report


## 3.1. Add the extension to your list of Qlik extensions

In order to use Datama in your report, you first need to add a new extension to your Management Console. 

To add the Datama extension to Qlik Sense Online, follow these steps : 

1. Open your _Management console_
2. On the left side panel, click _Extensions_
3. Click on the _Add_ button on the top right of the page
4. Then browse your file and add the extension
5. Finally, click _Upload_

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Add_explore_qlik.gif" /></center>

<br/>

## 3.2 Add the extension into your app

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


# 4. Get a free trial period

Datama extension in Qlik allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Let any other viewer of your dashboard to see Datama's extension

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan_qlik_explore.html) our different plans.

<br>

# 5. Getting started

Once you've imported the extension, you can select and drop dimensions and metrics you want into left setting panel as below:

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Explore_Qlik_Intro_Large.gif" /></center>

You can also make full use of features by setting up as below Datama Explore:

- **Dimension and second breakdown:** Datama Explore lets you break down every metric in your dataset across any available dimension. You can also drill down dimension-by-dimension: for instance, start by breaking down product sales by Country in D1. If you want to focus on the UK, you can then introduce a second breakdown dimension in D2—such as Channel, Device, or any other available dimension—to refine the analysis.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/seconddimensions.gif" /></center>

- **Second metric:** Datama Explore also supports comparing two KPIs side by side. Simply add a second metric in M2. For example, you can define M1 = Sessions and M2 = ABV to visualize how the two metrics evolve across your chosen dimensions.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/secondmetric.gif" /></center>

- **Comparison dimension:** When you set a comparison dimension—e.g., Device—and compare two segments such as Tablet vs. Mobile on the Sessions KPI, Datama Explore automatically builds a comparison dimension. This new dimension aggregates the metric values by the selected segments, including Mobile, Tablet, and any other device category.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Explore_Comparisondimension.gif" /></center>

- **KPI change in Absolute value or Percentage:** For comparisons between segments or between time periods, Datama Explore allows you to show the variations either as absolute differences or as percent changes, depending on the format that best fits your analysis.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Absolute or percentage.png" /></center>


<br/>


# 6. Read your Analysis

To discover more about how to use Datama Explore, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/introduction.html)

<br/>

# 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html) to get the full view of the extension Settings. 

<br/>

# 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
