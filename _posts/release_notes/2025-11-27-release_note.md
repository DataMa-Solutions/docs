---
feed: release_note
title:  "2025-11-27"
date:   2025-11-27 12:00:00 +0200
layout: post
description: |
  November delivers a fresh batch of features to warm up your analytics! 🍂
  - 🤖 AI magic: Generate datasets on demand and enhance comments with AI-powered rewording
  - 📅 Calendars (Beta): Connect events, associate with workbooks, and see them in Explore helpers
  - 🏪 Light 1.5.2.0: "Helper" rebranded as "Explore" with calendar support and faster loading
  - ⚡ Performance: Reduced extension sizes and layers for snappier experiences
  Ready to dive into November's updates?
---

* **Wep app**

  * [Beta 🧪]  **AI generation**: using Datama AI (or your own selected credentials on a specific LLM), we are continuing efforts to provide smart features on top of "AI generated market equation" released last month
    * **AI generated Dataset** is now available as a standard source block in Datama Prep. You can create a fake dataset just by prompting, and the system will return a full dataset and associated market equation. This allows you for instance to quickly brainstorm on a Datama use case, or prepare a demo for your stakeholders (internal or external)
    * **AI enhanced comments**: AI enhanced comments has been entirely revamped. Just type the ✨ icon next to any comment, and ask Datama AI to reword the comments using a prompt.
  
  * [Beta 🧪]  **Calendars**: a series of new features are available for early adopters. This contributes to a massive effort to take into account events as important information to explain your performance. See [dedicated documentation]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar.html)
    * **Calendar creation**: you can now connect or create manual calendars in your [calendar page](https://app.datama.io/a/dashboard/calendars). 
      * Calendars can be connected from any generic source already available in Datama Prep (GSheet, Google Calendar, BigQuery, Excel...)
      * A calendar is essentially a file with one line per event, with an event name and a start/ end date. Optionally a event type, scope and description. 
      * Connected calendars are imported in Datama on a regular schedule. You can decide the frequency when creating the calendar. 
    * **Calendar association with workbooks**: created calendars can be added to any workbook, depending of your interest. This can be done in the Datama block in Prep or in the header Data > Calendar
    * **Display calendars in helpers**: when added to a workbook, events from a calendar are displayed in [Datama Helpers]({{site.url}}/{{site.baseurl}}/core_app/new/interface/subheader/dimension_helper.html). For now events appear when using a date dimension as one of the breakdown dimension. 
    * **Context for AI enhanced comments**: By default, if calendars are added to the workbook, events included in considered periods will be automatically added as context to the prompt. This unlocks powerful use cases where the explanation of variations for instance are reworded given a known event from your connected calendars.

  * Multiple bug fixes and improvements have been released (performance improvement, date filtering, etc)  


* **Marketplace extension** (aka "Datama Light") [1.5.2.0]
  
  * Explore (aka "helper")
    * "Datama Helper" has been rembranded as "Datama Explore". This official release comes with [related documentation](extensions/datama-explore/datama-explore.html) and [demo videos](https://www.youtube.com/watch?v=sNHMq125kS8&list=PLkObjZ_yofKQqd1YjOQ97JJjxdPLfiJeH)

  * [Beta 🧪]  Calendars
    * **Events can now be displayed in Datama Explore**. Just as Datama Detect, you need to Enable Calendar in the Settings dedicated panel to define what needs to be displayed
    * Connected calendar in the web app (created in the [calendar page](https://app.datama.io/a/dashboard/calendars)) are now available for import in Datama Detect and Datama Explore. Note that this is feasible only for extensions allowed to call external end points, i.e. NOT in Looker Studio and Microsoft Certified Power BI extensions.

  * Multiple bug fixes and improvements have been released. In particular, number of layers and size of extensions have been significantly reduced, which should result in faster loading time in most data viz tools. 
  
   
