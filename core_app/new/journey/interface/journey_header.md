---
title: Journey Header
description: The header in DataMa Journey helps you manipulate and refine your Use Cases
layout: page
---

<br>

> The header in DataMa Journey helps you manipulate and refine your Use Cases

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_header.jpg">

<br>

Find here the main elements of the solution Header in DataMa Journey: 

- [Comparison](#comparison)
- [Filters](#filters)
- [KPI](#kpi)
- [Analysis Sequence](#analyse-sequences)
- [Journey Separator](#journey-separator)
- [Maximum Number of Points analysed](#maximum-number-of-points-analysed)
- [Maximum Number of steps in Sunburst](#maximum-number-of-steps-in-sunburst)
- [Attribution](#attribution)
- [Model](#model)
- [Simplify Sunburst](#simplify-sunburst)
- [Simple Stat](#simple-stat)

<br>

## Comparison

DataMa journey can be used with a comparison. To activate this mode select a dimension and the element you want to compare. Each graph and the comments will be in a Compare mode reflecting the difference of the elements you are comparing. 

<br>

## Filters

Filter any element you want to remove from the data. 

<br>

## KPI

In DataMa Journey, there is only one ratio to be defined to run the module. This ratio will be used to understand the performance (Numerator) and the volume (Denominator).

<br>

## Settings

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_settings.jpg">

### Analyse Sequences

Instead of analysing step you can toggle this settings to analyse sequences of steps

For example <span style="color:red">Search-Product-Cart</span> are 3 touch points <span style="color:red">Search</span>, <span style="color:red">Product</span> and <span style="color:red">Cart</span> and when <i>Sequences<i> is activated it will become 2 sequences <span style="color:red">Search-Product</span>  et <span style="color:red">Product-Cart</span>

### Journey Separator 

By using the text input, you can change the seperator between steps of your journeys. Initially, the separator is "-".

**From**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_from.png"/></center>

**To**

<center> <img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_separator_to.png"/></center>



### Maximum Number of Points analysed

By default, the algorithm will analysed the 50 top steps in your <i>journey</is> column. 

### Maximum Number of steps in Sunburst

By default only 6 steps of user journeys are represented. This can be changed by modifying this settings.

### Attribution

To accelerate the time to run the analysis, you can deactivate the attribution part.

### Model

By using the dropdown menu, you can choose your attribution model and thus consider various distributions of your money in the various steps of your journeys.

### Simplify Sunburst

By activating the dropdown menu, you can simplified your journeys by removing duplicates journeys and removing duplicates steps in journeys.

This is very usefull to simplify your display and decrease computation time.

### Simple Stat

The Simple Stat tab is a graph allowing you to visualize various information on the steps of your customer journeys:

- **Frequency**: number of time your metric appears on average.
- **Appearance**: presence probability of your metric in journey.
- **Length**: Average journey length when your metric appears