---
feed: release_note
title:  "2026-03-05"
date:   2026-03-05 12:00:00 +0200
layout: post
description: |
  🚀 Fresh from the oven — March release!
  - 🎯 New Event Interest Score in Compare — Datama now tells you which calendar events actually matter for your analysis. No more guessing, let the data do the talking!
  - 📊 Web app: BigQuery DateTime support, Mix columns in Compare Table view & a bunch of bug fixes
  - 🧩 Light extension: absolute deltas on Waterfall & KPI tree, smarter mix effect computation, and Explore now supports relative comparison
  - 🐛 + a healthy dose of UI polish and bug squashing across the board
---

* **Event interest score**
  * When comparing dates in Datama Compare (both Light & Web app), Datama calculates an interest score for each event in the included calendars. This score is primarily determined by how much each event overlaps with the defined comparison periods.
    * For example, an event that occurs in both periods being compared (e.g., Christmas Day when comparing December year-over-year) will receive a 0% score.
    * In contrast, an event that occurs only in the start period (e.g., a website bug happening during just one side of the comparison) will receive a higher score.
  * According to your "analysis depth" setting, **Datama highlights the events with the highest interest scores at the end of the Datama Compare comments section**.
  * Optionally, you can choose to display the interest score directly in the comments using the toggle in Calendar settings.
  * Additionally, in the web app, you can enable AI-enhanced comments to qualitatively assess the connection between events and numbers. The interest score is passed to your selected LLM to help determine which events are most relevant to surface.
  [Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_interest.html)

* **Web app**
  * Table connect (in particular BigQuery connector) now supports Date Time columns
  * Datama Compare Table view can now display Mix Start, Mix End and Mix Deltas as an option
  * Multiple bugs and UI fixes (including reload of certain settings, auto reset of AI conversations, BigQuery pagination etc)

* **Marketplace extension** (also known as "Datama Light") [1.5.5.0]
  * Datama Compare can now display absolute deltas of KPIs in top line of Waterfall and in KPI tree
  * Mix effect computation has been improved in Datama Compare: when computing mix effects on segments that don't exist in start or end of comparison, we now use the other side of the comparison as ratio default value, to avoid edge cases when computing impact
  * Datama Explore now supports relative comparison (using indexes of values, to move time window automatically over time)
  * Multiple UI improvement and bug fixes (including axis display improvement, zoom capabilities, style and hover review for explore, translation improvement etc)

