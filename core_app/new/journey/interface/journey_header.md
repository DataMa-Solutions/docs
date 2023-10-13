---
title: Journey - Settings
description: The header in DataMa Journey helps you manipulate and refine your Use Cases
layout: page
---

<br>

> The header in DataMa Journey helps you manipulate and refine your Use Cases

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_header.jpg">

<br>

Find here the main elements of the solution Header in DataMa Journey:

<br>

<b>General settings:<b><br>
- [Journey Separator](#journey-separator)

<br>
<b>Sunburst:<b><br>
- [Simplify Sunburst](#simplify-sunburst)
- [Maximum Number of steps in Sunburst](#maximum-number-of-steps-in-sunburst)

<br>
<b>Attribution:<b><br>
- [Attribution](#attribution)
- [Model](#model)

<br>
<b>Advanced settings:<b><br>
- [Journey Deduping](#journey-deduping)
- [Maximum Number of Points analysed](#maximum-number-of-points-analysed)
- [Analyse Sequences](#analyse-sequences)

<br>
<b>Basic settings<b><br>
- [Comparison](#comparison)
- [KPI](#kpi)

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_settings.jpg">

<br/>

# <b>General settings<b>
<br>

## Journey Separator

By using the text input, you can change the seperator between steps of your journeys. Initially, the separator is "-".

**From**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_from.png"/></center>

**To**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_to.png"/></center>

<br>

# <b>Sunburst<b>
<br>

## Simplify Sunburst

By activating the dropdown menu, you can simplify your journeys by removing duplicate journeys and removing duplicate steps in journeys.

This is very useful to simplify your display and decrease computation time.

<br>

## Maximum Number of steps in Sunburst

By default, only 6 steps of user journeys are represented. This can be changed by modifying this setting.

<br>

# <b>Attribution<b>
<br>

## Attribution

To accelerate the time to run the analysis, you can deactivate the attribution part.

<br>

## Model

By using the dropdown menu, you can choose your attribution model and thus consider various distributions of your money in the various steps of your journeys.

<br>

# <b>Advanced settings<b>
<br>

## Journey Deduping

>Attribution must be activated

By using the dropdown menu, you can simplified your journeys by removing duplicates journeys or removing duplicates steps in journeys.
This is very usefull to simplify your display and decrease computation time.

<br>

## Maximum Number of Points analysed

By default, the algorithm will analyse the top 50 steps in your <i>journey</is> column.

<br>

## Analyse Sequences

Instead of analysing steps, you can toggle this setting to analyse sequences of steps

For example, <span style="color:red">Search-Product-Cart</span> contains 3 touch points: <span style="color:red">Search</span>, <span style="color:red">Product</span> and <span style="color:red">Cart</span>, and when <i>Sequences<i> is activated it will become 2 sequences <span style="color:red">Search-Product</span> and <span style="color:red">Product-Cart</span>

<br>

# <b>Basic settings<b>
<br>

## Comparison

DataMa Journey can be used with a comparison. To activate this mode, select a dimension and the element you want to compare. Each graph and the comments will be in Compare mode, reflecting the difference of the elements you are comparing.

<br>

## KPI

In DataMa Journey, there is only one ratio to be defined to run the module. This ratio will be used to understand the performance (Numerator) and the volume (Denominator).
