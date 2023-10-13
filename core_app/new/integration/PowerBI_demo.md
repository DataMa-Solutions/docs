---
title: PowerBI - Demo extension
description: Using DataMa Solutions as a PowerBI extension is a great way to make your tableau report more insightful with the benefits of both DataMa and PowerBi.
layout: page
---


> Welcome in the documentation of **Datama extension for PowerBI**. This is a great way to make your tableau report more insightful with the benefits of both DataMa and PowerBI.

<br>

# <b>Why I am here?</b>

You are here because you are trying the datama extension in PowerBi and you want to know more about how to use it. 
You have downloaded our demo powerBi dashboard and the set up of a use case sound a big fuzzy for you.

You can read this [page]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_introduction.html), if you better want to understand what the "Compare" extension is doing.  

<br>

# <b>What can of Use case can I do with this demo?</b>

We already have uploaded some datasets for you but you can add some more if you need.
Here a the purpose of the dataset : 
- **Web Analytics**: funnel conversion analysis - Performance variation between Last Year and This Year.
- **Retail Performance**: this dataset allow to compare the net margin on a month-over-month basis.
- **Media Acquisition**: This use case focuses on analyzing media acquisition, specifically examining the effectiveness of various campaigns with respect to their allocated budget
- **Product AB Test**: this dataset allows to compare difference of performance within a conversion funnel of Variant and Control of an A/B Test

<br>

Don't hesitate to load your own demo to test the extension!

![PowerBI]({{site.url}}/{{site.baseurl}}/core_app/new/integration/images/PowerBI_DatamaExtension_FirstUseCase.gif)

<br>

# <b>How to set up the DataMa extension?</b>

1. Select Your Dataset: Choose a dataset from the list on the right that aligns with your interests.
2. Choose Your Metrics: Drag & drop one or multiple metrics from the chosen dataset into the metrics entry of Datama visual.

Note: By default, Datama will create a [relation]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html) (product of ratio) among the metrics. Ensure they're arranged in the order of a "funnel".

3. Specify the Dimension: Drag & drop your desired dimension into the dimension field of the visual. 
    1. The first dimension determines how the waterfall is split. For instance: 
        1. If it's a date, Datama will bisect the period.
        2. If it's a lengthy list, only the initial two elements are utilized.
        3. Filters can be applied to adapt your comparison. For advanced dimensions, create a calculated field.
    2. The rest of dimensions in the field aid our scoring algorithm, determining which one most accurately explains performance variations at each step of your funnel.
4. Launch and Learn: Once you've configured your settings, click on "Launch demo" for a 2-minute interactive demonstration. If you want to know more, reach out for a more comprehensive experience: solutions@datama.io

<br>

# <b>To know more about the solution?</b>

If Mix effect, Performance effect or Market Equation seems a bit complicated for you, don't hesitate to read our dedicated page:
- [Mix effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html)
- [Performance effect]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_performance.html)
- [Market Equation]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/metrics_relation.html) (or Metric Relation)
<br>
<br>

Contact us (solutions@datama.io) if you further want to test the solution or if you want to buy a licence of the extension.
