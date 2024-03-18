---
title: Power BI - Demo extension
description: Using Datama Solutions as a Power BI extension is a great way to make your report more insightful with the benefits of both Datama and Power BI.
layout: page
scope: Datama/saas
keywords: full app integration embed embedded add-on addons addon power bi demo
---


> Welcome to the **Datama extension documentation for Power BI**. Harness the combined strengths of Datama and Power BI to make your reports more insightful.


<br>

# <b>Why I am here?</b>

You're here because you're exploring the Datama extension in Power BI and seeking deeper insights on its usage. If the setup of the demo Power BI dashboard seems unclear, you're in the right place. 

To get a clearer understanding of what the "Compare" extension does, visit this [page]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_introduction.html).  


<br>

# <b>What Use Cases Can the Demo Handle?</b>

We've preloaded several datasets for you, but you're welcome to add your own dataset:
- **Web Analytics**: Funnel conversion analysis highlighting variations between Last Year and This Year.
- **Retail Performance**: Compare the net margin on a month-over-month basis.
- **Media Acquisition**: Assess the effectiveness of campaigns over time including performance of media budget allocation.
- **Product A/B Test**: Evaluate performance variations in the conversion funnel for Variant versus Control in A/B Tests.

<br>

Load your own data if you want to test the extension even further!

![Power BI]({{site.url}}/{{site.baseurl}}/core_app/new/integration/images/PowerBI_DatamaExtension_FirstUseCase.gif)

<br>

# <b>Setting Up the Datama Extension</b>

1. **Select Your Dataset**: Pick from the list on the right a dataset that meets your interests.
2. **Choose Your Metrics**: Drag and drop desired metrics from the dataset into the Datama visual metrics entry. 
    - **Note**: Datama sets up a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among metrics by default. Ensure they're in a "funnel" sequence.

3. **Specify the Dimension**: Drag and drop the dimension of your choice into the visual's dimension field. 
    - The first dimension is the one used for comparison. For example: 
        1. Dates lead Datama to split the period in two.
        2. Lengthy lists use only the last two items.
        3. Adjust your comparison with filters. For complex dimensions, establish a calculated field.
    - The additional dimensions refine our scoring algorithm to pinpoint the most relevant dimension for performance variations in your funnel.
4. **Launch and Learn**: Post configuration, hit "Launch demo" for a 2-minute interactive tour. For a deeper dive, connect with us at solutions@Datama.io.

<br>

# <b>Want More Insight into the Solution?</b>

If "Mix effect", "Performance effect", or "Market Equation" sound intricate, explore our dedicated pages:
- [Mix effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html)
- [Performance effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html)
- [Market Equation]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/metrics_relation.html) (or Metric Relation)
<br>
<br>

Alternatively, below a 2min video intro to the Power BI extension:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Nf4IpBErAUk?si=80AXC4m4RoPmhU3n" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Reach out to us at [solutions@Datama.io](mailto:solutions@Datama.io) for further testing or to inquire about licensing options.
