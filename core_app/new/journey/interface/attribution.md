---
title: Attribution
description: Attribution is a group of 5 tabs. See below articles for details on each tab.
layout: page
---

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/images/attribution.png)

Attribution is a group of 5 tabs. See below articles for details on each tab:

* [Priority](#priority)
* [Opportunity (Value)](#opportunity-value)
* [Feasability (Ratio)](#feasability-ratio)
* [Lost Value](#lost-value)
* [Data](#data)



### <b>Priority </b>


The Priority tab  is a graph allowing you to visualize the steps of your customers' journeys to improve first.

**Priority with Compare Mode**

Three parameters are used in order to build this graph:

* X axis is  [feasability]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/feasability)

* Y axis is  [opportunity]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/opportunity_value)

* The size of the circles is  [normalized value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)

**<u>Example:</u>**

![priority]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/priority.png)

Here, the first step to improve is "Search" because it has  the highest feasibility ([Ratio]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)) and opportunity ([Value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)).

** Priority without Compare Mode**

Three parameters are used in order to build this graph:

* X axis is  [opportunity]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/opportunity_value)

* Y axis is  [lost value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/lost_value)

* The size of the circles is  [normalized value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)

**<u>Example:</u>**

![priority]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/priority_without_compare.png)

Here, the first step to improve is "Goal_Step2" because it has a relatively low [opportunity]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/opportunity_value) for the lowest [lost value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/lost_value).

<br>

### <b>Opportunity (Value) </b>

The Opportunity tab is a graph allowing you to visualize the value attributed to each touch point of the customer journey based on selected attribution model.

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Attribution_Concept.png)

When Compare mode is ON, the gap of value between start and end is a good valuation of the opportunity behind improving the customer experience for a given touch point. It takes into account both the efficiency of the touch point (i.e. the value it brings each time it is seen) and the volume it represents (i.e. the number of users that actually are exposed to this touch point)

![attribution_comparison]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Value_Comparison.png)


**<u>Example:</u>**

![opportunity]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/opportunity.png)

The biggest opportunity  is "Search" then "Offer" , "Goal_Step2"...

You will be able to quickly identify the steps presenting the biggest opportunity thanks to our decreasing ranking.

Two parameters are used in order to build this graph:

* X axis is [point]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)

* Y axis is your [value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)


<br>


### <b>Feasability (Ratio)</b>

The Feasability tab is a graph allowing you to visualize the Value/ Volume of the various touch points of the customer journey.

You should read this ratio (value/ volume) as the value brought by a given touch point each time it's seen in journeys with value.

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Attribution_Concept.png)

Steps are ranked by ratio when Compare mode is OFF, and by gap of ratio when compare mode is ON.

When Compare mode is ON, the gap of ratio % could be interpretable as the "feasibility" of reducing the gap between start and end: if the gap is big, it's probably easier to reduce this gap by improving the experience of users on the considered touch point for the lower segment, since it seems feasible (based on the other Start End segment benchmark) to have a higher ratio.

You will be able to quickly identify the steps presenting the biggest feasability.

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Value_Comparison.png)

**<u>Example:</u>**

![feasability]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/feasability.png)

The biggest feasability  is "Goal_Step3" then "Blog" , "Goal_Step2"...

Two parameters are used in order to build this graph:

* X axis is [point]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)

* Y axis is your ratio ([Value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data) / [Volume]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data) )



<br>

### <b>Lost Value</b>

The Feasability tab is a graph allowing you to visualize the Value/ Volume of the various touch points of the customer journey.

You should read this ratio (value/ volume) as the value brought by a given touch point each time it's seen in journeys with value.

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Attribution_Concept.png)

Steps are ranked by ratio when Compare mode is OFF, and by gap of ratio when compare mode is ON.

When Compare mode is ON, the gap of ratio % could be interpretable as the "feasibility" of reducing the gap between start and end: if the gap is big, it's probably easier to reduce this gap by improving the experience of users on the considered touch point for the lower segment, since it seems feasible (based on the other Start End segment benchmark) to have a higher ratio.

You will be able to quickly identify the steps presenting the biggest feasability.

![attribution]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/Value_Comparison.png)

**<u>Example:</u>**

![feasability]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/feasability.png)

The biggest feasability  is "Goal_Step3" then "Blog" , "Goal_Step2"...

Two parameters are used in order to build this graph:

* X axis is [point]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data)

* Y axis is your ratio ([Value]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data) / [Volume]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/data) )



<br>


### <b>Data</b>


> The **Data Tab** is the table used to generate the others tabs of Attribution

With :

* **point:** name of the touch point of customer journeys
* **startend:** start and end dimensions (selected in the menu)
* **Volume:** value of "Volume" (selected in the menu), i.e. the number of times this touch point happened
* **Value:** value of "Value" (selected in the menu), i.e. the attributed value, based on selected attribution model
* **Value normalized:** same as before, but divided by total volume, to be able to compare touch point in Compare Mode

![data]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/attribution/images/data_attribution.png)
