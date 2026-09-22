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

For now, Datama Calendar is available in the [Datama Compare extension]({{site.url}}/{{site.baseurl}}/extensions/datama-compare/introduction.html) and the [Datama Detect extension]({{site.url}}/{{site.baseurl}}/extensions/datama-detect/introduction.html)
→ Find the detailed intregration [here]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_extension.html)

The feature is also available in both [Datama Compare]({{site.url}}/{{site.baseurl}}/core_app/new/compare/compare_interface.html) and [Datama Detect Web App]({{site.url}}/{{site.baseurl}}/core_app/new/detect/detect_interface.html).
→ Find the detailed intregration [here]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_webapp.html)

You can connect your dataset either through the [Web version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#21-Web-Solution) or directly via the [extension version]({{site.url}}/{{site.baseurl}}/core_app/new/interface/interface.html#22-Data-Visualisation-Tools-Extensions).

<br>

# 4. Some options about the Calendars

* When comparing dates in Datama Compare (both Light & Web app), Datama calculates an interest score for each event in the included calendars. This score is primarily determined by how much each event overlaps with the defined comparison periods.Details explanations on the interest score are available on this [page]({{site.url}}/{{site.baseurl}}/core_app/new/calendar/Calendar_interest.html)

* Additionally, in the web app, you can enable AI-enhanced comments to qualitatively assess the connection between events and numbers. The interest score is passed to your selected LLM to help determine which events are most relevant to surface.

<br>
