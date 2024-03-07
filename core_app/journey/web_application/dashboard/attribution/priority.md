---
title: Priority
description: The Priority tab  is a graph allowing you to visualize the steps of your customers' journeys to improve first.
layout: page
scope: shiny
---

The Priority tab  is a graph allowing you to visualize the steps of your customers' journeys to improve first.

# Priority with Compare Mode

Three parameters are used in order to build this graph:

* X axis is  [feasability]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/feasability)

* Y axis is  [opportunity]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/opportunity_value)

* The size of the circles is  [normalized value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

**Example:**

![priority]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/images/priority.png)

Here, the first step to improve is "Search" because it has  the highest feasibility ([Ratio]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)) and opportunity ([Value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)).

# Priority without Compare Mode

Three parameters are used in order to build this graph:

* X axis is  [opportunity]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/opportunity_value)

* Y axis is  [lost value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/lost_value)

* The size of the circles is  [normalized value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/data)

**Example:**

![priority]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/images/priority_without_compare.png)

Here, the first step to improve is "Goal_Step2" because it has a relatively low [opportunity]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/opportunity_value) for the lowest [lost value]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/attribution/lost_value).
