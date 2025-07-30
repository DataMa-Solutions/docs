---
feed: release_note
title:  "2025-03-27"
date:   2025-03-27 12:00:00 +0200
layout: post
description: |
  Marching toward innovation in March in Datama 🌱:
  - 📊 New tabular view for Dimension helper and anomaly list in Detect
  - 🔄 Flexible dates for GA4 & Piano to dynamically adapt data pulls
  - ⚡️ Optimized clustering for 20% faster performance
  - 🔌 Redshift table connect now available
  - 🛠️ Multiple improvements across extensions and web app
  Let us know what you think!
---


* **Marketplace extension** (aka "Datama Light")
  * **Tabular view** is now available for Detect and Dimension helper. This means that you can view your data in tabular mode and export easily to a CSV/ Excel file through simple copy pasting
  * This tabular view allows to display **Anomaly list** in Datama Detect. This allows you to view the top anomalies in a glimpse in your dataset and not only the first one. The anomalies are ranked by default based on the impact on the main result of your Market Equation.
  * Multiple bug and improvements have been released, including the ability to manage multiple extensions in the same page in Qlik

* **Datama Web app**
  * **Flexible dates** brings the capability to dynamically change the data pulled from GA4 & Piano sources depending on what you are analysing. For instance, if you are using a GA4 block pulling data to compare one month to the previous one in Compare and then you want to compare to previous year instead, you can just define the comparison in Datama Compare, and Datama will automatically adapt the data pulled in Prep to get whatever period you need.
  * Views are now generally available and not limited to beta users. As a reminder, "Views" feature allows to save certain set of settings in named views for the same workbook, easily accessible through drop down near the workbook name and re-usable to customise multiple exports in the same workbook.
  * [Beta 🧪] **"Optimized clustering"** is now activated by default for beta users. This allows to create the "Other" buckets on "Prep" side instead of computing it on every solution computation, which typically **saves about ~20% of run time on large datasets**
  * Multiple bug and improvements (dates presets logic, slack/ teams connection)

* **Datama Prep** on the Web app
  * **"Table Connect" mode is now available for Redshift** in addition to Snowflake and BigQuery. This means that you can now connect Datama directly to a full table in Snowflake, and let Datama pull the appropriate data for your analysis, depending on your inputs of dates, filters, market equation and clustering settings.
  * IS_NULL() function has been added to Calculated field in the clean block. List of available functions are available [here]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/calculated_fields.html)
