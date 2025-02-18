---
feed: release_note
title:  "2025-02-19"
date:   2025-02-19 12:00:00 +0200
layout: post
description: |
  Check out what's new in February in Datama 🐓!
  Here are some of the coolest features 😎:
  - 📉 Find hidden anomalies in a subset of your data in viz extensions
  - ❄️ Connect directly to tables in Snowflake
  - ⌛ Save 20% computation time leveraging optimized clustering
  And much more!
---


* **Marketplace extension** (aka "Datama Light")
  * Datama **Detect** now offers the ability to **identify outliers within any sub segment of multiple dimensions**. For instance, using a location dimension, Datama could find an anomaly on a given KPI for a specific country, while the overall average is not abnormal. Datama will score the interest of each anomaly and show you the most impacting ones first.
  * The Dimension helper extension has been improved with clearer labeling and enhanced experience when switching from one type of visualization to another. As a reminder, the "Dimension helper" extension allows the final user to decide autonomously which dimensions and metrics they want to analyze and the type of visualization that makes sense for their story.

* **Datama Prep** on the Web app
  * **"Table Connect" mode is now available for Snowflake** in addition to BigQuery. This means that you can now connect Datama directly to a full table in Snowflake, and let Datama pull the appropriate data for your analysis, depending on your inputs of dates, filters, market equation and clustering settings.
  * [Beta 🧪] **"Optimized clustering"** is now activated by default for beta users. This allows to create the "Other" buckets on "Prep" side instead of computing it on every solution computation, which typically **saves about ~20% of run time on large datasets**.

* **Datama Solutions**
  * In Datama Compare, multiple improvements have been implemented, including a better display of KPI tree text.
  * In Datama Journey, the colors are now better aligned between slides, and the "Journey" column is no longer required to access the analysis. Make sure you have the proper structure of data so that it is relevant.

* **Documentation**
  * The documentation now has a proper table of contents for long pages, and the navigation pane is automatically opened on the current page.
