---
title: Datama Compare on Tableau Viz
layout: new-page
scope: Datama/light/compare
keywords: Tableau Viz get started Tableau
---

<br>

> Using Datama Solutions as a Tableau Viz extension is a great way to make your report more insightful with the benefits of both Datama and Tableau Viz.

<br/>

<img src="{{site.url}}/{{site.baseurl}}/extensions/assets/gif/PBI_intropage.png" align="center" width="650px" />

<br/>


# 1. Overview
This document provides detailed documentation for the ["Datama Compare - What's driving my variation"](https://exchange.tableau.com/fr-FR/products/1024) Plugin, a Tableauful extension for Tableau as a viz extension. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.

Watch this video to properly understand our extension and how to use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/V-m7iSVn7ko?si=A2EKCiqlm1GGObJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br/>

# 2. Features

Here are the main features this extension is providing. These features will be completed step by step with new improvements and functionnalities such as automated comments and title, hypothesis "What if" modelisation...

- **Waterfall & tree analysis:** Explore detailed waterfall charts, complemented by a performance tree, for in-depth data examination.
- **Smart scoring engine:** Automatically identifies and displays key factors that best explain performance variations, simplifying complex multi factors variations.
- **Mix effect analysis:** Assess the specific impact of Mix effect on your performance metrics.
- **Intelligent Comments:** Convert data analysis into smart, actionable insights, presented in a consolidated and understandable format.
- **Interactive charts:** Engage with your data through zoom, click, filter, and drill-down options for deeper exploration.
- **Customization options:** Tailor your experience with adjustable colors, units, fonts, and chart types.

<br/>

{% include embed_totw.html num=130 %}

<br>


# 3. Add the extension into your report

In order to use Datama in your report, you need to add a viz extension using a custom trex file.

Follow these steps to add Datama in your report :

1. On Tableau Desktop, create worksheet 
2. In the “Marks” block, pull down the selector and choose “Add extension”
3. Use the .trex file provided by Datama, or <a id="download-tableau-viz-light-extension-compare" href="#" target="_blank"> download it here</a>
4. Drag and drop columns into each proper mark type [See getting started to learn more](#5-getting-started)
    * Comparison "C" dimension (the dimension on which you want to compare, typically Year, Months, or Variant of AB test for instance)
        * Note: By default, Datama will compare the last 2 values for discrete dimensions or split in two the dates dimensions. Makes sure to leverage Tableau parameters or filters to get the right comparison.
    * Dimensions "D" dimensions (the dimensions that will be used to explain the variation of each KPI)
    * Metrics "M" fields (the metrics that will be used to create your market equation for instance Quantity and Sales to create Sales = Qty x Avg Price)
        * Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.

Please refer to the full documentation to learn more about [source structure]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Tableau_Viz_Extension.gif" /></center>

<br>


# 4. Get a free trial period

Datama extension in Tableau Viz allows you to benefit from all features.

On top of this, the paid version allows you to 
- Remove Datama Branding (Background logo and free pop in)
- Let any other viewer of your dashboard to see Datama's extension

You can get a free trial period of 7 days allowing you to test the full version of the extension by following these steps :


1. Click on "Trial version" link of Datama footer
2. Click on **"Upgrade now"**
3. Create your Datama account
4. Select your plan and get your licence key
5. Add the licence key to the the extension by clicking on the "Format extension" button in the Marks pannel

<center><img style="width:80%;" src="{{site.url}}/{{site.baseurl}}/extensions/assets/Licence_key_VizExt.png" /></center>


<br>

<br>

# 5. Getting Started

Once you've imported the extension, here is how you can use it.

**1. First think at your use case**: You need first to consider which KPI you want to analyse and what are the steps that lead to the main KPI.

**2. Prepare your dataset**: 4 steps are needed to properly set your dataset.
1. **Main KPI:** Define the main KPI you want to compare (e.g. Revenue, Leads, Margin...)
2. **Comparison Dimensions**: Define on which elements you want to compare your KPI (e.g. Period: Compare Month over Month, Country: Compare one country to the other...)
    - by default, Datama will select the first two elements of your dimension, or split a date range in two.
3. **Steps**: Define the steps that correspond to the funnel that lead to your main KPI. For example (eCommerce funnel, or Finance funnel) [See dataset examples](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=763618483)
    - To better define your steps (or metric equation), you can read our dedicated [article](https://datama.io/how-to-build-my-business-metric-relation/).
4. **Explanation dimensions**: Add Dimensions that will be used to explain the variations of your performance. Each variation will have an interest score to see how important they are to explain your variations.


<br/>

**3. Custom settings**: Click on the "Settings" icon on the top right corner of Datama's widget. You can adjust the methodology for comparison explanation and define which metric you want to analyse in the market equation pane

**4. Leave edit mode**: In the "Format extension" panel (under the marks on the left hand side) untick the "Edit mode" toggle. Dashboard viewers won't see the top header and footer anymore, for a smoother experience. 

<br/>

# 5. Read your analysis

- **Performance overview**: Each blue bar represents the performance of your main KPI, using your chosen comparison dimension. helping you quickly gauge performance across different segments.
- **Intermediary step analysis**: Intermediary steps depict the ratio evolution of your KPI. The impact is quantified in the units of your main KPI, allowing for a consistent measurement of progress or regression.
- By default, the most interesting dimension will be selected for this zoomed step. You can change the selected dimension for this zoomed step by changing right clicking on the boxes of a segment and select the appropriate dimension in the "split by". You can unzoom by clicking on other steps or clicking on the box again.
- **In-Depth exploration**: By interacting with a step—simply click on it—you'll delve into the underlying dimensions that are most influential in explaining your performance variances at each stage of your funnel.

To discover more about how to read a Waterfall, you can read our [dedicated section]({{site.url}}/{{site.baseurl}}/core_app/new/tutorial/first_use.html)

<br/>

# 6. Settings - Advanced Usage

Follow this [link]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/settings.html) to get the full view of the extension Settings. 


<br/>

# 7. Get more insights

Explore related documentation to understand how to generate and read insights in [Datama Compare]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html)

<br/>

# 8. Support and Resources
If you require assistance or have any questions, feel free to reach out. We're here to help!
- 📧 **Email**: Send us an email at [contact@Datama.fr](mailto:contact@Datama.fr) for any inquiries or support issues.
- 🌐 **Contact Form**: Prefer to use a form? Fill out our [online contact form](https://www.Datama.io/lets-talk/), and we'll get back to you promptly.

<br/>

