---
title: How to use Datama Explore (Light) in Tableau Viz
layout: new-page
scope: Datama/light
keywords: Tableau Viz Explore get started
---

<br/>

> Using Datama Explore as a Tableau Viz extension is a great way to make your report more insightful with the benefits of both.

<br/>


# 1. Overview
This document provides detailed documentation for the "Datama Explore" plugin, a powerful extension for Tableau Viz. This plugin enhances data analysis capabilities by breaking down any KPI or sub KPI by any dimension in your dataset.

Below is a short intro video

<br/>

<iframe width="560" height="315" src="https://www.youtube.com/embed/EfRBt4urlEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

# 2. Features

- **1. Dimension and second breakdown:** Datama Explore lets you break down every metric in your dataset across any available dimension. You can also drill down dimension-by-dimension: for instance, start by breaking down product sales by Country in D1. If you want to focus on the UK, you can then introduce a second breakdown dimension in D2—such as Channel, Device, or any other available dimension—to refine the analysis.
<br>

- **2. Second metric:** Datama Explore also supports comparing two KPIs side by side. Simply add a second metric in M2. For example, you can define M1 = Sessions and M2 = ABV to visualize how the two metrics evolve across your chosen dimensions.
<br/>

- **3. Comparison dimension:** When you set a comparison dimension—e.g., Device—and compare two segments such as Tablet vs. Mobile on the Sessions KPI, Datama Explore automatically builds a comparison dimension. This new dimension aggregates the metric values by the selected segments, including Mobile, Tablet, and any other device category.

- **4. KPI change in Absolute value or Percentage:** For comparisons between segments or between time periods, Datama Explore allows you to show the variations either as absolute differences or as percent changes, depending on the format that best fits your analysis. 

<br/>


# 3. Add the extension into your report

In order to use Datama in your report, you need to add a viz extension using a custom trex file.

Follow these steps to add Datama in your report :

1. On Tableau Desktop, create worksheet 
2. In the “Marks” block, pull down the selector and choose “Add extension”
3. Use the .trex file provided by Datama, or <a id="download-tableau-viz-light-extension-explore" href="#" target="_blank"> download it here</a>
4. Drag and drop columns into each proper mark type [See getting started to learn more](#5-getting-started)
    * Metrics that you want to break down and to create your market equation, for instance the sales revenue.
    * Dimensions on which you want to split your KPI(Sales revenue), for example, country.
    * Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence

Please refer to the full documentation to learn more about [source structure]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

# 4. Get a free trial period

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

See [here]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/pricing_plan_tableau_explore.html) our different plans.

<br>

# 5. Getting started

Once you've imported the extension, you can select and drop dimensions and metrics you want into left setting panel as below:

<center><img style="width:60%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/Explore_Tableau_Intro_Large.gif" /></center>

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

To discover more about how to use Datama Detect, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/introduction.html)

<br/>

# 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-explore/settings.html) to get the full view of the extension Settings. 

<br/>

# 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>
