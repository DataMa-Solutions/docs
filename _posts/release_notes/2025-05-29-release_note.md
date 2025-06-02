---
feed: release_note
title:  "2025-05-29"
date:   2025-05-29 12:00:00 +0200
layout: post
description: |
  People might say that the month of May is not made for working, especially in France 🐓 
  Well, we did try 💪. Here is a summary of latest features:
  - 📊 Enhanced anomaly detection with new baseline methods and threshold options
  - 📈 Calendar Events integration for better trend line storytelling
  - 🔍 Extended Assess capabilities with Bayesian inference and significance testing
  - 🛠️ Extension versioning for better control and stability
  - 📅 New dimension helper with advanced visualization capabilities
  Go, give it a try!
---

* **Marketplace extension** (aka "Datama Light") [1.3.23.0] 
  * **Extension versioning** You can now access previous versions of Datama's extensions and freeze the version you are using in your data viz tool by using a specific version downloaded on the [extension page](https://app.datama.io/a/dashboard/my-products). This is particularly useful in case your extensions are embedded on highly exposed dashboards, and you want to make sure that the latest release doesn't introduce unexpected features/bugs to your final users. Note that this versioning is not available for Tableau Viz extensions for now (coming next month) 
  * Detect extension now includes **new methods for anomaly detection**: baseline can now be computed using only the same day of week or same day of year and you can flag anomalies based on simple thresholds (relative or absolute), as in the web application. [Learn more]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html)
  * [Beta 🧪] You can now display **Calendar Events** right in Datama detect trend lines. For now, this works only if you have your events available in your extension dataset, with at least a Date column, and an event label. By activating the Calendar capabilities in the settings, you will be able to see the events or periods annotated on your trend lines. This is particularly useful for storytelling, to explain why a KPI behaves differently. In the medium term, Datama will allow you to create new events directly in the extension, and explain variations or spot anomalies based on these events.
  * Assess extension capabilities have been extended: 
    * You can compute **significance for all subsegments** of your dataset. Datama brings first the dimension with the most significant segments based on "significant score". As in the web app, the significance can be cumulated across segments, for instance if you are looking at significance of variations of an AB test and you want to see the significance of everything that happened before a given date. 
    * **Bayesian inference** for significance calculation has been added. Default chart displays the chances of B outperforming A if you are comparing A and B. 

* **Web app**
  * [Beta 🧪] **New dimension helper** is now available in the helper panel, by selecting the new version in the top right panel of filters or comparisons. This new version has several advantages:
    * Split any dimension by any other dimension, including Comparison dimension. 
    * Visualize two metrics at the same time, within both steps of the market equation and original metrics of the dataset
    * Switch within multiple preset charts available, for now "Bar + Lines", "Overlay" and "Moves" and more to come. Beautiful animations switching from one view to another help to understand what's being visualized.   
    * Table view on the right side allows you to quickly access the tabular view of the data, and export to spreadsheet through one-click CSV copy paste
    * Faster calculation and improved legend vs. previous helper
  * Multiple bug fixes and UI improvements have been shipped (including loader on the home page, improvements of colors in web app, optimized clustering for dimensions, custom step name for detect, and bug fixes on preset dates) 
  * Finally, we are both happy and sad at the same time to say goodbye to the old UI of Datama, which was previously available on solutions.datama.fr. This interface was on sunset since about a year and was not used anymore. All traffic has been redirected to app.datama.io

