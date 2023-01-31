---
title: Prep - Output
description: This section helps you to prepare your data to be analysed in the Output block
layout: page
---

<br>


In DataMa Prep, the DataMa block allows you to interface the resulting data source from your stream with our augmented analysis solutions.

This block allows you to set the following options:
- Your metrics and dimensions
- Your metrics relationship (market equation)

In order to facilitate your work, DataMa automatically detects the metrics and dimensions of your data source.

To do this we proceed as follows: 
By reading the columns from left to right, we detect which is the last column to have the type 'Text', all the columns that precede this one will be defined as dimensions, all those following will be defined as metrics. 


The first dimension will be used as a [comparison dimension.]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_comparison.html)

Learn more on this by reading details on: 
- [Metrics Relation]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/metrics_relation.html)
- [Unit]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/unit.html)
- [Threshold]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/threshold.html)
- [Focused and excluded dimensions]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/included-excluded_dimensions.html)


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/prep_blockOutput.jpg"/></center>



<br>

> Find [here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html) how you need to format your dataset for DataMa solutions
