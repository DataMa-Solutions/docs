---
feed: release_note
title:  "2025-04-29"
date:   2025-04-29 12:00:00 +0200
layout: post
description: |
  April showers bring May flowers, and Datama's blooming with new features 🌸:
  - 📅 New Calendar connector for ICS files and Google Calendar integration
  - 🔢 Enhanced Calculated Fields with CASE() and REGEX_CONTAINS functions
  - 📊 Last year baseline comparison for anomaly detection
  - 🔐 Google Login enabled for improved authentication
  - 🛠️ Multiple improvements across extensions and web app
  Let us know what you think!
---

* **Datama prep** 
  * **Calendar connector** allows to import any ICS file from URL, including Google Calendar. This enables connecting to any calendar, including public calendar like holidays for instance, to enrich you dataset with calendar dimensions. This is a first step in Datama towards ingesting and interpreting events as potential explanation of business changes. [Read more]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html#calendar)
  * Calculated Fields now include a "CASE()" function (that works like CASE WHEN in SQL) and a "REGEX_CONTAINS" function

* **Datama detect** 
  * **Last year base line**: in the web app, Datama now allows to compare to the same date last year, or same ISO day, which enables use cases like "trigger anomaly when variation vs. last year of this KPI is >-10%". 

* **Datama Web app** 
  * Google Login is now enabled. This is a first step towards SSO enablement on our platform. 
