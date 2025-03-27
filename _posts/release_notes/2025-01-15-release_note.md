---
feed: release_note
title:  "2025-01-15"
date:   2025-01-15 12:00:00 +0200
layout: post
description: |
  Let's go for 2025! 🍾 <br>
  There is a lot going on this month, with great new features such as: <br>
  \t• Dimension helpers as a new free extension <br>
  \t• Workbook views allowing to save multiple versions of the same workbook <br>
  \t• Missing fields auto distribution to combine any dataset <br>
  Read the details of the release note to learn more. <br>
---

* **Marketplace extension** (aka "Datama Light")
  * One month after Compare, Datama Detect is now also **certified visual on Power BI** marketplace. This means that Microsoft has audited the source code, tested the extension and finally certified that the extension meets the highest data security standards. As a reminder, in Datama Light, no data is sent to Datama Servers and Power BI extension could work without internet access
  * [Beta 🧪] **Dimension helpers is a new extension available in preview** for all data viz tools (Tableau, Power Bi, Looker Studio, Qlik). This allows to visualize your data with multiple type of charts, from bar charts to mekko and "moves/ arrows" view. While this is a preview feature still under development, there are multiple advantages of testing this extension
    * All dimensions and metrics added to the chart are available in drop downs. No need to create parameters & calculated fields in your data viz tool to allow the final user to switch a dimension for breakdown or a metric to monitor. 
    * Different type of visualization are also available in dropdown to the final user, with beautiful animations switching from one view to another. This can give the final user the possibility to create an animated story.
    * Comparison can be defined on any available dimension in the chart, and that comparison dimension will be available as any other dimension. This allows to visualize in seconds the difference between two segments
    * Available visualization are conceived to match existing charts in Datama full app, which are the typical "smart" way a data analyst should look at numbers when analysing performance. 

* **Web application** 
  * [Beta 🧪] Workbook **Views** are now available. "Views" allow to save multiple version of settings within the same workbook. For instance, you could save one view filtered on one specific country and another for all countries. Or one view with a complex market equation, and another with a simplified market equation. You can easily create and switch from one view to another using the input right next to the workbook title. Also, you can decide which view is sent by which scheduler and the notification will point directly to the appropriate view.[Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/interface/header/header.html#views) 
  * Profile picture details: you can now add a picture to your profile and edit first and last name in the [profile](https://app.datama.io/a/dashboard/profile) section
  * Multiple bug fixes and UI/ UX improvements have been shipped, including an improvement of bottom right notifications UI and content. 
  
* **Datama Prep**
  * **Manual grouping** is now available as a clustering method in Clean Block. Manual grouping allows to define manually a set of values that should go in the same group, and give a name to that group. 
  * **Filling NULL values** is now an option in the "Append" block. This is a game changer when dealing with datasets that don't have the same dimensions. In one click, you can distribute any metric on any dimension, based on another metric distribution. For instance, you could distribute Revenue provided by a transactional datasource by Device, based on the distribution provided by a web analytics tool. This would then allow to filter and slice and dice by this dimension in Datama Solutions even on metrics using transactional revenues. [Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/refine_data.html#append) 
  * Table connect for Big Query now allows to select your **aggregation method for metrics**. For instance, you could COUNT DISTINCT UserId to have a metric of number of users. Just select the right aggregation in the drop down when selecting metrics in the table connect panel.
  * [Beta 🧪] Table connect for Big Query can now provide a **Dimension interest score** using same logic as in Datama Pivot, but leveraging live SQL connection: each dimension's deviation is evaluated based on selected metrics and dimensions with the biggest deviation have the highest score, meaning there is a big difference in selected KPIs between each segment of that dimension. 