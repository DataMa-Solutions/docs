---
feed: release_note
title:  "2025-03-27"
date:   2025-03-27 12:00:00 +0200
layout: post
description: |
  Check out what's new in February in Datama 🌟!
  - 📉 Find hidden anomalies in a subset of your data in viz extensions
  - 🔄 Enhanced Dimension Helper with improved visualization switching
  - ❄️ Direct Snowflake table connections now available
  - 📊 Multiple date ranges support for GA4 and Piano
  - 📈 UI improvements in Compare and Journey modules
  Plus documentation enhancements with better navigation!
---


* **Marketplace extension** (aka "Datama Light")
  * Datama **Detect** now offers the ability to **identify outliers within any sub segment of multiple dimensions**. For instance, using a location dimension, Datama could find an anomaly on a given KPI for a specific country, while the overall average is not abnormal. Datama will score the interest of each anomaly and show you the most impacting ones first.
  * The Dimension helper extension has been improved with clearer labeling and enhanced experience when switching from one type of visualization to another. As a reminder, the "Dimension helper" extension allows the final user to decide autonomously which dimensions and metrics they want to analyze and the type of visualization that makes sense for their story.

* **Datama Prep** on the Web app
  * **"Table Connect" mode is now available for Snowflake** in addition to BigQuery. This means that you can now connect Datama directly to a full table in Snowflake, and let Datama pull the appropriate data for your analysis, depending on your inputs of dates, filters, market equation and clustering settings.
  * **Multiple date ranges** can now be defined in the same source bloc for both GA4 and Piano connectors. This avoids for instance the whole process of creating two blocs on GA4 (e.g. one for last year and the other for this year) and then append the two blocs togther. Additionnaly, you can create a "Date Range" column that can be used for comparison, to avoid pulling a Date dimension for instance. 

* **Datama Solutions**
  * In Datama Compare, multiple improvements have been implemented, including a better display of KPI tree text.
  * In Datama Journey, the colors are now better aligned between slides, and the "Journey" column is no longer required to access the analysis. Make sure you have the proper structure of data so that it is relevant.

* **Documentation**
  * The documentation now has a proper table of contents for long pages, and the navigation pane is automatically opened on the current page.
