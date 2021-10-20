---
title: Compare of Compare
description: This mode allows you to compare 2 waterfalls.
layout: page
---

## What it is:

Compare of Compare (<span style="color:red">CoC</span>): This mode allows you to compare 2 waterfalls.
The secondary waterfall is defined by turning Compare of Compare on (in settings) and then defining the start of your secondary waterfall (<span style="color:red">Start_CoC</span>) and the end of your secondary waterfall (<span style="color:red">End_CoC</span>)



In the backstage, DataMa will then run the same analysis for the 2 definitions of start and end, and then display the results of the secondary analysis in the background. Main output is :

* In the Waterfall « Chart », the secondary waterfall is displayed in the background
* In the Executive summary, the trend between secondary and primary analysis will be worded

## When to use it

Compare of Compare mode is particularly useful when you run regularly the same analysis for different periods of time.

We can take the example of this [dataset](https://docs.google.com/spreadsheets/d/1srtMlrShuK28z-ryDbn8dzpuaGJs_cXO5BLVT4Zyy7w/edit#gid=1243203565).

You’re in Week 3 2019, and you want to compare to Week 3 2018. Using DataMa Compare, you get this:

![Coc]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/images/Fist-step.jpg)

Now, the real question that you’re asking when you run this every week (so you ran this also in week 2) is: **how is that different from last week?**

This is where you activate Compare of Compare, and add Week 2 YoY analysis as secondary waterfall (yes, this assumes you also kept week 2 in the source you’re analysing).

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/images/CompareOfCompare-300x222.jpg"/></center>

And here are the results:

![Coc3]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/images/Exec-sum-CoC.jpg)

![Coc4]({{site.url}}/{{site.baseurl}}/core_app/compare/web_application/menu/images/Waterfall-CoC.jpg)
