---
title: User onboarding
description: Successfully Run your 1st DataMa report
layout: page
---

<br>

> Successfully Run your 1st DataMa report and learn how to use DataMa Compare (and DataMa Prep)

<br>

Let's start with a simple case, with an excel dataset. There are multiple [other ways]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html) to load data. 

<br>
# <b>Step 1:</b> Check your data

Check your column : 
- 1st column is what you want to compare (date, device, country…)
- Followed by the rest of the dimensions (if any)
- And after come the metrics, quantitative columns which are summable (no ratio, %…) in the order of a funnel or what we call [“Market Equation”]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html).

<br>

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_checkData.jpg"/></center>


Read more about [source]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

In the “Get inspired” section you will find examples of workbook in multiple area (AB Test, Business Performance, Marketing,…)

<br>

# <b>Step 2:</b> Create new Workbook

Here is the Homepage of DataMa with all the workbook saved by you or your team

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_addSource.jpg"/></center>

Click to "Add new workbook" to access DataMa Prep and connect (or load) your data.

<br>

# <b>Step 3:</b> Add your source to Datama Prep

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_connectData.jpg"/></center>

<br>

In the list of available connectors select the one that match your data source

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_loadData.jpg"/></center>

<br>

# <b>Step 4:</b> Check your Column and define your steps

In the DataMa output block:
- Select the columns that should be considered as a Dimensions and Metrics
- Define the steps of your metric relation and refine your case  (adapt name, define a unit, or a threshold,…)

<br>

> Read more about the [Output block]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/block_output.html)

<br>

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_outputblock.jpg"/></center>

If your dataset is properly split between Dimensions and metrics, and the metrics relations makes sense, you can select a DataMa solution.


<br>

# <b>Bonus:</b> Check your Column and define your steps

## What is a waterfall graph ? 

A waterfall allows to quickly identify and understand the factors that cause your performance indicator to rise or fall from Start to End

<br>

- As for example, this waterfall below is explaining the gap of -28,1% in Revenue from last year (45,549€) to This year (32,747€)
- Each step is a variation that explain the gap of -28.1% (mainly due to -11.7% of Users and -26.7% of Checkout/ Session)
- When the Checkout/ Sessions drops from -26.7% it has an impact of 12,298€ in Revenue

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusWaterfall.jpg"/></center>


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusStartEnd.jpg"/></center>

<br>

After seeing the quantitative variation of your Revenue, it’s time to understand what causes this variation.

By clicking on a step, the graph displays the dimension that mainly explain the gap and the impact each element of this dimension has on that variation.

Each variation is split between mix and perf (see [article]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html) or next slide to understand the difference)

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusMixPerf.jpg"/></center>

<br>

## The Moves « graphe » is a representation of both Mix & Perf effect

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusMoves.jpg"/></center>


<br>

If you still need some information to create your Workbook, <a href="https://DataMa.fr/lets-talk/" target="_blank">just let us know</a>
