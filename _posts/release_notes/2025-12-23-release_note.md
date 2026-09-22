---
feed: release_note
title:  "2025-12-23"
date:   2025-12-23 12:00:00 +0200
layout: post
description: |
  December wraps up the year with polished features and smart improvements! ❄️
  - 📅 Calendars: Create events directly from extensions, Optimized large calendar handling and smarter AI token management
  - 📊 BigQuery: Dimension interest now available for Table Connect to assess relevance
  - 📈 Compare & Assess: Improved "Other" segment scoring and auto cumulative significance
  - ✨ UI polish: Refined buttons, notifications, and faster loading for large datasets
  Ready to unwrap December's enhancements?
---

* **Web app**

  * Calendar improvements
    * Large calendar handling: Long calendar integration has been optimized to speed up ingestion in Datama.
    * Reduced token limitations: Enhanced comment logic now better limits the size of AI calls when including large calendars.
  * Dimension interest on BigQuery Table Connect: You can now easily assess the relevance of dimensions for a given ratio when connecting to a BigQuery Table, using the Dimension Interest feature. Each dimension segment distributed over the given ratio will be processed using Datama Pivot logic to determine how relevant that dimension is in explaining the ratio.
  * Multiple bug fixes and UI improvements (design of "Create Workbook" button, look and feel of computation buttons and notifications, etc.)

* **Marketplace extension** (aka "Datama Light") [1.5.3.0]
  
  * Calendar
    * **Create event from Extension** (Tableau, PowerBi, QlikSense) on Detect: You can now right-click in the Datama Detect extension on a given day to create a new event. This event will be stored in the Datama Calendar database, under a specific calendar name (e.g., "From Tableau" if created in Tableau), so you can access it from any other use case leveraging Calendar features. This is a major milestone towards making Datama your go-to app to store and use company events.
    * **Get Calendar for Looker Studio**: Looker Studio extensions can now use web app-connected calendars, which was not possible before. However, please note that it's not yet possible to create events from a Looker Studio extension.
  * Compare
    * "Other" segments' interest scores have been reviewed: they are now considered less important than other segments, since they often represent a long tail of unknown segments.
  * Assess auto cumulative significance has been activated: this allows Datama Assess to automatically accumulate previous days when evaluating statistical significance, which is particularly useful when reviewing AB test performance over time.
  * Multiple bug fixes and UI improvements have been shipped, including optimized loading times for large datasets.
