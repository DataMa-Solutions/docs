---
title: Calendar interest
description: Calendar interest concept and how to use it
layout: new-page
scope: Datama/saas/Calendar
keywords: Calendar interest score
---

<br>

# 1. What is Calendar interest score?

When comparing dates in Datama Compare (both Light & Web app), Datama calculates an interest score for each event in the included calendars. This score is primarily determined by how much each event overlaps with the defined comparison periods.

For example, an event that occurs in both periods being compared (e.g., Christmas Day when comparing December year-over-year) will receive a 0% score.

In contrast, an event that occurs only in the start period (e.g., a website bug happening during just one side of the comparison) will receive a higher score.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/compare_with_calendar_interest_score.png"/></center>

<br>

# 2. How activate calendar interest score?

You can choose to display the interest score directly in the comments using the toggle available in two different places:

First in your Prep set up, in the block output Datama when connecting calendars to the workbook:

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/calendar_interest_toggle_prep.png"/></center>

<br>

Else in Datama Compare go into the settings and open the Calendars section, you'll find the same menu as in Prep.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/calendar_interest_toggle_settings.png"/></center>

<br>

# 3. Additional parameter options

According to your "analysis depth" setting, Datama highlights the events with the highest interest scores at the end of the Datama Compare comments section.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/calendar_interest_depending_on_analysis_depth.png"/></center>

<br>

Additionally, in the web app, you can enable AI-enhanced comments to qualitatively assess the connection between events and numbers. The interest score is passed to your selected LLM to help determine which events are most relevant to surface.
