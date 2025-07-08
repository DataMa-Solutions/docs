---
feed: release_note
title:  "2025-06-30"
date:   2025-06-30 12:00:00 +0200
layout: post
description: |
  June brings the heat, and so do our new features! 🔥 
  Here's what we've been cooking up this month:
  - 🎨 Modern design overhaul with rounded bars and gradient patterns and zoom capabilities
  - 🔍 New volatility testing for time series analysis in Datama Assess light
  - 🎯 Flexible anomaly detection with customizable last X points consideration
  - 📈 New Moves and Mekko chart displays in dimension helper
  Ready to explore these fresh features?
---

* **Marketplace extension** (aka "Datama Light") [1.3.24.0] 
  * Extension versioning is now also available for Tableau Viz Extension. This means that you can decide on the version you are using by selecting your version on the [extension page](https://app.datama.io/a/dashboard/my-products), in case you have highly exposed dashboards that you don't want to be impacted by latest Datama updates. 
  * All charts for Assess, Detect and Helpers have benefited from significant upgrades. 
    * In particular, **Modern design** has been introduced, with rounded bars, gradient patterns on filled areas, and lighter axes. 
    * Chart Zoom is also enabled, just hold left click down and define the area you want to zoom in.
  * **Dimension helper** now includes **new chart displays**: Moves and Mekko. These are great ways to visualize the same data from another angle, and align extension capabilities with Web app existing features.
  * **Assess** now includes "time series" **volatility** test. This allows you to compare a variation from one period to another vs. all other comparable variations in the dataset. If the variation is outside the usual distribution of previous variations, you can safely consider this variation as significant, hence requiring potential explanation. 
  * **Detect** has a new input to select the number of considered last points for flagging anomalies. Previously, you had only two choices: checking all points of dataset, or just the last one. Now that you can decide on how many points can be flagged, it becomes easy for instance to check only the latest 7 days of your dataset to be aware of biggest anomalies over the last week, on a report you are checking/sending on a weekly basis only.  


* **Web app** 
  * The web application benefits from improvements of Datama Light. In particular, Modern design is now in preview when you open the Dimension Helper panel. 
  * Multiple bug fixes and UI improvements have been deployed (incl. maximum number of workbooks shared, comparison of integers, download of dataset in Prep sub blocks... )

