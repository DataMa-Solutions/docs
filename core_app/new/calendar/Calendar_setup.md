---
title: Calendar setup
description: How to build/connect a calendar in Datama
layout: new-page
scope: Datama/saas/Calendar
keywords: Calendar setup
---

<br>

# How to create your own calendar analysis in WebApp solutions?

This section explains how to create and integrate a calendar within the Datama Web App. It covers the steps required to create or connect a calendar, associate it with a workbook, and use events to enrich analysis and AI insights.

# 1.What is a calendar?

You’ll need a dataset that includes both **event information** and at least one **business KPI** to measure impact.

At minimum, your dataset should contain:

📅 **Event date** – when the event occurred

🏷️ **Event name** – short label for easy identification

Optionally

🧩 **Event type** – category (e.g., campaign, public holiday, internal launch)

📝 **Event description** – additional context about the event

📊 **Metric (KPI)** – a performance indicator to analyze (e.g., revenue, traffic, conversion rate)

You can enrich it with other dimensions (e.g., country, channel, product category) to make your analysis more granular. Below is an example.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/dataset_calendar.png"/></center>


If you don’t already have an event dataset, you can easily create one by building a calendar table.
If just needs a event date and an event name

# 2.Process in Datama

The feature is available in [Datama Compare]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_interface.html).
→ Find the detailed intregration [here]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_webapp.html)

You can connect your dataset either through the [Web version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#21-Web-Solution) or directly via the [extension version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#22-Data-Visualisation-Tools-Extensions).

You can connect your dataset either through the [Web version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#21-Web-Solution) or directly via the [extension version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#22-Data-Visualisation-Tools-Extensions).

You can now create or connect calendars directly from your Calendars page.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/create_calendar_datama.png"/></center>

## 3. Create a calendar

You have two options to create a calendar.

First with "Create Manual Calendar", this option allow you to add some events directly in the Datama calendar interface.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/create_manual_calendar.png"/></center>

Else if you already have a calendar in another source, you can use the second option "Connect Calendar"

Calendars can be connected from any source already supported by Datama Prep import connectors, including:
  * Google Sheets™ (GSheet)
  * Google Calendar
  * BigQuery
  * Excel
  * … and other generic file or event sources.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/connect_calendar_select_source.png"/></center>

Then you have to configure your source (credentials, selecting the URL or repository depending on the source you choose), a preview of the loaded data is available:

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/connect_calendar_configure_source.png"/></center>

Having the data, you can now select which columns correspond to the differents fields used by Datama to integrate your calendar.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/connect_calendar_fields_mapping.png"/></center>

Last, when configuring a calendar, you can select the import frequency, allowing you to control how often events are refreshed.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/connect_calendar_schedule refresh.png"/></center>

A summarized view is available to validate all the settings.

<br>
