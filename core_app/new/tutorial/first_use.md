---
title: User onboarding
description: Successfully Run your 1st Datama report
layout: new-page
scope: Datama/saas
keywords: full app prep get started 1st first uses use
---

<br>

> Successfully run your 1st Datama report and learn how to use Datama Compare (and Datama Prep)

<br>

Let's start with a simple case, with an Excel dataset. There are multiple [other ways]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html) to load data. 

<br>

# <b>1. Step 1:</b> Check your data

Check your columns: 
- 1st column is what you want to compare (date, device, country…)
- Followed by the rest of the dimensions (if any)
- Afterwards come the metrics, quantitative columns which are summable (no ratio, %…) in the order of a funnel or what we call a [“Market Equation”]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/metrics_relation.html).

<br>

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_checkData.jpg"/></center>


Read more about the [source]({{site.url}}/{{site.baseurl}}/core_app/new/prep/dataset.html)

<br>

In the “Get inspired” section you will find examples of workbooks in multiple areas (A/B Tests, Business Performance, Marketing,…)

<br>

# <b>2. Step 2:</b> Create a new Workbook

Here is the Homepage of Datama with all the workbooks saved by you or your team

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_addSource.png"/></center>

Click "Add new workbook" to access Datama Prep and connect (or load) your data.

<br>

# <b>3. Step 3:</b> Add your source to Datama Prep

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_connectData.png"/></center>

<br>

From the list of available connectors, select the one that matches your data source

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_loadData.jpg"/></center>

<br>

# <b>4. Step 4:</b> Check your Column and define your steps

In the Datama output block:
- Select the columns that should be considered as Dimensions and Metrics
- Define the steps of your metric relations and refine your case  (adapt name, define a unit, or a threshold,…)

<br>

<div class="info-box"> Read more about the <a href="https://datama-solutions.github.io//docs/core_app/new/prep/interface/block_output.html" target="_blank">Output block</a>
</div>



<br>

<center><img style="width:75%;" src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_outputblock.png"/></center>

If your dataset is properly split between dimensions and metrics, and the metrics relations makes sense, you can select a Datama solution.

<br>

# <b>5. Bonus 💎:</b> Intro to waterfall analysis

## 5.1 What is a waterfall graph ? 

A waterfall allows you to quickly identify and understand the factors that cause your performance indicator to rise or fall from Start to End

<br>

- For example, this waterfall below is explaining the gap of -28,1% in Revenue from last year (45,549€) to this year (32,747€)
- Each step is a variation that explains the gap of -28.1% (mainly due to -11.7% of Users and -26.7% of Checkout/ Session)
- When the Checkout/ Sessions drops from -26.7% it has an impact of 12,298€ on Revenue

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusWaterfall.jpg"/></center>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusStartEnd.jpg"/></center>

<br>

After seeing the quantitative variation of your Revenue, it’s time to understand what causes this variation.

By clicking on a step, the graph displays the dimension that mainly explains the gap and the impact each element of this dimension has on that variation.

Each variation is split between mix and performance (see [article]({{site.url}}/{{site.baseurl}}/core_app/new/compare/model/dimension_analysis_mix.html) or the next section to understand the difference)

<br>

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusMixPerf.jpg"/></center>

<br>

## 5.2 The Moves « graph » is a representation of both Mix & Performance effect

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/tutorial/images/tuto_bonusMoves.jpg"/></center>

<br>

If you have any further questions to create your Workbook, <a href="https://Datama.fr/lets-talk/" target="_blank">please contact us</a>
