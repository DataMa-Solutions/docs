---
feed: release_note
title:  "2024-07-22"
date:   2024-07-22 12:00:00 +0200
layout: post
description: |
  🎒Back to school!<br>
  Olympic games in Paris were cool. But we have almost cooler things to share: <br>
  Credentials sharing, radar chart, smart interval... don't miss latest features! <br>
---

* **Marketplace extension** (aka "Datama Light")
  * [Beta 🧪] Datama Light Compare waterfall automatic comments have been improved, and the UI for custom edits has been clarified. You can now clearly see the impact of your changes and the structure of available variables

* **General**
  * Organization administrators can now share their own personnal credentials with the entire organisation, so that people invited to the organisation can benefit from the admin access. This is useful for instance if as an admin you create a use case using your Big Query accesses and you want other users of your organization to get access to the workbook without having accesses to Big Query
  * Multiple fixes and UI improvement has been released, including the usage of your locale in the date picker calendar, starting weeks on Monday outside of the US 

* **Datama Detect**
  * Smart Interval is now activated by default on use cases using Observed volatility methodology. This allows to have more accurate lower bounds on ratios close to 0, where lower bounds used to be below or equal to 0, using theoretical standard deviation of Wilson method. [Lear more]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html#smart-interval). 
  * French Translation has also been created for anomaly notifications

* **Datama Pivot**
  * Radar Chart is now available in Pivot when analysing all steps of market equation: In one glance, you can see how each segment of a dimension performs on each KPI of your market equation and compare that performance to other segments using a radar chart (aka "Spider Chart"). Just click on the second tab of the first slide in Datama Pivot to test it!


