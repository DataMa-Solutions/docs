---
feed: release_note
title:  "YYYY-MM-DD"
date:   YYYY-MM-DD 12:00:00 +0200
layout: post
---


* **General:**
    * [Beta 🧪] **Hourly alerting**: Datama now handles dataset with timestamps has a dimension, and allows scheduling emails at hourly frequency. This enables use cases such as anomaly detection on hourly basis, to flag any issue in your business as soon as it happens. This feature is available as a paid option - ask your customer success manager for early access <!--feature to be developed and tested-->

* **Extension:**
    * [Beta 🧪] **New Tableau extension**: New tableau extension gives access to the new UI in Tableau. Benefits includes access to all charts & comments of the new UI (including new waterfall with decision tree viz), simplified process to create extension, and higher flexibility to use case customization <!--documentation to be done-->
    * Performance and user experience of extensions have been improved, providing faster results and allowing demo mode for all extensions based on the new UI

* **Compare:**
    * Display of the new waterfall (activate it using the ⚙️ icon at top right of waterfall side) and tree view has been improved since beta release, with additional capabilities for customizing labels and layout

* **Pivot:**
    * **Clustering tree** is now available in the new UI, with enhanced vizualization. This helps you create clusters within your dataset accross multiple dimensions using regression tree machine learning <!--documentation to be done-->
    * **Numerator only** option makes Datama Pivot work on metrics that have no denominator. Just select the numerator and "1" as denominator in the KPI panel <!--To be checked-->

* **Detect:**
    * **New detection methods**: detection methods has been revamped and enriched, adding 3 user defined threshold methods to make anomaly detection more flexible. Use cases include for instance flagging any change of more than +-10% vs. same day of week. Please refer to the [detection method page]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detection_method.html) to learn more
    * The above feature include also a upgrade of anomaly detection inputs:
        * Ability to increase the confidence interval for anomaly detection in forecast and volatility method up to 99.9% (if you want to avoid having too many alerts sent by Datama detect)
        * The capacity to reduce the number of points for baseline calculation down to 1, which is particularly useful for threshold methods
        * A new input for type of points included in base line, whether it is all points, same day of week, or same hour

* **Prep:**
    * **Piano analytics connector**: Piano (ex AT Internet) connector is now available - you can get the data from Piano into Datama and analyse it there.[Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html#piano-analytics)
