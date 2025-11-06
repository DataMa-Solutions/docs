---
title: Power BI - marketplace extension
description: Using Datama Solutions as a Power BI extension is a great way to make your report more insightful with the benefits of both Datama and Power BI.
layout: new-page
scope: Datama/saas
keywords: full app integration embed embedded add-on addons addon power bi demo
---

<br>

> Welcome to the **Datama extension documentation for Power BI**. Harness the combined strengths of Datama and Power BI to make your reports more insightful.


<br>

# 1. Why I am here?

This document provides detailed documentation for the ["Datama Compare - What's driving my variation"](https://appsource.microsoft.com/fr-fr/product/power-bi-visuals/datama1591255760056.datama-light-compare?tab=Overview) Plugin, a powerful extension for Power BI. This plugin enhances data analysis capabilities by explaining performance variations with easy to understand data visualization graph.


To get a clearer understanding of the concept of this "Compare" extension does, visit this [page]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_introduction.html).  

<br>

Watch this video to properly understand our extension and how to use it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/brh3JdXCHkk?si=GxDUV8bCfm9tW8YX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

# 2. What use cases can the Demo handle?

We've preloaded several datasets for you, but you're welcome to add your own dataset:
- **Web Analytics**: Funnel conversion analysis highlighting variations between Last Year and This Year.
- **Retail Performance**: Compare the net margin on a month-over-month basis.
- **Media Acquisition**: Assess the effectiveness of campaigns over time including performance of media budget allocation.
- **Product A/B Test**: Evaluate performance variations in the conversion funnel for Variant versus Control in A/B Tests.

<br>

Load your own data if you want to test the extension even further!

![Power BI]({{site.url}}/{{site.baseurl}}/core_app/new/integration/images/PowerBI_DatamaExtension_FirstUseCase.gif)

<br>

# 3. Setting up the Datama extension

1. **[Download the extension](https://storage.googleapis.com/app.datama.io/powerbi/datama_latest.pbiviz)**: Download the latest Datama PowerBI extension
2. **Select Your Dataset**: Pick from the list on the right a dataset that meets your interests.
3. **Choose Your Metrics**: Drag and drop desired metrics from the dataset into the Datama visual metrics entry. 
    - **Note**: Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.

4. **Specify the Dimension**: Drag and drop the dimension of your choice into the visual's dimension field. 
    - The first dimension is the one used for comparison. For example: 
        1. Dates lead Datama to split the period in two.
        2. Lengthy lists use only the last two items.
        3. Adjust your comparison with filters. For complex dimensions, establish a calculated field.
    - The additional dimensions refine our scoring algorithm to pinpoint the most relevant dimension for performance variations in your funnel.
5. **Launch and Learn**: Post configuration, hit "Launch demo" for a 2-minute interactive tour. For a deeper dive, connect with us at solutions@datama.io.

<br>

# 4. Want more insight into the solution?

If "Mix effect", "Performance effect", or "Market Equation" sound intricate, explore our dedicated pages:
- [Mix effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html)
- [Performance effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html)
- [Market Equation]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/metrics_relation.html) (or Metric Relation)
<br>
<br>


<div class="info-box">

Alternatively, below a 2min video intro to the Power BI extension:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nf4IpBErAUk?si=80AXC4m4RoPmhU3n" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>


Reach out to us at [solutions@Datama.io](mailto:solutions@Datama.io) for further testing or to inquire about licensing options.
