---
title: Prep - Direct query
description: Direct Query / Table connect
layout: page
scope: Datama/saas/prep
keywords: full app prep refine data
---


> **This section helps you to connect directly to your data warehouse in Datama Prep _without writing a query_**

# What is table connect ?
Table connect allow you to connect directly to your database and filter accordingly. <br>
The advantages of table connect
is to provide an easy to go interface and a **plug & play** way to connect your data to Datama. When filtering, the data
will be automatically changed according to the filter you set up and this works even in our solutions

# How does it work
## Available connectors
For now, table connect is only limited to:
* **BigQuery** .

## Step by step on BigQuery
First, connect to you bigquery account using your credentials, then, select a project and click on the **"Use Table Connect Instead"** button

### 1. Select Dimension and metrics
The first think you have to do, is to select dimensions and metrics that you would like to use from your database.
The filtering comes at the end.
When double-clicking on a pill, it'll transform it from a [dimension or metrics](/docs/core_app/new/prep/dataset.html#dimensions) to the opposite form
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_0.png"/></center>

### 2. Define your KPI & Metrics relation
Then you can define your KPI. [Please see this section for what a KPI is](/docs/core_app/new/prep/interface/metrics_relation.html)
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_1.png"/></center>

### 3. Filtering
This is where the True power of Table connect comes in.<br>
This feature allows you to select date range, comparison and much more and the data will **only** be downloaded when these
are set, limiting the size of the overall data.
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_2.png"/></center>
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_3.png"/></center>

### 3. Analysis
When you're done, just click on the done button and your analysis will popout.
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_4.png"/></center>

### 3 bis. Change in the analysis
You can change what you are analyzing directly on the overhead pannel (here for example, we changed the dimension we are analyzing to "Region" EU vs US)
<center><img style="padding:15px;border-radius:30px;border:1px solid lightgray;" src="{{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/images/direct_query/step_5.png"/></center>
You can also change these in Prep on the block too.

