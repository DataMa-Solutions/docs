---
title: Detailed View
description: Detailed View is a group of 4 tabs. See below articles for details on each tab.
layout: page
---

> This chapter is stil in construction in the solution (see old version of DataMa to get information about the Detailed View)


<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/pivot/images/workinprogress.jpg" style="width:250px; height:auto;"/></center>


Detailed View is a group of 4 tabs. See the articles below for details on each tab:

* [Simple Stat](#simple-stat)
* [Flow](#flow)
* [Relative](#relative)
* [Data](#data)  <span style="color:red"> (Chapter in construction)</span>

<br>

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/detailed_view.png"  style="width:1000px;">



<br>

## <b> Simple Stat </b>

The Simple Stat tab is a graph allowing you to visualize various information on the steps of your customer journeys:

* Frequency: number of time your metric appears on average.
* Appearance: presence probability of your metric in journey. 
* Length: Average journey length when your metric appears

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Simple_stat.png"  style="width:1000px;">


<br>

## <b> Flow </b>

The Flow tab is a graph allowing you to visualize previous points and next points for a chosen touch point (Point in Detailed View Filter) on a choosen metric (Metric in Detailed View Filter).

If Compare Mode is activated, then then End Dimension will be represented.
Green represents positive variation between Start and End, while red represents negative variation between Start and End.

The size of the flow shown is related to the percentage of the metric flowing from one touch point to the other, in sequential order. 

**<u>Example:</u>**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/flow.png"  style="width:1000px;">

<br>

## <b> Relative </b>

Relative is another way to display the [Flow]({{site.url}}/{{site.baseurl}}/core_app/journey/web_application/dashboard/detailed_view/flow) graph.


**Example:**

<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/Relative.png"  style="width:1000px;">

<br>

## <b> Data </b>


> The **Data Tab** is the table used to generate the other tabs of Detailed View.

With :

* **step:** name of the steps of customer journeys
* **startend:** start and end dimensions (selected in the menu)
* **Volume:** value of "Volume" (selected in the menu)
* **lastnext:** information used to create Flow


<img src="{{site.url}}/{{site.baseurl}}/core_app/new/journey/interface/images/data2.png"  style="width:1000px;">
