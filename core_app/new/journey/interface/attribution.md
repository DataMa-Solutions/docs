---
title: Attribution
description: Attribution is a group of 5 tabs. See articles below for details on each tab.
layout: page
---

<br>

Attribution is a group of 5 tabs. See details below on each tab:

* [Priority](#priority)
* [Opportunity (Value)](#opportunity-value)
* [Feasability (Ratio)](#feasability-ratio)
* [Lost Value](#lost-value)
* [Data](#data) 

<br>

## <b>Priority</b>


The Priority tab is a graph that allows you to visualize the steps of your customers' journeys to improve first.

**Priority with Compare Mode**

Three parameters are used in order to build this graph:

* The X-axis is [feasability](#feasability-ratio)

* The Y-axis is [opportunity](#opportunity-value)

* The size of the circles is [normalized value](#data)

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/journey_priority.jpg" style="width:1000px;">

Here, the first step to improve is "Search" because it has the highest feasibility ([Ratio]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)) and opportunity ([Value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)).

** Priority without Compare Mode**

Three parameters are used in order to build this graph:

* The X-axis is [opportunity]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/opportunity_value)

* The Y-axis is [lost value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/lost_value)

* The size of the circles is [normalized value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/images/priority_without_compare.png" style="width:1000px;">

Here, the first step to improve is "Goal_Step2" because it has a relatively low [opportunity]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/opportunity_value) for the lowest [lost value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/lost_value).

<br>

## <b>Opportunity (Value)</b>

The Opportunity tab is a graph allowing you to visualize the value attributed to each touch point of the customer journey based on the selected attribution model.


<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Attribution_Concept.png" style="width:750px;">

When Compare mode is ON, the gap of value between start and end is a good valuation of the opportunity behind improving the customer experience for a given touch point. It takes into account both the efficiency of the touch point (i.e. the value it brings each time it is seen) and the volume it represents (i.e. the number of users that are actually exposed to this touch point)

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Value_Comparison.png" style="width:750px;">


**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/opportunity.png" style="width:550px;">

The biggest opportunity is "Search" then "Offer" , "Goal_Step2"...

You will be able to quickly identify the steps presenting the biggest opportunity thanks to our decreasing ranking.

Two parameters are used in order to build this graph:

* The X-axis is [point]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

* The Y-axis is your [value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)


<br>

## <b>Feasability (Ratio)</b>

The Feasability tab is a graph allowing you to visualize the Value/Volume of the various touch points of the customer journey.

You should read this ratio (value/volume) as the value brought by a given touch point each time it's seen in journeys with value.

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Attribution_Concept.png" style="width:650px;">

Steps are ranked by ratio when Compare mode is OFF, and by gap of ratio when compare mode is ON.

When Compare mode is ON, the gap of ratio % could be interpretable as the "feasibility" of reducing the gap between start and end: if the gap is big, it's probably easier to reduce this gap by improving the experience of users on the considered touch point for the lower segment, since it seems feasible (based on the other Start End segment benchmark) to have a higher ratio.

You will be able to quickly identify the steps presenting the biggest feasability.

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Value_Comparison.png" style="width:750px;">

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/feasability.png" style="width:1000px;">

The biggest feasability is "Goal_Step3" then "Blog" , "Goal_Step2"...

Two parameters are used in order to build this graph:

* The X-axis is [point]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

* The Y-axis is your ratio ([Value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data) / [Volume]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data) )



<br>

## <b>Lost Value</b>

The Feasability tab is a graph allowing you to visualize the Value/Volume of the various touch points of the customer journey.

You should read this ratio (value/volume) as the value brought by a given touch point each time it's seen in journeys with value.

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Attribution_Concept.png" style="width:750px;">

Steps are ranked by ratio when Compare mode is OFF, and by gap of ratio when compare mode is ON.

When Compare mode is ON, the gap of ratio % could be interpretable as the "feasibility" of reducing the gap between start and end: if the gap is big, it's probably easier to reduce this gap by improving the experience of users on the considered touch point for the lower segment, since it seems feasible (based on the other Start End segment benchmark) to have a higher ratio.

You will be able to quickly identify the steps presenting the biggest feasability.

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Value_Comparison.png" style="width:850px;">

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/feasability.png" style="width:1000px;">

The biggest feasability is "Goal_Step3" then "Blog", "Goal_Step2"...

Two parameters are used in order to build this graph:

* The X-axis is [point]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

* The Y-axis is your ratio ([Value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data) / [Volume]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data) )



<br>


## <b>Data</b>


> The **Data Tab** is the table used to generate the others tabs of Attribution

With :

* **point:** name of the touch point of customer journeys
* **startend:** start and end dimensions (selected in the menu)
* **Volume:** value of "Volume" (selected in the menu), i.e. the number of times this touch point happened
* **Value:** value of "Value" (selected in the menu), i.e. the attributed value, based on selected attribution model
* **Value normalized:** same as before, but divided by total volume, to be able to compare touch points in Compare Mode

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/data_attribution.png" style="width:950px;">
