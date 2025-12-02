---
title: How to use Datama Explore (Light) in Looker Studio
layout: new-page
scope: Datama/light
keywords: Looker LookerStudio explore get started
---

<br/>

> Using Datama Explore as a Looker Studio extension is a great way to make your report more insightful with the benefits of both.

<br/>

<!-- Here is what you get on this page:
1. [Overview](#1-overview) 
2. [Features](#2-features)
3. [Installation](#3-add-the-extension-into-your-report)
4. [Free trial Period](#4-get-a-free-trial-period)
5. [How to use](#5-getting-started)
6. [Read your analysis](#6-read-your-analysis)
7. [Looker Studio examples](#7-looker-studio-guide)
8. [Settings](#8-advanced-usage)
9. [Support and Resources](#9-support-and-resources)

<br/> -->



# 1. Overview
This document provides detailed documentation for the "Datama Explore" plugin, a powerful data analysis extension for Looker Studio. This plugin details the breakdown of your KPIs and sub KPIs by any dimension in your dataset.

Below is a short intro video
<br/>

- [In LookerStudio]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/looker-studio.html)
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/uM1a8XZrs-w"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>

# 2. Features

- **Dimension and second breakdown:** Datama Explore lets you break down every metric in your dataset across any available dimension. You can also drill down dimension-by-dimension: for instance, start by breaking down product sales by Country in D1. If you want to focus on the UK, you can then introduce a second breakdown dimension in D2—such as Channel, Device, or any other available dimension—to refine the analysis.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/seconddimensions.gif" /></center>

- **Second metric:** Datama Explore also supports comparing two KPIs side by side. Simply add a second metric in M2. For example, you can define M1 = Sessions and M2 = ABV to visualize how the two metrics evolve across your chosen dimensions.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/secondmetric.gif" /></center>

- **Comparison dimension:** When you set a comparison dimension—e.g., Device—and compare two segments such as Tablet vs. Mobile on the Sessions KPI, Datama Explore automatically builds a comparison dimension. This new dimension aggregates the metric values by the selected segments, including Mobile, Tablet, and any other device category.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Explore_Comparisondimension.gif" /></center>

- **KPI change in Absolute value or Percentage:** For comparisons between segments or between time periods, Datama Explore allows you to show the variations either as absolute differences or as percent changes, depending on the format that best fits your analysis.

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Absolute or percentage.png" /></center>

<br/>


# 3. Add the extension into your report

In order to use Datama in your report, you need to start create an account in [app.datama.io](app.datama.io) and go to "My account" then "Extensions" and copy the path from the Looker Studio extension. 

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/helper licence.png" /></center>


And then, follow these steps to add Datama in your Looker Studio report : 

1. Edit your report
2. In the toolbar, click _Community visualizations and components Community visualization icon_
3. Click on "_Explore more_"
4. Select the wanted Datama extension on the list OR choose "Create your own visualization" and put your visualization ID in "Path of manifest file" (by default you can copy paste this path: `gs://app.datama.io/looker-datama-light/helper` )

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/import_explore_light.gif" /></center>

<br>

{% include embed_totw.html num=151 %}

<br>

# 4. Get a free trial period

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

# 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. Comparison Dimension**: Drag and drop the dimension on which you want to compare in the appropriate field. This would typically be a AB test variant column
<br>

**2. KPIs definition**: Drag and drop the metrics you want to monitor in the appropriate field. Make sure that you add summable metrics: Datama will compute ratios based on the market equation that you define in the extension settings

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/dimension_metric.gif" /></center>

<br/>

**3. Custom settings**: Click the “Settings” icon in the top-left corner of Datama’s widget, or configure dimensions, metrics, and secondary breakdowns directly from the display menu located above the chart.

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/second_dimensions_metric.gif" /></center>

**4. [Paid user only] Save settings**: Once you are happy with your settings, in the Looker studio side panel, in the "Style" tab, paste the JSON automatically added to your clipboard in the "Config JSON" field. 
If you’re unsure whether it’s the latest version, click the Save button in the top-right corner to generate the updated JSON, then paste it again into the Config JSON field.
Please note that no customized settings will be saved unless you complete this step.

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/JSONsave.gif" /></center>

**5. [Paid user only] Leave edit mode**: In the Looker Studio side panel, in the "Style" tab, untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/how-to-use/assets/edit_mode.gif" /></center>


# 6. Read your Analysis

To discover more about how to use Datama Assess, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/introduction.html)

<br/>

# 7. Looker Studio Guide

Following this [link](https://lookerstudio.google.com/u/0/reporting/95035caf-3078-418a-9633-47e25a8bf80f/page/p_febrf8vygd) you can access live demo of the extension on a real Looker Studio. Don't hesitate to play with the extension with your own data. This is a free trial version with limited access. 

<br/>


# 8. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html) to get the full view of the extension Settings. 
<br/>

# 9. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
