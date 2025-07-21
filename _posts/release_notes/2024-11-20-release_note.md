---
feed: release_note
title:  "2024-11-20"
date:   2024-11-20 12:00:00 +0200
layout: post
description: |
  More and more data! 💥<br>
  Latest release allows to analyse bigger datasets with the ability to connect directly to full bigquery tables or cluster and aggregate directly in Datama Prep.<br>
  Also, webhooks brings the capability to trigger Datama's notification on demand 🥳<br>
  Check our full release note to see what's new! 🔥 <br>
---

* **Marketplace extension** (aka "Datama Light")
  * Datama Compare is now a **certified visual on Power BI** marketplace. This means that Microsoft has audited the source code, tested the extension and finally certified that the extension meets the highest data security standards. As a reminder, in Datama Light, no data is sent to Datama Servers and Power BI extension could work without internet access
  * Qlik Extension has been improved to be able to handle large datasets
  * Tableau Viz extension is now upgraded to latest version of Tableau API. This ensure better consistency of columns naming between Datama and Tableau, and larger dataset management
  * Marketplace extension documentation has been updated for all extensions and data visualisation solutions. Video Tutorials has also been generated. Check our [extension section]({{site.url}}/{{site.baseurl}}/extensions/how-to-use/index.html) to learn more.

* **Datama Prep**
  * [Beta 🧪] **Table Connect in Big Query** block now allows to connect Datama to an entire Table in Prep instead of a specific SQL query. This means that you can connect in Prep to a full table and then define filters and comparison directly in Datama Solutions (Compare, Detect etc.). Under the hoods, Datama will then pull just the required data from BQ for the analysis you are asking for and pre-aggregate dimension to reduce the size of the data. 
  * [Beta 🧪] You can now compute **clustering fields** in Datama Prep, within the "Clean" object. Clustering Fields are computed based on any column of your dataset and allow to group unique values into buckets using several methodologies such as Long Tail Aggregation, Regression Partitionning etc. [See all clustering methods]({{site.url}}/{{site.baseurl}}/core_app/new/prep/clustering#clustering-methods)
  * [Beta 🧪] **Aggregation block** is now available in Prep. This block allows to group by a set of keys and aggregate a set of metrics using aggregation methods such as SUM, MEAN, COUNT_DISTINCT etc
  * Facebook Ads connector is now available again

* **Exports**
  * On top of pre defined frequency for Datama Exports to messaging apps (Slack, Emails, Teams), Datama now allows you to get a **webhook** and call that webhook to trigger the flow from any external tool. This means that you can trigger Datama's notification when your data is ready and not only on a predefined time. For instance, you could send email alerts as soon as Google Analytics Data is uploaded in BigQuery, using Airflow or GCP Workflow.


* **General**
  * **Date inputs** in all solutions (for comparison and filters) have been improved. You can now edit directly in text mode, and select presets that will stay saved with your use case (e.g. "Last Week" and "Previous period" will remain last week even if you have latest data in the data source).
  * You can now use your own API key for Open AI to enhance comments using ChatGPT. Just set this up in the credential page of your organisation. This key can be shared with the full organisation
