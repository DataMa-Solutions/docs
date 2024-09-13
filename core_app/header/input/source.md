---
title: Source
description: This section identify the type of data you should load
layout: page
scope: shiny
---

> This section identify the **type of data** you should load

Datama  source is basically a flat table.

As in other well known analytics software (e.g. Tableau), we differentiate Metrics and Dimensions. Think Metrics & Dimensions as columns of a spreadsheet.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/header/input/images/SourceDimensionMetrics.jpg"/></center>


Datama [demo](http://solutions.Datama.fr/) has a series of saved versions using different sources that you can **get inspired from looking at this** [Google Sheet](https://docs.google.com/spreadsheets/d/1bNEeqm5CfpPmYPr_t4ff1xcJkSBKoVvwJd4vKB0sDzs/edit#gid=0).

As for example:

<center> <iframe width=610 height=260 src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTXRV_yX735skN1XO80vxldchFr5tii0E1mUgk0vdkaZaOGDxHY9yVZEk0wXb1zag0OVIQzxRBm1zuw/pubhtml?gid=1408263987&amp;single=true&amp;widget=true&amp;headers=false"></iframe> </center>


## Metrics

Metrics are always **numeric values**. As an input, you need to put only metrics that can be **aggregated** (i.e. summed). To simplify, this basically means that it has a business sense to sum this Metric. Eg. « Revenues » is something you can sum. However, a ratio like « Revenues/ Purchase » is something that doesn’t have much business sense to sum.

To decide which metrics you want in your source, everything depends on your use case. However, it’s safe to say that you want at least the metrics that you need to compute the **KPI** you want to explain. Then you would need all the metrics that are required to compute your « market equation ». Please report to [Metric Relation]({{site.url}}/{{site.baseurl}}/core_app/header/input/metric_relation.md) section for more details.

For more information, you can also read our [article](https://datama.io/how-to-build-my-business-metric-relation/) about metric relation.

## Dimensions

Dimensions can be either dates, characters, or even numeric values.

To decide which dimensions you want in your source, you may want to think about **which dimension has an impact on your business**, but also which dimension you’re able to collect, and cross your metrics on. At any rate, you certainly want to have one dimension that is the dimension you want to compare on. E.g. if you want to compare two periods, you want a ‘Period’ dimension. If you want to compare two business units, you certainly want a ‘BU’ dimension.

If a dimension is continuous (i.e. numeric) and has more than 6 possible values, it will get discrete by a partition algorithm, in order to be able to compute mix effects & performance. See [Clustering]({{site.url}}/{{site.baseurl}}/core_app/pivot/web_application/dashboard/clustering.md) methodology.

Number of dimension are theoretically unlimited. However, as your dataset get bigger and bigger when you add new dimensions, you may want to limit yourself to a set of 3 to 8 dimensions, just for performance reasons.

> **Tip:** Datama PIVOT is a tool that can help you in selecting and understanding the dimensions you’re selecting.

> **Warning:** Datama JOURNEY requires at least a 'Journey' column within its dimensions. See [Journey Source]({{site.url}}/{{site.baseurl}}/core_app/journey.md) for more details.
