---
feed: release_note
title:  "2024-02-21"
date:   2024-02-21 12:00:00 +0200
layout: post
description: |
  This week there was a major release on Datama app 🎉 
  Max size of datasets has been doubled from 200k to 400k lines, and performance & reactivity has been significantly improved!
  Also, anomaly detections now include a preview of the main KPI impact and Journey includes cool features on sunburst ☀️
app_notif: |
  Starting 2024 on good vibes 🎉
  Latest release includes significant performance improvements and Main KPI display in anomaly detection, among other exciting things
  Read the full [release note](https://datama-solutions.github.io/docs/release.html) to learn more!
---

* **General:**
    * **Backend uplift**: The backbone of Datama app has been significantly improved to enhance user experience and prepare upcoming development.
      Already available benefits include
        * Increased max size of datasets: Maximum number of lines for a dataset in prep increases **from 200k lines to 400k lines**
        * Significant **computing time optimization**:
            * In solutions such as Datama Compare, Detect etc, you save up to 2 seconds per compute (which means about -50% of the time for small datasets, -10% for bigger ones)
            * In Datama Prep and on the home page, loading time for credentials verifications, workbook listing etc has also been dramatically reduced
        * Improvement of cache logic:
            * Scheduled flows will load faster
            * Saving a draft flow does not require anymore to reload the whole use case
            * Switching from one solution to another, including to Datama Prep should load instantly
        * Enhanced robustness
            * Scheduled flows punctuality has been improved with faster and more robust execution
              👉 Please note that this release also comes with massive changes in the backend. While we are committed to reach 100% compatibility with previous use cases, you might
              experience some unexpected behaviors. Please notify ASAP you account manager.
    * Pinned workbooks can now be seen first on your homepage. Just click on the ⭐ next to the workbook name to set as favorite.

* **Extensions:**
    * [Beta 🧪] **Marketplace Extension** (aka 'Datama Light'): Compare waterfall is now available in preview in serverless, full front version. This means that the dynamic waterfall can work in your browser or favorite extension tool without sending data to Datama remote servers. [Learn more]({{site.url}}/{{site.baseurl}}/extensions/index.html)
      Key benefits are:
        * **Security**: Your data remains on your machine and is not sent to Datama. While our servers are fully secured and reliable, this additional possibility open the door to perform Datama analysis on sensitive data that should not leave your organization.
        * **Performance**: Used as an extension on small datasets provided by data vizualisation tools, the Compare analysis is performed literally instantly, with almost no computing time. Just drag and drop the metrics and dimensions you want to analyse and you get an immediate result
        * **Improved algorithm logic**: Datama Light extension includes new features that were not directly available in the full app, such as infinite number of comparison and improved calculation logic for dimension interest
          👉 'Datama Light' will be distributed through official marketplaces of data visualization tools. It is already available on [Power BI](https://appsource.microsoft.com/en-us/product/power-bi-visuals/datama1591255760056.datama-light-compare?tab=Overview). Contact your account manager to get a preview if you are already Datama client

* **Compare:**
    * Date picker selection has been improved to avoid unexepected closure of the calendar input
    * Waterfall quick actions (tree / waterfall view, switch axes etc) are now available in extensions

* **Detect:**
    * **Display Main KPI trend**: When looking for anomalies on all steps of your market equation, Datama displays in dotted lines the trend of the resulting main KPI of your market equation. In case of anomaly on one of those steps, the anomaly message also gives you a glimpse of the impact on the main KPI. This allows to understand quickly whether or not a anomaly on a sub-PI as an actual impact on the main KPI which is the one that matters for your business.
      This feature is enabled by default, but you can deactivate it in the settings with the "Compute Main KPI" toggle, decide not to display it on the main chart with the "f" icon on the top right corner. [Learn more]({{site.url}}/{{site.baseurl}}/core_app/new/detect/settings.html#display-Main-KPI-impact)
    * Display denominator: On the main chart of anomaly detection, a bar chart 📊 icon on the top right corner allows you to display instantly the denominator of a KPI that is a ratio. This allows to get a sense of where potential anomalies come, for instance on a website, if you see average conversion rate anomaly driven by a sudden increase of unqualified traffic (session, which is the denominator of conversion rate)

* **Journey:**
    * Reverse sunburst: you can now display the journey flow, but in reverse, from external to the center of the sunburst. This allows to understand what people do before reaching a touch point, instead of after, like you usually do in sunbursts
    * Display exits: now activated by default, this allows to display the "exit" of journeys on the sunburst, so that you can hover your mouse on it and get the share of volume exiting your journeys for a given path

* **Prep:**
    * Along with the backend uplift, most of the blocks of Datama Prep have been improved, which should result in more stable experience and enhanced capabiliies (e.g. new join options). However, for now, we have disabled the source connection to Gtrends, Facebook and Mail attachments, but these should come back in the next release