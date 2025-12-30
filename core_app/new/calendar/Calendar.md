---
title: Calendar
description: Calendar concept and how to use it
layout: new-page
scope: Datama/saas/Calendar
keywords: Calendar
---

<br>

# 1. What’s Calendar for?
Datama Calendar lets you weave key business activities and events into your existing datasets to uncover their impact—and correlations—on the KPIs you track. It’s fully customizable: integrate anything from public holiday calendars to bespoke operational milestones, all in a way that matches your processes.

<br>

# 2. How does it help for business insights?

The final showcase would be like below, highlighting how different business or operational events may have positively or negatively influenced your KPI trends. For example, in this case, we’re tracking traffic variations for an e-commerce platform and overlaying the events calendar to reveal correlations between company activities and traffic performance.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/scenario_calendar.png"/></center>

This concept can be applied across many industries to uncover how time-based events shape performance. Here are some examples of insights by sector:

🛍️ **E-commerce & Retail**

Use case: Impact of public holidays and paydays on sales & conversion rate
* Calendar trigger: National holidays, Black Friday, payday weekends.
* KPI impact: Revenue spikes, conversion rate variations, stockouts.
* Example insight: “Sales conversion increased +18% on payday weekends; average basket dropped right after due to post-sale fatigue.”

🧳 **Travel & Hospitality**

Use case: Tracking booking trends around school vacations & long weekends
* Calendar trigger: Public holidays, school breaks, long weekends.
* KPI impact: Booking volume, occupancy rate, cancellation rate.
* Example insight: “Bookings surged +25% one week before Easter holiday — suggesting earlier promo pushes could optimize occupancy.”

🏦**Banking & Finance**

Use case: Customer engagement linked to fiscal calendar & tax deadlines
* Calendar trigger: Tax season, fiscal year-end, salary deposit dates.
* KPI impact: Loan demand, savings deposits, customer support volume.
* Example insight: “Loan applications peaked 10 days before tax filing deadline — automated campaigns should anticipate this window.”

📱 **Tech & SaaS**

Use case: Feature adoption around release calendars and product updates
* Calendar trigger: Product launches, version updates, roadmap releases.
* KPI impact: Retention, usage frequency, support tickets.
* Example insight: “User engagement rose 30% after Q2 release; NPS dipped slightly due to increased bug reports.”

🍽️ **Food & Beverage / QSR**

Use case: Sales variation by seasonal menus & local events
* Calendar trigger: Seasonal menu launches, city festivals, sports events.
* KPI impact: Average order value, traffic, promo ROI.
* Example insight: “Burger sales jumped during local football finals; limited-edition menus linked to event calendars boosted repeat orders.”

🏥 **Healthcare & Pharma**

Use case: Appointment volume and medication demand vs. public health campaigns
* Calendar trigger: Flu season, vaccination campaigns, awareness days.
* KPI impact: Appointment bookings, medicine stock, campaign ROI.
* Example insight: “Flu vaccination awareness week drove a 45% increase in appointments — confirming impact of seasonal campaign alignment.”

🎓 **Education & E-learning**

Use case: Course sign-ups around academic or certification cycles
* Calendar trigger: Semester start dates, certification exam windows.
* KPI impact: Enrollment rate, completion rate, ad campaign ROI.
* Example insight: “Registrations doubled during pre-exam months — scheduling ads around certification calendars maximizes conversions.”

🏗️ **Manufacturing & Supply Chain**

Use case: Production and delivery KPIs affected by public holidays or supplier calendars
* Calendar trigger: National holidays, plant maintenance weeks, logistics shutdowns.
* KPI impact: Lead time, production output, on-time delivery.
* Example insight: “Delivery delays increase by 12% during summer holidays; planning supplier shifts could smooth performance.”

<br>

# 3. How to create your own calendar analysis?

## 3.1.Dataset you need

You’ll need a dataset that includes both **event information** and at least one **business KPI** to measure impact.

At minimum, your dataset should contain:

📅 **Event date** – when the event occurred

🏷️ **Event name** – short label for easy identification

🧩 **Event type** – category (e.g., campaign, public holiday, internal launch)

📝 **Event description** – additional context about the event

📊 **Metric (KPI)** – a performance indicator to analyze (e.g., revenue, traffic, conversion rate)

You can enrich it with other dimensions (e.g., country, channel, product category) to make your analysis more granular. Below is an example.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/dataset_calendar.png"/></center>


If you don’t already have an event dataset, you can easily create one by building a calendar table.

Use Date as the primary key, then left join it to your existing KPI table.

This way, every KPI record is linked to the corresponding event (if any) on that date — allowing you to visualize and analyze KPI variations alongside business or operational events.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/dataset_leftjoin.png"/></center>

## 3.2.Process in Datama

For now, Datama Calendar is available exclusively in the [Datama Detect extension]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/introduction.html).

 The feature will soon be released in both [Datama Compare]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_interface.html) and [Datama Detect Web App]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detect_interface.html).

You can connect your dataset either through the [Web version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#21-Web-Solution) or directly via the [extension version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#22-Data-Visualisation-Tools-Extensions).

### 3.2.1. Web App version

You can now create or connect calendars directly from your Calendars page.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/create_calendar_datama.png"/></center>

#### 3.2.1.1. Create a calendar

You have two options to create a calendar.

First with "Create Manual Calendar", this option allow you to add some events directly in the Datama calendar interface.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/interface/images/create_manual_calendar.png"/></center>

Else if you already have a calendar in another source, you can use the second option "Connect Calendar"

Calendars can be connected from any source already supported by Datama Prep import connectors, including:
  * Google Sheets (GSheet)
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

#### 3.2.1.2. Associating a Calendar to a Workbook

Once created, calendars can be added to any workbook based on your analytical needs.

Calendar association can be configured from:
  * The Datama block in Prep
  <center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/calendar_prep.png"/></center>
  * The workbook header: Data → Calendar
This enables selective use of calendars depending on their relevance to a given analysis.

#### 3.2.1.3. Display in solution

**Displaying Events in Helpers**

When a calendar is attached to a workbook, its events become accessible in Datama Helpers.
Current Behavior
At this stage:
  * Events are displayed only when a date dimension is used as one of the breakdown (drill-down) dimensions.
  * Only events that fall within the selected analysis period are shown.
This brings important operational context directly into the user assistance interface.

**AI-Enhanced Commentary with Event Context**

Calendars also enhance AI-generated insights by enriching prompts with real event context.
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

### 3.2.2. Extension version

If you’re using Datama Compare or Datama Detect as an extension in Power BI, Looker Studio, Tableau, or Qlik, you can perform the data join directly within your BI tool before connecting it to the extension.

Then, follow the standard setup process:

 * Add the Datama Detect extension
 * Configure your dimensions and metrics
 * Display the results (see the guide How to use Datama Detect extension [here]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/introduction.html))

By default, Datama Calendar is disabled.

To visualize events on your charts, simply activate the Calendar option, then select the appropriate fields — Event name, Event description, and Event type — in the settings panel.

<center><img src="{{site.url}}/{{site.baseurl}}/core_app/new/calendar/images/enableCalendar.gif"/></center>

<br>
