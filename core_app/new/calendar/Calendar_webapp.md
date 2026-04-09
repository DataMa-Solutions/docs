---
title: Calendar on WebApp
description: Calendar WebApp integration and set up
layout: new-page
scope: Datama/saas/Calendar
keywords: Calendar on WebApp
---

<br>

## 1. Associating a Calendar to a Workbook

Once created, calendars can be added to any workbook based on your analytical needs.

Calendar association can be configured from:
  * The Datama block in Prep
  <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/calendar_prep.png"/></center>
  * The workbook header: Data → Calendar
This enables selective use of calendars depending on their relevance to a given analysis.

## 2. Display in solution

**[All solutions] Displaying Events in Helpers**

When a calendar is attached to a workbook, its events become accessible in Datama Helpers.
Current Behavior
At this stage:
  * Events are displayed only when a date dimension is used as one of the breakdown (drill-down) dimensions.
  * Only events that fall within the selected analysis period are shown.
This brings important operational context directly into the user assistance interface.

**[Datama Compare] Display most interesting events in comments**

In Datama Compare, if you are comparing date periods, most interesting events will be diplayed at the bottom of your comment of the waterfall.
Event interest is based on overlap of events with Start and End Period
[Learn More]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_interest.html)

**[Datama Compare] AI-Enhanced Commentary with Event Context**

Calendars also enhance [enhanced comment](http://localhost:4000//docs/core_app/new/integration/AI/Introduction.html) by enriching prompts with real event context.
Automatic Context Injection
When calendars are linked to a workbook:
  * Events occurring during analyzed periods are automatically injected into AI prompts as context.
  * No dataset values are transmitted—only event names and dates are used.

Key Use Cases Enabled

This unlocks powerful scenarios such as:
  * AI explanations reworded according to a known event
  * Metric variations explained with reference to holidays, campaigns, outages, product launches, etc.
  * Context-aware narration of performance shifts, anomalies, or trends.


<br>
