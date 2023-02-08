---
title: Detailed View
description: Detailed View is a group of 4 tabs. See below articles for details on each tab.
layout: page
---

![detailed view]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/images/detailed_view.png)

Detailed View is a group of 4 tabs. See below articles for details on each tab:

* [Simple Stat](#simple-stat)
* [Flow](#relative)
* [Relative](#relative)
* [Data](#data)

<br>

### <b> Simple Stat </b>

The Simple Stat tab is a graph allowing you to visualize various information on the steps of your customer journeys:

* Frequency: number of time your metric appears on average.
* Appearance: presence probability of your metric in journey. 
* Length: Average journey length when your metric appears

**<u>Example:</u>**

![simple_stat]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/detailed_view/images/Simple_stat.png)


<br>

### <b> Flow </b>

The Flow tab is a graph allowing you to visualize previous point and next point for a choosen touch point (Point in Detailed View Filter) on a choosen metric (Metric in Detailed View Filter).


If Compare Mode is activated then End Dimension will be represented.
Green represents positive variation between Start and End while red represents negative variation between Start and End.

The size of the flow shown is related to the percentage of the metric flowing from one touch point to another, in sequential order. 

**<u>Example:</u>**

![flow]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/detailed_view/images/flow.png)

<br>

### <b> Relative </b>

Relative is an other way to display [Flow]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/detailed_view/flow) graph.


**Example:**

![relative]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/detailed_view/flow/images/Relative.png)

<br>

### <b> Data </b>


> The **Data Tab** is the table used to generate the others tabs of Detailed View.

With :

* **step:** name of the steps of customer journeys
* **startend:** start and end dimensions (selected in the menu)
* **Volume:** value of "Volume" (selected in the menu)
* **lastnext:** information used to create Flow


![data]({{site.url}}/{{site.baseurl}}/core_app/old/journey/web_application/dashboard/detailed_view/images/data2.png)
