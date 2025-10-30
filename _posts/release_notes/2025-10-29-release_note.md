---
feed: release_note
title:  "2025-10-29"
date:   2025-10-29 12:00:00 +0200
layout: post
description: |
  October highlights faster insights and cleaner visuals. 🍁
  - 🏪 Light 1.5.1.0: improved Compare interest score, richer Calendar hovers,
    sleeker Explore with consistent rounding, preserved colors, and legend hide/show
  - 🌐 Prep: GA4 "Prorate metrics totals" to prevent double counting
  - 🗓️ Schedulers: choose delivery days for mail/Slack/Teams
  - 🤖 Beta: AI‑generated market equation
  Ready for October’s upgrades?
---

* **Marketplace extension** (aka "Datama Light") [1.5.1.0]
 
  * Compare: 
    * Dimension Interest score calculation has been improved. In particular, segments with infinite variations are properly taken into account.

  * Calendar
    * Display of events have been improved: hovering an event now display the event date, type and description when activated on top of the estimated impact.
  
  * Explore (aka "helper")
    * Display of charts and animations have been significantly reshaped:
      * Top bar rounding has been aligned on all bars
      * Traces and colors are maintained during animation from one display to another 
    * **Hide element** in legend: by clicking on an element of the legend, you can dynamically hide or display it from the chart. This is convenient for instance if you are comparing a subset of dates and you don't want to display dates that are in your dataset but not in your comparison.

* **Wep app**
  * Google Analytics connector now include a **"Prorate metrics totals"** option. This allows to avoid double counting when using dimensions that double count some metric (e.g. sessions by product). See GA4 documentation to [learn more]({{site.url}}/{{site.baseurl}}/core_app/new/prep/interface/add_source.html#5-google-analytics-4) 
  * Schedulers (mail, slack, teams) now allow to customize the day of week for sending. Just tick or untick which day of the week you want your schedules to run, to avoid for instance sending alerts on weekends
  * [Beta 🧪]  **AI generated market equation**: you can leverage the power of AI to suggest a market equation based on the name of your columns and any context you might provide. Note that this doesn't share any data of your dataset, just the names of columns. You can use your own OpenAI licence key when defining your credentials. This is a first step towards broader initiative to ingest LLM advantages in data preparation and analysis.
