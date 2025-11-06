---
title: How to use Datama Light in Qlik
layout: new-page
scope: Datama/light
keywords: Qlik Sense Qlik get started
---

<br/>

> Using Datama Solutions as a Qlik extension is a great way to make your report more insightful with the benefits of both Datama and Qlik.

<br/>


# 1. Overview
This document provides detailed documentation for the "Datama Compare - Smart waterfall" Plugin, a powerful extension for Qlik. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.

Watch this video to properly understand our extension and how to use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q6xmeIALMQc?si=tyYrWaKoTqObeYun" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br/>

# 2. Features
- **Waterfall & Tree Analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart Scoring Engine:** Automatically identifies and displays key factors that explain performance variations, simplifying complex data.
- **Mix Effect Analysis:** Assess the specific impact of Mix effect on your performance metrics.
**Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format. 
- **Interactive Charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization Options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>

{% include embed_totw.html num=130 %}

<br>

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

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/qlik_upload_extension.gif" /></center>

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

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :

1. Click on "Trial version" link of Datama footer
2. Click on "Upgrade"
3. Create your Datama account
4. Get your Trial extension with no engagement, and no credit card required

<br>

# 5. Getting started

Once you've imported the extension, here is how you can use it.

**1. First think at your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: 4 steps are needed to properly set your dataset.
1.  **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2.  **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
     - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3.  **Steps**: Define the steps that correspond to the funnel that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
     - To better defined your steps (or metric equation), you can read our dedicated [article](https://datama.io/how-to-build-my-business-metric-relation/).
4.  **Explanation dimensions**: Add Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.

<br/>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/qlik_add_dimensions_and_metrics.gif" /></center>

<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for comparison explanation and define which metric you want to analyse in the market equation pane

**4. Save settings**: If you have a paid licence, settings will be automatically saved along with your dashboard. O

**5. Leave edit mode**: In the Qlik side panel, in the "Datama Setting" tab, untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 

<br/>

# 6. Read your Analysis

- **Performance Overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary Step Analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth Exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

# 7. Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-compare//settings.html) to get the full view of the extension Settings. 

<br/>

# 8. Get more insights

Explore related documentation to understand how to generate insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html)

<br/>

# 9. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
    - 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
    - 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>