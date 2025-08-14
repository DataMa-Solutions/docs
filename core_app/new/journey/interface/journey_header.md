---
title: Journey - Settings
description: The header in Datama Journey helps you manipulate and refine your Use Cases
layout: new-page
scope: Datama/saas/journey
keywords: full app journey interface header
---

<br>

> The header in Datama Journey helps you manipulate and refine your Use Cases

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_header.jpg">

<br>

Find here the main elements of the solution Header in Datama Journey:

<br>

<!-- <b>General settings:<b><br>
- [Journey Separator](#journey-separator)

<br> -->
<!-- <b>Sunburst:<b><br>
- [Reverse Journey](#reverse-journey)
- [Display exits in Sunburst](#display-exits-in-sunburst)
- [Simplify Sunburst](#simplify-sunburst)
- [Maximum Number of steps in Sunburst](#maximum-number-of-steps-in-sunburst)

<br> -->
<!-- <b>Attribution:<b><br>
- [Attribution](#attribution)
- [Model](#model)

<br> -->
<!-- <b>Advanced settings:<b><br>
- [Journey Deduping](#journey-deduping)
- [Maximum Number of Points analysed](#maximum-number-of-points-analysed)
- [Analyse Sequences](#analyse-sequences)

<br> -->
<!-- <b>Basic settings<b><br>
- [Comparison](#comparison)
- [KPI](#kpi)

<br> -->

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_settings.png">

<br/>

# 1. General settings
<br>

## 1.1. Choose column containing Path for Journey Analysis

You can choose which column of your dataset to do the journey analysis.

## 1.2. Journey Separator

By using the text input, you can change the seperator between steps of your journeys. Initially, the separator is "-".

**From**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_from.png"/></center>

**To**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_to.png"/></center>

<br>

# 2. Sunburst
<br>

## 2.1. Reverse Journey

By activating Reverse Journey, you can display the users' reverse journeys. This is useful to know where they come from.

<br>

## 2.2. Display exits in Sunburst

By default, journey exits are displayed. It shows the proportion of people who have exited the journey.

<br>

## 2.3. Simplify Sunburst

By activating the dropdown menu, you can simplify your journeys by removing duplicate journeys and removing duplicate steps in journeys.

This is very useful to simplify your display and decrease computation time.

## 2.4. Maximum Number of steps in Sunburst

By default, only 6 steps of user journeys are represented. This can be changed by modifying this setting.

<br>

# 3. Attribution
<br>

## 3.1. Attribution

To accelerate the time to run the analysis, you can deactivate the attribution part.

<br>

## 3.2. Model

By using the dropdown menu, you can choose your attribution model and thus consider various distributions of your money in the various steps of your journeys.

<br>

# 4. Advanced settings
<br>

## 4.1. Journey Deduping

>Attribution must be activated

By using the dropdown menu, you can simplified your journeys by removing duplicates journeys or removing duplicates steps in journeys.
This is very usefull to simplify your display and decrease computation time.

<br>

## 4.2. Maximum Number of Points analysed

By default, the algorithm will analyse the top 50 steps in your <i>journey</is> column.

<br>

## 4.3. Analyse Sequences

Instead of analysing steps, you can toggle this setting to analyse sequences of steps

For example, <span style="color:red">Search-Product-Cart</span> contains 3 touch points: <span style="color:red">Search</span>, <span style="color:red">Product</span> and <span style="color:red">Cart</span>, and when <i>Sequences<i> is activated it will become 2 sequences <span style="color:red">Search-Product</span> and <span style="color:red">Product-Cart</span>

<br>

# 5. Basic settings
<br>

## 5.1. Comparison

Datama Journey can be used with a comparison. To activate this mode, select a dimension and the element you want to compare. Each graph and the comments will be in Compare mode, reflecting the difference of the elements you are comparing.

<br>

## 5.2. KPI

In Datama Journey, there is only one ratio to be defined to run the module. This ratio will be used to understand the performance (Numerator) and the volume (Denominator).
