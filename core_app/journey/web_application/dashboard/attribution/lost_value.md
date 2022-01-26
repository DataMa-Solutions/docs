---
title: Lost Value
description: The Lost tab is a graph allowing you to visualize the lost value (simulated) of the various steps of the customer journey.
layout: page
---

The Lost tab is a graph allowing you to visualize the lost value (simulated) of the various steps of the customer journey.

The lost value is computed on Journeys that bring no value. For each non valuable journey, a "theoretical value" is computed based on the selected attribution model and previously computed [value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/feasability) of each touch point, and this theoretical value is considered as lost due to the last touch point of the considered journey.

![lost_value_concept]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/images/Lost_Value_Concept.png)

You will be able to quickly identify the steps presenting the biggest lost.

Two parameters are used in order to build this graph:

* X axis is [point]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

* Y axis is lost [values]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

**Example:**

![lost_value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/images/lost_value.png)

The biggest lost  is "Goal_Step2" then "Search" , "Offer"...
